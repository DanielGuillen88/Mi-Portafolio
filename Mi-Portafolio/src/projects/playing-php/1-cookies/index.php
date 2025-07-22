<?php
// Verificar si el usuario ya aceptó/rechazó las cookies
$cookiesAceptadas = isset($_COOKIE['cookies_aceptadas']) ? $_COOKIE['cookies_aceptadas'] : false;
$tema = isset($_COOKIE['tema']) ? $_COOKIE['tema'] : 'claro';
$idioma = isset($_COOKIE['idioma']) ? $_COOKIE['idioma'] : 'es';
?>

<!DOCTYPE html>
<html lang="<?php echo $idioma; ?>">
<head>
    <meta charset="UTF-8">
    <title>Aviso de Cookies</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: <?php echo $tema === 'oscuro' ? '#222' : '#f5f5f5'; ?>;
            color: <?php echo $tema === 'oscuro' ? 'white' : 'black'; ?>;
            transition: all 0.3s;
        }
        .aviso-cookies {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #333;
            color: white;
            padding: 15px;
            text-align: center;
            display: <?php echo $cookiesAceptadas !== false ? 'none' : 'block'; ?>;
        }
        .aviso-cookies button {
            margin: 0 5px;
            padding: 8px 15px;
            cursor: pointer;
        }
        .botones-container { 
            display: flex;
            justify-content: center;
            gap: 10px; 
            margin-top: 10px; 
        }
        .btn-aceptar { background: #4CAF50; color: white; border: none; }
        .btn-rechazar { background: #f44336; color: white; border: none; }
        .preferencias {
            margin: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            background: <?php echo $tema === 'oscuro' ? '#444' : '#fff'; ?>;
        }
    </style>
</head>
<body>
    <h1><?php echo $idioma === 'es' ? 'Bienvenido' : 'Welcome'; ?></h1>
    
    <!-- Mensaje según aceptación/rechazo -->
    <?php if ($cookiesAceptadas === 'si'): ?>
        <p style="color: green;">
            <?php echo $idioma === 'es' ? '¡Cookies aceptadas!' : 'Cookies accepted!'; ?>
        </p>
    <?php elseif ($cookiesAceptadas === 'no'): ?>
        <p style="color: red;">
            <?php echo $idioma === 'es' ? 'Cookies rechazadas. Algunas funciones pueden no estar disponibles.' : 'Cookies rejected. Some features may not work.'; ?>
        </p>
    <?php endif; ?>

    <!-- Formulario de preferencias (solo si aceptó cookies) -->
    <?php if ($cookiesAceptadas === 'si'): ?>
        <div class="preferencias">
            <h3><?php echo $idioma === 'es' ? 'Tus preferencias' : 'Your preferences'; ?></h3>
            <form action="guardar_preferencias.php" method="POST">
                <label>
                    <input type="radio" name="tema" value="claro" <?php echo $tema === 'claro' ? 'checked' : ''; ?>>
                    <?php echo $idioma === 'es' ? 'Tema claro' : 'Light theme'; ?>
                </label>
                <label>
                    <input type="radio" name="tema" value="oscuro" <?php echo $tema === 'oscuro' ? 'checked' : ''; ?>>
                    <?php echo $idioma === 'es' ? 'Tema oscuro' : 'Dark theme'; ?>
                </label>
                <br><br>
                <label>
                    <select name="idioma">
                        <option value="es" <?php echo $idioma === 'es' ? 'selected' : ''; ?>>Español</option>
                        <option value="en" <?php echo $idioma === 'en' ? 'selected' : ''; ?>>English</option>
                    </select>
                </label>
                <br><br>
                <button type="submit"><?php echo $idioma === 'es' ? 'Guardar' : 'Save'; ?></button>
            </form>
        </div>
    <?php endif; ?>

    <!-- Aviso de cookies (solo si no ha decidido) -->
    <?php if ($cookiesAceptadas === false): ?>
        <div class="aviso-cookies">
            <p><?php echo $idioma === 'es' ? 'Usamos cookies para mejorar tu experiencia.' : 'We use cookies to improve your experience.'; ?></p>
            <div class="botones-container">
                <form action="guardar_preferencias.php" method="POST">
                    <input type="hidden" name="accion" value="aceptar">
                    <button type="submit" class="btn-aceptar"><?php echo $idioma === 'es' ? 'Aceptar' : 'Accept'; ?></button>
                </form>
                <form action="guardar_preferencias.php" method="POST">
                    <input type="hidden" name="accion" value="rechazar">
                    <button type="submit" class="btn-rechazar"><?php echo $idioma === 'es' ? 'Rechazar' : 'Reject'; ?></button>
                </form>
            </div>
        </div>
    <?php endif; ?>

<footer class="text-center">
<a class="btn btn-outline-success mt-2" href="https://danielguillen.free.nf/">Volver página principal</a></footer>

</body>
</html>