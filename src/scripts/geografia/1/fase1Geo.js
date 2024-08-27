let input = document.getElementById('input');

let capi = {
    posicao : "MS"
}

const estados = [
    {
        sigla : "RS",
        norte : "SC",
        sul : null,
        leste : null,
        oeste : null,
        top : 492,
        right : 315
    },
    {
        sigla : "SC",
        norte : "PR",
        sul : "RS",
        leste : null,
        oeste : null,
        top : 464, 
        right : 269
    },
    {
        sigla : "PR",
        norte : "SP",
        sul : "SC",
        leste : null,
        oeste : null,
        top : 432, 
        right : 300
    },
    {
        sigla : "SP",
        norte : "MG",
        sul : "PR",
        leste : "RJ",
        oeste : "MS",
        top : 403, 
        right : 264
    },
    {
        sigla : "MG",
        norte : "BA",
        sul : "MS",
        leste : "ES",
        oeste : "GO",
        top : 364, 
        right : 215
    },
    {
        sigla : "ES",
        norte : "BA",
        sul : "RJ",
        leste : null,
        oeste : "MG",
        top : 380, 
        right : 150
    },
    {
        sigla : "RJ",
        norte : "ES",
        sul : null,
        leste : null,
        oeste : "MG",
        top : 423, 
        right : 180
    },
    {
        sigla : "MS",
        norte : "MT",
        sul : "PR",
        leste : "SP",
        oeste : null,
        top : 385, 
        right : 325
    },
    {
        sigla : "MT",
        norte : "PA", 
        sul : "MS",
        leste : "GO", 
        oeste : "RO",
        top : 310, 
        right : 340
    },
    {
        sigla : "GO",
        norte : "TO",
        sul : "MG", 
        leste : "MG", 
        oeste : "MT",
        top : 325, 
        right : 268
    },
    {
        sigla : "AC",
        norte : "AM",
        sul : null, 
        leste : "RO", 
        oeste : null,
        top : 280,  
        right : 520
    },
    {
        sigla : "AM",
        norte : "RR",
        sul : "RO", 
        leste : "PA", 
        oeste : null,
        top : 205,  
        right : 440
    },
    {
        sigla : "RO",
        norte : "AM",
        sul : "MT", 
        leste : "MT", 
        oeste : "AC",
        top : 285,  
        right : 430
    },
    {
        sigla : "AP",
        norte : null,
        sul : "PA", 
        leste : null, 
        oeste : null,
        top : 115,   
        right : 285
    },
    {
        sigla : "RR",
        norte : null,
        sul : "AM", 
        leste : null, 
        oeste : null,
        top : 110,  
        right : 405
    },
    {
        sigla : "PA",
        norte : "AP",
        sul : "MT", 
        leste : "MA", 
        oeste : "AM",
        top : 195, 
        right : 310
    },
    {
        sigla : "TO",
        norte : "MA",
        sul : "GO", 
        leste : "BA", 
        oeste : "PA",
        top : 270,  
        right : 255
    },
    {
        sigla : "BA",
        norte : "PE",
        sul : "MG", 
        leste : "SE", 
        oeste : "TO",
        top : 295,  
        right : 180 
    },
    {
        sigla : "SE",
        norte : "AL",
        sul : "BA", 
        leste : null, 
        oeste : "MS",
        top : 290,  
        right : 115
    },
    {
        sigla : "AL",
        norte : "PE",
        sul : "SE", 
        leste : null, 
        oeste : "BA",
        top : 275,  
        right : 95
    },
    {
        sigla : "PB",
        norte : "RN",
        sul : "PE", 
        leste : null, 
        oeste : "CE",
        top : 234,  
        right : 105
    },
    {
        sigla : "PE",
        norte : "PB",
        sul : "AL", 
        leste : null, 
        oeste : "PI",
        top : 250,  
        right : 140
    },
    {
        sigla : "RN",
        norte : null,
        sul : "PB", 
        leste : null, 
        oeste : "CE",
        top : 210,  
        right : 105
    },
    {
        sigla : "CE",
        norte : null,
        sul : "PE", 
        leste : "RN", 
        oeste : "PI",
        top : 190,  
        right : 145
    },
    {
        sigla : "PI",
        norte : null,
        sul : "BA", 
        leste : "PE", 
        oeste : "MA",
        top : 230, 
        right : 185
    },
    {
        sigla : "MA",
        norte : null,
        sul : "TO", 
        leste : "PI", 
        oeste : "PA",
        top : 195,  
        right : 121
    },
]

let capiIMG = document.getElementById("capi");

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        const valorDigitado = input.value.toLowerCase();

        switch (valorDigitado){
            case "norte":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].norte);

                
                if(estadoAtual[0].norte){
                    capi.posicao = estadoAtual[0].norte;
                    capiIMG.style.top = `${proxEstado[0].top}px`
                    capiIMG.style.right = `${proxEstado[0].right}px`
                }

                break;
            case "sul":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].sul);

                
                if(estadoAtual[0].sul){
                    capi.posicao = estadoAtual[0].sul;
                    capiIMG.style.top = `${proxEstado[0].top}px`
                    capiIMG.style.right = `${proxEstado[0].right}px`
                }

                break;
            case "leste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].leste);

                
                if(estadoAtual[0].leste){
                    capi.posicao = estadoAtual[0].leste;
                    capiIMG.style.top = `${proxEstado[0].top}px`
                    capiIMG.style.right = `${proxEstado[0].right}px`
                }

                break;
            case "oeste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].oeste);

                
                if(estadoAtual[0].oeste){
                    capi.posicao = estadoAtual[0].oeste;
                    capiIMG.style.top = `${proxEstado[0].top}px`
                    capiIMG.style.right = `${proxEstado[0].right}px`
                }

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


function insereDirecao(direcao){
    input.value = '';
    let divDirecoes = document.getElementById('direcoes');
    divDirecoes.innerHTML = `<p class='roboto-regular'>${direcao.toUpperCase()}</p>` + divDirecoes.innerHTML;
}