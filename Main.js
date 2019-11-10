
// criar futuros eventos DOM para pegar attendant e time
Tds = new Tds(attendant, time)
Eds = new Eds(attendant, time)

// se o botao do TDS for acionado, vai pra ca


// while () botão pausar não estiver apertado:
Client = new Client(id) // cria cliente e bota na fila
Tds.addClient(Client) 

Tds.attendClient(Client)  // é atendido

Tds.removeClient(Client) // sai do sistema

//////////////////////////////////////////////


// se o botao do EDS for acionado, vai pra ca

// while () botão pausar não estiver apertado:
Client = new Client(id) // cria cliente e bota na fila
Eds.addClient(Client)

Eds.attendClient(Client) // é atendido

Eds.removeClient(Client) // sai do sistema

/////////////////////////////////////////////

