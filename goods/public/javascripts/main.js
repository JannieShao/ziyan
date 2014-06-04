$(document).ready(function(){

    $('.search_text').focus()

    $(".top_all_softs").hover(function(){
        // $(".top_soft_show_all").css("display", "block");
        // $(".top_soft_show_all").slideDown()
        $(".top_soft_show_all").fadeIn()
    },function(){
        // $(".top_soft_show_all").css("display", "none");
        // $(".top_soft_show_all").slideUp()
        $(".top_soft_show_all").fadeOut()
    })

    var tag = ["#top_books",
            "#top_shuma",
            "#top_computer",
            "#top_cards",
            "#top_plays",
            "#top_decoration",
            "#top_shoes",
            "#top_clothes",
            "#top_sports",
            "#top_girls",
            "#top_boys",
            "#top_boys"]
    var tag2 = [".book_all",
            ".shuma_all",
            ".computer_all",
            ".cards_all",
            ".plays_all",
            ".decoration_all",
            ".shoes_all",
            ".clothes_all",
            ".sports_all",
            ".girls_all",
            ".boys_all",
            ".boys_all"]

    for(var i = 0;i<tag.length;i++) {
        var hovers = function(i){
            $(tag[i]).hover(function(){
                $(tag2[i]).css("display", "block");
            },function(){
                $(tag2[i]).css("display", "none");
            })
        }(i) 
        hovers       
    }

    $("#top_books").hover(function(){
        $(".book_all").css("display", "block");
    },function(){
        $(".book_all").css("display", "none");
    })

    $(".logout").click(function(){
        var res = confirm("确定退出？");
        if(!res){
            return
        }
        document.cookie = "users=; path=/;domain=192.168.33.10"
        location.href = "/index" 
    })


    if($(".login_err").val() == 1) {
        var res = confirm("\n确定更换账户？\n");
        if(!res){
            return
        }
        document.cookie = "users=; path=/;domain=192.168.33.10"
        location.href = "/login" 
    }

})