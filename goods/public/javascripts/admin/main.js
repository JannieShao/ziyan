$(document).ready(function() {
    var choose = $("#admin_center")
    var choose_a = ".admin_center"
    var css_active = "selected"
    var icon_selected = "#fff"
    var icon_nomal = "#808080"
    var right = $("#admin_right")
    var href = window.location.href
    var hrefs = href.split("#")
    var res, a_action

    if(!hrefs[1]) {
        res = "#admin_center"
        a_action = ".admin_center"
    } else {
        res = "#"+hrefs[1]
        a_action = "."+hrefs[1]
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