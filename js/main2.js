document.querySelector('#agregar').addEventListener('click', agregar);
window.addEventListener("load", registro)



let aNuevoCamion = [];


function agregar() {
    CartaPorte = document.getElementById('CP').value;
    Kilos = document.querySelector("#kilos").value;
    Humedad = document.getElementById('humedad').value;
    Merma = document.getElementById('TotalMermaKilos').innerText;
    KilosNeto = document.getElementById('KilosNetos').innerText;
    const cereal = document.querySelector("#cereales").value;
    aNuevoCamion.push({ cereal, CartaPorte, Kilos, Humedad, Merma, KilosNeto });

    localStorage.setItem('lista', JSON.stringify(aNuevoCamion));

    const tablaCamiones = document.getElementById('listadoCamiones');
    let fila = tablaCamiones.insertRow(0 + 1);
    let celda0 = fila.insertCell(0);
    let celda1 = fila.insertCell(1);
    let celda2 = fila.insertCell(2);
    let celda3 = fila.insertCell(3);
    let celda4 = fila.insertCell(4);
    let celda5 = fila.insertCell(5);
    let celda6 = fila.insertCell(6);


    celda0.innerHTML = cereal;
    celda1.innerHTML = CartaPorte;
    celda2.innerHTML = Kilos;
    celda3.innerHTML = Humedad;
    celda4.innerHTML = Merma;
    celda5.innerHTML = KilosNeto;
    celda6.innerHTML = ('<img src="IMG/remove.png" width="20px" height="20px" id="borrarRegistro"> </img>');
    document.querySelector('#borrarRegistro').addEventListener('click', confirmacion);
}

function registro() {

    if (localStorage.getItem('lista') !== null) {
        aNuevoCamion = JSON.parse(localStorage.getItem('lista'));
    }
    if (aNuevoCamion.length > 0) {
        const tablaCamiones = document.getElementById('listadoCamiones');
        aNuevoCamion.forEach(({ cereal, CartaPorte, Kilos, Humedad, Merma, KilosNeto }) => {
            let fila = tablaCamiones.insertRow(0 + 1);
            let celda0 = fila.insertCell(0);
            let celda1 = fila.insertCell(1);
            let celda2 = fila.insertCell(2);
            let celda3 = fila.insertCell(3);
            let celda4 = fila.insertCell(4);
            let celda5 = fila.insertCell(5);
            let celda6 = fila.insertCell(6);

            celda0.innerHTML = cereal;
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
function confirmacion() {
    Swal.fire({
        title: 'Esta seguro que quiere eliminar este registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        heightAuto: 'true'

    }).then((result) => {
        if (result.isConfirmed) {
            eliminar()
            Swal.fire(
                'Elminado!',
                'El registro ha sido eliminado.',
                'success',

            )
        }
    })
}
function eliminar() {
    let indice = aNuevoCamion.indexOf();
    if (indice == -1) {
        aNuevoCamion.splice(indice, 1);
        document.getElementById('listadoCamiones').deleteRow(indice);
        localStorage.setItem('lista', JSON.stringify(aNuevoCamion))
    }
}
function tabla() {
    const tablaCamiones = document.getElementById('listadoCamiones');
    let fila = tablaCamiones.insertRow(0 + 1);
    let celda0 = fila.insertCell(0);
    let celda1 = fila.insertCell(1);
    let celda2 = fila.insertCell(2);
    let celda3 = fila.insertCell(3);
    let celda4 = fila.insertCell(4);
    let celda5 = fila.insertCell(5);
    let celda6 = fila.insertCell(6);

    celda0.innerHTML = cereal;
    celda1.innerHTML = CartaPorte;
    celda2.innerHTML = Kilos;
    celda3.innerHTML = Humedad;
    celda4.innerHTML = Merma;
    celda5.innerHTML = KilosNeto;
    celda6.innerHTML = ('<img src="IMG/remove.png" width="20px" height="20px" id="borrarRegistro"> </img>');
}

