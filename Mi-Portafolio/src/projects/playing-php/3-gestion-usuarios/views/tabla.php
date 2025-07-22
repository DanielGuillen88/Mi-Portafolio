<table>

    <thead>
        <tr>
            <th class="th">ID</th>
            <th class="th">Username</th>
            <th class="th">Nombre</th>
            <th class="th">Apellido</th>
            <th class="th">Género</th>
            <th class="th">Estado</th>
            <th class="th">Editar | Borrar</th>
        </tr>
    </thead>

<tbody>

<?php if ($usuarios && $usuarios->num_rows > 0): ?>
    
<?php if (isset($_GET['agregar'])): ?>

<form method="POST">

    <tr>

        <td style='background-color:#095e15;color:white;'>Nuevo</td>

        <td><input type="text" name="username" required></td>

        <td><input type="text" name="first_name" required></td>

        <td><input type="text" name="last_name" required></td>

        <td>
            <select name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </td>

        <td><input type="checkbox" name="status" checked> Activo</td>

        <td>

            <input type="hidden" name="nuevo_usuario" value="1">

            <button type="submit">✍💾</button>

            <a class="cancelar" href="index.php?pagina=<?= $pagina ?>&buscar=<?= urlencode($buscar) ?>">❌💾</a>

        </td>

    </tr>

</form>

<?php endif; ?>


<?php while ($fila = $usuarios ->fetch_assoc()): ?>

<?php if ($usuario && $usuario['user_id'] == $fila['user_id']): ?>

            <!-- Fila en modo edición -->
<form method="POST">
    <tr>

        <td style='background-color:#095e15;color:white;'><?= $fila['user_id'] ?>
            <input type="hidden" name="user_id" value="<?= $fila['user_id'] ?>">
        </td>

        <td><input type="text" name="username" value="<?= htmlspecialchars($fila['username']) ?>"></td>

        <td><input type="text" name="first_name" value="<?= htmlspecialchars($fila['first_name']) ?>"></td>

        <td><input type="text" name="last_name" value="<?= htmlspecialchars($fila['last_name']) ?>"></td>

        <td>

            <select name="gender">
                <option value="Male" <?= $fila['gender'] == 'Male' ? 'selected' : '' ?>>Male</option>
                <option value="Female" <?= $fila['gender'] == 'Female' ? 'selected' : '' ?>>Female</option>
            </select>

        </td>

        <td>

            <input type="checkbox" name="status" <?= $fila['status'] == 1 ? 'checked' : '' ?>> Activo
        </td>

        <td>

            <button type="submit">✍✅</button>

            <button class="cancelar" href="index?pagina=<?= $pagina ?>">✍❌</button>

        </td>
    </tr>
</form>
        <?php else: ?>
            <!-- Fila normal -->
            <tr>
                <td style='background-color:#095e15;color:white;'><?= $fila['user_id'] ?></td>
                <td><?= $fila['username'] ?></td>
                <td><?= $fila['first_name'] ?></td>
                <td><?= $fila['last_name'] ?></td>
                <td><?= $fila['gender'] ?></td>
                <td><?= ($fila['status'] == 1 ? 'Activo' : 'Inactivo') ?></td>
                <td style='background-color:#4caf50;'>
                    <a href="?pagina=<?= $pagina ?>&editar=<?= $fila['user_id'] ?>&buscar=<?= urlencode($buscar) ?>">📖✍</a>
                    <a class="borrar" href="?pagina=<?= $pagina ?>&borrar=<?= $fila['user_id'] ?>&buscar=<?= urlencode($buscar) ?>" onclick="return confirm('¿Estás seguro de que deseas eliminar este usuario?');" >🧻🚽</a>

                </td>
            </tr>
        <?php endif; ?>
    <?php endwhile; ?>
<?php else: ?>
    <tr><td colspan="7">No se encontraron registros</td></tr>
<?php endif; ?>
</tbody>

</table>