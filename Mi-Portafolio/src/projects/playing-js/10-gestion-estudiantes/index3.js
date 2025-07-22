let studentsList = [
    {name: "Juan", surname: "Suarez", age: 20, subject: "Matemáticas", average: 8.5},
    {name: "María", surname: "Rodriguez", age: 22, subject: "Física", average: 9.0},
    {name: "Carlos", surname: "Duarte", age: 21, subject: "Matemáticas", average: 7.8},
    {name: "Ana", surname: "Mejide", age: 19, subject: "Química", average: 9.5},
    {name: "Luis", surname: "Alfonso", age: 20, subject: "Física", average: 8.0}
];

function loadStudents() {
    const savedStudent = localStorage.getItem("studentsList");
    if (savedStudent) {
        studentsList = JSON.parse(savedStudent);
    }
}

// Función para mostrar el total de estudiantes
function getTotalStudents() {
    let totalStudents = studentsList.length;
    $("#totalStudents").html("Hay un total de " + totalStudents + " estudiantes.");
}

function saveStudentLocal() {
    localStorage.setItem("studentsList", JSON.stringify(studentsList));
}

// Función para renderizar la tabla con estudiantes
function renderTable(students) {
    $("#students").empty(); // Limpiar la tabla actual

    // Iterar sobre la lista de estudiantes y agregar filas
    students.forEach((student, index) => {
        $("#students").append(
            `<tr>
                <th scope="row">${student.surname}</th>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.subject}</td>
                <td>${student.average}</td>
                <td id="setting">
                    <button class="btn border-0" onclick="editStudent(${index})" data-id="${index}">✍</button>
                </td>
            </tr>`
        );
    });
}

function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para filtrar estudiantes
function filterStudents() {
    const nameFilter = normalizeText($("#name").val().trim());
    const surnameFilter = normalizeText($("#surname").val().trim());
    const subjectFilter = normalizeText($("#subject").val().trim());

    // Filtrar la lista de estudiantes
    const filteredStudents = studentsList.filter(student => {
        const matchesName = student.name.toLowerCase().includes(nameFilter);
        const matchesSurname = student.surname.toLowerCase().includes(surnameFilter);
        const matchesSubject = student.subject.toLowerCase().includes(subjectFilter);

        return matchesName && matchesSurname && matchesSubject;
    });

    // Renderizar la tabla con los estudiantes cargados o iniciales
    renderTable(filteredStudents);
}

// Evento para filtrar los estudiantes cuando se escribe en los inputs
$("#searchInput input").on("input", function() {
    filterStudents();
});

// Inicializar la tabla con todos los estudiantes
loadStudents();
renderTable(studentsList);
getTotalStudents();

// Función para cambiar entre los botones de edición y eliminación (💣✍)
function toggleAllSettings() {
    $("#students td[id='setting']").each(function() {
        const button = $(this).find("button");
        if (button.text() === '✍') {
            button.html('💣');
            button.attr('onclick', 'deleteStudent(' + button.data('id') + ')');
        } else {
            button.html('✍');
            button.attr('onclick', 'editStudent(' + button.data('id') + ')');
        }
    });
}

    // Función para eliminar un estudiante
    function deleteStudent(studentId) {
        const studentName = studentsList[studentId].name;
        const isConfirmed = confirm("¿Estás seguro de que quieres eliminar a " + studentName + "? 💣");
        
        if (isConfirmed) {
            studentsList = studentsList.filter((student, index) => index !== studentId);
            renderTable(studentsList);
            saveStudentLocal();
            getTotalStudents();
            alert("Eliminación completada 💥");
        } else {
            alert("Eliminación cancelada 🙈");
        }
    }

    // Función para editar un estudiante
    function editStudent(studentId) {
        const student = studentsList[studentId];
        const isConfirmed = confirm("¿Estás seguro de que quieres editar a " + student.name + "? ✍");
        
        if (isConfirmed) {
            $("#addName").val(student.name);
            $("#addSurname").val(student.surname);
            $("#addAge").val(student.age);
            $("#addSubject").val(student.subject);
            $("#addAverage").val(student.average);
            $("#submitBtn").data('studentId', studentId);
        } else {
            alert("Edición cancelada 🙈");
        }
    }

    // Regex para texto
    const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    // Función para guardar o editar el estudiante
    function saveStudent() {
        let name = $("#addName").val();
        let surname = $("#addSurname").val();
        let age = $("#addAge").val();
        let subject = $("#addSubject").val();
        let average = $("#addAverage").val();

        // Validaciones
        if (!name || !surname || !subject || !textRegex.test(name) || !textRegex.test(surname) || !textRegex.test(subject) || isNaN(age) || age < 3 || isNaN(average) || average < 0 || average > 10) {
            alert("🙉 Por favor, rellene todos los campos correctamente 🙊");
            return;
        }

        name = capitalizeFirstLetter(name);
        surname = capitalizeFirstLetter(surname);
        subject = capitalizeFirstLetter(subject);

        const updatedStudent = {
            name: name,
            surname: surname,
            age: age,
            subject: subject,
            average: average
        };

        const studentId = $("#submitBtn").data('studentId');
        if (studentId !== undefined) {
            studentsList[studentId] = updatedStudent;
            alert("Edición completada 🎉");
        } else {
            studentsList.push(updatedStudent);
            alert("Estudiante agregado 🎉");
        }

        renderTable(studentsList);
        saveStudentLocal();
        getTotalStudents();

        $("#submitBtn").removeData('studentId');
        $("#addName").val('');
        $("#addSurname").val('');
        $("#addAge").val('');
        $("#addSubject").val('');
        $("#addAverage").val('');
    }

// Función para capitalizar la primera letra de cada palabra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Evento para cambiar los botones de edición y eliminación
$("#toggleSettingsBtn").click(function() {
    toggleAllSettings();
});

// Evento para guardar los cambios del estudiante
$("#submitBtn").click(function() {
    saveStudent();
});