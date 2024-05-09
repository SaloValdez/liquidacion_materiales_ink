<?php
// require_once "../app/conecction.php";
require_once "../app/materiales.php";


// $obj = new Materiales();
// $res = $obj->listarMateriales();
// var_dump($res);

// $txtCodSap =$_POST['txtCodSap'];
// $txtDescripcionMaterial =$_POST['txtDescripcionMaterial'];
// $txtNombreMaterial =$_POST['txtNombreMaterial'];

// $array = array(
//               'txtCodSap'=>$txtCodSap,
//               'txtDescripcionMaterial'=>$txtDescripcionMaterial,
//               'txtNombreMaterial'=>$txtNombreMaterial,
// );





// $array = array(
//     'sapMat'=>'00000345678',
//     'descripcionMat'=>'ONT HUAWEI P600800',
//     'nombreMat'=>'ONT ZTE'
// );


// $obj = new Materiales();
// $res = $obj->insertarMateriales($array);
// var_dump($res);

$obj = new Materiales();
// $res = $obj->listarMateriales();
// // var_dump($res);
// echo json_encode($res);

$tipoOperacion = $_POST['tipoOperacion'];

if($tipoOperacion =='insert'){
    $datos = $_POST['varDatos'];
    parse_str($datos,$myArray);
    $insertar = array(  'sapMat'=>$myArray['txtDescripcionMaterial'],
                        'descripcionMat'=>$myArray['txtDescripcionMaterial'],
                        'nombreMat'=>$myArray['txtDescripcionMaterial'],
                    );

    $res = $obj-> insertarMateriales($insertar);
    echo json_encode ($res);


}else if ($tipoOperacion =='read'){

    $resRead = $obj->listarMateriales();
    echo json_encode ($resRead);

}else if ($tipoOperacion =='readIdMaterial'){
    $idMaterial = $_POST['idMaterial'];

    $resReadId = $obj->listarIdMateriales($idMaterial);
    echo json_encode($resReadId);


}else if ($tipoOperacion =='delete'){
    $idMaterial = $_POST['idMaterial'];

    $res = $obj->eliminarMaterial($idMaterial);
    echo json_encode($res);


}





// echo json_encode($myArray['txtDescripcionMaterial']);


