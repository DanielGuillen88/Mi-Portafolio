<div class="paginacion">

    <?php if ($pagina > 1): ?>
        <a href="?pagina=1&buscar=<?= urlencode($buscar) ?>">Primera</a>
        <a href="?pagina=<?= $pagina - 1 ?>&buscar=<?= urlencode($buscar) ?>">Anterior</a>
    <?php endif; ?>

    <span><?= $pagina ?> de <?= $total_paginas ?></span>

    <?php if ($pagina < $total_paginas): ?>
        <a href="?pagina=<?= $pagina + 1 ?>&buscar=<?= urlencode($buscar) ?>">Siguiente</a>
        <a href="?pagina=<?= $total_paginas ?>&buscar=<?= urlencode($buscar) ?>">Última</a>
    <?php endif; ?>
    
</div>