import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'main' | 'gallery' | 'contact';
  onNavigate: (page: 'main' | 'gallery' | 'contact', targetSectionId?: string) => void;
  onOpenTickets: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenTickets }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: 'main' | 'gallery' | 'contact', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gallery-bg/95 backdrop-blur-xs border-b border-gallery-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Official Brand Logo */}
        <button
          onClick={() => handleLinkClick('main', 'hero-event-details')}
          className="flex items-center gap-2.5 text-left group focus:outline-none py-1"
          aria-label="Fórma Ceramics Charity Gala Home"
        >
          <img
            src="/Logo/horizontal/svg/Artboard 21.svg"
            alt="Fórma Ceramics Charity Gala"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
          />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gallery-text">
          <button
            onClick={() => handleLinkClick('main', 'hero-event-details')}
            className={`hover:text-gallery-primary transition-colors ${
              currentPage === 'main' ? 'text-gallery-primary font-bold' : 'text-gallery-muted'
            }`}
          >
            Event Details
          </button>
          
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className="hover:text-gallery-primary text-gallery-muted transition-colors"
          >
            Schedule
          </button>

          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className="hover:text-gallery-primary text-gallery-muted transition-colors"
          >
            Preview
          </button>

          <button
            onClick={() => handleLinkClick('main', 'about')}
            className="hover:text-gallery-primary text-gallery-muted transition-colors"
          >
            About
          </button>

          {/* Gallery Page Link */}
          <button
            onClick={() => handleLinkClick('gallery')}
            className={`hover:text-gallery-primary transition-colors ${
              currentPage === 'gallery' ? 'text-gallery-primary font-bold underline underline-offset-4' : 'text-gallery-muted'
            }`}
          >
            Gallery
          </button>

          {/* Contact Us Page Link */}
          <button
            onClick={() => handleLinkClick('contact')}
            className={`hover:text-gallery-primary transition-colors ${
              currentPage === 'contact' ? 'text-gallery-primary font-bold underline underline-offset-4' : 'text-gallery-muted'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Reserve Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTickets}
            className="px-4 py-2 bg-gallery-primary text-white text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity border border-gallery-primary shadow-xs"
          >
            Reserve Tickets
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTickets}
            className="sm:hidden px-3 py-1.5 bg-gallery-primary text-white text-[11px] font-bold uppercase tracking-wider rounded"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gallery-text border border-gallery-border rounded hover:bg-gallery-card"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gallery-bg border-b border-gallery-border px-6 py-5 space-y-3 text-sm">
          <button
            onClick={() => handleLinkClick('main', 'hero-event-details')}
            className="block w-full text-left py-1.5 text-gallery-text hover:text-gallery-primary"
          >
            Event Details
          </button>
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className="block w-full text-left py-1.5 text-gallery-text hover:text-gallery-primary"
          >
            Schedule
          </button>
          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className="block w-full text-left py-1.5 text-gallery-text hover:text-gallery-primary"
          >
            Preview
          </button>
          <button
            onClick={() => handleLinkClick('main', 'about')}
            className="block w-full text-left py-1.5 text-gallery-text hover:text-gallery-primary"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('gallery')}
            className={`block w-full text-left py-1.5 hover:text-gallery-primary ${
              currentPage === 'gallery' ? 'text-gallery-primary font-bold' : 'text-gallery-text'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="block w-full text-left py-1.5 text-gallery-text hover:text-gallery-primary"
          >
            Contact Us
          </button>
          <div className="pt-2 border-t border-gallery-border">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full py-2.5 bg-gallery-primary text-white text-xs uppercase font-bold tracking-wider rounded text-center"
            >
              Reserve Tickets
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
