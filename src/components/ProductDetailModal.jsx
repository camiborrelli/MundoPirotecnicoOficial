import { X, Sparkles, Plus, Check, ShieldCheck, Zap, Clock, Volume2, MessageSquare, Play, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { useState } from 'react';

function getEmbedUrl(url) {
  if (!url) return null;
  if (url.includes('youtube.com/embed/')) return url;
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/watch')) {
    const params = new URLSearchParams(url.split('?')[1]);
    const id = params.get('v');
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  return url;
}

export default function ProductDetailModal({ product, onClose, onAddToCart, onTriggerFirework }) {
  const [added, setAdded] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState(product?.video ? 'video' : 'photo');

  if (!product) return null;

  const listPrice = Math.round(product.price * 1.18);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Mundo Pirotécnico! Estoy consultando desde la web por: "${product.name}" ($${product.price.toLocaleString('es-UY')} UYU). ¿Tienen stock en el local de Hocquart 1642?`
  );

  const embedUrl = getEmbedUrl(product.video);
  const isDirectVideo = product.video && (product.video.endsWith('.mp4') || product.video.endsWith('.webm'));

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '92vh',
          background: '#FFFFFF',
          borderRadius: '24px',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
          border: '1px solid #E2E8F0',
          position: 'relative',
        }}
      >
        {/* Header Modal */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: '#FFFFFF',
          zIndex: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: '#DC2626',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '9999px',
            }}>
              Mundo Pirotécnico Oficial
            </span>
            {product.category === 'pet-friendly' && (
              <span className="badge-pet">🐾 Pet Friendly</span>
            )}
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748B',
              transition: 'background 0.2s',
            }}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Media Preview (Video / Foto) */}
        <div style={{ background: '#0F172A', position: 'relative' }}>
          {activeMediaTab === 'video' && embedUrl ? (
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
              {isDirectVideo ? (
                <video
                  src={product.video}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <iframe
                  src={embedUrl}
                  title={product.name}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          ) : (
            <div style={{ width: '100%', height: '320px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          )}

          {/* Toggle Media Tabs */}
          {embedUrl && (
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              display: 'flex',
              gap: '6px',
              background: 'rgba(0, 0, 0, 0.65)',
              padding: '4px',
              borderRadius: '10px',
              backdropFilter: 'blur(6px)',
            }}>
              <button
                onClick={() => setActiveMediaTab('video')}
                style={{
                  background: activeMediaTab === 'video' ? '#DC2626' : 'transparent',
                  color: '#FFF',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <VideoIcon size={14} /> Video
              </button>
              <button
                onClick={() => setActiveMediaTab('photo')}
                style={{
                  background: activeMediaTab === 'photo' ? '#DC2626' : 'transparent',
                  color: '#FFF',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <ImageIcon size={14} /> Foto
              </button>
            </div>
          )}
        </div>

        {/* Info y Especificaciones */}
        <div style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>
            {product.name}
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
            {product.description}
          </p>

          {/* Grid de Especificaciones */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            marginBottom: '24px',
          }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px 14px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>CANTIDAD DE TIROS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Zap size={16} color="#DC2626" /> {product.shots} Disparos
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px 14px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>DURACIÓN ESTIMADA</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Clock size={16} color="#D97706" /> {product.duration}
              </div>
            </div>

            <div style={{
              background: product.noiseLevel === 1 ? '#ECFDF5' : '#F8FAFC',
              border: product.noiseLevel === 1 ? '1px solid #A7F3D0' : '1px solid #E2E8F0',
              padding: '12px 14px',
              borderRadius: '12px',
            }}>
              <div style={{ fontSize: '0.75rem', color: product.noiseLevel === 1 ? '#059669' : '#64748B', fontWeight: 600 }}>IMPACTO SONORO</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: product.noiseLevel === 1 ? '#059669' : '#0F172A', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Volume2 size={16} /> {product.noiseLevel === 1 ? 'Pet Friendly (< 65 dB)' : `Nivel ${product.noiseLevel}/5`}
              </div>
            </div>
          </div>

          {/* Características Clave */}
          {product.features && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', marginBottom: '10px' }}>
                Características y Efectos:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seguridad Homologada */}
          <div style={{
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            padding: '12px 16px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.84rem',
            color: '#991B1B',
            marginBottom: '26px',
          }}>
            <ShieldCheck size={20} color="#DC2626" style={{ flexShrink: 0 }} />
            <span>Artículo homologado y autorizado por el Servicio de Material y Armamento (S.M.A.) del Ejército Nacional. Usar sobre superficie plana y firme al aire libre.</span>
          </div>

          {/* Barra Inferior de Compra / Precios */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '16px',
            borderTop: '1px solid #F1F5F9',
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                Precio de Lista: ${listPrice.toLocaleString('es-UY')} UYU
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#DC2626' }}>PRECIO WEB:</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A' }}>
                  ${product.price.toLocaleString('es-UY')}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>UYU</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/59895018716?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={18} />
                <span>Pedir x WhatsApp</span>
              </a>

              <button
                onClick={handleAdd}
                className="btn-brand-red"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    <span>¡Agregado al Pedido!</span>
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    <span>Agregar al Pedido</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
