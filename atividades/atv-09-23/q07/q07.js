const formDados = document.getElementById("formDados");

function encontrarImpares(evento) {
    evento.preventDefault();

    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);

    let impares = "";

    for (let i = valor1; i <= valor2; i++) {
        if (i % 2 !== 0) {
            impares += i + " ";
        }
    }

    const pResultado = document.getElementById("resultado");

    pResultado.textContent = "Números ímpares: " + impares;
}

formDados.addEventListener("submit", encontrarImpares);