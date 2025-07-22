<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Usuarios registrados</title>
    <style>
        .titulo{ background-color:#095e15;text-align:center;font-size:2rem;padding:1rem;color:white; }
        table { width:100%;border-collapse:collapse; }
        th, td { border:1px solid #ddd;padding:8px;text-align:center; }
        th { background-color:#f2f2f2; }
        .buscador {text-align: center; background-color: #4caf50; border: 1px solid #ddd;}
        .inputBuscador{background: #4caf50; padding: 10px; }
        .paginacion {text-align: center; background-color: #4caf50; border: 1px solid #ddd; padding: 1rem; }
        button{ padding:6px;margin:2px;text-decoration:none;background-color:#4caf50;color:white;border-radius:10px;border:none; }
        button:hover { background-color:#095e15; }
        .borrar:hover { background-color:tomato; }
        .cancelar{ padding:6px;margin:2px;text-decoration:none;background-color:tomato;color:white;border-radius:10px;border:none; }
        .cancelar:hover { background-color:red; }

        .buscar:hover { background-color:lightblue; color: black;}
        .limpiar:hover { background-color:lightgoldenrodyellow; color: black;}
        .insertar:hover { background-color:grey;}

        a { padding:6px;margin:2px;text-decoration:none;background-color:#4caf50;color:white;border-radius:10px; }
        a:hover { background-color:#095e15; }
        .th { background-color:#095e15;color:white; }
        .form-editar { margin-top:2rem;padding:1rem;border:1px solid #ccc;background:#f9f9f9; }
        .form-editar input, .form-editar select { margin-bottom:10px;padding:6px;width:300px; }
        .form-editar label { display:block;margin-top:10px; }
        .mensaje { background-color:#095e15;text-align:center;font-size: 18px; padding:1rem;}
        .botones-editar { margin-top:1rem; }
        .botones-editar input[type=submit], .botones-editar a {
            padding:8px 16px;
            margin-right:10px;
            text-decoration:none;
            border:none;
            border-radius:5px;
        }
        .botones-editar input[type=submit] { background-color:#4caf50;color:white;cursor:pointer; }
        .botones-editar a { background-color:#f44336;color:white; }
    </style>
</head>
<body>

    <div class="titulo">Lista de Usuarios</div>

    <?php include 'buscador.php'; ?>
    <?php include 'tabla.php'; ?>
    <?php include 'paginacion.php'; ?>
    <?php include 'mensaje.php'; ?>

</body>
</html>
