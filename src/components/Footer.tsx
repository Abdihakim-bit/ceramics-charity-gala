import React, { useState } from 'react';
import { Check } from 'lucide-react';
import galaData from '../data/gala.json';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="border-t border-gray-300 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Organization */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-gray-900 bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-900">
                LOGO
              </div>
              <div>
                <span className="block font-bold text-sm uppercase text-gray-900">
                  {galaData.title}
                </span>
                <span className="block text-[11px] text-gray-500 uppercase">
                  {galaData.organization}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg">
              {galaData.summary}
            </p>
          </div>

          {/* Newsletter & Social Logos */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="text-xs uppercase font-bold text-gray-900 block mb-1">
                Gala Updates & Newsletter
              </span>
              <p className="text-xs text-gray-600 mb-3">
                Receive auction catalog previews and schedule updates.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="flex-1 px-3 py-2 rounded border border-gray-300 bg-white text-xs focus:outline-none focus:border-gray-900"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-gray-900 text-white text-xs uppercase font-bold hover:bg-black transition-colors"
                  >
                    {subscribed ? <Check size={14} /> : 'Join'}
                  </button>
                </div>
                {subscribed && (
                  <span className="block text-[11px] text-gray-800 font-bold">
                    ✓ Thank you! You have been subscribed for gala updates.
                  </span>
                )}
              </form>
            </div>

            {/* Social Logos */}
            <div>
              <span className="text-xs uppercase font-bold text-gray-900 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-100 transition-colors shadow-2xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>© 2026 {galaData.organization}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
