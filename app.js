let listaAmigos = [];

function ingresarDatos(elemento,texto) { 
    let ingresarDatosDOM=document.querySelector(elemento); 
    ingresarDatosDOM.innerHTML=texto; }
// conecto el js con el html 

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value; //aca capturo el nombre ingresado
    if (nombreIngresado.trim() === "") { // trim() quita espacios al inicio y fin{
        alert("Por favor ingrese un nombre");
        return;
     }
     listaAmigos.push(nombreIngresado.trim())
     mostrarListaAmigos(); // actualizar lista en pantalla
     document.getElementById('amigo').value = ""; // limpiar input
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar lista antes de actualizar
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if(listaAmigos.length <2){
        alert ('Se necesita mas de 2 nombres para sortear');
            return;
        
    }
    let indiceSorteo = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[indiceSorteo];
    listaAmigos.splice(indiceSorteo, 1);
    document.getElementById('resultado').innerHTML = `<li>${ganador}</li>`;
    mostrarListaAmigos(); // actualizar la lista de participantes
}
