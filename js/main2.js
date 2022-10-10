document.querySelector('#agregar').addEventListener('click', agregar);
<<<<<<< HEAD
document.querySelector('#borrar').addEventListener('click', borrarRegistro)
window.addEventListener("load", registro) 
    
let aNuevoCamion = [];


function agregar() {
=======
document.querySelector('#historial').addEventListener('click', registro)
document.querySelector('#borrar').addEventListener('click', borrarRegistro)
const aNuevoCamion = [];


function agregar() {


>>>>>>> 947a20b664af38fe5a68329734ee5f0a164f9272
    CartaPorte = document.getElementById('CP').value;
    Kilos = document.querySelector("#kilos").value;
    Humedad = document.getElementById('humedad').value;
    Merma = document.getElementById('TotalMermaKilos').innerText;
    KilosNeto = document.getElementById('KilosNetos').innerText;
<<<<<<< HEAD
    aNuevoCamion.push({ CartaPorte, Kilos, Humedad, Merma, KilosNeto });
    localStorage.setItem('lista', JSON.stringify(aNuevoCamion));

=======




    aNuevoCamion.push({ CartaPorte, Kilos, Humedad, Merma, KilosNeto });

    localStorage.setItem('lista', JSON.stringify(aNuevoCamion));


>>>>>>> 947a20b664af38fe5a68329734ee5f0a164f9272
    const tablaCamiones = document.getElementById('listadoCamiones');

    let fila = tablaCamiones.insertRow(0 + 1);
    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);
    let celda5 = fila.insertCell(4);
    let celda6 = fila.insertCell(5);

    celda1.innerHTML = CartaPorte;
    celda2.innerHTML = Kilos;
    celda3.innerHTML = Humedad;
    celda4.innerHTML = Merma;
    celda5.innerHTML = KilosNeto;
    celda6.innerHTML = ('<img src="IMG/remove.png" width="20px" height="20px" id="borrarRegistro"> </img>');

<<<<<<< HEAD
    document.querySelector('#borrarRegistro').addEventListener('click', confirmacion);
  
}

function registro() {
    if (localStorage.getItem('lista') !== null) {
        aNuevoCamion = JSON.parse(localStorage.getItem('lista'));
    } 
    if (aNuevoCamion.length > 0){
       
        const tablaCamiones = document.getElementById('listadoCamiones');
        aNuevoCamion.forEach(({CartaPorte, Kilos, Humedad, Merma, KilosNeto}) => {
            let fila = tablaCamiones.insertRow(0 + 1);
            let celda1 = fila.insertCell(0);
            let celda2 = fila.insertCell(1);
            let celda3 = fila.insertCell(2);
            let celda4 = fila.insertCell(3);
            let celda5 = fila.insertCell(4);
            let celda6 = fila.insertCell(5);
            celda1.innerHTML = CartaPorte;
            celda2.innerHTML = Kilos;
            celda3.innerHTML = Humedad;
            celda4.innerHTML = Merma;
            celda5.innerHTML = KilosNeto;
            celda6.innerHTML = ('<img src="IMG/remove.png" width="20px" height="20px" id="borrarRegistro"> </img>');    
        })
        const newButtons = document.querySelectorAll('#borrarRegistro')
        newButtons.forEach((button) => {
            button.addEventListener('click', confirmacion);
        })
    }  

}
=======


    document.querySelector('#borrarRegistro').addEventListener('click', confirmacion);

}


function registro() {

    let ls = localStorage.getItem('lista');
    console.log(ls)
    if (localStorage.getItem('lista') === null) {
        alert("El Historial esta vacio")
    } else {

        for (let local in ls) {

            alert(ls);
            break;
        }

    }


}


>>>>>>> 947a20b664af38fe5a68329734ee5f0a164f9272
function confirmacion() {
    let resultado = window.confirm("Esta seguro que quiere eliminar este registro");
    if (resultado === true) {
        eliminar()
<<<<<<< HEAD
    }

}
function eliminar() { 
    let indice = aNuevoCamion.indexOf();
    if (indice == -1) {
        aNuevoCamion.splice(indice, 1);
        document.getElementById('listadoCamiones').deleteRow(indice);
        localStorage.setItem('lista', JSON.stringify(aNuevoCamion))
    }
    }

    function borrarRegistro() {
=======

    }

}
function eliminar() {

    let indice = aNuevoCamion.indexOf();
    if (indice == -1) {
        aNuevoCamion.splice(indice, 1);
        document.getElementById('listadoCamiones').deleteRow(1);

    }

}
function borrarRegistro() {
>>>>>>> 947a20b664af38fe5a68329734ee5f0a164f9272
    let resultado = window.confirm("Esta seguro que quiere eliminar el historial");
    if (resultado === true) {
        localStorage.clear()

    }
}


