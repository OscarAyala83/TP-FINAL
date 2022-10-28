let MKilo;
document.getElementById('form')
   .addEventListener('submit', function (e) {
      e.preventDefault();
      datos();
      if (cereal === 'soja') {
         humedadSoja();
      }
      if (cereal === 'trigo') {
         humedadTrigo();
      } else {
         if (cereal === 'maiz') {
            humedadMaiz();
         }
      }

      function humedadSoja() {

         if (humedadselec < 13.6) {

            Swal.fire({
               icon: 'error',
               title: 'Este camion se encuentra dentro de la tolerancia admitida - Ingrese un valor entre 13.6 - 25'
            })
         } else if (humedadselec > 25) {
            Swal.fire({
               icon: 'error',
               title: 'Este camion supera el maximo permitido de humedad.'
            })
         }
         if (volatil.checked == true) {
            mermaVolatil = 0.50;
            calculoSoja();
         } else {
            mermaVolatil = 0;
            calculoSoja();
         }
      }

      function calculoSoja() {

         fetch('cereales.json')
            .then((res) => res.json())
            .then((data) => {
               let bus = data.find(elemento => elemento.humedadsoja == humedadselec);
               const merma = bus.rebajasoja;
               MermManipuleo = 0.25 + mermaVolatil;
               Porcentaje.textContent = merma;
               MKilos = (Math.ceil(kilos * merma) / 100);
               porcentajes()
            })
      }
   })

function humedadTrigo() {

   if (humedadselec < 14.10) {

      Swal.fire({
         icon: 'error',
         title: 'Este camion se encuentra dentro de la tolerancia admitida Ingrese un valor entre 14.10 - 25'
      })
   } else if (humedadselec > 25) {
      Swal.fire({
         icon: 'error',
         title: 'Este camion supera el maximo permitido de humedad.'
      })
   }
   if (volatil.checked == true) {
      mermaVolatil = 0.30;
      calculoTrigo();
   } else {
      mermaVolatil = 0;
      calculoTrigo();
   }
}
function calculoTrigo() {
   datos();
   fetch('cereales.json')
      .then((res) => res.json())
      .then((data) => {
         let bus = data.find(elemento => elemento.humedadtrigo == humedadselec);
         const merma = bus.rebajatrigo;
         Porcentaje.textContent = merma;
         MKilos = (Math.ceil(kilos * merma) / 100);
         MermManipuleo = 0.10 + mermaVolatil;
         porcentajes();
      }
      )
}
function humedadMaiz() {

   if (humedadselec < 14.6) {

      Swal.fire({
         icon: 'error',
         title: 'Este camion se encuentra dentro de la tolerancia admitida - Ingrese un valor entre 14.6 - 25'
      })
   } else if (humedadselec > 25) {
      Swal.fire({
         icon: 'error',
         title: 'Este camion supera el maximo permitido de humedad.'
      })
   }
   if (volatil.checked == true) {
      mermaVolatil = 0.30;
      calculoMaiz();
   } else {
      mermaVolatil = 0;
      calculoMaiz();
   }
}
function calculoMaiz() {
   datos();
   fetch('cereales.json')
      .then((res) => res.json())
      .then((data) => {
         let bus = data.find(elemento => elemento.humedadmaiz == humedadselec);
         const merma = bus.rebajamaiz;
         Porcentaje.textContent = merma;
         MKilos = (Math.ceil(kilos * merma) / 100);
         MermManipuleo = 0.25 + mermaVolatil;
         porcentajes();
      }
      )
}
function datos() {
   volatil = document.getElementById('volatil');
   kilos = document.querySelector("#kilos").value;
   humedadselec = document.getElementById('humedad').value;
   cereal = document.querySelector("#cereales").value;
}

function porcentajes() {
   MermaKilos.textContent = MKilos;
   MermaManipuleo.textContent = MermManipuleo;
   KManipuleo = (kilos * MermManipuleo) / 100;
   KilosManipuleo.textContent = KManipuleo;
   TMermaKilos = (MKilos + KManipuleo);
   TotalMermaKilos.textContent = TMermaKilos;
   KilosNetos.textContent = Math.ceil(kilos - TMermaKilos);
   KNetos = Math.ceil(kilos - TMermaKilos);
   nMerma = document.getElementById('TotalMermaKilos').innerHTML;

}