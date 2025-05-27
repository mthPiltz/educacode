const path = window.location.host == 'mthpiltz.github.io' ? "/educacode" : ""
let cor;

function gerarHtml(cor, path) {
    return `
<header>
    <div class="header" style="display: flex;">
        <img
            class="img-header" 
            src="${path}/assets/logoEducacodeV2.svg" 
            alt="Logo do Educacode">

        <nav id="nav" style="padding: 15px; background-color: ${cor}; height: 30%; width: 100%; display: flex;">
            <a class="botao" id="inicio" href="${path}">Inicio</a>
            <a class="botao" id="geografia" href="../../geografia/selecao/selecaoGeografia.html">Geografia</a>
            <a class="botao" href="../../matematica/selecao/selecaoMatematica.html" id="matematica">Matemática</a>
            <a class="botao" id="historia">História</a>
            <a class="botao" id="ciencia">Ciência</a>
            <a class="botao" href="../../lingua-portuguesa/selecao/selecao-lp.html" id="lingua-portuguesa">Língua portuguesa</a>
        </nav>
    </div>
</header>
    `;
}

export default function header(corDisciplina, disciplina){
    cor = corDisciplina;
    let div = document.getElementById("header");
    const html = gerarHtml(cor, path)
    div.innerHTML = html;
    
    let corClara = clarearCor(corDisciplina, 0.5);
    let botoes = document.getElementsByClassName("botao");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = corClara;
        botoes[i].style.width = "200px"
        
        botoes[i].style.height = "40px"
        botoes[i].style.borderRadius = "50px"
        botoes[i].style.border = "none";
        botoes[i].style.fontSize = "20px";
        botoes[i].style.display = "flex";
        botoes[i].style.justifyContent = "center";
        botoes[i].style.alignItems = "center";
        botoes[i].style.textDecoration = "none";
        botoes[i].style.color = "#000";
        botoes[i].style.fontFamily = "Roboto, sans-serif";
        botoes[i].style.margin = "0 2px";
    }
    
    let botaoOculto = document.getElementById(disciplina);
    if(botaoOculto)
        botaoOculto.style.display =  "none";

    const pathname = window.location.pathname;
    const pathEscondeNav = [`/tamplates/geral/selecaoDisciplina.html`, "/", `/educacode/tamplates/geral/selecaoDisciplina.html`, "/educacode/"];
    if(pathEscondeNav.includes(pathname)) {
        let nav = document.getElementById("nav");
        nav.style.display = "none";    
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