<div class="buscador">

    <form method="GET" style="text-align: center;">

        <input class="inputBuscador" type="text" name="buscar" placeholder="Buscar por username o nombre" value="<?= htmlspecialchars($buscar) ?>" style="padding: 8px; width: 300px;">

        <input type="hidden" name="pagina" value="1">

        <button class="buscar" type="submit">🔍 Buscar</button>

        <button class="limpiar" type="submit" name="buscar" value="">🧹 Limpiar</button>

        <a  class="insertar" href="?pagina=<?= $pagina ?>&agregar=1&buscar=<?= urlencode($buscar) ?>">
            ➕ Añadir usuario
        </a>

    </form>

</div>