class Tds {

    constructor(qtdAttendants, attendingTime) {
        this.attendingTime = attendingtime; // tempo de atendimento
        this.qtdAttendants = qtdAttendants; // quantidade de atendentes
        this.queue = {}; // json com os clientes na fila
        this.attendingQueue = {}; // json com os clientes em atendimento
    }

    addClient(client) {
        // integrar cliente na fila no componente do html
        this.queue[client.id] = client;
    }

    attendClient(client) {
        // remover cliente da fila no componente do html e bota no atendente
        delete this.queue[client.id];
        this.attendingQueue[client.id] = client;
    }

    removeClient(client) {
        // remove o cliente do atendente e do sistema
        delete this.attendingQueue[client.id];
    }

}