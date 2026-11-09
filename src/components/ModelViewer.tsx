import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Bounds, useBounds, Environment } from '@react-three/drei';
import { Loader2 } from 'lucide-react';

interface ModelProps {
  modelPath: string;
  onLoaded: () => void;
}

const CeramicMesh: React.FC<ModelProps> = ({ modelPath, onLoaded }) => {
  const { scene } = useGLTF(modelPath);

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

const AutoFramer: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const bounds = useBounds();

  useEffect(() => {
    bounds.refresh().clip().fit();
  }, [modelPath, bounds]);

  return null;
};

const CanvasLoader = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-gallery-muted z-10 pointer-events-none bg-gallery-bg/50 backdrop-blur-xs">
    <Loader2 className="w-8 h-8 animate-spin text-gallery-terracotta mb-2" />
    <span className="text-xs uppercase tracking-widest font-medium">Loading model...</span>
  </div>
);

interface ModelViewerProps {
  modelPath: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(false);
  }, [modelPath]);

  return (
    <div className="relative w-full h-full min-h-[440px] bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#E5DFD7] rounded-2xl overflow-hidden border border-gallery-sand select-none">
      
      {/* Loading state indicator */}
      {!isRendered && <CanvasLoader />}

      {/* Interaction Shield while bounding box & mesh calculate */}
      {!isRendered && (
        <div 
          className="absolute inset-0 z-20 cursor-wait" 
          aria-hidden="true" 
        />
      )}

      <Suspense fallback={null}>
        <Canvas
          key={modelPath}
          camera={{ position: [0, 0.2, 1.2], fov: 40 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* 1. Subtle, balanced environmental reflections for realistic ceramic sheen */}
          <Environment preset="city" environmentIntensity={0.65} />

          {/* 2. Soft Ambient base to ensure no pitch-black surfaces */}
          <ambientLight intensity={0.9} />

          {/* 3. Key Light (Top-Front Right): defines primary shape and relief */}
          <directionalLight position={[4, 6, 4]} intensity={1.2} />

          {/* 4. Fill Light (Left): softens harsh cast shadows on opposite side */}
          <directionalLight position={[-4, 2, 2]} intensity={0.7} color="#F5EFEB" />

          {/* 5. Rim / Back Light: carves out edges and silhouette */}
          <directionalLight position={[0, 4, -4]} intensity={0.8} />

          {/* 6. Dedicated Underside Light: illuminates bottom when tilted upward */}
          <directionalLight position={[0, -5, 1]} intensity={0.6} color="#FAF7F2" />

          {/* Automated centering & view fitting */}
          <Bounds fit clip observe margin={1.25}>
            <CeramicMesh 
              modelPath={modelPath} 
              onLoaded={() => setIsRendered(true)} 
            />
            <AutoFramer modelPath={modelPath} />
          </Bounds>

          {/* Unlocked 360° Orbiting */}
          <OrbitControls
            makeDefault
            target={[0, 0, 0]}
            enablePan={false}
            enableZoom={isRendered}
            enableRotate={isRendered}
            minDistance={0.2}
            maxDistance={3.2}
            minPolarAngle={0}        // Look straight down from above
            maxPolarAngle={Math.PI} // Full 180° range: look straight up from underneath
            dampingFactor={0.05}
            autoRotate={isRendered}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>

      {/* UI Interaction Cue */}
      {isRendered && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none bg-gallery-dark/75 backdrop-blur-md px-3.5 py-1 rounded-full text-white text-[11px] font-medium flex items-center gap-2 shadow-xs">
          <span>Full 360° orbit</span>
          <span className="text-gallery-sand/60">•</span>
          <span>Pinch/Scroll to zoom</span>
        </div>
      )}
    </div>
  );
};

useGLTF.preload('/models/ritual-wine-container.glb');