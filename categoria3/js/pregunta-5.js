window.onload = function () {
    var puntajeActual = parseInt(localStorage.getItem("Puntaje"));
    const btnSiguiente = document.getElementById('btn-siguiente');
    var opcionEscogida = "";
    var respuestaCorrecta = 'Eso tilin...!';
    btnSiguiente.addEventListener('click', () => {
        opcionEscogida = document.querySelector('input[name="meme_name"]:checked');
        if (!opcionEscogida) {
           alert('Por favor marca una respuesta');
           return false;
  
        } 
        else {
            if (opcionEscogida.value == respuestaCorrecta) {
                puntajeActual = puntajeActual + 1;
                localStorage.setItem("Puntaje", puntajeActual);
                Swal.fire({
                   title: 'Resultado',
                   text: "Respuesta Correcta",
                   icon: 'success',
                   timer: 2000,
                   showConfirmButton: false
                }).then((result) => {
                   location.href = '/categoria3/html/resultado.html';
                })
            }
            else {
                Swal.fire({
                   title: 'Resultado',
                   text: "Respuesta Incorrecta",
                   icon: 'error',
                   timer: 2000,
                   showConfirmButton: false
                }).then((result) => {
                    location.href = '/categoria3/html/resultado.html';
                })
            }
        };
  
    });
  
};