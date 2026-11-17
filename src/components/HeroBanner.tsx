import React from 'react';
import { Calendar, Clock, MapPin, Box } from 'lucide-react';
import galaData from '../data/gala.json';

interface HeroBannerProps {
  onOpenTickets: () => void;
  onExplorePreview: () => void;
  onGoToGallery: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenTickets,
  onExplorePreview,
  onGoToGallery
}) => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-gallery-border bg-gallery-bg relative">
      <span id="hero-event-details" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Event Metadata */}
          <div className="lg:col-span-7 space-y-6">

            {/* Title / Subtitle */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gallery-text tracking-tight leading-tight">
                {galaData.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gallery-text/90">
                {galaData.subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base text-gallery-muted leading-relaxed max-w-2xl">
              {galaData.summary}
            </p>

            {/* Event Details Grid */}
            <div className="p-4 sm:p-5 rounded-lg border border-gallery-border bg-gallery-card space-y-3 shadow-xs">
              <div className="text-[11px] uppercase tracking-wider text-gallery-muted font-bold border-b border-gallery-border pb-2">
                Event Info
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <Calendar size={18} className="text-gallery-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gallery-muted">Date</span>
                    <span className="font-semibold text-gallery-text">{galaData.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={18} className="text-gallery-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gallery-muted">Time</span>
                    <span className="font-semibold text-gallery-text">{galaData.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <MapPin size={18} className="text-gallery-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gallery-muted">Venue & Location</span>
                    <span className="font-semibold text-gallery-text">{galaData.location}</span>
                    <span className="block text-xs text-gallery-muted mt-0.5">{galaData.venueRoom}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTickets}
                className="px-6 py-3 rounded bg-gallery-primary text-white text-xs uppercase font-bold tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 border border-gallery-primary shadow-xs"
              >
                <span>Reserve Tickets</span>
              </button>

              <button
                onClick={onExplorePreview}
                className="px-5 py-3 rounded bg-gallery-card text-gallery-text text-xs uppercase font-bold tracking-wider hover:bg-gallery-border/30 transition-colors border border-gallery-border flex items-center gap-2"
              >
                <Box size={15} />
                <span>Preview</span>
              </button>

              <button
                onClick={onGoToGallery}
                className="px-5 py-3 rounded bg-gallery-card text-gallery-text text-xs uppercase font-bold tracking-wider hover:bg-gallery-border/30 transition-colors border border-gallery-border"
              >
                <span>Full Gallery Page →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Masterpiece */}
          <div className="lg:col-span-5">
            <div className="border border-gallery-border rounded-lg p-2.5 bg-gallery-card shadow-md overflow-hidden">
              <div className="relative aspect-[4/5] rounded overflow-hidden group">
                <img
                  src="/Images/pexels-nina-krivitskaya-1704253756-28301170.jpg"
                  alt="Fórma Featured Ceramic Masterpiece"
                  className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200 block mb-1">
                    Featured Masterpiece
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-tight font-serif">
                    Artisanal Folk Earthenware Pitchers
                  </h2>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Wheel-thrown terracotta pitchers featuring hand-carved slip motifs and honey-amber glaze, honoring regional craft traditions across the Americas, Africa & Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
