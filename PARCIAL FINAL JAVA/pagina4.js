
var tareas = [];

function agregarTarea() {
    const nuevaTarea = document.getElementById("nTarea").value;
    
    if (nuevaTarea.trim() !== "") {
        tareas.unshift(nuevaTarea);
        actualizarLista();
        document.getElementById("nTarea").value = "";
        tareas.style.fontZise
    }
}

function eliminarPrimeraTarea() {
    if (tareas.length > 0) {
        tareas.shift();
        actualizarLista();
    }
}

function invertirLista() {
    tareas.reverse();
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("Lista");
    lista.innerHTML = "";
    
    tareas.forEach((tarea, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = (`${index + 1}. ${tarea}`);
        lista.appendChild(listItem);
    });
}
