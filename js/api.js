
  moment.locale("es");
  const fecha = moment().subtract(1, 'days').format('YYYY-MM-DD');  
  const fechaActual = moment().format('YYYY-MM-DD');
  console.log(fecha) 
  window.onload = function () {
    TSComponents.Card.render('trigo', {
        serieId: '369.2_TRIGOIGO__5',
        color: '#F9A822',
        title: "Embarques de TRIGO",
        links: "none",
        apiBaseUrl: 'http://apis.datos.gob.ar/series/api'
    })

    TSComponents.Card.render('soja', {
        serieId: '369.2_POROTO_SOJOJA__11',
        color: '#6EA100',
        explicitSign: true,
        title: "Embarques de Poroto de SOJA",
        links: "none",
        apiBaseUrl: 'http://apis.datos.gob.ar/series/api'
    })

    TSComponents.Card.render('maiz', {
        serieId: '369.3_MAIZAIZ__4',
        color: '#f1dd50',
        explicitSign: true,
        title: "Embarques de MAIZ",
        links: "none",
        apiBaseUrl: 'http://apis.datos.gob.ar/series/api'
    })

    TSComponents.Card.render('embarques', {
        serieId: '369.3_TOTALTAL__5',
        color: '#f1dd50',
        explicitSign: true,
        title: "Embarques de Total",
        links: "none",
        apiBaseUrl: 'http://apis.datos.gob.ar/series/api'
    })
}

const urlsoja = `https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=21&fechaConcertacionDesde=${fecha}&fechaConcertacionHasta=${fecha}&page=2`;
const urltrigo = `https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=1&fechaConcertacionDesde=${fecha}&fechaConcertacionHasta=${fecha}&page=2`;
const urlmaiz =`https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=2&fechaConcertacionDesde=${fecha}&fechaConcertacionHasta=${fecha}&page=2`
const urldivisas = `https://api.bcr.com.ar/gix/v1.0/Cotizacion?page=1`


fetch(urlsoja, {
  method: "GET",
 headers: {"Content-Type": "application/json", 
      "api_key": "....",
      "secret": "...",
      "Authorization": '.....'
  }
})
 
  .then((res) => res.json())
  .then((datos) => {
      console.log(datos);
      let piz = datos.data;
      console.log(piz);

      for (const {nombre_Grano: nombreGrano, precio_Cotizacion: precioOperacion, precio_Dolar: precioDolar } of piz ) 
  
  new gridjs. Grid({
    columns: ["Fecha de Cotizacion", "Cereal", "Precio de Cotizacion","Precio en Dolares" ],
    data: [
      [`${fecha}`, `${nombreGrano}`, `${precioOperacion}`, `${precioDolar.toFixed(2)}`],
     
    ],
    style: {
      table: {
        border: '3px solid #ccc'
      },
      th: {
        'background-color': '#009879',
        'font-weight': 'bold',
        'color': '#ffffff', 
        'border-bottom': '3px solid #ccc',
        'text-align': 'center',
        
      },
      td: {
        'text-align': 'center',
        'font-weight': 'bold',
        'color':'black'
      }
    },
    width: 625,
    resizable: true
  }). render(document. getElementById("sojaCotizacion"));  
  
  })
  fetch(urltrigo, {
    method: "GET",
   headers: {"Content-Type": "application/json", 
        "api_key": "....",
        "secret": "....",
        "Authorization": '.....'
    }
})
   
    .then((res) => res.json())
    .then((datos) => {
        console.log(datos);
        let piz = datos.data;
        console.log(piz);

        for (const {nombre_Grano: nombreGrano, precio_Cotizacion: precioOperacion, precio_Dolar: precioDolar } of piz ) 
    
    new gridjs. Grid({
      columns: ["Fecha de Cotizacion", "Cereal", "Precio de Cotizacion","Precio en Dolares" ],
      data: [
        [`${fecha}`, `${nombreGrano}`, `${precioOperacion}`, `${precioDolar.toFixed(2)}`],
       
      ],
      style: {
        table: {
          border: '3px solid #ccc'
        },
        th: {
          'background-color': '#009879',
          'font-weight': 'bold',
          'color': '#ffffff', 
          'border-bottom': '3px solid #ccc',
          'text-align': 'center',
          
        },
        td: {
          'text-align': 'center',
          'font-weight': 'bold',
          'color':'black'
        }
      },
      width: 625,
      resizable: true
    }). render(document. getElementById("trigoCotizacion"));  
    
    })        
    
    fetch(urlmaiz, {
      method: "GET",
     headers: {"Content-Type": "application/json", 
          "api_key": "...",
          "secret": "a.....",
          "Authorization": '.....'
      }
  })
     
      .then((res) => res.json())
      .then((datos) => {
          console.log(datos);
          let piz = datos.data;
          console.log(piz);
  
          for (const {nombre_Grano: nombreGrano, precio_Cotizacion: precioOperacion, precio_Dolar: precioDolar } of piz ) 
      
      new gridjs. Grid({
        columns: ["Fecha de Cotizacion", "Cereal", "Precio de Cotizacion","Precio en Dolares" ],
        data: [
          [`${fecha}`, `${nombreGrano}`, `${precioOperacion}`, `${precioDolar.toFixed(2)}`],
         
        ],
        style: {
          table: {
            border: '3px solid #ccc'
          },
          th: {
            'background-color': '#009879',
            'font-weight': 'bold',
            'color': '#ffffff', 
            'border-bottom': '3px solid #ccc',
            'text-align': 'center',
            
          },
          td: {
            'text-align': 'center',
            'font-weight': 'bold',
            'color':'black'
          }
        },
        width: 625,
        resizable: true
      }). render(document. getElementById("maizCotizacion"));  
      
      })

      fetch(urldivisas, {
        method: "GET",
       headers: {"Content-Type": "application/json", 
            "api_key": "....3",
            "secret": ".....",
            "Authorization": '....'
        }
    })
       
        .then((res) => res.json())
        .then((datos) => {
            console.log(datos);
            let piz = datos.data;
            console.log(piz);
    
            for (const {cotizacionCompraDivisas: cotizacionCompraDivisas, cotizacionVentaDivisas: cotizacionVentaDivisas} of piz ) 
        
        new gridjs. Grid({
          columns: ["Fecha de Cotizacion Divisa", "Tipo de Cambio BNA Comprador", "Tipo de Cambio BNA Vendedor"],
          data: [
            [`${fechaActual}`, `${cotizacionCompraDivisas}`, `${cotizacionVentaDivisas}`],
           
          ],
          style: {
            table: {
              border: '3px solid #ccc'
            },
            th: {
              'background-color': '#009879',
              'font-weight': 'bold',
              'color': '#ffffff', 
              'border-bottom': '3px solid #ccc',
              'text-align': 'center',
              
            },
            td: {
              'text-align': 'center',
              'font-weight': 'bold',
              'color':'black'
            }
          },
          width: 785,
          resizable: true
        }). render(document. getElementById("cotizacionDivisas"));  
        
        })
