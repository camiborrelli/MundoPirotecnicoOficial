import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, DollarSign, MapPin, Play, X, Flame, Dog, Heart } from 'lucide-react';

const SLIDES = [
  {
    id: 'slide-tortas',
    tag: 'TEMPORADA OFICIAL 2026',
    title: 'Fuegos Artificiales & Shows en Uruguay',
    subtitle: 'Importación directa desde 1998. La mayor variedad en tortas lumínicas, fuentes, morteros y combos festivos con Precios Web imperdibles.',
    ctaPrimary: 'Ver Catálogo Completo',
    ctaPrimaryHref: '#catalogo',
    ctaSecondary: 'Consultar WhatsApp',
    ctaSecondaryHref: 'https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico,%20quiero%20conocer%20las%20ofertas%20vigentes',
    bgImage: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1600&q=85',
    colorBadge: '#DC2626',
    bgBadge: '#FEF2F2',
    accentColor: '#DC2626',
    featuredProduct: {
      name: 'Festival Titán Dorado - 100 Tiros',
      tag: '🔥 Producto Estrella',
      category: 'Tortas & Festivales',
      price: 4950,
      listPrice: 5850,
      shots: '100 Tiros',
      duration: '70 seg',
      image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/pXla_K47w7M?autoplay=1',
      description: 'Palmeras gigantes de brocado dorado, crisantemos de titanio y cierre en abanico.',
    },
  },
  {
    id: 'slide-pet',
    tag: 'LÍNEA CONSCIENTE 🐾',
    title: 'Línea Pet Friendly: Mucho Color, Bajo Ruido',
    subtitle: 'Disfrutá la emoción de las luces y cometas cuidando a nuestras mascotas, bebés y personas con hipersensibilidad sonora (< 65 dB).',
    ctaPrimary: 'Ver Productos Pet Friendly',
    ctaPrimaryHref: '#pet-friendly',
    ctaSecondary: 'Conocer Beneficios',
    ctaSecondaryHref: '#pet-friendly',
    bgImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85',
    colorBadge: '#059669',
    bgBadge: '#ECFDF5',
    accentColor: '#059669',
    featuredProduct: {
      name: 'Torta Aurora Boreal - 36 Tiros',
      tag: '🐾 100% Pet Friendly',
      category: 'Bajo Nivel Sonoro (< 65 dB)',
      price: 1850,
      listPrice: 2200,
      shots: '36 Tiros',
      duration: '45 seg',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/k5kPvG47vvg?autoplay=1',
      description: 'Ráfagas de perlas esmeralda y colas de cometa silenciosas. Cero estampidos.',
    },
  },
  {
    id: 'slide-shows',
    tag: 'PRODUCCIONES PARA BODAS Y 15 AÑOS',
    title: 'Pirotecnia Fría para Interiores y Salones',
    subtitle: 'Chispas frías de titanio que no queman al tacto ni activan alarmas de humo. Hacé de tu vals, entrada o fiesta un recuerdo imborrable.',
    ctaPrimary: 'Cotizar Show Especial',
    ctaPrimaryHref: '#eventos',
    ctaSecondary: 'Hablar con un Asesor',
    ctaSecondaryHref: 'https://wa.me/59895018716?text=Hola,%20quiero%20cotizar%20un%20show%20para%20un%20evento',
    bgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
    colorBadge: '#D97706',
    bgBadge: '#FFFBEB',
    accentColor: '#D97706',
    featuredProduct: {
      name: 'Cascadas & Chispas Frías Sparkular',
      tag: '✨ Efecto Indoor Seguro',
      category: 'Bodas & 15 Años',
      price: 3200,
      listPrice: 3800,
      shots: 'Chispas Frías',
      duration: 'Efecto continuo',
      image: 'https://images.unsplash.com/photo-1533230303869-70355fca78e8?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/pXla_K47w7M?autoplay=1',
      description: 'Chispas de titanio que no queman telas ni piel. Aprobado para salones cerrados.',
    },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];
  const feat = slide.featuredProduct;

  return (
    <section style={{ paddingTop: '82px', background: '#F8FAFC', position: 'relative' }}>

      {/* Banner Principal con Foto/Video Real de Fondo */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 20px 24px' }}>
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 16px 40px rgba(15, 23, 42, 0.2)',
          background: '#0F172A',
        }}>

          {/* Foto Real de Fondo con transición */}
          <img
            key={slide.bgImage}
            src={slide.bgImage}
            alt={slide.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
              filter: 'brightness(0.92) contrast(1.05)',
              transition: 'opacity 0.8s ease-in-out',
            }}
          />

          {/* Capa de Gradiente Profesional para máxima legibilidad del texto */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.82) 48%, rgba(15, 23, 42, 0.45) 100%)',
          }} />

          {/* Contenido Principal del Banner: Texto a la Izquierda + Tarjeta de Producto a la Derecha */}
          <div style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4.5vw, 52px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.95fr)',
            gap: '32px',
            alignItems: 'center',
          }}>

            {/* Columna Izquierda: Información y Título */}
            <div>
              {/* Tag badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FFFFFF',
                color: slide.colorBadge,
                fontSize: '0.8rem',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '9999px',
                marginBottom: '16px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
              }}>
                <Sparkles size={14} />
                <span>{slide.tag}</span>
              </div>

              {/* Titulo */}
              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '14px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              }}>
                {slide.title}
              </h1>

              {/* Subtitulo */}
              <p style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                color: 'rgba(255, 255, 255, 0.92)',
                marginBottom: '28px',
                lineHeight: 1.6,
                maxWidth: '620px',
                textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)',
              }}>
                {slide.subtitle}
              </p>

              {/* Botones de acción */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={slide.ctaPrimaryHref}
                  style={{
                    background: '#FFFFFF',
                    color: slide.colorBadge,
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    padding: '13px 26px',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>{slide.ctaPrimary}</span>
                  <ArrowRight size={18} />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveVideoModal(feat.videoUrl)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    padding: '12px 20px',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
                >
                  <Play size={16} fill="#FFFFFF" />
                  <span>Ver Video del Efecto</span>
                </button>

                <a
                  href={slide.ctaSecondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'underline',
                  }}
                >
                  <span>{slide.ctaSecondary}</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta con Foto y Video del Producto Destacado */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '16px',
                width: '100%',
                maxWidth: '360px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
              }}>
                {/* Imagen del producto con botón de Play para ver video */}
                <div
                  onClick={() => setActiveVideoModal(feat.videoUrl)}
                  style={{
                    position: 'relative',
                    height: '180px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    marginBottom: '14px',
                  }}
                  title="Hacé clic para ver el video del efecto"
                >
                  <img
                    src={feat.image}
                    alt={feat.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Badge en miniatura */}
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: slide.accentColor,
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 8px',
                    borderRadius: '6px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  }}>
                    {feat.tag}
                  </span>

                  {/* Botón flotante de reproducción de video */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      color: slide.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                    }}>
                      <Play size={20} fill={slide.accentColor} style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                </div>

                {/* Info del Producto */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
                    {feat.category}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px', lineHeight: 1.25 }}>
                    {feat.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.45, marginBottom: '10px' }}>
                    {feat.description}
                  </p>

                  {/* Precios y Tags */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    borderTop: '1px solid #E2E8F0',
                  }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#94A3B8', textDecoration: 'line-through', marginRight: '6px' }}>
                        ${feat.listPrice.toLocaleString('es-UY')}
                      </span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 900, color: slide.accentColor }}>
                        ${feat.price.toLocaleString('es-UY')} <span style={{ fontSize: '0.7rem', color: '#64748B' }}>UYU</span>
                      </span>
                    </div>

                    <a
                      href="#catalogo"
                      style={{
                        background: '#0F172A',
                        color: '#FFFFFF',
                        border: 0,
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>Ver más</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controles de Slide en la parte inferior */}
          <div style={{
            position: 'absolute',
            bottom: '18px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 4,
          }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  background: i === currentSlide ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
                aria-label={`Ir al banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Video Interactivo para ver el efecto en vivo */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '780px',
              background: '#0F172A',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <div style={{
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#1E293B',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Play size={16} color="#DC2626" fill="#DC2626" />
                <span>Demostración del Efecto en Vivo</span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                style={{
                  background: 'transparent',
                  border: 0,
                  color: '#94A3B8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                src={activeVideoModal}
                title="Demostración de Fuegos Artificiales"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Barra de 4 Pilares / Confianza Oficial (Fondo Claro) */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px 36px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>

          <div className="clean-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#FEF2F2',
              color: '#DC2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Homologado por el S.M.A.</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B' }}>100% legal y certificado por el Ejército</div>
            </div>
          </div>

          <div className="clean-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#FFFBEB',
              color: '#D97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Truck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Envíos a Todo Uruguay</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Montevideo e interior en 24/48 hs</div>
            </div>
          </div>

          <div className="clean-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#ECFDF5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <DollarSign size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Precios Web Exclusivos</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Descuentos y combos de temporada</div>
            </div>
          </div>

          <div className="clean-card" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#EFF6FF',
              color: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <MapPin size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>Local en Hocquart 1642</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Zona La Comercial, Montevideo</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
