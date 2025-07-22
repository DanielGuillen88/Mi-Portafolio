<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productoId = intval($_POST['producto_id']);
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $categoria = $_POST['categoria'];
    $imagen = null;

    // Verificar si hay una nueva imagen
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $archivoTmp = $_FILES['imagen']['tmp_name'];
        $nombreOriginal = basename($_FILES['imagen']['name']);
        $extension = pathinfo($nombreOriginal, PATHINFO_EXTENSION);
        $nuevoNombre = 'producto_'.$productoId.'_'.uniqid().'.'.$extension;
        $destino = 'imagenes/'.$nuevoNombre;

        // Validación de tipo de archivo
        $tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($_FILES['imagen']['type'], $tiposPermitidos)) {
            die("Tipo de archivo no permitido");
        }

        if ($_FILES['imagen']['size'] > 5 * 1024 * 1024) {
            die("El archivo es demasiado grande");
        }

        if (move_uploaded_file($archivoTmp, $destino)) {
            $imagen = $nuevoNombre;
        } else {
            die("Error al mover el archivo");
        }
    }

    // Actualizar los datos en la base de datos
    $sql = "UPDATE productos SET nombre = :nombre, descripcion = :descripcion, precio = :precio, categoria = :categoria";
    if ($imagen) {
        $sql .= ", imagen = :imagen";
    }
    $sql .= " WHERE id_producto = :producto_id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':descripcion', $descripcion);
    $stmt->bindParam(':precio', $precio);
    $stmt->bindParam(':categoria', $categoria);
    $stmt->bindParam(':producto_id', $productoId);

    if ($imagen) {
        $stmt->bindParam(':imagen', $imagen);
    }

    if ($stmt->execute()) {
        echo "Producto actualizado con éxito";
    } else {
        echo "Error al actualizar el producto";
    }
}
?>