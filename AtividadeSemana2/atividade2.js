function relogio() {
    let momento = new Date();
    let hora = String(momento.getHours()).padStart(2, "0");
    let minuto = String(momento.getMinutes()).padStart(2, "0");
    let segundo = String(momento.getSeconds()).padStart(2, "0");
    document.getElementById("relogio_exato").innerText = `${hora}:${minuto}:${segundo}`;
    setTimeout(relogio, 1000);
}
relogio();