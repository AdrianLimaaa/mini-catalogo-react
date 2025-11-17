import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logoNome">
        <img src="./img/Logo/menor.png" alt="" className="logoImg"/>
      <h1 className="logo">Oasis</h1>
      </div>
      

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
