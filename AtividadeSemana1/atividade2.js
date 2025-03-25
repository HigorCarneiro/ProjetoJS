var num = parseInt(prompt("Informe um número inteiro positivo: "))
let primo = true;
if (num === 1){
    primo = false
} else {
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % 1 === 0){
            primo = false;
            break;
        }
    }
}
if (primo) {
    alert(num + " é primo");
}
else {
    alert(num + " não é primo");
}