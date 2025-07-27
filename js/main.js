$(document).ready(function () {
    $('.title').click(function () {
        $(this).closest('.acc').find('.content').slideToggle(200)
    })
    $('.tabs ul li a').click(function (e) {
        e.preventDefault();
        $('.tabs ul li a').removeClass('active')
        $(this).addClass('active');
    })
})