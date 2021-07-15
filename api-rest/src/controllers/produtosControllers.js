// exports.getOneId = (req, res, next) => {

//   const {id} = req.params;
  
//   knex.where({id : id}).table("livros").then(data => {
//     return res.status(201).json(data)
//   }).catch(err =>{
//     return res.status(400).json(err)
//   });

// }


const knex = require('../database/index');


exports.getAll = (req, res) => {

  knex('livros').then((produtos)=>{
      return res.status(200).json(produtos);
  })   
  
}
