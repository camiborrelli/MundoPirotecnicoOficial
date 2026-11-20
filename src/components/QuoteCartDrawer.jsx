import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function QuoteCartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalListPrice = items.reduce((acc, item) => {
    const listP = item.product.listPrice || Math.round(item.product.price * 1.18);
    return acc + listP * item.quantity;
  }, 0);
  const savings = totalListPrice - total;
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `¡Hola Mundo Pirotécnico! Quiero realizar el siguiente pedido desde el carrito web:\n\n`;
    items.forEach((item, index) => {
      message += `• ${item.product.name} (x${item.quantity}) = $${(item.product.price * item.quantity).toLocaleString('es-UY')} UYU\n`;
    });
    message += `\n*TOTAL ESTIMADO PRECIO WEB: $${total.toLocaleString('es-UY')} UYU*\n`;
    if (savings > 0) {
      message += `(Ahorro Web aplicado: $${savings.toLocaleString('es-UY')} UYU)\n`;
    }
    message += `\n¿Tienen stock disponible en el local de Hocquart 1642 o coordinamos envío? ¡Muchas gracias!`;

    window.open(`https://wa.me/59895018716?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.18)',
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '18px 22px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FFFFFF',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)',
              padding: '9px',
              borderRadius: '12px',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#0F172A', fontWeight: 900, margin: 0 }}>Mi Carrito</h3>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                {totalItems} {totalItems === 1 ? 'artículo agregado' : 'artículos agregados'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            style={{
              background: '#F1F5F9',
              border: 'none',
              color: '#475569',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Savings banner */}
        {items.length > 0 && savings > 0 && (
          <div style={{
            background: '#ECFDF5',
            borderBottom: '1px solid #D1FAE5',
            padding: '10px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.82rem',
            color: '#047857',
            fontWeight: 700,
          }}>
            <Sparkles size={16} />
            <span>¡Estás ahorrando ${savings.toLocaleString('es-UY')} UYU con Precios Web!</span>
          </div>
        )}

        {/* Drawer Content / List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#F8FAFC' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 10px', color: '#64748B' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <ShoppingBag size={28} color="#94A3B8" />
              </div>
              <h4 style={{ color: '#0F172A', fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                Tu carrito está vacío
              </h4>
              <p style={{ fontSize: '0.88rem', maxWidth: '280px', margin: '0 auto 20px', lineHeight: 1.5 }}>
                Explorá nuestro catálogo y sumá fuegos artificiales para armar tu pedido.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: '#DC2626',
                  color: '#FFFFFF',
                  border: 0,
                  borderRadius: '12px',
                  padding: '10px 22px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                }}
              >
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <div>
                      <h4 style={{ color: '#0F172A', fontSize: '0.96rem', fontWeight: 800, marginBottom: '3px' }}>
                        {item.product.name}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
                        ${item.product.price.toLocaleString('es-UY')} UYU c/u
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      style={{
                        background: '#FEF2F2',
                        border: 'none',
                        color: '#DC2626',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '8px',
                      }}
                      title="Eliminar producto"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Quantity & Subtotal */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid #F1F5F9',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#F1F5F9',
                      borderRadius: '10px',
                      padding: '4px 8px',
                    }}>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                        style={{
                          background: '#FFFFFF',
                          border: 'none',
                          color: '#0F172A',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', minWidth: '22px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                        style={{
                          background: '#FFFFFF',
                          border: 'none',
                          color: '#0F172A',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0F172A' }}>
                      ${(item.product.price * item.quantity).toLocaleString('es-UY')} <span style={{ fontSize: '0.75rem', color: '#64748B' }}>UYU</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div style={{
            padding: '20px 22px',
            borderTop: '1px solid #E2E8F0',
            background: '#FFFFFF',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Total Estimado Web</span>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#DC2626' }}>
                  ${total.toLocaleString('es-UY')} <span style={{ fontSize: '0.85rem', color: '#64748B' }}>UYU</span>
                </div>
              </div>

              <button
                onClick={onClearCart}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  fontSize: '0.8rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Vaciar lista
              </button>
            </div>

            <button
              onClick={handleSendWhatsApp}
              style={{
                width: '100%',
                background: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '14px',
                padding: '15px',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <MessageSquare size={20} />
              <span>Enviar Pedido a WhatsApp</span>
              <ArrowRight size={18} />
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748B', marginTop: '10px', margin: '10px 0 0' }}>
              Precios con IVA incluido • Retiro en Hocquart 1642 o envíos a todo Uruguay.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
