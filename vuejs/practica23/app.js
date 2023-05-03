const { createApp } = Vue


createApp({

  data(){ 
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      this.contador++;
    }
  }    
  
}).mount('#miApp');
