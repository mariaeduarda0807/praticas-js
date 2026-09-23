const formDdados = document.getElementById("formDados");

function converter(evento) {
    evento.preventDefault();

    let valorReais = Number(document.getElementById("valorReais").value);
    let valorDolar = valorReais / 5.14;

    const pResultado = document.getElementById("resultado");
    pResultado.textContent = "O resultado da conversão é: US$" + valorDolar.toFixed(2);
}

formDdados.addEventListener("submit", converter);

