var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
var quizResultadoController = require("../controllers/quizResultadoController");

router.post("/quizSantos", function (req, res) {
    quizController.quizSantos(req, res);
});


router.get("/resultados/:idUsuario", function (req, res) {
    quizResultadoController.buscarResultados(req, res);
});

module.exports = router;