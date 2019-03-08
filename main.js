$(document).ready(function(){

    var $carouselHomepage = $('.container-outer');
    $carouselHomepage.flickity({
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        adaptiveHeight: false,
        accessibility: false,
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true
    });

    $('.poem-navigation li').on('click', function() {
        var slideNumber = $(this).data('slide-number');
        $carouselHomepage.flickity( 'select', slideNumber-1 );
    });

    $('.translation-set').mouseenter(function(){
        $(this).find('.english').css('display', 'none');
        $(this).find('.spanish').css('display', 'inline');
    }).mouseleave(function(){
        $(this).find('.english').css('display', 'inline');
        $(this).find('.spanish').css('display', 'none');
    });
});