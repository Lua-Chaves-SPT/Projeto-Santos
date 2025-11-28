var quizModel = require("../models/quizModel");

function quizSantos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idUsuario= req.body.idUsuarioServer;
    var porcentagemFinalDeAcertos = req.body.porcentagemFinalDeAcertosServer;
    var pontuacaoFinal = req.body.pontuacaoFinalServer;

    // Faça as validações dos valores
    if (pontuacaoFinal == undefined) {
        res.status(400).send("Sua Pontuação Final está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu Id Usuario está undefined!");
    } else if (porcentagemFinalDeAcertos == undefined){
        res.status(400).send("Sua porcentagem Final De Acertos está undefined!")
    }   
    {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.quizSantos(idUsuario, porcentagemFinalDeAcertos, pontuacaoFinal)
            .then(function (resultado) {
                    res.status(200).json(resultado);
                })
                .catch(function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    quizSantos,
}