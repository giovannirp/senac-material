import React, { useState } from "react";
import "./cadastro.css"

export default function CadastroUsuario() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
  });

  // Função para atualizar o estado ao digitar no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviando os dados para o backend como JSON
    fetch("http://localhost:7000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuário cadastrado com sucesso:", data);
        // Limpa o formulário após o envio
        setFormData({
          nome: "",
          telefone: "",
        });
      })
      .catch((error) => console.error("Erro ao cadastrar usuário:", error));
  };

  return (
    <main className="container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}