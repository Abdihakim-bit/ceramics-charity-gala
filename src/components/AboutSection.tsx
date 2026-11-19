import React from 'react';
import { Box, HeartHandshake, Users } from 'lucide-react';
import galaData from '../data/gala.json';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gallery-bg border-b border-gallery-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">

          <h2 className="text-2xl sm:text-3xl font-bold text-gallery-text tracking-tight">
            Preserving Ceramic Traditions for Tomorrow
          </h2>
          <p className="text-sm sm:text-base text-gallery-muted">
            Learn more about the charitable mission behind {galaData.organization} and how every gala contribution protects living ceramic heritage.
          </p>
        </div>

        {/* Narrative & Impact Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Mission Description */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gallery-text leading-relaxed">
            <h3 className="text-xl font-bold text-gallery-text">
              Our Mission: To Celebrate and Safeguard The Crafts of Yesteryear
            </h3>
            <p>
              Since the inception of human civilization, ceramics have been an instrumental part of our existence. They are among the oldest surviving records of life. Every culture has taken this functional craft and developed it in ways unique to its existence.  This endurance and cultural significance are precisely why this craft must be celebrated. 
            </p>
            <p>
              The Canadian Clay and Glass Gallery is hosting a Charity Gala to raise awareness and funds to protect this craft and the artists who create it through fully funded fellowships, and opening interactive 3D digital museum archives to the public.
            </p>
            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3 bg-gallery-card border border-gallery-border rounded text-center shadow-2xs">
                <span className="block text-xl sm:text-2xl font-extrabold text-gallery-text">$150K</span>
                <span className="text-[10px] uppercase text-gallery-muted font-bold">2027 Goal</span>
              </div>
              <div className="p-3 bg-gallery-card border border-gallery-border rounded text-center shadow-2xs">
                <span className="block text-xl sm:text-2xl font-extrabold text-gallery-text">12</span>
                <span className="text-[10px] uppercase text-gallery-muted font-bold">Residencies</span>
              </div>
              <div className="p-3 bg-gallery-card border border-gallery-border rounded text-center shadow-2xs">
                <span className="block text-xl sm:text-2xl font-extrabold text-gallery-text">500+</span>
                <span className="text-[10px] uppercase text-gallery-muted font-bold">Youth Passes</span>
              </div>
              <div className="p-3 bg-gallery-card border border-gallery-border rounded text-center shadow-2xs">
                <span className="block text-xl sm:text-2xl font-extrabold text-gallery-text">100%</span>
                <span className="text-[10px] uppercase text-gallery-muted font-bold">To Charity</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">

            <div className="p-4 bg-gallery-card border border-gallery-border rounded-lg space-y-1 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-gallery-text">
                <Box size={16} className="text-gallery-primary" />
                <h4>Museum 3D Digitization & Conservation</h4>
              </div>
              <p className="text-xs text-gallery-muted leading-relaxed pl-6">
                Safeguarding historical artifacts through volumetric 3D photogrammetry and open-access research archives.
              </p>
            </div>

            <div className="p-4 bg-gallery-card border border-gallery-border rounded-lg space-y-1 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-gallery-text">
                <Users size={16} className="text-gallery-primary" />
                <h4>Youth Clay Academies & Community Outreach</h4>
              </div>
              <p className="text-xs text-gallery-muted leading-relaxed pl-6">
                Free hands-on pottery workshops, equipment grants, and school mentorship programs across local communities.
              </p>
            </div>

            <div className="p-4 bg-gallery-card border border-gallery-border rounded-lg space-y-1 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-gallery-text">
                <HeartHandshake size={16} className="text-gallery-primary" />
                <h4>Kintsugi Conservation & Cultural Heritage</h4>
              </div>
              <p className="text-xs text-gallery-muted leading-relaxed pl-6">
                Preserving damaged heritage ceramics using authentic urushi and precious metal conservation techniques.
              </p>
            </div>
          </div>

        </div>

        {/* Advisory / Host Statement */}
        <div className="p-6 bg-gallery-card border border-dashed border-gallery-border rounded-lg max-w-4xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-gallery-muted italic leading-relaxed">
            "Art has always been a means to experience, and when those means combine with the utility of everyday tools, it creates something almost purely humane. Ceramics contain the soul of humanity."
          </p>
          <div className="pt-2 text-xs text-gallery-muted">
            — Gala Honorary Chair & Curatorial Committee, {galaData.organization}
          </div>
        </div>

      </div>
    </section>
  );
};
