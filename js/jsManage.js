$(function() {
    $('.fas.fa-bars').click(function(){
        $('.fas.fa-bars').hide();
        $('.fas.fa-times').show();
        $('.menu').stop().slideDown();
        $('.menu-bg').show();
    });
    $('.fas.fa-times').click(function(){
        $('.fas.fa-times').hide();
        $('.fas.fa-bars').show();
        $('.menu').stop().slideUp();
        $('.menu-bg').hide();
    });

});


// Language
$(document).ready(function(){
    if ( $(window).width() > 1024 ) {
        $('.menu-language-btn').click(function() {
            $(this).next('.menu-language-options').stop().slideToggle().end().toggleClass('open');
        });

        $('.go-top').click(function(event) {
            event.preventDefault();
            $('.menu-language-options').slideUp(); 
            return false;
        })
        
    }else{
        
    }
});

// Edit
$(function() {
    $('.edit-box table').wrap('<div class="table_scroll"></div>');
});


// Go Top
$(function() {
    $(window).scroll(function (event) {

        var threshold = $(document).height() - $(window).height() - $('footer').height();

        if ($(window).scrollTop() > 0) {
            $('div.gotopBox').fadeIn(400);

            if ( $(window).scrollTop() >= threshold ) {
                $('.go-top').css({
                    top: "-65px",
                    right: "20px",
                    bottom: "auto",
                    position: "absolute"
                });
            } else {
                $('.go-top').css({
                    top: "auto",
                    right: "20px",
                    bottom: "20px",
                    position: "fixed"
                });
            }
        } else {
            $('div.gotopBox').fadeOut(400);
        }

    });

    $('.go-top').click(function () {
        $("html,body").animate({scrollTop:0},800);
    })
});

// Index
$(function(){
    $('.owl-index').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        navText:false,
        items:1,
        nav:false
    });
});
