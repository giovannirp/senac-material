const express = require("express");
const app = express();
const PORT = 3000;

// indicar para express ler body com json
app.use(express.json());

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
];

app.get("/", function (req, res) {
  res.send("Testando API");
});

// Buscando todos os nomes
app.get("/listaNomes", (req, res) => {
  res.status(200).send(nomes);
});

// Criando Funçções Auxiliares 
// retornar o objeto por id
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id);
}

// pegar a posicao ou index do elemento do array por id
function buscarIdNome(id) {
  return nomes.findIndex(nome => nome.id == id);
}

// Buscando por ID
app.get('/listaNomes/:id' , (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorId(index));
});

// Criando Post para cadastrar
app.post('/listaNomes', (req, res) => {
  nomes.push(req.body);
  res.status(201).send('Nomes cadastrando com sucesso!');
});

// Criando Rota Excluir
app.delete('/listaNomes/:id', (req, res) => {
  let index = buscarIdNome(req.params.id);
  nomes.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});

// Alterar Rota
app.put('/listaNomes/:id', (req, res) => {
  let index = buscarIdNome(req.params.id);
  nomes[index].nome = req.body.nome;
  nomes[index].idade = req.body.idade;

  res.json(nomes);
})
// excutar a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
