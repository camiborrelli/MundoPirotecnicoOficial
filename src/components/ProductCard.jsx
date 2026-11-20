import { Sparkles, Plus, Check, Volume2, Clock, Zap, MessageSquare, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({
  product,
  onOpenDetails,
  onAddToCart,
  onPreviewColors,
}) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Calcular un precio de lista de referencia para mostrar el ahorro del "Precio Web"
  const listPrice = Math.round(product.price * 1.18);
  const discountPercent = 15;

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const msg = encodeURIComponent(`¡Hola Mundo Pirotécnico! Estoy interesado en el producto: "${product.name}" ($${product.price.toLocaleString('es-UY')} UYU). ¿Tienen stock en el local de Hocquart 1642?`);
    window.open(`https://wa.me/59895018716?text=${msg}`, '_blank');
  };

  return (
    <article
      className="clean-card"
      onClick={() => onOpenDetails(product)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        background: '#FFFFFF',
      }}
    >
      <div>
        {/* Imagen y Badges */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '190px',
          overflow: 'hidden',
          backgroundColor: '#F1F5F9',
        }}>
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #F1F5F9, #E2E8F0)',
              color: '#94A3B8',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}>
              <span>🎆 Mundo Pirotécnico</span>
            </div>
          )}

          {/* Badge superior */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}>
            {product.category === 'pet-friendly' ? (
              <span className="badge-pet">🐾 Pet Friendly</span>
            ) : product.popular ? (
              <span className="badge-offer">🔥 Más Vendido</span>
            ) : (
              <span className="badge-gold">✨ Precio Web</span>
            )}
          </div>

          {/* Badge de Descuento */}
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#DC2626',
            color: '#FFFFFF',
            fontSize: '0.72rem',
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: '6px',
            boxShadow: '0 2px 6px rgba(220, 38, 38, 0.35)',
          }}>
            -{discountPercent}% OFF
          </div>
        </div>

        {/* Contenido */}
        <div style={{ padding: '16px 18px 12px' }}>
          {/* Nombre */}
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '8px',
            lineHeight: 1.3,
            minHeight: '2.6em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {product.name}
          </h3>

          {/* Especificaciones Técnicas */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
            {product.shots > 1 && (
              <span style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#475569',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <Zap size={12} color="#DC2626" /> {product.shots} Tiros
              </span>
            )}
            <span style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#475569',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <Clock size={12} color="#D97706" /> {product.duration}
            </span>
            <span style={{
              background: product.noiseLevel === 1 ? '#ECFDF5' : '#F8FAFC',
              border: product.noiseLevel === 1 ? '1px solid #A7F3D0' : '1px solid #E2E8F0',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: product.noiseLevel === 1 ? '#059669' : '#475569',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <Volume2 size={12} /> {product.noiseLevel === 1 ? 'Bajo Ruido' : `Sonido ${product.noiseLevel}/5`}
            </span>
          </div>

          {/* Descripción corta */}
          <p style={{
            fontSize: '0.84rem',
            color: '#64748B',
            lineHeight: 1.45,
            marginBottom: '14px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {product.description}
          </p>
        </div>
      </div>

      {/* Footer de Tarjeta con Precios y Botones */}
      <div style={{
        padding: '12px 18px 16px',
        borderTop: '1px solid #F1F5F9',
        background: '#FAFBFD',
      }}>
        {/* Precios */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>
              Precio de Lista: <span style={{ textDecoration: 'line-through' }}>${listPrice.toLocaleString('es-UY')}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#DC2626' }}>PRECIO WEB:</span>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>
                ${product.price.toLocaleString('es-UY')}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>UYU</span>
            </div>
          </div>
        </div>

        {/* Acciones */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
          <button
            onClick={handleAdd}
            style={{
              background: justAdded ? '#059669' : '#DC2626',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 14px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              boxShadow: justAdded ? '0 4px 12px rgba(5, 150, 105, 0.3)' : '0 4px 12px rgba(220, 38, 38, 0.25)',
            }}
          >
            {justAdded ? (
              <>
                <Check size={16} />
                <span>¡Agregado!</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Agregar al Pedido</span>
              </>
            )}
          </button>

          <button
            onClick={handleWhatsApp}
            title="Consultar por WhatsApp"
            aria-label="Consultar por WhatsApp"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 12px',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.15s ease',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
