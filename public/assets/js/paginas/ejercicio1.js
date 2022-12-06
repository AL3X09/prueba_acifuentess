//creado por Alex CS
$(document).ready(function () {
  
  
});

function ejercicio1() {

  console.log("Here");
  $.ajax({
    url: base_url + '/api/prueba/e1',
    method: 'POST',
    data: $("#fbisiesto").serialize(),
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
