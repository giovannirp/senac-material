import express from "express";
const app = express();

// indicar para express ler body com json
app.use(express.json());

//mock
const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 2, selecao: 'Peru', grupo: 'B'},
  {id: 3, selecao: 'Ilha de Salomão', grupo: 'F'}
];

// Retornar o Objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

// Pegar a posição ou index do elemento do array por id
function buscarIdSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id);
}

app.get("/" , (req, res) => {
  res.send('Olá Node js');
});

// Buscado todas as seleções
app.get("/selecoes", (req, res) => {
  res.status(200).send(selecoes);
});

// Buscando por Id
app.get("/selecoes/:id", (req, res) => {
  let index = req.params.id;

  res.json(buscarSelecaoPorId(index));
});

// criando um post
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('Seleção cadadastra com successo');
});

// Excluir 
app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIdSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`Selecão com id ${req.params.id} Excluida com Sucesso!`);
});

// Alterar
app.put('/selecoes/:id', (req, res) => {
  let index = buscarIdSelecao(req.params.id);
  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;

  res.json(selecoes);
});


export default app;