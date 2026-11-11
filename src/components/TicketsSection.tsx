import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

interface TicketsSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketsSection: React.FC<TicketsSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="py-20 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Reserve Gala Admission & Support the Cause
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
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
                  ? 'border-gray-900 bg-gray-50 shadow-md ring-1 ring-gray-900'
                  : 'border-gray-300 bg-white shadow-2xs'
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    tier.featured
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}>
                    {tier.badge}
                  </span>
                  {tier.featured && (
                    <span className="text-[11px] text-gray-600 font-bold">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-200 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-xs text-gray-500">CAD / guest</span>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                    [ Included Privileges ]
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check size={15} className="text-gray-900 shrink-0 mt-0.5" />
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
                    ? 'bg-gray-900 text-white border-gray-900 hover:bg-black'
                    : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
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
