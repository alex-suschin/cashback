$(function() {

    $('.questions-item-show').click(function() {
        if ($(this).parents('.questions-item').hasClass('active')) {
            $(this).parents('.questions-item').removeClass('active');
            $(this).siblings('.questions-item-hide').hide(200);
            $('.questions-item-hide').hide(200);
        } else {
            $('.questions-item').removeClass('active');
            $('.questions-item-hide').hide(200);
            $(this).siblings('.questions-item-hide').show(200);
            $(this).parents('.questions-item').addClass('active');
        }

    });

});