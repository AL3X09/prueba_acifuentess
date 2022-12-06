//creado por Alex CS
$(document).ready(function () {
  nuemeros = Math.floor(Math.random() * 100)

  
  $("#numeros").val(nuemeros)
  
});

function ejercicio3() {

  $.ajax({
    url: base_url + '/api/prueba/e3',
    method: 'POST',
    data: $("#farreglo").serialize(),
    beforeSend: function () {
    },
    success: function (data) {

      if (data.status == '200') {
        $.each(data.data, function (k, v) {

        });

      } else {
        Swal.fire(data.messages);
      }
    },
    error: function (data) {
      Swal.fire('Error al conectar con el controlador');
    }

  });
  
}
