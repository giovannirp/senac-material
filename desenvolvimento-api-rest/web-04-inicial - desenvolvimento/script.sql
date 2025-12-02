-- Seleciona o banco de dados onde vamos trabalhar
USE copa_mundo;

-- Cria a tabela 'selecoes' com 3 colunas
CREATE TABLE selecoes (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- ID único que aumenta automaticamente
    selecao VARCHAR(100) NOT NULL,      -- Nome da seleção, texto até 100 caracteres
    grupo CHAR(1) NOT NULL              -- Grupo da seleção, apenas 1 letra (A, B, C...)
);

-- Insere várias seleções de uma vez na tabela
INSERT INTO selecoes (selecao, grupo) VALUES
('Brasil', 'A'),
('França', 'B'),
('Japão', 'C'),
('Nigéria', 'D'),
('Nova Zelândia', 'E');

-- Mostra todos os registros da tabela até o momento
SELECT * FROM selecoes;

-- Insere mais duas seleções
INSERT INTO selecoes (selecao, grupo) VALUES
('Ilhas Salomão', 'A'),
('Vanuatu', 'D');

-- Seleciona o registro que tem id = 1
SELECT * FROM selecoes WHERE id = 1;

-- Deleta o registro que tem id = 2 (França)
DELETE FROM selecoes WHERE id = 2;

-- Mostra novamente todos os registros para conferir a exclusão
SELECT * FROM selecoes;

-- Atualiza o nome da seleção onde o id for 3 (Japão)
UPDATE selecoes 
SET selecao = 'Nova Seleção'
WHERE id = 3;

-- Mostra a tabela atualizada
SELECT * FROM selecoes;
