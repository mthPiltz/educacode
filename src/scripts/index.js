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
    },
    {
        disciplina: "lingua-portuguesa",
        cor: "#00AFEF"
    }
];

async function loadHeader() {
    const module = await import(`/${headerPath}`);
    const header = module.default;

    let posicaoPathName = window.location.host == "mthpiltz.github.io" ? 3 : 2;

    const disciplina = window.location.pathname.split("/")[posicaoPathName];
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