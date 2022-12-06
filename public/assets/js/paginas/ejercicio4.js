//creado por Alex CS
$(document).ready(function () {
  var G1 = letra(10);
  var G2 = letra(10);
});

function letra(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


function ejercicio4() {

  $.ajax({
    url: base_url + '/api/prueba/e4',
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
