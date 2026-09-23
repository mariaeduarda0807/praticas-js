const formDados = document.getElementById("formDados");

function quadrado(evento) {
 evento.preventDefault();

  let quadrado = Number(document.getElementById("quadrado").value);

  let valorQuadrado = quadrado * quadrado;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "o quadrado do número é: " + valorQuadrado;
}

formDados.addEventListener("submit", quadrado);