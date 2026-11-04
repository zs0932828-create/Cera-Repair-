import React from 'react';
import { ArrowRight, ShieldCheck, Droplet } from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGE } from '../data/skincareData';

interface HeroProps {
  language: Language;
  onExploreCategories: () => void;
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreCategories,
  onStartQuiz
}) => {
  return (
    <section id="hero" className="relative border-b border-[#EAE4DA] bg-[#FAF8F5] overflow-hidden">
      
      {/* Luxury Architectural Ambient Lighting */}
      <div className="absolute inset-0 bg-clinical-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[620px] h-[620px] bg-gradient-to-br from-[#EFE8DD]/50 via-[#F5EFE6]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[520px] h-[520px] bg-gradient-to-tr from-[#EBE3D7]/60 via-[#E4DDD0]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clinical Trust Label */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#9B6846] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B6846]" />
              <span>Dermatological Barrier Restoration</span>
              <span aria-hidden="true" className="text-[#D8CFBF]">/</span>
              <span>3:1:1 Physiological Lipid Matrix</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1817] leading-[1.12] text-balance">
              {language === 'en' ? (
                <>
                  Repair your compromised <span className="italic font-normal text-[#9B6846]">skin barrier</span> with clinical science.
                </>
              ) : (
                <>
                  Apna damaged <span className="italic font-normal text-[#9B6846]">skin barrier</span> restore karein — clinical science ke sath.
                </>
              )}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#5C554D] leading-relaxed max-w-2xl font-light">
              {language === 'en' ? (
                'Comprehensive restorative protocols across 5 core categories: physiological ceramides, targeted cellular serums, gentle pH-balanced cleansers, and broad-spectrum sunscreen. True healing begins when chronic irritation ends.'
              ) : (
                'Skin barrier ko theek karne ke liye 5 zaroori categories: Ceramide creams, Niacinamide aur Hyaluronic acid serums, sulfate-free cleansers, aur broad spectrum SPF 50. Jild ki asal khubsurti mazboot barrier se shuru hoti hai.'
              )}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartQuiz}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] transition-all rounded shadow-sm cursor-pointer group"
              >
                <span>{language === 'en' ? 'Diagnose Barrier Damage' : 'Skin Barrier Test Karein'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#D8CFBF]" />
              </button>

              <button
                onClick={onExploreCategories}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#1A1817] bg-[#F2EDE4] hover:bg-[#EAE3D6] transition-colors rounded border border-[#DDD5C7] cursor-pointer shadow-xs"
              >
                <span>{language === 'en' ? 'Explore 5 Categories' : '5 Categories Dekhein'}</span>
              </button>
            </div>

            {/* Claim-to-Proof Metric Strip */}
            <div className="pt-8 border-t border-[#EAE4DA] grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#1A1817] tabular-nums">
                  5/5
                </p>
                <p className="text-xs text-[#7A7167] mt-0.5 font-medium">
                  {language === 'en' ? 'Essential Categories' : 'Zaroori Categories'}
                </p>
              </div>

              <div>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#1A1817] tabular-nums">
                  8 Actives
                </p>
                <p className="text-xs text-[#7A7167] mt-0.5 font-medium">
                  {language === 'en' ? 'Clinically Proven' : 'Verified Ingredients'}
                </p>
              </div>

              <div>
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-[#1A1817] tabular-nums">
                  pH 5.2
                </p>
                <p className="text-xs text-[#7A7167] mt-0.5 font-medium">
                  {language === 'en' ? 'Acid Mantle Safe' : 'Sulfate-Free Safe'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photography with Luxury Studio Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#F2EDE4] shadow-md border border-[#EAE4DA] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={HERO_IMAGE}
                alt="Woman gently applying restorative barrier cream in morning light, showing realistic natural skin texture and pores"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
              
              {/* Natural Scrim for High-Contrast Micro Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#141211]/90 via-[#1C1A18]/45 to-transparent text-[#FAF8F5]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#E8DFD1] font-semibold">
                  Authentic Skin Texture · Visible Pores · Zero Airbrush
                </p>
                <p className="font-serif text-sm sm:text-base font-medium mt-1 leading-snug">
                  {language === 'en'
                    ? 'Ceramides seal the stratum corneum, restoring suppleness without synthetic film.'
                    : 'Ceramides jild ke cells ko aapas mein jortay hain aur moisture leak roktay hain.'}
                </p>
              </div>
            </div>

            {/* Professional Floating Clinic Badge */}
            <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-3.5 bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#EAE4DA]">
              <div className="w-10 h-10 rounded-lg bg-[#F4EDE4] text-[#9B6846] flex items-center justify-center shrink-0 border border-[#E5DACD]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-serif font-bold text-[#1A1817]">
                  {language === 'en' ? 'Clinical Dermatology Standard' : 'Dermatologist Standard'}
                </p>
                <p className="text-[#6E655C] font-mono text-[11px] mt-0.5">
                  {language === 'en' ? 'Physiological 3:1:1 lipid balance' : 'Sulfate-free & barrier-safe'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
