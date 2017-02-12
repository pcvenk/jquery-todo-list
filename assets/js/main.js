//Checking off a completed to-do (you add an event listener to an element present at page load,
// on click of the second parameter the code below gets fired
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
        $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + input + '</li>');
    }
});

//Displaying the input field
// $('h1 i').on('click', function(){
//     $('input[type="text"').fadeToggle();
// });