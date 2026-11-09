import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { EventDetails } from './components/EventDetails';
import { TicketModal } from './components/TicketModal';
import { ModelViewer } from './components/ModelViewer';
import { catalogArtifacts, type ArtifactItem } from './data/featuredArtifacts';
import { Box, ExternalLink, ChevronRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactItem>(catalogArtifacts[0]);

  const handleOpenTickets = (tierId?: string) => {
    setSelectedTierId(tierId || 'patron');
    setTicketModalOpen(true);
  };

  const handleScrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gallery-bg text-gallery-dark flex flex-col selection:bg-gallery-terracotta selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenTickets={() => handleOpenTickets('patron')} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroBanner
          onOpenTickets={() => handleOpenTickets('patron')}
          onExploreArtisans={() => handleScrollToSection('studio-catalog')}
        />

        {/* 3. Event Details & Ticket Selector Section */}
        <EventDetails onSelectTier={(tierId) => handleOpenTickets(tierId)} />

        {/* 4. 3D Conservation Studio & Artifact Catalog */}
        <section id="studio-catalog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gallery-sand/60">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gallery-terracotta font-semibold">
              Interactive Conservation Lab
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gallery-dark">
              Smithsonian 3D Ceramic Archive
            </h2>
            <p className="text-gallery-muted text-sm sm:text-base leading-relaxed">
              Explore open-access digitized vessels. Select any artifact from the catalog to calibrate the 360° inspection viewport and review curatorial records.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Artifact Catalog List & Provenance */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-gallery-muted">
                  Catalog ({catalogArtifacts.length})
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gallery-celadon bg-gallery-celadon/10 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck size={12} />
                  CC0 Open Access
                </span>
              </div>

              {/* Artifact Selector Buttons */}
              <div className="space-y-3">
                {catalogArtifacts.map((artifact) => {
                  const isActive = selectedArtifact.id === artifact.id;
                  return (
                    <button
                      key={artifact.id}
                      onClick={() => setSelectedArtifact(artifact)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-white border-gallery-terracotta ring-1 ring-gallery-terracotta shadow-md'
                          : 'bg-white/60 border-gallery-sand hover:bg-white hover:border-gallery-muted'
                      }`}
                    >
                      <div className="space-y-1 pr-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gallery-terracotta">
                          {artifact.culture}
                        </span>
                        <h3 className="font-serif text-sm font-bold text-gallery-dark line-clamp-1">
                          {artifact.name}
                        </h3>
                        <p className="text-[11px] text-gallery-muted">{artifact.period}</p>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 transition-transform ${
                          isActive
                            ? 'text-gallery-terracotta translate-x-0.5'
                            : 'text-gallery-muted opacity-40 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Curatorial Provenance Card */}
              <div className="bg-white p-6 rounded-2xl border border-gallery-sand shadow-xs space-y-4 mt-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gallery-terracotta font-bold">
                    Material & Dimensions
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs mt-2 border-t border-gallery-sand/60 pt-3">
                    <div>
                      <span className="text-gallery-muted block text-[11px]">Medium</span>
                      <span className="font-medium text-gallery-dark">{selectedArtifact.medium}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gallery-muted font-bold block mb-1">
                    Conservation Notes
                  </span>
                  <p className="text-xs text-gallery-dark/80 leading-relaxed">
                    {selectedArtifact.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gallery-sand/60">
                  <a
                    href={selectedArtifact.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gallery-terracotta hover:underline font-medium"
                  >
                    <span>View Smithsonian Record</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Canvas Viewport */}
            <div className="lg:col-span-7 h-[580px] lg:h-[680px] sticky top-24">
              <ModelViewer modelPath={selectedArtifact.modelPath} />
            </div>
          </div>
        </section>
      </main>

      {/* 5. Ticket & RSVP Modal */}
      <TicketModal
        isOpen={ticketModalOpen}
        selectedTierId={selectedTierId}
        onClose={() => setTicketModalOpen(false)}
      />
    </div>
  );
}