const html = `
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close" id="close">&times;</span>
        <img
            style="width: 100%;" 
            src="../../../assets/parabens.svg" 
            alt="Imagem que parabeniza o acerto">
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
        console.log("teste");
        modal.style.display = "none";
    });
}