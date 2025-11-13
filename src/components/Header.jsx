import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Mini Catálogo de Plantas 🌱</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogo">Catálogo</Link></li>
          <li><Link to="/insumos">Insumos</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

