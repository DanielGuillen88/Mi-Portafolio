<?php
// Guardar preferencias de cookies (aceptar/rechazar)
if (isset($_POST['accion'])) {
    $valor = ($_POST['accion'] === 'aceptar') ? 'si' : 'no';
    setcookie('cookies_aceptadas', $valor, time() + (365 * 24 * 60 * 60), '/'); // 1 año
}

// Guardar preferencias de tema e idioma (solo si aceptó cookies)
if (isset($_POST['tema']) && isset($_POST['idioma']) && $_COOKIE['cookies_aceptadas'] === 'si') {
    setcookie('tema', $_POST['tema'], time() + (365 * 24 * 60 * 60), '/');
    setcookie('idioma', $_POST['idioma'], time() + (365 * 24 * 60 * 60), '/');
}

// Redirigir de vuelta a index.php
header('Location: index.php');
exit;
?>