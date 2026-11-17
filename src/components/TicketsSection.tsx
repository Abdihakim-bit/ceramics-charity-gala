import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

interface TicketsSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketsSection: React.FC<TicketsSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="py-20 bg-gallery-bg border-b border-gallery-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gallery-text tracking-tight">
            Reserve Gala Admission & Support the Cause
          </h2>
          <p className="text-sm sm:text-base text-gallery-muted">
            Each ticket includes dinner service and curatorial exhibitions as well as donation tax credits.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {eventDetails.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-lg p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                tier.featured
                  ? 'border-gallery-primary bg-gallery-card shadow-md ring-1 ring-gallery-primary'
                  : 'border-gallery-border bg-gallery-card shadow-2xs'
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    tier.featured
                      ? 'bg-gallery-primary text-white'
                      : 'bg-gallery-bg text-gallery-text border border-gallery-border'
                  }`}>
                    {tier.badge}
                  </span>
                  {tier.featured && (
                    <span className="text-[11px] text-gallery-primary font-bold">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold text-gallery-text mb-1">{tier.name}</h3>
                <p className="text-xs text-gallery-muted mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gallery-border flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gallery-text">
                    ${tier.price}
                  </span>
                  <span className="text-xs text-gallery-muted">CAD / guest</span>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] uppercase tracking-wider text-gallery-muted font-bold">
                    [ Included Privileges ]
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gallery-text">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check size={15} className="text-gallery-primary shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTier(tier.id)}
                className={`w-full py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border ${
                  tier.featured
                    ? 'bg-gallery-primary text-white border-gallery-primary hover:opacity-90'
                    : 'bg-gallery-card text-gallery-text border-gallery-border hover:bg-gallery-bg'
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
