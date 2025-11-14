import "./ModalPlanta.css";

export default function ModalPlanta({ planta, onClose }) {
  if (!planta) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <h2>{planta.nome}</h2>

        {planta.imagem && (
          <img
            src={planta.imagem}
            alt={planta.nome}
            className="modal-imagem"
          />
        )}

        <ul className="modal-info">
          {planta.categoria && (
            <li><strong>Categoria:</strong> {planta.categoria}</li>
          )}
          {planta.luz && <li><strong>Luz:</strong> {planta.luz}</li>}
          {planta.rega && <li><strong>Rega:</strong> {planta.rega}</li>}
          {planta.fertilizante && (
            <li><strong>Fertilização:</strong> {planta.fertilizante}</li>
          )}
          {planta.ambiente && (
            <li><strong>Ambiente:</strong> {planta.ambiente}</li>
          )}
          {planta.uso && (
            <li><strong>Uso:</strong> {planta.uso}</li>
          )}
        </ul>

        <p className="modal-descricao">{planta.descricao}</p>
      </div>
    </div>
  );
}
