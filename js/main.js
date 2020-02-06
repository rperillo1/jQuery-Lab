// $('#text-input').value);

// $('#submit-button').on('click', function(e){
//     e.preventDefault();
//     console.log($('form').method)
//     let $task = $( '<tr> <td> <input type="checkbox" class="checkbox">yoasdads</td> </tr>' );
//     $('table').append($task);
// })
$('#submit-button').on('click', function(){
    let $text = $('#text-input').val();
    let $task = $( `<tr> <td> <button class="btn btn-danger">X</button>&nbsp&nbsp${$text}</td> </tr>` );
    $('table').append($task);
    $('#text-input').val('');
})



$('.table').on('click', '.btn-danger', function(){
    // $(this).text = 'X';
    $(this).closest('td').fadeOut();
})



