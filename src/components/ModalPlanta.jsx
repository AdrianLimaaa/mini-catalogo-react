import "./ModalPlanta.css";

export default function ModalPlanta({ planta, onClose }) {
  if (!planta) return null; // se não houver planta selecionada, não renderiza nada

  return (
    <>
      {/* Fundo escurecido */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Container do modal */}
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <h2>{planta.nome}</h2>

        {planta.imagem && (
          <img src={planta.imagem} alt={planta.nome} className="modal-imagem" />
        )}

        <ul className="modal-info">
          <li><strong>Categoria:</strong> {planta.categoria}</li>
          <li><strong>Luz:</strong> {planta.luz}</li>
          <li><strong>Rega:</strong> {planta.rega}</li>
          <li><strong>Fertilização:</strong> {planta.fertilizante}</li>
          <li><strong>Ambiente:</strong> {planta.ambiente}</li>
        </ul>

        <p className="modal-descricao">{planta.descricao}</p>
      </div>
    </>
  );
}
