$(document).ready(function(){
    $('.title').click(function(){
        $(this).closest('.acc').find('.content').slideToggle(200)
    })
})