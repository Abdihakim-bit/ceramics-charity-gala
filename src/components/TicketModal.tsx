import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, User, Mail, Users } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

interface TicketModalProps {
  isOpen: boolean;
  selectedTierId: string | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, selectedTierId, onClose }) => {
  const [tier, setTier] = useState<string>(selectedTierId || 'patron');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [formData, setFormData] = useState({ name: '', email: '', dietary: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedTierId) {
      setTier(selectedTierId);
    }
  }, [selectedTierId]);

  useEffect(() => {
    // ESC key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTierObj = eventDetails.tiers.find((t) => t.id === tier) || eventDetails.tiers[1];
  const totalPrice = currentTierObj.price * guestCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', dietary: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gallery-dark/60 backdrop-blur-sm transition-opacity" 
        onClick={handleResetAndClose} 
      />

      {/* Modal Card */}
      <div className="relative bg-gallery-bg border border-gallery-sand rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-gallery-sand flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gallery-terracotta">
              KWAG Benefit Gala 2026
            </span>
            <h3 className="font-serif text-xl font-bold text-gallery-dark">
              {isSuccess ? 'Reservation Confirmed' : 'Reserve Gala Tickets'}
            </h3>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1 rounded-full text-gallery-muted hover:text-gallery-dark hover:bg-gallery-sand/40 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-gallery-celadon/20 text-gallery-terracotta rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <h4 className="font-serif text-2xl text-gallery-dark font-semibold">Thank You, {formData.name}!</h4>
            <p className="text-sm text-gallery-muted leading-relaxed">
              Your reservation for <strong className="text-gallery-dark">{guestCount} × {currentTierObj.name}</strong> has been received. A receipt and confirmation voucher have been sent to <span className="underline text-gallery-dark">{formData.email}</span>.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gallery-sand text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-gallery-muted">Event:</span>
                <span className="font-medium text-gallery-dark">Conservation Gala: Earth & Fire</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gallery-muted">Date & Time:</span>
                <span className="font-medium text-gallery-dark">Sat, Nov 14, 2026 • 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gallery-muted">Location:</span>
                <span className="font-medium text-gallery-dark">KWAG • 101 Queen St N</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full mt-4 py-3 rounded-full bg-gallery-dark text-white font-medium text-sm hover:bg-gallery-terracotta transition-colors"
            >
              Return to Exhibition
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Tier Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gallery-muted mb-2">
                Admission Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {eventDetails.tiers.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                      tier === t.id
                        ? 'border-gallery-terracotta bg-gallery-terracotta/10 text-gallery-terracotta font-semibold'
                        : 'border-gallery-sand bg-white text-gallery-muted hover:border-gallery-dark'
                    }`}
                  >
                    <div>{t.name.split(' ')[0]}</div>
                    <div className="text-[11px] opacity-80">${t.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gallery-muted mb-2">
                Number of Guests
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 4, 8].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setGuestCount(num)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      guestCount === num
                        ? 'border-gallery-dark bg-gallery-dark text-white'
                        : 'border-gallery-sand bg-white text-gallery-dark hover:border-gallery-muted'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gallery-dark mb-1">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3 text-gallery-muted" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sarah Chen"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gallery-sand bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gallery-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gallery-dark mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3 text-gallery-muted" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gallery-sand bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gallery-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gallery-dark mb-1">Dietary Notes / Accessibility Requests (Optional)</label>
                <input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  placeholder="e.g., Gluten-free, wheelchair access"
                  className="w-full px-4 py-2.5 rounded-xl border border-gallery-sand bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gallery-terracotta"
                />
              </div>
            </div>

            {/* Total breakdown */}
            <div className="p-3.5 rounded-xl bg-gallery-sand/40 border border-gallery-sand flex justify-between items-center text-sm">
              <div>
                <span className="font-semibold text-gallery-dark">{guestCount} × {currentTierObj.name}</span>
                <p className="text-[11px] text-gallery-muted">Includes applicable charitable receipt</p>
              </div>
              <span className="font-serif text-xl font-bold text-gallery-dark">${totalPrice} CAD</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-gallery-terracotta text-white font-medium text-sm hover:bg-[#b04a25] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              <ShieldCheck size={16} />
              <span>{isSubmitting ? 'Confirming Reservation...' : `Confirm & Reserve ($${totalPrice} CAD)`}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};