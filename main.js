$(document).ready(function(e){
    $('form').on('submit', function(e){
        e.preventDefault();
        const adicionarTarefa = $('#tarefa-nova').val()
        const novaTarefa = $(`<li> ${adicionarTarefa} </li>`)
        $('ul').append(novaTarefa);
        $('ul').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through')
        })
        
    })
})