const textArea = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".texto-encriptado");
const copia = document.querySelector(".copiar");
var munheco = document.querySelector(".contenedor-munheco");
var parrafo = document.querySelector(".parrafo");

function ocultarAdelante() {
  if (textArea.value.trim() !== "") {
    munheco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
  } else {
    munheco.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
  }
}

function botonEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  document.querySelector('.contenedor-munheco').classList.add('ocultar-munheco');
  document.querySelector('.parrafo').classList.add('ocultar-parrafo');
  mensaje.value = textoEncriptado;
  textArea.value = "";
  copia.style.display = "block";
  ocultarAdelante();
}

function encriptar(stringEncriptado) {
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringEncriptado.includes(Codigo[a][0])) {
      stringEncriptado = stringEncriptado.replaceAll(Codigo[a][0], Codigo[a][1]);
    }
  }
  return stringEncriptado;
}

function botonDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  document.querySelector('.contenedor-munheco').classList.add('ocultar-munheco');
  document.querySelector('.parrafo').classList.add('ocultar-parrafo');
  mensaje.value = textoEncriptado;
  textArea.value = "";
  ocultarAdelante();
}

function desencriptar(stringDesencriptado) {
  let Codigo = [["a","ai"], ["e","enter"], ["i","emes"], ["o","ober"], ["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let a = 0; a < Codigo.length; a++) {
    if (stringDesencriptado.includes(Codigo[a][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(Codigo[a][1], Codigo[a][0]);
    }
  }
  return stringDesencriptado;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
