<?php 
include 'config.php';
// session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>McDonald's - Menú</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <style>
        .product-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .carrito-badge {
            position: relative;
            top: -10px;
            right: -5px;
        }
        .category-btn {
            margin: 5px;
            border: 2px solid #ffc107;
            border-radius: 5px;
            background: white;
            color: #333;
            transition: all 0.3s;
        }
        .category-btn:hover, .category-btn.active {
            background: #ffc107;
            color: #000;
            transform: scale(1.05);
        }
        .category-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
    </style>
</head>
<body class="bg-light">
    <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center mb-4 bg-danger text-white p-3 rounded">
        <a href="index.php" style="text-decoration: none;">
            <img src="imagenes/logo.jpg" style="max-width: 60px; border: 2px solid gold; border-radius: 5px;">
        </a>
            <h1 class="mb-0" style="color: gold;">McDonald's</h1>
            <a href="carrito.php" class="btn btn-outline-warning position-relative">
                <i class="bi bi-cart3"></i> Carrito
                <?php if (!empty($_SESSION['carrito'])): ?>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        <?php echo count($_SESSION['carrito']); ?>
                    </span>
                <?php endif; ?>
            </a>
        </div>

        <h2 class="mb-4 text-center">Nuestro Menú</h2>

        <div class="category-container">
            <button class="category-btn active" data-category="TODOS">💛 TODOS</button>
            <button class="category-btn" data-category="burguer">🍔 Hamburguesas</button>
            <button class="category-btn" data-category="picapica">🍟 PicaPica</button>
            <button class="category-btn" data-category="bebida">🥛 Bebidas</button>
            <button class="category-btn" data-category="postre">🍧 Postres</button>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4" id="productos-container">
            <?php
            $stmt = $conn->query("SELECT * FROM productos");
            while ($producto = $stmt->fetch(PDO::FETCH_ASSOC)) {
            ?>
            <div class="col producto" data-category="<?= htmlspecialchars($producto['categoria']) ?>">
                <div class="card h-100 product-card">
                    <div class="text-center p-4">
                        <img src="imagenes/<?= htmlspecialchars($producto['imagen']) ?>" class="card-img-top" alt="<?= htmlspecialchars($producto['nombre']) ?>" style="display: block; margin: auto;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><?= htmlspecialchars($producto['nombre']) ?></h5>
                        <p class="card-text text-muted"><?= htmlspecialchars($producto['descripcion']) ?></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-danger fw-bold">$<?= number_format($producto['precio'], 2) ?></span>
                            <form method="post" action="agregar_al_carrito.php">
                                <input type="hidden" name="id_producto" value="<?= $producto['id_producto'] ?>">
                                <button type="submit" class="btn btn-warning">
                                    <i class="bi bi-cart-plus"></i> Agregar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    // Agregar clase active al botón clickeado
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    const productos = document.querySelectorAll('.producto');
                    
                    productos.forEach(producto => {
                        if (category === 'TODOS' || producto.getAttribute('data-category') === category) {
                            producto.style.display = 'block';
                        } else {
                            producto.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
</body>
</html>