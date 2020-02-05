class EventBrite {
  constructor() {
    this.token_auth = 'U2FRNDR6UIYSO4FUIYGZ',
    this.ordenar = 'date'
  }

  //mostrar resultados de la busqueda
  async obtenerEventos(evento, categoria) {
    const respuestaEvento = await fetch(``)
  }

  //Obtiene las categorias en init
  async obtenerCategorias() {
    //consultar las caegorias a la REST API de eventbrite
    const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)

    //Esperar la respuesta de las categorias y devolrver un JSON
    const categorias = await respuestaCategorias.json()

    //devolvemos el resultado
    return categorias
  }


}