var num = parseInt(prompt("Informe um número inteiro positivo: "))
let x = 1;
for (let i = 1; i <= num; i++) {
    x *= i;
}
alert("Fatorial de " + num + " é " + x)