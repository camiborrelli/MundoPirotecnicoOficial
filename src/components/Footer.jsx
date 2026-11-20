import { Sparkles, Heart, ShieldCheck, MapPin, Phone, Mail, Truck, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      color: '#CBD5E1',
      padding: '60px 20px 30px',
      borderTop: '4px solid #DC2626',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sparkles size={20} color="#FFFFFF" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.28rem', color: '#FFFFFF' }}>
                MUNDO <span style={{ color: '#F59E0B' }}>PIROTÉCNICO</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Importación directa, distribución mayorista y espectáculos de fuegos artificiales de alta gama y línea Pet Friendly en todo Uruguay desde 1998.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ADE80', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Habilitado por el S.M.A. del Ejército Nacional</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '16px' }}>Navegación</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li><a href="#catalogo" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Catálogo Oficial de Productos</a></li>
              <li><a href="#pet-friendly" style={{ color: '#4ADE80', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>🐾 Línea Pet Friendly (Bajo Ruido)</a></li>
              <li><a href="#eventos" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Shows para Bodas y 15 Años</a></li>
              <li><a href="#seguridad" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Normas de Seguridad S.M.A.</a></li>
              <li><a href="#contacto" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Local Físico & Horarios</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '16px' }}>Categorías Populares</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#94A3B8', padding: 0 }}>
              <li>Tortas & Festivales de Gran Altura</li>
              <li>Fuentes de Chispas Frías para Salones</li>
              <li>Humos de Color & Revelación de Género</li>
              <li>Cañas, Morteros y Efectos Estelares</li>
              <li>Combos Familiares & Pirotecnia Infantil</li>
            </ul>
          </div>

          {/* Location & Payment */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '16px' }}>Local en Montevideo</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#94A3B8', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#DC2626" />
                <span>Hocquart 1642, La Comercial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#22C55E" />
                <span>Tel: 2925 4193 • Cel: 095 018 716</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#38BDF8" />
                <span>ventas@mundopirotecnico.uy</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 14px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ fontSize: '0.78rem', color: '#E2E8F0', fontWeight: 700, marginBottom: '4px' }}>
                💳 Medios de Pago en Uruguay:
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Mercado Pago, Tarjetas de Crédito y Débito (OCA, Visa, Master), RedPagos, Abitab y Transferencia BROU / Santander.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          fontSize: '0.84rem',
          color: '#64748B',
        }}>
          <div>
            © {new Date().getFullYear()} Mundo Pirotécnico S.R.L. Todos los derechos reservados. Montevideo, Uruguay.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Celebrá con alegría y respeto por nuestras mascotas</span> 🐾✨
          </div>
        </div>

      </div>
    </footer>
  );
}
