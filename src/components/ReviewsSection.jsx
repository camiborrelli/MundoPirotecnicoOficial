import { TESTIMONIALS } from '../data/products';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section style={{ padding: 'clamp(50px, 7vw, 80px) 16px', background: '#F8FAFC', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: '#FFFBEB',
            border: '1px solid #FDE68A',
            color: '#D97706',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '14px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            <Star size={15} fill="#D97706" color="#D97706" />
            <span>Opiniones Reales de Clientes</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#0F172A', marginBottom: '12px', fontWeight: 900 }}>
            La Confianza de Miles de <span style={{ color: '#D97706' }}>Celebraciones</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
            Familias, novios, organizadores de eventos y empresas que eligen Mundo Pirotécnico año a año.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="clean-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                  {[...Array(t.stars)].map((_, idx) => (
                    <Star key={idx} size={18} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ color: '#334155', fontStyle: 'italic', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '22px' }}>
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 600 }}>{t.event}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
