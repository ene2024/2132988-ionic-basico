document.addEventListener("keyup", el =>{

    if (el.target.matches("#barraBusqueda")){
  
        if (el.key ==="Escape")el.target.value = " "
  
        document.querySelectorAll(".pelicula").forEach(peli =>{
  
            peli.textContent.toLowerCase().includes(el.target.value.toLowerCase())
              ?peli.classList.remove("filtro")
              :peli.classList.add("filtro")
        })

    }
  
  })