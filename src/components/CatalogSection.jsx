import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { Search, Sparkles, ShieldCheck, Flame, Sun, Wind, Zap, Smile, SlidersHorizontal } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  ShieldCheck,
  Flame,
  Sun,
  Wind,
  Zap,
  Smile,
};

export default function CatalogSection({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onTriggerFirework,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('popular');

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'shots') return b.shots - a.shots;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  return (
    <section id="catalogo" style={{ padding: '40px 16px 80px', position: 'relative', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Encabezado de Sección */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '9999px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            color: '#DC2626',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            <Sparkles size={14} />
            <span>Catálogo Oficial • Precios Web</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', color: '#0F172A', marginBottom: '8px', fontWeight: 900 }}>
            Explorá Nuestros <span style={{ color: '#DC2626' }}>Fuegos & Efectos</span>
          </h2>

          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
            Seleccioná tu categoría preferida, armá tu presupuesto online y envialo directo a nuestro WhatsApp para coordinar retiro o entrega.
          </p>
        </div>

        {/* Barra de Filtros por Categoría (Estilo E-Commerce Moderno) */}
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '14px',
          marginBottom: '26px',
          scrollbarWidth: 'none',
        }}>
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;
            const isPet = cat.id === 'pet-friendly';

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  border: isSelected
                    ? isPet ? '2px solid #059669' : '2px solid #DC2626'
                    : '1px solid #E2E8F0',
                  background: isSelected
                    ? isPet ? '#059669' : '#DC2626'
                    : isPet ? '#ECFDF5' : '#FFFFFF',
                  color: isSelected
                    ? '#FFFFFF'
                    : isPet ? '#059669' : '#334155',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 4px 14px rgba(220, 38, 38, 0.25)' : '0 1px 3px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Barra de Búsqueda y Ordenamiento */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '28px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        }}>
          {/* Input de Búsqueda */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
            <Search size={18} color="#94A3B8" />
            <input
              type="text"
              placeholder="Buscar por nombre, tiros, pet friendly, tortas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '0.92rem',
                color: '#0F172A',
                width: '100%',
                background: 'transparent',
                fontWeight: 500,
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Ordenar por */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
              <SlidersHorizontal size={15} />
              <span>Ordenar:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                background: '#F8FAFC',
                color: '#334155',
                fontSize: '0.85rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="popular">Más Populares</option>
              <option value="price-low">Menor Precio</option>
              <option value="price-high">Mayor Precio</option>
              <option value="shots">Mayor Cantidad de Tiros</option>
            </select>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
            Mostrando <strong>{sortedProducts.length}</strong> artículos disponibles con Precio Web
          </span>
          {selectedCategory !== 'todos' && (
            <button
              onClick={() => onSelectCategory('todos')}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#DC2626',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Ver todas las categorías
            </button>
          )}
        </div>

        {/* Grilla de Productos */}
        {sortedProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#FFFFFF',
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
          }}>
            <p style={{ fontSize: '1.1rem', color: '#64748B', fontWeight: 600, marginBottom: '12px' }}>
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => { setSearchQuery(''); onSelectCategory('todos'); }}
              className="btn-brand-red"
            >
              Reiniciar Filtros
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '22px',
          }}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={setSelectedProduct}
                onAddToCart={onAddToCart}
                onPreviewColors={onTriggerFirework}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal de Detalle */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          onTriggerFirework={onTriggerFirework}
        />
      )}
    </section>
  );
}
