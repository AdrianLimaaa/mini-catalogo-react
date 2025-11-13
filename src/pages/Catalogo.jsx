import "./Catalogo.css";
import { plantas } from "../data/plantas";
import { useState } from "react";
import ModalPlanta from "../components/ModalPlanta";

export default function Catalogo() {
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);

  const abrirModal = (planta) => {
    setPlantaSelecionada(planta);
  };

  const fecharModal = () => {
    setPlantaSelecionada(null);
  };

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Plantas 🌿</h1>
      <p className="catalogo-subtitle">
        Confira algumas plantas e informações básicas de cuidado.
      </p>

      <div className="catalogo-grid">
        {plantas.map(planta => (
          <article key={planta.id} className="planta-card">
            <div className="planta-header">
              <h2>{planta.nome}</h2>
              <span className="planta-categoria">{planta.categoria}</span>
            </div>

            <ul className="planta-info">
              <li><strong>Luz:</strong> {planta.luz}</li>
              <li><strong>Rega:</strong> {planta.rega}</li>
              <li><strong>Fertilização:</strong> {planta.fertilizante}</li>
            </ul>

            <p className="planta-descricao">{planta.descricao}</p>

            <button
              className="btn-detalhes"
              onClick={() => abrirModal(planta)}
            >
              Mais informações
            </button>
          </article>
        ))}
      </div>

      <ModalPlanta planta={plantaSelecionada} onClose={fecharModal} />
    </div>
  );
}
