const path = window.location.host == 'mthpiltz.github.io' ? "/educacode" : ""
let cor;

function gerarHtml(cor, path) {
    return `
<header>
    <div class="header">
        <img
            class="img-header" 
            src="${path}/assets/logoEducacodeV2.svg" 
            alt="Logo do Educacode">

        <div style="padding: 15px; background-color: ${cor}; height: 30%; width: 100%">
            <button class="botao" id="inicio">Inicio</button>
            <button class="botao" id="geografia">Geografia</button>
            <button class="botao" id="matematica">Matemática</button>
            <button class="botao" id="historia">História</button>
            <button class="botao" id="ciencia">Ciência</button>
            <button class="botao" id="lingua-portuguesa">Língua portuguesa</button>
        </div>
    </div>
</header>
    `;
}

export default function header(corDisciplina, disciplina){
    cor = corDisciplina;
    let div = document.getElementById("header");
    const html = gerarHtml(cor, path)
    div.innerHTML = html;

    let botaoOculto = document.getElementById(disciplina);
    botaoOculto.style.display =  "none";

    let corClara = clarearCor(corDisciplina, 0.5);
    let botoes = document.getElementsByClassName("botao");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = corClara;
        botoes[i].style.width = "200px"
        
        botoes[i].style.height = "40px"
        botoes[i].style.borderRadius = "50px"
        botoes[i].style.border = "none";
        botoes[i].style.fontSize = "20px";
    }

}

function isRunningOnLocalhost() {
    const hostname = window.location.hostname;
    
    return hostname === 'localhost' || 
           hostname === '127.0.0.1' || 
           hostname === '[::1]' || 
           hostname.startsWith('192.168.') || 
           hostname.startsWith('10.') || 
           hostname.endsWith('.local');
}

function clarearCor(cor, porcentagem) {
    let r, g, b;

    if (cor.startsWith("#")) {
        // Hexadecimal para RGB
        cor = cor.replace("#", "");
        if (cor.length === 3) {
            cor = cor.split("").map(c => c + c).join("");
        }
        r = parseInt(cor.substring(0, 2), 16);
        g = parseInt(cor.substring(2, 4), 16);
        b = parseInt(cor.substring(4, 6), 16);
    } else if (cor.startsWith("rgb")) {
        // rgb(...) para componentes
        const valores = cor.match(/\d+/g);
        [r, g, b] = valores.map(Number);
    } else {
        console.warn("Formato de cor não suportado:", cor);
        return cor;
    }

    // Aplica o clareamento
    r = Math.min(255, r + (255 - r) * porcentagem);
    g = Math.min(255, g + (255 - g) * porcentagem);
    b = Math.min(255, b + (255 - b) * porcentagem);

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}