function processarProduto(produto) {
    produto.preco = parseFloat(produto.preco);


    if (!isNaN(produto.preco)) {
        console.log(`Produto: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2).replace('.00', '')}`);
    } else {
        console.log("Preço inválido.");
        return;
    }

    console.log("");

    if (produto.estoque < 10) {
        console.log("Estoque baixo");
    } else {
        console.log("Estoque adequado");
    }

    console.log(""); 

    console.log(JSON.stringify(Object.keys(produto)));
}

const entrada1_Ex1 = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};
processarProduto(entrada1_Ex1);

console.log("\n-------------------\n");

const entrada2_Ex1 = {
    nome: "Cadeira",
    categoria: "Escritório",
    preco: "450",
    estoque: 30
};
processarProduto(entrada2_Ex1);