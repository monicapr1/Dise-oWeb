let formulario = document.getElementById("formulario");
let fecha = document.getElementById("fecha");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let btnGuardar = document.getElementById("btnGuardar");
let listaTareas= document.getElementById("listaTareas");
let tareas = [];

let agregarDatos = () => {
  tareas.push({
    nombre: nombre.value,
    fecha: fecha.value,
    descripcion: descripcion.value,
  });
  console.log(tareas);
};

let cerrarModal = () => {
  btnGuardar.setAttribute("data-bs-dismiss", "modal");
  btnGuardar.click();
};

let resetearFormulario =()=>{
    nombre.value= '';
    fecha.value= '';
    descripcion.value= '';
};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";

    tareas.forEach( (tarea, indice) =>{
        listaTareas.innerHTML += `
        <div class='row' id=${indice}>
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-3 border p-3 text-center'>
                <button class='btn btn-danger' onClick ="borrarTarea(this,${indice});"><i class="bi bi-trash"></i> Borrar</button>
            </div>
        </div>
        `;
    });
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarDatos();
  cerrarModal();
  resetearFormulario();
  mostrarTareas();
});
