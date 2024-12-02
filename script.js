document.addEventListener('DOMContentLoaded', function() {
    mostrarFecha();
    actualizarNumeroContactos();
    document.getElementById('form-contacto').addEventListener('submit', guardarContacto);
});

function mostrarFecha() {
    const hoy = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
    document.getElementById('fecha-hoy').textContent = `Hoy es ${fechaFormateada}`;
}

function actualizarNumeroContactos() {
    const listaContactos = document.getElementById('lista-contactos');
    const numeroContactos = listaContactos.children.length;
    document.getElementById('numero-contactos').textContent = `Contactos guardados: ${numeroContactos}`;
}

function mostrarFormulario() {
    const formulario = document.getElementById('formulario-contacto');
    formulario.style.display = (formulario.style.display === 'none' || formulario.style.display === '') ? 'block' : 'none';
}

function guardarContacto(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    const contactoHTML = `
        <div class="tarjeta-contacto">
            <h3>${nombre}</h3>
            <p>Teléfono: ${telefono}</p>
            <p>Email: ${email}</p>
        </div>
    `;

    const listaContactos = document.getElementById('lista-contactos');
    listaContactos.insertAdjacentHTML('beforeend', contactoHTML);

    document.getElementById('form-contacto').reset();
    mostrarFormulario();
    actualizarNumeroContactos();

    // Mostrar alerta de éxito utilizando SweetAlert2
    Swal.fire({
        title: '¡Contacto Guardado!',
        text: 'El contacto se ha guardado correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
