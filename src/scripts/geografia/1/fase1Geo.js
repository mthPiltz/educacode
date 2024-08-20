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
        sigla : "RS",
        norte : "SC",
        sul : null,
        leste : null,
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 522,
        left : 295
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
        top : 488, 
        left : 251
    },
    {
        sigla : "PR",
        norte : null,
        sul : "SC",
        leste : null,
        oeste : null,
        noroeste : null,
        nordeste : null,
        sudeste : "SP",
        sudoeste : "MS",
        top : 449, 
        left : 275
    },
    {
        sigla : "SP",
        norte : "MG",
        sul : "PR",
        leste : "MS",
        oeste : "RJ",
        noroeste : null,
        nordeste : null,
        sudeste : "MG",
        sudoeste : "MS",
        top : 408, 
        left : 238
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
        top : 352, 
        left : 174
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
        top : 386, 
        left : 115
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
        top : 418, 
        left : 150
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
        top : 389, 
        left : 315
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
        top : 280, 
        left : 315
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
        top : 319, 
        left : 242
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
        top : 242,  
        left : 521
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
        top : 162,  
        left : 447
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
        top : 245,  
        left : 431
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
        top : 70,   
        left : 271
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
        top : 70,  
        left : 407
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
        top : 163, 
        left : 293
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
        top : 239,  
        left : 219
    },
    {
        sigla : "BA",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 274,  
        left : 120 
    },
    {
        sigla : "SE",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 258,  
        left : 69
    },
    {
        sigla : "AL",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 239,  
        left : 55
    },
    {
        sigla : "PB",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 205,  
        left : 53
    },
    {
        sigla : "PE",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 223,  
        left : 67
    },
    {
        sigla : "RN",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 180,  
        left : 53
    },
    {
        sigla : "CE",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 172,  
        left : 94
    },
    {
        sigla : "PI",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 202, 
        left : 138
    },
    {
        sigla : "PI",
        norte : null,
        sul : null, 
        leste : null, 
        oeste : "MS",
        noroeste : null,
        nordeste : null,
        sudeste : null,
        sudoeste : null,
        top : 173,  
        left : 175
    },
]