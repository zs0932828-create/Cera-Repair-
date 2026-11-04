import React from 'react';
import { ProductItem, Language } from '../types';
import { X, Star, Droplets, Plus, ExternalLink } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  language: Language;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  language,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141211]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#EAE4DA] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full text-[#82786E] hover:text-[#1A1817] transition-colors cursor-pointer shadow-xs border border-[#E5DACD]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Image Box */}
            <div className="aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-white border border-[#EAE4DA] flex items-center justify-center p-4 shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9B6846] uppercase font-semibold">
                  <span>{product.category}</span>
                  <span aria-hidden="true" className="text-[#DDD5C7]">·</span>
                  <span>{product.size}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1A1817] mt-1.5 leading-snug">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-[#B58763]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-mono font-semibold text-[#1A1817] tabular-nums">{product.rating}</span>
                  </div>
                  <span className="text-xs text-[#82786E] font-mono tabular-nums">
                    ({product.reviewsCount.toLocaleString()} verified clinical reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="font-mono text-2xl font-bold text-[#1A1817] tabular-nums">
                ${product.price}
              </div>

              {/* Full Description */}
              <p className="text-sm text-[#5C554D] leading-relaxed font-light">
                {language === 'en' ? product.fullDescEn : product.fullDescUr}
              </p>

              {/* Key Actives */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#82786E] block mb-1.5 font-semibold">
                  {language === 'en' ? 'Active Ingredients:' : 'Key Ingredients:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.keyIngredients.map((ing, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 bg-[#F4EDE4] text-xs text-[#1A1817] rounded-md border border-[#E5DACD] font-mono text-[11px]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* How To Use */}
              <div className="p-4 bg-[#FDFCFA] rounded-xl border border-[#E8E1D5] text-xs">
                <span className="font-semibold text-[#1A1817] block mb-1 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-[#9B6846]" />
                  <span>{language === 'en' ? 'Clinical Application Guide' : 'Istemal Ka Sahi Tareeqa'}</span>
                </span>
                <p className="text-[#5C554D] font-light leading-relaxed">
                  {language === 'en' ? product.howToUseEn : product.howToUseUr}
                </p>
              </div>

              {/* Add to Bag CTA & Amazon Link */}
              <div className="pt-3 space-y-2">
                {product.amazonLink && (
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#FAF8F5] bg-[#1A1817] hover:bg-[#2E2824] rounded-lg transition-colors shadow-xs"
                  >
                    <span>{language === 'en' ? 'Buy Directly on Amazon' : 'Amazon Par Kharidein'}</span>
                    <ExternalLink className="w-4 h-4 text-[#D8CFBF]" />
                  </a>
                )}

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    product.amazonLink 
                      ? 'bg-[#F2EDE4] text-[#1A1817] hover:bg-[#EAE3D6] border border-[#DDD5C7]' 
                      : 'bg-[#1A1817] text-[#FAF8F5] hover:bg-[#2E2824] shadow-xs'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  <span>
                    {language === 'en' 
                      ? `Add to In-App Bag — $${product.price}` 
                      : `Website Bag Mein Shamil Karein — $${product.price}`}
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
