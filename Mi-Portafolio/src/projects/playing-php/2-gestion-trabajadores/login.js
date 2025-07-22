$("#formLogin").submit(function(e){
    e.preventDefault();

    let u = $("#us").val();
    let p = $("#pw").val();

    $.post(
        "validar.php",
        { us: u, pwd: p },
        function(r) {
            if (r.includes("satisfactoria")) {
                $("#feedback")
                    .removeClass()
                    .addClass("alert alert-success")
                    .html(r)
                    .show();

                $("#error").removeClass().empty().hide();
                $("#login").hide();

                // Esperamos 4 segundos antes de cargar el panel de control
                setTimeout(function() {
                    $("#feedback").fadeOut("fast");
                    $("#panelControl").load("controlPanel.php");
                }, 4000);
            } else {
                $("#error")
                    .removeClass()
                    .addClass("alert alert-danger")
                    .html(r)
                    .show();
                $("#us").val("").focus();
                $("#pw").val("");
            }
        }
    );
});
