let btnNorte = document.getElementById("btn-norte");
let btnSul = document.getElementById("btn-sul");
let btnLeste = document.getElementById("btn-leste");
let btnOeste = document.getElementById("btn-oeste");

let capi = {
    posicao : "MS"
}

let capiIMG = document.getElementById("capi");

btnNorte.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].norte);

    if(estadoAtual[0].norte){
        capi.posicao = estadoAtual[0].norte;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.left = `${proxEstado[0].left}px`
    }
});

btnSul.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].sul);

    
    if(estadoAtual[0].sul){
        capi.posicao = estadoAtual[0].sul;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.left = `${proxEstado[0].left}px`
    }
});

btnLeste.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].leste);

    
    if(estadoAtual[0].leste){
        capi.posicao = estadoAtual[0].leste;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.left = `${proxEstado[0].left}px`
    }
});

btnOeste.addEventListener('click', () => {
    let estadoAtual = estados.filter(e => e.sigla == capi.posicao);
    let proxEstado = estados.filter(e => e.sigla == estadoAtual[0].oeste);

    
    if(estadoAtual[0].oeste){
        capi.posicao = estadoAtual[0].oeste;
        capiIMG.style.top = `${proxEstado[0].top}px`
        capiIMG.style.left = `${proxEstado[0].left}px`
    }
});


const estados = [
    {
        sigla : "MS",
        norte : "MT",
        sul : null, //"PR",
        leste : "SP",
        oeste : null,
        top : 100,
        left : 0
    },
    {
        sigla : "MT",
        norte : null, //"PA",
        sul : "MS",
        leste : null, //"GO",
        oeste : null, //"RO",
        top : 50,
        left : 0
    },
    {
        sigla : "SP",
        norte : null,//"MG",
        sul : null, // "PR",
        leste : null, //"MG",
        oeste : "MS",
        top : 100,
        left : 58
    },
]