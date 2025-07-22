<?php
session_start();
$_SESSION['ultimo_acceso'] = time();
$ultimo_acceso_formateado = date('d/m/Y H:i', $_SESSION['ultimo_acceso']);

// Verifica si la variable 'usuario' existe
if (!isset($_SESSION['usuario'])) {
    header("Location: validar.php");
    exit();
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página con PHP">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Web con API</title>
</head>
<style>
        body {
        background-color: rgb(231, 245, 245);
    }
</style>

<body>
    <main class="container text-center">

          <div id="lista"></div>

          <a href="logout.php" class="btn btn-outline-danger btn-lg mt-3"> Cerrar sesión 💣</a>

          <h2><?= $ultimo_acceso_formateado ?></h2>
        
    </main>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="control.js"></script>
</body>
</html>