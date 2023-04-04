$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault() ;

        const newTask = $('#task').val() ;
        const addNewTask = $(`<li></li>`) ;

        $(`<span class="clicked-text">${newTask}</span> \n`).appendTo(addNewTask) ;

        $(addNewTask).appendTo('ul') ;

        $('#task').val('') ;
    })

    $('ul').on('click','.clicked-text', function() {
        
        if ($(this).hasClass('clicked-on')) {
            $(this).removeClass('clicked-on') ;
        } else {
            $(this).addClass('clicked-on') ;
        }
        
    })

})