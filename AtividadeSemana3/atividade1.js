let palavras = [];
/*document.getElementById("palavra").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        novaPalavra();
    }
});*/
function novaPalavra() {
    let input = document.getElementById("palavra");
    let valor = input.value.trim();
    if (valor !== "" && !palavras.includes(valor.toLowerCase())) {
        palavras.push(valor);
        palavras.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
        dinamizar();
    } input.value = ""
}
function dinamizar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = ""
    for (let palavra of palavras) {
        let item = document.createElement("li");
        item.textContent = palavra;
        lista.appendChild(item);
    }
}