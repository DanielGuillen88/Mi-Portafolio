<?php
// aqui se maneja metodos SQL
class User {

    //buscar usuarios
    public static function buscar($conn, $buscar, $inicio, $limite) {
        $where = "";
        if ($buscar !== "") {
            $buscar = $conn->real_escape_string($buscar);
            $where = "WHERE username LIKE '%$buscar%' OR first_name LIKE '%$buscar%' OR last_name LIKE '%$buscar%'";
        }

        $consulta_sql = "SELECT SQL_CALC_FOUND_ROWS * FROM user_details $where LIMIT $inicio, $limite";

        $usuarios  = $conn->query($consulta_sql);

        $total = $conn->query("SELECT FOUND_ROWS() as total")->fetch_assoc()['total'];

        return ['usuarios' => $usuarios , 'total' => $total];
    }

    // insertar usuario
    public static function insertar($conn, $datos) {

        $stmt = $conn->prepare("INSERT INTO user_details (username, first_name, last_name, gender, password, status) VALUES (?, ?, ?, ?, SHA2('123456', 256), ?)");

        // datos recibidos de inputs
        $stmt->bind_param("ssssi", $datos['username'], $datos['first_name'], $datos['last_name'], $datos['gender'], $datos['status']);

        return $stmt->execute();
    }

    // obtener datos de un usuario por id para despues utilizarlos en edicion
    public static function obtenerPorId($conn, $id) {
        $stmt = $conn->prepare("SELECT * FROM user_details WHERE user_id = ?");

        // buscar por id
        $stmt->bind_param("i", $id);
        
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    // editar usuario
    public static function editar($conn, $datos) {

        $stmt = $conn->prepare("UPDATE user_details SET username=?, first_name=?, last_name=?, gender=?, status=? WHERE user_id=?");

        // datos recibidos por inputs
        $stmt->bind_param("ssssii", $datos['username'], $datos['first_name'], $datos['last_name'], $datos['gender'], $datos['status'], $datos['user_id']);

        return $stmt->execute();
    }

    // borrar usuario
    public static function borrar($conn, $id) {

        $stmt = $conn->prepare("DELETE FROM user_details WHERE user_id = ?");

        // id recibido
        $stmt->bind_param("i", $id);

        return $stmt->execute();
    }

}