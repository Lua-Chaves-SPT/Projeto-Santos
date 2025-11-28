var database = require("../database/config")


function buscarResultadosPorUsuario(idUsuario) {
    var instrucao = `
        SELECT 
            resultadoFinal,
            idTentativa,
            totalAcertos,
            fkQuiz
        FROM resultado
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idTentativa DESC;
    `;

    return database.executar(instrucao);
}

module.exports = {
    buscarResultadosPorUsuario
};