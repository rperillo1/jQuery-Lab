
$('#submit-button').on('click', function(){
    let $text = $('#text-input').val();
    let $task = $( `<tr> <td> <button class="btn btn-danger">X</button>&nbsp&nbsp${$text}</td> </tr>` );
    $('table').append($task);
    $('#text-input').val('');
})



$('.table').on('click', '.btn-danger', function(){
    $(this).closest('td').fadeOut();
})



