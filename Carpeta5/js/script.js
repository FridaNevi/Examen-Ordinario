 // Evento para capturar la tecla presionada
 document.addEventListener('keydown', function(event) {
    // Captura el valor de la tecla presionada y lo convierte a número
    const keyPressed = event.key;
    const salida = document.getElementById('salida');

    // Verifica si la tecla es un número válido entre 0 y 9
    if (keyPressed >= 0 && keyPressed <= 9) {
        //Limpiamos el campo
        salida.textContent = "";

        // Imprime los números desde la tecla presionada hasta 9
        for (let i = keyPressed; i <= 9; i++) {
            salida.textContent += i + " "; // Equivalente a salida.textContent = salida.textContent + 1 + " "
        }
    } else {
        console.log(evento.key + " no es una tecla correcta");
    }
});