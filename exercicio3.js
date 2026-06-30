function gerenciarBiblioteca(autoresString, autorParaBuscar, tituloLivro) {
    const autoresArray = autoresString.split(",");

    autoresArray.forEach(autor => console.log(autor));

    console.log("");

    if (autoresArray.includes(autorParaBuscar)) {
        console.log("Autor encontrado");
    } else {
        console.log("Autor não encontrado");
    }

    function formatarMensagem(titulo, autor) {
        return `O livro "${titulo}" foi escrito por ${autor}.`;
    }

}

const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
gerenciarBiblioteca(autores1, "Clarice Lispector", "Dom Casmurro");

console.log("\n-------------------\n");


const autores2 = "J. K. Rowling,J. R. R. Tolkien";
gerenciarBiblioteca(autores2, "Machado de Assis", "O Hobbit");