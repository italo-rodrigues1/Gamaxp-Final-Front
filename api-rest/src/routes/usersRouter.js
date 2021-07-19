// routes.get('/livros/:id', livrosControllers.getOneId);
// routes.get('/livros/autor/:id', livrosControllers.getAutor);
// routes.get('/livros/editora/:id', produtosController.getEditora);

const Router = require('express'); 
const livroController = require('../controllers/livroControllers') ;
const usuarioController = require('../controllers/usuarioControllers');
const autorController = require('../controllers/autorControllers')
const editoraController = require('../controllers/editoraControllers')
const routes = Router(); 


routes.get('/livro', livroController.getAll);
// routes.get('/livros/idade/:idade', livroController.getIdade);
routes.get('/usuario', usuarioController.getUsuario);

routes.post('/livro', livroController.createLivros);
routes.post('/autor', autorController.createAutor);
routes.post('/editora',editoraController.createEditora);
routes.post('/usuario',usuarioController.createUsuario);

// routes.put('/livros/:id'.livroController.update);
// routes.put('/livros/autor/:id'.livroController.update);
// routes.put('/livros/editora/:id'.livroController.update);

// routes.delete('/livros/:id'.livroController.delete);
// routes.delete('/livros/autor/:id'.livroController.delete);
// routes.delete('/livros/editora/:id'.livroController.delete);
// routes.delete('/usuario'.livroController.delete);

module.exports = routes;
