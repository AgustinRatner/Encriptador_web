import { encrypt_personal } from "./encriptado.js";
import { decrypt_personal } from "./desencriptado.js";
import {convert_content_aside} from "./display_aside.js";

const btn_encriptar=document.querySelector("#btn_enc");
const btn_desencriptar=document.querySelector("#btn_des");
const aside = document.querySelector("aside");

const text_encrypted = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("#texto-a-encrip-desencrip");
    const msj_advertencia = document.querySelector(".span-adv");

    if(input.value == "")
    {
        msj_advertencia.classList.remove("callAtention");
        convert_content_aside("");
        return;
    }
        
    if(input.value != input.value.toLowerCase())
    {    
        msj_advertencia.classList.add("callAtention");
        convert_content_aside("");
    }
    else
    {
        msj_advertencia.classList.remove("callAtention");
        const msj_encriptado = encrypt_personal(input.value);
        
        /*Cambiamos el display de aside*/
        convert_content_aside(msj_encriptado);
    }

}
const text_decrypted = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("#texto-a-encrip-desencrip");
    const msj_advertencia = document.querySelector(".span-adv");

    if(input.value == "")
    {
        msj_advertencia.classList.remove("callAtention");
        convert_content_aside("");
        return;
    }
        
    if(input.value != input.value.toLowerCase())
    {    
        msj_advertencia.classList.add("callAtention");
        convert_content_aside("");
    }
    else
    {
        msj_advertencia.classList.remove("callAtention");
        const msj_desencriptado = decrypt_personal(input.value);
        
        /*Cambiamos el display de aside*/
        convert_content_aside(msj_desencriptado);
    }
}

btn_encriptar.addEventListener("click", text_encrypted);
btn_desencriptar.addEventListener("click", text_decrypted);
