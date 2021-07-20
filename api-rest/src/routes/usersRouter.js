// routes.get('/livros/:id', produtosController.getOneId);
// routes.get('/livros/autor/:id', produtosController.getAutor);
// routes.get('/livros/editora/:id', produtosController.getEditora);

const Router = require('express'); 
const livroController = require('../controllers/livroControllers') ;
const usuarioController = require('../controllers/usuarioControllers');
const routes = Router(); 


routes.get('/livros', livroController.getAll);//PRONTO
routes.get('/livros/faixaetaria/:faixaetaria', livroController.getFaixaEtaria);//PRONTO

routes.get('/usuario', usuarioController.getUsuario);//PRONTO




routes.put('/livros', livroController.update);//PRONTO


routes.delete('/livros/:id', livroController.delete);//PRONTO



module.exports = routes;