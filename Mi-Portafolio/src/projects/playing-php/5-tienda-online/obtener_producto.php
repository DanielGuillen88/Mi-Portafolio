<?php
include 'config.php';

if (isset($_GET['producto_id'])) {
    $productoId = $_GET['producto_id'];

    // Obtener los detalles del producto
    $sql = "SELECT * FROM productos WHERE id_producto = :producto_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':producto_id', $productoId, PDO::PARAM_INT);
    $stmt->execute();

    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($producto) {
        echo json_encode(['success' => true, 'producto' => $producto]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Producto no encontrado']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No se especificó un ID de producto']);
}
?>
