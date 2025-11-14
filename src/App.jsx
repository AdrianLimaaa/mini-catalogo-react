import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Insumos from "./pages/Insumos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      </main>
      
        <Footer />
    </Router>
  );
}

export default App;
