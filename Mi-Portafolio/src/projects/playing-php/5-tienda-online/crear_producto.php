<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['nombre'], $_POST['descripcion'], $_POST['precio'], $_POST['categoria'])) {
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $categoria = $_POST['categoria'];

    // Manejo de la imagen
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $archivoTmp = $_FILES['imagen']['tmp_name'];
        $nombreOriginal = basename($_FILES['imagen']['name']);
        $extension = pathinfo($nombreOriginal, PATHINFO_EXTENSION);
        $nuevoNombre = 'producto_' . uniqid() . '.' . $extension;
        $destino = 'imagenes/' . $nuevoNombre;

        // Validación simple
        $tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($_FILES['imagen']['type'], $tiposPermitidos)) {
            die("Tipo de archivo no permitido");
        }

        if ($_FILES['imagen']['size'] > 5 * 1024 * 1024) {
            die("El archivo es demasiado grande (máximo 5MB)");
        }

        // Mover el archivo a la carpeta destino
        move_uploaded_file($archivoTmp, $destino);
    }

    // Insertar el producto en la base de datos
    $sql = "INSERT INTO productos (nombre, descripcion, precio, categoria, imagen) VALUES (:nombre, :descripcion, :precio, :categoria, :imagen)";
    $stmt = $conn->prepare($sql);

    $imagen = isset($nuevoNombre) ? $nuevoNombre : null;

    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':descripcion', $descripcion);
    $stmt->bindParam(':precio', $precio);
    $stmt->bindParam(':categoria', $categoria);
    $stmt->bindParam(':imagen', $imagen);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al crear el producto']);
    }
}
?>
