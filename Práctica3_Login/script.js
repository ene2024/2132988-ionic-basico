var articulo = document.getElementById(gastoInput);
var monto = document.getElementById(montoInput);
var total = 0;
var seccionTicket = document.getElementById("Ticket");
var seccionTotal = document.getElementById("Ticket");

function guardar() {
    articulo = gastoInput.value;

    //parseInt convierte de string a número
    monto = parseInt(montoInput.value);
    total = total + monto;

    //Crear elemento en html
    let elementoTicket = document.createElement("p");
    elementoTicket.innerHTML = articulo + "....... $" + monto;
    let elementoTotal = document.createElement("p");
    elementoTotal.innerHTML = "Total: $" + total;

    //Insertar elemento en html
    seccionTicket.appendChild(elementoTicket);
    seccionTotal.appendChild(elementoTotal);

    //Limpiar el input
    montoInput.value = "";
    gastoInput.value = "";
}

