// Selecciona el elemento HTML con el ID 'texto' para manipular su contenido
const texto = document.getElementById('texto');

// Definición de un objeto que asocia teclas con colores específicos
const colors = {
    // Cada propiedad corresponde a un número de tecla y define un color de fondo y de texto
    '1': { bg: '#FFCDD2', color: '#B71C1C'}, // Color rojo claro con texto rojo oscuro
    '2': { bg: '#C8E6C9', color: '#1B5E20'}, // Color verde claro con texto verde oscuro
    '3': { bg: '#BBDEFB', color: '#0D47A1'}, // Color azul claro con texto azul oscuro
    '4': { bg: '#FFF9C4', color: '#F57F17'}, // Color amarillo claro con texto amarillo oscuro
    '5': { bg: '#D7CCC8', color: '#4E342E'}  // Color beige con texto marrón oscuro
};

// Cambia los colores del fondo y texto de la página según la tecla presionada
function colorizar(key) {
    // Verifica si la tecla presionada está definida en el objeto colors
    if (colors[key]) {
        // Cambia el color de fondo de la página
        document.body.style.backgroundColor = colors[key].bg;
        // Cambia el color del texto de la página
        document.body.style.color = colors[key].color;
    }
}

// Agrega un evento para capturar las teclas presionadas por el usuario
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key; // Obtiene la tecla presionada
    console.log(`Tecla presionada: "${keyPressed}"`); // Muestra en consola la tecla presionada
    if (keyPressed in colors) {
        // Si la tecla está en colors, aplica el cambio de colores
        colorizar(keyPressed);
        console.log(`🎨 ¡Color "${keyPressed}" activado!`); // Mensaje de confirmación
    } else {
        // Si la tecla no está definida, muestra un mensaje en consola
        console.log(`Tecla "${keyPressed}" no hace nada interesante. :(`);
    }
});

// Cambia el contenido del elemento 'texto' a "Hola Mundo"
function hola() {
    texto.textContent = ("Hola Mundo"); // Actualiza el texto mostrado en la página
}

// Cambia el contenido del elemento 'texto' a "Nos Vemos"
function nosVemos() {
    texto.textContent = ("Nos Vemos"); // Actualiza el texto mostrado en la página
}
