<div class="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Imagen</th>
                <th>Acciones</th> <!-- Nueva columna de acciones -->
            </tr>
        </thead>
        <tbody>
            <?php
            // Mostrar los productos en la tabla
            if ($resultado->rowCount() > 0) {
                while ($fila = $resultado->fetch(PDO::FETCH_ASSOC)) {
                    echo "<tr data-id='" . $fila['id_producto'] . "'>";
                    echo "<td>" . htmlspecialchars($fila['id_producto']) . "</td>";
                    echo "<td class='editable' data-field='nombre'>" . htmlspecialchars($fila['nombre'] ?? '') . "</td>";
                    echo "<td class='editable' data-field='descripcion'>" . htmlspecialchars($fila['descripcion'] ?? '') . "</td>";
                    echo "<td class='editable' data-field='precio'>" . htmlspecialchars($fila['precio'] ?? '') . "</td>";
                    echo "<td class='editable' data-field='categoria'>" . htmlspecialchars($fila['categoria'] ?? '') . "</td>";
                    
                    // Celda de la imagen con doble clic
                    echo "<td class='imagen-cell' data-field='imagen' data-id='" . $fila['id_producto'] . "'>";
                    if (!empty($fila['imagen'])) {
                        echo "<img src='imagenes/" . $fila['imagen'] . "' alt='Imagen' />";
                    } else {
                        echo "No hay imagen";
                    }
                    echo "</td>";

                    // Columna de acciones (editar y eliminar)
                    echo "<td>";
                    echo "<button class='btn btn-warning btn-sm edit-btn' data-id='" . $fila['id_producto'] . "'>Editar</button> ";
                    echo "<button class='btn btn-danger btn-sm delete-btn' data-id='" . $fila['id_producto'] . "'>Eliminar</button>";
                    echo "</td>";

                    echo "</tr>";
                }
            }
            ?>
        </tbody>
    </table>
</div>