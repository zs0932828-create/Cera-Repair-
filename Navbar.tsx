import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { BRAND_LOGO_IMAGE } from '../data/skincareData';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
  activeSection,
  onNavigate
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAE4DA] bg-[#FAF8F5]/92 backdrop-blur-md shadow-xs transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single Element Brand Wordmark with Minimalist Renewal Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="group flex items-center gap-2.5 text-left shrink-0 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#EAE4DA] bg-white shadow-xs p-0.5 shrink-0 group-hover:border-[#9B6846] transition-colors">
            <img 
              src={BRAND_LOGO_IMAGE} 
              alt="CERA·REPAIR Skin Renewal Emblem"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1817] transition-colors group-hover:text-[#9B6846]">
              CERA·REPAIR
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#9B6846] bg-[#F4EDE4] border border-[#E5DACD] px-1.5 py-0.5 rounded font-semibold">
              LABS
            </span>
          </div>
        </button>

        {/* Zone 2: Clean Single-Line Text Links with Warm Bronze Accents */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5C554D]">
          <button
            onClick={() => onNavigate('amazon-picks')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'amazon-picks' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'Amazon Top Picks' : 'Top Products'}
          </button>

          <button
            onClick={() => onNavigate('categories')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'categories' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? '5 Categories' : '5 Categories'}
          </button>

          <button
            onClick={() => onNavigate('about-story')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'about-story' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'Our Story' : 'Hamari Kahani'}
          </button>
          
          <button
            onClick={() => onNavigate('ingredients')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'ingredients' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'Repair Actives' : 'Key Ingredients'}
          </button>
          
          <button
            onClick={() => onNavigate('routines')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'routines' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'AM / PM Routine' : 'Daily Routines'}
          </button>

          <button
            onClick={() => onNavigate('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'quiz' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'Diagnostic' : 'Barrier Test'}
          </button>

          <button
            onClick={() => onNavigate('faqs')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeSection === 'faqs' ? 'text-[#1A1817] font-semibold underline underline-offset-8 decoration-[#9B6846]' : 'hover:text-[#1A1817]'
            }`}
          >
            {language === 'en' ? 'FAQs & Purity' : 'FAQs'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action Area */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle Segmented Button */}
          <div className="flex items-center p-0.5 bg-[#F2EDE4] rounded-md border border-[#E5DACD] text-xs font-medium">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#1A1817] shadow-xs font-semibold'
                  : 'text-[#6E655C] hover:text-[#1A1817]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ur')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                language === 'ur'
                  ? 'bg-white text-[#1A1817] shadow-xs font-semibold'
                  : 'text-[#6E655C] hover:text-[#1A1817]'
              }`}
            >
              Roman Urdu
            </button>
          </div>

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#FAF8F5] bg-[#1A1817] rounded-md hover:bg-[#2E2824] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-[#D8CFBF]" />
            <span className="hidden sm:inline tracking-wide">
              {language === 'en' ? 'Repair Bag' : 'My Bag'}
            </span>
            <span className="font-mono bg-[#9B6846] text-white text-[11px] px-1.5 py-0.2 rounded-full tabular-nums">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Secondary Sub-Nav Bar */}
      <div className="flex lg:hidden items-center justify-start gap-4 overflow-x-auto px-4 py-2 border-t border-[#EAE4DA] text-xs font-medium text-[#5C554D] no-scrollbar bg-[#FAF8F5]/98">
        <button 
          onClick={() => onNavigate('amazon-picks')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'amazon-picks' ? 'text-[#9B6846] font-semibold' : ''}`}
        >
          Amazon Picks
        </button>
        <button 
          onClick={() => onNavigate('categories')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'categories' ? 'text-[#1A1817] font-semibold' : ''}`}
        >
          Categories
        </button>
        <button 
          onClick={() => onNavigate('about-story')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'about-story' ? 'text-[#9B6846] font-semibold' : ''}`}
        >
          Our Story
        </button>
        <button 
          onClick={() => onNavigate('ingredients')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'ingredients' ? 'text-[#1A1817] font-semibold' : ''}`}
        >
          Ingredients
        </button>
        <button 
          onClick={() => onNavigate('routines')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'routines' ? 'text-[#1A1817] font-semibold' : ''}`}
        >
          AM/PM
        </button>
        <button 
          onClick={() => onNavigate('quiz')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'quiz' ? 'text-[#1A1817] font-semibold' : ''}`}
        >
          Quiz
        </button>
        <button 
          onClick={() => onNavigate('faqs')}
          className={`whitespace-nowrap shrink-0 ${activeSection === 'faqs' ? 'text-[#1A1817] font-semibold' : ''}`}
        >
          FAQs
        </button>
      </div>
    </header>
  );
};
