import modalParabens, { abrir } from "../../share/modalParabens.js"
import header from "../../share/header.js"

header("#FF3131", "geografia");
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
        top : 84,
        left : 39
    },
    {
        sigla : "SC",
        norte : "PR",
        sul : "RS",
        leste : null,
        oeste : null,
        top : 78, 
        left : 48
    },
    {
        sigla : "PR",
        norte : "SP",
        sul : "SC",
        leste : null,
        oeste : "MS",
        top : 72, 
        left : 42
    },
    {
        sigla : "SP",
        norte : "MG",
        sul : "PR",
        leste : null,
        oeste : "MS",
        top : 66, 
        left : 48
    },
    {
        sigla : "MG",
        norte : "BA",
        sul : "SP",
        leste : "ES",
        oeste : "GO",
        top : 57, 
        left : 57
    },
    {
        sigla : "ES",
        norte : "BA",
        sul : "RJ",
        leste : null,
        oeste : "MG",
        top : 61, 
        left : 67
    },
    {
        sigla : "RJ",
        norte : "ES",
        sul : null,
        leste : null,
        oeste : "MG",
        top : 68, 
        left : 63
    },
    {
        sigla : "MS",
        norte : "MT",
        sul : null,
        leste : "SP",
        oeste : null,
        top : 62, 
        left : 37
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
        top : 53, 
        left : 46
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
        top : 9,   
        left : 42
    },
    {
        sigla : "RR",
        norte : null,
        sul : "AM", 
        leste : "PA", 
        oeste : null,
        top : 7,  
        left : 25
    },
    {
        sigla : "PA",
        norte : "AP",
        sul : "MT", 
        leste : "TO", 
        oeste : "AM",
        top : 25, 
        left : 40
    },
    {
        sigla : "TO",
        norte : "MA",
        sul : "GO", 
        leste : "BA", 
        oeste : "PA",
        top : 38,  
        left : 49
    },
    {
        sigla : "BA",
        norte : "PI",
        sul : "MG", 
        leste : "SE", 
        oeste : "TO",
        top : 43,  
        left : 63 
    },
    {
        sigla : "SE",
        norte : "AL",
        sul : "BA", 
        leste : null, 
        oeste : "BA",
        top : 41,  
        left : 73
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
        top : 31,  
        left : 77
    },
    {
        sigla : "PE",
        norte : "PB",
        sul : "AL", 
        leste : null, 
        oeste : "PI",
        top : 34,  
        left : 75
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
        top : 24,  
        left : 68
    },
    {
        sigla : "PI",
        norte : null,
        sul : "BA", 
        leste : "CE", 
        oeste : "MA",
        top : 32, 
        left : 61
    },
    {
        sigla : "MA",
        norte : null,
        sul : "TO", 
        leste : "PI", 
        oeste : "PA",
        top : 23,  
        left : 56
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
                    capiIMG.style.top = `${proxEstado[0].top}%`
                    capiIMG.style.left = `${proxEstado[0].left}%`
                }

                break;
            case "sul":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].sul);

                
                if(estadoAtual[0].sul){
                    capi.posicao = estadoAtual[0].sul;
                    capiIMG.style.top = `${proxEstado[0].top}%`
                    capiIMG.style.left = `${proxEstado[0].left}%`
                }

                break;
            case "leste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].leste);

                
                if(estadoAtual[0].leste){
                    capi.posicao = estadoAtual[0].leste;
                    capiIMG.style.top = `${proxEstado[0].top}%`
                    capiIMG.style.left = `${proxEstado[0].left}%`
                }

                break;
            case "oeste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].oeste);

                
                if(estadoAtual[0].oeste){
                    capi.posicao = estadoAtual[0].oeste;
                    capiIMG.style.top = `${proxEstado[0].top}%`
                    capiIMG.style.left = `${proxEstado[0].left}%`
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

let numeroDirecao = 0;

function insereDirecao(direcao){
    numeroDirecao++;
    input.value = '';
    let divDirecoes = document.getElementById('direcoes');
    divDirecoes.innerHTML = divDirecoes.innerHTML + `<p class='roboto-regular'><span style="font-size: 20px;">${numeroDirecao}º</span> ${direcao.toUpperCase()}</p>`;
}