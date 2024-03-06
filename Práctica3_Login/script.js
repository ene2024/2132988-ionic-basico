var articulo = document.getElementById("tipoGasto");
var precio = document.getElementById("monto");

function guardar() {
    articulo = tipoGasto.value;
    
    //parseInt convierte string a numero
    precio = parseInt(monto.value);

    total = total + monto;

    // Crear elemento en html
    let elementoTicket = document.createElement("p");
    elementoTicket.innerHTML = articulo + "....... $" + monto;

    // Insertar elemento en html
    seccionTicket.appendChild(elementoTicket);


}


