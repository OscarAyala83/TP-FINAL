
const soja = [
   { humedad: 13.6, rebaja: 0.69 }, { humedad: 17.5, rebaja: 5.17 }, { humedad: 21.4, rebaja: 9.66 },
   { humedad: 13.7, rebaja: 0.80 }, { humedad: 17.6, rebaja: 5.29 }, { humedad: 21.5, rebaja: 9.77 },
   { humedad: 13.8, rebaja: 0.92 }, { humedad: 17.7, rebaja: 5.40 }, { humedad: 21.6, rebaja: 9.89 },
   { humedad: 13.9, rebaja: 1.03 }, { humedad: 17.8, rebaja: 5.52 }, { humedad: 21.7, rebaja: 10.00 },
   { humedad: 14.0, rebaja: 1.15 }, { humedad: 17.9, rebaja: 5.63 }, { humedad: 21.8, rebaja: 10.11 },
   { humedad: 14.1, rebaja: 1.26 }, { humedad: 18.0, rebaja: 5.75 }, { humedad: 21.9, rebaja: 10.23 },
   { humedad: 14.2, rebaja: 1.38 }, { humedad: 18.1, rebaja: 5.86 }, { humedad: 22.0, rebaja: 10.34 },
   { humedad: 14.3, rebaja: 1.49 }, { humedad: 18.2, rebaja: 5.98 }, { humedad: 22.1, rebaja: 10.46 },
   { humedad: 14.4, rebaja: 1.61 }, { humedad: 18.3, rebaja: 6.09 }, { humedad: 22.2, rebaja: 10.57 },
   { humedad: 14.5, rebaja: 1.72 }, { humedad: 18.4, rebaja: 6.21 }, { humedad: 22.3, rebaja: 10.69 },
   { humedad: 14.6, rebaja: 1.84 }, { humedad: 18.5, rebaja: 6.32 }, { humedad: 22.4, rebaja: 10.80 },
   { humedad: 14.7, rebaja: 1.95 }, { humedad: 18.6, rebaja: 6.44 }, { humedad: 22.5, rebaja: 10.92 },
   { humedad: 14.8, rebaja: 2.07 }, { humedad: 18.7, rebaja: 6.55 }, { humedad: 22.6, rebaja: 11.03 },
   { humedad: 14.9, rebaja: 2.18 }, { humedad: 18.8, rebaja: 6.67 }, { humedad: 22.7, rebaja: 11.15 },
   { humedad: 15.0, rebaja: 2.30 }, { humedad: 18.9, rebaja: 6.78 }, { humedad: 22.8, rebaja: 11.26 },
   { humedad: 15.1, rebaja: 2.41 }, { humedad: 19.0, rebaja: 6.90 }, { humedad: 22.9, rebaja: 11.38 },
   { humedad: 15.2, rebaja: 2.53 }, { humedad: 19.1, rebaja: 7.01 }, { humedad: 23.0, rebaja: 11.49 },
   { humedad: 15.3, rebaja: 2.64 }, { humedad: 19.2, rebaja: 7.13 }, { humedad: 23.1, rebaja: 11.61 },
   { humedad: 15.4, rebaja: 2.76 }, { humedad: 19.3, rebaja: 7.24 }, { humedad: 23.2, rebaja: 11.72 },
   { humedad: 15.5, rebaja: 2.87 }, { humedad: 19.4, rebaja: 7.36 }, { humedad: 23.3, rebaja: 11.84 },
   { humedad: 15.6, rebaja: 2.99 }, { humedad: 19.5, rebaja: 7.47 }, { humedad: 23.4, rebaja: 11.95 },
   { humedad: 15.7, rebaja: 3.10 }, { humedad: 19.6, rebaja: 7.59 }, { humedad: 23.5, rebaja: 12.07 },
   { humedad: 15.8, rebaja: 3.22 }, { humedad: 19.7, rebaja: 7.70 }, { humedad: 23.6, rebaja: 12.18 },
   { humedad: 15.9, rebaja: 3.33 }, { humedad: 19.8, rebaja: 7.82 }, { humedad: 23.7, rebaja: 12.30 },
   { humedad: 16.0, rebaja: 3.45 }, { humedad: 19.9, rebaja: 7.93 }, { humedad: 23.8, rebaja: 12.41 },
   { humedad: 16.1, rebaja: 3.56 }, { humedad: 20.0, rebaja: 8.05 }, { humedad: 23.9, rebaja: 12.53 },
   { humedad: 16.2, rebaja: 3.68 }, { humedad: 20.1, rebaja: 8.16 }, { humedad: 24.0, rebaja: 12.64 },
   { humedad: 16.3, rebaja: 3.79 }, { humedad: 20.2, rebaja: 8.28 }, { humedad: 24.1, rebaja: 12.76 },
   { humedad: 16.4, rebaja: 3.91 }, { humedad: 20.3, rebaja: 8.39 }, { humedad: 24.2, rebaja: 12.87 },
   { humedad: 16.5, rebaja: 4.02 }, { humedad: 20.4, rebaja: 8.51 }, { humedad: 24.3, rebaja: 12.99 },
   { humedad: 16.6, rebaja: 4.14 }, { humedad: 20.5, rebaja: 8.62 }, { humedad: 24.4, rebaja: 13.10 },
   { humedad: 16.7, rebaja: 4.25 }, { humedad: 20.6, rebaja: 8.74 }, { humedad: 24.5, rebaja: 13.22 },
   { humedad: 16.8, rebaja: 4.37 }, { humedad: 20.7, rebaja: 8.85 }, { humedad: 24.6, rebaja: 13.33 },
   { humedad: 16.9, rebaja: 4.48 }, { humedad: 20.8, rebaja: 8.97 }, { humedad: 24.7, rebaja: 13.45 },
   { humedad: 17.0, rebaja: 4.60 }, { humedad: 20.9, rebaja: 9.08 }, { humedad: 24.8, rebaja: 13.56 },
   { humedad: 17.1, rebaja: 4.71 }, { humedad: 21.0, rebaja: 9.20 }, { humedad: 24.9, rebaja: 13.68 },
   { humedad: 17.2, rebaja: 4.83 }, { humedad: 21.1, rebaja: 9.31 }, { humedad: 25.0, rebaja: 13.79 },
   { humedad: 17.3, rebaja: 4.94 }, { humedad: 21.2, rebaja: 9.43 },
   { humedad: 17.4, rebaja: 5.06 }, { humedad: 21.3, rebaja: 9.54 }

];


