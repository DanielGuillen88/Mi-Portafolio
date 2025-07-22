    // Array para almacenar los inscritos
    let inscritos = [
        {nombre: "Dani", apellido: "Guillen", email: "dani@dani.com"}
    ];

function cargarInscritosLocal() {
    const inscritosGuardados = localStorage.getItem("inscritos");
    if (inscritosGuardados) {
        inscritos = JSON.parse(inscritosGuardados);
    }
}


function guardarInscritosLocal() {
    localStorage.setItem("inscritos", JSON.stringify(inscritos));
}

function mostrarInscritos(inscritos) {

    inscritos.sort((a, b) => a.apellido.localeCompare(b.apellido));

    $("#listaInscritos").empty();
    if (inscritos.length === 0) {
        $("#listaInscritos").append("<li>No hay inscritos.</li>");
    } else {
        inscritos.forEach((inscrito, index) => {
            $("#listaInscritos").append(
                `<li class="p-1">${inscrito.apellido} - ${inscrito.nombre} - ${inscrito.email} 
                <button class="btnEditar  btn btn-warning p-0" data-index="${index}" style="display: none;">✍</button>
                <button class="btnEliminarRegistro btn btn-danger p-0" data-index="${index}" style="display: none;">💣</button></li>`
            );
        });
    }
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

$("#buscarApellido").on("input", function() {
    let consultarApellido = normalizeText($("#buscarApellido").val().trim());
    let inscritosFiltrados = inscritos.filter(inscrito => 
        inscrito.apellido.toLowerCase().includes(consultarApellido)
    );
    mostrarInscritos(inscritosFiltrados);
});

cargarInscritosLocal();
mostrarInscritos(inscritos);

const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
// Función para inscribir o actualizar
function guardarInscripcion() {
    let nombre = $("#nombre").val().trim();
    let apellido = $("#apellido").val().trim();
    let email = $("#email").val().trim();
    
    // Validaciones
    if (!nombre || !apellido || !email || !textRegex.test(nombre) || !textRegex.test(apellido) || !emailRegex.test(email)) {
        $("#mensaje").html("😵 Por favor, rellene todos los campos correctamente. ⚠").css("color", "tomato");;
        return;
    }

  
    // Verificar si el registro ya existe (solo para nuevos registros)
    if ($("#btnActualizar").css("display") === "none") {
        let existe = inscritos.some(inscrito =>
            inscrito.nombre === nombre && inscrito.apellido === apellido || inscrito.email === email
        );

        if (existe) {
            $("#mensaje").html("😵 El registro ya existe. ⚠").css("color", "tomato");
            return;
        }
    }

    // Agregar o actualizar en el array
    if ($("#btnActualizar").css("display") === "none") {
        // Nuevo registro
        inscritos.push({ nombre, apellido, email });
    } else {
        // Actualizar registro
        let index = $("#btnActualizar").data("index");
        inscritos[index] = { nombre, apellido, email };
        $("#btnActualizar").hide();
        $("#btnInscribirse").show();
    }

  
    // Mostrar mensaje de éxito
    $("#mensaje").html("✅ Registro guardado correctamente. 🎉").css("color", "green");

    guardarInscritosLocal();
    mostrarInscritos(inscritos);
    borrarInputs();
}

        // Función para cargar datos en el formulario al editar
        function cargarDatosFormulario(index) {
            let inscrito = inscritos[index];
            $("#nombre").val(inscrito.nombre);
            $("#apellido").val(inscrito.apellido);
            $("#email").val(inscrito.email);
            $("#btnInscribirse").hide();
            $("#btnActualizar").show().data("index", index);
        }

        // Evento para editar un registro
        $(document).on("click", ".btnEditar", function () {
            let index = $(this).data("index");
            cargarDatosFormulario(index);
        });

        // Evento para eliminar un registro
            $(document).on("click", ".btnEliminarRegistro", function () {
                const isConfirmed = confirm("😵 ¿Estás seguro de que quieres eliminar el inscrito seleccionado? 💣");
                
                if (isConfirmed) {      
                    let index = $(this).data("index");
                    inscritos.splice(index, 1); // Eliminar el registro del array
                    mostrarInscritos(inscritos); // Mostrar la lista actualizada
                    guardarInscritosLocal();
                    $("#mensaje").html("✅ Registro eliminado correctamente. 💣").css("color", "green");
                } else {
                    $("#mensaje").html("❌ Eliminación de registro cancelada. 😅").css("color", "tomato");  
                }
            });

        function borrarInputs() {
                $("#nombre").val('');
                $("#apellido").val('');
                $("#email").val('');
        }

        $("#btnBorrar").click(function() {
        borrarInputs();
        });

       
        // Evento para activar botones "Editar"
        $("#btnModificar").click(function () {
            $(".btnEditar").show();
            $(".btnEliminarRegistro").hide();
        });

        // Evento para activar botones "Eliminar"
        $("#btnEliminar").click(function () {
            $(".btnEliminarRegistro").show();
            $(".btnEditar").hide();
        });

        // Eventos
        $("#btnInscribirse").click(guardarInscripcion);
        $("#btnActualizar").click(guardarInscripcion);

