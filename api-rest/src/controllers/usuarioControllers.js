const knex = require('../database/index');

exports.getUsuario = (req, res) => {

    knex('usuario').then((produtos) => {
        return res.status(200).json(produtos);
    })

};



exports.createUsuario = (req, res) => {

    const { nome, email } = req.body;

    const data = { nome, email };

    knex.insert(data).into('usuario').then(data => {
        return res.status(201).json({ message: 'Usuário inserido com sucesso na base de dados.' });
        // return res.status(201).json({data});

    }).catch(err => {
        console.log(err);
    });
};
