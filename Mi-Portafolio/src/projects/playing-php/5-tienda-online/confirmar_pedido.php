<?php
require_once 'config.php';

if (empty($_SESSION['carrito'])) {
	header('Location: carrito.php');	
	exit();
}

try {
	//calcular total
	$total = 0;
	foreach ($_SESSION['carrito'] as $producto){
		$total += $producto ['precio'] * $producto['cantidad'];
}

//iniciar transaccion
$conn->beginTransaction();

//insertar pedido
$stmt = $conn->prepare("INSERT INTO pedidos (total) VALUES (?)");
$stmt->execute([$total]);
$id_pedido =$conn->lastInsertId();

//insertar detalles del pedido
$stmt = $conn->prepare("INSERT INTO detalles_pedido
						( id_pedido, id_producto, cantidad, precio_unitario, subtotal)
						VALUES (?,?,?,?,?)");

foreach ($_SESSION['carrito'] as $producto) {
	$subtotal = $producto['precio'] * $producto['cantidad'];
	$stmt->execute([
		$id_pedido,
		$producto['id_producto'],
		$producto['cantidad'],
		$producto['precio'],
		$subtotal
	]);
}

	//confirmar transaccion
	$conn->commit();

	//vaciar carrito
	$_SESSION['carrito'] = array();

	//mostrar confirmación
	header('Location: pedido_confirmado.php?id=' . $id_pedido);
	exit();

} catch (Exception $e) {
	//revertir transacción en caso de error
	$conn-> rollBack();
	echo "Error al confirmar el pedido: " . $e->getMessage();
}
//catch: atrapa errores
//rollBack(): deshace cambos para mantener la BD consistente
//$e->getMessage(): da ilnformración del error (útil para depurar)

?>