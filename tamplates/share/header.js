const path = window.location.host == 'mthpiltz.github.io' ? "/educacode" : ""
let cor;

function gerarHtml(cor, path) {
    return `
    <header>
        <div class="header">
            <img
                class="img-header" 
                src="${path}/assets/logoEducacode.svg" 
                alt="Logo do Educacode">

            <div style="padding: 2%; background-color: ${cor}; height: 30%; width: 100%"></div>
        </div>
    </header>
    `;
}

export default function header(corDisciplina){
    cor = corDisciplina;
    let div = document.getElementById("header");
    const html = gerarHtml(cor, path)
    div.innerHTML = html;
    adicionaAcoes()
}

function adicionaAcoes(){
    let img = document.getElementById('voltar');

    img.addEventListener('click', () => {
        let redirec = isRunningOnLocalhost() ? '/' : "/educacode";

        window.location.href = redirec;
    });
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