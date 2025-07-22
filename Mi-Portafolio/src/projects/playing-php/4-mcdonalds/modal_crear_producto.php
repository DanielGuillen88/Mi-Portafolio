<!-- Modal para crear y editar productos -->
<div class="modal fade" id="modalCrearProducto" tabindex="-1" aria-labelledby="modalCrearProductoLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCrearProductoLabel">Crear Producto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="crearForm" enctype="multipart/form-data">
                    <input type="hidden" id="productoId" name="producto_id">  <!-- Para editar -->

                    <!-- Campos para crear o editar -->
                    <div class="mb-3">
                        <label for="campoNombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="campoNombre" name="nombre" required>
                    </div>

                    <div class="mb-3">
                        <label for="campoDescripcion" class="form-label">Descripción</label>
                        <textarea class="form-control" id="campoDescripcion" name="descripcion" rows="3" required></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="campoPrecio" class="form-label">Precio</label>
                        <input type="number" class="form-control" id="campoPrecio" name="precio" step="0.01" min="0" required>
                    </div>

                    <div class="mb-3">
                        <label for="campoCategoria" class="form-label">Categoría</label>
                        <select class="form-control" id="campoCategoria" name="categoria" required>
                            <option value="burguer">Burguer</option>
                            <option value="picapica">Picapica</option>
                            <option value="postre">Postre</option>
                            <option value="bebida">Bebida</option>
                        </select>
                    </div>


                    <div class="mb-3">
                        <label for="campoImagen" class="form-label">Imagen</label>
                        <input type="file" class="form-control" id="campoImagen" name="imagen">
                        <small id="currentImage" class="form-text text-muted">Imagen actual: <span id="currentImageName"></span></small>
                    </div>

                    <button type="submit" class="btn btn-primary">Actualizar</button>
                </form>
            </div>
        </div>
    </div>
</div>
