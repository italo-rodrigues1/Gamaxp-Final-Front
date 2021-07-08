const Router = require('express'); 
const produtosController = require('../controllers/produtosControllers') ;
const routes = Router(); 


routes.get('/livros', produtosController.getAll);
routes.get('/livros/:id', produtosController.getOneId);
routes.get('/livros/autor/:id', produtosController.getAutor);
routes.get('/livros/editora/:id', produtosController.getEditora);
routes.get('/livros/idade/:idade', produtosController.getIdade);

routes.post('/livros'.produtosController.create)
routes.post('/livros/autor'.produtosController.create)
routes.post('/livros/editora'.produtosController.create)

routes.put('/livros/:id'.produtosController.update)
routes.put('/livros/autor/:id'.produtosController.update)
routes.put('/livros/editora/:id'.produtosController.update)

routes.delete('/livros/:id'.produtosController.delete)
routes.delete('/livros/autor/:id'.produtosController.delete)
routes.delete('/livros/editora/:id'.produtosController.delete)



module.exports = routes;