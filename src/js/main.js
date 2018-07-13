$(document).ready(function () {

    var navBox = $('.nav__box');
    var hamburger = $('.hamburger');
    var $window = $(window);

    hamburger.on('click', function () {
        if (!hamburger.hasClass('is-active')){
            navBox
                .css('display', 'flex')
                .hide()
                .fadeIn();
            hamburger.addClass('is-active');
            $window.disablescroll();
        } else {
            navBox.fadeOut();
            hamburger.removeClass('is-active');
            $window.disablescroll("undo");
        }
    });


    $("#nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#subscribeLink").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });


    var prevScrollpos = window.pageYOffset;
    var offset = $(".advantages").offset();
    var blockOffset = offset.top;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos > blockOffset){
            document.getElementById("nav").style.background = "#fff";
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav").style.top = "0";
            } else {
                document.getElementById("nav").style.top = "-80px";
            }
        } else {
            document.getElementById("nav").style.background = "#ededed";
        }
        prevScrollpos = currentScrollPos;
    }



});