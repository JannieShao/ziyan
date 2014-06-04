$(document).ready(function() {
    $('.remove_car').click(function(){
        event.preventDefault();
        var res = confirm("确定从购物车移除该物品？");
        if(!res){
            return
        }
        var id = $(this).data('id');
        $.ajax({
            url : "/remove_car/" + id,
            type : "delete",
        }).done(function(data) {
            if (data.ok !== 1) {
                alert('移除购物车信息出错')
            } else {
                setTimeout(function() {
                    location.reload()
                }, 500)               
            }
        })
    })
     $('.checkbox_select').click(function() {
        $('.user_car_action').css("display","block")       
    })

    $('.undo_car_select').click(function() {
        $('input:checkbox').attr("checked",false)
        $('.user_car_action').css("display","none")
    })

    // $(".btn-page").bind('click', function() {
    //     req_page = $(this).attr('data-page')
    //     query_by_page()
    // })
    
})