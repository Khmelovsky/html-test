$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="custom-dropdown"></div>');
    $this.after('<div class="dropdown-styled"></div>');

    var $styledDropDown = $this.next('div.dropdown-styled');
    $styledDropDown.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options yearpicker-list simplebar',
        'id': 'scrollBar'
    }).insertAfter($styledDropDown);

    for (i = 1998; i > 1950; i--)
        {
            $('.yearpicker').append($('<option />').val(i).html(i));
            $('.yearpicker-list').append($('<li />').attr("rel", i ).html(i));
        }

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledDropDown.click(function(e) {
        e.stopPropagation();
        $('div.dropdown-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

   $listItems.click(function(e) {
            e.stopPropagation();
            $styledDropDown.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
             console.log($this.val());
        });
   
    $(document).click(function() {
        $styledDropDown.removeClass('active');
        $list.hide();
    });

});

