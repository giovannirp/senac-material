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
  res.send("Olá Mundo!");
});

// Buscando todos os nomes
app.get("/listaNomes", (req, res) => {
  res.status(200).send(nomes);
});

// Criando Função Auxiliar
function buscarNomePorId(id) {
    return nomes.filter((nome) => nome.id == id);
}

// Buscando por ID
app.get('/listaNomes/:id' , (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorId(index));
});

//app.listen(3000);

// excutar a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
