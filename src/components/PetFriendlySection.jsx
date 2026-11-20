import { ShieldCheck, Heart, Sparkles, VolumeX, Eye, ArrowRight, Dog, Award } from 'lucide-react';

export default function PetFriendlySection({ onSelectPetCategory }) {
  const benefits = [
    {
      icon: <VolumeX size={24} color="#059669" />,
      title: 'Bajo Nivel Decibélico',
      desc: 'Genera menos de 65 decibeles, eliminando las detonaciones secas que provocan taquicardia o pánico en mascotas.',
    },
    {
      icon: <Eye size={24} color="#0284C7" />,
      title: '100% Lumínico y Colorido',
      desc: 'Cometas de colores brillantes, fuentes de perlas plateadas y cascadas doradas con la misma emoción y magia visual.',
    },
    {
      icon: <Heart size={24} color="#DC2626" />,
      title: 'Inclusivo para la Familia',
      desc: 'Ideal para celebrar con niños pequeños, personas con hipersensibilidad acústica (TEA) y adultos mayores en total armonía.',
    },
    {
      icon: <Award size={24} color="#D97706" />,
      title: 'Liderazgo en Uruguay',
      desc: 'Mundo Pirotécnico es pionero en Montevideo en promover la transición hacia festejos responsables y amigables con animales.',
    },
  ];

  return (
    <section id="pet-friendly" style={{
      padding: 'clamp(50px, 7vw, 80px) 16px',
      background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)',
      borderTop: '1px solid #DCFCE7',
      borderBottom: '1px solid #DCFCE7',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: '#ECFDF5',
            border: '1px solid #A7F3D0',
            color: '#059669',
            fontWeight: 800,
            fontSize: '0.82rem',
            marginBottom: '14px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            <Dog size={16} />
            <span>Pirotecnia Consciente • Montevideo, Uruguay</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
            color: '#0F172A',
            marginBottom: '12px',
            fontWeight: 900,
          }}>
            Línea <span style={{ color: '#059669' }}>Pet Friendly</span> & Bajo Ruido
          </h2>
          <p style={{
            color: '#475569',
            maxWidth: '720px',
            margin: '0 auto',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: 1.6,
          }}>
            Celebrar en familia no tiene por qué causarle miedo a nuestros animales de compañía.
            Conocé nuestra exclusiva selección de fuegos artificiales de bajo impacto sonoro: máxima luz, cero sobresaltos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '36px',
        }}>
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                padding: '26px 22px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(5, 150, 105, 0.05)',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: '#F0FDF4',
                border: '1px solid #DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '8px', fontWeight: 800 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action card banner con foto real de fondo */}
        <div style={{
          position: 'relative',
          padding: 'clamp(28px, 4vw, 40px)',
          borderRadius: '24px',
          overflow: 'hidden',
          color: '#FFFFFF',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 16px 36px rgba(5, 150, 105, 0.22)',
          background: '#064E3B',
        }}>
          {/* Foto de fondo */}
          <img
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80"
            alt="Fuegos lumínicos silenciosos"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
              filter: 'brightness(0.85)',
            }}
          />
          {/* Gradiente verde esmeralda */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(90deg, rgba(4, 120, 87, 0.95) 0%, rgba(5, 150, 105, 0.88) 55%, rgba(6, 78, 59, 0.7) 100%)',
          }} />

          <div style={{ flex: '1 1 320px', position: 'relative', zIndex: 3 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(6px)',
              padding: '5px 14px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '12px',
            }}>
              <ShieldCheck size={14} /> Recomendado por Médicos Veterinarios
            </div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)', color: '#FFFFFF', marginBottom: '8px', fontWeight: 900 }}>
              ¿Querés armar un festejo familiar con tranquilidad?
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '0.94rem', maxWidth: '640px', lineHeight: 1.55 }}>
              Te asesoramos para cumpleaños, quintas, bodas y fin de año con artículos homologados que cuidan a mascotas y niños pequeños.
            </p>
          </div>
          
          <button
            onClick={onSelectPetCategory}
            style={{
              position: 'relative',
              zIndex: 3,
              background: '#FFFFFF',
              color: '#047857',
              border: 0,
              borderRadius: '14px',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease',
              flex: '0 0 auto',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>Ver Productos Pet Friendly</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
