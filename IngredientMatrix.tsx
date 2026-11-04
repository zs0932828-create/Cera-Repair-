import React, { useState } from 'react';
import { KEY_INGREDIENTS_DATA } from '../data/skincareData';
import { KeyIngredient, Language } from '../types';
import { Check, AlertTriangle, Clock, Sparkles } from 'lucide-react';

interface IngredientMatrixProps {
  language: Language;
}

export const IngredientMatrix: React.FC<IngredientMatrixProps> = ({ language }) => {
  const [activeIngredientId, setActiveIngredientId] = useState<string>('ceramides');

  const activeIngredient = KEY_INGREDIENTS_DATA.find(i => i.id === activeIngredientId) || KEY_INGREDIENTS_DATA[0];

  return (
    <section id="ingredients" className="relative py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#F7F2EB]/50">
      <div className="absolute inset-0 bg-clinical-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-2 font-semibold">
            02. Active Ingredient Science
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817]">
            {language === 'en'
              ? 'Key Skin Repair Actives & Cellular Matrix'
              : 'Key Repair Ingredients (Website Content Guide)'}
          </h2>
          <p className="mt-3 text-base text-[#5C554D] leading-relaxed font-light">
            {language === 'en'
              ? 'Every active in your regimen targets a distinct physiological component of the dermal matrix. Explore how each ingredient works and what it repairs.'
              : 'Ingredient aur wo kya repair karta hai: Ceramides, Niacinamide, Hyaluronic Acid, Vitamin C, Retinol, Peptides, Cica, aur Panthenol.'}
          </p>
        </div>

        {/* 8 Ingredient Cards Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {KEY_INGREDIENTS_DATA.map((item) => {
            const isSelected = item.id === activeIngredientId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIngredientId(item.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#9B6846] shadow-sm ring-1 ring-[#9B6846]'
                    : 'bg-[#FDFCFA] border-[#E8E1D5] hover:border-[#CDBFAE]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#9B6846] mb-1 font-semibold">
                  {item.tagUr}
                </div>
                <div className="font-serif text-sm sm:text-base font-bold text-[#1A1817] line-clamp-1">
                  {item.name.split(' ')[0]}
                </div>
                <div className="text-xs text-[#82786E] mt-1 line-clamp-1 font-light">
                  {language === 'en' ? item.whatItRepairsEn : item.whatItRepairsUr}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Focal Card for Selected Ingredient */}
        <div className="bg-[#FDFCFA] border border-[#E8E1D5] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Ingredient Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9B6846] uppercase font-semibold">
                  <span>Targeted Molecular Profile</span>
                  <span aria-hidden="true" className="text-[#DDD5C7]">·</span>
                  <span>{activeIngredient.tagUr}</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1A1817] mt-1">
                  {activeIngredient.name}
                </h3>
              </div>

              {/* What it repairs highlight */}
              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#EAE4DA]">
                <span className="text-xs font-semibold text-[#9B6846] uppercase tracking-wider block mb-1 font-mono">
                  {language === 'en' ? 'What It Repairs' : 'Kya Repair Karta Hai'}
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#1A1817]">
                  {language === 'en' ? activeIngredient.whatItRepairsEn : activeIngredient.whatItRepairsUr}
                </p>
              </div>

              {/* Biological Mechanism */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#82786E] mb-1.5 font-semibold">
                  {language === 'en' ? 'Cellular Mechanism of Action' : 'Kaam Karne Ka Tareeqa (Mechanism)'}
                </h4>
                <p className="text-sm sm:text-base text-[#5C554D] leading-relaxed font-light">
                  {language === 'en' ? activeIngredient.mechanismEn : activeIngredient.mechanismUr}
                </p>
              </div>

              {/* Pairings & Synergy */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#82786E] mb-2 font-semibold">
                  {language === 'en' ? 'Best Ingredient Synergies' : 'Best Pairings (Kin Cheezon Ke Sath Milana Chahiye)'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeIngredient.bestPairings.map((p, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4EDE4] text-xs font-medium text-[#1A1817] border border-[#E5DACD]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#4A5D4E]" />
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dermatological Rules & Schedule */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE4DA] space-y-5">
              
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#1A1817] font-semibold border-b border-[#EFE9DF] pb-2.5">
                {language === 'en' ? 'Clinical Protocol & Safety' : 'Istemal Ka Waqt Aur Ehtiyat'}
              </h4>

              <div className="space-y-4 text-xs">
                
                {/* Routine Timing */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg border border-[#E5DACD] text-[#9B6846] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1A1817] block">
                      {language === 'en' ? 'Routine Timing' : 'Subha Ya Raat?'}
                    </span>
                    <span className="text-[#5C554D] mt-0.5 block leading-relaxed font-light">
                      {language === 'en' ? activeIngredient.routineTimingEn : activeIngredient.routineTimingUr}
                    </span>
                  </div>
                </div>

                {/* Recommended Skin Conditions */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg border border-[#E5DACD] text-[#4A5D4E] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1A1817] block">
                      {language === 'en' ? 'Best For Skin Condition' : 'Jild Ki Condition'}
                    </span>
                    <span className="text-[#5C554D] mt-0.5 block leading-relaxed font-light">
                      {language === 'en' ? activeIngredient.recommendedForEn : activeIngredient.recommendedForUr}
                    </span>
                  </div>
                </div>

                {/* Cautions */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg border border-[#E5DACD] text-[#9B6846] shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1A1817] block">
                      {language === 'en' ? 'Dermatologist Caution' : 'Zaroori Ehtiyat'}
                    </span>
                    <span className="text-[#5C554D] mt-0.5 block leading-relaxed font-light">
                      {language === 'en' ? activeIngredient.cautionEn : activeIngredient.cautionUr}
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick Science Note */}
              <div className="pt-3 border-t border-[#EFE9DF] text-[11px] text-[#82786E] italic leading-relaxed font-light">
                {language === 'en'
                  ? 'Gold Standard Rule: Never combine high-strength Retinol and AHA/BHA chemical exfoliants on the same evening. Alternate them to allow the stratum corneum to repair.'
                  : 'Sunehra Usool: Retinol aur AHA/BHA acid ko ek hi raat mein mix na karein, alternate nights par use karein.'}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
