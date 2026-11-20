import { SAFETY_TIPS } from '../data/products';
import { ShieldCheck, AlertCircle, FileCheck, PhoneCall, Award } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="seguridad" style={{ padding: 'clamp(50px, 7vw, 80px) 16px', background: '#FFFFFF', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Title */}
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
            <ShieldCheck size={16} />
            <span>Homologación Oficial en Uruguay</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#0F172A', marginBottom: '12px', fontWeight: 900 }}>
            Seguridad Certificada por el <span style={{ color: '#DC2626' }}>S.M.A.</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.02rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            En Mundo Pirotécnico la seguridad es nuestra prioridad número uno. Todos nuestros productos cuentan con registro y habilitación del Servicio de Material y Armamento del Ejército Nacional (S.M.A.) y cumplen con las directivas de la Dirección Nacional de Bomberos.
          </p>
        </div>

        {/* Safety tips cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '36px',
        }}>
          {SAFETY_TIPS.map((tip) => (
            <div
              key={tip.number}
              className="clean-card"
              style={{
                padding: '24px 20px',
                position: 'relative',
                background: '#F8FAFC',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
              }}
            >
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#E2E8F0',
                position: 'absolute',
                top: '12px',
                right: '16px',
                lineHeight: 1,
              }}>
                {tip.number}
              </span>
              <h3 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '10px', fontWeight: 800 }}>
                {tip.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>
                {tip.text}
              </p>
            </div>
          ))}
        </div>

        {/* Legal & Emergency Callout */}
        <div style={{
          padding: '24px 28px',
          background: '#FFFBEB',
          border: '1.5px solid #FDE68A',
          borderRadius: '18px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px' }}>
            <div style={{
              background: '#F59E0B',
              color: '#FFFFFF',
              padding: '12px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <AlertCircle size={26} />
            </div>
            <div>
              <h4 style={{ color: '#92400E', fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>
                Prohibida la venta a menores de 18 años
              </h4>
              <p style={{ color: '#B45309', fontSize: '0.88rem', margin: 0 }}>
                La manipulación y encendido de pirotecnia debe ser realizada exclusivamente por adultos responsables y en espacios abiertos.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{
              background: '#FFFFFF',
              color: '#92400E',
              padding: '8px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              border: '1px solid #FDE68A',
            }}>
              🚒 Bomberos: 104
            </span>
            <span style={{
              background: '#FFFFFF',
              color: '#92400E',
              padding: '8px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              border: '1px solid #FDE68A',
            }}>
              🚨 Emergencias: 911
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
