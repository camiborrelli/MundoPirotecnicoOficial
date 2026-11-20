import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ prefilledSubject = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: prefilledSubject || 'Consulta de Productos / Presupuesto',
    date: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `¡Hola Mundo Pirotécnico! Mi nombre es ${form.name}.\n` +
      `Teléfono: ${form.phone}\n` +
      `Motivo: ${form.eventType}\n` +
      (form.date ? `Fecha estimada: ${form.date}\n` : '') +
      `Mensaje: ${form.message}`
    );
    window.open(`https://wa.me/59895018716?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" style={{ padding: 'clamp(50px, 7vw, 80px) 16px', background: '#F8FAFC', position: 'relative' }}>
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
            <MapPin size={15} />
            <span>Local & Contacto Directo</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#0F172A', marginBottom: '12px', fontWeight: 900 }}>
            Visitanos en Nuestro <span style={{ color: '#DC2626' }}>Local Oficial</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.02rem', maxWidth: '640px', margin: '0 auto' }}>
            Estamos en el corazón de Montevideo. Pasá a conocer el show de luces o contactanos online para coordinar tu pedido con envíos a todo el Uruguay.
          </p>
        </div>

        {/* Content Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}>
          
          {/* Info Card */}
          <div className="clean-card" style={{
            padding: '34px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
          }}>
            <div>
              <div style={{ display: 'inline-block', background: '#FEF2F2', color: '#DC2626', fontSize: '0.78rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', marginBottom: '10px' }}>
                DESDE 1998
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 900, marginBottom: '6px' }}>
                Mundo Pirotécnico Uruguay
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Importación directa, venta minorista y mayorista, combos para fin de año y espectáculos certificados en todo el territorio uruguayo.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: '#FEF2F2', padding: '10px', borderRadius: '12px', color: '#DC2626', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Dirección</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>Hocquart 1642, La Comercial</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Montevideo, Uruguay (CP 11800)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: '#ECFDF5', padding: '10px', borderRadius: '12px', color: '#059669', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Teléfonos de Atención</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A' }}>Tel: 2925 4193</div>
                  <div style={{ fontSize: '0.88rem', color: '#059669', fontWeight: 700 }}>WhatsApp Oficial: 095 018 716</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: '#EFF6FF', padding: '10px', borderRadius: '12px', color: '#2563EB', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Correo Electrónico</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>ventas@mundopirotecnico.uy</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ background: '#FFFBEB', padding: '10px', borderRadius: '12px', color: '#D97706', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Horarios de Atención</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>Lunes a Viernes: 09:00 a 19:00 hs</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Sábados: 09:30 a 14:00 hs (Horario extendido en Dic)</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <a
              href="https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico,%20quiero%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '14px 20px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontWeight: 800,
                fontSize: '0.96rem',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <MessageSquare size={19} />
              <span>Chatear por WhatsApp Directo</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="clean-card" style={{
            padding: '34px 28px',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 900, marginBottom: '6px' }}>
              Envianos tu Consulta
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '22px' }}>
              Completá el formulario y te responderemos por WhatsApp o teléfono a la brevedad.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Laura González"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '12px',
                    color: '#0F172A',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Teléfono / Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="099 123 456"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '12px',
                      color: '#0F172A',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Motivo / Interés
                  </label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '12px',
                      color: '#0F172A',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="Consulta de Productos / Presupuesto">Consulta de Productos</option>
                    <option value="Línea Pet Friendly (Bajo Ruido)">Línea Pet Friendly</option>
                    <option value="Show para Boda / 15 Años">Show Boda / 15 Años</option>
                    <option value="Revelación de Género">Revelación de Género</option>
                    <option value="Venta Mayorista / Revendedores">Venta Mayorista</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Detalle de tu Consulta o Pedido
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="¿En qué te podemos ayudar? Contanos sobre tu evento o los productos que te interesan..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '12px',
                    color: '#0F172A',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                  color: '#FFFFFF',
                  border: 0,
                  borderRadius: '14px',
                  padding: '14px 24px',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.25)',
                  transition: 'all 0.2s ease',
                  marginTop: '4px',
                }}
              >
                <Send size={18} />
                <span>Enviar Consulta por WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
