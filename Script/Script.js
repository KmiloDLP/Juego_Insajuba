let n1, n2, n3, n4;
let N1, N2, N3, N4;

let pica = 0;
let fija = 0;
let turnos = 0;

function Num() {

    let Numero = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    console.log(Numero);

    // desfracmentar numero aleatorio
    n1 = parseInt(Numero / 1000); Numero -= n1 * 1000;
    n2 = parseInt(Numero / 100); Numero -= n2 * 100;
    n3 = parseInt(Numero / 10); Numero -= n3 * 10;
    n4 = parseInt(Numero / 1);


    if (n1 == n2 || n1 == n3 || n1 == n4 || n2 == n3 || n2 == n4 || n3 == n4) {
        Num();
    }

}

function Game() {

    turnos++;

    let input = document.getElementById('Numero');
    let numero = Number(input.value);


    if (numero < 1000 || numero > 9999) {
        alert("Por favor ingrese un número de 4 dígitos.");
        return;
    }

    // desfracmentar numero ingresado
    N1 = parseInt(numero / 1000); numero -= N1 * 1000;
    N2 = parseInt(numero / 100); numero -= N2 * 100;
    N3 = parseInt(numero / 10); numero -= N3 * 10;
    N4 = parseInt(numero / 1);



    // Comparar los dígitos 
    if (N1 == n1) pica++;
    if (N2 == n2) pica++;
    if (N3 == n3) pica++;
    if (N4 == n4) pica++;

    if (n2 == N1 || n3 == N1 || n4 == N1) fija++;
    if (n1 == N2 || n3 == N2 || n4 == N2) fija++;
    if (n1 == N3 || n2 == N3 || n4 == N3) fija++;
    if (n1 == N4 || n2 == N4 || n3 == N4) fija++;


    let tableBody = document.querySelector("#resultados tbody");
    let newRow = document.createElement('tr');

    // Añadir las celdas con los valores: Número de intento, Número ingresado, Picas y fijas
    newRow.innerHTML = `
        <td>${turnos}</td>
        <td>${N1}${N2}${N3}${N4}</td>
        <td>${pica}</td>
        <td>${fija}</td>
    `;

    tableBody.appendChild(newRow);  

    input.value = '';

    if (pica == 4) {
        alert("Ganastes");
        return;
    }

    // Reiniciar picas y fijas para el próximo intento
    pica = 0;
    fija = 0;
}

Num();


//<link rel="icon" href="Img/Icono.png">

