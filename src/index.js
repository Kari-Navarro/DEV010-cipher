//import { clean } from 'gh-pages';
import cipher from './cipher.js'

//BOTON LIMPIAR
//DECLARAR LAS CONSTANTES> AGREGAR EVENTO> DETECTAR CLICK> FUNCION
//1.BOTONES 
const botonlimpiar = document.getElementById("botonlimpiar");
const textareaA = document.getElementById("cajaA");
const textareaB = document.getElementById("cajaB"); 
const offset = document.getElementById("offset");
const botoncodificar = document.getElementById("botoncodificar");
const botondescodificar = document.getElementById("botondescodificar")
//2. EVENTO>click
botonlimpiar.addEventListener("click", limpiar);
botoncodificar.addEventListener("click", capturaTexto);
botondescodificar.addEventListener("click", capturaCodigo);
//3. FUNCIONES
function limpiar () {
  textareaA.value ="";
  textareaB.value = "";
  offset.value = "" 
}

function capturaTexto () {
  const codigomsj = cipher.encode(parseInt (offset.value), textareaA.value);
  textareaB.value = codigomsj;
}
    
function capturaCodigo (){
  const decodigomsj = cipher.decode(parseInt (offset.value), textareaB.value);
  textareaA.value = decodigomsj;
}