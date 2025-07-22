$(document).ready(function () {
    $.getJSON("api.php?key=empleados", function (data) {
        if (data.error) {
            $("#lista").html(
                `<div class="alert alert-danger">${data.mensaje}</div>`
            );
        } else {
            let html = '<div class="row row-cols-1 row-cols-md-2 g-4">';
            data.forEach(function (empleado, index) {
                html += `
                    <div class="col">
                        <div class="card h-100 shadow-sm" data-index="${index}">
                            <div class="card-body bg-warning bg-gradient bg-opacity-10">
                                <h5 class="card-title">
                                    <span class="nombre">${empleado.nombre}</span>
                                    <span class="text-muted">#${empleado.id}</span>
                                </h5>
                                <p><strong>Puesto:</strong> <span class="puesto">${empleado.puesto}</span></p>
                                <p><strong>Departamento:</strong> <span class="departamento">${empleado.departamento}</span></p>
                                <p><strong>Fecha de contratación:</strong> <span class="fecha">${empleado.fecha_contratacion}</span></p>
                                <p><strong>Habilidades:</strong></p>
                                <ul class="list-group habilidades">
                                    ${empleado.habilidades.map(h => `<li class="list-group-item">${h}</li>`).join('')}
                                </ul>
                                <div class="mt-3">
                                    <button class="btn btn-sm btn-outline-primary editar">✏️ Editar</button>
                                    <button class="btn btn-sm btn-success guardar d-none">💾 Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            $("#lista").html(html);
        }

        // Delegamos eventos
        $("#lista").on("click", ".editar", function () {
            const card = $(this).closest(".card");
            card.find(".editar").addClass("d-none");
            card.find(".guardar").removeClass("d-none");

            const nombre = card.find(".nombre").text();
            const puesto = card.find(".puesto").text();
            const departamento = card.find(".departamento").text();
            const fecha = card.find(".fecha").text();
            const habilidades = card.find(".habilidades li").map(function () {
                return $(this).text();
            }).get().join(', ');

            // Reemplazar texto por inputs
            card.find(".nombre").replaceWith(`<input type="text" class="form-control mb-1 nombre" value="${nombre}">`);
            card.find(".puesto").replaceWith(`<input type="text" class="form-control mb-1 puesto" value="${puesto}">`);
            card.find(".departamento").replaceWith(`<input type="text" class="form-control mb-1 departamento" value="${departamento}">`);
            card.find(".fecha").replaceWith(`<input type="date" class="form-control mb-1 fecha" value="${fecha}">`);
            card.find(".habilidades").replaceWith(`<input type="text" class="form-control habilidades" value="${habilidades}">`);
        });

        $("#lista").on("click", ".guardar", function () {
            const card = $(this).closest(".card");
            card.find(".guardar").addClass("d-none");
            card.find(".editar").removeClass("d-none");

            const nombre = card.find("input.nombre").val();
            const puesto = card.find("input.puesto").val();
            const departamento = card.find("input.departamento").val();
            const fecha = card.find("input.fecha").val();
            const habilidades = card.find("input.habilidades").val().split(',').map(h => h.trim());

            // Sustituir inputs por valores de texto
            card.find("input.nombre").replaceWith(`<span class="nombre">${nombre}</span>`);
            card.find("input.puesto").replaceWith(`<span class="puesto">${puesto}</span>`);
            card.find("input.departamento").replaceWith(`<span class="departamento">${departamento}</span>`);
            card.find("input.fecha").replaceWith(`<span class="fecha">${fecha}</span>`);
            card.find("input.habilidades").replaceWith(`
                <ul class="list-group habilidades">
                    ${habilidades.map(h => `<li class="list-group-item">${h}</li>`).join('')}
                </ul>
            `);

            // Aquí podrías hacer un POST a un endpoint PHP que guarde el cambio si lo deseas
        });
    }).fail(function () {
        $("#lista").html(
            `<div class="alert alert-danger">⚠️ Error al cargar los datos de la API</div>`
        );
    });
});
