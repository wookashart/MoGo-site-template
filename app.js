//hamburger

$('#hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('nav.nav').toggleClass('down');
})

//navigation

$('.nav-button').on('click', function(){
    var target = $(this).data('target');
    $("html, body").animate({ scrollTop: $(target).offset().top -160}, 1000);
    $('nav.nav').removeClass('down');
    $('#hamburger').removeClass('open');
})

//accordion

$('button.accordion-button').on('click', function(e){
    $('.accordion-panel').removeClass('down');
    $(this).next().toggleClass('down');
})   

$(window).on('scroll', function() {
    if ($('body').scrollTop() >= 150) {
        $('div.navigation').addClass('scrolled');
    } else {
        $('div.navigation').removeClass('scrolled');
    }
})