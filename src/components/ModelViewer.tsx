import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Bounds, useBounds } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { Loader2, RotateCcw } from 'lucide-react';

// Configure local offline Draco WebAssembly decoder path
useGLTF.setDecoderPath('/draco/');

interface ModelProps {
  modelPath: string;
  onLoaded: () => void;
}

const CeramicMesh: React.FC<ModelProps> = ({ modelPath, onLoaded }) => {
  const { scene } = useGLTF(modelPath, '/draco/');

  useEffect(() => {
    if (scene) {
      onLoaded();
    }
  }, [scene, onLoaded]);

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
};

interface FramerProps {
  modelPath: string;
  resetCount: number;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}

const FramerAndReset: React.FC<FramerProps> = ({ modelPath, resetCount, controlsRef }) => {
  const bounds = useBounds();
  const { camera, invalidate } = useThree();

  // Initial auto-fit when model loads or changes
  useEffect(() => {
    bounds.refresh().fit();
  }, [modelPath, bounds]);

  // When user clicks "Reset View", re-center and frame accurately to this model's size
  useEffect(() => {
    if (resetCount === 0) return;

    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }

    // Orient camera towards front-facing viewpoint
    camera.position.set(0, 0.05, 1);
    camera.lookAt(0, 0, 0);

    // Re-calculate bounding box and fit snugly without zooming out
    bounds.refresh().fit();
    invalidate();
  }, [resetCount, bounds, camera, controlsRef, invalidate]);

  return null;
};

const CanvasLoader = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-gallery-muted z-10 pointer-events-none bg-gallery-bg/80">
    <Loader2 className="w-8 h-8 animate-spin text-gallery-primary mb-2" />
    <span className="text-xs uppercase tracking-widest text-gallery-text font-bold">Loading 3D Model...</span>
  </div>
);

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewerComponent: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [renderedModel, setRenderedModel] = useState<string | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const isRendered = renderedModel === modelPath;

  const handleLoaded = useCallback(() => {
    setRenderedModel(modelPath);
  }, [modelPath]);

  // IntersectionObserver: Only mount WebGL canvas once user scrolls near it
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleReset = () => {
    setResetCount((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] bg-gallery-bg rounded-lg overflow-hidden border border-gallery-border select-none"
    >
      {/* Loading state indicator */}
      {!isRendered && <CanvasLoader />}

      {/* Interaction Shield while mesh loads */}
      {!isRendered && (
        <div 
          className="absolute inset-0 z-20 cursor-wait" 
          aria-hidden="true" 
        />
      )}

      {/* Instantiate WebGL when user scrolls near the viewer */}
      {hasEnteredView && (
        <Suspense fallback={null}>
          <Canvas
            key={modelPath}
            dpr={[1, 1.5]}
            frameloop="demand"
            gl={{
              powerPreference: 'high-performance',
              antialias: true,
              stencil: false,
              depth: true
            }}
            camera={{ position: [0, 0.1, 1], fov: 40, near: 0.05, far: 50 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Highly performant multi-point studio lighting */}
            <ambientLight intensity={0.9} />
            <hemisphereLight intensity={0.5} groundColor="#a3a3a3" color="#ffffff" />
            <directionalLight position={[4, 6, 4]} intensity={1.2} />
            <directionalLight position={[-4, 2, 2]} intensity={0.6} color="#ffffff" />
            <directionalLight position={[0, 4, -4]} intensity={0.7} />
            <directionalLight position={[0, -5, 1]} intensity={0.4} color="#ffffff" />

            {/* Automated centering & view fitting */}
            <Bounds fit margin={1.25}>
              <CeramicMesh 
                modelPath={modelPath} 
                onLoaded={handleLoaded} 
              />
              <FramerAndReset 
                modelPath={modelPath} 
                resetCount={resetCount} 
                controlsRef={controlsRef} 
              />
            </Bounds>

            {/* 360° Orbiting Controls */}
            <OrbitControls
              ref={controlsRef}
              makeDefault
              target={[0, 0, 0]}
              enablePan={false}
              enableZoom={isRendered}
              enableRotate={isRendered}
              minDistance={0.1}
              maxDistance={6.0}
              minPolarAngle={0}
              maxPolarAngle={Math.PI}
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>
      )}

      {/* Reset View Button */}
      {isRendered && (
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={handleReset}
            className="px-2.5 py-1 rounded text-xs font-bold bg-gallery-card text-gallery-text border border-gallery-border hover:bg-gallery-bg transition-colors shadow-2xs flex items-center gap-1.5"
            title="Reset to default camera orientation"
            aria-label="Reset orientation"
          >
            <RotateCcw size={13} />
            <span>Reset View</span>
          </button>
        </div>
      )}

      {/* UI Interaction Cue */}
      {isRendered && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-gallery-text/90 px-3.5 py-1 rounded text-gallery-bg text-[11px] font-bold flex items-center gap-2 shadow-xs">
          <span>Click & Drag to Orbit 360°</span>
          <span className="opacity-60">•</span>
          <span>Scroll to Zoom</span>
        </div>
      )}
    </div>
  );
};

export const ModelViewer = React.memo(ModelViewerComponent);
