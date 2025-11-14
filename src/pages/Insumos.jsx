import "./Insumos.css";
import { insumos } from "../data/insumos";
import { useState, useEffect } from "react";
import ModalPlanta from "../components/ModalPlanta"; // vamos usar o mesmo modal!

export default function Insumos() {
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const abrirModal = (item) => {
    setItemSelecionado(item);
  };

  const fecharModal = () => {
    setItemSelecionado(null);
  };
  
  useEffect(() => {
  const cards = document.querySelectorAll(".insumo-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);


  return (
    <div className="insumos-container">
      <h1>Insumos para Plantas 🧪</h1>
      <p>Produtos essenciais para o cuidado das suas plantas.</p>

      <div className="insumos-grid">
        {insumos.map(item => (
          <article key={item.id} className="insumo-card">
            <img src={item.imagem} alt={item.nome} className="insumo-imagem" />

            <h2>{item.nome}</h2>
            <span className="insumo-categoria">{item.categoria}</span>

            <p className="insumo-preco"><strong>{item.preco}</strong></p>

            <button className="btn-insumo" onClick={() => abrirModal(item)}>
              Ver detalhes
            </button>
          </article>
        ))}
      </div>

      <ModalPlanta planta={itemSelecionado} onClose={fecharModal} />
    </div>
  );
}
