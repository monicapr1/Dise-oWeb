console.log(Vue);

const app = Vue.createApp({
    template : `
    <h1>Hola Mundo</h1>
    <p> desde Vue</p>
    <p> {{ 2 + 2 }}</p>
    <p> {{true}}</p>
    <p> {{ [1,2,3,4,5] }}</p>
    <p> {{ {nombre:'Juan' , edad:18} }}</p>
    <p> {{ (10 > 15) ? 'Si verdadero' : 'No falso'}}</p>
`
 
});

app.mount('#miApp');