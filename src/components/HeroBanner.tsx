import React from 'react';
import { Calendar, Clock, MapPin, Image as ImageIcon, Box } from 'lucide-react';
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
    <section id="hero-event-details" className="pt-24 pb-16 md:pt-28 md:pb-20 border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Event Metadata */}
          <div className="lg:col-span-7 space-y-6">

            {/* Title / Subtitle Placeholders */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {galaData.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-700">
                {galaData.subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              {galaData.summary}
            </p>

            {/* Event Details Grid */}
            <div className="p-4 sm:p-5 rounded-lg border border-gray-300 bg-gray-50 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-gray-500 font-bold border-b border-gray-200 pb-2">
                Event Info
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <Calendar size={18} className="text-gray-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-500">Date</span>
                    <span className="font-semibold text-gray-900">{galaData.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={18} className="text-gray-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-500">Time</span>
                    <span className="font-semibold text-gray-900">{galaData.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <MapPin size={18} className="text-gray-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-gray-500">Venue & Location</span>
                    <span className="font-semibold text-gray-900">{galaData.location}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{galaData.venueRoom}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTickets}
                className="px-6 py-3 rounded bg-gray-900 text-white text-xs uppercase font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2 border border-gray-900"
              >
                <span>Reserve Tickets</span>
              </button>

              <button
                onClick={onExplorePreview}
                className="px-5 py-3 rounded bg-white text-gray-800 text-xs uppercase font-bold tracking-wider hover:bg-gray-100 transition-colors border border-gray-300 flex items-center gap-2"
              >
                <Box size={15} />
                <span>Preview 3D & 2D</span>
              </button>

              <button
                onClick={onGoToGallery}
                className="px-5 py-3 rounded bg-white text-gray-800 text-xs uppercase font-bold tracking-wider hover:bg-gray-100 transition-colors border border-gray-300"
              >
                <span>Full Gallery Page →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="border border-gray-300 rounded-lg p-3 bg-gray-50 shadow-xs">
              <div className="aspect-[4/5] rounded border-2 border-dashed border-gray-300 wireframe-pattern flex flex-col items-center justify-center p-6 text-center text-gray-600 relative">
                
                {/* Visual Placeholder Indicator */}
                <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-3 shadow-2xs">
                  <ImageIcon size={30} className="text-gray-500" />
                </div>
                
                <span className="text-xs text-gray-600 max-w-xs block mb-3">
                  Ceramics Artifact
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
