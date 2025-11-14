import "./Catalogo.css";
import { plantas } from "../data/plantas";
import ModalPlanta from "../components/ModalPlanta";
import SkeletonCard from "../components/SkeletonCard";

import { useState, useEffect } from "react";

export default function Catalogo() {
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);

  // estados dos filtros
  const [filtroSol, setFiltroSol] = useState("todos");
  const [filtroRega, setFiltroRega] = useState("todos");

  // estado do skeleton
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  function abrirModal(planta) {
    setPlantaSelecionada(planta);
  }

  function fecharModal() {
    setPlantaSelecionada(null);
  }

  // filtros aplicados
  const plantasFiltradas = plantas.filter((planta) => {
    if (filtroSol !== "todos" && planta.solNivel !== Number(filtroSol)) {
      return false;
    }

    if (filtroRega !== "todos" && planta.regaNivel !== Number(filtroRega)) {
      return false;
    }

    return true;
  });

  // animação dos cards
  useEffect(() => {
    if (carregando) return; // evita animar skeleton

    const cards = document.querySelectorAll(".card-planta");

    cards.forEach((card) => card.classList.add("card-hidden"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
            entry.target.classList.remove("card-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [plantasFiltradas, carregando]);

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Plantas 🌿</h1>
      <p>Use os filtros para encontrar a planta ideal.</p>

      {/* BARRA DE FILTROS */}
      <div className="catalogo-filtros">
        <div className="filtro-grupo">
          <label>Quantidade de sol</label>
          <select
            value={filtroSol}
            onChange={(e) => setFiltroSol(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="0">Sombra</option>
            <option value="1">Meia-sombra</option>
            <option value="2">Sol indireto</option>
            <option value="3">Sol pleno</option>
          </select>
        </div>

        <div className="filtro-grupo">
          <label>Quantidade de rega</label>
          <select
            value={filtroRega}
            onChange={(e) => setFiltroRega(e.target.value)}
          >
            <option value="todos">Todas</option>
            <option value="0">Pouca rega</option>
            <option value="1">Rega média</option>
            <option value="2">Rega alta</option>
          </select>
        </div>

        <button
          className="filtro-reset"
          type="button"
          onClick={() => {
            setFiltroSol("todos");
            setFiltroRega("todos");
          }}
        >
          Limpar filtros
        </button>
      </div>

      {/* GRID DE CARDS */}
      <div className="catalogo-grid">

        {/* SKELETONS */}
        {carregando &&
          Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
        }

        {/* CARDS REAIS */}
        {!carregando &&
          plantasFiltradas.map((planta) => (
            <article key={planta.id} className="card-planta">
              <img
                src={planta.imagem}
                alt={planta.nome}
                className="card-imagem"
              />

              <h2 className="card-nome">{planta.nome}</h2>

              <span className="card-categoria">{planta.categoria}</span>
              <br />

              <button className="card-btn" onClick={() => abrirModal(planta)}>
                Ver detalhes
              </button>
            </article>
          ))
        }

      </div>

      <ModalPlanta planta={plantaSelecionada} onClose={fecharModal} />
    </div>
  );
}
