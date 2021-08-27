$(function() {

});

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

$('.bonus-top-btn-mob').click(function() {
    if ($(this).parents('.bonus-top').hasClass('active')) {
        $(this).parents('.bonus-top').siblings('.bonus-wrap').hide(200);
        $(this).parents('.bonus-top').removeClass('active');
    } else {
        $('.bonus-top').removeClass('active');
        $('.bonus-wrap').hide(200);
        $(this).parents('.bonus-top').siblings('.bonus-wrap').show(200);
        $(this).parents('.bonus-top').addClass('active');
    }
});


$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '1041') {
        $('.step-2__right .btn-red').insertAfter($('.step-2__left .circle-text'));
    } else {
        $('.step-2__left .btn-red').insertAfter($('.step-2__right b'));
    }
});