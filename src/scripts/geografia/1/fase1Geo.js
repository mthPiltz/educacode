let input = document.getElementById('input');

let capi = {
    posicao : "MS"
}

let capiIMG = document.getElementById("capi");

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        const valorDigitado = input.value.toLowerCase();

        switch (valorDigitado){
            case "norte":
                insereDirecao(valorDigitado);
                break;
            case "sul":
                insereDirecao(valorDigitado);
                break;
            case "leste":
                insereDirecao(valorDigitado);
                break;
            case "oeste":
                insereDirecao(valorDigitado);
                break;
            case "sudeste":
                insereDirecao(valorDigitado);
                break;
            case "sudoeste":
                insereDirecao(valorDigitado);
                break;
            case "nordeste":
                insereDirecao(valorDigitado);
                break;
            case "noroeste":
                insereDirecao(valorDigitado);
                break;
            default:
                alert("Direção invalida!")
        }
    }
});

btnLeste.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].leste);

    
    if(estadoAtual[0].leste){
        capi.posicao = estadoAtual[0].leste;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.right = `${proxEstado[0].right}px`
    }
});

btnOeste.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].oeste);

    
    if(estadoAtual[0].oeste){
        capi.posicao = estadoAtual[0].oeste;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.right = `${proxEstado[0].right}px`
    }
});


