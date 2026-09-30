const carro = {marca: "Ferrari",
    modelo: "Ferrari LaFerrari",
    ano: 2024,
    cor: "Red",
    velocidade:10,

    buzinar: function () {
        console.log("Estou buzinando... BIIIII!!!!");
    },
    acelerar: function () {
        this.velocidade = this.velocidade += 10;
    },
    frear: function () {
        this.velocidade = this.velocidade += 5;
    }

}

console.table(carro);

carro.cor = "Branco"

console.table(carro);
console.log(`O ano do carro é: ${carro.ano}`);

carro.buzinar();
carro.acelerar();
console.table(carro);