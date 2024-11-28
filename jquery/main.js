$(document).ready(function() {
    // Add tarefa
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault(); //Impede o envio padrão do formulario

        // Recupera o valor da tarefa
        let tarefa = $('#nome-tarefa').val().trim();

        // Cria um novo item da lista
        let novaTarefa = $('<li>')
        .text(tarefa)
        .append('<button class="remover">Remover</button>');

        // Add a tarefa na lista
        $('#lista-tarefas').append(novaTarefa);

        // Limpa o campo de entrada
        $('#nome-tarefa').val('');

        // Foca no campo de entrada
        $('#nome-tarefa').focus();
    });

    // Marca tarefa como comcluída (add linha sobre o texto)
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Add ou remove a casse 'completed'
    });

    // Remove tarefa
    $('#lista-tarefas').on('click', '.remover', function(event) {
        event.stopPropagation(); // Evita que o clique na tarefa a marque como concluída
        $(this).parent().remove(); // Remove o item da lista
    });
});