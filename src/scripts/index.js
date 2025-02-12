const headerPath = window.location.host == "mthpiltz.github.io" 
                                ? "educacode/tamplates/share/header.js"
                                : "tamplates/share/header.js"

async function loadHeader() {
    const module = await import(`/${headerPath}`);
    const header = module.default; // Pega a função exportada como default
    header(); // Chama a função
}

loadHeader();

// const script = document.createElement("script");
// script.src = `./${headerPath}`;
// script.type = "module";
// document.body.appendChild(script);

// header();