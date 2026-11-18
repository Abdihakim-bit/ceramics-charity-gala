import React, { useEffect } from 'react';
import { X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import type { ArtifactItem } from '../data/featuredArtifacts';

interface ArtifactModalProps {
  artifact: ArtifactItem | null;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 transition-opacity"
        onClick={onClose} 
      />

      {/* Expanded Modal Dialog Window for Laptops and Desktops */}
      <div className="relative bg-gallery-card border border-gallery-border rounded-lg w-full max-w-6xl xl:max-w-7xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gallery-border bg-gallery-bg flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded bg-gallery-secondary/30 text-gallery-text">
              <ImageIcon size={18} />
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gallery-text">
              {artifact.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-gallery-muted hover:text-gallery-text hover:bg-gallery-card transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body: Expanded Two-Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          
          {/* Left Column: Enlarged 2D Image Viewport */}
          <div className="lg:col-span-8 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-gallery-bg/50 border-b lg:border-b-0 lg:border-r border-gallery-border min-h-[420px] lg:min-h-[580px] xl:min-h-[660px]">
            {artifact.imageUrl ? (
              <div className="w-full h-full max-h-[560px] xl:max-h-[640px] flex items-center justify-center">
                <img
                  src={artifact.imageUrl}
                  alt={artifact.name}
                  className="max-h-[540px] xl:max-h-[620px] w-auto max-w-full object-contain rounded-lg shadow-md"
                />
              </div>
            ) : (
              <div className="w-full h-full min-h-[380px] lg:min-h-[540px] xl:min-h-[620px] bg-gallery-bg border-2 border-dashed border-gallery-border rounded-lg flex flex-col items-center justify-center p-6 sm:p-10 text-center text-gallery-muted relative">
                <div className="w-20 h-20 rounded-full bg-gallery-card border border-gallery-border flex items-center justify-center mb-4 shadow-2xs">
                  <ImageIcon size={44} className="text-gallery-muted" />
                </div>
                <span className="text-xs uppercase font-bold text-gallery-muted tracking-wider block mb-1">
                  EXHIBITION ASSET
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-gallery-text max-w-lg mb-2">
                  {artifact.imagePlaceholderLabel || artifact.name}
                </h4>
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-4 p-6 lg:p-8 bg-gallery-card flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-gallery-muted block font-semibold">
                  {artifact.artistOrCulture}
                </span>
                <h3 className="text-2xl font-bold text-gallery-text mt-1 leading-snug">
                  {artifact.name}
                </h3>
                <p className="text-xs text-gallery-muted mt-1">{artifact.period}</p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="space-y-2.5 text-xs border-y border-gallery-border py-4">
                <div className="flex justify-between">
                  <span className="text-gallery-muted">Medium:</span>
                  <span className="font-semibold text-gallery-text text-right max-w-[200px]">{artifact.medium}</span>
                </div>
                {artifact.dimensions && (
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Dimensions:</span>
                    <span className="font-semibold text-gallery-text">{artifact.dimensions}</span>
                  </div>
                )}
                {artifact.estimatedValue && (
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Estimated Value:</span>
                    <span className="font-bold text-gallery-text">{artifact.estimatedValue}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gallery-muted">Category:</span>
                  <span className="font-semibold text-gallery-text">{artifact.category}</span>
                </div>
              </div>

              {/* Curator Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gallery-text mb-2">
                  Curatorial Description
                </h4>
                <p className="text-xs sm:text-sm text-gallery-muted leading-relaxed">
                  {artifact.description}
                </p>
              </div>
            </div>

            {/* Bottom Verification & Source */}
            <div className="pt-5 border-t border-gallery-border flex items-center justify-between text-xs">
              {artifact.sourceUrl && (
                <a
                  href={artifact.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-gallery-primary hover:underline font-medium"
                >
                  <span>Source Archive</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
