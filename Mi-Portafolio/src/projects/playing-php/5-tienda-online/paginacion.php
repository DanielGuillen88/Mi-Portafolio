<nav aria-label="Paginación">
    <ul class="pagination justify-content-center">
        <?php
        // Mostrar enlace a la primera página
        if ($pagina > 1) {
            echo '<li class="page-item"><a class="page-link" href="?pagina=1">Primera</a></li>';
            echo '<li class="page-item"><a class="page-link" href="?pagina=' . ($pagina - 1) . '">Anterior</a></li>';
        }

        // Mostrar indicador de página actual
        echo '<li class="page-item disabled"><span class="page-link">' . $pagina . ' de ' . $total_paginas . '</span></li>';

        // Mostrar enlace a la última página
        if ($pagina < $total_paginas) {
            echo '<li class="page-item"><a class="page-link" href="?pagina=' . ($pagina + 1) . '">Siguiente</a></li>';
            echo '<li class="page-item"><a class="page-link" href="?pagina=' . $total_paginas . '">Última</a></li>';
        }
        ?>
    </ul>
</nav>
