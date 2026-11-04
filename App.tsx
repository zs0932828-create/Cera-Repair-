import { JAR_IMAGE } from './data/skincareData';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ProductItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryExplorer } from './components/CategoryExplorer';
import { AmazonProductsShowcase } from './components/AmazonProductsShowcase';
import { IngredientMatrix } from './components/IngredientMatrix';
import { RoutineGuide } from './components/RoutineGuide';
import { BarrierQuiz } from './components/BarrierQuiz';
import { AboutUsStory } from './components/AboutUsStory';
import { FaqAndTransparency } from './components/FaqAndTransparency';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with 1 bestselling product pre-added so cart is interactive right away
    {
      product: {
        id: 'cera-barrier-cream',
        name: 'Cera-Lipid 3:1:1 Intensive Barrier Cream',
        category: 'moisturizer',
        price: 48,
        rating: 4.9,
        reviewsCount: 324,
        size: '50ml / 1.7 fl. oz.',
        image: JAR_IMAGE,
        shortDescEn: 'Clinical bio-identical ceramides, shea butter & squalane to seal compromised skin barriers.',
        shortDescUr: 'Ceramides, shea butter aur squalane wali cream jo skin barrier ko mazboot karti hai.',
        fullDescEn: 'A restorative lipid concentrate developed in accordance with the Golden Ratio of epidermal barrier lipids.',
        fullDescUr: 'Doctor-tested formula jo skin ke natural lipid ratio par bani hai.',
        keyIngredients: ['Ceramides NP/AP/EOP', 'Shea Butter', 'Phytosqualane', 'Colloidal Oat'],
        skinTypes: ['Dry', 'Severely Damaged', 'Sensitive'],
        howToUseEn: 'Warm between fingertips and gently press into face and neck morning and night.',
        howToUseUr: 'Thodi si miqdar ungliyon par garam karein aur subha o shaam chehre par lagayein.',
        isBestseller: true
      },
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    showToast(
      language === 'en'
        ? `Added ${product.name} to Repair Bag`
        : `${product.name} bag mein add ho gaya`
    );
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1817] antialiased selection:bg-[#E8DFD1] selection:text-[#1A1817]">
      
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onExploreCategories={() => scrollToSection('categories')}
          onStartQuiz={() => scrollToSection('quiz')}
        />

        {/* Amazon Top Skin Repair Products (User's Exact Products in Sequence with Direct Links) */}
        <AmazonProductsShowcase
          language={language}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 5 Best Categories Explorer */}
        <CategoryExplorer
          language={language}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* About Us & Real Healing Stories (Professional Human Touch) */}
        <AboutUsStory
          language={language}
          onExploreProducts={() => scrollToSection('amazon-picks')}
        />

        {/* 8 Key Repair Ingredients Matrix */}
        <IngredientMatrix language={language} />

        {/* Morning & Night Routine Guide + 5 Holistic Methods */}
        <RoutineGuide language={language} />

        {/* Skin Barrier Damage Quiz / Diagnostic */}
        <BarrierQuiz
          language={language}
          onExploreProducts={() => scrollToSection('categories')}
        />

        {/* Ingredient Transparency & Real Skincare FAQs */}
        <FaqAndTransparency language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={scrollToSection}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        language={language}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        language={language}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#1A1817] text-[#FAF8F5] px-4 py-3 rounded-lg shadow-xl border border-[#38332E] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#C5A880]" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
