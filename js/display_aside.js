const add_newContent_aside = (msj) => {
    const aside = document.querySelector("aside");
    const div_enc_desc_text= document.createElement("div");
    const enc_desc_text = document.createElement("span");
    const btn_copy = document.createElement("button");

    aside.classList.add("new_content");
    div_enc_desc_text.classList.add("container_converted_text");
    enc_desc_text.classList.add("encr_desencr_text");
    btn_copy.classList.add("btn_copy");

    enc_desc_text.textContent=msj;
    btn_copy.textContent="Copiar";
    btn_copy.addEventListener("click", (event) => {
        event.preventDefault();
        const text_aside = document.querySelector(".encr_desencr_text");
        const textarea = document.querySelector("#texto-a-encrip-desencrip");

        textarea.value = text_aside.textContent;
        text_aside.textContent = "";
    });

    div_enc_desc_text.appendChild(enc_desc_text);
    aside.appendChild(div_enc_desc_text);
    aside.appendChild(btn_copy);

}
const add_originalContent_aside = () => {
    const aside = document.querySelector("aside");
    const img = document.createElement("img");
    const div_avisos = document.createElement("div");
    const span_resp = document.createElement("span");
    const span_suger = document.createElement("span");

    aside.classList.add("original_content");
    img.classList.add("img-muñeco");
    div_avisos.classList.add("msj-avisos");
    span_resp.classList.add("msj-respuesta");
    span_suger.classList.add("msj-sugerencia");

    span_resp.textContent="Ningún mensaje fue encontrado";
    span_suger.textContent="Ingresa el texto que deseas encriptar o desencriptar.";

    div_avisos.appendChild(span_resp);
    div_avisos.appendChild(span_suger);
    aside.appendChild(img);
    aside.appendChild(div_avisos);
    
}

export const convert_content_aside = (msj) => {
    const aside = document.querySelector("aside");

    if(msj != "")
    {
        if(!aside.classList.contains("new_content"))
        {
            document.querySelector(".img-muñeco").remove();
            document.querySelector(".msj-avisos").remove();
            aside.classList.add("new_content");
            add_newContent_aside(msj);
        }
        else
        {
            const enc_desc_text= document.querySelector(".encr_desencr_text");
            enc_desc_text.textContent=msj;
        }

    }
    else
    {
        /*Si llega "" y la ultima actualizacion quedó con "new content" entonces se vuelve a la pantalla original*/
        if(aside.classList.contains("new_content"))
        {
            document.querySelector(".container_converted_text").remove();
            document.querySelector(".btn_copy").remove();
            aside.classList.remove("new_content");
            add_originalContent_aside();
        }
    }
}