import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

   // Estado para armazenar a lista de contatos
   const [listaContatos, setListaContatos] = useState([]);

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
        // alert("Todos os campos são obrigatórios!");
        toast.error("Todos os campos são obrigatórios!");
        return false;
    }

    // Pega os cadastros já existentes ou cria um array vazio
    const contatos = JSON.parse(localStorage.getItem("contatos")) || [];

    // Adiciona o novo cadastro
    contatos.push(formGeneral);

    // Salva de volta no localStorage
    localStorage.setItem("contatos", JSON.stringify(contatos));

     // Atualiza a lista de contatos no estado para refletir em tempo real
    setListaContatos(contatos);

    // Limpa o formulário
    setFormState(initilForm);
  };

  const handleDelete = (index) => {
    // Carrega os contatos do localStorage
    const storedContatos = JSON.parse(localStorage.getItem("contatos")) || [];
  
    // Remove o contato pelo índice
    storedContatos.splice(index, 1);
  
    // Atualiza o localStorage com a nova lista
    localStorage.setItem("contatos", JSON.stringify(storedContatos));
  
    // Atualiza o estado com a nova lista
    setListaContatos(storedContatos);
  
    toast.success("Contato deletado com sucesso!");
  };

    // Função para carregar os contatos do localStorage ao iniciar o componente
    useEffect(() => {
      const storedContatos = JSON.parse(localStorage.getItem("contatos")) || [];
      setListaContatos(storedContatos);
    }, []);

    

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
        <ToastContainer />
      </form>

      {/* Lista de contatos cadastrados */}
      <div className="lista-contatos">
        <hr />
        <h2>Contatos Cadastrados</h2>
        {listaContatos.length > 0 ? (
          <ul>
            {listaContatos.map((contato, index) => (
              <li key={index}>
                <p><strong>Nome:</strong> {contato.nome}</p>
                <p><strong>Email:</strong> {contato.email}</p>
                <p><strong>Telefone:</strong> {contato.telefone}</p>
                <p><small><strong>Criado em:</strong> {new Date(contato.createdAt).toLocaleString()}</small></p>
                <button className="btn-danger" onClick={() => handleDelete(index)}>Deletar</button>

              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum contato cadastrado.</p>
        )}
      </div>
    </div>
  );
}
