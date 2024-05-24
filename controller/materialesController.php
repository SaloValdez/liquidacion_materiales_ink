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
                        'tipoMat'=>strtoupper($myArray['radioTipoMat']),
                        'medidaMat'=>strtoupper($myArray['radioUnidMed']),
                        'estadoMat'=>strtoupper($myArray['radioEstadoMat']),
                        'idPersonal'=>strtoupper($myArray['idPersonal']),
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
    $datos = $_POST['datos'];
    parse_str($datos,$myArray);

    $update = array(  'sapMat'=>strtoupper($myArray['txtCodSap']),
                        'descripcionMat'=>strtoupper($myArray['txtDescripcionMaterial']),
                        'nombreMat'=>strtoupper($myArray['txtNombreMaterial']),
                        'tipoMat'=>strtoupper($myArray['radioTipoMat']),
                        'medidaMat'=>strtoupper($myArray['radioUnidMed']),
                        'estadoMat'=>strtoupper($myArray['radioEstadoMat']),
                        'idPersonal'=>strtoupper($myArray['idPersonal']),
                        'idMat'=>strtoupper($myArray['hideTxtMateriales']),
                    );
    $res = $obj-> actualizarMateriales($update);
    echo json_encode ($res);

                   
}





// echo json_encode($myArray['txtDescripcionMaterial']);


