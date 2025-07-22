<?php
// para funcionar requiere
require_once __DIR__ . '/../models/User.php';


// logica acciones en base a solicitud
class UserController {

    public static function procesarAcciones($conn) {
        // metodo post en forms
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            //crear usuario
            if (isset($_POST['nuevo_usuario'])) {
                User::insertar($conn, $_POST);
                self::redirigir("insertado");
            }
            // editar usuario
            if (isset($_POST['user_id'])) {
                User::editar($conn, $_POST);
                self::redirigir("editado");
            }
        }
        // borrar usuario
        if (isset($_GET['borrar'])) {
            User::borrar($conn, (int)$_GET['borrar']);
            self::redirigir("eliminado");
        }
    }

    // controlar paginacion cuando se solicita una accion
    public static function redirigir($mensaje) {
        $pagina = $_GET['pagina'] ?? 1;
        $buscar = $_GET['buscar'] ?? '';
        header("Location: index.php?pagina=$pagina&buscar=" . urlencode($buscar) . "&mensaje=$mensaje");
        exit;
    }
}
?>