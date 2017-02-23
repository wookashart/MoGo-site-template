//hamburger

$('#hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('nav.nav').toggleClass('down');
})

//navigation

$('#menu-about').on('click', function(){
    $("html, body").animate({ scrollTop: $('#storyAboutUs').offset().top - 170}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#menu-service').on('click', function(){
    $("html, body").animate({ scrollTop: $('#amazingServices').offset().top - 190}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#menu-work').on('click', function(){
    $("html, body").animate({ scrollTop: $('#someWork').offset().top - 190}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#menu-blog').on('click', function(){
    $("html, body").animate({ scrollTop: $('#blog').offset().top - 190}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#menu-contact').on('click', function(){
    $("html, body").animate({ scrollTop: $('footer').offset().top}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#learnMore').on('click', function(){
    $("html, body").animate({ scrollTop: $('#storyAboutUs').offset().top - 170}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

$('#go-home').on('click', function(){
    $("html, body").animate({ scrollTop: 0}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
});

//accordion

$('button.accordion-button').on('click', function(e){
    $('.accordion-panel').removeClass('down');
    $(this).next().toggleClass('down');
})   