let nome = "Maria Eduarda";
let idade = 18;

console.log("O nome do usuário é: " + nome);
console.log("A idade do usuário é: " + idade);

const pNomeUsuario = document.getElementById("NomeUsuario");
pNomeUsuario.textContent = "O nome do usuário é: " + nome;

const pIdadeUsuario = document.getElementById("IdadeUsuario");
pIdadeUsuario.textContent = "A idade do usuário é: " + idade;
