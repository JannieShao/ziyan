$(document).ready(function() {

    var $msg = $(".user_center_msg")
    var $pwd = $(".user_center_pwd")
    var $up_msg = $(".update_user_center_msg")

    var $c_msg = $(".show_user_msg")
    var $c_pwd = $(".change_user_pwd")
    var $u_msg = $(".update_user_msg")

    var select = "change_user_selected"
    var nomal = "change_user_nomal"

    var icon_change = [ '.birth_ok','.birth_err',
                        '.tel_ok','.tel_err'
                        ]
    var icon_update = [ '.name_ok','.name_err',
                        '.birth_ok','.birth_err',
                        '.school_ok','.school_err',
                        '.tel_ok','.tel_err'
                        ]
    var icon_pwd = ['.new_pwd_ok','.new_pwd_err',
                    '.new_repwd_ok','.new_repwd_err'
                    ]

    var input_change = ['.birth','.tel']
    var input_update = ['.name','.birth','.school','.tel']
    var input_pwd = ['.old_pwd','.new_pwd','.new_repwd']

    var input_div_change = ['.change_user_birth','.change_user_tel']

    function input_null(args) {
        for(var item in args) {
            $(args[item]).val("")
        }
    }
    $c_msg.click(function() {
        $msg.css("display", "block")
        $pwd.css("display", "none")
        $up_msg.css("display", "none")

        $c_msg.removeClass(nomal).addClass(select)
        $c_pwd.removeClass(select).addClass(nomal)
        $u_msg.removeClass(select).addClass(nomal)

        change_display(icon_change, "none")
        change_display(input_div_change, "none")
        $(".user_center_birth").css("display", "block")
        $(".user_center_tel").css("display", "block")
        $(".change_user_sex").css("display", "none")
        $(".user_center_sex").css("display", "block")
        $(".change_user_msg_sub_btn").css("display", "none")
    })

    $c_pwd.click(function() {
        $msg.css("display", "none")
        $pwd.css("display", "block")
        $up_msg.css("display", "none")

        $c_pwd.removeClass(nomal).addClass(select)
        $c_msg.removeClass(select).addClass(nomal)
        $u_msg.removeClass(select).addClass(nomal)

        change_display(icon_pwd, "none")
        input_null(input_pwd)
        $(input_pwd[0]).focus()
    })
    $u_msg.click(function() {
        $up_msg.css("display", "block")
        $msg.css("display", "none")
        $pwd.css("display", "none")

        $u_msg.removeClass(nomal).addClass(select)
        $c_pwd.removeClass(select).addClass(nomal)
        $c_msg.removeClass(select).addClass(nomal)
        change_display(icon_update, "none")
        input_null(input_update)
        $(input_update[0]).focus()
    })

    var color_err = '#FF4040'
    var color_ok = '#000'

    $(".change_sex_btn").click(function() {
        $(".change_user_sex").css("display", "block")
        $(".user_center_sex").css("display", "none")

        $(".change_user_msg_sub_btn").css("display", "block")
    })
    $(".change_birth_btn").click(function() {
        $(".change_user_birth").css("display", "block")
        $(".user_center_birth").css("display", "none")

        $(input_change[0]).val("")

        $(".change_user_msg_sub_btn").css("display", "block")

        $(input_change[0]).focus()
    })

    $(".change_tel_btn").click(function() {
        $(".change_user_tel").css("display", "block")
        $(".user_center_tel").css("display", "none")

        $(input_change[1]).val("")

        $(".change_user_msg_sub_btn").css("display", "block")

        $(input_change[1]).focus()
    })

//check name
    $(".name").blur(function(event) {
        $self = $(this);
        var name = $self.val()
        if(name == "") {
            $self.val("姓名不能为空").css("color", color_err)
            $('.name_ok').css("display", "none")
            $('.name_err').css("display", "block")
        } else {
            var re = /^[\u4e00-\u9fa5]{2,4}$/
            if(!re.test(name)) {
                $self.val("姓名必须是2-4位汉字").css("color", color_err)
                $('.name_ok').css("display", "none")
                $('.name_err').css("display", "block")
            } else {
                $('.name_err').css("display", "none")
                $('.name_ok').css("display", "block")
            }
        }
    })

    $(".name").focus(function(){
        if($(this).val() === "姓名不能为空"||$(this).val() === "姓名必须是2-4位汉字"){
            $(this).val("").css("color", color_ok)
        } else {
            $(this).css("color", color_ok)
        }
    })
//check birthday
    $(".birth").blur(function() {
        $self = $(this);
        var birth = $self.val()
        if(birth == "") {
            $self.val("生日不能为空").css("color", color_err)
            $('.birth_ok').css("display", "none")
            $('.birth_err').css("display", "block")
        } else {
            var err = is_date_string(birth)
            if(err) {
                $self.val(err).css("color", color_err)
                $('.birth_ok').css("display", "none")
                $('.birth_err').css("display", "block")
            } else {
                $('.birth_err').css("display", "none")
                $('.birth_ok').css("display", "block")
            }
        }
    })

    function is_date_string(str){
        var err                 //出错信息
        var separator = "-"     //日期分隔符

        var date_array = str.split(separator)
        if(date_array.length != 3) {
            err = "日期格式必须为: yyyy-MM-dd"
            return err
        }

        var year  = parseInt(date_array[0], 10);
        var month = parseInt(date_array[1], 10);
        var day   = parseInt(date_array[2], 10);

        if(isNaN(year)||isNaN(month)||isNaN(day)) {
            err = "日期格式错误: 年月日必须为纯数字"
            return err
        }

        if(month>12 || month<1) {
            err = "日期格式错误: 月份必须介于1和12之间"
            return err
        }

        if( is_greater_month(month) && (day>31||day<1) ) {
            err = "日期格式错误: 大月的天数必须介于1到31之间"
            return err
        }
        if( !is_greater_month(month) && (day>30||day<1) ) {
            err = "日期格式错误: 小月的天数必须介于1到31之间"
            return err
        }

        if(month==2) {
            if(is_leap_year(year) && day > 29) {
                err = "日期格式错误: 闰年的2月份天数不能超过29"
                return err
            }

            if(!is_leap_year(year) && day > 28) {
                err = "日期格式错误: 非闰年的2月份天数不能超过28"
                return err
            }
        }

        return err
    }
    //-----------------------------------------------------
    function is_leap_year(year) {  //判断闰年
        if (year % 4 == 0 && year % 100 != 0) {
            return true
        }

        if(year % 400 == 0) {
            return true
        }

        return false
    }
    //---------------------------------------------------------------------------------------------------------
    function is_greater_month(month) {  //判断大月
        return (month-1)%7%2 == 0
    }

    $(".birth").focus(function(){
        var err = is_date_string($(this).val())
        if(err){
            $(this).val("").css("color", color_ok)
        } else {
            $(this).css("color", color_ok)
        }
    })
//check school
    $(".school").blur(function() {
        $self = $(this);
        var school = $self.val()
        if(school == "") {
            $self.val("所在学校不能为空").css("color", color_err)
            $('.school_ok').css("display", "none")
            $('.school_err').css("display", "block")
        } else {
            $('.school_err').css("display", "none")
            $('.school_ok').css("display", "block")
        }
    })

    $(".school").focus(function(){
        if($(this).val() === "所在学校不能为空"){
            $(this).val("").css("color", color_ok)
        } else {
            $(this).css("color", color_ok)
        }
    })
//check tel
    $(".tel").blur(function() {
        $self = $(this);
        var tel = $self.val()
        if(tel == "") {
            $self.val("手机号码不能为空").css("color", color_err)
            $('.tel_ok').css("display", "none")
            $('.tel_err').css("display", "block")
        } else {
            var re = /^[1][0-9]{10}$/
            if(!re.test(tel)) {
                $self.val("手机号码格式错误").css("color", color_err)
                $('.tel_ok').css("display", "none")
                $('.tel_err').css("display", "block")
            } else {
                $.ajax({
                    type : "post",
                    url  : "/do_check_tel/"+tel,
                    data : $self.serialize(),
                }).done(function(data) {
                    if(data.tel_ok === 0) {
                        $self.val("手机号码已存在").css("color", color_err)
                        $('.tel_err').css("display", "block")
                    } else {
                        $('.tel_err').css("display", "none")
                        $('.tel_ok').css("display", "block")
                    }
                })
                
            }           
        }
    })

    $(".tel").focus(function(){
        if($(this).val() === "手机号码不能为空"||$(this).val() === "手机号码格式错误"||$(this).val() === "手机号码已存在"){
            $(this).val("").css("color", color_ok)
        } else {
            $(this).css("color", color_ok)
        }
    })
//submit form
    $(".form_change_user_msg").submit(function(event) {
        $self = $(this);
        var id = $("#do_change_user_msg").data("id")
        //alert(">>>here")
        $.ajax({
            type : $self.attr('method'),
            url  : $self.attr('action')+"/"+id,
            data : $self.serialize(),
        }).done(function(data) {
            if (data.change_ok === 1) {
                alert('修改个人信息成功')
                setTimeout(function() {
                    location.reload()
                }, 500)                
            } else {
                alert('修改个人信息失败')                
            }
        })
        event.preventDefault()
    })
    $(".form_update_user_msg").submit(function(event) {
        $self = $(this);
        var id = $("#do_update_user_msg").data("id")
        //alert(">>>here")
        $.ajax({
            type : $self.attr('method'),
            url  : $self.attr('action')+"/"+id,
            data : $self.serialize(),
        }).done(function(data) {
            if (data.update_ok === 1) {
                alert('修改个人信息成功')
                setTimeout(function() {
                    location.reload()
                }, 500)                
            } else {
                alert('修改个人信息失败')                
            }
        })
        event.preventDefault()
    })
//-----update undo
    $("#update_user_msg_undo").click(function() {
        change_display(icon_update, "none")
        $(".name").focus()
    })
    $("#change_user_msg_undo").click(function() {
        change_display(icon_change, "none")
        change_display(input_div_change, "none")
        $(".user_center_birth").css("display", "block")
        $(".user_center_tel").css("display", "block")
        $(".change_user_sex").css("display", "none")
        $(".user_center_sex").css("display", "block")
        $(".change_user_msg_sub_btn").css("display", "none")
    })
    $("#change_user_pwd_undo").click(function() {
        change_display(icon_pwd, "none")
        $(".old_pwd").focus()
    })
    function change_display(args,action) {
        for(var temp in args) {
            $(args[temp]).css("display", action)
        }
    }

//----------------修改密码
    $(".new_pwd").blur(function() {
        var pwd = $(this).val()
        if(pwd == ""||pwd == "请输入密码") {
            $(this).attr("type", "text")
            $(this).val("请输入密码").css("color", color_err)
            $('.new_pwd_ok').css("display", "none")
            $('.new_pwd_err').css("display", "block")
        } else {
            if(pwd.length <6) {
                $(this).attr("type", "text")
                $(this).val("密码长度为6-12").css("color", color_err)
                $('.new_pwd_ok').css("display", "none")
                $('.new_pwd_err').css("display", "block")
            } else {
                $('.new_pwd_err').css("display", "none")
                $('.new_pwd_ok').css("display", "block")
            }            
        }
    })

    $(".new_pwd").focus(function(){
        $(this).attr("type", "password")
        if($(this).val() === "请输入密码"||$(this).val() === "密码长度为6-12"){
            $(this).val("").css("color", color_ok)
        } else {
            $(this).css("color", color_ok)
        }
    })

    $(".new_repwd").blur(function() {
        var pwd = $(".new_pwd").val()
        var repwd = $(".new_repwd").val()
        if(pwd !== repwd) {
            $(this).attr("type", "text")
            $(this).val("两次输入密码不同").css("color", color_err)
            $('.new_repwd_ok').css("display", "none")
            $('.new_repwd_err').css("display", "block")
        } else {
            $('.new_repwd_err').css("display", "none")
            $('.new_repwd_ok').css("display", "block")
        }
    })

    $(".new_repwd").focus(function(){
        $(this).attr("type", "password")
        if($(this).val() === "两次输入密码不同"){
            $(this).val("").css("color", "#000")
        } else {
            $(this).css("color", color_ok)
        }
    })

    $(".form_change_user_pwd").submit(function(event) {
        $self = $(this);
        var id = $("#do_change_user_pwd").data("id")
        //alert(">>>here")
        $.ajax({
            type : $self.attr('method'),
            url  : $self.attr('action')+"/"+id,
            data : $self.serialize(),
        }).done(function(data) {
            if (data.change_pwd_ok === 1) {
                alert('密码修改成功，请重新登录')
                setTimeout(function() {
                    document.cookie = "users=; path=/;domain=192.168.33.10"
                    location.href = "/login"
                }, 500)                
            } else {
                alert('原密码输入有误')                
            }
        })
        event.preventDefault()
    })
})