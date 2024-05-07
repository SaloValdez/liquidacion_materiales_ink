


$(document).ready(function(){
    listar();
});





function listar(){
    $.ajax({  
        type:"POST",
        url:"./controller/materiales.controller.php",   
        success:function(r){
            datos=jQuery.parseJSON(r);
            resp = datos['arrayMateriales'];
            console.log(resp);

            let modeloTabla = '<table>';
            modeloTabla = modeloTabla + '<tr><th>SAP</th><th>DESCRIPCION</th><th>NOMBRE</th></tr>';
            resp.forEach(p => {
                modeloTabla = modeloTabla + '<tr>';
                modeloTabla = modeloTabla + '<td>'+ p['sap_mat']+' </td>'
                modeloTabla = modeloTabla + '<td>'+ p['descripcion_mat']+' </td>'
                modeloTabla = modeloTabla + '<td>'+ p['nombre_mat']+' </td>'
                
                
                modeloTabla = modeloTabla + '</tr>'
                
            });

            modeloTabla = modeloTabla + '</table>';


            document.getElementById('contenedor__tabla').innerHTML= modeloTabla;

         
          
           
        }
      });
  }