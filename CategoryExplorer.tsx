import React, { useState } from 'react';
import { 
  CATEGORIES_DATA, 
  PRODUCTS_CATALOG 
} from '../data/skincareData';
import { ProductCategory, ProductItem, Language } from '../types';
import { 
  Shield, 
  Droplets, 
  Sun, 
  Sparkle, 
  Layers, 
  Check, 
  AlertCircle, 
  Plus, 
  Eye, 
  Star 
} from 'lucide-react';

interface CategoryExplorerProps {
  language: Language;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const CategoryExplorer: React.FC<CategoryExplorerProps> = ({
  language,
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedCatId, setSelectedCatId] = useState<ProductCategory>('moisturizer');

  const currentCategory = CATEGORIES_DATA.find(c => c.id === selectedCatId) || CATEGORIES_DATA[0];
  const filteredProducts = PRODUCTS_CATALOG.filter(p => p.category === selectedCatId);

  const getCategoryIcon = (id: ProductCategory) => {
    switch (id) {
      case 'moisturizer':
        return <Shield className="w-4 h-4" />;
      case 'serum':
        return <Droplets className="w-4 h-4" />;
      case 'sunscreen':
        return <Sun className="w-4 h-4" />;
      case 'cleanser':
        return <Sparkle className="w-4 h-4" />;
      case 'exfoliant':
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="categories" className="py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-2 font-semibold">
            01. Taxonomy of Recovery
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817]">
            {language === 'en' 
              ? '5 Core Skin Repair Product Categories' 
              : 'Best Skin Repair Products Categories'}
          </h2>
          <p className="mt-3 text-base text-[#5C554D] leading-relaxed font-light">
            {language === 'en'
              ? 'Skin barrier repair requires a coordinated biochemical sequence. Each of these 5 categories addresses a specific physical layer of the stratum corneum.'
              : 'Skin repair ke liye yeh 5 categories sab se ahem hain. Har category ka apna makhsoos kaam hai.'}
          </p>
        </div>

        {/* Interactive Segmented Category Filter */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#F2EDE4] rounded-xl border border-[#E5DACD] overflow-x-auto no-scrollbar mb-10 shadow-xs">
          {CATEGORIES_DATA.map((cat, idx) => {
            const isActive = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#1A1817] shadow-xs font-semibold'
                    : 'text-[#5C554D] hover:text-[#1A1817]'
                }`}
              >
                <span className={isActive ? 'text-[#9B6846]' : 'text-[#82786E]'}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>
                  {language === 'en' ? `${idx + 1}. ${cat.titleEn.split(' ')[0]}` : `${idx + 1}. ${cat.titleUr.split(' ')[0]}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="bg-[#FDFCFA] border border-[#E8E1D5] rounded-2xl p-6 sm:p-10 mb-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9B6846] font-semibold">
                <span>Category Focus</span>
                <span aria-hidden="true" className="text-[#DDD5C7]">·</span>
                <span>{language === 'en' ? currentCategory.heroHighlightEn : currentCategory.heroHighlightUr}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1817]">
                {language === 'en' ? currentCategory.titleEn : currentCategory.titleUr}
              </h3>

              <p className="text-base sm:text-lg text-[#1A1817] font-medium leading-relaxed">
                {language === 'en' ? currentCategory.taglineEn : currentCategory.taglineUr}
              </p>

              <p className="text-sm sm:text-base text-[#5C554D] leading-relaxed font-light">
                {language === 'en' ? currentCategory.descriptionEn : currentCategory.descriptionUr}
              </p>

              {/* Rationale & Dermatologist Rule */}
              <div className="pt-3 flex flex-col sm:flex-row gap-4 text-xs">
                <div className="flex-1 bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE4DA]">
                  <p className="font-semibold text-[#1A1817] mb-1.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#4A5D4E]" />
                    <span>{language === 'en' ? 'Best For / Recommendation' : 'Kiske Liye Behtareen Hai'}</span>
                  </p>
                  <p className="text-[#5C554D] leading-relaxed">
                    {language === 'en' ? currentCategory.bestForEn : currentCategory.bestForUr}
                  </p>
                </div>

                <div className="flex-1 bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE4DA]">
                  <p className="font-semibold text-[#1A1817] mb-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#9B6846]" />
                    <span>{language === 'en' ? 'Clinical Usage Rule' : 'Istemal Ka Tareeqa'}</span>
                  </p>
                  <p className="text-[#5C554D] leading-relaxed">
                    {language === 'en' ? currentCategory.keyRuleEn : currentCategory.keyRuleUr}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill-Free Spec Box */}
            <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-xl border border-[#EAE4DA] space-y-4 shadow-xs">
              <p className="text-xs font-mono uppercase tracking-wider text-[#82786E] font-semibold">
                {language === 'en' ? 'Category Specifications' : 'Category Details'}
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#EFE9DF]">
                  <span className="text-[#82786E]">{language === 'en' ? 'Role' : 'Kirdar'}</span>
                  <span className="font-medium text-[#1A1817] text-right">
                    {selectedCatId === 'moisturizer' && (language === 'en' ? 'Lipid Barrier Sealing' : 'Barrier Restoration')}
                    {selectedCatId === 'serum' && (language === 'en' ? 'Cellular Rejuvenation' : 'Targeted Actives')}
                    {selectedCatId === 'sunscreen' && (language === 'en' ? 'UV Degradation Shield' : 'Dhoop Se Hifazat')}
                    {selectedCatId === 'cleanser' && (language === 'en' ? 'Non-Stripping Purify' : 'Sulfate-Free Cleansing')}
                    {selectedCatId === 'exfoliant' && (language === 'en' ? 'Micro-Cell Turnover' : 'Dead Skin Shedding')}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#EFE9DF]">
                  <span className="text-[#82786E]">{language === 'en' ? 'Frequency' : 'Kitni Baar'}</span>
                  <span className="font-mono text-[#1A1817] font-semibold">
                    {selectedCatId === 'exfoliant' ? '1–2x / week' : 'Daily AM/PM'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-[#82786E]">{language === 'en' ? 'Sensitization Risk' : 'Sensitivity'}</span>
                  <span className="font-medium text-[#1A1817]">
                    {selectedCatId === 'exfoliant' ? 'Medium (Buffer needed)' : 'Ultra-Low'}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs text-[#5C554D] leading-relaxed italic bg-white p-3.5 rounded-lg border border-[#EAE4DA]">
                  {language === 'en'
                    ? 'Pro Tip: When skin barrier is damaged, pause all exfoliants and active retinoids until stinging stops completely.'
                    : 'Khas Tip: Agar skin par jalan ho rahi ho to exfoliants aur retinol foran rok dein aur sirf ceramide cream lagayein.'}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Product Cards Grid in Selected Category */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1817]">
              {language === 'en' ? 'Formulated Products in this Category' : 'Is Category Ki Products'}
            </h3>
            <span className="text-xs font-mono text-[#82786E] tabular-nums">
              {filteredProducts.length} {language === 'en' ? 'Formula(s)' : 'Products'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] overflow-hidden flex flex-col justify-between hover:border-[#CDBFAE] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Product Image Slot */}
                  <div className="relative aspect-[4/3] bg-[#F7F2EB]/50 overflow-hidden border-b border-[#F0EBE1]">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    />
                    
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 bg-[#1A1817] text-[#FAF8F5] text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded font-medium shadow-xs">
                        {language === 'en' ? 'Clinical Favorite' : 'Bestseller'}
                      </span>
                    )}

                    {/* Quick View Button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 bg-[#FAF8F5]/95 backdrop-blur-xs text-[#1A1817] p-2 rounded-lg hover:bg-white border border-[#E5DACD] transition-colors shadow-xs cursor-pointer hover:text-[#9B6846]"
                      title={language === 'en' ? 'Quick view details' : 'Detail dekhein'}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Line */}
                      <div className="flex items-center gap-2 text-xs text-[#82786E] mb-1.5 font-mono">
                        <span className="uppercase tracking-wider text-[11px] text-[#9B6846] font-semibold">
                          {product.category}
                        </span>
                        <span aria-hidden="true" className="text-[#DDD5C7]">·</span>
                        <span>{product.size}</span>
                      </div>

                      <h4 
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-lg font-bold text-[#1A1817] hover:text-[#9B6846] transition-colors cursor-pointer leading-snug"
                      >
                        {product.name}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-[#5C554D] line-clamp-2 leading-relaxed">
                        {language === 'en' ? product.shortDescEn : product.shortDescUr}
                      </p>

                      {/* Active Ingredients list */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5 text-[11px]">
                        {product.keyIngredients.slice(0, 3).map((ing, i) => (
                          <span key={i} className="inline-block bg-[#F4EDE4] px-2 py-0.5 rounded text-[#5C554D] font-medium border border-[#E5DACD]/70 font-mono text-[10px]">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Add to Cart action */}
                    <div className="mt-6 pt-4 border-t border-[#EFE9DF] space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1 text-xs text-[#B58763]">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span className="font-mono font-semibold text-[#1A1817] tabular-nums">{product.rating}</span>
                            <span className="text-[#82786E] font-mono tabular-nums text-[11px]">({product.reviewsCount.toLocaleString()})</span>
                          </div>
                          <p className="font-mono text-lg font-bold text-[#1A1817] tabular-nums mt-0.5">
                            ${product.price}
                          </p>
                        </div>

                        <button
                          onClick={() => onAddToCart(product)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#FAF8F5] bg-[#1A1817] rounded-md hover:bg-[#2E2824] transition-colors cursor-pointer shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Add' : 'Add'}</span>
                        </button>
                      </div>

                      {product.amazonLink && (
                        <a
                          href={product.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold text-[#1A1817] bg-[#F2EDE4] hover:bg-[#EAE3D6] rounded-md border border-[#DDD5C7] transition-colors"
                        >
                          <span>{language === 'en' ? 'Buy on Amazon' : 'Amazon Par Kharidein'}</span>
                          <span className="text-[10px] text-[#9B6846]">↗</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
