import React, { useState } from 'react';
import { 
  MORNING_ROUTINE_STEPS, 
  NIGHT_ROUTINE_STEPS, 
  ADDITIONAL_REPAIR_METHODS 
} from '../data/skincareData';
import { Language } from '../types';
import { 
  Sun, 
  Moon, 
  CheckCircle, 
  Clock 
} from 'lucide-react';

interface RoutineGuideProps {
  language: Language;
}

export const RoutineGuide: React.FC<RoutineGuideProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'morning' | 'night'>('morning');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const toggleStep = (stepKey: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };

  const steps = activeTab === 'morning' ? MORNING_ROUTINE_STEPS : NIGHT_ROUTINE_STEPS;

  return (
    <section id="routines" className="py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-2 font-semibold">
            03. Protocol & Circadian Rhythms
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817]">
            {language === 'en'
              ? 'Skin Repair Method & Daily Routine Guide'
              : 'Skin Repair Method/Routine (Website Guide)'}
          </h2>
          <p className="mt-3 text-base text-[#5C554D] leading-relaxed font-light">
            {language === 'en'
              ? 'Your skin protects during the daytime and repairs during the night. Aligning products with this biological clock accelerates barrier recovery by up to 3x.'
              : 'Subha aur raat ka tareeqa-e-kar: Morning routine dhoop aur pollution se shield karti hai, jabke Night routine deep cellular repair karti hai.'}
          </p>
        </div>

        {/* Morning vs Night Routine Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#F2EDE4] rounded-xl border border-[#E5DACD] max-w-md mb-10 shadow-xs">
          <button
            onClick={() => setActiveTab('morning')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'morning'
                ? 'bg-white text-[#1A1817] shadow-xs'
                : 'text-[#5C554D] hover:text-[#1A1817]'
            }`}
          >
            <Sun className={`w-4 h-4 ${activeTab === 'morning' ? 'text-[#9B6846]' : ''}`} />
            <span>{language === 'en' ? 'Morning Routine (Shield)' : 'Morning Routine (Subha)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('night')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'night'
                ? 'bg-white text-[#1A1817] shadow-xs'
                : 'text-[#5C554D] hover:text-[#1A1817]'
            }`}
          >
            <Moon className={`w-4 h-4 ${activeTab === 'night' ? 'text-[#5F587D]' : ''}`} />
            <span>{language === 'en' ? 'Night Routine (Rebuild)' : 'Night Routine (Raat)'}</span>
          </button>
        </div>

        {/* Step-by-Step Protocol Cards */}
        <div className="space-y-4 mb-18">
          {steps.map((step) => {
            const stepKey = `${activeTab}-${step.stepNumber}`;
            const isDone = !!completedSteps[stepKey];

            return (
              <div
                key={step.stepNumber}
                className={`bg-[#FDFCFA] border rounded-2xl p-5 sm:p-7 transition-all shadow-xs ${
                  isDone 
                    ? 'border-[#C5A880] bg-[#FAF7F2]' 
                    : 'border-[#E8E1D5] hover:border-[#CDBFAE]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Step Number Circle */}
                    <button
                      onClick={() => toggleStep(stepKey)}
                      aria-label="Toggle step completed"
                      className="mt-0.5 text-[#9B6846] hover:scale-105 transition-transform cursor-pointer shrink-0"
                    >
                      {isDone ? (
                        <CheckCircle className="w-6 h-6 fill-[#9B6846] text-white" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-[#9B6846] flex items-center justify-center text-xs font-mono font-bold text-[#9B6846]">
                          {step.stepNumber}
                        </div>
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#9B6846] font-semibold">
                        <span>{step.category}</span>
                        <span aria-hidden="true" className="text-[#DDD5C7]">·</span>
                        <span>{activeTab === 'morning' ? 'AM Protocol' : 'PM Protocol'}</span>
                      </div>

                      <h3 className={`font-serif text-xl sm:text-2xl font-bold mt-1 text-[#1A1817] ${isDone ? 'line-through text-[#82786E]' : ''}`}>
                        {language === 'en' ? step.titleEn : step.titleUr}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base text-[#5C554D] leading-relaxed max-w-3xl font-light">
                        {language === 'en' ? step.whyEn : step.whyUr}
                      </p>

                      {/* Dermatologist clinical tip */}
                      <div className="mt-4 inline-flex items-center gap-2 text-xs bg-[#F4EDE4] px-3.5 py-2 rounded-lg border border-[#E5DACD] text-[#1A1817]">
                        <Clock className="w-3.5 h-3.5 text-[#9B6846] shrink-0" />
                        <span className="font-semibold text-[#1A1817]">
                          {language === 'en' ? 'Clinical Protocol:' : 'Doctor Ki Hidayat:'}
                        </span>
                        <span className="text-[#5C554D]">
                          {language === 'en' ? step.dermatologistTipEn : step.dermatologistTipUr}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleStep(stepKey)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#1A1817] hover:bg-[#EAE3D6] bg-[#F2EDE4] border border-[#DDD5C7] rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {isDone ? (language === 'en' ? 'Completed' : 'Mukammal') : (language === 'en' ? 'Mark Done' : 'Check Karein')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Repair Methods Section */}
        <div className="pt-10 border-t border-[#EAE4DA]">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-1 font-semibold">
              Holistic Cellular Restoration
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">
              {language === 'en' 
                ? '5 Holistic Skin Repair Methods (Beyond Creams)' 
                : 'Additional Repair Methods (Lifestyle & Tools)'}
            </h3>
            <p className="mt-2 text-sm text-[#5C554D] font-light">
              {language === 'en'
                ? 'Skin cells repair from the inside out. Combining topical ceramides with internal cellular support speeds recovery by up to 50%.'
                : 'Topical creams ke ilawa andar se healing ke liye yeh 5 tariqe nihayat asar-daar hain.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_REPAIR_METHODS.map((method) => (
              <div 
                key={method.id}
                className="bg-[#FDFCFA] p-6 rounded-2xl border border-[#E8E1D5] hover:border-[#CDBFAE] transition-all shadow-xs"
              >
                <div className="text-xs font-mono text-[#9B6846] mb-1.5 font-semibold">
                  {language === 'en' ? method.frequencyEn : method.frequencyUr}
                </div>
                
                <h4 className="font-serif text-lg font-bold text-[#1A1817]">
                  {language === 'en' ? method.titleEn : method.titleUr}
                </h4>

                <p className="mt-1 text-xs font-semibold text-[#4A5D4E] font-mono">
                  {language === 'en' ? method.benefitEn : method.benefitUr}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#5C554D] leading-relaxed font-light">
                  {language === 'en' ? method.howItWorksEn : method.howItWorksUr}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
