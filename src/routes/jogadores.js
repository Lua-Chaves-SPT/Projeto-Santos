
var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController");


router.get("/listar", function (req, res) { 
    jogadorController.listar(req, res);
});

router.get("/mais-votado", function (req, res) { 
    jogadorController.buscarMaisVotado(req, res);
});

module.exports = router;
