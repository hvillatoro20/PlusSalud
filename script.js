document.getElementById('chatbot-btn').addEventListener('click', function() {
    const chatWindow = document.getElementById('chatbot-window');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('enviar-chat').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const correo = document.getElementById('correo').value;

    const mensaje = `Nombre: ${nombre}\nCelular: ${celular}\nCorreo: ${correo}`;
    alert('Información enviada:\n' + mensaje);
    // Aquí puedes agregar código para enviar la información al correo electrónico
});

document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoServicio = document.getElementById('tipoServicio').value;
    const calendario = document.getElementById('calendario').value;
    const hora = document.querySelector('.hora-btn.active').dataset.hora;

    const mensaje = `Tipo de Servicio: ${tipoServicio}\nFecha: ${calendario}\nHora: ${hora}`;
    alert('Cita agendada:\n' + mensaje);
    // Aquí puedes agregar código para enviar la información al correo electrónico
});

document.querySelectorAll('.hora-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.hora-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});