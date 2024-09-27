import React, { useState } from "react";
import "./style.css";

export default function Contato() {
  // Estado inicial do formulário
  const initilForm = {
    nome: "",
    email: "",
    telefone: "",
  };

  // Estado do formulário
  const [formState, setFormState] = useState(initilForm);

  // Função para lidar com a alteração dos campos de entrada
  const handleInput = (event) => {
    // Obter o elemento de entrada atual
    const target = event.currentTarget;
    // Extrair o valor e o nome do campo de entrada
    const { value, name } = target;

    // Atualizar o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    // Prevenir o comportamento padrão de envio do formulário
    event.preventDefault();

    const formGeneral = {
      nome: formState.nome,
      email: formState.email,
      telefone: formState.telefone,
      createdAt: new Date(),
    };

    // Validação dos campos
    if (formState.nome === "" || formState.email === "" || formState.telefone === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    // Pega os cadastros já existentes ou cria um array vazio
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

    // Adiciona o novo cadastro
    contatos.push(formGeneral);

    // Salva de volta no localStorage
    localStorage.setItem("contatos", JSON.stringify(contatos));

    // Limpa o formulário
    setFormState(initilForm);
  };

  return (
    <div className="container-contato">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formState.nome}
            onChange={handleInput}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInput}
            placeholder="Digite seu email"
          />
        </div>

        <div className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formState.telefone}
            onChange={handleInput}
            placeholder="Digite seu Telefone"
          />
        </div>

        <div className="form-control">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
