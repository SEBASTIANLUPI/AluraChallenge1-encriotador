function encriptar() { 
    var aCodificar = document.querySelector("#textarea").value;
    var encriptado = aCodificar.replace(/[e]/gi,'enter').replace(/[i]/gi,'imes').replace(/[o]/gi,'ober').replace(/[a]/gi,'ai').replace(/[u]/gi,'ufat');
    document.querySelector("#codificado").innerHTML=encriptado;
    document.querySelector("#ocultar").innerHTML="";
    document.querySelector("#textarea").value="";
    console.log(encriptado);
    if (aCodificar == "") { 
        alert("¡No has ingresado ningún mensaje!");
        return true;
    }
}

function desencriptar() {
    var aDesCodificar = document.querySelector("textarea").value;
    var desencriptar = aDesCodificar.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector("#codificado").innerHTML=desencriptar;
    document.querySelector("#ocultar").innerHTML="";
    if (aDesCodificar == "") { 
        alert("¡No has ingresado ningún mensaje!");
        return true;
    }
}

function copiar() {
    var paraCopiar = document.getElementById("codificado");

    paraCopiar.select();
    document.execCommand('copy');
    alert("Copiado con éxito");
    
}
