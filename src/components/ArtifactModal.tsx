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
      <div className="relative bg-white border border-gray-300 rounded-lg w-full max-w-6xl xl:max-w-7xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded bg-gray-200 text-gray-800">
              <ImageIcon size={18} />
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-gray-700">
              {artifact.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body: Expanded Two-Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          
          {/* Left Column: Enlarged 2D Image Viewport for Laptop Screens */}
          <div className="lg:col-span-8 p-5 sm:p-7 lg:p-8 flex flex-col justify-center bg-gray-100 border-b lg:border-b-0 lg:border-r border-gray-200 min-h-[420px] lg:min-h-[580px] xl:min-h-[660px]">
            <div className="w-full h-full min-h-[380px] lg:min-h-[540px] xl:min-h-[620px] wireframe-pattern border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 sm:p-10 text-center text-gray-600 relative">
              
              <div className="w-20 h-20 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-4 shadow-2xs">
                <ImageIcon size={44} className="text-gray-500" />
              </div>

              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider block mb-1">
                IMAGE PLACEHOLDER
              </span>

              <h4 className="text-lg sm:text-xl font-bold text-gray-900 max-w-lg mb-2">
                {artifact.imagePlaceholderLabel || artifact.name}
              </h4>
            </div>
          </div>

          {/* Right Column: Curatorial Provenance Panel */}
          <div className="lg:col-span-4 p-6 lg:p-8 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 block font-semibold">
                  {artifact.artistOrCulture}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 leading-snug">
                  {artifact.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{artifact.period}</p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="space-y-2.5 text-xs border-y border-gray-200 py-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Medium:</span>
                  <span className="font-semibold text-gray-900 text-right max-w-[200px]">{artifact.medium}</span>
                </div>
                {artifact.dimensions && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dimensions:</span>
                    <span className="font-semibold text-gray-900">{artifact.dimensions}</span>
                  </div>
                )}
                {artifact.estimatedValue && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Estimated Value:</span>
                    <span className="font-bold text-gray-900">{artifact.estimatedValue}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-semibold text-gray-900">{artifact.category}</span>
                </div>
              </div>

              {/* Curator Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Curatorial Provenance & Description
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {artifact.description}
                </p>
              </div>
            </div>

            {/* Bottom Verification & Source */}
            <div className="pt-5 border-t border-gray-200 flex items-center justify-between text-xs">
              {/* <div className="flex items-center gap-1.5 text-gray-600">
                <ShieldCheck size={16} />
                <span>Verified Exhibition Asset</span>
              </div> */}
              {artifact.sourceUrl && (
                <a
                  href={artifact.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-gray-900 hover:underline"
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
