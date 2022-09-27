 document.querySelector('#agregar').addEventListener('click', agregar);

const aNuevoCamion = [];

function agregar(){


nCartaPorte = document.getElementById('CP').value;   
nKilos = document.querySelector("#kilos").value;
nHumedad = document.getElementById('humedad').value;
nMerma = document.getElementById('TotalMermaKilos').innerText;
nKilosNeto = document.getElementById('KilosNetos').innerText;
aNuevoCamion.push({nCartaPorte, nKilos, nHumedad, nMerma, nKilosNeto}); 
console.log (aNuevoCamion)
/* console.log (nCartaPorte, nKilos, nHumedad, nMerma, nKilosNeto);   */
const tablaCamiones = document.getElementById('listadoCamiones');

let fila = tablaCamiones.insertRow(0+1);
let celda1 = fila.insertCell(0);
let celda2 = fila.insertCell(1);
let celda3 = fila.insertCell(2);
let celda4 = fila.insertCell(3);
let celda5 = fila.insertCell(4);
let celda6 = fila.insertCell(5);

celda1.innerHTML = nCartaPorte;
celda2.innerHTML = nKilos;
celda3.innerHTML = nHumedad;
celda4.innerHTML = nMerma;
celda5.innerHTML = nKilosNeto;
celda6.innerHTML = ('<img src="IMG/remove.png" width="20px" height="20px" id="borrarRegistro"> </img>');

document.querySelector('#borrarRegistro').addEventListener('click', confirmacion);

}
function confirmacion() {
    let resultado = window.confirm ("Esta seguro que quiere eliminar este registro");
    if (resultado===true ){
        eliminar()
    }

}
function eliminar() {

const indice = aNuevoCamion.indexOf();

if (indice ==-1) {
    aNuevoCamion.splice(indice,1);
    console.log (indice);
    console.log (aNuevoCamion);
    document.getElementById('listadoCamiones').deleteRow(1);
}

}
     



