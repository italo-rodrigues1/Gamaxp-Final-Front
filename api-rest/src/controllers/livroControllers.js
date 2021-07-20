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

exports.getFaixaEtaria = (req, res) => {
  knex('livros').then((produtos)=>{
      
      let faixaEtaria = req.params.faixaetaria.split("-")
      let retorno = []
      for ( i = 0 ; i < produtos.length ; i++){
        let faixaEtariaCompara = produtos[i].idade.split("-")
        if (faixaEtaria[0] >= faixaEtariaCompara[0] && faixaEtaria[0] <= faixaEtariaCompara[1] || faixaEtaria[1] >= faixaEtariaCompara[0] && faixaEtaria[1] <= faixaEtariaCompara[1])
        retorno.push(produtos[i])         
      }
      if (retorno[0] == null){
        return res.status(400).json({message: "Nenhum livro encontrado para esta faixa etária"});
      }
      return res.status(200).json(retorno);
  })       
}

exports.delete = (req, res) => {
  knex('livros').where('id', req.params.id).del().then((produto)=>{
      if (produto == 0){
        return res.status(400).json({message: "Livro não encontrado em nosso banco de dados!"});
      }
      return res.status(200).json({message: "Livro removido com sucesso"});
  })       
}

exports.update = (req, res) => {
  const {id, titulo, descricao, idade, destaque, idAutor, idCategoria, idEditora,	imagem } = req.body
  knex('livros').where({id: id}).update({titulo: titulo, descricao: descricao, idade: idade, destaque: destaque, idAutor: idAutor, idCategoria: idCategoria, idEditora: idEditora, imagem: imagem}).then((produto)=>{
      if (produto == 0){
        return res.status(400).json({message: "Livro não encontrado em nosso banco de dados!"});
      }
      return res.status(200).json({message: "Livro alterado com sucesso"});
  })       
}