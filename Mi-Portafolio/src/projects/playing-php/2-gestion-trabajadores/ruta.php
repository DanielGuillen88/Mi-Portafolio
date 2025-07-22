<?php

$clave = "empleados";
$url = "http://localhost/M1UF3/05_09_Mayo_API/api.php?key=$clave";

$resultado = file_get_contents($url);
$resultado = json_decode($resultado, true);

echo json_encode($resultado);

?>