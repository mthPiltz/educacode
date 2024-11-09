const html = `
<header>
    <div class="header">
        <img src="../../../assets/logoEducacode.svg" alt="Logo do Educacode">

        <div style="display: flex; align-items: center;">
            <img 
                class="gif" src="../../../assets/iconeConfiguracoes.gif" 
                alt="Icone de configurações">
            <img
                id="voltar" 
                src="../../../assets/sair.png" 
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
        window.location.href = '/';
    });
}