const  myArray = [];
   
const container = document.getElementById("listaSerie");
let txtSerieOnt = document.querySelector('#inputSerie');

let txtSerieOntID = document.getElementById('inputSerie');

const btnEliminarSeriesOntHuawei = document.getElementById('eliminarSeriesOntHuawei');


const nuevoArray =[];
const arrayUnico=[];

$(document).ready(function(){
  
  listarMaterialLiquidacion(1);
     txtSerieOnt.addEventListener('focus',(e)=>{
        window.addEventListener("keydown",(teclado)=>{
         
          if(teclado.keyCode ===13){
                  valorCaja = txtSerieOnt.value;
                  myArray.push(valorCaja);

                  const nuevoArray = new Set(myArray);
                  const arrayUnico = [...nuevoArray];

                  if(arrayUnico.indexOf('') == -1){
                      console.log('no existe blanco');
                  }else{
                        console.log('si existe blancooo');
                    arrayUnico.splice(arrayUnico.indexOf(''),1);
                    console.table(arrayUnico);
                  }
                
                  container.innerHTML ="";
                  for (let i = 0; i < arrayUnico.length; i++) {
                            container.innerHTML +=`<div class="contListaSerie"   id="${i}">
                            <span>${i+1}</span>
                            <span>${arrayUnico[i]}</span>
                            <button id="eliminard3" onclick="eliminar(${i});">x</button>
                            </div>`;
                  }
                  txtSerieOnt.value="";
                  console.table(arrayUnico);
          }

        }) 
      })
      

});



btnEliminarSeriesOntHuawei.addEventListener('click',()=>{
  myArray.length=0;
  container.innerHTML='';
  document.getElementById("inputSerie").focus();
})



