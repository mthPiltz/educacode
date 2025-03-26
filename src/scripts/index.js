const headerPath = window.location.host == "mthpiltz.github.io" 
                                ? "educacode/tamplates/share/header.js"
                                : "tamplates/share/header.js"

async function loadHeader() {
    const module = await import(`/${headerPath}`);
    const header = module.default; // Pega a função exportada como default
    header(); // Chama a função
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