document.getElementById('form')
   .addEventListener('submit', function (e) {
      e.preventDefault();


      const volatil = document.getElementById('volatil');
      const kilos = document.querySelector("#kilos").value;
      const humedadselec = document.getElementById('humedad').value;
<<<<<<< HEAD
      
      if (humedadselec < 13.6) {
         alert("Este camion no tiene humedad. Por favor ingrese un valor superior a 13.5")
      } else if (humedadselec > 25) {
         alert("Este camion supuera el maximo permitido de Humedad")
      }
      if (volatil.checked == true) {
         mermaVolatil = 0.50;
         calculo();
      } else {
         mermaVolatil = 0;
         calculo();
      }

=======


      if (humedadselec < 13.6) {
         alert("Este camion no tiene humedad. Por favor ingrese un valor superior a 13.5")
      } else if (humedadselec > 25) {
         alert("Este camion supuera el maximo permitido de Humedad")
      }
      if (volatil.checked == true) {
         mermaVolatil = 0.50;
         calculo();
      } else {
         mermaVolatil = 0;
         calculo();
      }

>>>>>>> 947a20b664af38fe5a68329734ee5f0a164f9272
      function calculo() {
         const bus = soja.find(elemento => elemento.humedad == humedadselec);
         const merma = bus.rebaja;

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
