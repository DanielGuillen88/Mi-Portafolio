<?php
include 'config.php';

// Verifica que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productoId = $_POST['producto_id']; // Obtener el id del producto
    $nombre = $_POST['nombre'];  // Obtener el nombre
    $descripcion = $_POST['descripcion'];  // Obtener la descripción
    $precio = $_POST['precio'];  // Obtener el precio
    $categoria = $_POST['categoria'];  // Obtener la categoría

    // Verificar si se cargó una nueva imagen
    $imagen = null;
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $archivoTmp = $_FILES['imagen']['tmp_name'];
        $nombreOriginal = basename($_FILES['imagen']['name']);
        $extension = pathinfo($nombreOriginal, PATHINFO_EXTENSION);
        $nuevoNombre = 'producto_' . $productoId . '_' . uniqid() . '.' . $extension;
        $destino = 'imagenes/' . $nuevoNombre;

        if (move_uploaded_file($archivoTmp, $destino)) {
            $imagen = $nuevoNombre;
        } else {
            // Si no se pudo mover el archivo, responde con error
            echo json_encode(['success' => false, 'message' => 'Error al mover el archivo de imagen.']);
            exit;
        }
    }

    // Prepara la consulta SQL para actualizar el producto
    $sql = "UPDATE productos SET nombre = :nombre, descripcion = :descripcion, precio = :precio, categoria = :categoria";
    
    if ($imagen) {
        $sql .= ", imagen = :imagen";
    }
    
    $sql .= " WHERE id_producto = :producto_id";

    try {
        // Ejecutar la consulta SQL
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':precio', $precio);
        $stmt->bindParam(':categoria', $categoria);
        if ($imagen) {
            $stmt->bindParam(':imagen', $imagen);
        }
        $stmt->bindParam(':producto_id', $productoId, PDO::PARAM_INT);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);  // Respuesta exitosa
        } else {
            echo json_encode(['success' => false, 'message' => 'Error en la actualización de la base de datos.']);  // Error en la base de datos
        }
    } catch (PDOException $e) {
        // Manejo de errores en la base de datos
        echo json_encode(['success' => false, 'message' => 'Error en la base de datos: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no permitido.']);
}
?>
