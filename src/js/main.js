$(document).ready(function () {

    var navBox = $('.nav__box');
    var hamburger = $('.hamburger');
    var linkItem = $('.nav__link');
    var $window = $(window);

    hamburger.on('click', function () {
        if (!hamburger.hasClass('is-active')){
            navBox
                .css('display', 'block')
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

    linkItem.on('click', function () {
         navBox.fadeOut();
         hamburger.removeClass('is-active');
    });

    var prevScrollpos = window.pageYOffset;
    var offset = $(".personal__skills").offset();
    var blockOffset = offset.top;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos > blockOffset){
            document.getElementById("nav").style.boxShadow = "unset";
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav").style.top = "0";
            } else {
                document.getElementById("nav").style.top = "-80px";
            }
        } else {
            document.getElementById("nav").style.boxShadow = "0 5px 5px -5px #333";
        }
        prevScrollpos = currentScrollPos;
    }
});