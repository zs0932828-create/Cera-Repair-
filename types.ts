export type Language = 'en' | 'ur';

export type ProductCategory = 
  | 'moisturizer'
  | 'serum'
  | 'sunscreen'
  | 'cleanser'
  | 'exfoliant';

export interface CategoryInfo {
  id: ProductCategory;
  titleEn: string;
  titleUr: string;
  taglineEn: string;
  taglineUr: string;
  descriptionEn: string;
  descriptionUr: string;
  bestForEn: string;
  bestForUr: string;
  keyRuleEn: string;
  keyRuleUr: string;
  heroHighlightEn: string;
  heroHighlightUr: string;
}

export interface KeyIngredient {
  id: string;
  name: string;
  tagUr: string;
  whatItRepairsEn: string;
  whatItRepairsUr: string;
  mechanismEn: string;
  mechanismUr: string;
  recommendedForEn: string;
  recommendedForUr: string;
  routineTimingEn: string;
  routineTimingUr: string;
  bestPairings: string[];
  cautionEn: string;
  cautionUr: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  rating: number;
  reviewsCount: number;
  size: string;
  image: string;
  shortDescEn: string;
  shortDescUr: string;
  fullDescEn: string;
  fullDescUr: string;
  keyIngredients: string[];
  skinTypes: string[];
  howToUseEn: string;
  howToUseUr: string;
  isBestseller?: boolean;
  amazonLink?: string;
  boughtCount?: string;
  badge?: string;
}

export interface RoutineStep {
  stepNumber: number;
  category: string;
  titleEn: string;
  titleUr: string;
  whyEn: string;
  whyUr: string;
  dermatologistTipEn: string;
  dermatologistTipUr: string;
  suitableProductIds: string[];
}

export interface AdditionalRepairMethod {
  id: string;
  titleEn: string;
  titleUr: string;
  benefitEn: string;
  benefitUr: string;
  howItWorksEn: string;
  howItWorksUr: string;
  frequencyEn: string;
  frequencyUr: string;
}

export interface PromptTemplate {
  id: string;
  titleEn: string;
  titleUr: string;
  prompt: string;
  negativePrompt?: string;
  category: 'hero' | 'product' | 'texture' | 'minimalist';
  aspectRatio: string;
  cameraSettings: string;
  lighting: string;
  aiToolTips: string;
  previewImage: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
