import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

interface ScheduleItem {
  id: string;
  time: string;
  endTime: string;
  duration: string;
  category: string;
  title: string;
  location: string;
  speaker: string;
  description: string;
  highlights: string[];
  dtStart: string;
  dtEnd: string;
}

export const ScheduleSection: React.FC = () => {
  const scheduleItems = eventDetails.schedule as ScheduleItem[];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeItem = scheduleItems[selectedIdx] || scheduleItems[0];

  const makeGoogleCalendarUrl = (item: ScheduleItem) => {
    const title = encodeURIComponent(`${item.title} — Ceramics Charity Gala`);
    const details = encodeURIComponent(
      `${item.description}\n\nSession Highlights:\n${item.highlights.map(h => `• ${h}`).join('\n')}\n\nHost/Speaker: ${item.speaker}`
    );
    const location = encodeURIComponent(`${item.location}, 137 Glasgow St, Kitchener, ON`);
    const dates = `${item.dtStart}/${item.dtEnd}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const handleDownloadIcs = (item: ScheduleItem) => {
    const icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ceramics Charity Gala 2026//Event Schedule//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:gala-2026-${item.id}@ceramicsgala.ca`,
      'DTSTAMP:20261109T000000Z',
      `DTSTART:${item.dtStart}`,
      `DTEND:${item.dtEnd}`,
      `SUMMARY:${item.title} — Ceramics Charity Gala`,
      `DESCRIPTION:${item.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${item.location}, 137 Glasgow St, Kitchener, ON`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ceramics-gala-${item.id}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="schedule" className="py-20 bg-gallery-bg border-b border-gallery-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gallery-text tracking-tight">
            Evening Itinerary & Timeline
          </h2>
          <p className="text-sm sm:text-base text-gallery-muted max-w-xl mx-auto">
            Select any session to inspect highlights and presenters. Use the calendar buttons to add sessions to your personal calendar.
          </p>
        </div>

        {/* Master-Detail Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Master Timeline Stepper Navigation */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gallery-border text-xs text-gallery-muted font-bold uppercase tracking-wider">
              <span>Program</span>
              <span>{scheduleItems.length} Sessions Total</span>
            </div>

            <div className="relative border-l-2 border-gallery-border ml-4 pl-5 space-y-3 pt-1">
              {scheduleItems.map((item, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left rounded-lg p-4 transition-all relative group flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-gallery-card border-gallery-primary shadow-md ring-1 ring-gallery-primary -translate-y-0.5'
                        : 'bg-gallery-card/80 hover:bg-gallery-card border-gallery-border hover:border-gallery-primary/50 shadow-2xs'
                    }`}
                  >
                    {/* Timeline Node on Left Connecting Track */}
                    <span
                      className={`absolute -left-[29px] top-5 w-4 h-4 rounded-full border-2 transition-colors ${
                        isSelected
                          ? 'bg-gallery-primary border-gallery-card ring-2 ring-gallery-primary'
                          : 'bg-gallery-card border-gallery-border group-hover:border-gallery-muted'
                      }`}
                    />

                    <div>
                      {/* Top Row: Time Badge & Category */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gallery-text">
                          <Clock size={12} className={isSelected ? 'text-gallery-primary' : 'text-gallery-muted'} />
                          <span>{item.time}</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSelected ? 'bg-gallery-primary text-white' : 'bg-gallery-bg text-gallery-text border border-gallery-border'
                        }`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-sm font-bold line-clamp-1 transition-colors ${
                        isSelected ? 'text-gallery-text' : 'text-gallery-text/80 group-hover:text-gallery-primary'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Footer Row: Duration & Location */}
                    <div className="mt-2.5 pt-2 border-t border-gallery-border/40 flex items-center justify-between text-[11px] text-gallery-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-gallery-muted" />
                        <span className="line-clamp-1 max-w-[160px]">{item.location}</span>
                      </span>
                      <span className="font-semibold text-gallery-text">{item.duration}</span>
                    </div>

                    {/* Active Right-Pointing Indicator Arrow (Desktop) */}
                    {isSelected && (
                      <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gallery-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Stage Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-gallery-card border border-gallery-border rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[540px]">
              
              <div className="space-y-6">
                
                {/* Stage Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gallery-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-gallery-primary text-white text-xs font-bold uppercase tracking-wider">
                      Phase 0{selectedIdx + 1} of 0{scheduleItems.length}
                    </span>
                    <span className="text-xs font-bold bg-gallery-bg text-gallery-text border border-gallery-border px-2.5 py-1 rounded">
                      {activeItem.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-gallery-text bg-gallery-bg border border-gallery-border px-2.5 py-1 rounded">
                    <Clock size={13} className="text-gallery-primary" />
                    <span>Duration: {activeItem.duration}</span>
                  </div>
                </div>

                {/* Session Title & Presenter Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gallery-text tracking-tight leading-snug">
                    {activeItem.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gallery-muted pt-1">
                    <div className="flex items-center gap-1.5 font-bold text-gallery-text">
                      <Clock size={15} className="text-gallery-primary" />
                      <span>{activeItem.time} – {activeItem.endTime} EDT</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-gallery-muted" />
                      <span>{activeItem.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Users size={15} className="text-gallery-muted" />
                      <span>{activeItem.speaker}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-gallery-text leading-relaxed border-t border-gallery-border/40 pt-4">
                  {activeItem.description}
                </p>

                {/* Key Session Highlights Box */}
                <div className="p-4 sm:p-5 rounded-lg border border-gallery-border bg-gallery-bg space-y-3">
                  <span className="text-xs uppercase font-bold text-gallery-text tracking-wider block">
                    Curatorial Highlights & Experience
                  </span>

                  <ul className="space-y-2 text-xs sm:text-sm text-gallery-text">
                    {activeItem.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-gallery-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Toolbar: Add to Calendar & Stepper Controls */}
              <div className="pt-6 mt-6 border-t border-gallery-border flex flex-wrap items-center justify-between gap-4">
                
                {/* Calendar Sync Options */}
                <div className="flex items-center gap-2">
                  <a
                    href={makeGoogleCalendarUrl(activeItem)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-gallery-primary text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <Calendar size={13} />
                    <span>Google Calendar</span>
                    <ExternalLink size={11} />
                  </a>

                  <button
                    onClick={() => handleDownloadIcs(activeItem)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-gallery-card text-gallery-text border border-gallery-border text-xs font-bold uppercase tracking-wider hover:bg-gallery-bg transition-colors shadow-2xs"
                    title="Download iCalendar file (.ics) for Apple Calendar / Outlook"
                  >
                    <Download size={13} />
                    <span>.ICS</span>
                  </button>
                </div>

                {/* Phase Stepper Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedIdx((prev) => Math.max(0, prev - 1))}
                    disabled={selectedIdx === 0}
                    className="p-2 rounded border border-gallery-border text-gallery-text hover:bg-gallery-bg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Previous Phase"
                    aria-label="Previous Phase"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <span className="text-xs font-bold text-gallery-muted px-1">
                    0{selectedIdx + 1} / 0{scheduleItems.length}
                  </span>

                  <button
                    onClick={() => setSelectedIdx((prev) => Math.min(scheduleItems.length - 1, prev + 1))}
                    disabled={selectedIdx === scheduleItems.length - 1}
                    className="p-2 rounded border border-gallery-border text-gallery-text hover:bg-gallery-bg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    title="Next Phase"
                    aria-label="Next Phase"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
