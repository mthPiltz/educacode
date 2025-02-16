import modalParabens, { abrir } from "../../share/modalParabens.js"
import header from "/tamplates/share/header.js"
import Estados from "../estados.js"

header();
modalParabens();

let input = document.getElementById('input');

let capi = {
    posicao : "SC"
}

const estados = Estados();
let caminho = [];

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
                    caminho.push({
                        posicao: estadoAtual[0].norte,
                        top: `${proxEstado[0].top}px`,
                        right: `${proxEstado[0].right}px`
                    });
                    capi.posicao = estadoAtual[0].norte;
                }

                break;
            case "sul":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].sul);

                
                if(estadoAtual[0].sul){
                    caminho.push({
                        posicao: estadoAtual[0].sul,
                        top: `${proxEstado[0].top}px`,
                        right: `${proxEstado[0].right}px`
                    });
                    capi.posicao = estadoAtual[0].sul;
                }

                break;
            case "leste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].leste);

                
                if(estadoAtual[0].leste){
                    caminho.push({
                        posicao: estadoAtual[0].leste,
                        top: `${proxEstado[0].top}px`,
                        right: `${proxEstado[0].right}px`
                    });
                    capi.posicao = estadoAtual[0].lest;
                }

                break;
            case "oeste":
                insereDirecao(valorDigitado);
                var estadoAtual = estados.filter(e => e.sigla == capi.posicao);
                var proxEstado = estados.filter(e => e.sigla == estadoAtual[0].oeste);

                
                if(estadoAtual[0].oeste){
                    caminho.push({
                        posicao: estadoAtual[0].oeste,
                        top: `${proxEstado[0].top}px`,
                        right: `${proxEstado[0].right}px`
                    });
                    capi.posicao = estadoAtual[0].oeste;
                }

                break;
            case "andar":
                function andarComIntervalo(index) {
                    if (index < caminho.length) {
                        andar(caminho[index]); 
                        setTimeout(() => andarComIntervalo(index + 1), 1000); // Chama a próxima iteração após 1s
                    }

                    if(capi.posicao == "GO")
                        abrir()
                }
            
                andarComIntervalo(0);
                break;
            default:
                alert("Direção invalida!")

        }
    }
});


function insereDirecao(direcao){
    input.value = '';
    let divDirecoes = document.getElementById('direcoes');
    divDirecoes.innerHTML = `<p class='roboto-regular'>${direcao.toUpperCase()}</p>` + divDirecoes.innerHTML;
}

function andar(e){
    capi.posicao = e.posicao;
    capiIMG.style.top = e.top
    capiIMG.style.right = e.right;
    input.value = ''
}