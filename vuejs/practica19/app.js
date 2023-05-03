const { createApp } = Vue


const frases = [
  {
    id : 456,
    texto: 'El respeto al derecho ajeno es la paz'
  },
  {
    id : 987,
    texto: 'La medida del amor es amar sin medida'
  },
  { 
    id : 456,
    texto: 'El dinero no puede comprar la vida '
  }
]

createApp({
  data() {
    return {
        frases : frases
    }
  }
}).mount('#miApp');