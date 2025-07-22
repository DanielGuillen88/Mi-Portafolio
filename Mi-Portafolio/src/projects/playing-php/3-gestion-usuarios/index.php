<?php
require_once './config/db.php';
require_once './controllers/UserController.php';
require_once './models/User.php';

// Procesar peticiones
UserController::procesarAcciones($conn);

// Parametros busqueda + paginacion
$buscar = $_GET['buscar'] ?? '';

$pagina = max((int)($_GET['pagina'] ?? 1), 1);

// Evita que sea menor a 1
$registros_por_pagina = 10;
$inicio = ($pagina - 1) * $registros_por_pagina;

// Obtener usuarios desde el modelo
$resultado = User::buscar($conn, $buscar, $inicio, $registros_por_pagina);

$usuarios = $resultado['usuarios'];

$total = $resultado['total'];

$total_paginas = ceil($total / $registros_por_pagina);

// Verificar si se está editando un usuario
$usuario = null;

if (isset($_GET['editar']) && is_numeric($_GET['editar'])) {
    $usuario = User::obtenerPorId($conn, (int)$_GET['editar']);
}

// renderizar la tabla
include './views/layout.php';
?>