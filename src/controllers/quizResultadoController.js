var quizResultadoModel = require("../models/quizResultadoModel");

function buscarResultados(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário não foi fornecido!");
        return;
    }

    quizResultadoModel.buscarResultadosPorUsuario(idUsuario)
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


module.exports = {
    buscarResultados
};