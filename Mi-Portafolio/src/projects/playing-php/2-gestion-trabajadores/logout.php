<?php
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="3;url=index.html">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Sesión cerrada</title>
</head>
<body class="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
    <div class="alert alert-success text-center">
        🎇 Sesión cerrada correctamente 🎇<br>
        Serás redirigido en unos segundos...
    </div>
</body>
</html>
