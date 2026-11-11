import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, User, Mail } from 'lucide-react';
import eventDetails from '../data/eventDetails.json';

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
      <div className="relative bg-white border border-gray-300 rounded-lg w-full max-w-lg shadow-xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {isSuccess ? 'Reservation Received' : 'Reserve Gala Tickets'}
            </h3>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1 rounded text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-gray-100 text-gray-900 border border-gray-300 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={30} />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Thank You, {formData.name || 'Gala Guest'}!</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your reservation for <strong className="text-gray-900">{guestCount} × {currentTierObj.name}</strong> has been recorded in the system. A confirmation placeholder and tax receipt note have been queued for <span className="text-gray-900 font-semibold">{formData.email}</span>.
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Event:</span>
                <span className="font-medium text-gray-900">Ceramics Charity Gala</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-medium text-gray-900">Saturday, Nov 14, 2026 • 6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium text-gray-900">Catalyst Commons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-bold text-gray-900">${totalPrice} CAD</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full mt-4 py-2.5 rounded bg-gray-900 text-white font-medium text-sm hover:bg-black transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Tier Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
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
                        ? 'border-gray-900 bg-gray-900 text-white font-bold'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
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
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
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
                        ? 'border-gray-900 bg-gray-900 text-white font-bold'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
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
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Guest / Patron Name"
                    className="w-full pl-9 pr-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Dietary / Accessibility Notes (Optional)
                </label>
                <input
                  type="text"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  placeholder="e.g. Vegetarian, Wheelchair access"
                  className="w-full px-3 py-2 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>

            {/* Total summary */}
            <div className="p-3.5 rounded bg-gray-50 border border-gray-200 flex justify-between items-center text-sm">
              <div>
                <span className="font-semibold text-gray-900">{guestCount} × {currentTierObj.name}</span>
                <p className="text-[11px] text-gray-500">Includes charitable donation receipt</p>
              </div>
              <span className="text-xl font-bold text-gray-900">${totalPrice} CAD</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded bg-gray-900 text-white font-medium text-sm hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <ShieldCheck size={16} />
              <span>{isSubmitting ? 'Processing...' : `Confirm Reservation ($${totalPrice} CAD)`}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
