console.log(Vue);

const app = Vue.createApp({
    data(){
        return{
            mensaje: 'Este texto es generado por vue',
            nombre: 'Mario',
            profesion: 'plomero'
        }
    }
});

app.mount('#miApp');