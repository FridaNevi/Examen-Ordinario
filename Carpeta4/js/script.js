function contadorFor() {
    console.log("Contador Descendente con For:");
    // Inicia un contador desde 100 hasta 5
    for (let i = 1000; i >= 5; i -= 5) {
        console.log(i);
    }
    // Indica que el ciclo FOR ha terminado
    console.log("Fin del contador For");
}

function contadorWhile() {
    console.log("Contador Descendente con While:");
    // Inicializa el contador en 100
    let j = 1000;
    // Continúa mientras el contador sea mayor o igual a 5
    while (j >= 5) {
        console.log(j);
        // Decrementa el contador en 1 en cada iteración
        j -= 5;
    }
    // Indica que el ciclo WHILE ha terminado
    console.log("Fin del contador While");
}