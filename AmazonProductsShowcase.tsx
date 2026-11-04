import React from 'react';
import { AMAZON_PRODUCTS } from '../data/skincareData';
import { ProductItem, Language } from '../types';
import { ExternalLink, Star, ShoppingBag, Eye, ShieldCheck } from 'lucide-react';

interface AmazonProductsShowcaseProps {
  language: Language;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const AmazonProductsShowcase: React.FC<AmazonProductsShowcaseProps> = ({
  language,
  onSelectProduct,
  onAddToCart
}) => {
  return (
    <section id="amazon-picks" className="relative py-18 sm:py-26 border-b border-[#EAE4DA] bg-[#F7F2EB]/50">
      <div className="absolute inset-0 bg-clinical-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9B6846] mb-2 flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#9B6846]" />
            <span>Verified Dermatological Formulations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1817]">
            {language === 'en'
              ? 'Top Recommended Skin Repair Products (Amazon Best Picks)'
              : 'Best Skin Repair Products (Amazon Links & Verified Results)'}
          </h2>
          <p className="mt-3 text-base text-[#5C554D] leading-relaxed font-light">
            {language === 'en'
              ? 'Proven barrier restoration creams and lotions featured by clinical dermatologists. Select any product to order directly via Amazon or add to your repair bag.'
              : 'Dermatologist-recommended skin repair products. Neeche diye gaye direct Amazon links se foran order karein ya apni bag mein add karein.'}
          </p>
        </div>

        {/* 5 Products Grid in Strict Sequence (#1 to #5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {AMAZON_PRODUCTS.map((product, index) => {
            return (
              <div
                key={product.id}
                className="group bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] flex flex-col justify-between overflow-hidden hover:border-[#CDBFAE] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Top Section: Sequence Index + Badge */}
                <div className="p-3 border-b border-[#EFE9DF] flex items-center justify-between bg-[#FAF7F2]">
                  <span className="font-mono text-xs font-bold text-[#9B6846]">
                    #{index + 1}
                  </span>
                  {product.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#1A1817] text-[#FAF8F5] px-2 py-0.5 rounded font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Image Slot */}
                <div className="relative aspect-square p-5 bg-white flex items-center justify-center overflow-hidden border-b border-[#F0EBE1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Quick View Button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute bottom-2.5 right-2.5 p-1.5 bg-[#FAF8F5]/95 backdrop-blur-xs rounded border border-[#E5DACD] shadow-xs text-[#1A1817] hover:bg-white hover:text-[#9B6846] transition-colors cursor-pointer"
                    title={language === 'en' ? 'Quick view' : 'Tafseel dekhein'}
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Size and Category */}
                    <div className="text-[11px] font-mono text-[#82786E] mb-1">
                      {product.size}
                    </div>

                    {/* Product Title */}
                    <h4
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-sm font-bold text-[#1A1817] hover:text-[#9B6846] transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {product.name}
                    </h4>

                    {/* Subtitle / Short description */}
                    <p className="mt-1.5 text-xs text-[#5C554D] line-clamp-2 leading-relaxed">
                      {language === 'en' ? product.shortDescEn : product.shortDescUr}
                    </p>

                    {/* Rating & Monthly Sales badge */}
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-1 text-xs text-[#B58763]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-mono font-semibold text-[#1A1817] tabular-nums">{product.rating}</span>
                        <span className="text-[#82786E] font-mono text-[11px] tabular-nums">
                          ({product.reviewsCount.toLocaleString()})
                        </span>
                      </div>

                      {product.boughtCount && (
                        <div className="inline-block text-[10px] text-[#4A5D4E] bg-[#EEF2EE] px-1.5 py-0.5 rounded font-mono font-medium">
                          {product.boughtCount}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="mt-5 pt-3.5 border-t border-[#EFE9DF] space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-base font-bold text-[#1A1817] tabular-nums">
                        ${product.price}
                      </span>
                      <span className="text-[11px] text-[#82786E] font-mono">Amazon Verified</span>
                    </div>

                    {/* Primary Button: Direct Amazon Link */}
                    {product.amazonLink && (
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] rounded-md transition-colors shadow-xs"
                      >
                        <span>{language === 'en' ? 'Buy on Amazon' : 'Amazon Par Kharidein'}</span>
                        <ExternalLink className="w-3 h-3 text-[#D8CFBF]" />
                      </a>
                    )}

                    {/* Secondary Button: Add to Bag */}
                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 text-[11px] font-medium text-[#1A1817] hover:bg-[#EAE3D6] bg-[#F2EDE4] border border-[#DDD5C7] rounded-md transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#5C554D]" />
                      <span>{language === 'en' ? 'Add to Repair Bag' : 'Bag Mein Add Karein'}</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Amazon Links Reference Strip */}
        <div className="mt-12 p-6 bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] shadow-xs">
          <h4 className="font-serif text-sm font-bold text-[#1A1817] mb-3">
            {language === 'en' ? 'Direct Product Purchase Links (In Sequence):' : 'Direct Amazon Product Links (Sequence Ke Sath):'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            {AMAZON_PRODUCTS.map((prod, idx) => (
              <a
                key={prod.id}
                href={prod.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F2EDE4] border border-[#EAE4DA] transition-colors group"
              >
                <div className="truncate pr-2">
                  <span className="font-mono text-[#9B6846] font-bold mr-1.5">#{idx + 1}</span>
                  <span className="text-[#1A1817] font-medium group-hover:text-[#9B6846] transition-colors">{prod.name.split(',')[0]}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A69B8D] group-hover:text-[#1A1817] shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
