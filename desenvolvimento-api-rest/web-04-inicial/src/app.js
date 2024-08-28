import express from "express";
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
  return selecoes.findIndex(selecao => selecao.id == id);
}

app.get("/", function (req, res) {
    res.send("Testando API");
  });

export default app;