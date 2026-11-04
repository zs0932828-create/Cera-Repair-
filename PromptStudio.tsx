import React, { useState } from 'react';
import { NATURAL_PROMPT_TEMPLATES } from '../data/skincareData';
import { PromptTemplate, Language } from '../types';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Camera, 
  Sliders, 
  CheckCheck,
  PenTool,
  ShieldAlert,
  HeartHandshake,
  Layout,
  UserCheck,
  FileText,
  BadgeAlert
} from 'lucide-react';

interface PromptStudioProps {
  language: Language;
}

export const PromptStudio: React.FC<PromptStudioProps> = ({ language }) => {
  // Main Studio Mode Switcher
  const [activeTab, setActiveTab] = useState<'copy' | 'photo'>('copy');

  // Photo Prompts state
  const [selectedPrompt, setSelectedPrompt] = useState<PromptTemplate>(NATURAL_PROMPT_TEMPLATES[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Custom Photo Prompt Builder state
  const [subject, setSubject] = useState<string>('application');
  const [lens, setLens] = useState<string>('50mm');
  const [lighting, setLighting] = useState<string>('morning_window');
  const [skinDetail, setSkinDetail] = useState<string>('visible_pores');
  const [aiTarget, setAiTarget] = useState<string>('midjourney');
  const [customCopied, setCustomCopied] = useState<boolean>(false);

  // Copywriting Prompts state
  const [selectedCopyCategory, setSelectedCopyCategory] = useState<string>('website-copy');

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCustomGeneratedPrompt = () => {
    const subjectsMap: Record<string, string> = {
      application: `Close-up candid photograph of a woman's fingers gently patting lightweight barrier cream onto her cheek, authentic skin texture with visible pores and natural micro-contours, unposed serene expression`,
      bottles_stone: `Authentic product photography of amber dropper serum bottle and ceramic cream jar placed on raw porous travertine stone countertop, subtle water droplets, folded off-white linen cloth beside it`,
      macro_skin: `Dermatological macro close-up photograph of healthy radiant human skin on cheekbone, authentic pores clearly visible, soft dewy hydration sheen, subtle micro-texture without airbrushing`,
      pedestal_jar: `Minimalist frosted glass jar of ceramide barrier repair balm resting on a textured limestone pedestal, elegant luxury cosmetic studio setup, clean muted neutral tones`
    };

    const lensesMap: Record<string, string> = {
      '50mm': 'shot on DSLR camera 50mm f/1.8 lens, shallow depth of field, natural optical bokeh',
      '35mm': 'shot on Canon EOS 5D 35mm lens, documentary candid perspective, crisp organic focus',
      '100mm': 'shot on 100mm f/2.8 macro lens, ultra-sharp epidermal surface detail, shallow focal plane',
      'leica': 'shot on Leica M10 35mm Summicron, filmic grain texture, organic dynamic range'
    };

    const lightingMap: Record<string, string> = {
      morning_window: 'soft natural morning window daylight streaming from side, gentle delicate shadows, authentic warm undertones',
      diffused: 'soft diffused overcast daylight through sheer curtains, no harsh specular reflections, true-to-life skin tones',
      golden: 'warm low-angle golden hour sunlight casting soft architectural shadows, serene calm atmosphere'
    };

    const skinDetailsMap: Record<string, string> = {
      visible_pores: 'realistic human skin texture with visible pores, no makeup look, non-airbrushed authentic complexion, 4K photorealistic',
      dewy_glow: 'subtle dewy post-skincare glow, natural skin hydration barrier, realistic epidermal highlights, candid documentary feel',
      natural_candid: 'candid unposed aesthetic, slightly imperfect authentic human face, natural color grading, no plastic shine'
    };

    const base = `${subjectsMap[subject]}, ${lensesMap[lens]}, ${lightingMap[lighting]}, ${skinDetailsMap[skinDetail]}`;

    if (aiTarget === 'midjourney') {
      return `${base} --style raw --ar 16:9 --v 6.1`;
    } else if (aiTarget === 'leonardo') {
      return `${base} (Photoreal Mode ON, Depth of Field: High, Raw Dynamic Range)`;
    } else {
      return `${base}, highly detailed authentic photography, no CGI, no 3D render`;
    }
  };

  const customPromptString = getCustomGeneratedPrompt();

  // The 4 Core Human Touch Copywriting Prompts provided by user
  const humanTouchPrompts = [
    {
      id: 'website-copy',
      titleEn: '1. Website Content Writing Prompt (Human-Sounding Copy)',
      titleUr: '1. Human-Sounding Website Copy Prompt',
      badge: 'Zero AI-Slop Copy',
      descriptionEn: 'Instructs the LLM to write like an experienced skincare expert with 10 years of clinical empathy. Banned buzzwords: unlock, elevate, game-changer, seamless.',
      descriptionUr: '10 saal ke tajurbakar skincare expert jaisi warm aur sachi zubaan mein likhwayein. Robotic alfaz bilkul mamnoo hain.',
      promptText: `Write website copy for a skin repair/skincare brand in a warm, conversational, and trustworthy tone, as if a real skincare expert with 10 years of experience is talking directly to the reader. Use simple everyday language, avoid robotic or overly promotional phrases, include personal-feeling statements like "we understand how frustrating damaged skin can feel," vary sentence length naturally (mix short punchy sentences with longer explanatory ones), avoid repetitive sentence structures, avoid overused AI phrases like "unlock," "elevate," "in today's world," "game-changer," and "seamless." Make it sound like it was written by a real person who genuinely cares about the customer's skin concerns, not a marketing bot.`,
      negativeRules: 'Banned buzzwords: "unlock", "elevate", "in today\'s world", "game-changer", "seamless", "dive in", "delve".',
      keyInstructions: [
        'Vary sentence length naturally (mix short punchy lines with descriptive sentences)',
        'Include empathetic statements ("we know that tight, stinging sensation...")',
        'Avoid repetitive corporate marketing templates',
        'Speak directly as a trusted mentor, not a sales representative'
      ]
    },
    {
      id: 'design-prompt',
      titleEn: '2. Website Design & Visual Prompt (Professional Aesthetic)',
      titleUr: '2. Clean & Professional Design Prompt',
      badge: 'Visual Architecture',
      descriptionEn: 'Directs designers or code generation to build a soft minimalist layout with warm neutrals, generous breathing room, and realistic photography.',
      descriptionUr: 'Clean, modern minimalist layout jahan soft neutral colors, authentic photography aur professional dermatology feel ho.',
      promptText: `Design a clean, modern skincare website layout with a soft minimalist aesthetic, warm neutral color palette (beige, soft white, muted sage green or terracotta accents), generous white space, soft rounded corners, high-quality realistic product photography (not stock-photo looking), authentic lifestyle images, subtle natural shadows instead of flat design, trustworthy and calming feel similar to premium dermatology brands, clear readable typography, professional but approachable not overly corporate.`,
      negativeRules: 'Avoid neon gradients, harsh drop-shadows, cramped clutter, clip-art icons, and glossy stock models.',
      keyInstructions: [
        'Soft minimalist layout with generous whitespace and breathable hierarchy',
        'Warm neutral palette (beige, chalk white, muted sage, terracotta)',
        'Authentic lifestyle & clinical texture photography (no fake stock photos)',
        'Calming, credible presence comparable to pharmaceutical dermatology labs'
      ]
    },
    {
      id: 'about-us-prompt',
      titleEn: '3. "About Us" Page Prompt (The Human Touch Story)',
      titleUr: '3. "About Us" Founder Story Prompt (Sab Se Zaroori)',
      badge: 'Emotional Connection',
      descriptionEn: 'Generates a heartfelt founder origin story rooted in a personal struggle with damaged skin, emphasizing transparency over corporate ego.',
      descriptionUr: 'Brand ki bunyaad ki sachi kahani — personal skin struggle, commercial brands se farq, aur customer se sacha wada.',
      promptText: `Write an "About Us" page for a skin repair brand that tells a genuine founding story — why this brand started, a personal struggle with skin issues that inspired it, what makes the approach different from big commercial brands, and a promise to customers. Keep it honest, humble, and relatable rather than salesy. Avoid corporate jargon. End with a warm, personal closing line, not a generic call-to-action.`,
      negativeRules: 'Avoid corporate self-congratulation, "our mission is to disrupt...", and pushy sales links at the end.',
      keyInstructions: [
        'Focus on the vulnerable turning point (e.g., severe chemical peel burn or eczema)',
        'Explain why commercial brands failed (filler ingredients, synthetic perfumes)',
        'State the core promise in simple, non-technical everyday language',
        'Conclude with a warm, personal sign-off from the founder'
      ]
    },
    {
      id: 'anti-ai-detection',
      titleEn: '4. AI-Detection Negative Rules (Banned Transitions)',
      titleUr: '4. AI-Detection Bypass & Human Voice Rules',
      badge: 'Stealth & Authenticity',
      descriptionEn: 'Essential prompt suffix to attach to ANY AI generation to strip robotic transitional markers and force authentic human cadence.',
      descriptionUr: 'Jab bhi ChatGPT ya Claude se content likhwayein, yeh prompt ke aakhir mein shamil karein taake robotic na lage.',
      promptText: `Avoid AI-sounding transitions like "moreover," "furthermore," "in conclusion," "it's important to note." Write with natural imperfections, contractions (like "we're," "don't," "you'll"), and occasional casual phrasing. Vary paragraph lengths — don't make every paragraph the same size.`,
      negativeRules: 'Strictly prohibit "moreover", "furthermore", "in conclusion", "it is important to note", "delve into".',
      keyInstructions: [
        'Enforce contractions ("we\'re", "can\'t", "you\'ll", "it\'s")',
        'Vary paragraph sizing — use single-sentence paragraphs alongside multi-line paragraphs',
        'Add casual natural pacing and conversational rhetorical questions',
        'Remove rigid formal connective phrases that signal algorithmic generation'
      ]
    }
  ];

  const currentCopy = humanTouchPrompts.find(p => p.id === selectedCopyCategory) || humanTouchPrompts[0];

  return (
    <section id="prompts" className="py-16 sm:py-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AI Studio & Human-Voice Engineering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {language === 'en'
              ? 'Human Touch Copywriting & Visual Prompts'
              : 'Professional + Human Touch Prompts (Jo Lage Na Ke AI Ne Banaya Hai)'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {language === 'en'
              ? 'Complete studio of prompt blueprints designed to eliminate AI slop—from natural 50mm DSLR camera physics to warm, human copywriting without robotic buzzwords like "unlock" or "game-changer".'
              : 'Poori website ke liye ready-to-use prompts: copywriting, modern minimalist design, founding story, aur AI-detection avoid karne ke secret rules.'}
          </p>
        </div>

        {/* Tab Switcher: Copywriting vs Photography */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-10">
          <button
            onClick={() => setActiveTab('copy')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'copy'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <PenTool className="w-4 h-4 text-amber-400" />
            <span>{language === 'en' ? '✍️ Human-Touch Copywriting Prompts' : '✍️ Human-Sounding Copy Prompts'}</span>
          </button>

          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'photo'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Camera className="w-4 h-4 text-amber-400" />
            <span>{language === 'en' ? '📸 Natural Skincare Photography Prompts' : '📸 Natural Look Photo Prompts'}</span>
          </button>
        </div>

        {/* TAB 1: COPYWRITING & ANTI-AI PROMPTS */}
        {activeTab === 'copy' && (
          <div className="space-y-12">
            
            {/* 5 Trust-Building Elements Checklist (Directly from user prompt) */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <HeartHandshake className="w-5 h-5 text-amber-800" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                  {language === 'en' 
                    ? '5 Trust-Building Elements Active on This Site' 
                    : '5 Trust-Building Elements (Website Pe Zaroor Hone Chahiyein)'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-3xl">
                {language === 'en'
                  ? 'Big brands use corporate slogans; trustworthy skincare connects emotionally with real skin recovery proof. Every element below is live and implemented in this platform:'
                  : 'Bari brands sirf advertisements karti hain, jabke trustworthy brands sachi kahani aur real customer results dikhati hain. Yeh 5 cheezein is site par live implement ho chuki hain:'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
                
                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 mb-1">
                      1. Real Testimonials
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {language === 'en' 
                        ? 'Includes specific day-to-heal metrics (Day 4, Day 14, Day 21) rather than vague praise.' 
                        : 'Day 4 aur Day 14 ke sachi recovery metrics ke sath real customer reviews.'}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                    Active in Our Story
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 mb-1">
                      2. Founder Origin Story
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {language === 'en'
                        ? 'Dr. Sarah Lin’s personal struggle with severe over-exfoliation barrier damage.'
                        : 'Founder ka personal experience jab unki apni skin chemical peel se damage hui thi.'}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                    Active in Our Story
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 mb-1">
                      3. 28-Day Healing Timeline
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {language === 'en'
                        ? 'Explains the biological epidermal turnover cycle so customers have honest expectations.'
                        : 'Customer ko jhoota wada nahi balki 28 din ka biological skin cycle bataya gaya.'}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                    Active in Timeline
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 mb-1">
                      4. Ingredient Transparency
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {language === 'en'
                        ? 'Clear "Why We Use" rationale paired against 4 banned irritants (0% perfume, 0% alcohol).'
                        : '"Hum yeh kyun use karte hain" aur 4 banned ingredients ki wazahat.'}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                    Active in Purity Tab
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-xs text-slate-900 mb-1">
                      5. Real Doubts FAQ
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {language === 'en'
                        ? 'Directly solves why plain water stings, Retinol during flaking, and pore clogging.'
                        : 'Real customer confusion (pani se jalan, retinol, pores) ka direct ilaj.'}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                    Active in FAQ Section
                  </span>
                </div>

              </div>
            </div>

            {/* Prompt Selector & Master Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Selector List */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                  {language === 'en' ? 'Select Human-Touch Blueprint' : 'Copywriting Blueprint Select Karein'}
                </span>

                {humanTouchPrompts.map((p) => {
                  const isSelected = p.id === selectedCopyCategory;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedCopyCategory(p.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white border-amber-800 shadow-xs ring-1 ring-amber-800'
                          : 'bg-slate-50 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-[10px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 font-semibold uppercase">
                          {p.badge}
                        </span>
                        {isSelected && <span className="text-xs text-amber-800 font-semibold">Active</span>}
                      </div>

                      <h4 className="font-serif text-sm font-bold text-slate-900">
                        {language === 'en' ? p.titleEn : p.titleUr}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {language === 'en' ? p.descriptionEn : p.descriptionUr}
                      </p>
                    </button>
                  );
                })}

                {/* AI Detection Suffix Tool */}
                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl mt-4">
                  <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs mb-1">
                    <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Quick Tip: AI-Detection Filter</span>
                  </div>
                  <p className="text-xs text-amber-950/80 leading-relaxed">
                    {language === 'en'
                      ? 'Always append the Anti-AI Detection rules to the tail of any ChatGPT or Claude prompt to prevent stiff phrases like "in conclusion" or "moreover".'
                      : 'Kisi bhi prompt ke aakhir mein Anti-AI Filter zaroor paste karein taake content robotic na bane.'}
                  </p>
                </div>
              </div>

              {/* Right Detail Box with 1-Click Copy */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-mono text-amber-800 uppercase font-semibold">
                        {currentCopy.badge}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mt-0.5">
                        {language === 'en' ? currentCopy.titleEn : currentCopy.titleUr}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopy(currentCopy.id, currentCopy.promptText)}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer shadow-xs shrink-0"
                    >
                      {copiedId === currentCopy.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{language === 'en' ? 'Copied Prompt!' : 'Copy Ho Gaya!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Copy Prompt' : 'Copy Karein'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Ready-to-use Prompt Box */}
                  <div className="mt-5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1.5 font-medium">
                      Exact Human-Touch Prompt (Copy & Paste directly into ChatGPT, Claude, or Gemini):
                    </label>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed select-all">
                      {currentCopy.promptText}
                    </div>
                  </div>

                  {/* Banned Rules Strip */}
                  <div className="mt-4 p-3 bg-rose-50 border border-rose-200/80 rounded-lg">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-rose-900 font-semibold mb-0.5 flex items-center gap-1.5">
                      <BadgeAlert className="w-3.5 h-3.5 text-rose-700" />
                      <span>Negative Constraint (Things to Avoid):</span>
                    </div>
                    <p className="text-xs text-rose-900 font-medium">
                      {currentCopy.negativeRules}
                    </p>
                  </div>

                  {/* Key Implementation Instructions */}
                  <div className="mt-5">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Why This Prompt Works (Psychology & Polish):
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {currentCopy.keyInstructions.map((ins, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer confirmation */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Tested with GPT-4o, Claude 3.5 Sonnet & Gemini 1.5 Pro</span>
                  <span className="font-mono text-emerald-700 font-medium">Zero-AI-Fluff Verified ✓</span>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: PHOTOGRAPHY & CAMERA OPTICS PROMPTS */}
        {activeTab === 'photo' && (
          <div>
            {/* Anti-AI Slop Rules strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-800" />
                <span>
                  {language === 'en' 
                    ? '4 Camera Physics Rules for 100% Photorealistic Skincare Images' 
                    : 'Natural Look Ke Liye 4 Zaroori Rules (In Sab Prompts Mein Shamil Hain)'}
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-mono text-amber-800 font-semibold block mb-1">
                    01. "visible pores"
                  </span>
                  <p className="text-slate-600">
                    {language === 'en'
                      ? 'Prevents the AI from applying smooth wax/plastic blur to the cheek and forehead.'
                      : 'AI ko fake smooth/wax skin banane se rokta hai aur real skin ka texture deta hai.'}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-mono text-amber-800 font-semibold block mb-1">
                    02. "shot on DSLR 50mm"
                  </span>
                  <p className="text-slate-600">
                    {language === 'en'
                      ? 'Simulates true optical depth-of-field and realistic bokeh instead of artificial CGI blur.'
                      : 'Camera-specific terms (DSLR/Canon, 50mm lens) real photo jaisa natural optical depth dete hain.'}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-mono text-amber-800 font-semibold block mb-1">
                    03. "candid, unposed"
                  </span>
                  <p className="text-slate-600">
                    {language === 'en'
                      ? 'Breaks the robotic facial symmetry that instantly signals generated imagery.'
                      : 'Perfect robotic symmetry AI ka sab se bara giveaway hai; unposed se natural lagta hai.'}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-mono text-amber-800 font-semibold block mb-1">
                    04. "--style raw"
                  </span>
                  <p className="text-slate-600">
                    {language === 'en'
                      ? 'In Midjourney v6+, disables default opinionated neon color grading for documentary realism.'
                      : 'Midjourney v6 mein raw style add karne se documentary jaisi natural colors milti hain.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Crafted Natural Prompts Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              
              {/* Left Column: Template List */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  {language === 'en' ? 'Curated Master Prompts' : 'Tayyar Shuda Master Prompts'}
                </p>

                {NATURAL_PROMPT_TEMPLATES.map((tpl) => {
                  const isSelected = tpl.id === selectedPrompt.id;
                  return (
                    <button
                      key={tpl.id}
                      onClick={() => setSelectedPrompt(tpl)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-amber-800 shadow-xs ring-1 ring-amber-800'
                          : 'bg-slate-50 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          <img 
                            src={tpl.previewImage} 
                            alt={tpl.titleEn} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-bold text-slate-900">
                            {language === 'en' ? tpl.titleEn : tpl.titleUr}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                            {tpl.cameraSettings.split(',')[0]} · {tpl.aspectRatio}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Selected Prompt Detail */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-mono text-amber-800 uppercase font-medium">
                        {selectedPrompt.category} visual asset
                      </span>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mt-0.5">
                        {language === 'en' ? selectedPrompt.titleEn : selectedPrompt.titleUr}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopy(selectedPrompt.id, selectedPrompt.prompt)}
                      className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer shadow-xs shrink-0"
                    >
                      {copiedId === selectedPrompt.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{language === 'en' ? 'Copied!' : 'Copy Ho Gaya!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Copy Prompt' : 'Copy Karein'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Prompt Text Box */}
                  <div className="mt-4">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                      Natural English Prompt (Copy-Paste Ready):
                    </label>
                    <div className="p-4 bg-[#faf8f5] rounded border border-[#e5ded4] font-mono text-xs text-[#292524] leading-relaxed select-all">
                      {selectedPrompt.prompt}
                    </div>
                  </div>

                  {/* Negative Prompt */}
                  {selectedPrompt.negativePrompt && (
                    <div className="mt-3">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                        Negative Prompt (Banned AI Artifacts):
                      </label>
                      <div className="p-2.5 bg-rose-50 rounded border border-rose-200 font-mono text-[11px] text-rose-800">
                        {selectedPrompt.negativePrompt}
                      </div>
                    </div>
                  )}

                  {/* Specs & Tool Recommendation */}
                  <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-50 rounded border border-slate-200">
                      <span className="text-slate-500 block font-medium">Camera Optics:</span>
                      <span className="font-mono text-slate-900 font-semibold">{selectedPrompt.cameraSettings}</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded border border-slate-200">
                      <span className="text-slate-500 block font-medium">Lighting Setup:</span>
                      <span className="text-slate-900 font-semibold">{selectedPrompt.lighting}</span>
                    </div>
                  </div>

                  {/* AI Tool Setting Advice */}
                  <div className="mt-3 text-xs bg-amber-50/70 p-3 rounded border border-amber-200/80 text-amber-950">
                    <span className="font-semibold text-slate-900">Recommended Model Settings: </span>
                    {selectedPrompt.aiToolTips}
                  </div>
                </div>

                {/* Generated Visual Asset Reference */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-20 h-14 rounded overflow-hidden border border-slate-200 shrink-0">
                    <img 
                      src={selectedPrompt.previewImage} 
                      alt="Live generated output example" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {language === 'en'
                      ? 'Above photo was generated directly using this prompt architecture with zero post-processing or smoothing filters.'
                      : 'Yeh photo bilkul isi prompt formula se banayi gayi hai, koi fake airbrushing filter use nahi kiya gaya.'}
                  </p>
                </div>

              </div>

            </div>

            {/* Custom Natural Skincare Prompt Studio Builder */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-xs">
              <div className="max-w-2xl mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5 font-semibold">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Interactive Customizer</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {language === 'en' ? 'Build Your Custom Photorealistic Prompt' : 'Apna Custom Real Skincare Prompt Banayein'}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {language === 'en'
                    ? 'Select your subject, photography gear, lighting environment, and target AI tool to generate a bulletproof natural prompt.'
                    : 'Subject, camera, lighting, aur skin texture select karein aur aik click mein prompt generate karein.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                
                {/* Subject Selector */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                    1. Subject / Scene
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="application">Hand Applying Face Cream (Hero)</option>
                    <option value="bottles_stone">Bottles & Jars on Travertine</option>
                    <option value="macro_skin">Macro Cheek Skin Pores (Clinical)</option>
                    <option value="pedestal_jar">Minimalist Cream Jar on Pedestal</option>
                  </select>
                </div>

                {/* Lens / Camera Selector */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                    2. Camera & Lens
                  </label>
                  <select
                    value={lens}
                    onChange={(e) => setLens(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="50mm">DSLR 50mm f/1.8 (Natural Eye)</option>
                    <option value="35mm">Canon EOS 5D 35mm (Documentary)</option>
                    <option value="100mm">Macro 100mm f/2.8 (Dermatology)</option>
                    <option value="leica">Leica M10 35mm (Filmic Grain)</option>
                  </select>
                </div>

                {/* Lighting Selector */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                    3. Natural Lighting
                  </label>
                  <select
                    value={lighting}
                    onChange={(e) => setLighting(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="morning_window">Soft Morning Window Daylight</option>
                    <option value="diffused">Diffused Overcast Curtains</option>
                    <option value="golden">Low-Angle Warm Golden Hour</option>
                  </select>
                </div>

                {/* Target AI Tool */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                    4. Target AI Generator
                  </label>
                  <select
                    value={aiTarget}
                    onChange={(e) => setAiTarget(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-800"
                  >
                    <option value="midjourney">Midjourney v6+ (--style raw)</option>
                    <option value="leonardo">Leonardo AI (PhotoReal Mode)</option>
                    <option value="flux">FLUX.1 / Stable Diffusion</option>
                  </select>
                </div>

              </div>

              {/* Generated Result Output */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
                    Custom Tailored Prompt:
                  </span>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(customPromptString);
                      setCustomCopied(true);
                      setTimeout(() => setCustomCopied(false), 2500);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                  >
                    {customCopied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{language === 'en' ? 'Copied to Clipboard!' : 'Prompt Copy Ho Gaya!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Copy Custom Prompt' : 'Copy Custom Prompt'}</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="font-mono text-xs text-slate-900 leading-relaxed bg-white p-3.5 rounded border border-slate-200 select-all">
                  {customPromptString}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
