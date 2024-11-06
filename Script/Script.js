let n1, n2, n3, n4;
let N1, N2, N3, N4;

let pica = 0;
let fija = 0;
let turnos = 0;

// Función para generar un número aleatorio sin dígitos repetidos
function Num() {
    let Numero = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log("Número generado:", Numero);

    // Descomponer el número aleatorio en dígitos
    n1 = parseInt(Numero / 1000); Numero -= n1 * 1000;
    n2 = parseInt(Numero / 100); Numero -= n2 * 100;
    n3 = parseInt(Numero / 10); Numero -= n3 * 10;
    n4 = parseInt(Numero);

    // Verificar si hay dígitos repetidos, si los hay, genera otro número
    if (n1 == n2 || n1 == n3 || n1 == n4 || n2 == n3 || n2 == n4 || n3 == n4) {
        Num();
    }
}

// Función del juego
function Game() {
    turnos++;

    let input = document.getElementById('Numero');
    let numero = Number(input.value);

    if (numero < 1000 || numero > 9999) {
        alert("Por favor ingrese un número de 4 dígitos.");
        return;
    }

    // Descomponer el número ingresado en dígitos
    N1 = parseInt(numero / 1000); numero -= N1 * 1000;
    N2 = parseInt(numero / 100); numero -= N2 * 100;
    N3 = parseInt(numero / 10); numero -= N3 * 10;
    N4 = parseInt(numero);

    // Comparar los dígitos para contar "fijas" y "picas"
    if (N1 === n1) fija++;
    if (N2 === n2) fija++;
    if (N3 === n3) fija++;
    if (N4 === n4) fija++;

    if (N1 === n2 || N1 === n3 || N1 === n4) pica++;
    if (N2 === n1 || N2 === n3 || N2 === n4) pica++;
    if (N3 === n1 || N3 === n2 || N3 === n4) pica++;
    if (N4 === n1 || N4 === n2 || N4 === n3) pica++;

    // Mostrar resultados en la tabla
    let tableBody = document.querySelector("#resultados tbody");
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${turnos}</td>
        <td>${N1}${N2}${N3}${N4}</td>
        <td>${fija}</td>
        <td>${pica}</td>
    `;
    tableBody.appendChild(newRow);  

    // Verificar si el jugador ha ganado
    if (fija === 4) {
        alert("¡Ganaste!");
        input.value = '';
        return;
    }

    // Reiniciar picas y fijas para el próximo intento
    input.value = '';
    pica = 0;
    fija = 0;
}

// Inicializar el número aleatorio
Num();


