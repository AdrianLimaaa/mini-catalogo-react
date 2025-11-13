import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Bem-vindo ao Mini Catálogo de Plantas 🌱</h1>
        <p>Encontre informações sobre plantas, insumos e cuidados para seu jardim.</p>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <h3>🌿 Catálogo Completo</h3>
          <p>Veja detalhes sobre cada planta: rega, luz, solo e muito mais.</p>
        </div>

        <div className="feature-card">
          <h3>🧪 Insumos Indicados</h3>
          <p>Descubra os produtos recomendados para suas plantas.</p>
        </div>

        <div className="feature-card">
          <h3>📘 Cuidados Gerais</h3>
          <p>Dicas essenciais para manter suas plantas sempre saudáveis.</p>
        </div>
      </section>
    </div>
  );
}
