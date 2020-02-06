const mongoose = require('mongoose')

const Geral = require('../models/Geral');

class GeralController{
    async mostrarSexo(req, res) {
        const sexo = await Geral.countDocuments({})
        console.log(sexo);
        return res.render('public.njk', {
            sexo
        })
    }

    async testeAleatorio(req, res) {
        const sexo = await Geral.countDocuments({'SEXO': '1'})
        console.log(sexo);
        return res.render('teste.njk', {
            nome: sexo
        })
    }
}

module.exports = new GeralController()