const estados = [
    {
        sigla : "RS",
        norte : "SC",
        sul : null,
        leste : null,
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 492,
        right : 315
    },
    {
        sigla : "SC",
        norte : "PR",
        sul : "RS",
        leste : null,
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 464, 
        right : 269
    },
    {
        sigla : "PR",
        norte : null,
        sul : "SC",
        leste : null,
        oeste : null,
        noroeste : "MS",
        nordeste : "SP",
        sudeste : null,
        sudoeste : null,
        top : 432, 
        right : 300
    },
    {
        sigla : "SP",
        norte : "MG",
        sul : "PR",
        leste : "RJ",
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : "MG",
        sudoeste : "MS",
        top : 403, 
        right : 264
    },
    {
        sigla : "MG",
        norte : "BA",
        sul : "MS",
        leste : "ES",
        oeste : "GO",
        noroeste : "GO",
        nordeste : "BA",
        sudeste : "SP",
        sudoeste : "RJ",
        top : 364, 
        right : 215
    },
    {
        sigla : "ES",
        norte : "BA",
        sul : "RJ",
        leste : null,
        oeste : "MG",
        noroeste : "MG",
        nordeste : null,
        sudeste : null,
        sudoeste : "MG",
        top : 380, 
        right : 150
    },
    {
        sigla : "RJ",
        norte : "ES",
        sul : null,
        leste : null,
        oeste : "MG",
        noroeste : "MG",
        nordeste : null,
        sudeste : null,
        sudoeste : "SP",
        top : 423, 
        right : 180
    },
    {
        sigla : "MS",
        norte : "MT",
        sul : "PR",
        leste : "SP",
        oeste : null,
        noroeste : "MT",
        nordeste : "GO",
        sudeste : "PR",
        sudoeste : null,
        top : 385, 
        right : 325
    },
    {
        sigla : "MT",
        norte : "PA", 
        sul : "MS",
        leste : "GO", 
        oeste : "RO", 
        noroeste : "TO",
        nordeste : "AM",
        sudeste : "GO",
        sudoeste : null,
        top : 310, 
        right : 340
    },
    {
        sigla : "GO",
        norte : "TO",
        sul : "MG", 
        leste : "MG", 
        oeste : "MT",
        noroeste : "MT",
        nordeste : "BA",
        sudeste : "MS",
        sudoeste : "MG",
        top : 325, 
        right : 268
    },
    {
        sigla : "AC",
        norte : "AM",
        sul : null, 
        leste : "RO", 
        oeste : null,
        noroeste : null,
        nordeste : "AM",
        sudeste : null,
        sudoeste : null,
        top : 280,  
        right : 520
    },
    {
        sigla : "AM",
        norte : "RR",
        sul : "RO", 
        leste : "PA", 
        oeste : null,
        noroeste : null,
        nordeste : "PA",
        sudeste : "MT",
        sudoeste : "AC",
        top : 205,  
        right : 440
    },
    {
        sigla : "RO",
        norte : "AM",
        sul : "MT", 
        leste : "MT", 
        oeste : "AC",
        noroeste : null,
        nordeste : "AM",
        sudeste : null,
        sudoeste : "MT",
        top : 285,  
        right : 430
    },
    {
        sigla : "AP",
        norte : null,
        sul : "PA", 
        leste : null, 
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : "PA",
        sudoeste : "PA",
        top : 115,   
        right : 285
    },
    {
        sigla : "RR",
        norte : null,
        sul : "AM", 
        leste : null, 
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : "PA",
        sudoeste : "AM",
        top : 110,  
        right : 405
    },
    {
        sigla : "PA",
        norte : "AP",
        sul : "MT", 
        leste : "MA", 
        oeste : "AM",
        noroeste : "RR",
        nordeste : "AP",
        sudeste : "MT",
        sudoeste : "TO",
        top : 195, 
        right : 310
    },
    {
        sigla : "TO",
        norte : "MA",
        sul : "GO", 
        leste : "BA", 
        oeste : "PA",
        noroeste : "PA",
        nordeste : "PI",
        sudeste : "MT",
        sudoeste : "BA",
        top : 270,  
        right : 255
    },
    {
        sigla : "BA",
        norte : "PE",
        sul : "MG", 
        leste : "SE", 
        oeste : "TO",
        noroeste : "PI",
        nordeste : "AL",
        sudeste : "ES",
        sudoeste : "GO",
        top : 295,  
        right : 180 
    },
    {
        sigla : "SE",
        norte : "AL",
        sul : "BA", 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : "BA",
        top : 290,  
        right : 115
    },
    {
        sigla : "AL",
        norte : "PE",
        sul : "SE", 
        leste : null, 
        oeste : "BA",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 275,  
        right : 95
    },
    {
        sigla : "PB",
        norte : "RN",
        sul : "PE", 
        leste : null, 
        oeste : "CE",
        noroeste : "CE",
        nordeste : null,
        sudeste : null,
        sudoeste : "PE",
        top : 234,  
        right : 105
    },
    {
        sigla : "PE",
        norte : "PB",
        sul : "AL", 
        leste : null, 
        oeste : "PI",
        noroeste : "PI",
        nordeste : "PB",
        sudeste : "BA",
        sudoeste : "AL",
        top : 250,  
        right : 140
    },
    {
        sigla : "RN",
        norte : null,
        sul : "PB", 
        leste : null, 
        oeste : "CE",
        noroeste : "CE",
        nordeste : null,
        sudeste : "PB",
        sudoeste : "PB",
        top : 210,  
        right : 105
    },
    {
        sigla : "CE",
        norte : null,
        sul : "PE", 
        leste : "RN", 
        oeste : "PI",
        noroeste : null,
        nordeste : null,
        sudeste : "PB",
        sudoeste : "PI",
        top : 190,  
        right : 145
    },
    {
        sigla : "PI",
        norte : null,
        sul : "BA", 
        leste : "PE", 
        oeste : "MA",
        noroeste : "MA",
        nordeste : "CE",
        sudeste : "BA",
        sudoeste : "TO",
        top : 230, 
        right : 185
    },
    {
        sigla : "MA",
        norte : null,
        sul : "TO", 
        leste : "PI", 
        oeste : "PA",
        noroeste : "PA",
        nordeste : null,
        sudeste : "PI",
        sudoeste : "TO",
        top : 195,  
        right : 121
    },
]

function insereDirecao(direcao){
    let divDirecoes = document.getElementById('direcoes');
    divDirecoes.innerHTML = `<p class='roboto-regular'>${direcao.toUpperCase()}</p>` + divDirecoes.innerHTML;
}