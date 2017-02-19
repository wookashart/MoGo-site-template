

//accordion

$('button.accordion-button').on('click', function(e){
    $(this).next().toggleClass('down');
})   