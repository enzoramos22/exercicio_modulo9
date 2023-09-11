$(document).ready(function(e){
    $('form').on('submit', function(e){
        e.preventDefault();
        const adicionarTarefa = $('#tarefa-nova').val()
        const novaTarefa = $('<li></li>')
        $(`<li> ${adicionarTarefa} </li>`).appendTo(novaTarefa)
    })
})