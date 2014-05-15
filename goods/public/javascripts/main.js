$(document).ready(function(){

    $(".top_all_softs").hover(function(){
        $(".top_soft_show_all").css("display", "block");
    },function(){
        $(".top_soft_show_all").css("display", "none");
    })

    $("#top_books").hover(function(){
        $(".book_all").css("display", "block");
    },function(){
        $(".book_all").css("display", "none");
    })

})