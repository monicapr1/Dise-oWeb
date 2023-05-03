const { createApp } = Vue


createApp({

  data() { 
    return {
      codigo: '',
      descripcion: '',
      precio: '',
      articulos: [{
        codigo:1,
        descripcion: 'pollo',
        precio: 34
      }]
    }
  },
  methods: {
    agregarArticulo() {
      this.articulos.push({
        codigo: this.codigo,
        descripcion: this.descripcion,
        precio: this.precio
      });
      this.codigo = '';
      this.descripcion = '';
      this.precio = '';
    }
  }
  
}).mount('#miApp');

// const miApp = () => {
//   const { createApp } = Vue;

//   const app = createApp({
//     data() { 
//       return {
//         codigo: '',
//         descripcion: '',
//         precio: '',
//         articulos: [{
//           codigo:1,
//           descripcion: 'pollo',
//           precio: 34
//         }]
//       }
//     },
//     methods: {
//       agregarArticulo() {
//         this.articulos.push({
//           codigo: this.codigo,
//           descripcion: this.descripcion,
//           precio: this.precio
//         });
//         this.codigo = '';
//         this.descripcion = '';
//         this.precio = '';
//       }
//     }
//   });

//   app.mount('#miApp');
// }

// miApp();


