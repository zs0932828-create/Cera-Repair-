import React, { useState } from 'react';
import { CartItem, Language } from '../types';
import { X, Trash2, Plus, Minus, CheckCircle2, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  language,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod' // cash on delivery or card
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 65;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 7;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address) return;
    setOrderConfirmed(true);
  };

  const handleDone = () => {
    setOrderConfirmed(false);
    setIsCheckingOut(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#141211]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE4DA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#EAE4DA] flex items-center justify-between bg-white/70">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1A1817]">
              {language === 'en' ? 'Your Repair Bag' : 'Aap Ka Shopping Bag'}
            </h3>
            <span className="text-xs text-[#82786E] font-mono tabular-nums">
              {items.reduce((sum, i) => sum + i.quantity, 0)} {language === 'en' ? 'formulation(s)' : 'cheezein'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-lg text-[#82786E] hover:text-[#1A1817] hover:bg-[#F2EDE4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-[#F2EDE4] px-5 py-3.5 border-b border-[#EAE4DA] text-xs">
          {subtotal >= freeShippingThreshold ? (
            <p className="font-semibold text-[#4A5D4E] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4A5D4E]" />
              <span>{language === 'en' ? 'You qualify for Free Express Delivery!' : 'Mubarak! Free Delivery Activated.'}</span>
            </p>
          ) : (
            <div>
              <p className="text-[#5C554D] font-light">
                {language === 'en' 
                  ? `Add $${(freeShippingThreshold - subtotal).toFixed(0)} more for Free Clinical Delivery`
                  : `Free delivery ke liye mazeed $${(freeShippingThreshold - subtotal).toFixed(0)} ka samaan add karein`}
              </p>
              <div className="mt-2 w-full bg-[#E5DACD] rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-[#9B6846] h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {orderConfirmed ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-[#EEF2EE] text-[#4A5D4E] rounded-full flex items-center justify-center mx-auto border border-[#D5E0D5]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#1A1817]">
                {language === 'en' ? 'Order Confirmed!' : 'Order Confirm Ho Gaya!'}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C554D] max-w-xs mx-auto leading-relaxed font-light">
                {language === 'en'
                  ? `Thank you, ${formData.name}. Your barrier repair kit has been queued for immediate sterile dispatch.`
                  : `Shukriya, ${formData.name}. Aapka skin repair parcel foran rawana kiya ja raha hai.`}
              </p>
              <div className="p-4 bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] text-xs text-left max-w-xs mx-auto space-y-1">
                <p className="text-[#82786E] font-mono">Order Tracking #CR-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p className="font-semibold text-[#1A1817] font-mono text-sm pt-1">Total: ${total.toFixed(2)}</p>
                <p className="text-[#82786E]">Method: {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit / Debit Card'}</p>
                <p className="text-[#82786E]">Address: {formData.address}</p>
              </div>
              <button
                onClick={handleDone}
                className="mt-4 px-6 py-3 text-xs font-semibold text-[#FAF8F5] bg-[#1A1817] rounded-lg hover:bg-[#2E2824] transition-colors cursor-pointer shadow-xs"
              >
                {language === 'en' ? 'Back to Store' : 'Store Par Wapas Jayein'}
              </button>
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
              <h4 className="font-serif text-base font-bold text-[#1A1817]">
                {language === 'en' ? 'Dispatch & Delivery Information' : 'Delivery Ki Maloomat'}
              </h4>

              <div>
                <label className="block font-medium text-[#1A1817] mb-1 font-mono text-[11px] uppercase">
                  {language === 'en' ? 'Full Name *' : 'Mukammal Naam *'}
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Ayesha Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-[#E5DACD] bg-white rounded-lg text-xs focus:outline-none focus:border-[#9B6846]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#1A1817] mb-1 font-mono text-[11px] uppercase">
                  {language === 'en' ? 'Phone Number *' : 'Phone Number *'}
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border border-[#E5DACD] bg-white rounded-lg text-xs focus:outline-none focus:border-[#9B6846]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#1A1817] mb-1 font-mono text-[11px] uppercase">
                  {language === 'en' ? 'Shipping Address *' : 'Pora Address *'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Street, House/Apt #, City"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 border border-[#E5DACD] bg-white rounded-lg text-xs focus:outline-none focus:border-[#9B6846]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#1A1817] mb-1 font-mono text-[11px] uppercase">
                  {language === 'en' ? 'Payment Method' : 'Adaigi Ka Tareeqa'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3 text-center rounded-lg border cursor-pointer font-medium text-xs transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#9B6846] bg-[#F4EDE4] text-[#1A1817] font-semibold'
                        : 'border-[#E5DACD] bg-white text-[#5C554D]'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 text-center rounded-lg border cursor-pointer font-medium text-xs transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#9B6846] bg-[#F4EDE4] text-[#1A1817] font-semibold'
                        : 'border-[#E5DACD] bg-white text-[#5C554D]'
                    }`}
                  >
                    Card Payment
                  </button>
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-3 border border-[#E5DACD] rounded-lg font-semibold text-[#5C554D] hover:bg-[#F2EDE4] transition-colors cursor-pointer"
                >
                  {language === 'en' ? 'Back' : 'Wapas'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#1A1817] text-[#FAF8F5] rounded-lg font-semibold hover:bg-[#2E2824] transition-colors cursor-pointer shadow-xs"
                >
                  {language === 'en' ? `Confirm ($${total.toFixed(2)})` : `Order Confirm Karein`}
                </button>
              </div>
            </form>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="text-sm text-[#82786E] font-light">
                {language === 'en' ? 'Your repair bag is currently empty.' : 'Aapka shopping bag khali hai.'}
              </p>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-[#9B6846] hover:underline cursor-pointer"
              >
                {language === 'en' ? 'Explore 5 Categories' : 'Categories Explore Karein'}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-3.5 p-3.5 bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-cover rounded-lg bg-white border border-[#EAE4DA] shrink-0 p-1"
                />

                <div className="flex-1 min-w-0">
                  <h5 className="font-serif text-xs font-bold text-[#1A1817] truncate">
                    {item.product.name}
                  </h5>
                  <p className="text-[11px] font-mono text-[#9B6846] mt-0.5 tabular-nums font-semibold">
                    ${item.product.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded bg-white border border-[#E5DACD] text-[#5C554D] hover:text-[#1A1817] cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono text-xs font-semibold tabular-nums px-1.5 text-[#1A1817]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded bg-white border border-[#E5DACD] text-[#5C554D] hover:text-[#1A1817] cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  aria-label="Remove item"
                  className="p-2 text-[#A89F91] hover:text-[#8C2E2E] transition-colors cursor-pointer shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Area with Subtotals and Checkout Trigger */}
        {!orderConfirmed && !isCheckingOut && items.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-[#EAE4DA] bg-white/70 space-y-3.5">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#82786E]">
                <span>{language === 'en' ? 'Subtotal' : 'Subtotal'}</span>
                <span className="font-mono tabular-nums font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#82786E]">
                <span>{language === 'en' ? 'Shipping' : 'Delivery'}</span>
                <span className="font-mono tabular-nums font-medium">
                  {shipping === 0 ? (language === 'en' ? 'FREE' : 'Muft') : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1A1817] pt-2 border-t border-[#EFE9DF]">
                <span>{language === 'en' ? 'Total' : 'Total'}</span>
                <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <span>{language === 'en' ? 'Proceed to Checkout' : 'Order Mukammal Karein'}</span>
              <ArrowRight className="w-4 h-4 text-[#D8CFBF]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
