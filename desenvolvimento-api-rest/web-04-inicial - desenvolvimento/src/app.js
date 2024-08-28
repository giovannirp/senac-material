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

// Buscar todas as seleções
app.get('/selecoes', (req, res) => {
  const sql = "SELECT * FROM selecoes";
  conexao.query(sql, (erro, result) => {
    if (erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(result);
    }
  }); 
});

// Buscando por ID
app.get('/selecoes/:id', (req, res) => {
  let id = req.params.id;
  
  const sql = "SELECT * FROM selecoes WHERE id=?;";
  conexao.query(sql, id, (erro, result) => {
    const linha = result[0]
    if (erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(linha);
    }
  });
});

// Criando post para cadastrar
app.post('/selecoes', (req, res) => {
  let selecao = req.body;

  const sql = "INSERT INTO selecoes SET ?;";
  conexao.query(sql, selecao, (erro, result) => {
    if (erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(201).json(result);
    }
  });
});

// Deletando registro
app.delete('/selecoes/:id', (req, res) => {
  let id = req.params.id;
  const sql = "DELETE FROM selecoes WHERE id=?;";
  conexao.query(sql, id, (erro, result) => {
    if (erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(result);
    }
  });
});

app.put('/selecoes/:id', (req, res) => {
  // res.json(selecoes);
  const id = req.params.id;
  let selecao = req.body;
  const sql = "UPDATE selecoes SET ? WHERE id=?;";
  conexao.query(sql, [selecao, id], (erro, result) => {
    if (erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(200).json(result);
    }
  });
})

export default app;
