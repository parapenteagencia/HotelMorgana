$("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Por favor llene todos los campos requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var tel = $("#tel").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "../php/contacto-es.php",
        data: "name=" + name + "&tel=" + tel + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}

function formSuccess() {
    $("#contactForm");
    submitMSG(true, "¡Mensaje Enviado!")
    document.getElementById("contactForm").reset();
}

function formError() {
    $("#contactForm").addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h6 text-center fadeIn animated text-success";
    } else {
        var msgClasses = "h6 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}