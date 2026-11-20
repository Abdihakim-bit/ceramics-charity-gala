import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, User, Mail } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';
import galaData from '../data/gala.json';

interface TicketModalProps {
  isOpen: boolean;
  selectedTierId: string | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, selectedTierId, onClose }) => {
  const [userSelectedTier, setUserSelectedTier] = useState<string | null>(null);
  const [prevSelectedTierId, setPrevSelectedTierId] = useState(selectedTierId);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [formData, setFormData] = useState({ name: '', email: '', dietary: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Derive active tier: if the parent passed a new tier, reset user selection
  if (selectedTierId !== prevSelectedTierId) {
    setPrevSelectedTierId(selectedTierId);
    setUserSelectedTier(null);
  }

  const tier = userSelectedTier || selectedTierId || 'patron';

  useEffect(() => {
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setUserSelectedTier(null);
    setFormData({ name: '', email: '', dietary: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 transition-opacity" 
        onClick={handleResetAndClose} 
      />

      {/* Modal Card */}
      <div className="relative bg-gallery-card border border-gallery-border rounded-lg w-full max-w-lg shadow-xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gallery-border flex items-center justify-between bg-gallery-bg">
          <div>
            <h3 className="text-lg font-bold text-gallery-text">
              {isSuccess ? 'Reservation Received' : 'Reserve Gala Tickets'}
            </h3>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1 rounded text-gallery-muted hover:text-gallery-text hover:bg-gallery-card transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-gallery-bg text-gallery-primary border border-gallery-border rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={30} />
            </div>
            <h4 className="text-xl font-bold text-gallery-text">Thank You, {formData.name || 'Gala Guest'}!</h4>
            <p className="text-sm text-gallery-muted leading-relaxed">
              Your reservation for <strong className="text-gallery-text">{guestCount} × {currentTierObj.name}</strong> has been confirmed. A booking confirmation along with your charitable tax receipt note has been sent to <span className="text-gallery-text font-semibold">{formData.email}</span>.
            </p>
            <div className="bg-gallery-bg p-4 rounded border border-gallery-border text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-gallery-muted">Event:</span>
                <span className="font-medium text-gallery-text">{galaData.title} — {galaData.subtitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gallery-muted">Date:</span>
                <span className="font-medium text-gallery-text">{galaData.date} • {galaData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gallery-muted">Location:</span>
                <span className="font-medium text-gallery-text">Catalyst Commons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gallery-muted">Total:</span>
                <span className="font-bold text-gallery-text">${totalPrice} CAD</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full mt-4 py-2.5 rounded bg-gallery-primary text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Tier Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gallery-muted mb-2">
                Select Admission Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {eventDetails.tiers.map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setUserSelectedTier(t.id)}
                    className={`p-2.5 rounded text-xs font-medium border text-center transition-all ${
                      tier === t.id
                        ? 'border-gallery-primary bg-gallery-primary text-white font-bold'
                        : 'border-gallery-border bg-gallery-bg text-gallery-text hover:border-gallery-primary'
                    }`}
                  >
                    <div className="font-bold">{t.name.split(' ')[0]}</div>
                    <div className="text-[11px] opacity-80">${t.price} CAD</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gallery-muted mb-2">
                Number of Guests
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 8].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setGuestCount(num)}
                    className={`flex-1 py-1.5 rounded text-xs font-medium border transition-all ${
                      guestCount === num
                        ? 'border-gallery-primary bg-gallery-primary text-white font-bold'
                        : 'border-gallery-border bg-gallery-bg text-gallery-text hover:border-gallery-primary'
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
                <label className="block text-xs font-medium text-gallery-text mb-1">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-2.5 text-gallery-muted" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Guest / Patron Name"
                    className="w-full pl-9 pr-3 py-2 rounded border border-gallery-border bg-gallery-bg text-gallery-text text-sm focus:outline-none focus:border-gallery-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gallery-text mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-2.5 text-gallery-muted" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3 py-2 rounded border border-gallery-border bg-gallery-bg text-gallery-text text-sm focus:outline-none focus:border-gallery-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gallery-text mb-1">
                  Dietary / Accessibility Notes (Optional)
                </label>
                <input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  placeholder="e.g. Vegetarian, Wheelchair access"
                  className="w-full px-3 py-2 rounded border border-gallery-border bg-gallery-bg text-gallery-text text-sm focus:outline-none focus:border-gallery-primary"
                />
              </div>
            </div>

            {/* Total summary */}
            <div className="p-3.5 rounded bg-gallery-bg border border-gallery-border flex justify-between items-center text-sm">
              <div>
                <span className="font-semibold text-gallery-text">{guestCount} × {currentTierObj.name}</span>
                <p className="text-[11px] text-gallery-muted">Includes charitable donation receipt</p>
              </div>
              <span className="text-xl font-bold text-gallery-text">${totalPrice} CAD</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded bg-gallery-primary text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <ShieldCheck size={16} />
              <span>{isSubmitting ? 'Processing...' : `Confirm Reservation ($${totalPrice} CAD)`}</span>
            </button>
            <p className="text-[10px] text-center text-gallery-muted">
              Demo project only - no real financial transactions or bookings are processed.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
