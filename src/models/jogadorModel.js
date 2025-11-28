var database = require("../database/config")

function listar() {
    console.log("ACESSEI O JOGADOR MODEL - LISTAR");


    var instrucao = `
        SELECT 
            idJogador, 
            nomeJogador, 
            apelidoJogador, 
            numCamisa, 
            posicao
        FROM jogador;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);


    return database.executar(instrucao);
}

function buscarMaisVotado() {
    var instrucao = `
        SELECT 
            j.nomeJogador, 
            COUNT(u.fkJogadorFavorito) as votos
        FROM jogador j
        JOIN usuario u ON j.idJogador = u.fkJogadorFavorito
        GROUP BY j.idJogador
        ORDER BY votos DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    buscarMaisVotado 
};