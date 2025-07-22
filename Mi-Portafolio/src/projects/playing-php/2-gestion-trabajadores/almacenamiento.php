<?php
    session_start();
    function guardarPassword($c) {
        $_SESSION['contrasena'] = $c;
    }
    function obtenerPassword() {
        return $_SESSION['contrasena'] ?? null;
    }
?>