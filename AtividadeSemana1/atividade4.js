let ent = prompt("Digite algo: ");
let conf = prompt("Deseja verificação de dado informado? (sim/não)");
let resposta = "";
for (let i = 0; i < conf.length; i++) {
    resposta += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(confirmacao[i])) ? confirmacao[i].toLowerCase() : confirmacao[i];
}
if (resposta === "sim" || resposta === "Sim") {
    let numero = true;
    for (let i = 0; i < entrada.length; i++) {
        if ((entrada[i] < '0' || entrada[i] > '9') && entrada[i] !== '.') {
            numero = false;
            break;
        }
    }
    if (numero && entrada.length > 0) {
        document.write("Number!");
    } else {
        document.write("String!");
    }
} else {
    document.write("Obrigado por visitar esta página");
}