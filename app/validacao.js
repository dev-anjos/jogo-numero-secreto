function verificaChuteValido (chute){
    const numero = +chute  // so de sopmar o js vai transforma string em numero

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }

    if(numeroMaiorOumenor(numero)){
        elementoChute.innerHTML += `
            <div>valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numerosecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3> O numero secreto era ${numerosecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if( numero > numerosecreto) {
        elementoChute.innerHTML += ` 
        <div>O número secreto é menor <i class="fa-solid fa-solid fa-down-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += ` 
        <div>O número secreto é maior <i class="fa-solid fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOumenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})