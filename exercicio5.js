function processarEvento(evento) {
    console.log(`Evento: ${evento.nome}`);
    
    if (evento.participantes.length > 0 && evento.local) {
        console.log(`Local: ${evento.local}`);
    }
    
    console.log(""); 
    const dia = String(evento.data.getUTCDate()).padStart(2, '0');
    const mes = String(evento.data.getUTCMonth() + 1).padStart(2, '0');
    const ano = evento.data.getUTCFullYear();
    console.log(`${dia}/${mes}/${ano}`);

    console.log(""); 

    console.log(`Participantes: ${evento.participantes.length}`);

    console.log(""); 

    if (evento.participantes.length === 0) {
        console.log("Nenhum participante cadastrado");
    } else {
       
        const temLocal = 'local' in evento;
        console.log(`Local cadastrado: ${temLocal}`);
    }
}

const entrada1_Ex5 = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana","Carlos","Marcos"]
};
processarEvento(entrada1_Ex5);

console.log("\n-------------------\n");

const entrada2_Ex5 = {
    nome: "Workshop Angular",
    local: "Laboratório 5",
    data: new Date("2026-09-10"),
    participantes: []
};
processarEvento(evento2 = entrada2_Ex5);