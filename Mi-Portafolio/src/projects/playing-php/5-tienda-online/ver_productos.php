<?php
include 'config.php';

// Obtener el número de página actual
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$registros_por_pagina = 10;
$inicio = ($pagina > 1) ? ($pagina * $registros_por_pagina - $registros_por_pagina) : 0;

// Consulta para obtener los registros de productos con paginación
$sql = "SELECT SQL_CALC_FOUND_ROWS * FROM productos LIMIT $inicio, $registros_por_pagina";
$resultado = $conn->query($sql);

// Obtener el total de registros para la paginación
$stmt = $conn->query("SELECT FOUND_ROWS() as total");
$total_registros = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
$total_paginas = ceil($total_registros / $registros_por_pagina);

// Asegurarse de que la página no sea mayor que el total de páginas
if ($pagina > $total_paginas && $total_paginas > 0) {
    header("Location: ?pagina=" . $total_paginas);
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Lista de Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<style>
    img {
        max-width: 100px;
        border: 2px solid tomato;
        border-radius: 5px;
    }
</style>


<body class="bg-light">
<div class="container py-4">

    <div class="d-flex justify-content-between align-items-center text-white mb-4 bg-secondary p-3 rounded">
        <a href="index.php" style="text-decoration: none;">
            <img src="imagenes/logo.jpg" style="max-width: 100px; border: 2px solid white; border-radius: 5px;filter: grayscale(100%);">
        </a>
            <h1 class="mb-0">TRASTIENDA 📦</h1>
    <!-- <a class="btn btn-success" href="index.php">Tienda</a> -->

    <button class="btn btn-success mb-2" id="btnNuevoProducto">Añadir Nuevo Producto</button>
        </div>

    <div class="mx-3">
        <h2 class="text-center">Lista de Productos</h2>

        <!-- Botón para crear un nuevo producto -->
        <div class="container my-4 text-center">
                
        <!-- Incluimos la tabla -->
        <?php include 'tabla_productos.php'; ?>

        <!-- Paginación -->
        <?php include 'paginacion.php'; ?>
    </div>

        <!-- Modal para editar productos -->
        <?php include 'modal_crear_producto.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script> <!-- Archivo JS -->
</div>
</body>

</html>