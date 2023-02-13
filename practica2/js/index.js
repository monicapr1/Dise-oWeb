let resultado = document.getElementById('resultado');
const asignar = (valor) => resultado.value += valor;
const calcular = () =>
{
    if(resultado.value!='')
    resultado.value = eval(resultado.value); 
}