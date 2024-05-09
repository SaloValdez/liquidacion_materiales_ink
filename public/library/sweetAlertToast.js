
$(document).ready(function(){
   // errorToast(2,'PROBANDO','MI TEXT','SEC')
   // errorToast();
   // successToast();
   // infoToast();
 
  
      
});

  function errorToast(segundos,titulo,texto,textoSecundario){
   Swal.fire({
      title:titulo,
      html:'<div class="error-salo">'+ texto + '<span>'+ textoSecundario +'</span>' + '</div>',
      // toast:'false',
      position:'bottom',
      
      // backdrop:false,
      // timer:5000,
      padding:'0.5rem',
      showConfirmButton: false,
      icon:'error',
      // textColor:'#FFFFFF',
      showCloseButton: true,
      toast:'true',
      timer: 1000 * segundos,
   });
   document.getElementById('swal2-title').style.setProperty('color', '#f27474', 'important');
  }

  function successToast(segundos,titulo,texto,textoSecundario){
   Swal.fire({
      title:titulo,
      html:'<div class="error-salo">'+ texto + '<span>'+ textoSecundario +'</span>' + '</div>',
      position:'bottom',
      // backdrop:'swal2-backdrop-hide',
      timer:8000,
      padding:'0.5rem',
      showConfirmButton: false,
      icon:'success',
      // textColor:'#FFFFFF',
      showCloseButton: true,
      toast:'true',
      timer: 1000 * segundos,
   });
   document.getElementById('swal2-title').style.setProperty('color', 'var(--colorFirst2)', 'important');
  }

  function infoToast(segundos,titulo,texto,textoSecundario){
   Swal.fire({
      title:titulo,
      html:'<div class="info-salo">'+ texto + '<span>'+ textoSecundario +'</span>' + '</div>',
      // toast:'false',
      position:'bottom',
      // backdrop:false,
      // timer:5000,
      padding:'0.5rem',
      showConfirmButton: false,
      icon:'info',
      // textColor:'#FFFFFF',
      showCloseButton: true,
      toast:'true',
      timer: 1000 * segundos,
   });
   document.getElementById('swal2-title').style.setProperty('color', '#3fc3ee', 'important');
  }










// $(document).ready(function(){
//    Swal.fire({
//       html:"Por favor",
//       confirmButtonText:"acepto",
//       icon:'warning',
//       padding:'1rem',
//       // grow:'row',
//       backdrop:false,
//       toast:'true',
//       position:'bottom',
//       allowOutsideClick:true, //click afuera y se cierra
//       allowEscapeKey: true,
//       stopKeydownPropagation: false,


//       showConfirmButton: false,
//       showCancelButton:false,
//       showCloseButton:false,
//       // closeButtonAriaLabel: 'CERRAR ESTA ALERTA',

//       customClass: {
//          content:'content-class-alert'
//       },

//       timer:5000

//    });

// });



// function msjError(Titulo,mensaje){
//    $("#mensajeAlertSpan").html('<div class="mensajeFormulario error">' + Titulo + ': <span>'+ mensaje+'</span></div>').fadeOut(3000);

  
// }
// function msjConfirm(Titulo,mensaje){
//     $("#mensajeAlertSpan").html('<div class="mensajeFormulario confirm">' + Titulo + ': <span>'+ mensaje+'</span></div>').fadeOut(3000);
//  }


// function errorToast(titulo,mensaje){
//    Swal.fire({
//       html:"Por favor",
//       confirmButtonText:"acepto",
//       icon:'info',
//       padding:'1rem',
//       grow:'row',
//       backdrop:true,
//       toast:'true',
//       position:'bottom',
//       allowOutsideClick:false,
//       allowEscapeKey: false,
//       stopKeydownPropagation: false,


//       showConfirmButton: true,
//       showCancelButton:false,
//       showCloseButton:false,
//       closeButtonAriaLabel: 'CERRAR ESTA ALERTA',

//       customClass: {
//          content:'content-calss'
//       }


//    });
// }