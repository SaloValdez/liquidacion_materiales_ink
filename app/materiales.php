<?php



require_once "conecction.php";
class Materiales{

    public static function insertarMateriales($dato) {

       
                    $stmt  =  Conexion::cnx()->prepare("INSERT INTO materiales ( 
                                                                                sap_mat,
                                                                                descripcion_mat,
                                                                                nombre_mat
                                                                             )
                                                                          VALUES(
                                                                                :sapMat,
                                                                                :descripcionMat,
                                                                                :nombreMat
                                                                              )
                                                      ");
                     try {
                            #bindParam()  vinvula parametros con campos de SQL
                            $stmt->bindParam(":sapMat", $dato['sapMat'], PDO::PARAM_STR);
                            $stmt->bindParam(":descripcionMat", $dato['descripcionMat'], PDO::PARAM_STR);
                            $stmt->bindParam(":nombreMat", $dato['nombreMat'], PDO::PARAM_STR);
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

      static public function listarMateriales(){
        $stmt  =  Conexion::cnx()->prepare("SELECT * FROM materiales");
        if ($stmt -> execute()) {
          if ($stmt->rowCount() > 0) {
              return array("resp" =>1, "arrayMateriales"=>$stmt->fetchAll());
              // return $stmt->fetchAll();
          }else{
              return array("resp"=>0);
          }
        }else {
          return array("resp"=>10);
        } 
    }




}

// $obj = new Materiales();
// $res = $obj->listarMateriales();
// var_dump($res);

?>