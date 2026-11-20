import { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import {
  Sparkles,
  ShoppingBag,
  Menu,
  X,
  MessageSquare,
  Phone,
  MapPin,
} from "lucide-react";

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#pet-friendly", label: "🐾 Pet Friendly" },
    { href: "#eventos", label: "Shows & Eventos" },
    { href: "#seguridad", label: "Seguridad S.M.A." },
    { href: "#contacto", label: "Local & Contacto" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#FFFFFF",
        boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)",
        borderTop: "3px solid #DC2626",
      }}
    >
      {/* Barra de Navegación en UNA SOLA FILA */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 20px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Brand Logo Oficial */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #DC2626 0%, #F59E0B 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 10px rgba(220, 38, 38, 0.25)",
              flexShrink: 0,
            }}
          >
            <Sparkles size={20} color="#FFFFFF" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 900,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "#DC2626" }}>MUNDO</span>
              <span style={{ color: "#D97706" }}>PIROTÉCNICO</span>
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                color: "#64748B",
                letterSpacing: "0.04em",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Hocquart 1642 • Tel: 2925 4193
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links (TODO EN UNA SOLA LÍNEA, SIN PARTIRSE) */}
        <nav style={{ display: "none" }} className="lg-nav">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "nowrap",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href} style={{ whiteSpace: "nowrap" }}>
                <a
                  href={link.href}
                  style={{
                    color: "#334155",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#DC2626";
                    e.currentTarget.style.background = "#FEF2F2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#334155";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botones de Acción Derecha (WhatsApp + Cotizador) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico,%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "9px 14px",
              borderRadius: "12px",
              fontWeight: 800,
              fontSize: "0.86rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(37, 211, 102, 0.25)",
              whiteSpace: "nowrap",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-1px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <MessageSquare size={16} />
            <span style={{ display: "none" }} className="sm-nav-label">
              095 018 716
            </span>
          </a>

          {/* Botón Carrito */}
          <button
            onClick={onOpenCart}
            style={{
              position: "relative",
              background: "#FEF2F2",
              border: "1.5px solid #FECACA",
              borderRadius: "12px",
              padding: "8px 14px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              color: "#DC2626",
              fontWeight: 800,
              fontSize: "0.86rem",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#DC2626";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FEF2F2";
              e.currentTarget.style.color = "#DC2626";
            }}
            aria-label="Ver carrito"
          >
            <PiShoppingCart size={17} />
            <span style={{ display: "none" }} className="sm-nav-label">
              Carrito
            </span>
            {cartCount > 0 && (
              <span
                style={{
                  background: "#DC2626",
                  color: "#FFF",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  borderRadius: "9999px",
                  padding: "2px 7px",
                  minWidth: "20px",
                  textAlign: "center",
                  boxShadow: "0 2px 6px rgba(220, 38, 38, 0.4)",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "10px",
              padding: "8px",
              color: "#334155",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-toggle-btn"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid #E2E8F0",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#1E293B",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.96rem",
                padding: "10px 0",
                borderBottom: "1px solid #F1F5F9",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            style={{
              paddingTop: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ fontSize: "0.82rem", color: "#64748B" }}>
              📍 Local en Hocquart 1642 • Tel: 2925 4193
            </div>
            <a
              href="https://wa.me/59895018716"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "12px",
                fontWeight: 800,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <MessageSquare size={18} />
              <span>Chatear por WhatsApp (095 018 716)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
