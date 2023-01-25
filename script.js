function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function questao1(){
    document.write('Seja bem vindo, Thiago!')
} 

// function questao2(anoNasc){
//     let ano = new Date()

//     document.write('Thiago tem ' + (ano.getFullYear() - anoNasc) + ' anos')
// }

function getIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

function questao2(anoNasc){
    let ano = new Date()
    let dia = getRandomArbitrary(1,31)
    console.log(dia)

    document.write('Thiago tem ' + (getIdade(anoNasc, 12, dia)) + ' anos')
}

function questao3(total, faltosos){
    let percents = faltosos*100/total
    return document.write(`${percents.toFixed(2)} %`)

}

function questao4(pratica1, pratica2, teorica){
    //Assumindo notas de 0 a 10
    let media
    if((pratica1>=0 && pratica2>=0 && teorica>=0) == true){
        media = (pratica1 + pratica2 + teorica*2)/4
        console.log(media.toFixed(2))
    } else{
        console.log('Uma das notas é menor que 0')
    }

}

function questao5(repet){
    let manha = 0
    let tarde = 0
    let noite = 0
    while( repet > 0){
        horario = prompt('Digite o horário de entrada: Ex: [11.59h]')
        horario = Number(horario)
        if(horario >= 5 && horario < 12){
            manha+=1
        } else if(horario >= 12 && horario < 18){
            tarde+=1
        } else if((horario >= 18 && horario < 24) || (horario >= 0 && horario < 5)){
            noite+=1
        } else{
            alert('Horário inválido!')
        }
        repet-=1
    }
    document.write(`<h1>Número de pessoas: </h1>`)
    document.write(`${ Number(manha)} pessoas entraram no estacionamento durante a  manhã<br>`)
    document.write(`${Number(tarde)} pessoas entraram no estacionamento pela tarde<br>`)
    document.write(`${Number(noite)} pessoas entraram no estacionamento durante a noite`)
}   

// OUTRAS MANEIRAS DE FAZER A 5ª
let manha = 0
let tarde = 0
let noite = 0
function questao5b(horas, min){
    //transformando tudo em minutos
    let minTotais = horas * 60 + min
    if(minTotais > 1440){
        minTotais = minTotais - 1440
    }
    if(minTotais >= 300 && minTotais < 720){
        manha+=1
    } else if(minTotais >= 720 && minTotais < 1080){
        tarde+=1
    } else if((minTotais >= 1080 && minTotais < 1440) || (minTotais >= 0 && minTotais < 300)){
        noite+=1
    }

}

function questao5c(){
    for(let i = 0; i < 10; i++){
        let horas = getRandomArbitrary(0,24)
        let min = getRandomArbitrary(0,60)
        questao5b(horas, min)
        console.log('Horas: ' + horas)
        console.log('Min: ' + min)
    }
    document.write(`<h1>Número de pessoas: </h1>`)
    document.write(`${ Number(manha)} pessoas entraram no estacionamento durante a  manhã<br>`)
    document.write(`${Number(tarde)} pessoas entraram no estacionamento pela tarde<br>`)
    document.write(`${Number(noite)} pessoas entraram no estacionamento durante a noite`)
}


// questao1()
// questao2(1993)
// questao3(19,11)
// questao4(0,0,10)
// questao5c()