// routes.get('/livros/:id', produtosController.getOneId);
// routes.get('/livros/autor/:id', produtosController.getAutor);
// routes.get('/livros/editora/:id', produtosController.getEditora);

const Router = require('express'); 
const produtosController = require('../controllers/produtosControllers') ;
const usuarioController = require('../controllers/usuarioControllers');
const routes = Router(); 


routes.get('/livros', produtosController.getAll);//PRONTO
routes.get('/livros/faixaetaria/:faixaetaria', produtosController.getFaixaEtaria);//PRONTO

routes.get('/usuario', usuarioController.getUsuario);//PRONTO


// routes.post('/livros'.produtosController.create);
// routes.post('/livros/autor'.produtosController.create);
// routes.post('/livros/editora'.produtosController.create);
// routes.post('/usuario'.produtosController.create);

routes.put('/livros', produtosController.update);
// routes.put('/livros/autor/:id'.produtosController.update);
// routes.put('/livros/editora/:id'.produtosController.update);

routes.delete('/livros/:id', produtosController.delete);//PRONTO
// routes.delete('/livros/autor/:id'.produtosController.delete);
// routes.delete('/livros/editora/:id'.produtosController.delete);
// routes.delete('/usuario'.produtosController.delete);


module.exports = routes;