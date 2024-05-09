
$(document).ready(function(){
    listarMaterial();
    insertarMateriales();

    
});


function listarMaterial(){
    $.ajax({  
        type:"POST",
        data: {tipoOperacion:'read'},
        url:"./controller/materialesController.php",   
        success:function(r){
            datos=jQuery.parseJSON(r);
            resp = datos['arrayMateriales'];
            console.log(resp);

            let modeloTabla = '<table>';
            modeloTabla = modeloTabla + '<tr><th>Cod. Sap</th><th>Descripción</th><th>Nombre Material</th> <th colspan="2">Acción</th></tr>';
            resp.forEach(p => {
                modeloTabla = modeloTabla + '<tr>';
                modeloTabla = modeloTabla + '<td>'+ p['sap_mat']+' </td>'
                modeloTabla = modeloTabla + '<td>'+ p['descripcion_mat']+' </td>'
                modeloTabla = modeloTabla + '<td>'+ p['nombre_mat']+' </td>'
                modeloTabla = modeloTabla + '<td><a  class="btnOff btnTabla" onclick="eliminarMateriales('+ p['id_mat']+');" href="#">Eliminar</a> </td>'
                modeloTabla = modeloTabla + '<td><a  class="btnOn btnTabla" onclick="mostrarIdMateriales('+ p['id_mat']+');" href="#">Ver</a> </td>'
         
                modeloTabla = modeloTabla + '</tr>'
                
            });

            modeloTabla = modeloTabla + '</table>';


            document.getElementById('contenedor__tabla').innerHTML= modeloTabla;

        }
      });
  }

  function insertarMateriales(){
        $('#btnGuardarMaterial').click(function(){
    
                  caja1 =   $("#txtCodSap").val();
                  caja2 =   $("#txtDescripcionMaterial").val();
                  caja3 =   $("#txtNombreMaterial").val();
    
                if (caja1.length < 1 || caja2.length < 1 ||caja3.length < 1) {   
                    alert("cmapos vacios");
                }else {
                 
                  datos=$('#formMateriales').serialize(); 

                // datos = new FormData($('#formMateriales')[0]);
                //   console.log(datos);

                //   return false
                    $.ajax({
                      type:"POST",
                      data: {tipoOperacion:'insert',varDatos:datos},
                      url:"./controller/materialescontroller.php",
                      success:function(r){
                        // console.log(r); 
                        datos  = jQuery.parseJSON(r);
                        var  respuesta = datos['resp'];
                        if (respuesta==1) {
                             alert('se inserto correctamente');
                            //  listarMaterial();
                            window.location.reload();

                        }else if(respuesta ==3){
                            alert('registro ya existe');
                        }else{
                            alert('comuniquese con admin');
                        }
                      }
                    });
                }
        });    
  }


  function eliminarMateriales(id){

              idMat = id;
              $.ajax({  
                type:"POST",
                data:{tipoOperacion:'readIdMaterial',idMaterial:idMat},
                url:"./controller/materialesController.php",  
                success:function(r){
                    datos=jQuery.parseJSON(r);
                    

                    console.log(r);
                    Swal.fire({
                      title: '¿Deseas eliminar a?',
                      text:datos['descripcion_mat'] ,
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: 'var(--colorpalet1)',
                      confirmButtonText: 'Si, Eliminar',
                      allowOutsideClick: false,
                      
                    }).then((result) => {
                      if (result.isConfirmed) {
                                      $.ajax({  
                                  type:"POST",
                                  data:{tipoOperacion:'delete',idMaterial:idMat},
                                  url:"./controller/materialesController.php",
                                  success:function(r){
                                      datos=jQuery.parseJSON(r);
                                      
                                            
                                              if(datos['resp']==1){
                                                Swal.fire(
                                                  'Correcto',
                                                
                                                  'Se elimino correctamente.',
                                                  'success'
                                                );
                                               
                                              
                                              }else{
                                                console.log(datos);
                                                Swal.fire(
                                                   
                                                  'Upps...',
                                                  'No se elimo registro',
                                                  'error'
                                                )
                                             
                                              }
                                              window.location.reload();
                                        }
                                      });
                      }
                    })
                }
              });
    
    }


    function mostrarIdMateriales(idMat){
        $.ajax({  
              type:"POST",
              data:{tipoOperacion:'readIdMaterial',idMaterial:idMat},
              url:"./controller/materialesController.php",
              success:function(r){
                    datos=jQuery.parseJSON(r);
                    $('#txtCodSap').val(datos['sap_mat']);
                    $('#txtDescripcionMaterial').val(datos['descripcion_mat']);
                    $('#txtNombreMaterial').val(datos['nombre_mat']);
                    $('#hideTxtMateriales').val(datos['id_mat']);
              }
            });
    }


    function actualizarMateriales(){
        $('#btnActualizarCategoriaProducto').click(function(){
          activarId();
          datos=$('#frmCategoriaProducto').serialize();
          caja1 =   $("#idCategoriaProducto").val();
          caja2 =   $("#detalleCategoriaProducto").val();
          // alert('actialuzar product');
    
          if(caja1.length<1 || caja2.length<1){
               errorToast("Error",'Los campos estan vacios.','');
                // return false;
          }else{
          
              $.ajax({
                  type:"POST",
                  data:datos,
                  url:"./views/requestController/categoria_producto/rc_actualizar_categoria_producto.php",
                  success:function(r){
                  datos=jQuery.parseJSON(r);
                    var res = datos['resp'];
                    console.log(res);
    
                    if(res==1){
                       successToast('Muy bien','Se actializo Correctamente.','','');
                       deshabilitar();
                    }else if(res==3) {
                      errorToast('Ups..','La categoria ya',' existe.');
                    }else{
                      errorToast('Ups..','Comuniquese con el administrador.','','');
                    }
                  }
              });
          }
        });
      }