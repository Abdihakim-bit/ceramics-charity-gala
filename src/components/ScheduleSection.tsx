import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Program Details & Timeline
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            An interactive curated program designed to celebrate ceramic arts and honor heritage techniques.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventDetails.schedule.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col justify-between hover:border-gray-900 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 border border-gray-300 text-xs font-bold text-gray-900">
                    <Clock size={13} />
                    <span>{item.time}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center gap-1.5 text-xs text-gray-500">
                <MapPin size={13} className="text-gray-400" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
