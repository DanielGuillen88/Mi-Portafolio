$(document).ready(function () {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            // Función para guardar el carrito en localStorage
            function guardarCarrito() {
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }

            // Función para renderizar el carrito
            function renderizarCarrito() {
                const carritoBody = $("#carrito-body");
                carritoBody.empty();
                let total = 0;

                carrito.forEach((item, index) => {
                    const subtotal = item.precio * item.cantidad;
                    total += subtotal;
                    carritoBody.append(`
                        <tr>
                            <td>${item.nombre}</td>
                            <td>$${item.precio.toFixed(2)}</td>
                            <td class="text-center align-middle">
                                <input type="number" min="1" value="${item.cantidad}" class="cantidad form-control d-block mx-auto" data-index="${index}">
                            </td>
                            <td>$${subtotal.toFixed(2)}</td>
                            <td class="p-0">
                                <button class="eliminar btn btn-outline-danger" data-index="${index}">❌</button>
                            </td>
                        </tr>
                    `);
                });

                $("#total-carrito").text(`$${total.toFixed(2)}`);
            }

            // Agregar producto al carrito
            $(".agregar-carrito").click(function () {
                const producto = $(this).closest(".producto");
                const id = producto.data("id");
                const nombre = producto.data("nombre");
                const precio = parseFloat(producto.data("precio"));

                // Verificar si el producto ya está en el carrito
                const existe = carrito.find(item => item.id === id);
                if (existe) {
                    existe.cantidad += 1;
                } else {
                    carrito.push({ id, nombre, precio, cantidad: 1 });
                }

                guardarCarrito();
                renderizarCarrito();
            });

            // Cambiar cantidad de un producto en el carrito
            $(document).on("input", ".cantidad", function () {
                const index = $(this).data("index");
                const cantidad = parseInt($(this).val());
                if (cantidad > 0) {
                    carrito[index].cantidad = cantidad;
                    guardarCarrito();
                    renderizarCarrito();
                }
            });

            // Eliminar producto del carrito
            $(document).on("click", ".eliminar", function () {
                const index = $(this).data("index");
                carrito.splice(index, 1);
                guardarCarrito();
                renderizarCarrito();
            });

            // Renderizar el carrito al cargar la página
            renderizarCarrito();
        });