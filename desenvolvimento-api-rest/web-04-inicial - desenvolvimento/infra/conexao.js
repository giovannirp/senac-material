import mysql from 'mysql2';

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'bd_selecao'
});

conexao.connect();

export default conexao;