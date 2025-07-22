<?php
require_once 'config.php';

try {
    // Obtener la categoría desde la URL
    $categoria = isset($_GET['categoria']) ? $_GET['categoria'] : 'TODOS';

    // Construir la consulta SQL
    if ($categoria == 'TODOS') {
        $sql = "SELECT * FROM productos";
        $stmt = $conn->query($sql);
    } else {
        $sql = "SELECT * FROM productos WHERE categoria = :categoria";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':categoria', $categoria);
        $stmt->execute();
    }

    // Obtener resultados
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Mostrar los resultados
    if ($productos) {
        foreach ($productos as $producto) {
            echo '<div class="col-md-4 mb-4">';
            echo '  <div class="card h-100">';
            echo '    <img src="imagenes/'.htmlspecialchars($producto['imagen']).'" class="card-img-top" alt="'.htmlspecialchars($producto['nombre']).'">';
            echo '    <div class="card-body">';
            echo '      <h5 class="card-title">'.htmlspecialchars($producto['nombre']).'</h5>';
            echo '      <p class="card-text">'.htmlspecialchars($producto['descripcion']).'</p>';
            echo '      <p class="text-danger fw-bold">$'.number_format($producto['precio'], 2).'</p>';
            echo '    </div>';
            echo '  </div>';
            echo '</div>';
        }
    } else {
        echo '<div class="col-12 text-center py-5">';
        echo '  <h4 class="text-muted">No se encontraron productos en esta categoría</h4>';
        echo '</div>';
    }

} catch(PDOException $e) {
    echo '<div class="alert alert-danger">Error: ' . $e->getMessage().'</div>';
}
?>