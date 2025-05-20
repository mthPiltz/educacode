const html = `
<div id="modalUpsCom" class="modal">
    <div class="modal-ups-content">
        <span class="close" id="closeUps">&times;</span>
        <img 
            src="../../../assets/ups.svg" 
            alt="Imagem da capi informando o erro">
        <div style="width: 100%; display: flex; justify-content: center; margin-top: 5px;">
            <button id='btnReload'>
                <img 
                    src="../../../assets/reload.svg" 
                    alt="Botão para refazer ação">
            </button>
        </div>
    </div>
</div>`

export default function modalUps(){
    let div = document.getElementById("modalUps");
    div.innerHTML = html;

    close();
}

function close(){
    const span = document.getElementById("closeUps");
    const btnReload = document.getElementById("btnReload");
    const modal = document.getElementById("modalUpsCom");
    
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    btnReload.addEventListener('click', ()=>{
        modal.style.display = "none";
    })
}