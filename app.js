// navigation

$('#menu-about').on('click', function(){
    $("html, body").animate({ scrollTop: $('#storyAboutUs').offset().top - 170}, 1000);
});

$('#menu-service').on('click', function(){
    $("html, body").animate({ scrollTop: $('#amazingServices').offset().top - 190}, 1000);
});

$('#menu-work').on('click', function(){
    $("html, body").animate({ scrollTop: $('#someWork').offset().top - 190}, 1000);
});

$('#menu-blog').on('click', function(){
    $("html, body").animate({ scrollTop: $('#blog').offset().top - 190}, 1000);
});

$('#menu-contact').on('click', function(){
    $("html, body").animate({ scrollTop: $('#maybe-contact').offset().top - 190}, 1000);
});

$('#learnMore').on('click', function(){
    $("html, body").animate({ scrollTop: $('#storyAboutUs').offset().top - 170}, 1000);
});

//accordion

$('button.accordion-button').on('click', function(e){
    $('.accordion-panel').removeClass('down');
    $(this).next().toggleClass('down');
})   