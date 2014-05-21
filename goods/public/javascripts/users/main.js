$(document).ready(function() {
    var choose = $("#user_center")
    var choose_a = ".user_center"
    var css_active = "selected"
    var icon_selected = "#3cb371"
    var icon_nomal = "#5f9ea0"
    var right = $("#user_right")
    var href = window.location.href
    var hrefs = href.split("#")
    var res, a_action

    if(!hrefs[1]) {
        res = "#user_center"
        a_action = ".user_center"
    } else {
        res = "#"+hrefs[1]
        a_action = ".but_"+hrefs[1]
    }

    $('.left a span').removeClass(css_active);
    $(a_action).children().eq(1).addClass(css_active);
    $(".left a i").css("color", icon_nomal);
    $(a_action).children().eq(0).css("color", icon_selected); 
    
    right.children().css("display","none");

    $(res).css("display","block"); 

    $(".left ul li a").click(function() {
        location.replace(hrefs[0]+$(this).attr('href'))
        location.reload()
    })      

})