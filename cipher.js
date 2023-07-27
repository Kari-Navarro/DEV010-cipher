
const cipher = {
  encode : function (offset, textareaA){
    let resultado = '';  
    if ((Number.isInteger(offset)&& offset > 0) || typeof textareaA === "string") {
        
      if (textareaA && textareaA.length > 0) {
        if (textareaA.match(/[a-z]/)) {
          alert("SOLO MAYUSCULAS");
        }
        for (let i = 0; i < textareaA.length; i++) {
          const caracterCodigo = textareaA.charCodeAt(i);
          const cifrado = ((caracterCodigo + offset - 65) % 26 + 65);
          resultado += String.fromCharCode(cifrado);
        }
      }
      return resultado;
    } else {throw new TypeError("SOLO SE ADMITEN MAYUSCULAS");}

  }, 
    
  decode : function (offset, textareaB){
    let resultadocode = '';
    if ((Number.isInteger(offset)&& offset > 0) || typeof textareaB === "string") {

      if (textareaB && textareaB.length > 0 )  {
        if (textareaB.match(/[a-z]/)) {
          alert("SOLO MAYYSCULAS");
        }
        for (let i = 0; i < textareaB.length; i++) {
          const codigoCaracter = textareaB.charCodeAt(i);
          const caracter = ((codigoCaracter - offset + 65) % 26 + 65);
          resultadocode += String.fromCharCode(caracter);
        }
      }
      return resultadocode;
    } else {throw new TypeError("SOLO SE ADMITEN MAYUSCULAS");}
  }
}
export default cipher;
