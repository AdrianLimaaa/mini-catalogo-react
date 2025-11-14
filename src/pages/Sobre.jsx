import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-container">

      {/* HERO – primeira sessão, apresentação */}
      <section className="sobre-hero">
        <h1>Sobre Nós 🌿</h1>
        <p>Conheça nossa história, missão e propósito.</p>
      </section>

      {/* SESSÃO – Quem Somos */}
      <section className="sobre-bloco">
        <h2>Quem Somos</h2>
        <p>
          Somos apaixonados por plantas e acreditamos que qualquer pessoa pode 
          criar um espaço mais verde em casa com as orientações certas. 
          Este projeto foi criado para compartilhar conhecimento de forma simples 
          e acessível.
        </p>
      </section>

      {/* SESSÃO – Missão */}
      <section className="sobre-bloco">
        <h2>Nossa Missão</h2>
        <p>
          Tornar o cuidado com plantas algo fácil e prazeroso, oferecendo 
          informações claras, detalhadas e confiáveis sobre cada espécie e 
          cada insumo necessário para seu cultivo.
        </p>
      </section>

      {/* SESSÃO – O que oferecemos */}
      <section className="sobre-oferecemos">
        <h2>O que oferecemos</h2>

        <ul>
          <li>✔ Catálogo organizado com plantas e insumos</li>
          <li>✔ Informações de luz, rega e ambiente</li>
          <li>✔ Modais com detalhes completos</li>
          <li>✔ Layout simples, rápido e responsivo</li>
          <li>✔ Conteúdo sempre em evolução</li>
        </ul>
      </section>

      {/* CHAMADA FINAL */}
      <section className="sobre-final">
        <h2>Explore nosso catálogo</h2>
        <p>Descubra plantas incríveis e aprenda como cuidar delas.</p>
      </section>

    </div>
  );
}
