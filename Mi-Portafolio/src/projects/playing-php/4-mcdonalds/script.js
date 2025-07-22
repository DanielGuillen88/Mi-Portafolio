document.addEventListener('DOMContentLoaded', function() {
    // Botones de editar
    const editButtons = document.querySelectorAll('.edit-btn');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            
            fetch(`obtener_producto.php?producto_id=${productId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        document.getElementById('productoId').value = data.producto.id_producto;
                        document.getElementById('campoNombre').value = data.producto.nombre;
                        document.getElementById('campoDescripcion').value = data.producto.descripcion;
                        document.getElementById('campoPrecio').value = data.producto.precio;
                        document.getElementById('campoCategoria').value = data.producto.categoria;

                        const currentImage = document.getElementById('currentImageName');
                        if (data.producto.imagen) {
                            currentImage.textContent = data.producto.imagen;
                        } else {
                            currentImage.textContent = 'No hay imagen';
                        }

                        var myModal = new bootstrap.Modal(document.getElementById('modalCrearProducto'));
                        myModal.show();
                    } else {
                        alert('No se pudo cargar el producto');
                    }
                })
                .catch(error => {
                    console.error("Hubo un error al obtener el producto:", error);
                    alert('Hubo un error al cargar el producto');
                });
        });
    });

    // Manejar el submit del formulario
    crearForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(crearForm);
        const productoId = document.getElementById('productoId').value.trim();

        const url = productoId ? 'actualizar_producto.php' : 'crear_producto.php';

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const mensaje = productoId ? 'Producto actualizado exitosamente' : 'Producto creado exitosamente';
                alert(mensaje);
                location.reload();
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            alert('Hubo un error al enviar los datos');
            console.error(error);
        });
    });

    // Función para abrir el modal y limpiar formulario
    function abrirModalCrearProducto() {
        console.log('abrirModalCrearProducto llamada');
        const form = document.getElementById('crearForm');
        form.reset();
        document.getElementById('productoId').value = '';
        document.getElementById('currentImageName').textContent = '';

        const modal = new bootstrap.Modal(document.getElementById('modalCrearProducto'));
        modal.show();
    }

    // Evento click para abrir modal nuevo producto
    document.getElementById('btnNuevoProducto').addEventListener('click', function () {
        abrirModalCrearProducto();
    });


    // Botones de eliminar
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.dataset.id;

        if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            fetch('eliminar_producto.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `producto_id=${productId}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Producto eliminado exitosamente');
                    location.reload();
                } else {
                    alert('Error al eliminar el producto');
                }
            })
            .catch(error => {
                console.error('Error al eliminar:', error);
                alert('Hubo un error al intentar eliminar el producto');
            });
        }
    });
});

});
