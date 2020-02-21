const mongoose = require('mongoose')

const SIM = require('../models/SIM');

class SIMController{

    async metodosMortalidade(req, res){

        // Gráfico 01
        const mortalidade = [];
        mortalidade[0] = await SIM.countDocuments({ano_obito: '2009'});
        mortalidade[1] = await SIM.countDocuments({ano_obito: '2010'});
        mortalidade[2] = await SIM.countDocuments({ano_obito: '2011'});
        mortalidade[3] = await SIM.countDocuments({ano_obito: '2012'});
        mortalidade[4] = await SIM.countDocuments({ano_obito: '2013'});
        mortalidade[5] = await SIM.countDocuments({ano_obito: '2014'});
        mortalidade[6] = await SIM.countDocuments({ano_obito: '2015'});
        mortalidade[7] = await SIM.countDocuments({ano_obito: '2016'});
        mortalidade[8] = await SIM.countDocuments({ano_obito: '2017'});

        // Gráfico 02
        const sexoM = [];
        sexoM[0] = await SIM.countDocuments({SEXO: '1'}); // Masculino
        sexoM[1] = await SIM.countDocuments({SEXO: '2'}); // Feminino
        sexoM[2] = await SIM.countDocuments({SEXO: '3'}); // Ignorado

        // Gráfico 03
        const diaMorte = [];
        diaMorte[0] = await SIM.countDocuments({dia_semana_obito: 'dom'});
        diaMorte[1] = await SIM.countDocuments({dia_semana_obito: 'seg'});
        diaMorte[2] = await SIM.countDocuments({dia_semana_obito: 'ter'});
        diaMorte[3] = await SIM.countDocuments({dia_semana_obito: 'qua'});
        diaMorte[4] = await SIM.countDocuments({dia_semana_obito: 'qui'});
        diaMorte[5] = await SIM.countDocuments({dia_semana_obito: 'sex'});
        diaMorte[6] = await SIM.countDocuments({dia_semana_obito: 'sáb'});

        // Gráfico 04
        const racaCorM = [];
        racaCorM[0] = await SIM.countDocuments({RACACOR: '1'}); // Branca
        racaCorM[1] = await SIM.countDocuments({RACACOR: '2'}); // Preta
        racaCorM[2] = await SIM.countDocuments({RACACOR: '3'}); // Amarela
        racaCorM[3] = await SIM.countDocuments({RACACOR: '4'}); // Pardo
        racaCorM[4] = await SIM.countDocuments({RACACOR: '5'}); // Indígena

        // Gráfico 05
        const faixaEtaria = [];
        faixaEtaria[0] = await SIM.countDocuments({idade_obito_anos: {$lte: '1'}}); // <= 1 ano
        faixaEtaria[1] = await SIM.countDocuments({idade_obito_anos: {$gte: '2', $lte: '10'}}); // 2 a 10 anos
        faixaEtaria[2] = await SIM.countDocuments({idade_obito_anos: {$gte: '11', $lte: '20'}}); // 11 a 20 anos
        faixaEtaria[3] = await SIM.countDocuments({idade_obito_anos: {$gte: '21', $lte: '30'}}); // 21 a 30 anos
        faixaEtaria[4] = await SIM.countDocuments({idade_obito_anos: {$gte: '31', $lte: '40'}}); // 31 a 40 anos
        faixaEtaria[5] = await SIM.countDocuments({idade_obito_anos: {$gte: '41', $lte: '50'}}); // 41 a 50 anos
        faixaEtaria[6] = await SIM.countDocuments({idade_obito_anos: {$gte: '51', $lte: '60'}}); // 51 a 60 anos
        faixaEtaria[7] = await SIM.countDocuments({idade_obito_anos: {$gte: '61'}}); // >= 61

        // Gráfico 06
        const cidadaos = [];
        cidadaos[0] = await SIM.countDocuments({res_MUNNOME: 'Pau dos Ferros'}); // Pauferrenses
        cidadaos[1] = await SIM.countDocuments({res_MUNNOME: {$ne: 'Pau dos Ferros'}}); // Não Pauferrenses

        // Gráfico 07
        const locais = [];
        locais[0] = await SIM.countDocuments({LOCOCOR: '1'}) // Hospital
        locais[1] = await SIM.countDocuments({LOCOCOR: '2'}) // Outro estabelecimento de saúde
        locais[2] = await SIM.countDocuments({LOCOCOR: '3'}) // Domicílio
        locais[3] = await SIM.countDocuments({LOCOCOR: '4'}) // Via pública
        locais[4] = await SIM.countDocuments({LOCOCOR: '5'}) // Outros
        locais[5] = await SIM.countDocuments({LOCOCOR: '9'}) // Ignorado

        // Gráfico 08
        const assistMedica = [];
        assistMedica[0] = await SIM.countDocuments({ASSISTMED: '1'}) // Sim
        assistMedica[1] = await SIM.countDocuments({ASSISTMED: '2'}) // Não
        assistMedica[3] = await SIM.countDocuments({ASSISTMED: '3'}) // Ignorado

        // Gráfico 09
        const circunstancias = [];
        circunstancias[0] = await SIM.countDocuments({CIRCOBITO: '1'}) // Acidente
        circunstancias[1] = await SIM.countDocuments({CIRCOBITO: '2'}) // Suicídio
        circunstancias[2] = await SIM.countDocuments({CIRCOBITO: '3'}) // Homicídio
        circunstancias[3] = await SIM.countDocuments({CIRCOBITO: '4'}) // Outros
        circunstancias[4] = await SIM.countDocuments({CIRCOBITO: '9'}) // Ignorado

        return res.render('dataSIM.njk', {
            mortalidadeTotal: mortalidade,
            sexoDoFalecido: sexoM,
            mortePorDiaSemana: diaMorte,
            racaCorDoFalecido: racaCorM,
            faixaEtariaFalecido: faixaEtaria,
            tiposCidadaos: cidadaos,
            locaisFalecimento: locais,
            assistenciaMedica: assistMedica,
            circunstanciasDaMorte: circunstancias,  
        })
    }

    async testeAleatorio(req, res) {
        const sexo = await SIM.countDocuments({'SEXO': '1'})
        console.log(sexo);
        return res.render('teste.njk', {
            nome: sexo
        })
    }
}

module.exports = new SIMController()