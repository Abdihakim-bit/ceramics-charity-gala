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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Breadcrumb & Page Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-300">
          <button
            onClick={onBackToMain}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-black uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>← Back to Main Page</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">
              Complete Archive
            </span>
          </div>
        </div>

        {/* Gallery Title & Context */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Gala Ceramic Archive & Exhibition Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            The full collection of ceramics featured for the charity benefit. Browse digitized 3D museum specimens with full 360° inspection, alongside curated 2D studio pottery and historical ceramics.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. 3D Model Conservation Lab & Interactive Selector */}
        {/* ======================================================== */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-gray-900 text-white">
                <Box size={14} />
              </span>
              <h2 className="text-xs sm:text-sm uppercase font-bold text-gray-900">
                3D ARTIFACT INSPECTOR
              </h2>
            </div>
            <span className="text-xs text-gray-500">
              Select model below to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-50 border border-gray-300 rounded-lg p-6 lg:p-8">
            
            {/* Left: Model Selector & Provenance */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Model Tabs */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-bold mb-2">
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
                            ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                            : 'bg-white text-gray-800 border-gray-300 hover:border-gray-500'
                        }`}
                      >
                        <div>
                          <div className={`text-[10px] uppercase font-bold ${
                            isSelected ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {model.artistOrCulture}
                          </div>
                          <div className="font-bold mt-0.5 line-clamp-1">{model.name}</div>
                        </div>
                        <span className={`text-[11px] font-bold ${
                          isSelected ? 'text-gray-300' : 'text-gray-400'
                        }`}>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Provenance Card for selected model */}
              <div className="bg-white p-5 rounded border border-gray-300 space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <span className="text-xs uppercase font-bold text-gray-700">
                    Details
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900">{selected3D.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{selected3D.period}</p>
                </div>

                <div className="space-y-1.5 text-xs border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Medium:</span>
                    <span className="text-gray-900 text-right">{selected3D.medium}</span>
                  </div>
                  {selected3D.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dimensions:</span>
                      <span className="text-gray-900">{selected3D.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="text-gray-900">{selected3D.category}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold block mb-1">
                    Conservation Description:
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {selected3D.description}
                  </p>
                </div>

                {selected3D.sourceUrl && (
                  <div className="pt-2 border-t border-gray-200 flex items-center text-xs">
                    <a
                      href={selected3D.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-gray-900 hover:underline"
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

        {/* ======================================================== */}
        {/* 2. Full 2D Ceramic Artworks & Photography Gallery */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-gray-200 text-gray-800">
                  <ImageIcon size={14} />
                </span>
                <h2 className="text-xs sm:text-sm uppercase font-bold text-gray-900">
                  AUCTION CATALOG
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-1">
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
                className="w-full px-3 py-1.5 rounded border border-gray-300 bg-gray-50 text-xs focus:outline-none focus:border-gray-900 focus:bg-white"
              />
            </div>
          </div>

          {/* 2D Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered2D.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col justify-between hover:border-gray-900 transition-colors shadow-2xs group"
              >
                <div>
                  {/* Placeholder Visual */}
                  <div className="aspect-[4/3] wireframe-pattern border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center p-4 text-center text-gray-500 mb-4 relative">
                    <ImageIcon size={30} className="text-gray-400 mb-2 group-hover:scale-105 transition-transform" />
                    <span className="text-xs uppercase font-bold text-gray-700 block mb-0.5">
                      IMAGE PLACEHOLDER
                    </span>
                    <span className="text-[11px] text-gray-600 line-clamp-2 max-w-xs">
                      {item.imagePlaceholderLabel}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase text-gray-500">
                        {item.artistOrCulture}
                      </span>
                      {item.estimatedValue && (
                        <span className="text-xs font-bold text-gray-900">
                          {item.estimatedValue}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-500">
                      {item.medium}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">
                    {item.dimensions || 'Standard Size'}
                  </span>
                  <button
                    onClick={() => onSelectArtifact(item)}
                    className="text-xs font-bold text-gray-900 hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered2D.length === 0 && (
            <div className="text-center py-12 border border-dashed border-gray-300 rounded text-xs text-gray-500">
              No ceramic pieces found matching your search.
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-gray-50 border border-gray-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-900">
              Support The Canadian Clay and Glass Gallery
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Bid on these pieces at the Gala Benefit Auction on Saturday, November 28, 2026.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onBackToMain}
              className="px-4 py-2.5 rounded bg-white border border-gray-300 text-gray-900 text-xs font-bold uppercase hover:bg-gray-100 transition-colors"
            >
              ← Main Page
            </button>
            <button
              onClick={onOpenTickets}
              className="px-5 py-2.5 rounded bg-gray-900 border border-gray-900 text-white text-xs font-bold uppercase hover:bg-black transition-colors"
            >
              Reserve Gala Tickets
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
