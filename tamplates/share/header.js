const path = window.location.host == 'mthpiltz.github.io' ? "/educacode" : ""

const html = `
<header>
    <div class="header">
        <img src="` + path + `/assets/logoEducacode.svg" alt="Logo do Educacode">

        <div style="display: flex; align-items: center;">
            <img 
                class="gif" src="` + path + `/assets/iconeConfiguracoes.gif" 
                alt="Icone de configurações">
            <img
                id="voltar" 
                src="` + path + `/assets/sair.png" 
                alt="Icone para voltar" 
                style="height: 80px; cursor: pointer;">
        </div>
    </div>
</header>
`;

export default function header(){
    let div = document.getElementById("header");
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