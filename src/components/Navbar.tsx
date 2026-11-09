import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenTickets: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTickets }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gallery-bg/85 backdrop-blur-md border-b border-gallery-sand/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-gallery-terracotta flex items-center justify-center text-gallery-terracotta font-serif font-bold text-sm group-hover:bg-gallery-terracotta group-hover:text-white transition-colors">
            C
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-wide text-gallery-dark">
              KWAG Gala
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-gallery-muted">
              Cultural Ceramics
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gallery-dark/80">
          <a href="#about" className="hover:text-gallery-terracotta transition-colors">About</a>
          <a href="#showcase" className="hover:text-gallery-terracotta transition-colors">Artisans & 3D Archive</a>
          <a href="#schedule" className="hover:text-gallery-terracotta transition-colors">Program</a>
          <a href="#venue" className="hover:text-gallery-terracotta transition-colors">Venue</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTickets}
            className="px-5 py-2.5 rounded-full bg-gallery-dark text-gallery-bg text-sm font-medium hover:bg-gallery-terracotta transition-all shadow-sm hover:shadow"
          >
            Reserve Gala Tickets
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gallery-dark"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gallery-bg border-b border-gallery-sand px-6 py-6 space-y-4 text-base">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gallery-dark hover:text-gallery-terracotta"
          >
            About
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gallery-dark hover:text-gallery-terracotta"
          >
            Artisans & 3D Archive
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gallery-dark hover:text-gallery-terracotta"
          >
            Program
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTickets();
            }}
            className="w-full mt-2 py-3 rounded-full bg-gallery-terracotta text-white font-medium text-sm"
          >
            Reserve Gala Tickets
          </button>
        </div>
      )}
    </nav>
  );
};