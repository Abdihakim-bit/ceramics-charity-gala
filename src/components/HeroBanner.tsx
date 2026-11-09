import React from 'react';
import { Calendar, MapPin, ArrowRight, Box } from 'lucide-react';
import galaData from '../data/gala.json';

interface HeroBannerProps {
  onExploreArtisans: () => void;
  onOpenTickets: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreArtisans, onOpenTickets }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gallery-bg">
      {/* Subtle organic background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-0 -mr-24 w-96 h-96 rounded-full bg-gallery-sand/40 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-gallery-celadon/15 blur-2xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gallery-sand/60 border border-gallery-sand text-xs font-semibold uppercase tracking-wider text-gallery-terracotta">
              <span>{galaData.organization}</span>
              <span className="w-1 h-1 rounded-full bg-gallery-muted" />
              <span>Charity Benefit</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gallery-dark leading-[1.15] tracking-tight">
              {galaData.title}: <br />
              <span className="italic font-normal text-gallery-terracotta">
                {galaData.subtitle}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gallery-muted max-w-xl leading-relaxed">
              {galaData.summary}
            </p>

            {/* Event Meta Badges */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm text-gallery-dark font-medium border-y border-gallery-sand/80 py-4">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gallery-terracotta shrink-0" />
                <span>{galaData.date}</span>
              </div>
              <div className="hidden sm:block text-gallery-sand">•</div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gallery-terracotta shrink-0" />
                <span>{galaData.location}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTickets}
                className="px-7 py-3.5 rounded-full bg-gallery-terracotta text-white font-medium text-sm sm:text-base hover:bg-[#b04a25] transition-all flex items-center gap-2 group shadow-sm hover:shadow-md"
              >
                <span>Reserve Tickets</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreArtisans}
                className="px-6 py-3.5 rounded-full bg-gallery-sand/50 text-gallery-dark font-medium text-sm sm:text-base hover:bg-gallery-sand transition-colors flex items-center gap-2 border border-gallery-sand"
              >
                <Box size={16} className="text-gallery-muted" />
                <span>Explore 3D Artifacts</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container simulating museum display plinth */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl border border-gallery-sand/70">
                <div className="aspect-[4/5] rounded-xl bg-gallery-sand/30 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80"
                    alt="Handcrafted ceramic earthenware pottery vessel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle 3D indicator pill overlay */}
                  <div className="absolute top-4 right-4 bg-gallery-dark/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <Box size={14} className="text-gallery-celadon" />
                    <span>Smithsonian 3D Scan Ready</span>
                  </div>
                </div>

                <div className="mt-4 px-2 pb-1 flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gallery-muted font-medium">Featured Tradition</p>
                    <h3 className="font-serif text-lg font-semibold text-gallery-dark">Zapotec Black Clay & Goryeo Celadon</h3>
                  </div>
                  <span className="text-xs font-medium text-gallery-terracotta">Interactive in Gallery ↓</span>
                </div>
              </div>

              {/* Decorative framing element */}
              <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-2xl border-2 border-gallery-sand/90" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};