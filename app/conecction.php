<?php
      class Conexion{
        public static function cnx() {

          try {
            $options = [
                        PDO::ATTR_ERRMODE           =>PDO::ERRMODE_EXCEPTION,#para menjo de errores
                        PDO::ATTR_EMULATE_PREPARES  => false,
                    ];
                  $link = new PDO("mysql:host=localhost;dbname=alma_inkacell","root","",$options);
                  $link -> exec("set names utf8");
                  return $link;
          } catch (Exception $e) {
                  echo "la linea de error es: " . $e->getLine();
          }


        }
}




    // $obj = new Conexion();
    //    $sas = $obj->cnx();
    //   var_dump($sas);

 ?>