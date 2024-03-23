const barraBusqueda = document.getElementById("barra-Busqueda");
const busquedaResultados = document.getElementById("busuqeda-resultados");

searchInput.addEventListener('input', function() {
    const busquedaResultados = this.value.trim().toLowerCase();
    const listaResultados = ["Dark", "Dark", "Dark", "Dark", "Dark"];
    
    busquedaResultados.innerHTML = '';
    
    const filtrarResultados = listaResultados.filter(result =>
        result.toLowerCase().includes(busquedaResultados)
    );

    if (busquedaResultados !== '') {
        filteredResults.forEach(result => {
            const respuesta = document.createElement('div');
            respuesta.textContent = result;
            busquedaResultados.appendChild(respuesta);
        });
    }
});
