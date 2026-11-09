import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Box } from 'lucide-react';
import { ModelViewer } from './ModelViewer';

export interface ArtifactData {
  id: string;
  name: string;
  culture: string;
  period: string;
  medium: string;
  description: string;
  modelPath: string;
  sourceUrl?: string;
}

interface ArtifactModalProps {
  artifact: ArtifactData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifact, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !artifact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gallery-dark/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative bg-gallery-bg border border-gallery-sand rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gallery-sand/70 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-gallery-terracotta/10 text-gallery-terracotta">
              <Box size={16} />
            </span>
            <span className="text-xs uppercase font-semibold tracking-wider text-gallery-muted">
              Smithsonian 3D Digitization Archive
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gallery-muted hover:text-gallery-dark hover:bg-gallery-sand/50 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body: Two-Column Museum Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* Left: 3D Canvas Viewport */}
          <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-center min-h-[420px] lg:min-h-[540px]">
            <ModelViewer modelPath={artifact.modelPath} />
          </div>

          {/* Right: Curatorial Provenance Panel */}
          <div className="lg:col-span-5 p-6 lg:p-8 bg-white/70 border-t lg:border-t-0 lg:border-l border-gallery-sand flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gallery-terracotta font-semibold">
                  {artifact.culture}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-gallery-dark font-bold mt-1">
                  {artifact.name}
                </h3>
                <p className="text-xs text-gallery-muted mt-1 font-medium">{artifact.period}</p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs border-y border-gallery-sand/70 py-4">
                <div>
                  <span className="text-gallery-muted block mb-0.5">Medium / Material</span>
                  <span className="font-medium text-gallery-dark">{artifact.medium}</span>
                </div>
              </div>

              {/* Curator Notes */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gallery-dark mb-2">
                  Description
                </h4>
                <p className="text-xs sm:text-sm text-gallery-muted leading-relaxed">
                  {artifact.description}
                </p>
              </div>
            </div>

            {/* Verification & Smithsonian Open Access Link */}
            <div className="pt-6 mt-6 border-t border-gallery-sand/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-gallery-celadon font-medium">
                <ShieldCheck size={16} />
                <span>CC0 Public Domain Asset</span>
              </div>
              {artifact.sourceUrl && (
                <a
                  href={artifact.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-gallery-terracotta hover:underline font-medium"
                >
                  <span>Smithsonian Record</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};