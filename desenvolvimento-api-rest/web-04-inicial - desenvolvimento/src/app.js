import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

// indicar para express ler body com json
app.use(express.json());

// função auxiliar
// retornar o objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

// pegar a posicao ou index do elemento do array por id
function buscarIdSelecao(id) {
  return selecoes.findIndex((selecao) => selecao.id == id);
}

app.get("/", function (req, res) {
  res.send("Testando API");
});

// Buscar todas as seleções (bem simples)
app.get('/selecoes', (req, res) => {
  const sql = "SELECT * FROM selecoes";

  conexao.query(sql, (erro, result) => {
    res.json(result);
  });
});

// Buscando por ID (bem simples)
app.get('/selecoes/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM selecoes WHERE id=?;";

  conexao.query(sql, id, (erro, result) => {
    res.json(result[0]);
  });
});

// Criando post para cadastrar (bem simples)
app.post('/selecoes', (req, res) => {
  const selecao = req.body;
  const sql = "INSERT INTO selecoes SET ?;";

  conexao.query(sql, selecao, () => {
    res.json({ mensagem: "Cadastrado com sucesso!" });
  });
});

// Deletando registro (bem simples)
app.delete('/selecoes/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM selecoes WHERE id=?;";

  conexao.query(sql, id, () => {
    res.json({ mensagem: "Deletado com sucesso!" });
  });
});

// Atualizando registro (bem simples)
app.put('/selecoes/:id', (req, res) => {
  const id = req.params.id;
  const selecao = req.body;
  const sql = "UPDATE selecoes SET ? WHERE id=?;";

  conexao.query(sql, [selecao, id], () => {
    res.json({ mensagem: "Atualizado com sucesso!" });
  });
});

export default app;
