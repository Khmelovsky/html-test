 $(document).ready(function () {

    var navBox = $('.nav__box');
    var hamburger = $('.hamburger');
    var $window = $(window);

    // Burger icon condition
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

    // Mobile menu behavior
    navBox.on("click", "a", null, function () {
        if (hamburger.hasClass('is-active')){
            navBox.fadeOut();
            hamburger.removeClass('is-active');
            $window.disablescroll("undo");
        }
    });

    // Smooth anchor scrolling
    $("#nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });

    // Navbar condition
    var prevScrollpos = window.pageYOffset;
    var offset = $(".personal__range").offset();
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
    

    // Firebase config
    var rootRef = firebase.database().ref().child('form');

    /*checkbox filter*/
    $("input[type='checkbox']").on('change', function(){
          $(this).val(this.checked ? 'true' : 'false');
          if($(this).val() == 'true') {
              this.setAttribute('checked', 'checked');
          }
          else {
              this.removeAttribute('checked');
          }
      });



    $('#save').click(function(){
        rootRef.set({
            name:$('#firstName').val(),
            birth:$('#birthPlace').val(),
            skype:$('#skype').val(),
            email:$('#email').val(),
            message:$('#message').val(),
            box1:$('#box1').val(),
            box2:$('#box2').val(),
            box3:$('#box3').val(),
            box4:$('#box4').val(),
            box5:$('#box5').val(),
            box6:$('#box6').val(),
            box7:$('#box7').val(),
            box8:$('#box8').val(),
            box9:$('#box9').val(),
            age:$('.dropdown').val()
        });
    })
    rootRef.on('value', function(snapshot){
            //console.log(snapshot.child('name').val());
            $('#firstName').val(snapshot.child('name').val());
            $('#birthPlace').val(snapshot.child('birth').val());
            $('#skype').val(snapshot.child('skype').val());
            $('#email').val(snapshot.child('email').val());
            $('#message').val(snapshot.child('message').val());
            //checkboxes
            $('#box1').val(snapshot.child('box1').val()).ready(function(){
               if($('#box1').val() == 'true'){
                    $('#box1').attr('checked', true);
               }
            });
             $('#box2').val(snapshot.child('box2').val()).ready(function(){
               if($('#box2').val() == 'true'){
                    $('#box2').attr('checked', true);
               }
            });
              $('#box3').val(snapshot.child('box3').val()).ready(function(){
               if($('#box3').val() == 'true'){
                    $('#box3').attr('checked', true);
               }
            });
             $('#box4').val(snapshot.child('box4').val()).ready(function(){
               if($('#box4').val() == 'true'){
                    $('#box4').attr('checked', true);
               }
            });
             $('#box5').val(snapshot.child('box5').val()).ready(function(){
               if($('#box5').val() == 'true'){
                    $('#box5').attr('checked', true);
               }
            });
             $('#box6').val(snapshot.child('box6').val()).ready(function(){
               if($('#box6').val() == 'true'){
                    $('#box6').attr('checked', true);
               }
            });
             $('#box7').val(snapshot.child('box7').val()).ready(function(){
               if($('#box7').val() == 'true'){
                    $('#box7').attr('checked', true);
               }
            });
             $('#box8').val(snapshot.child('box8').val()).ready(function(){
               if($('#box8').val() == 'true'){
                    $('#box8').attr('checked', true);
               }
            });
             $('#box9').val(snapshot.child('box9').val()).ready(function(){
               if($('#box9').val() == 'true'){
                    $('#box9').attr('checked', true);
               }
            });
        });
});
