const { createApp } = Vue

createApp({
  data() {
    return {
      articulos: [
        {
          codigo: 1, 
          descripcion: 'papas',
          precio: 12.52
        },
        {
          codigo: 2, 
          descripcion: 'naranjas',
          precio: 21
        },
        {
          codigo: 3, 
          descripcion: 'peras',
          precio: 18.20
        }
      ],
      computed: {
        sumaPrecios() {
          return this.articulos.reduce((acumulador, articulo) => acumulador + articulo.precio, 0)
        }
      }
    }
    
  }
}).mount('#miApp');