<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['producto_id'])) {
    $productoId = $_POST['producto_id'];

    // Eliminar el producto de la base de datos
    $sql = "DELETE FROM productos WHERE id_producto = :producto_id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':producto_id', $productoId, PDO::PARAM_INT);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
