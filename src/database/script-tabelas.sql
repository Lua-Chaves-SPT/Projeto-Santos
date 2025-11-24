-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE santos;

USE santos;

CREATE TABLE jogador(
idJogador INT PRIMARY KEY AUTO_INCREMENT,	
nomeJogador VARCHAR(50),
sobrenomeJogador VARCHAR(150),
apelidoJogador VARCHAR(50),
dtNascJogador DATE
);

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(50),
sobrenomeUsuario VARCHAR(150),
apelidoUsuario VARCHAR(50),
emailUsuario VARCHAR(150),
senhaUsuario VARCHAR(255),
fkJogadorFavorito INT,
		CONSTRAINT fkUsuarioJogador
        FOREIGN KEY (fkJogadorFavorito)
        REFERENCES jogador(idJogador)
);

CREATE TABLE forum(
idComentario INT,
fkUsuario INT,
fkPost INT,
descComentario VARCHAR(255),
	 PRIMARY KEY (idComentario,fkUsuario,fkPost),
	 CONSTRAINT fkForumUsuario
     FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
	 CONSTRAINT fkForumPost
	 FOREIGN KEY (fkPost) REFERENCES forum(idComentario)
);

CREATE TABLE pergunta(
idPergunta INT PRIMARY KEY,
descPergunta VARCHAR(200)
);

CREATE TABLE resposta(
idResposta INT,
descResposta VARCHAR(100),
valorResposta VARCHAR(10),
fkPergunta INT,
	CONSTRAINT fkPerguntaResposta
    FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta),
	CONSTRAINT chkValorResposta
    CHECK (valorResposta IN('certo','errado'))
);

ALTER TABLE pergunta ADD COLUMN fkQuiz INT;
ALTER TABLE pergunta ADD CONSTRAINT fkPerguntaQuiz FOREIGN KEY (fkQUiz) REFERENCES quiz(idQuiz);

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY
);

show tables;
drop table forum;