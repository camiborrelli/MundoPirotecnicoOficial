import { useState } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PetFriendlySection from './components/PetFriendlySection';
import CatalogSection from './components/CatalogSection';
import EventsShowsSection from './components/EventsShowsSection';
import SafetySection from './components/SafetySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import QuoteCartDrawer from './components/QuoteCartDrawer';
import Footer from './components/Footer';
import { MessageSquare, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [prefilledContactSubject, setPrefilledContactSubject] = useState('');

  // Cart operations with festive confetti celebration
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Festive celebration
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#DC2626', '#F59E0B', '#22C55E', '#FFFFFF'],
      });
    } catch (e) {
      // ignore in environments without canvas
    }
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectPetCategory = () => {
    setSelectedCategory('pet-friendly');
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject) => {
    setPrefilledContactSubject(subject);
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', overflowX: 'hidden' }}>
      
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />

        <PetFriendlySection
          onSelectPetCategory={handleSelectPetCategory}
          onAddToCart={handleAddToCart}
        />

        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
        />

        <EventsShowsSection onOpenContactWithSubject={handleOpenContactWithSubject} />

        <SafetySection />

        <ReviewsSection />

        <ContactSection prefilledSubject={prefilledContactSubject} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Slide-in Cart / Presupuesto Drawer */}
      <QuoteCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Buttons: WhatsApp & Quick Cart */}
      <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 80, display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
        
        {/* Floating Cart Button (if has items) */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: '#DC2626',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 18px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(220, 38, 38, 0.35)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <ShoppingBag size={18} />
            <span>Presupuesto ({totalCartCount})</span>
          </button>
        )}

        {/* Floating WhatsApp Action Pill */}
        <a
          href="https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico,%20quisiera%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          title="Chatear con un asesor por WhatsApp (095 018 716)"
          style={{
            background: '#25D366',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 800,
            fontSize: '0.92rem',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <MessageSquare size={19} />
          <span>WhatsApp 095 018 716</span>
        </a>
      </div>

    </div>
  );
}
