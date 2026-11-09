import React from 'react';
import { Clock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

interface EventDetailsProps {
  onSelectTier: (tierId: string) => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ onSelectTier }) => {
  return (
    <section id="event-details" className="py-24 bg-[#F5F1EB] border-t border-gallery-sand/70">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gallery-terracotta font-semibold">
            Gala Program & Admission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-gallery-dark font-semibold">
            An Evening of Cultural Preservation
          </h2>
          <p className="text-gallery-muted text-sm sm:text-base leading-relaxed">
            All ticket proceeds directly support international artist residencies, conservation field labs, and educational youth outreach at the Kitchener-Waterloo Art Gallery.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl text-gallery-dark mb-8 text-center sm:text-left">
            Evening Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventDetails.schedule.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gallery-sand shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 text-gallery-terracotta text-xs font-semibold uppercase tracking-wider mb-3">
                    <Clock size={14} />
                    <span>{item.time}</span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-gallery-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gallery-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gallery-sand/40 text-[11px] text-gallery-muted font-medium">
                  Part 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Tiers */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-gallery-dark font-semibold mb-2">
              Select Your Admission Tier
            </h3>
            <p className="text-xs sm:text-sm text-gallery-muted">
              Official charitable donation receipts will be issued via email following confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {eventDetails.tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.featured
                    ? 'bg-gallery-dark text-white shadow-xl ring-2 ring-gallery-terracotta -translate-y-2'
                    : 'bg-white text-gallery-dark border border-gallery-sand/90 shadow-sm'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                      tier.featured 
                        ? 'bg-gallery-terracotta text-white' 
                        : 'bg-gallery-sand text-gallery-dark'
                    }`}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h4 className="font-serif text-xl font-bold mb-1">{tier.name}</h4>
                    <p className={`text-xs ${tier.featured ? 'text-stone-300' : 'text-gallery-muted'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gallery-sand/30 flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold">${tier.price}</span>
                    <span className={`text-xs ${tier.featured ? 'text-stone-300' : 'text-gallery-muted'}`}>
                      CAD / guest
                    </span>
                  </div>

                  {/* Perks list */}
                  <ul className="space-y-3 mb-8">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 
                          size={16} 
                          className={`shrink-0 mt-0.5 ${tier.featured ? 'text-gallery-terracotta' : 'text-gallery-celadon'}`} 
                        />
                        <span className={tier.featured ? 'text-stone-200' : 'text-gallery-muted'}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`w-full py-3.5 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                    tier.featured
                      ? 'bg-gallery-terracotta text-white hover:bg-[#b04a25]'
                      : 'bg-gallery-dark text-white hover:bg-gallery-terracotta'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};