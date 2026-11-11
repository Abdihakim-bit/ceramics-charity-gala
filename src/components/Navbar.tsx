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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Logo / Name Placeholder */}
        <button
          onClick={() => handleLinkClick('main', 'hero-event-details')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 border border-gray-900 bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
            LOGO
          </div>
          <div className="leading-tight">
            <span className="block font-bold text-sm tracking-tight text-gray-900 uppercase">
              Ceramics
            </span>
            <span className="block text-[10px] text-gray-500 uppercase tracking-wider">
              Charity Gala 2026
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <button
            onClick={() => handleLinkClick('main', 'hero-event-details')}
            className={`hover:text-black transition-colors ${
              currentPage === 'main' ? 'text-black font-bold' : 'text-gray-600'
            }`}
          >
            Event Details
          </button>
          
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className="hover:text-black text-gray-600 transition-colors"
          >
            Schedule
          </button>

          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className="hover:text-black text-gray-600 transition-colors"
          >
            Preview
          </button>

          <button
            onClick={() => handleLinkClick('main', 'about')}
            className="hover:text-black text-gray-600 transition-colors"
          >
            About
          </button>

          {/* Gallery Page Link */}
          <button
            onClick={() => handleLinkClick('gallery')}
            className={`hover:text-black transition-colors ${
              currentPage === 'gallery' ? 'text-black font-bold underline underline-offset-4' : 'text-gray-600'
            }`}
          >
            Gallery
          </button>

          {/* Contact Us Page Link */}
          <button
            onClick={() => handleLinkClick('contact')}
            className={`hover:text-black transition-colors ${
              currentPage === 'contact' ? 'text-black font-bold underline underline-offset-4' : 'text-gray-600'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Reserve Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTickets}
            className="px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-black transition-colors border border-gray-900 shadow-xs"
          >
            Reserve Tickets
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTickets}
            className="sm:hidden px-3 py-1.5 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-wider rounded"
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-900 border border-gray-300 rounded hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-300 px-6 py-5 space-y-3 text-sm">
          <button
            onClick={() => handleLinkClick('main', 'hero-event-details')}
            className="block w-full text-left py-1.5 text-gray-800 hover:text-black"
          >
            Event Details
          </button>
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className="block w-full text-left py-1.5 text-gray-800 hover:text-black"
          >
            Schedule
          </button>
          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className="block w-full text-left py-1.5 text-gray-800 hover:text-black"
          >
            Preview
          </button>
          <button
            onClick={() => handleLinkClick('main', 'about')}
            className="block w-full text-left py-1.5 text-gray-800 hover:text-black"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('gallery')}
            className={`block w-full text-left py-1.5 hover:text-black ${
              currentPage === 'gallery' ? 'text-black font-bold' : 'text-gray-800'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="block w-full text-left py-1.5 text-gray-800 hover:text-black"
          >
            Contact Us
          </button>
          <div className="pt-2 border-t border-gray-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full py-2.5 bg-gray-900 text-white text-xs uppercase font-bold tracking-wider rounded text-center"
            >
              Reserve Tickets
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
