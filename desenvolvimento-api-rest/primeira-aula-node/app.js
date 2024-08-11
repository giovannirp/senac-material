const express = require('express');
const app = express();
const port = 3000;

// Variável com os dados dos produtos
const produtos = [
  { id: 1, nome: 'Produto A', preco: 100 },
  { id: 2, nome: 'Produto B', preco: 150 },
  { id: 3, nome: 'Produto C', preco: 200 },
];

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Node.js!');
});

// Rota de produtos
app.get('/produtos', (req, res) => {
  res.send(produtos);
});

// Rota Sobre
app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html');
});

// Rota contato
app.get('/contato', (req, res) => {
  res.send('Entre em contato pelo email: contato@meusite.com');
});

// Executando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});