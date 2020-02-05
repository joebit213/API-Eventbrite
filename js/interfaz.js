class Interfaz {
  constructor() {
    //Inicializa la app al instanciar
    this.init()
    //Leer el resultado
    this.listado = document.querySelector('#resultado-eventos')
  }

  //Metodo para cuando incicialice la app
  init() {
    //Llamar a imprimir categorias de la REST API
    this.imprimirCategorias()
  }

  //Imprimir categorias
  imprimirCategorias() {
    const listaCategorias = eventbrite.obtenerCategorias()
          .then(categorias => {
            //console.log(categorias)
            const cats = categorias.categories

            //seleccionar el select de categorias
            const selectCategoria = document.querySelector('#listado-categorias')
            //console.log(cats)

            //recorremos el arreglo e imprimimos los options
            cats.forEach(cat => {
              const option = document.createElement('option')
              //console.log(option)
              option.value = cat.id
              option.appendChild(document.createTextNode(cat.name_localized))
              selectCategoria.appendChild(option)
            })
          })
  }

  //Metodo para imprimir mensajes: 2 parametros, mensaje y clases
  mensajeError(mensaje, clases) {
    const div = document.createElement('div')
    div.classList = clases
    //agregar texto
    div.appendChild(document.createTextNode(mensaje))
    //buscar padre
    const buscadorDiv = document.querySelector('#buscador')
    buscadorDiv.appendChild(div)

    //quitar el alert despues de 3 segundo
    setTimeout(() => {
      this.limpiarMensaje()
    }, 3000);
  }

  //desaparece el mensaje en caso de que exista
  limpiarMensaje() {
    const alert = document.querySelector('.alert')
    if(alert) {
      alert.remove()
    }
  }

}