import header from "../../share/header.js";
import modalParabens from "../../share/modalParabens.js";
import modalUps from "../../share/upsTenteNovamente.js";

header("#00AFEF", "lingua-portuguesa");
modalParabens();
modalUps();

let palavrasCompletas = [0,0,0];

let btn1 = document.getElementById("btn-palavra1");
let btn2 = document.getElementById("btn-palavra2");
let btn3 = document.getElementById("btn-palavra3");
let inputLetras = document.getElementsByClassName('input-letra');

for(let i = 0; i < inputLetras.length; i++) {
    inputLetras[i].addEventListener("keypress", (event) => {
        const regex = /[^0-9]/g;
        if(regex.test(event.key))
            event.preventDefault();
    });
}

// inputLetras.forEach(e => {
//     e.addEventListener("keypress", (event) => {
//         const regex = /^[0-9]+$/;
//         if(!regex.test(e.key))
//             e.preventDefault();
//     })
// });

btn1.addEventListener("click", () => {
    if(palavrasCompletas[0] == 1) {
        return;
    }

    let palavra = [document.getElementById("palavra1m"),
                   document.getElementById("palavra1a1"),
                   document.getElementById("palavra1n"),
                   document.getElementById("palavra1g"),
                   document.getElementById("palavra1a2")];

    if(palavra[0].value == "77" && palavra[1].value == "65" && palavra[2].value == "78" && palavra[3].value == "71" && palavra[4].value == "65") {
        sucesso(palavra);
        palavrasCompletas[0] = 1;
        return;
    }

    exibeModalUps(palavra);
});

btn2.addEventListener("click", () => {
    if(palavrasCompletas[1] == 1) {
        return;
    }

    let palavra = [document.getElementById("palavra2v"),
                   document.getElementById("palavra2e"),
                   document.getElementById("palavra2n"),
                   document.getElementById("palavra2d"),
                   document.getElementById("palavra2o")];

    if(palavra[0].value == "86" && palavra[1].value == "69" && palavra[2].value == "78" && palavra[3].value == "68" && palavra[4].value == "79") {
        sucesso(palavra);
        palavrasCompletas[1] = 1;
        return;
    }

    exibeModalUps(palavra);
});

btn3.addEventListener("click", () => {
    if(palavrasCompletas[2] == 1) {
        return;
    }

    let palavra = [document.getElementById("palavra3b"),
                   document.getElementById("palavra3a"),
                   document.getElementById("palavra3n"),
                   document.getElementById("palavra3c"),
                   document.getElementById("palavra3o")];

    if(palavra[0].value == "66" && palavra[1].value == "65" && palavra[2].value == "78" && palavra[3].value == "67" && palavra[4].value == "79") {
        sucesso(palavra);
        palavrasCompletas[2] = 1;
        return;
    }

    exibeModalUps(palavra);
});

function sucesso(palavra){
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    palavra.forEach((input) => {
        input.readOnly = true;
        input.disabled = true;
    });
}

function exibeModalUps(palavra) {
    const modalUps = document.getElementById("modalUpsCom");
    modalUps.style.display = "block";

    palavra.forEach((input) => {
        input.value = "";
    });
}
