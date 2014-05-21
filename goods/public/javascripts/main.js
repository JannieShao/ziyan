$(document).ready(function(){

    $(".top_all_softs").hover(function(){
        // $(".top_soft_show_all").css("display", "block");
        // $(".top_soft_show_all").slideDown()
        $(".top_soft_show_all").fadeIn()
    },function(){
        // $(".top_soft_show_all").css("display", "none");
        // $(".top_soft_show_all").slideUp()
        $(".top_soft_show_all").fadeOut()
    })

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