function verificacaoPalindromo() {
    let texto = document.getElementById("entradaTexto").value;
    let textoFormatado = texto.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let palindromo = textoFormatado === textoFormatado.split("").reverse().join("");
    if (palindromo) {
        alert("Sim, palíndromo!");
    } else {
        alert("Não, não é palíndromo!");
    }
}