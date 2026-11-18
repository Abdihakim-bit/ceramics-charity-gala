import React, { useState } from 'react';
import { Box, Image as ImageIcon, ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { ModelViewer } from './ModelViewer';
import { gallery3DModels, gallery2DItems, type ArtifactItem } from '../data/featuredArtifacts';

interface GalleryPageProps {
  onBackToMain: () => void;
  onOpenTickets: () => void;
  onSelectArtifact: (artifact: ArtifactItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onBackToMain,
  onOpenTickets,
  onSelectArtifact
}) => {
  const [selected3D, setSelected3D] = useState<ArtifactItem>(gallery3DModels[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered2D = gallery2DItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-gallery-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Breadcrumb & Page Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gallery-border">
          <button
            onClick={onBackToMain}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gallery-muted hover:text-gallery-primary uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Main Page</span>
          </button>
        </div>

        {/* Gallery Title & Context */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gallery-text tracking-tight">
            Gala Ceramic Archive & Exhibition Gallery
          </h1>
          <p className="text-sm sm:text-base text-gallery-muted leading-relaxed">
            The full collection of ceramics featured for the charity benefit. Browse digitized 3D museum specimens with full 360° inspection, alongside curated 2D studio pottery and historical ceramics.
          </p>
        </div>

        {/* 3D Models */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-gallery-primary text-white">
                <Box size={14} />
              </span>
              <h2 className="text-xs sm:text-sm uppercase font-bold text-gallery-text">
                3D ARTIFACT INSPECTOR
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gallery-card border border-gallery-border rounded-lg p-6 lg:p-8 shadow-2xs">
            
            {/* Left: Model Selector & Provenance */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Model Tabs */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gallery-muted font-bold mb-2">
                  Select 3D Model:
                </label>
                <div className="space-y-2">
                  {gallery3DModels.map((model) => {
                    const isSelected = selected3D.id === model.id;
                    return (
                      <button
                        key={model.id}
                        onClick={() => setSelected3D(model)}
                        className={`w-full text-left p-3 rounded border text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-gallery-primary text-white border-gallery-primary shadow-xs'
                            : 'bg-gallery-bg text-gallery-text border-gallery-border hover:border-gallery-primary'
                        }`}
                      >
                        <div>
                          <div className={`text-[10px] uppercase font-bold ${
                            isSelected ? 'text-white/80' : 'text-gallery-muted'
                          }`}>
                            {model.artistOrCulture}
                          </div>
                          <div className="font-bold mt-0.5 line-clamp-1">{model.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Provenance Card for selected model */}
              <div className="bg-gallery-bg p-5 rounded border border-gallery-border space-y-4">
                <div className="border-b border-gallery-border pb-2">
                  <span className="text-xs uppercase font-bold text-gallery-text">
                    Details
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gallery-text">{selected3D.name}</h3>
                  <p className="text-xs text-gallery-muted mt-0.5">{selected3D.period}</p>
                </div>

                <div className="space-y-1.5 text-xs border-t border-gallery-border pt-3">
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Medium:</span>
                    <span className="text-gallery-text text-right font-medium">{selected3D.medium}</span>
                  </div>
                  {selected3D.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-gallery-muted">Dimensions:</span>
                      <span className="text-gallery-text font-medium">{selected3D.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gallery-muted">Category:</span>
                    <span className="text-gallery-text font-medium">{selected3D.category}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gallery-muted font-bold block mb-1">
                    Conservation Description:
                  </span>
                  <p className="text-xs text-gallery-muted leading-relaxed">
                    {selected3D.description}
                  </p>
                </div>

                {selected3D.sourceUrl && (
                  <div className="pt-2 border-t border-gallery-border flex items-center text-xs">
                    <a
                      href={selected3D.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-gallery-primary hover:underline font-medium"
                    >
                      <span>Smithsonian Digital Record</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>

            </div>

            {/* Right: 3D Viewport */}
            <div className="lg:col-span-7 h-[420px] lg:h-[520px]">
              <ModelViewer modelPath={selected3D.modelPath || '/models/ritual-wine-container.glb'} />
            </div>

          </div>
        </div>

        {/* Full 2D Ceramic Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-gallery-secondary/40 text-gallery-text">
                  <ImageIcon size={14} />
                </span>
                <h2 className="text-xs sm:text-sm uppercase font-bold text-gallery-text">
                  AUCTION CATALOG
                </h2>
              </div>
              <p className="text-xs text-gallery-muted mt-1">
                Curated 2D artworks for the gala charity auction.
              </p>
            </div>

            {/* Search Input Placeholder */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ceramics by name..."
                className="w-full px-3 py-1.5 rounded border border-gallery-border bg-gallery-card text-gallery-text text-xs focus:outline-none focus:border-gallery-primary"
              />
            </div>
          </div>

          {/* 2D Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered2D.map((item) => (
              <div
                key={item.id}
                className="bg-gallery-card border border-gallery-border rounded-lg p-5 flex flex-col justify-between hover:border-gallery-primary transition-colors shadow-2xs group"
              >
                <div>
                  {/* 2D Ceramic Photography */}
                  <div className="aspect-[4/3] border border-gallery-border rounded overflow-hidden mb-4 relative bg-gallery-bg shadow-2xs cursor-pointer" onClick={() => onSelectArtifact(item)}>
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gallery-bg flex flex-col items-center justify-center p-4 text-center text-gallery-muted">
                        <ImageIcon size={30} className="text-gallery-muted mb-2" />
                        <span className="text-xs uppercase font-bold text-gallery-text block mb-0.5">
                          {item.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase text-gallery-muted">
                        {item.artistOrCulture}
                      </span>
                      {item.estimatedValue && (
                        <span className="text-xs font-bold text-gallery-text">
                          {item.estimatedValue}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-gallery-text line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gallery-muted">
                      {item.medium}
                    </p>
                  </div>

                  <p className="text-xs text-gallery-muted line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gallery-border flex items-center justify-between">
                  <span className="text-[11px] text-gallery-muted">
                    {item.dimensions || 'Standard Size'}
                  </span>
                  <button
                    onClick={() => onSelectArtifact(item)}
                    className="text-xs font-bold text-gallery-primary hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered2D.length === 0 && (
            <div className="text-center py-12 border border-dashed border-gallery-border rounded text-xs text-gallery-muted">
              No ceramic pieces found matching your search.
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-gallery-card border border-gallery-border rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-gallery-text">
              Support The Canadian Clay and Glass Gallery
            </h3>
            <p className="text-xs sm:text-sm text-gallery-muted">
              Bid on these pieces at the Gala Benefit Auction on Saturday, January 30, 2027.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onBackToMain}
              className="px-4 py-2.5 rounded bg-gallery-bg border border-gallery-border text-gallery-text text-xs font-bold uppercase hover:bg-gallery-card transition-colors"
            >
              ← Main Page
            </button>
            <button
              onClick={onOpenTickets}
              className="px-5 py-2.5 rounded bg-gallery-primary border border-gallery-primary text-white text-xs font-bold uppercase hover:opacity-90 transition-opacity"
            >
              Reserve Gala Tickets
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
