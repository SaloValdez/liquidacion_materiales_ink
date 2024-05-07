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
$res = $obj->listarMateriales();
// var_dump($res);
echo json_encode($res);