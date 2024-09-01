const html = `
<header>
    <div class="header">
        <img src="../../../assets/logoEducacode.svg" alt="Logo do Educacode">

        <img class="gif" src="../../../assets/iconeConfiguracoes.gif" alt="Icone de configurações">
    </div>
</header>
`;

export default function header(){
    let div = document.getElementById("header");
    div.innerHTML = html;
}