//Instanciar ambas clases
const eventbrite = new EventBrite()
const interface = new Interfaz()

//listener al buscador
const buscar = document.querySelector('#buscarBtn')

buscar.addEventListener('click', (e) => {
  e.preventDefault()

  //Leer el texto del input buscar
  const buscador = document.querySelector('#evento').value

  //leer el select
  const categorias = document.querySelector('#listado-categorias')
  const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value

  //Revisar que no este vacio el buscador
  if(buscador !== '') {
    //realizando busqueda
    eventbrite.obtenerEventos(buscador, categoriaSeleccionada)
  }else {
    //mostrar mensaje de error
    interface.mensajeError('Escribe algo en el buscador', 'alert alert-danger mt-4')
  }

})