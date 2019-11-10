class Client {

    constructor(id, age, attendant, timeQueue, timeAttend, timeGeneral) {
        this.id = id;
        this.age = Math.floor(Math.random() * 90) + 1; // idade aleatoria
    }

    setTimeQueue(timeQueue) {
        this.timeQueue = timeQueue; // tempo de fila
    }

    beAttend(attendant) { // ser atendido
        this.attendant = attendant;  // pega o atendente que atendeu ele
    }

    leave(timeAttend) {
        this.timeAttend = timeAttend; // tempo de atendimento
        this.timeGeneral = this.timeAttend + this.timeQueue // tempo do sistema
    } 
}

