var campoTexto = document.getElementById("texto1");
var texto = "";

function funcionImprimir() {
  texto = campoTexto.value;
  alert(texto);
  console.log(texto);
}

function funcionBorrar() {
  document.getElementById("texto1").value = "";
}