import { SHOWS_SERVICES } from '../data/products';
import { Heart, Baby, Radio, ShieldCheck, Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Heart,
  Baby,
  Radio,
  ShieldCheck,
};

export default function EventsShowsSection({ onOpenContactWithSubject }) {
  return (
    <section id="eventos" style={{ padding: 'clamp(50px, 7vw, 80px) 16px', background: '#F8FAFC', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            color: '#DC2626',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '14px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            <Calendar size={15} />
            <span>Producciones Especiales & Eventos</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#0F172A', marginBottom: '12px', fontWeight: 900 }}>
            Shows Profesionales para <span style={{ color: '#DC2626' }}>Bodas, 15 Años & Fiestas</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.02rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Diseñamos espectáculos lumínicos y piromusicales a medida con operadores habilitados, consolas computarizadas y homologación del Servicio de Material y Armamento en todo el país.
          </p>
        </div>

        {/* Services Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '40px',
        }}>
          {SHOWS_SERVICES.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Heart;
            // Map accents to bright commercial tones
            const isWedding = srv.id === 'bodas';
            const accentColor = isWedding ? '#DC2626' : (srv.id === 'revelacion' ? '#0284C7' : '#D97706');
            const bgBadgeColor = isWedding ? '#FEF2F2' : (srv.id === 'revelacion' ? '#F0F9FF' : '#FFFBEB');

            return (
              <div
                key={srv.id}
                className="clean-card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  borderTop: `4px solid ${accentColor}`,
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: bgBadgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}>
                    <Icon size={24} color={accentColor} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '4px', fontWeight: 800 }}>
                    {srv.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: accentColor, fontWeight: 700, marginBottom: '14px' }}>
                    {srv.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                    {srv.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '26px' }}>
                    {srv.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.85rem', color: '#334155' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: bgBadgeColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Check size={12} color={accentColor} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico,%20quisiera%20solicitar%20presupuesto%20para:%20${encodeURIComponent(srv.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    border: `1.5px solid ${accentColor}`,
                    color: accentColor,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = bgBadgeColor;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Pedir Cotización por WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
