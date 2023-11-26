document.getElementById('recuperarForm').addEventListener('submit', function (event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Aquí puedes realizar cualquier acción adicional antes de la redirección, si es necesario

    // Redirigir al usuario a la página deseada
    window.location.href = '../pages/error404.html';
});