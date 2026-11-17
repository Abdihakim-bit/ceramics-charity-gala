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
    <section id="ceramics-preview" className="py-20 bg-gallery-bg border-b border-gallery-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gallery-text tracking-tight">
            Featured Works
          </h2>
          <p className="text-sm sm:text-base text-gallery-muted">
            Preview of featured ceramics. Explore the complete collection in the Gallery.
          </p>
        </div>

        {/* 3D Model Showcase */}
        <div className="mb-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gallery-card border border-gallery-border rounded-lg p-6 lg:p-8 shadow-xs">
            {/* 3D Canvas */}
            <div className="lg:col-span-7 h-[420px] lg:h-[480px]">
              <ModelViewer modelPath={preview3DModel.modelPath || '/models/ritual-wine-container.glb'} />
            </div>

            {/* Model Curatorial Provenance */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-gallery-muted">
                    {preview3DModel.artistOrCulture}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gallery-text">
                  {preview3DModel.name}
                </h3>

                <p className="text-xs text-gallery-muted">
                  Period: {preview3DModel.period}
                </p>

                <div className="space-y-2 text-xs border-y border-gallery-border py-3">
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Medium:</span>
                    <span className="font-medium text-gallery-text text-right">{preview3DModel.medium}</span>
                  </div>
                  {preview3DModel.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-gallery-muted">Dimensions:</span>
                      <span className="font-medium text-gallery-text">{preview3DModel.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Classification:</span>
                    <span className="font-medium text-gallery-text">{preview3DModel.category}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-gallery-text mb-1">
                    Conservation Description
                  </h4>
                  <p className="text-xs sm:text-sm text-gallery-muted leading-relaxed">
                    {preview3DModel.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gallery-border flex items-center justify-between text-xs">
                {preview3DModel.sourceUrl && (
                  <a
                    href={preview3DModel.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-gallery-primary hover:underline font-medium"
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
                className="bg-gallery-card border border-gallery-border rounded-lg p-5 flex flex-col justify-between hover:border-gallery-primary transition-colors shadow-2xs group"
              >
                <div>
                  {/* 2D Image Viewport */}
                  <div className="aspect-[16/10] border border-gallery-border rounded overflow-hidden mb-4 relative bg-gallery-bg shadow-2xs">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gallery-bg flex flex-col items-center justify-center p-4 text-center text-gallery-muted">
                        <ImageIcon size={32} className="text-gallery-muted mb-2" />
                        <span className="text-xs uppercase font-bold text-gallery-text block mb-0.5">
                          {item.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-gallery-muted uppercase">
                        {item.artistOrCulture}
                      </span>
                      {item.estimatedValue && (
                        <span className="text-xs font-bold text-gallery-text">
                          {item.estimatedValue}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-gallery-text">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gallery-muted">
                      {item.medium} • {item.dimensions}
                    </p>
                  </div>

                  <p className="text-xs text-gallery-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Call to Action to Gallery Page */}
        <div className="p-6 sm:p-8 bg-gallery-card border border-gallery-primary rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gallery-text">
              Explore the Complete Collection on the Gallery Page
            </h3>
            <p className="text-xs sm:text-sm text-gallery-muted max-w-xl">
              All additional 3D models and full catalog of the ceramic pieces hosted in the event.
            </p>
          </div>

          <button
            onClick={onGoToGallery}
            className="shrink-0 px-6 py-3 rounded bg-gallery-primary text-white text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span>Go to Gallery Page</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};
