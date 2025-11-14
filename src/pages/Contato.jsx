import { useState } from "react";
import "./Contato.css";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validação profissional
  const validate = () => {
    const newErrors = {};

    if (!form.nome.trim()) {
      newErrors.nome = "O nome é obrigatório.";
    }

    if (!form.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }

    if (!form.mensagem.trim()) {
      newErrors.mensagem = "A mensagem é obrigatória.";
    } else if (form.mensagem.trim().length < 10) {
      newErrors.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // marca o campo como tocado para exibir erros
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      alert("Mensagem enviada com sucesso! (Futuramente enviaremos para o backend)");
      setForm({ nome: "", email: "", mensagem: "" });
      setTouched({});
    }
  };

  const errorsNow = validate();
  const formIsValid = Object.keys(errorsNow).length === 0;

  return (
    <div className="contato-container">
      <h1>Entre em Contato 📬</h1>
      <p>Envie sua mensagem e retornaremos o mais rápido possível.</p>

      <form className="contato-form" onSubmit={handleSubmit}>
        
        {/* Campo Nome */}
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          onBlur={() => setTouched({ ...touched, nome: true })}
          className={touched.nome && errorsNow.nome ? "erro" : ""}
        />
        {touched.nome && errorsNow.nome && (
          <span className="erro-msg">{errorsNow.nome}</span>
        )}

        {/* Campo Email */}
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={() => setTouched({ ...touched, email: true })}
          className={touched.email && errorsNow.email ? "erro" : ""}
        />
        {touched.email && errorsNow.email && (
          <span className="erro-msg">{errorsNow.email}</span>
        )}

        {/* Campo Mensagem */}
        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          onBlur={() => setTouched({ ...touched, mensagem: true })}
          className={touched.mensagem && errorsNow.mensagem ? "erro" : ""}
        ></textarea>
        {touched.mensagem && errorsNow.mensagem && (
          <span className="erro-msg">{errorsNow.mensagem}</span>
        )}

        <button disabled={!formIsValid}>Enviar Mensagem</button>

      </form>
    </div>
  );
}
