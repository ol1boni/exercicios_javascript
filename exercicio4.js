function calcularGastos(gastos) {
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        let valor = parseFloat(gastos[i]);

        if (!isNaN(valor)) {
            total += valor;
        }
    }

    console.log(`Total: R$ ${total.toFixed(2).replace('.00', '')}`);
    console.log("");

    if (total > 2000) {
        console.log("Limite ultrapassado");
    } else {
        console.log("Gastos dentro do limite");
    }
}

const entrada1_Ex4 = ["500", "350.50", "1000"];
calcularGastos(entrada1_Ex4);

console.log("\n-------------------\n");

const entrada2_Ex4 = ["800", "900", "700"];
calcularGastos(entrada2_Ex4);