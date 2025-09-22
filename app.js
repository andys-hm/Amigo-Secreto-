// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaracion de variables
let nombreUsuarios = []; //Array donde se guardaran los nombres de los amigos
let nombreInput = document.getElementById("amigo");
let nombresLista = document.getElementById("listaAmigos");
let nombreSorteado = document.getElementById("resultado");
//Esta linea de codigo que es un evento me ayuda a que al presionar la tecla "Enter" se agregue el nombre sin necesidad de hacer click en el boton "Añadir"


nombreInput.addEventListener('keydown', function(event){
    if (!/^[a-zA-Z\s]$/.test(event.key) && event.key !== 'Enter') {
        event.preventDefault();
        alert("Solo se permiten letras.");
    }
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();
    }
})
let botonAgregarNombre = document.getElementById("agregarNombre");
let botonSortearNombre = document.getElementById("sortearNombre");
let botonJuegoNuevo = document.getElementById("botonJuegoNuevo"); //Variable del boton que yo estoy agregando para iniciar una partida nueva en el juego


//Esta funcion me ayuda a agregar el nombre de mi amigo
function agregarAmigo() {
  let nombre = nombreInput.value;
  if (nombre.trim() !== "" && /^[a-zA-Z\s]+$/.test(nombre)) { /*Este condicional me ayuda agregar los nombres al array. Y agrega solo si el input no esta vacio.*/
    nombreUsuarios.push(nombre);
  
//Creamos un nuevo elemento Li para que se guarden los nombres en forma de lista y nos los muestre  en pantalla
  let liNombre = document.createElement("li");
  liNombre.textContent = nombre;
  nombresLista.appendChild(liNombre); // Agregamos el elemento li (lista) a la lista de ul (listaAmigos)
  nombreInput.value = ""; // Este nos ayuda a limpar el input despues de agregar un nombre
  nombreInput.focus(); // Este nos ayuda a que el cursor vuelva al input despues de agregar un nombre
  botonJuegoNuevo.disabled = true; // Deshabilita el botón "Jugar nuevamente" mientras se agregan nombres y se hace el sorteo
   } else if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        alert("El nombre contiene caracteres no válidos. Solo se permiten letras y espacios.");
    }

}

//Esta funcion me ayuda a sortear el nombre de mi amigo
function sortearAmigo() {
  if (nombreUsuarios.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * nombreUsuarios.length); //con el math random genero un numero aleatorio y con el math floor lo redondeo para que sea un numero entero.
    let ganador = nombreUsuarios[indiceAleatorio]; // se obtiene el nombre del ganador
    nombreSorteado.textContent = `El nombre sorteado es: ${ganador} 🎉`;
    botonJuegoNuevo.disabled = false; // Habilita el botón "Juego nuevo" después de un sorteo
    // Deshabilita los botones de "Añadir" y "Sortear"
    botonAgregarNombre.disabled = true;
    botonSortearNombre.disabled = true;
  } else { 
    alert("Por favor, agrega al menos un nombre para sortear.");
  } 
}


//esta funcion me ayuda a reiniciar el juego 
function reinciarjuego() {
nombreUsuarios = [];
nombresLista.innerHTML = "";
nombreSorteado.textContent = "";
botonAgregarNombre.disabled = false;
botonSortearNombre.disabled = false;
botonJuegoNuevo.disabled = true;
nombreInput.focus();

}

//Esta funcion me va a permitir no agregar numeros al input
/*function validarInput() {
  let valor = nombreInput.value;
  valor = valor.replace(/[^a-zA-Z\s]/g, ''); // Elimina cualquier caracter que no sea una letra o espacio
  nombreInput.value = valor;

  if (valor.trim() === "") {
    alert("Por favor, ingresa solo letras");
    return false;
  }
  
}*/

//botonJuegoNuevo= document.getElementById("botonJuegoNuevo").removeAttribute("disabled"); // Habilita el botón "Jugar nuevamente" al finalizar el sorteo
//document.querySelector('#reiniciar').setAttribute('disabled','true');  

/*
function asignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
*/
