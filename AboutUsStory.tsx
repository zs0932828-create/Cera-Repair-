import React from 'react';
import { Language } from '../types';
import { FOUNDER_IMAGE, BRAND_LOGO_IMAGE } from '../data/skincareData';
import { Heart, Star, ArrowRight, Check } from 'lucide-react';

interface AboutUsStoryProps {
  language: Language;
  onExploreProducts: () => void;
}

export const AboutUsStory: React.FC<AboutUsStoryProps> = ({ language, onExploreProducts }) => {
  const testimonials = [
    {
      name: 'Maria Siddiqui',
      location: 'Karachi / London',
      concernEn: 'Over-exfoliation burn from 10% Glycolic Peel',
      concernUr: 'Teez Chemical Peel se chehra jala hua tha',
      textEn: 'I spent months trying expensive commercial serums that only made my skin burn worse. Within 4 days of using the gentle milk cleanser and barrier repair cream, the stinging stopped. It was the first time in a year my face didn’t feel like it was on fire.',
      textUr: 'Main ne mehangay commercial serums par hazaron rupaye kharch kiye par jalan khatam nahi hui. Is gentle routine ke 4 din baad meri skin ka teez chubhna band hua. Ek saal mein pehli baar mera chehra bilkul thanda aur comfortable mehsoos hua.',
      daysToHeal: 'Day 12 Result',
      rating: 5
    },
    {
      name: 'Dr. Bilal Qureshi',
      location: 'Lahore',
      concernEn: 'Tretinoin peeling & flaking redness',
      concernUr: 'Retinol/Tretinoin se skin chhil rahi thi',
      textEn: 'As a resident doctor, I know the science of ceramides. Most brands put 0.01% ceramides and 5% synthetic perfume. This formula actually respects the 3:1:1 physiological ratio. My flaking around the nose and mouth healed in less than two weeks.',
      textUr: 'Doctor hone ke nate main ceramides ki science janta hoon. Aksar brands perfume daal dete hain jo mazeed jalan karta hai. Yeh formula waqai skin ke lipid ratio ke mutabiq hai. Meri naak aur munh ke gird ki khushki 2 hafte mein theek ho gayi.',
      daysToHeal: 'Day 14 Result',
      rating: 5
    },
    {
      name: 'Fatima Zahra',
      location: 'Islamabad',
      concernEn: 'Chronic stinging with plain water',
      concernUr: 'Sadah paani lagane par bhi shadeed jalan',
      textEn: 'When even washing my face with cold tap water made me tear up, I knew my skin barrier was gone. The simple 2-step routine saved my skin. No fancy jargon, just pure, honest recovery.',
      textUr: 'Jab taze paani se chehra dhone par bhi ankhon mein paani aa jata tha, to main samajh gayi ke barrier tabah ho chuka hai. Is gentle cream ne meri skin ko bacha liya. Koi fake dawa nahi, sirf sachi recovery.',
      daysToHeal: 'Day 21 Result',
      rating: 5
    }
  ];

  const timelineSteps = [
    {
      day: 'Day 1–3',
      phaseEn: 'Immediate Quenching',
      phaseUr: 'Fori Sakoon (Calming)',
      descEn: 'Stinging subsides. Ceramides and colloidal oat coat exposed nerve endings so washing no longer burns.',
      descUr: 'Jalan aur chubhan mein numayan kami aati hai. Paani lagane se chehra jalna band ho jata hai.'
    },
    {
      day: 'Day 7–10',
      phaseEn: 'Lipid Cohesion',
      phaseUr: 'Lipid Repair (Jild Ka Jurna)',
      descEn: 'Trans-epidermal water loss drops. Flaky patches soften, and natural micro-cracks begin to seal.',
      descUr: 'Khushk chhilne wali patches narm par jati hain aur skin ka natural moisture leak hona ruk jata hai.'
    },
    {
      day: 'Day 21+',
      phaseEn: 'Full Mantle Resilience',
      phaseUr: 'Mukammal Barrier Mazbooti',
      descEn: 'The acid mantle is restored at pH 5.2. Smooth authentic skin texture returns with genuine, healthy radiance.',
      descUr: 'Skin ka acid mantle mazboot ho jata hai. Chehre par natural glow aur narm smooth texture wapas aa jata hai.'
    }
  ];

  return (
    <section id="about-story" className="relative py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#F7F2EB]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Founder Story Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-22">
          
          {/* Left: Founder Candid Photo with Warm Luxury Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#F2EDE4] shadow-md border border-[#EAE4DA] aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src={FOUNDER_IMAGE}
                alt="Founder and cosmetic formulator in sunlit studio with lab notebook and amber bottles"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Natural Caption Scrim */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#141211]/90 via-[#1C1A18]/45 to-transparent text-[#FAF8F5]">
                <p className="text-xs font-mono uppercase tracking-wider text-[#E8DFD1] font-semibold">
                  Formulated with Empathy · No Corporate Fillers
                </p>
                <p className="font-serif text-sm font-medium mt-1 leading-snug">
                  "We understand how frustrating damaged skin can feel. True healing happens with calm patience."
                </p>
              </div>
            </div>

            {/* Quiet caption badge */}
            <div className="mt-3 text-xs text-[#82786E] font-mono text-center sm:text-left">
              <span>Dr. Sarah Lin, Formulator & Founder</span>
              <span aria-hidden="true" className="mx-2 text-[#DDD5C7]">·</span>
              <span>Oxford Biochemical Sciences</span>
            </div>
          </div>

          {/* Right: Human-Sounding Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#9B6846] font-semibold">
              <Heart className="w-3.5 h-3.5 text-[#9B6846]" />
              <span>Our Story & Honest Promise</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1817] leading-[1.15]">
              {language === 'en' ? (
                <>
                  We know that feeling when even <span className="italic font-normal text-[#9B6846]">plain water burns</span> your skin.
                </>
              ) : (
                <>
                  Hum samajhtay hain ke jab sadah <span className="italic font-normal text-[#9B6846]">paani bhi jalnay lagay</span> to kaisa lagta hai.
                </>
              )}
            </h2>

            {/* Authentic Conversational Copy */}
            <div className="space-y-4 text-base text-[#5C554D] leading-relaxed font-light">
              {language === 'en' ? (
                <>
                  <p>
                    A few years ago, I ruined my own skin. Like so many of us who get caught up in ten-step routines, I stacked strong acid peels, gritty scrubs, and daily foaming soaps until my face felt raw, shiny, and tight like plastic. Every single morning was a battle—even washing my face with lukewarm water made my skin flare crimson and sting.
                  </p>
                  <p>
                    When I looked at big commercial skincare shelves, I noticed a frustrating pattern. Brands were selling products loaded with heavy artificial perfume, irritating preservatives, and trace amounts of "hero" ingredients meant for marketing posters rather than real biological repair.
                  </p>
                  <p>
                    We created <strong className="text-[#1A1817] font-semibold">CERA·REPAIR Labs</strong> with a simple, stubborn rule: <span className="text-[#1A1817] font-medium">if an ingredient doesn't actively repair the stratum corneum lipid barrier, it has no business being in the jar.</span> No artificial dyes. No masking scents. Just clean ceramides in the body's natural 3:1:1 lipid golden ratio, soothing cica, and honest hydrators.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Kuch saal pehle main ne khud apni skin ka barrier tabaah kar liya tha. Trend ke peechay bhagte hue main ne teez chemical peels, rough walnut scrubs, aur foaming soaps itne use kiye ke mera chehra chhil gaya aur plastic jaisa khinchne laga. Halat yeh thi ke taze paani se chehra dhona bhi shadeed chubhan deta tha.
                  </p>
                  <p>
                    Bazaar mein jo bari skincare companies thin, wo sirf perfume aur khushbu se bhari hui creams bech rahi thin jin mein asli repair karne wale ingredients naam matra the.
                  </p>
                  <p>
                    Hum ne <strong className="text-[#1A1817] font-semibold">CERA·REPAIR Labs</strong> is aik sunehray usool par banayi: <span className="text-[#1A1817] font-medium">agar koi ingredient skin barrier ko waqai repair nahi karta, to wo bottle mein nahi hoga.</span> Koi artificial perfume nahi, koi harsh sulfates nahi—sirf bio-identical ceramides, soothing cica, aur natural lipids jo skin ko sakoon dein.
                  </p>
                </>
              )}
            </div>

            {/* Warm Personal Signoff with Renewal Seal */}
            <div className="p-5 bg-[#FDFCFA] rounded-2xl border border-[#E8E1D5] flex items-center justify-between gap-4 shadow-xs">
              <div>
                <p className="font-serif text-sm sm:text-base font-medium text-[#1A1817] italic leading-relaxed">
                  {language === 'en'
                    ? '"Your skin isn\'t permanently damaged—it\'s just overwhelmed. Give it patience, give it calm, and let\'s rebuild it together."'
                    : '"Aapki jild hamesha ke liye kharab nahi hui—wo bas thak chuki hai. Isay thoda waqt aur sakoon dein, hum isay sath mil kar theek karenge."'}
                </p>
                <p className="mt-2 text-xs font-mono text-[#9B6846] font-semibold">
                  — Sarah & The CERA·REPAIR Team
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-center shrink-0">
                <div className="w-13 h-13 rounded-full border border-[#E5DACD] bg-white p-1.5 shadow-xs">
                  <img 
                    src={BRAND_LOGO_IMAGE} 
                    alt="Renewal Leaf Emblem" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[9px] font-mono uppercase text-[#82786E] mt-1 font-semibold tracking-wider">
                  Renewal Seal
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <span>{language === 'en' ? 'Explore Formulations' : 'Hamari Formulas Dekhein'}</span>
                <ArrowRight className="w-4 h-4 text-[#D8CFBF]" />
              </button>
            </div>

          </div>

        </div>

        {/* Realistic Healing Progression Timeline */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9B6846] font-semibold">
              Realistic Recovery Clock
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817] mt-1">
              {language === 'en' ? 'What Honest Skin Barrier Healing Looks Like' : 'Skin Barrier Healing Ka Asli Timeline'}
            </h3>
            <p className="mt-2 text-sm text-[#5C554D] font-light">
              {language === 'en'
                ? 'We don\'t promise overnight miracles. Cellular turnover and lipid reconstruction require real biological time.'
                : 'Hum jhootay daaway nahi karte ke raat o raat sab theek ho jayega. Cells ko dubara banne mein waqt lagta hai.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-[#E8E1D5] bg-[#FDFCFA] hover:border-[#CDBFAE] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs font-bold text-[#9B6846] bg-[#F4EDE4] px-2.5 py-0.5 rounded border border-[#E5DACD]">
                      {step.day}
                    </span>
                    <span className="text-xs font-mono text-[#82786E]">Phase 0{idx + 1}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#1A1817]">
                    {language === 'en' ? step.phaseEn : step.phaseUr}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
                    {language === 'en' ? step.descEn : step.descUr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Customer Experiences & Testimonials */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9B6846] font-semibold">
              Real Experiences
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817] mt-1">
              {language === 'en' ? 'Words From Those Who Felt the Burn' : 'Real Customer Experiences (Jinhon Ne Jalan Mehsoos Ki)'}
            </h3>
            <p className="mt-2 text-sm text-[#5C554D] font-light">
              {language === 'en'
                ? 'Honest, un-sponsored reviews from people who were struggling with compromised, stinging barriers.'
                : 'Asli aur sachi aara un logon ki taraf se jinki skin kharab chemicals se jal chuki thi.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFCFA] p-6 rounded-2xl border border-[#E8E1D5] shadow-xs flex flex-col justify-between hover:border-[#CDBFAE] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1 text-[#B58763]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-[#4A5D4E] bg-[#EEF2EE] px-2.5 py-0.5 rounded border border-[#D5E0D5] font-semibold">
                      {t.daysToHeal}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#1A1817] mb-2 font-mono">
                    {language === 'en' ? t.concernEn : t.concernUr}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed italic font-light">
                    "{language === 'en' ? t.textEn : t.textUr}"
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#EFE9DF] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1A1817] block font-serif">{t.name}</span>
                    <span className="text-[#82786E] text-[11px] font-mono">{t.location}</span>
                  </div>
                  <Check className="w-4 h-4 text-[#4A5D4E]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
