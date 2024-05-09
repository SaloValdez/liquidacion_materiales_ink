<?php
require_once "../app/materiales.php";

$obj = new Materiales();
$tipoOperacion = $_POST['tipoOperacion'];

if($tipoOperacion =='insert'){
    $datos = $_POST['varDatos'];
    parse_str($datos,$myArray);
    $insertar = array(  'sapMat'=>strtoupper($myArray['txtCodSap']),
                        'descripcionMat'=>strtoupper($myArray['txtDescripcionMaterial']),
                        'nombreMat'=>strtoupper($myArray['txtNombreMaterial']),
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
}else if($tipoOperacion =='update'){

}





// echo json_encode($myArray['txtDescripcionMaterial']);


