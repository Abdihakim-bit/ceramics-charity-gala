import React from 'react';
import { Image as ImageIcon, ArrowRight, ExternalLink } from 'lucide-react';
import { ModelViewer } from './ModelViewer';
import { preview3DModel, preview2DPlaceholders } from '../data/featuredArtifacts';

interface PreviewSectionProps {
  onGoToGallery: () => void;
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({
  onGoToGallery
}) => {
  return (
    <section id="ceramics-preview" className="py-20 bg-gray-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Featured Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Preview of featured ceramics. Explore the complete collection in the Gallery.
          </p>
        </div>

        {/* 3D Model Showcase */}
        <div className="mb-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-gray-300 rounded-lg p-6 lg:p-8 shadow-xs">
            {/* 3D Canvas */}
            <div className="lg:col-span-7 h-[420px] lg:h-[480px]">
              <ModelViewer modelPath={preview3DModel.modelPath || '/models/ritual-wine-container.glb'} />
            </div>

            {/* Model Curatorial Provenance */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-gray-500">
                    {preview3DModel.artistOrCulture}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {preview3DModel.name}
                </h3>

                <p className="text-xs text-gray-500">
                  Period: {preview3DModel.period}
                </p>

                <div className="space-y-2 text-xs border-y border-gray-200 py-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Medium:</span>
                    <span className="font-medium text-gray-900 text-right">{preview3DModel.medium}</span>
                  </div>
                  {preview3DModel.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dimensions:</span>
                      <span className="font-medium text-gray-900">{preview3DModel.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Classification:</span>
                    <span className="font-medium text-gray-900">{preview3DModel.category}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-700 mb-1">
                    Conservation Description
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {preview3DModel.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                {preview3DModel.sourceUrl && (
                  <a
                    href={preview3DModel.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-gray-900 hover:underline"
                  >
                    <span>Smithsonian 3D Open Access</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Placeholders for 2D Items */}
        <div className="mb-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preview2DPlaceholders.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col justify-between hover:border-gray-900 transition-colors shadow-2xs"
              >
                <div>
                  {/* 2D Image Placeholder Box */}
                  <div className="aspect-[16/10] wireframe-pattern border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center p-4 text-center text-gray-500 mb-4 relative">
                    <ImageIcon size={32} className="text-gray-400 mb-2" />
                    <span className="text-xs uppercase font-bold text-gray-700 block mb-0.5">
                      IMAGE PLACEHOLDER
                    </span>
                    <span className="text-xs text-gray-600 max-w-xs">
                      {item.imagePlaceholderLabel}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-gray-500 uppercase">
                        {item.artistOrCulture}
                      </span>
                      {item.estimatedValue && (
                        <span className="text-xs font-bold text-gray-900">
                          {item.estimatedValue}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {item.medium} • {item.dimensions}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Call to Action to Gallery Page */}
        <div className="p-6 sm:p-8 bg-white border border-gray-900 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Explore the Complete Collection on the Gallery Page
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              All additional 3D models and full catalog of the ceramic pieces hosted in the event.
            </p>
          </div>

          <button
            onClick={onGoToGallery}
            className="shrink-0 px-6 py-3 rounded bg-gray-900 text-white text-xs uppercase font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2"
          >
            <span>Go to Gallery Page</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};
