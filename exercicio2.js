function gerenciarMatricula(disciplinasIniciais, buscarDisciplina, novaDisciplina) {

    let disciplinas = [...disciplinasIniciais];

    let tccEncontrado = false;
    for (let i = 0; i < disciplinas.length; i++) {
        if (disciplinas[i] === "") {
            continue; 
        }
        
        console.log(disciplinas[i]);

        if (disciplinas[i] === "TCC") {
            console.log("\nLaço interrompido");
            tccEncontrado = true;
            break;
        }
    }

    if (tccEncontrado) return;

    console.log("");

    console.log(`Total: ${disciplinas.length}`);

    console.log("");

    if (disciplinas.includes(buscarDisciplina)) {
        console.log(`Aluno cursa ${buscarDisciplina}`);
    } else {
        console.log(`Aluno não cursa ${buscarDisciplina}`);
    }

    disciplinas.push(novaDisciplina);
}

gerenciarMatricula(["HTML", "CSS", "JavaScript"], "JavaScript", "React");

console.log("\n-------------------\n");

gerenciarMatricula(["Banco de Dados", "", "TCC", "Redes"], "JavaScript", "React");