import header from "../../../../tamplates/share/header.js"
header()


let btnq1 = document.getElementById('q1btn');
let btnq2 = document.getElementById('q2btn');
let btnq3 = document.getElementById('q3btn');
let btnq4 = document.getElementById('q4btn');
let btnq5 = document.getElementById('q5btn');
let btnq6 = document.getElementById('q6btn');

btnq1.addEventListener('click', () => check(0));
btnq2.addEventListener('click', () => check(1));
btnq3.addEventListener('click', () => check(2));
btnq4.addEventListener('click', () => check(3));
btnq5.addEventListener('click', () => check(4));
btnq6.addEventListener('click', () => check(5));

function check(idbtn){
    const inputs = ['q1', 'q2','q3', 'q4', 'q5', 'q6'];
    let input = document.getElementById(`${inputs[idbtn]}`);
    let valorCorreto = retornaValorCorreto(idbtn);

    if(input.value == valorCorreto){
        alert("Parabens");
        input.readOnly = true;
        input.disabled = true;
    }
}

function retornaValorCorreto(idbtn){
    switch(idbtn){
        case 0:
            return "1";
        case 1:
            return "10";
        case 2:
            return "11";
        case 3:
            return "100";
        case 4:
            return "101;"
        case 5:
            return "110";
    }
}

document.getElementById('q1').addEventListener('keypress', (e) => {
    const regex = /^[01]+$/;
    if(!regex.test(e.key))
        e.preventDefault();
});