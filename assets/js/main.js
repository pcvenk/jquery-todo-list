//Checking off a completed to-do
$('li').click(function(){
   $(this).toggleClass('completed');
});

//Removing a to-do
$('span').click(function(e){
    //removing the parent element of the span
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //disable event bubbling
    e.stopPropagation();
});