function eliminar(id){
        // console.log(myArray);

        myArray.splice(id,1);
        const nuevoArray = new Set(myArray);
        const arrayUnico = [...nuevoArray];

        if(arrayUnico.indexOf('') == -1){

        }else{
          arrayUnico.splice(arrayUnico.indexOf(''),1);
        
        }
        container.innerHTML ="";
        for (let i = 0; i < arrayUnico.length; i++) {
          container.innerHTML +=`<div class="contListaSerie"   id="${i}">
          <span>${i+1}</span>
          <span>${arrayUnico[i]}</span>
          <button id="eliminard3" onclick="eliminar(${i});">x</button>
          </div>`;
        }

         console.table(arrayUnico);
         document.getElementById("inputSerie").focus();
         console.log(arrayUnico);

}




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
            modeloTabla = modeloTabla + '<tr> <th>Cod. Sap</th> <th>Descripción</th> <th>Nombre Material</th><th>Tipo Mat.</th> <th>Medida Mat.</th> <th>Estado Mat.</th> <th>Usiario</th><th colspan="2">Acción</th>'
                                          '</tr>';
            resp.forEach(p => {
                modeloTabla = modeloTabla + '<tr>';
                    modeloTabla = modeloTabla + '<td>'+ p['sap_mat']+' </td>'
                    modeloTabla = modeloTabla + '<td>'+ p['descripcion_mat']+' </td>'
                    modeloTabla = modeloTabla + '<td>'+ p['nombre_mat']+' </td>'
                    
                    modeloTabla = modeloTabla + '<td>'+ p['tipo_mat']+' </td>'
                    modeloTabla = modeloTabla + '<td>'+ p['medida_mat']+' </td>'
                    modeloTabla = modeloTabla + '<td>'+ p['estado_mat']+' </td>'
                    modeloTabla = modeloTabla + '<td>'+ p['id_personal']+' </td>'
                    modeloTabla = modeloTabla + '<td><a  class="btnOff btnTabla" onclick="eliminarMateriales('+ p['id_mat']+');" href="#">Eliminar</a> </td>'
                    modeloTabla = modeloTabla + '<td><a  class="btn__succes btnTabla btntableSucces" onclick="mostrarIdMateriales('+ p['id_mat']+');" href="#">Ver</a> </td>'
         
                modeloTabla = modeloTabla + '</tr>'
                
            });

            modeloTabla = modeloTabla + '</table>';


            document.getElementById('contenedor__tabla').innerHTML= modeloTabla;

        }
  });
}

 
    function listarMaterialLiquidacion(estadoMat){
        $.ajax({  
              type:"POST",
              data:{tipoOperacion:'readMatLiquidacion',estadoMaterial:estadoMat},
              url:"./controller/liquidacionController.php",
              success:function(r){
                    datos=jQuery.parseJSON(r);
                    resp = datos['arrayMaterialesLiquidacion'];
                    // console.log(resp);
                    let modeloTabla='';
                    resp.forEach(p => {
                      modeloTabla = modeloTabla + '<div class="body">';
                          modeloTabla = modeloTabla + '<div class="filaBody col-lg-2  col-md-6 col-xs-12">'+ p['sap_mat']+'</div>'
                          modeloTabla = modeloTabla + ' <div class="filaBody col-lg-4  col-md-6 col-xs-12">'+ p['descripcion_mat']+'</div>'
                          modeloTabla = modeloTabla + '<div class="filaBody col-lg-2  col-md-6 col-xs-12">'+ p['nombre_mat']+'</div>'
                          modeloTabla = modeloTabla + '<div class="filaBody col-lg-2  col-md-6 col-xs-12"><input type="text" id="txtCant" value=""></div>'
                          modeloTabla = modeloTabla + '<div class="filaBody col-lg-2 col-md-6 col-xs-12">'+ p['medida_mat']+'</div>'
                          modeloTabla = modeloTabla + ' </div>';
                });
                  document.getElementById('contenedorMateriales').innerHTML = modeloTabla;
              }
            });
    }

    function generarLista(){
       
    }



    



    // function actualizarMateriales(){
    //     $('#btnActualizarMaterial').click(function(){
        
    //       dataForm=$('#formMateriales').serialize();
    //       caja1 =   $("#txtCodSap").val();
    //       caja2 =   $("#txtDescripcionMaterial").val();
    //       caja3 =   $("#txtNombreMaterial").val();

    //     if (caja1.length < 1 || caja2.length < 1 ||caja3.length < 1) {   
    //            errorToast("Error",'Los campos estan vacios.','');
    //             // return false;
    //       }else{
          
    //           $.ajax({
    //               type:"POST",
    //               data:{tipoOperacion:'update',datos:dataForm},
    //               url:"./controller/materialesController.php",
    //               success:function(r){
    //               // datos=jQuery.parseJSON(r);
    //                 console.log(r);
    //               //  return false;
    //                 var res = datos['resp'];
    //                 console.log(res);
    
    //                 if(res==1){
    //                    successToast('Muy bien','Se actializo Correctamente.','','');

    //                 }else if(res==3) {
    //                   errorToast('Ups..','La categoria ya',' existe.');
    //                 }else{
    //                   errorToast('Ups..','Comuniquese con el administrador.','','');
    //                 }
    //               }
    //           });
    //       }
    //     });
    //   }

    
  // function eliminarMateriales(id){

  //   idMat = id;
  //   $.ajax({  
  //     type:"POST",
  //     data:{tipoOperacion:'readIdMaterial',idMaterial:idMat},
  //     url:"./controller/materialesController.php",  
  //     success:function(r){
  //         datos=jQuery.parseJSON(r);
          

  //         console.log(r);
  //         Swal.fire({
  //           title: '¿Deseas eliminar a?',
  //           text:datos['descripcion_mat'] ,
  //           icon: 'warning',
  //           showCancelButton: true,
  //           confirmButtonColor: '#3085d6',
  //           cancelButtonColor: 'var(--colorpalet1)',
  //           confirmButtonText: 'Si, Eliminar',
  //           allowOutsideClick: false,
            
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //                           $.ajax({  
  //                       type:"POST",
  //                       data:{tipoOperacion:'delete',idMaterial:idMat},
  //                       url:"./controller/materialesController.php",
  //                       success:function(r){
  //                           datos=jQuery.parseJSON(r);
                            
                                  
  //                                   if(datos['resp']==1){
  //                                     Swal.fire(
  //                                       'Correcto',
                                      
  //                                       'Se elimino correctamente.',
  //                                       'success'
  //                                     );
                                     
                                    
  //                                   }else{
  //                                     console.log(datos);
  //                                     Swal.fire(
                                         
  //                                       'Upps...',
  //                                       'No se elimo registro',
  //                                       'error'
  //                                     )
                                   
  //                                   }
  //                                   window.location.reload();
  //                             }
  //                           });
  //           }
  //         })
  //     }
  //   });

// }

// function insertarMateriales(){

//   $('#btnGuardarMaterial').click(function(e){

//     event.preventDefault(e);
//             caja1 =   $("#txtCodSap").val();
//             caja2 =   $("#txtDescripcionMaterial").val();
//             caja3 =   $("#txtNombreMaterial").val();

//           if (caja1.length < 1 || caja2.length < 1 ||caja3.length < 1) {   
//               alert("cmapos vacios");
//           }else {
           
//             datos=$('#formMateriales').serialize(); 
//             // console.log(datos);
//           // datos = new FormData($('#formMateriales')[0]);
//           //   console.log(datos);

//           //   return false
//               $.ajax({
//                 type:"POST",
//                 data: {tipoOperacion:'insert',varDatos:datos},
//                 url:"./controller/materialescontroller.php",
//                 success:function(r){
//                   // console.log(r); 
//                   datos  = jQuery.parseJSON(r);
//                   var  respuesta = datos['resp'];
//                   // console.log(respuesta);
//                   if (respuesta==1) {
//                        alert('se inserto correctamente');
//                        listarMaterial();
//                       window.location.reload();

//                   }else if(respuesta ==3){
//                       alert('registro ya existe');
//                   }else{
//                       alert('comuniquese con admin');
//                   }
//                 }
//               });
//           }
//   });    
// }