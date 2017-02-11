//Checking off a completed to-do
$('ul').on('click', 'li', function(){
   $(this).toggleClass('completed');
});

//Removing a to-do
$('ul').on('click', 'span', function(e){
    //removing the parent element of the span
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //disable event bubbling
    e.stopPropagation();
});

//Adding a new to-do
$('input[type="text"').keypress(function(e) {
    //if Enter is pressed
    if(e.which === 13){
        var input = $(this).val();
        $(this).val('');
        //append new to-do to the end of the ul
        $('ul').append('<li><span>X</span> ' + input + '</li>');
    }
});