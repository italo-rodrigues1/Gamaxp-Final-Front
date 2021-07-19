const knex = require('../database/index');


exports.getAll = (req, res) => {

  knex('livros').then((produtos)=>{
      return res.status(200).json(produtos);
  })   
  
}



exports.createLivros = (req, res) => {
  
  const { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem } = req.body;

  const data = { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem };

  knex.insert(data).into('livros').then(data => {
    return res.status(201).json({message: 'Produto inserido com sucesso na base de dados.'});
    // return res.status(201).json({data});

  }).catch(err => {
    console.log(err);
  });
}

























// exports.create = (req, res) => {
//   const { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem } = req.body;

//   const data = { titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora, imagem }

//   await knex('livros').insert(data);
//   return res.status(201).json({ data: data });

// }












// exports.getOneId = (req, res, next) => {
//   const {id} = req.params;
//   knex.where({id : id}).table("livros").then(data => {
//     return res.status(201).json(data)
//   }).catch(err =>{
//     return res.status(400).json(err)
//   });
// }
