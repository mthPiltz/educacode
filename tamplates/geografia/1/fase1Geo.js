import modalParabens, { abrir } from "../../share/modalParabens.js"
import header from "../../share/header.js"

header();
modalParabens();

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
        top : 80,
        left : 39
    },
    {
        sigla : "SC",
        norte : "PR",
        sul : "RS",
        leste : null,
        oeste : null,
        top : 74, 
        left : 44
    },
    {
        sigla : "PR",
        norte : "SP",
        sul : "SC",
        leste : null,
        oeste : "MS",
        top : 68, 
        left : 42
    },
    {
        sigla : "SP",
        norte : "MG",
        sul : "PR",
        leste : null,
        oeste : "MS",
        top : 63, 
        left : 46
    },
    {
        sigla : "MG",
        norte : "BA",
        sul : "SP",
        leste : "ES",
        oeste : "GO",
        top : 55, 
        left : 55
    },
    {
        sigla : "ES",
        norte : "BA",
        sul : "RJ",
        leste : null,
        oeste : "MG",
        top : 57, 
        left : 63
    },
    {
        sigla : "RJ",
        norte : "ES",
        sul : null,
        leste : null,
        oeste : "MG",
        top : 64, 
        left : 59
    },
    {
        sigla : "MS",
        norte : "MT",
        sul : null,
        leste : "SP",
        oeste : null,
        top : 37, 
        left : 58
    },
    {
        sigla : "MT",
        norte : "PA", 
        sul : "MS",
        leste : "GO", 
        oeste : "RO",
        top : 42, 
        left : 35
    },
    {
        sigla : "GO",
        norte : "TO",
        sul : "MG", 
        leste : "MG", 
        oeste : "MT",
        top : 45, 
        left : 48
    },
    {
        sigla : "AC",
        norte : "AM",
        sul : null, 
        leste : "RO", 
        oeste : null,
        top : 37,  
        left : 7
    },
    {
        sigla : "AM",
        norte : "RR",
        sul : "RO", 
        leste : "PA", 
        oeste : null,
        top : 25,  
        left : 17
    },
    {
        sigla : "RO",
        norte : "AM",
        sul : null, 
        leste : "MT", 
        oeste : "AC",
        top : 38,  
        left : 19
    },
    {
        sigla : "AP",
        norte : null,
        sul : "PA", 
        leste : null, 
        oeste : null,
        top : 5,   
        left : 25
    },
    {
        sigla : "RR",
        norte : null,
        sul : "AM", 
        leste : "PA", 
        oeste : null,
        top : 5,  
        left : 42
    },
    {
        sigla : "PA",
        norte : "AP",
        sul : "MT", 
        leste : "TO", 
        oeste : "AM",
        top : 20, 
        left : 40
    },
    {
        sigla : "TO",
        norte : "MA",
        sul : "GO", 
        leste : "BA", 
        oeste : "PA",
        top : 35,  
        left : 48
    },
    {
        sigla : "BA",
        norte : "PI",
        sul : "MG", 
        leste : "SE", 
        oeste : "TO",
        top : 295,  
        left : 180 
    },
    {
        sigla : "SE",
        norte : "AL",
        sul : "BA", 
        leste : null, 
        oeste : "BA",
        top : 38,  
        left : 70
    },
    {
        sigla : "AL",
        norte : "PE",
        sul : "SE", 
        leste : null, 
        oeste : "BA",
        top : 36,  
        left : 73
    },
    {
        sigla : "PB",
        norte : "RN",
        sul : "PE", 
        leste : null, 
        oeste : "CE",
        top : 29,  
        left : 75
    },
    {
        sigla : "PE",
        norte : "PB",
        sul : "AL", 
        leste : null, 
        oeste : "PI",
        top : 32,  
        left : 73
    },
    {
        sigla : "RN",
        norte : null,
        sul : "PB", 
        leste : null, 
        oeste : "CE",
        top : 24,  
        left : 73
    },
    {
        sigla : "CE",
        norte : null,
        sul : "PE", 
        leste : "RN", 
        oeste : "PI",
        top : 21,  
        left : 65
    },
    {
        sigla : "PI",
        norte : null,
        sul : "BA", 
        leste : "CE", 
        oeste : "MA",
        top : 29, 
        left : 59
    },
    {
        sigla : "MA",
        norte : null,
        sul : "TO", 
        leste : "PI", 
        oeste : "PA",
        top : 23,  
        left : 54
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
        if(capi.posicao == "RR")
            abrir()
    }
});


function insereDirecao(direcao){
    input.value = '';
    let divDirecoes = document.getElementById('direcoes');
    divDirecoes.innerHTML = `<p class='roboto-regular'>${direcao.toUpperCase()}</p>` + divDirecoes.innerHTML;
}