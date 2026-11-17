import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ScheduleSection } from './components/ScheduleSection';
import { TicketsSection } from './components/TicketsSection';
import { PreviewSection } from './components/PreviewSection';
import { AboutSection } from './components/AboutSection';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';
import { ArtifactModal } from './components/ArtifactModal';
import type { ArtifactItem } from './data/featuredArtifacts';

export type PageView = 'main' | 'gallery' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('main');
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactItem | null>(null);
  const [artifactModalOpen, setArtifactModalOpen] = useState(false);

  // Synchronize initial page with URL hash if provided (#gallery, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('gallery')) {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('contact')) {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('main');
        const sectionId = hash.replace('#', '');
        if (sectionId) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView, targetSectionId?: string) => {
    setCurrentPage(page);

    if (page === 'gallery') {
      window.location.hash = 'gallery';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'contact') {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Main page navigation
    if (targetSectionId) {
      window.location.hash = targetSectionId;
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenTickets = (tierId?: string) => {
    setSelectedTierId(tierId || 'patron');
    setTicketModalOpen(true);
  };

  const handleOpenArtifactModal = (artifact: ArtifactItem) => {
    setSelectedArtifact(artifact);
    setArtifactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gallery-bg text-gallery-text flex flex-col font-sans selection:bg-gallery-primary selection:text-white">
      
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenTickets={() => handleOpenTickets('patron')}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'main' && (
          <>
            {/* Hero Banner with Event Details */}
            <HeroBanner
              onOpenTickets={() => handleOpenTickets('patron')}
              onExplorePreview={() => handleNavigate('main', 'ceramics-preview')}
              onGoToGallery={() => handleNavigate('gallery')}
            />

            {/* Schedule Section */}
            <ScheduleSection />

            {/* Tickets Section */}
            <TicketsSection onSelectTier={(tierId) => handleOpenTickets(tierId)} />

            {/* Ceramics Preview Section */}
            <PreviewSection
              onGoToGallery={() => handleNavigate('gallery')}
            />

            {/* About Section */}
            <AboutSection />
          </>
        )}

        {/* Gallery Page */}
        {currentPage === 'gallery' && (
          <GalleryPage
            onBackToMain={() => handleNavigate('main')}
            onOpenTickets={() => handleOpenTickets('patron')}
            onSelectArtifact={handleOpenArtifactModal}
          />
        )}

        {/* Contact Us Page */}
        {currentPage === 'contact' && (
          <ContactPage
            onBackToMain={() => handleNavigate('main')}
            onOpenTickets={() => handleOpenTickets('patron')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TicketModal
        isOpen={ticketModalOpen}
        selectedTierId={selectedTierId}
        onClose={() => setTicketModalOpen(false)}
      />

      <ArtifactModal
        artifact={selectedArtifact}
        isOpen={artifactModalOpen}
        onClose={() => setArtifactModalOpen(false)}
      />
    </div>
  );
}
