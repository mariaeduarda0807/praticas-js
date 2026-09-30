const formDados = document.getElementById("formDados");

    function salario(evento) {
    evento.preventDefault();

    let hora = Number(document.getElementById("hora").value);
    let htrabalhadas = Number(document.getElementById("htrabalhadas").value);

    let valorSalario = hora * htrabalhadas;

    const pResultado = document.getElementById("resultado");
    pResultado.textContent = "O salário do professor é: R$ " + valorSalario.toFixed(2);
}

formDados.addEventListener("submit", salario);