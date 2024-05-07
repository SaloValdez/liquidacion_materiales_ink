$(document).ready(function(){
    listarUltimoEmpleado();
    alert('hola');
});





function listarUltimoEmpleado(){
    $.ajax({  
        type:"POST",
        url:"./controller/materiales.controller.php",
        success:function(r){
            datos=jQuery.parseJSON(r);

            console.log(datos);
            // resp = datos['resp'];
            // if (resp == 0){
            //   $('#fechaUltimoRegistroSubcategoria').text('No existe registros');
            //   $(".detalle-ultimo-registro").remove();
            // }else{
            //   // console.log(datos[1]['arrayEmpleado']['nombre_empleado']);
            //     $('#fechaUltimoRegistroEmpleado').text(datos['fecha']+ ' ('+ datos['hora'] +')');
            //     $('#nombresUltimoRegistro').text(datos[0]['arrayRegistro']['nombre_empleado']+ ' '+ datos[0]['arrayRegistro']['apellido_empleado']);
            //     $('#nombresPorUltimoRegistro').text(datos[1]['arrayEmpleado']['nombre_empleado']+ ' '+ datos[1]['arrayEmpleado']['apellido_empleado']);
            // }
        }
      });
  }