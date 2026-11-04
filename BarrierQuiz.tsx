import React, { useState } from 'react';
import { Language } from '../types';
import { RefreshCw, ArrowRight } from 'lucide-react';

interface BarrierQuizProps {
  language: Language;
  onExploreProducts: () => void;
}

export const BarrierQuiz: React.FC<BarrierQuizProps> = ({ language, onExploreProducts }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions = [
    {
      id: 1,
      titleEn: '1. Stinging & Burning Sensation',
      titleUr: '1. Chubhan Aur Jalan (Stinging Sensation)',
      descEn: 'Does your face sting or burn when applying basic moisturizer, sunscreen, or even plain lukewarm water?',
      descUr: 'Kya sadah moisturizer, sunscreen ya paani lagane par bhi chehre par jalan ya teez chubhan hoti hai?',
      options: [
        { score: 0, labelEn: 'Never, products feel calm and soothing', labelUr: 'Hargiz nahi, sab products comfortable lagte hain' },
        { score: 2, labelEn: 'Occasionally when trying new serums or acids', labelUr: 'Kabhi kabhi naye serum ya acid par halki chubhan hoti hai' },
        { score: 4, labelEn: 'Frequently, even gentle creams and water sting for 1–2 minutes', labelUr: 'Aksar hoti hai, sadah cream aur paani lagane par bhi jalan rehti hai' }
      ]
    },
    {
      id: 2,
      titleEn: '2. Visible Redness & Tight Texture',
      titleUr: '2. Chehre Ki Surkhi (Redness) Aur Khinchao',
      descEn: 'How does your skin look and feel 15 minutes after washing?',
      descUr: 'Chehra dhone ke 15 minute baad skin ki kya soorat-e-haal hoti hai?',
      options: [
        { score: 0, labelEn: 'Supple, balanced, and comfortable', labelUr: 'Narm aur normal feel hoti hai' },
        { score: 2, labelEn: 'Slightly tight around cheeks or forehead', labelUr: 'Gaalon aur maathe par thoda khinchao mehsoos hota hai' },
        { score: 4, labelEn: 'Painfully tight, persistent red flush, or strange plastic-like tight sheen', labelUr: 'Bohat zyada khinchao, surkhi, aur ajeeb si plastic jaisi chamak' }
      ]
    },
    {
      id: 3,
      titleEn: '3. Recent Use of Exfoliants & Actives',
      titleUr: '3. Tez Chemicals / Retinol / Scrubs Ka Istemal',
      descEn: 'Have you used high-percentage AHA/BHA, daily strong retinol, or granular scrubs recently?',
      descUr: 'Kya aap ne haal hi mein daily retinol, scrub, ya koi teez chemical peel use ki hai?',
      options: [
        { score: 0, labelEn: 'No, only gentle barrier-friendly hydration', labelUr: 'Nahi, sirf gentle aur hydrating cheezein' },
        { score: 2, labelEn: '1–2 times a week with mild active serums', labelUr: 'Hafte mein 1-2 baar mild serums' },
        { score: 4, labelEn: 'Multiple actives layered together daily or frequent abrasive scrubs', labelUr: 'Rozana multiple teez serums aur rough scrub use kiye hain' }
      ]
    },
    {
      id: 4,
      titleEn: '4. Flaking & Dehydration Creases',
      titleUr: '4. Chhilna (Flaking) Aur Khushki Ki Bareek Lakeerein',
      descEn: 'Do you notice persistent dry peeling flakes around your nose, mouth, or makeup clinging patchy?',
      descUr: 'Kya naak aur munh ke gird skin chhil rahi hai ya makeup patchy ho jata hai?',
      options: [
        { score: 0, labelEn: 'Smooth surface without flakes', labelUr: 'Skin bilkul smooth hai, koi khushki nahi' },
        { score: 2, labelEn: 'Mild dry patches only in seasonal dry weather', labelUr: 'Mausam badalne par thodi dry patches banti hain' },
        { score: 4, labelEn: 'Constant raw peeling, micro-cracks, and makeup cakes unevenly', labelUr: 'Musal-sal dry flakes, phati hui skin, aur khurdari surface' }
      ]
    }
  ];

  const handleSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const getDiagnosis = () => {
    if (totalScore <= 3) {
      return {
        level: language === 'en' ? 'Healthy Stratum Corneum (Barrier Intact)' : 'Skin Barrier Normal / Mehfooz',
        severity: 'healthy',
        color: 'text-[#4A5D4E]',
        bg: 'bg-[#EEF2EE]',
        border: 'border-[#D5E0D5]',
        summaryEn: 'Your lipid matrix is robust and successfully retaining hydration. Continue your daily broad-spectrum sunscreen and gentle ceramide moisturizer.',
        summaryUr: 'Aapki jild ka barrier theek hai. Rozana sunscreen aur halka moisturizer lagate rahein.',
        rxEn: 'Maintain AM Vitamin C + Sunscreen, PM Niacinamide + Ceramide cream. Mild exfoliation 1–2x weekly is well-tolerated.',
        rxUr: 'AM: Vitamin C + SPF 50. PM: Niacinamide + Ceramide cream. Mild exfoliant hafte mein 1 baar chal sakta hai.'
      };
    } else if (totalScore <= 8) {
      return {
        level: language === 'en' ? 'Moderately Stressed / Dehydrated Barrier' : 'Darmiyani Damage (Dehydrated & Irritated)',
        severity: 'moderate',
        color: 'text-[#9B6846]',
        bg: 'bg-[#FAF4ED]',
        border: 'border-[#E8D8C4]',
        summaryEn: 'Your skin is experiencing trans-epidermal water loss. The acid mantle is depleted, causing tightness, intermittent burning, and dullness.',
        summaryUr: 'Skin ka moisture tezi se leak ho raha hai. Acid mantle kamzor hai jis wajah se jalan aur khinchao rehta hai.',
        rxEn: '7-Day Reset: Stop all scrubs, AHA/BHA, and retinol. Use ONLY Gentle Milk Cleanser, Hyaluronic Acid on damp face, Ceramide Cream, and Mineral SPF 50.',
        rxUr: '7-Din Ka Reset: Tamam teez acids aur retinol foran band karein. Sirf Gentle Cleanser, Ceramide Cream aur Sunscreen lagayein.'
      };
    } else {
      return {
        level: language === 'en' ? 'Critically Compromised Barrier (Acute Damage)' : 'Shadeed Damage (Acid Mantle Breakdown)',
        severity: 'severe',
        color: 'text-[#8C2E2E]',
        bg: 'bg-[#FAF0F0]',
        border: 'border-[#E8CFCF]',
        summaryEn: 'Urgent care required. Micro-cracks in your stratum corneum allow allergens to irritate free nerve endings, causing continuous stinging, flushing, and raw patches.',
        summaryUr: 'Fori repair ki zaroorat hai. Skin cells ke darmiyan cement toot chuka hai, paani lagane par bhi jalan is baat ka saboot hai.',
        rxEn: '14-Day Barrier Fasting Protocol: Strict elimination of all active ingredients. Wash only with lukewarm water or calming milk cleanser. Slather Ceramide 3:1:1 Barrier Cream + pure Squalane morning and night. Do not introduce any serums until stinging ceases.',
        rxUr: '14-Din Ka Emergency Protocol: Har kisam ke serums aur acids band! Sirf Cera-Lipid Barrier Cream din mein 3 baar lagayein aur SPF lagayein.'
      };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <section id="quiz" className="relative py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#F7F2EB]/50">
      <div className="absolute inset-0 bg-clinical-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-2 font-semibold">
            Clinical Self-Assessment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817]">
            {language === 'en'
              ? 'Skin Barrier Damage Diagnostic'
              : 'Skin Barrier Damage Test (Diagnostic)'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C554D] font-light">
            {language === 'en'
              ? 'Answer these 4 clinical observations to evaluate whether your lipid mantle is intact, stressed, or acutely broken.'
              : 'Yeh 4 aasan sawalat solve karein aur janain ke aapki skin ka barrier kitna damage hai aur iska fori ilaj kya hai.'}
          </p>
        </div>

        {/* Questions Accordion / List */}
        <div className="space-y-6">
          {questions.map((q) => {
            const currentSelection = answers[q.id];
            return (
              <div 
                key={q.id}
                className="bg-[#FDFCFA] border border-[#E8E1D5] rounded-2xl p-6 sm:p-7 shadow-xs"
              >
                <h3 className="font-serif text-lg font-bold text-[#1A1817]">
                  {language === 'en' ? q.titleEn : q.titleUr}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#82786E] font-light">
                  {language === 'en' ? q.descEn : q.descUr}
                </p>

                <div className="mt-5 space-y-2.5">
                  {q.options.map((opt, idx) => {
                    const isPicked = currentSelection === opt.score;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          handleSelect(q.id, opt.score);
                          setShowResult(true);
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer border ${
                          isPicked
                            ? 'bg-[#F4EDE4] border-[#9B6846] text-[#1A1817] font-semibold ring-1 ring-[#9B6846]'
                            : 'bg-[#FAF8F5] border-[#EAE4DA] text-[#5C554D] hover:bg-[#F2EDE4]'
                        }`}
                      >
                        <span className="leading-snug">{language === 'en' ? opt.labelEn : opt.labelUr}</span>
                        <span className="font-mono text-xs text-[#9B6846] shrink-0 ml-3 font-semibold">
                          {opt.score === 0 ? '0 pts' : `+${opt.score} pts`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Results Box */}
        {showResult && (
          <div className={`mt-10 p-6 sm:p-9 rounded-2xl border ${diagnosis.border} ${diagnosis.bg} shadow-md animate-in fade-in duration-300`}>
            <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-5 mb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#82786E] font-semibold">
                  {language === 'en' ? 'Diagnostic Result' : 'Tashkhees (Test Nateeja)'}
                </span>
                <h3 className={`font-serif text-2xl sm:text-3xl font-bold mt-1 ${diagnosis.color}`}>
                  {diagnosis.level}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#82786E] block font-mono">
                  {language === 'en' ? 'Damage Index' : 'Damage Score'}
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#1A1817] tabular-nums">
                  {totalScore} / 16
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#3C3834] leading-relaxed mb-5 font-light">
              {language === 'en' ? diagnosis.summaryEn : diagnosis.summaryUr}
            </p>

            <div className="bg-white/90 p-5 rounded-xl border border-[#DDD5C7] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1817] block mb-1.5 font-mono">
                {language === 'en' ? 'Prescribed Clinical Protocol:' : 'Dermatologist Hidayat / Routine:'}
              </span>
              <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed">
                {language === 'en' ? diagnosis.rxEn : diagnosis.rxUr}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>{language === 'en' ? 'Shop Barrier Repair Routine' : 'Recommended Products Dekhein'}</span>
                <ArrowRight className="w-4 h-4 text-[#D8CFBF]" />
              </button>

              <button
                onClick={() => {
                  setAnswers({ 1: 0, 2: 0, 3: 0, 4: 0 });
                  setShowResult(false);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-medium text-[#82786E] hover:text-[#1A1817] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Retake Quiz' : 'Dobara Test Karein'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
