const mongoose = require('mongoose')

const Geral = require('../models/Geral');

class GeralController{

    async metodosNatalidade(req, res){
        // Gráfico 01
        const natalidade = [];
        natalidade[0] = await Geral.countDocuments({ano_nasc: '2009'});
        natalidade[1] = await Geral.countDocuments({ano_nasc: '2010'});
        natalidade[2] = await Geral.countDocuments({ano_nasc: '2011'});
        natalidade[3] = await Geral.countDocuments({ano_nasc: '2012'});
        natalidade[4] = await Geral.countDocuments({ano_nasc: '2013'});
        natalidade[5] = await Geral.countDocuments({ano_nasc: '2014'});
        natalidade[6] = await Geral.countDocuments({ano_nasc: '2015'});
        natalidade[7] = await Geral.countDocuments({ano_nasc: '2016'});
        natalidade[8] = await Geral.countDocuments({ano_nasc: '2017'});

        // Gráfico 02
        const locais = [];
        locais[0] = await Geral.countDocuments({LOCNASC: '1'}) // Hospital
        locais[1] = await Geral.countDocuments({LOCNASC: '2'}) // Outro estabelecimento de saúde
        locais[2] = await Geral.countDocuments({LOCNASC: '3'}) // Domicílio
        locais[3] = await Geral.countDocuments({LOCNASC: '4'}) // Outros
        locais[4] = await Geral.countDocuments({LOCNASC: '9'}) // Outros

        // Gráfico 03
        const estCivil = [];
        estCivil[0] = await Geral.countDocuments({ESTCIVMAE: '1'});  // Solteira
        estCivil[1] = await Geral.countDocuments({ESTCIVMAE: '2'}); // Casada
        estCivil[2] = await Geral.countDocuments({ESTCIVMAE: '3'}); // Viúva
        estCivil[3] = await Geral.countDocuments({ESTCIVMAE: '4'}); // Divorciada
        estCivil[4] = await Geral.countDocuments({ESTCIVMAE: '5'}); // União consensual
        estCivil[5] = await Geral.countDocuments({ESTCIVMAE: '6'}); // Ignorado

        // Gráfico 04
        const empregabilidade = [];
        empregabilidade[0] = await Geral.countDocuments({CODOCUPMAE: {$ne: ''}}); // Mães empregadas
        empregabilidade[0] = await Geral.countDocuments({CODOCUPMAE: ''}); // Mães desempregadas

        // Gráfico 05
        const tempGest = [];
        tempGest[0] = await Geral.countDocuments({GESTACAO: '1'}); // < 22 semanas
        tempGest[1] = await Geral.countDocuments({GESTACAO: '2'}); // 22 a 27 semanas
        tempGest[2] = await Geral.countDocuments({GESTACAO: '3'}); // 28 a 31 semanas
        tempGest[4] = await Geral.countDocuments({GESTACAO: '4'}); // 32 a 36 semanas
        tempGest[5] = await Geral.countDocuments({GESTACAO: '5'}); // 37 a 41 semanas
        tempGest[6] = await Geral.countDocuments({GESTACAO: '6'}); // >= 42 semanas
        tempGest[7] = await Geral.countDocuments({GESTACAO: '9'}); // Ignorado

        // Gráfico 06
        const gravidez = [];
        gravidez[0] = await Geral.countDocuments({GRAVIDEZ: '1'}); // Única
        gravidez[1] = await Geral.countDocuments({GRAVIDEZ: '2'}); // Dupla
        gravidez[3] = await Geral.countDocuments({GRAVIDEZ: '3'}); // Tripla ou mais
        gravidez[4] = await Geral.countDocuments({GRAVIDEZ: '4'}); // Ignorado

        // Gráfico 07
        const parto = [];
        parto[0] = await Geral.countDocuments({PARTO: '1'}); // Vaginal
        parto[1] = await Geral.countDocuments({PARTO: '2'}); // Cesáreo
        parto[2] = await Geral.countDocuments({PARTO: '3'}); // Ignorado

        // Gráfico 08
        const cesAntesParto = [];
        cesAntesParto[0] = await Geral.countDocuments({STCESPARTO: '1'}); // Sim
        cesAntesParto[1] = await Geral.countDocuments({STCESPARTO: '2'}); // Não
        cesAntesParto[2] = await Geral.countDocuments({STCESPARTO: '3'}); // Não se aplica
        cesAntesParto[4] = await Geral.countDocuments({STCESPARTO: '9'}); // Ignorado

        // Gráfico 09
        const consultPreNatal = [];
        consultPreNatal[0] = await Geral.countDocuments({CONSULTAS: '1'}); // Nenhuma
        consultPreNatal[1] = await Geral.countDocuments({CONSULTAS: '2'}); // 1 a 3
        consultPreNatal[2] = await Geral.countDocuments({CONSULTAS: '3'}); // 4 a 6
        consultPreNatal[3] = await Geral.countDocuments({CONSULTAS: '4'}); // >= 7
        consultPreNatal[4] = await Geral.countDocuments({CONSULTAS: '9'}); // Ignorado

        // Gráfico 10
        const sexoC = [];
        sexoC[0] = await Geral.countDocuments({SEXO: '1'}); // Masculino
        sexoC[1] = await Geral.countDocuments({SEXO: '2'}); // Feminino
        sexoC[2] = await Geral.countDocuments({SEXO: '3'}); // Ignorado

        // Gráfico 11
        const racaCorC = [];
        racaCorC[0] = await Geral.countDocuments({RACACOR: '1'}); // Branca
        racaCorC[1] = await Geral.countDocuments({RACACOR: '2'}); // Preta
        racaCorC[2] = await Geral.countDocuments({RACACOR: '3'}); // Amarela
        racaCorC[3] = await Geral.countDocuments({RACACOR: '4'}); // Pardo
        racaCorC[4] = await Geral.countDocuments({RACACOR: '5'}); // Indígena

        // Gráfico 12
        const trabPartInd = [];
        trabPartInd[0] = await Geral.countDocuments({STTRABPART: '1'}); // Sim
        trabPartInd[1] = await Geral.countDocuments({STTRABPART: '2'}); // Não
        trabPartInd[2] = await Geral.countDocuments({STTRABPART: '3'}); // Não se aplica
        trabPartInd[3] = await Geral.countDocuments({STTRABPART: '9'}); // Ignorado

        // Gráfico 13
        const assistPart = [];
        assistPart[0] = await Geral.countDocuments({TPNASCASSI: '1'}); // Médico
        assistPart[1] = await Geral.countDocuments({TPNASCASSI: '2'}); // Enfermeiros/Obstetriz
        assistPart[2] = await Geral.countDocuments({TPNASCASSI: '3'}); // Parteira
        assistPart[3] = await Geral.countDocuments({TPNASCASSI: '4'}); // Outros
        assistPart[4] = await Geral.countDocuments({TPNASCASSI: '9'}); // Ignorado

        // Gráfico 14
        const partoPremat = [];
        partoPremat[0] = await Geral.countDocuments({parto_prematuro: '0'}); // Não há indícios de prematuridade
        partoPremat[1] = await Geral.countDocuments({parto_prematuro: '1'}); // Idade gestacional <= 4 meses
        partoPremat[2] = await Geral.countDocuments({parto_prematuro: '2'}); // Peso < 2.5 kg
        partoPremat[3] = await Geral.countDocuments({parto_prematuro: '3'}); // Idade gestacional <= 4 meses e peso < 2.5 kg

        // Gráfico 15
        const diaNasc = [];
        diaNasc[0] = await Geral.countDocuments({dia_semana_nasc: 'dom'});
        diaNasc[1] = await Geral.countDocuments({dia_semana_nasc: 'seg'});
        diaNasc[2] = await Geral.countDocuments({dia_semana_nasc: 'ter'});
        diaNasc[3] = await Geral.countDocuments({dia_semana_nasc: 'qua'});
        diaNasc[4] = await Geral.countDocuments({dia_semana_nasc: 'qui'});
        diaNasc[5] = await Geral.countDocuments({dia_semana_nasc: 'sex'});
        diaNasc[6] = await Geral.countDocuments({dia_semana_nasc: 'sáb'});

        return res.render('public.njk', {
            natalidadeTotal: natalidade,
            locaisNascimento: locais,
            estadoCivilMae: estCivil,
            empregabilidadeMaes: empregabilidade,
            tempoGestacao: tempGest,
            tipoGravidez: gravidez,
            tipoParto: parto,
            cesareaAntesParto: cesAntesParto,
            consultasPreNatal: consultPreNatal,
            sexoDaCrianca: sexoC,
            racaCorDaCrianca: racaCorC,
            trabalhoDePartoInduzido: trabPartInd,
            assistenciaAoParto: assistPart,
            partoPrematuro: partoPremat,
            nascPorDiaSemana: diaNasc
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