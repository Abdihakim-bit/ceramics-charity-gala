import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowLeft, HelpCircle, ExternalLink } from 'lucide-react';
import galaData from '../data/gala.json';

interface ContactPageProps {
  onBackToMain: () => void;
  onOpenTickets: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToMain, onOpenTickets }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'tickets',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Breadcrumb & Page Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-300">
          <button
            onClick={onBackToMain}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-black uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>← Back to Main Page</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact the Gala Committee
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Have questions about attendance, corporate sponsorships, auction consignments, or special accommodations? Submit an inquiry below and our gala team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-300 rounded-lg p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Send an Inquiry</h2>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-gray-100 text-gray-900 border border-gray-300 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inquiry Received, {formData.name}!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to the Gala Committee. A representative will contact you shortly at <span className="font-medium text-gray-900">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'tickets', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded bg-gray-900 text-white text-xs uppercase font-bold hover:bg-black transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abdihakim Ali"
                      className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. abdihakim@example.com"
                      className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (519) 555-0199"
                      className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900 text-xs"
                    >
                      <option value="tickets">Ticket & Reservation Assistance</option>
                      <option value="sponsorship">Sponsorships</option>
                      <option value="auction">Ceramic Donation</option>
                      <option value="press">Media & Press Credentials</option>
                      <option value="accessibility">Accessibility & Dietary Requests</option>
                      <option value="general">General Gala Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your question, sponsorship interest, or ticket requests..."
                    className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded bg-gray-900 text-white text-xs uppercase font-bold tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Venue Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Venue & Contacts Card */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 space-y-4">
              <span className="text-xs uppercase font-bold text-gray-500 block border-b border-gray-200 pb-2">
                Venue & Admin Office
              </span>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-gray-900">{galaData.organization}</span>
                    <span className="block text-xs text-gray-600 mt-0.5">137 Glasgow Street</span>
                    <span className="block text-xs text-gray-600">Kitchener, ON N2G 4X8, Canada</span>
                    <span className="block text-[11px] text-gray-500 mt-1">CEC Co-working Space</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <Mail size={18} className="text-gray-900 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500">Email Contact:</span>
                    <span className="text-xs font-semibold text-gray-900">gala-support@example.ca</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <Phone size={18} className="text-gray-900 shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500">Telephone:</span>
                    <span className="text-xs font-semibold text-gray-900">+1 (xxx) xxx-xxxx</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Venue Map */}
            <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xs">
              {/* Map Header */}
              <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800">
                  <MapPin size={14} className="text-gray-900" />
                  <span>Venue Location Map</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=137+Glasgow+St,+Kitchener,+ON+N2G+4X8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-900 hover:underline"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Interactive Map Embed */}
              <div className="relative w-full h-[260px] sm:h-[300px] bg-gray-100">
                <iframe
                  title="Catalyst Commons Gala Venue Map"
                  src="https://maps.google.com/maps?q=137%20Glasgow%20St,%20Kitchener,%20ON%20N2G%204X8&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Note */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
                <span>137 Glasgow St, Kitchener, ON</span>
                <span>Catalyst Commons</span>
              </div>
            </div>

            {/* Quick FAQ / Notes Card */}
            <div className="bg-white border border-gray-300 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-1.5 text-xs uppercase font-bold text-gray-700">
                <HelpCircle size={14} />
                <span>Attendee Quick Notes</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• <strong>Dress Code:</strong> Casual Attire</li>
                <li>• <strong>Parking:</strong> Plenty parking available</li>
                <li>• <strong>Tax Receipts:</strong> Auto-delivered electronically upon booking</li>
              </ul>
            </div>

            {/* Reserve CTA */}
            <button
              onClick={onOpenTickets}
              className="w-full py-3 rounded bg-gray-900 text-white text-xs uppercase font-bold tracking-wider hover:bg-black transition-colors"
            >
              Reserve Gala Tickets Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
