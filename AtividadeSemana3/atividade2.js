document.addEventListener("DOMContentLoaded", () => {
    function calcular() {
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const ano = parseInt(document.getElementById('ano').value);
        const cor = document.getElementById('cor').value;
        const km = parseFloat(document.getElementById('km').value);
        const Fipe = parseFloat(document.getElementById('fipe').value);
        const dataAtual = new Date().getFullYear();

        if (!marca || !modelo || !ano || !cor || !km || !Fipe) {
            alert("Preencha todos os campos corretamente!");
            return;
        }        
        const carro = {
            marca,
            modelo,
            ano,
            cor,
            quilometragem: km,
            fipe: Fipe,

            rodagem: function () {
                return dataAtual - this.ano;
            }, 
            valorMercado: function () {
                const kmAno = this.quilometragem / this.rodagem();
                let valor = this.fipe;
                if (kmAno <= 30000) {
                    valor *= 1.1;} 
                else if (kmAno <= 50000) {
                    valor = this.fipe;} 
                else {
                    valor *= 0.9;}

                const valorFormatado = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(valor);

                return valorFormatado;
            }
        };
        const anosUso = carro.rodagem();
        const valorMercado = carro.valorMercado();

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.display = "block";
        resultadoDiv.innerHTML = `Anos de utilização: <strong>${anosUso}</strong>. Valor atual: R$<strong>${valorMercado}</strong>.`;
    }
    window.calcular = calcular;
});