<?php
    $api_key = isset($_GET['key']) ? $_GET['key'] : null;
    
    if ($api_key === "empleados"){
        $personal = array(
            array(
                "id" => 101,
                "nombre" => "Ana López",
                "puesto" => "Desarrolladora Senior",
                "departamento" => "TI",
                "fecha_contratacion" => "2018-05-15",
                "habilidades" => array("PHP", "JavaScript", "Python", "Gestión de proyectos")
            ),
            array(
                "id" => 102,
                "nombre" => "Carlos Méndez",
                "puesto" => "Diseñador UX/UI",
                "departamento" => "Diseño",
                "fecha_contratacion" => "2020-02-10",
                "habilidades" => array("Figma", "Adobe XD", "Investigación de usuarios")
            ),
            array(
                "id" => 103,
                "nombre" => "María González",
                "puesto" => "Gerente de Ventas",
                "departamento" => "Comercial",
                "fecha_contratacion" => "2019-11-22",
                "habilidades" => array("Gestión de equipos", "CRM", "Estrategia comercial")
            )
        );
    } else {
        $personal = array(
            "error" => "Acceso no autorizado",
            "mensaje" => "La clave de API proporcionada no es válida"
        );
    }

    echo json_encode($personal, JSON_PRETTY_PRINT);
?>