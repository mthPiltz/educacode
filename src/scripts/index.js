const headerPath = window.location.host == "mthpiltz.github.io" 
                                ? "educacode/tamplates/share/header.js"
                                : "tamplates/share/header.js"
                                
const cores = [
    {
        disciplina: "matematica",
        cor: "#F0CA19"
    },
    {
        disciplina: "geografia",
        cor: "#FF3131"
    }
];

async function loadHeader() {
    const module = await import(`/${headerPath}`);
    const header = module.default;

    const disciplina = window.location.pathname.split("/")[2];
    const cor = cores.filter(x => x.disciplina == disciplina);

    if(cor.length > 0)
        header(cor[0].cor, cor[0].disciplina);
    else
        header("", "");
}

loadHeader();

let capi = document.getElementById('capi');
let historia = document.getElementById('historia');

capi.addEventListener('mouseover', () => {
    historia.style.display = 'inline';
});

capi.addEventListener('mouseout', () => {
    historia.style.display = 'none';
});