//creado por Alex CS
$(document).ready(function () {
  nuemeros = Math.floor(Math.random() * 100)

  
  $("#numeros").val(nuemeros)
  
});

function ejercicio5() {

  //token 01c278b5fa9010cd73dd1eef20283f8f5216325dcf5a3b2a5ddc0d8c1d5f5152

  //https://www.banxico.org.mx/SieAPIRest/service/v1/doc/consultaDatosSerieRango

  $("#jsGrid").jsGrid({
    height: "auto",
    width: "100%",
 
    sorting: true,
    paging: false,
    autoload: true,
 
    controller: {
        loadData: function() {
            var d = $.Deferred();
 
            $.ajax({
              url:  "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP74665,SF61745,SF60634,SF43773/datos/oportuno?token=6e3bd0938be9fff6e4f4811b7b413d111f96a8c9a0ae60abef4029b681e9b8a9",
              dataType: "json"
            }).done(function(response) {
                d.resolve(response.series);
            }).fail( function() {
              Swal.fire(data.messages);
          });
 
            return d.promise();
        }
    },
 
    fields: [
        { name: "idSerie", type: "text" },
        { name: "titulo", type: "textarea", width: 150 },
        { name: "datos", type: "number", width: 50, align: "center",
            itemTemplate: function(value) {
                return $("<div>").addClass("rating").append(Array(value + 1).join("&#9733;"));
            }
        },
        { name: "Price", type: "number", width: 50,
            itemTemplate: function(value) {
                return value.toFixed(2) + "$"; }
        }
    ]
});
  
}
