const formDados = document.getElementById("formDados");

function polegada(evento) {
 evento.preventDefault();

  let polegada = Number(document.getElementById("polegada").value);

  let valorCentimetro = polegada * 2.54;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "o resultado da conversão é: " + valorCentimetro.toFixed(2) + "cm";
}

formDados.addEventListener("submit", polegada);