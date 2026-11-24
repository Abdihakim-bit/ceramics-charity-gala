import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentPage: 'main' | 'gallery' | 'contact';
  onNavigate: (page: 'main' | 'gallery' | 'contact', targetSectionId?: string) => void;
  onOpenTickets: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenTickets,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active in-page section when on main page (ScrollSpy)
  useEffect(() => {
    if (currentPage !== 'main') return;

    const sections = ['home', 'schedule', 'ceramics-preview', 'about'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for fixed navbar
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleLinkClick = (page: 'main' | 'gallery' | 'contact', sectionId?: string) => {
    setMobileMenuOpen(false);
    if (page === 'main' && sectionId) {
      setActiveSection(sectionId);
    }
    onNavigate(page, sectionId);
  };

  const isLinkActive = (page: 'main' | 'gallery' | 'contact', sectionId?: string) => {
    if (page !== currentPage) return false;
    if (page !== 'main') return true;
    return activeSection === (sectionId || 'home');
  };

  const getLinkClass = (page: 'main' | 'gallery' | 'contact', sectionId?: string) => {
    const active = isLinkActive(page, sectionId);
    return `transition-colors cursor-pointer ${
      active ? 'text-gallery-primary font-bold' : 'text-gallery-muted hover:text-gallery-primary'
    }`;
  };

  const getMobileLinkClass = (page: 'main' | 'gallery' | 'contact', sectionId?: string) => {
    const active = isLinkActive(page, sectionId);
    return `block w-full text-left py-1.5 transition-colors cursor-pointer ${
      active ? 'text-gallery-primary font-bold' : 'text-gallery-text hover:text-gallery-primary'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gallery-bg/95 backdrop-blur-xs border-b border-gallery-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Official Brand Logo */}
        <button
          onClick={() => handleLinkClick('main', 'home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none py-1"
          aria-label="Fórma Ceramics Charity Gala Home"
        >
          <img
            src={theme === 'dark' ? '/Logo/horizontal/svg/Artboard 22.svg' : '/Logo/horizontal/svg/Artboard 21.svg'}
            alt="Fórma Ceramics Charity Gala"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
          />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gallery-text">
          <button
            onClick={() => handleLinkClick('main', 'home')}
            className={getLinkClass('main', 'home')}
          >
            Home
          </button>
          
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className={getLinkClass('main', 'schedule')}
          >
            Schedule
          </button>

          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className={getLinkClass('main', 'ceramics-preview')}
          >
            Preview
          </button>

          <button
            onClick={() => handleLinkClick('main', 'about')}
            className={getLinkClass('main', 'about')}
          >
            About
          </button>

          {/* Gallery Page Link */}
          <button
            onClick={() => handleLinkClick('gallery')}
            className={getLinkClass('gallery')}
          >
            Gallery
          </button>

          {/* Contact Us Page Link */}
          <button
            onClick={() => handleLinkClick('contact')}
            className={getLinkClass('contact')}
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Theme Switcher & Reserve Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded border border-gallery-border bg-gallery-card text-gallery-text hover:border-gallery-primary transition-colors flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Ceramic Mode' : 'Switch to Dark Charcoal Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="text-amber-300" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Light</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-gallery-primary" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Dark</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenTickets}
            className="px-4 py-2 bg-gallery-primary text-white text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-opacity border border-gallery-primary shadow-xs"
          >
            Reserve Tickets
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded border border-gallery-border bg-gallery-card text-gallery-text hover:border-gallery-primary transition-colors flex items-center justify-center shadow-2xs"
            title={theme === 'dark' ? 'Switch to Light Ceramic Mode' : 'Switch to Dark Charcoal Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-300" />
            ) : (
              <Moon size={18} className="text-gallery-primary" />
            )}
          </button>
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
            onClick={() => handleLinkClick('main', 'home')}
            className={getMobileLinkClass('main', 'home')}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('main', 'schedule')}
            className={getMobileLinkClass('main', 'schedule')}
          >
            Schedule
          </button>
          <button
            onClick={() => handleLinkClick('main', 'ceramics-preview')}
            className={getMobileLinkClass('main', 'ceramics-preview')}
          >
            Preview
          </button>
          <button
            onClick={() => handleLinkClick('main', 'about')}
            className={getMobileLinkClass('main', 'about')}
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('gallery')}
            className={getMobileLinkClass('gallery')}
          >
            Gallery
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={getMobileLinkClass('contact')}
          >
            Contact Us
          </button>
          <div className="pt-3 border-t border-gallery-border space-y-2">
            <button
              onClick={() => {
                onToggleTheme();
              }}
              className="w-full py-2 px-3 rounded border border-gallery-border bg-gallery-card text-gallery-text text-xs uppercase font-bold flex items-center justify-center gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={15} className="text-amber-300" />
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={15} className="text-gallery-primary" />
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>
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
