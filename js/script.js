$(function() {

    $('.box button').click(function() {

        console.log($(this).parent().next().index());
        $(this).parent().hide().removeClass('active').next().fadeIn(800, function() {
            $(this).addClass('active').siblings().removeClass('active');
        })

    })





})