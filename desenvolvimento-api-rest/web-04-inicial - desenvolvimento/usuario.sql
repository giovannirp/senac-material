-- Seleciona (ou cria) o banco de dados onde vamos trabalhar
CREATE DATABASE IF NOT EXISTS sistema_usuarios;
USE sistema_usuarios;

-- Cria a tabela 'usuarios' com algumas colunas básicas
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- ID único
    nome VARCHAR(100) NOT NULL,         -- Nome do usuário
    email VARCHAR(120) NOT NULL,        -- E-mail do usuário
    telefone VARCHAR(20),               -- Telefone (opcional)
    cpf VARCHAR(14),                    -- CPF (opcional)
    endereco VARCHAR(150)               -- Endereço (somente texto, sem detalhes)
);

-- Insere vários usuários de uma vez na tabela
INSERT INTO usuarios (nome, email, telefone, cpf, endereco) VALUES
('João Silva', 'joao@gmail.com', '1199999-1111', '123.456.789-00', 'Rua A'),
('Maria Oliveira', 'maria@gmail.com', '1198888-2222', '987.654.321-00', 'Rua B'),
('Carlos Souza', 'carlos@gmail.com', '1197777-3333', '111.222.333-44', 'Rua C'),
('Fernanda Lima', 'fernanda@gmail.com', '1196666-4444', '555.666.777-88', 'Rua D'),
('Paulo Mendes', 'paulo@gmail.com', '1195555-5555', '999.888.777-66', 'Rua E');

-- Mostra todos os registros da tabela até o momento
SELECT * FROM usuarios;

-- Insere mais dois usuários
INSERT INTO usuarios (nome, email, telefone, cpf, endereco) VALUES
('Gustavo Ramos', 'gusta@gmail.com', '1192222-1111', '222.111.333-99', 'Rua F'),
('Ana Clara', 'ana@gmail.com', '1193333-0000', '444.555.666-00', 'Rua G');

-- Seleciona o registro onde o id = 1
SELECT * FROM usuarios WHERE id = 1;

-- Deleta o registro onde o id = 2 (Maria)
DELETE FROM usuarios WHERE id = 2;

-- Mostra novamente todos os registros para conferir a exclusão
SELECT * FROM usuarios;

-- Atualiza o nome do usuário onde o id for 3 (Carlos)
UPDATE usuarios 
SET nome = 'Carlos Atualizado'
WHERE id = 3;

-- Mostra a tabela atualizada
SELECT * FROM usuarios;