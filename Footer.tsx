import React from 'react';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';
import { BRAND_LOGO_IMAGE } from '../data/skincareData';

interface FooterProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  return (
    <footer className="bg-[#181615] text-[#E8E2D8] border-t border-[#2E2A27] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2E2A27]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-white p-0.5 shrink-0 shadow-sm">
                <img 
                  src={BRAND_LOGO_IMAGE} 
                  alt="CERA·REPAIR Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  CERA·REPAIR
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-[#D4C3A3] bg-[#2E2A27] px-2 py-0.5 rounded font-semibold">
                  LABS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89F91] max-w-sm leading-relaxed font-light">
              {language === 'en'
                ? 'Clinical skin barrier repair platform. Formulated on the physiological lipid ratio with bio-identical ceramides, soothing cica, and broad-spectrum photoprotection.'
                : 'Skin barrier recovery platform. Ceramide creams, active serums, pH-balanced cleansers aur broad-spectrum sunscreen ke sath jild ki asal sehat wapas layein.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A89F91]">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Dermatologist Formulated · Sulfate-Free · Non-Stripping</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#D4C3A3] font-semibold">
              {language === 'en' ? 'Core Categories' : '5 Categories'}
            </p>
            <ul className="space-y-2.5 text-xs text-[#A89F91]">
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  1. Barrier Moisturizers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  2. Targeted Repair Serums
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  3. Broad Spectrum Sunscreen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4. Gentle Cleansers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('categories')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5. Mild Acid Exfoliants
                </button>
              </li>
            </ul>
          </div>

          {/* Science & Protocols */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#D4C3A3] font-semibold">
              {language === 'en' ? 'Clinical Science & FAQs' : 'Science Aur Sawalat'}
            </p>
            <ul className="space-y-2.5 text-xs text-[#A89F91]">
              <li>
                <button 
                  onClick={() => onNavigate('amazon-picks')} 
                  className="hover:text-white transition-colors cursor-pointer text-[#E8DFD1]"
                >
                  Amazon Top Picks (5 Essentials)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about-story')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story & Founder's Promise
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ingredients')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  8 Key Repair Ingredients Matrix
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('routines')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AM & PM Routine Protocol
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('quiz')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skin Barrier Diagnostic Test
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faqs')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Barrier Questions (FAQs)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7167]">
          <p>
            © {new Date().getFullYear()} CERA·REPAIR Labs. All rights reserved. Clinical formulation research and barrier restoration guidance.
          </p>
          <div className="flex items-center gap-2">
            <span>Crafted for authentic, healthy skin</span>
            <span aria-hidden="true">·</span>
            <span>Zero Synthetic Airbrushing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
