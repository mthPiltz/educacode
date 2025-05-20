const html = `
<div id="modal" class="modal">
    <div class="modal-parabens-content">
        <span class="close" id="close">&times;</span>
        <img
            style="width: 100%;" 
            src="../../../assets/parabens.svg" 
            alt="Imagem da capi parabenizando o acerto">
    </div>
</div>
`;


export default function modalParabens(){
    let div = document.getElementById("modalParabens");
    div.innerHTML = html;

    close();
}

function close(){
    const span = document.getElementById("close");
    const modal = document.getElementById("modal");
    
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

export function abrir(){
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}