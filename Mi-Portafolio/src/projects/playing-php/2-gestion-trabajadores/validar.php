<?php
require_once('almacenamiento.php');

if (empty($_POST['us']) || empty($_POST['pwd'])) {
    die("Datos incompletos ❌");
}

$usuario = $_POST['us'];
$password = $_POST['pwd'];

if ($usuario === "admin" && $password === "1234") {
    $_SESSION['usuario'] = $usuario;
    $p = password_hash($password, PASSWORD_DEFAULT);
    guardarPassword($p);
}

$pAlmacenada = obtenerPassword();

if (password_verify($password, $pAlmacenada)) {
    echo "Autenticación satisfactoria ✅";
} else {
    echo "Datos incorrectos ❌";
}
