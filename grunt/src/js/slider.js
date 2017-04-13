(function($) {
  $.fn.carousel = function(){
    var left = $('.left-arrow');
    var right = $('.right-arrow');
    var list = $('.carousel__list');
    var move = 120;
    var start = 0;
    var maxMove = 0;
    var number = list.find('li').length - 1;
    var minMove = number * (-move);

    left.on('click', function() {
        if (start != maxMove) {
            start += move;
            list.animate({left: start + "px"}, 1000);
        }
    });
    right.on('click', function() {
        if (start != minMove)
            start -= move;
        list.animate({left: start + "px"}, 1000);
    });
  }
})(jQuery);