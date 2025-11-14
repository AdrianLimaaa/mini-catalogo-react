import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">Mini Catálogo de Plantas 🌱</h1>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/catalogo">Catálogo</a>
        <a href="/insumos">Insumos</a>
        <a href="/sobre">Sobre Nós</a>
        <a href="/contato">Contato</a>
      </nav>

      {/* Ícone Hambúrguer */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    </header>
  );
}
