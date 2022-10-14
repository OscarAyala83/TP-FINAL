document.getElementById('form')
   .addEventListener('submit', function (e) {
      e.preventDefault();
      datos();
      if (cereal === 'soja') {
        humedadSoja();
      } 
      if (cereal ==='trigo'){
         humedadTrigo();
      }
               
 function humedadSoja (){
      
      if (humedadselec < 13.6) {

         Swal.fire({
            icon: 'error',
            title: 'Este camion se encuentra dentro de la tolerancia admitida'
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
         const bus = soja.find(elemento => elemento.humedad == humedadselec);
         const merma = bus.rebaja;
         console.log (bus)
         Porcentaje.textContent = merma;
         MKilos = (Math.ceil(kilos * merma) / 100);
         MermaKilos.textContent = MKilos;
         MermManipuleo = 0.25 + mermaVolatil;
         MermaManipuleo.textContent = MermManipuleo;
         KManipuleo = (kilos * MermManipuleo) / 100;
         KilosManipuleo.textContent = KManipuleo;
         TMermaKilos = (MKilos + KManipuleo);
         TotalMermaKilos.textContent = TMermaKilos;
         KilosNetos.textContent = Math.ceil(kilos - TMermaKilos);
         KNetos = Math.ceil(kilos - TMermaKilos);
         nMerma = document.getElementById('TotalMermaKilos').innerHTML;

      }
 })
   
 function humedadTrigo() {

      if (humedadselec < 14.10) {

         Swal.fire({
            icon: 'error',
            title: 'Este camion se encuentra dentro de la tolerancia admitida'
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
      const buscar = trigo.find((elemento) => elemento.humedad == humedadselec);
      const mermatrigo = buscar.rebaja;
      Porcentaje.textContent = mermatrigo;
      MKilos = (Math.ceil(kilos * mermatrigo) / 100);
      MermaKilos.textContent = MKilos;
      MermManipuleo = 0.10 + mermaVolatil;
      MermaManipuleo.textContent = MermManipuleo;
      KManipuleo = (kilos * MermManipuleo) / 100;
      KilosManipuleo.textContent = KManipuleo;
      TMermaKilos = (MKilos + KManipuleo);
      TotalMermaKilos.textContent = TMermaKilos;
      KilosNetos.textContent = Math.ceil(kilos - TMermaKilos);
      KNetos = Math.ceil(kilos - TMermaKilos);
      nMerma = document.getElementById('TotalMermaKilos').innerHTML;

   }
   function datos (){
      volatil = document.getElementById('volatil');
      kilos = document.querySelector("#kilos").value;
      humedadselec = document.getElementById('humedad').value;
      cereal = document.querySelector("#cereales").value;
   }   

   
