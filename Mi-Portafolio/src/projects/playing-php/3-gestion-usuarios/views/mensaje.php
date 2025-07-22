<?php if (isset($_GET['mensaje'])): ?>
    <div class="mensaje">
        <?php
        if (isset($_GET['mensaje'])) {
            if ($_GET['mensaje'] == 'editado') {
                echo '<div style="color: lime; font-weight: bold;"> 👤 Usuario editado satisfactoriamente ✔</div>';
            } elseif ($_GET['mensaje'] == 'eliminado') {
                echo '<div style="color: tomato; font-weight: bold;">👤 Usuario eliminado satisfactoriamente 🚽</div>';
            } elseif ($_GET['mensaje'] == 'insertado') {
                echo '<div style="color: lightblue; font-weight: bold;">👤 Nuevo usuario añadido correctamente 💙</div>';
            }
        }
        ?>
    </div>

<?php endif; ?>