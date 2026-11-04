import React, { useState } from 'react';
import { Language } from '../types';
import { ChevronDown, Check, X } from 'lucide-react';

interface FaqAndTransparencyProps {
  language: Language;
}

export const FaqAndTransparency: React.FC<FaqAndTransparencyProps> = ({ language }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'Why does even plain tap water make my face sting right now?',
      qUr: 'Sadah taze paani lagane par bhi chehra kyun jal raha hai?',
      aEn: 'When your skin barrier is healthy, skin cells are bonded together with natural ceramides and cholesterol like bricks and mortar. When over-cleansing or harsh acids strip away this lipid mortar, microscopic fissures open up. When water hits these exposed sensory nerve endings, it triggers acute stinging. The fix: immediately pause all scrubs and apply a 3:1:1 lipid cream to seal the cracks.',
      aUr: 'Jab skin barrier theek hota hai to skin cells aapas mein ceramides ki cement se bandhi hoti hain. Teez sabun ya scrub se yeh cement ghul jati hai aur bareek zakhmon jaisi daraarein khul jati hain. Paani lagne se andar ki nerves par chubhan hoti hai. Ilaj: scrubs foran band karein aur ceramide cream laga kar un daraaron ko bharein.'
    },
    {
      qEn: 'Can I keep using Vitamin C or Retinol while my skin is red and peeling?',
      qUr: 'Kya jalan aur redness ke dauran Retinol ya Vitamin C jari rakhna chahiye?',
      aEn: 'No. The number one mistake people make is trying to "push through" the burn. Active treatments like L-Ascorbic acid and Retinoids require an intact barrier to function without triggering chronic dermatitis. Stop all actives for 10–14 days. Once all stinging has completely stopped for 5 consecutive days, reintroduce Retinol just once or twice a week cushioned over moisturizer.',
      aUr: 'Hargiz nahi. Sab se bari ghalti yeh hoti hai ke log jalan ke bawajood teez serums lagate rehte hain. 10 se 14 din ke liye tamam acids aur retinol mukammal band kar dein. Jab jalan 5 din tak bilkul khatam ho jaye, tab retinol hafte mein sirf 1-2 din moisturizer ke upar lagayein.'
    },
    {
      qEn: 'How long does a broken skin barrier actually take to heal?',
      qUr: 'Kharab skin barrier ko theek hone mein kitna waqt lagta hai?',
      aEn: 'For mild over-cleansing, initial comfort and relief return in 3 to 7 days. For deep chemical peel burns or long-term over-exfoliation, true stratum corneum regeneration takes 21 to 28 days—which matches the natural epidermal cellular turnover cycle. Consistency with a simple 3-product routine (gentle cleanser, ceramide cream, sunscreen) is key.',
      aUr: 'Halki khushki 3 se 7 din mein theek hoti hai. Agar kisi peel ya teez cream se jala ho to mukammal repair mein 21 se 28 din lagte hain kyunke jild ka naya cycle 28 din ka hota hai. Sirf gentle cleanser, ceramide cream aur sunscreen lagate rahein.'
    },
    {
      qEn: 'Will rich barrier repair creams clog my pores or cause acne breakouts?',
      qUr: 'Kya ceramide aur barrier repair creams se pores band hokar pimples banenge?',
      aEn: 'Not when formulated correctly. Our formulas use non-comedogenic physiological ceramides and bio-fermented squalane that mimic your skin’s own natural sebum. In fact, many breakouts happen because a dehydrated, stripped barrier triggers your oil glands to overproduce thick sebum to compensate. Restoring your barrier usually decreases stubborn acne flares.',
      aUr: 'Nahi. Hamari creams non-comedogenic hain jo pores band nahi karti. Aksar daanay is liye nikalte hain kyunke khushk skin zaroorat se zyada oil banane lagti hai. Jab barrier restore hota hai to skin ka excess oil khud bakhud kam ho jata hai.'
    },
    {
      qEn: 'How do the Amazon purchase links work compared to the website bag?',
      qUr: 'Amazon links aur website shopping bag mein kya farq hai?',
      aEn: 'You have both choices! For our featured clinical products (Eucerin, O\'Keeffe\'s, Dr.Althea, Innoaesthetics), clicking "Buy on Amazon" takes you straight to the verified official Amazon listing for fast Prime delivery. Alternatively, you can add formulations directly to your in-app Repair Bag for direct checkout.',
      aUr: 'Aap ke paas dono options hain! Featured products par "Buy on Amazon" click karke aap direct Amazon se official product order kar sakte hain, ya phir website ki shopping bag se direct checkout kar sakte hain.'
    }
  ];

  const whyWeUse = [
    { title: 'Physiological Ceramides 3:1:1', role: 'Restores the exact biological lipid ratio between epidermal cells.' },
    { title: 'Colloidal Oat Extract', role: 'Calms acute neurogenic stinging and soothes histamine redness.' },
    { title: 'Bio-Identical Phytosqualane', role: 'Non-greasy, weightless moisture that mimics human skin sebum.' },
    { title: 'Centella Asiatica (Cica)', role: 'Speeds epidermal re-epithelialization and heals micro-abrasions.' }
  ];

  const whatWeBan = [
    { title: '0% Denatured Drying Alcohol', reason: 'Dissolves your protective lipid barrier and causes trans-epidermal moisture loss.' },
    { title: '0% Artificial Perfumes & Dyes', reason: 'The #1 trigger for cosmetic contact allergy, burning, and persistent flushing.' },
    { title: '0% Harsh Foaming Sulfates (SLS)', reason: 'Strips the skin\'s natural acid mantle and elevates skin pH above safe levels.' },
    { title: '0% Abrasive Walnut/Granular Scrubs', reason: 'Causes microscopic surface tearing and breaks delicate capillary vessels.' }
  ];

  return (
    <section id="faqs" className="py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Ingredient Transparency Section */}
        <div className="mb-22">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9B6846] font-semibold">
              Ingredient Transparency (Hum Yeh Kyun Use Karte Hain)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817] mt-1">
              {language === 'en'
                ? 'Radical Transparency: What We Put In, and What We Ban'
                : 'Pori Shafafiyat: Hum Yeh Kyun Use Karte Hain Aur Kya Ban Hai'}
            </h2>
            <p className="mt-3 text-base text-[#5C554D] font-light leading-relaxed">
              {language === 'en'
                ? 'Healthy skin is built on what you eliminate as much as what you apply. Here is our formulation pledge.'
                : 'Achi skin ke liye yeh janna zaroori hai ke bottle mein kya shamil hai aur kin nuksan-deh cheezon ko bilkul nikaal diya gaya hai.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What We Formulate With */}
            <div className="bg-[#FDFCFA] p-6 sm:p-9 rounded-2xl border border-[#E8E1D5] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#4A5D4E] font-semibold mb-5">
                <Check className="w-4 h-4 text-[#4A5D4E]" />
                <span>{language === 'en' ? 'What We Intentionally Formulate With' : 'Hum Yeh Kyun Use Karte Hain'}</span>
              </div>

              <div className="space-y-4">
                {whyWeUse.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 pb-3.5 border-b border-[#EFE9DF] last:border-b-0">
                    <div className="w-2 h-2 rounded-full bg-[#4A5D4E] mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1817] font-serif">{item.title}</h4>
                      <p className="text-xs text-[#5C554D] mt-0.5 font-light leading-relaxed">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Strict-Ban */}
            <div className="bg-[#FDFCFA] p-6 sm:p-9 rounded-2xl border border-[#E8E1D5] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#8C2E2E] font-semibold mb-5">
                <X className="w-4 h-4 text-[#8C2E2E]" />
                <span>{language === 'en' ? 'What We Strictly Ban From All Formulas' : 'Kin Cheezon Par Mukammal Pabandi Hai'}</span>
              </div>

              <div className="space-y-4">
                {whatWeBan.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 pb-3.5 border-b border-[#EFE9DF] last:border-b-0">
                    <div className="w-2 h-2 rounded-full bg-[#8C2E2E] mt-1.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1817] font-serif">{item.title}</h4>
                      <p className="text-xs text-[#5C554D] mt-0.5 font-light leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Real Customer FAQs Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9B6846] font-semibold">
              Clinical Advice & Real Answers
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817] mt-1">
              {language === 'en' ? 'Frequently Asked Barrier Questions' : 'Aksar Poochay Janay Walay Sawalat (FAQ)'}
            </h3>
            <p className="mt-2 text-sm text-[#5C554D] font-light">
              {language === 'en'
                ? 'Direct answers from cosmetic formulators and dermatologists.'
                : 'Doctor aur chemist ki taraf se aam skin confusion aur shukook ke wazeh jawabat.'}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FDFCFA] rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:border-[#CDBFAE] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1A1817]">
                      {language === 'en' ? faq.qEn : faq.qUr}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#82786E] transition-transform shrink-0 ${isOpen ? 'rotate-180 text-[#9B6846]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5C554D] leading-relaxed border-t border-[#EFE9DF] bg-[#FAF8F5]/80 font-light">
                      {language === 'en' ? faq.aEn : faq.aUr}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
