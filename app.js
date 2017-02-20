

//accordion

$('button.accordion-button').on('click', function(e){
    $('.accordion-panel').removeClass('down');
    $(this).next().toggleClass('down');
})   