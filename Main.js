var sequenceArray = [];

$( document ).ready(function() {
    $('#queue').html('');
    $('#attendantsList').html('');
});

$('#btnStart').click(function() {
    var qtdAttendants = $('#qtdAttendants').val(); // Pegando o valor do campo de Atendentes
    var attendingTime = $('#attendingTime').val(); // Pegando o valor do campo de Tempo

    if(qtdAttendants != "" && attendingTime != ""){
        Tds = new Tds(qtdAttendants, attendingTime);

        setInterval(addClientAtQueue, 3000,3); // Colocando um intervalo para que adicione tres clientes (passado como parametro) na fila de 3 em 3 segundos
        
        setInterval(attendClients, (attendingTime) * 1000); // Colocando um intervalo para que os clientes sejam atendidos
    }
});

/////////////////////////////////////////////

// se o botao do EDS for acionado, vai pra ca

// while () botão pausar não estiver apertado:
// Eds.addClient(Client)

// Eds.attendClient(Client) // é atendido

// Eds.removeClient(Client) // sai do sistema

/////////////////////////////////////////////

function addClientAtQueue(qtdClientsToAdd) {
    var index = 0;
    while (index < qtdClientsToAdd) {
        client = new Client(makeSequence()); // cria cliente
        Tds.addClient(client) // Adiciona na fila
        createElement(client);

        index++;
    }
    if($.isEmptyObject(Tds.attendingQueue)){
        $.each(Tds.queue, function(key, client) {
            if(Object.keys(Tds.attendingQueue).length != Tds.qtdAttendants){
                Tds.attendClient(client);
                moveElement(client);
            }else{
                return false;
            }
        });
    }
}

function attendClients(){
    if(!$.isEmptyObject(Tds.attendingQueue)){
        $.each(Tds.attendingQueue, function(key, client) {
            Tds.removeClient(client);
            removeElement(client);
        });
    }
    if(!$.isEmptyObject(Tds.queue)){
        $.each(Tds.queue, function(key, client) {
            if(Object.keys(Tds.attendingQueue).length != Tds.qtdAttendants){
                Tds.attendClient(client);
                moveElement(client);
            }else{
                return false;
            }
        });
    }
}

function createElement(client){
    var item = document.createElement('div');
    $(item).addClass('item');
    $(item).attr('id',"c"+client.id);

    var itemContent = document.createElement('div');
    $(itemContent).addClass('ui label content');

    var itemText = document.createElement('div');
    $(itemText).addClass('ui sub header');
    $(itemText).html("C-"+client.id);

    $(item).append(itemContent);
    $(itemContent).append(itemText);

    $('#queue').append(item);
}

function moveElement(client){
    $('#attendantsList').append($('#c'+client.id));
}

function removeElement(client){
    $('#c'+client.id).remove();
}

function makeSequence(){
    if(sequenceArray.length == 0){
        sequenceArray.push(1);
    }else{
        sequenceArray.push((sequenceArray[sequenceArray.length - 1]+1));
    }

    return sequenceArray[sequenceArray.length - 1];
}