<?php



require_once "conecction.php";
class Liquidacion{

   ##-----------------------------------------------------------------
  ## INSERTAR matreriales
  #==================================================================

    public static function liquidarMaterial($dato) { 
                    $stmt  =  Conexion::cnx()->prepare("INSERT INTO materiales ( 
                                                                                sap_mat,
                                                                                descripcion_mat,
                                                                                nombre_mat,
                                                                                tipo_mat,
                                                                                medida_mat,
                                                                                estado_mat,
                                                                                id_personal
                                                                             )
                                                                          VALUES(
                                                                                :sapMat,
                                                                                :descripcionMat,
                                                                                :nombreMat,
                                                                                :tipoMat,
                                                                                :medidaMat,
                                                                                :estadoMat,
                                                                                :idPersonal
                                                                              )
                                                      ");
                     try {
                            #bindParam()  vinvula parametros con campos de SQL
                            $stmt->bindParam(":sapMat", $dato['sapMat'], PDO::PARAM_STR);
                            $stmt->bindParam(":descripcionMat", $dato['descripcionMat'], PDO::PARAM_STR);
                            $stmt->bindParam(":nombreMat", $dato['nombreMat'], PDO::PARAM_STR);
                            
                            $stmt->bindParam(":tipoMat", $dato['tipoMat'], PDO::PARAM_INT);
                            $stmt->bindParam(":medidaMat", $dato['medidaMat'], PDO::PARAM_STR);
                            $stmt->bindParam(":estadoMat", $dato['estadoMat'], PDO::PARAM_INT);
                            $stmt->bindParam(":idPersonal", $dato['idPersonal'], PDO::PARAM_INT);
                            if ($stmt->execute()) {
                                return array('resp' => 1);
                             }else {
                               return array('resp'=> 45);
                            }
                       
                    // $stmt->close();
            } catch (Exception $e) {
            //   return array("resp"=>55555);
              return array("reps"=>0,"<br>","menssajeError"=>$e->getMessage(),"<br>","lineaDeError"=>$e->getLine());
               exit();
            }


    }
 ##-----------------------------------------------------------------
  ##  LISTAR materiales LIQUIDADICON
  #==================================================================
    static public function listarMaterialesLiquidacion($estadoMat){
        $stmt  =  Conexion::cnx()->prepare("SELECT * FROM materiales WHERE estado_mat = :estadoMat");
        $stmt ->bindParam(":estadoMat",$estadoMat,PDO::PARAM_INT);

        if ($stmt -> execute()) {
          if ($stmt->rowCount() > 0) {
              return array("resp" =>1, "arrayMaterialesLiquidacion"=>$stmt->fetchAll());
              // return $stmt->fetchAll();
          }else{
              return array("resp"=>0);
          }
        }else {
          return array("resp"=>10);
        } 
    }

  ##-----------------------------------------------------------------
  ##  MOSTRAR POR "ID" materiales
  #==================================================================
  static public function listarIdMateriales($idMaterial){
    $stmt  = Conexion::cnx()->prepare("SELECT * FROM materiales WHERE id_mat = :idMaterial");
    $stmt ->bindParam(":idMaterial",$idMaterial,PDO::PARAM_INT);
    $stmt -> execute();
    return $stmt->fetch();
    //   $stmt->close();
  }



    ##-----------------------------------------------------------------
  ##  ELIMINAR POR id MATERIAL
  #==================================================================
  static public function eliminarMaterial($idMaterial){
    try{
            $stmt  = Conexion::cnx()->prepare("DELETE  FROM materiales WHERE id_mat =:idMaterial");
            $stmt ->bindParam(":idMaterial",$idMaterial,PDO::PARAM_INT);
            if ($stmt->execute()) {
                  if ($stmt->rowCount() > 0) {
                      return array("resp" =>1);
                  }else{
                      return array("resp"=>0);
                  }
            }else {
              return array("resp"=>10);
            }
            // $stmt->close();

       }
       catch(PDOException $e){
              return array("resp"=>10,"<br>","menssajeError"=>$e->getMessage(),"<br>","lineaDeError"=>$e->getLine());
               exit();
       }
  }



      ##-----------------------------------------------------------------
      ##  ACTUALIZAR material
      #==================================================================
      static public function actualizarMateriales($datos){
        try {
          $stmt  = Conexion::cnx()->prepare("SELECT * FROM materiales WHERE sap_mat = :sapMaterial");
          $stmt ->bindParam(":sapMaterial",$datos['sapMat'],PDO::PARAM_STR);
          // $stmt ->bindParam(":descripcionMat",$datos['descripcionMat'],PDO::PARAM_STR);
          // $stmt ->bindParam(":nombreMaterial",$datos['nombreMat'],PDO::PARAM_STR);
          if ($stmt -> execute()){
              if ($stmt->rowCount() > 0) {
                  return array("resp" =>3);
              }else{
                  $stmt  = Conexion::cnx()->prepare("UPDATE materiales SET 
                                                                      sap_mat =         :sapMat,
                                                                      descripcion_mat = :descripcionMat,
                                                                      nombre_mat=       :nombreMat,
                                                                      tipo_mat    =     :tipoMat,
                                                                      medida_mat  =     :medidaMat,
                                                                      estado_mat  =     :estadoMat,
                                                                      id_personal =     :idPersonal



                                                                      WHERE id_mat = :idMat");


                  $stmt ->bindParam(":sapMat",$datos['sapMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":descripcionMat",$datos['descripcionMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":nombreMat",$datos['nombreMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":tipoMat",$datos['tipoMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":medidaMat",$datos['medidaMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":estadoMat",$datos['estadoMat'],PDO::PARAM_STR);
                  $stmt ->bindParam(":idPersonal",$datos['idPersonal'],PDO::PARAM_STR);
                  $stmt ->bindParam(":idMat",$datos['idMat'],PDO::PARAM_INT);
                  if ($stmt -> execute()) {
                    if ($stmt->rowCount() > 0) {
                        return array("resp" =>1);
                    }else{
                        return array("resp"=>0);
                    }
                  }else {
                    return array("resp"=>10);
                  }
              }
          } 
      }catch (Exception $e) {
          // return array("resp"=>'errorExceptionssss');
          return array("resp"=>10,"<br>","menssajeError"=>$e->getMessage(),"<br>","lineaDeError"=>$e->getLine());
          exit();
        }
    }

}


// $obj = new Materiales();
// $res = $obj->listarMateriales();
// var_dump($res);

?>