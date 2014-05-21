$(document).ready(function() {

    $(".nick").blur(function(event) {
        $self = $(this);
        var nick = $self.val()
        if(nick == "") {
            $self.val("昵称不能为空").css("color", "#FF4040")
            $('.nick_ok').css("display", "none")
            $('.nick_err').css("display", "block")
        } else {
            $.ajax({
                type : "post",
                url  : "/do_check_nick/"+nick,
                data : $self.serialize(),
            }).done(function(data) {
                if(data.nick_ok === 0) {
                    $self.val("昵称已存在").css("color", "#FF4040")
                    $('.nick_ok').css("display", "none")
                    $('.nick_err').css("display", "block")
                } else {
                    $('.nick_err').css("display", "none")
                    $('.nick_ok').css("display", "block")
                }
            })
        }
    })

    $(".nick").focus(function(){
        if($(this).val() === "昵称不能为空"||$(this).val() === "昵称已存在"){
            $(this).val("").css("color", "#000")
        } else {
            $(this).css("color", "#000")
        }
    })

    $(".pwd").blur(function() {
        var pwd = $(this).val()
        if(pwd == ""||pwd == "请输入密码") {
            $(this).attr("type", "text")
            $(this).val("请输入密码").css("color", "#FF4040")
            $('.pwd_ok').css("display", "none")
            $('.pwd_err').css("display", "block")
        } else {
            if(pwd.length <6) {
                $(this).attr("type", "text")
                $(this).val("密码长度为6-12").css("color", "#FF4040")
                $('.pwd_ok').css("display", "none")
                $('.pwd_err').css("display", "block")
            } else {
                $('.pwd_err').css("display", "none")
                $('.pwd_ok').css("display", "block")
            }            
        }
    })

    $(".pwd").focus(function(){
        $(this).attr("type", "password")
        if($(this).val() === "请输入密码"||$(this).val() === "密码长度为6-12"){
            $(this).val("").css("color", "#000")
        } else {
            $(this).css("color", "#000")
        }
    })

    $(".repwd").blur(function() {
        var pwd = $(".pwd").val()
        var repwd = $(".repwd").val()
        if(pwd !== repwd) {
            $(this).attr("type", "text")
            $(this).val("两次输入密码不同").css("color", "#FF4040")
            $('.repwd_ok').css("display", "none")
            $('.repwd_err').css("display", "block")
        } else {
            $('.repwd_err').css("display", "none")
            $('.repwd_ok').css("display", "block")
        }
    })

    $(".repwd").focus(function(){
        $(this).attr("type", "password")
        if($(this).val() === "两次输入密码不同"){
            $(this).val("").css("color", "#000")
        } else {
            $(this).css("color", "#000")
        }
    })

    $(".email").blur(function(event) {
        $self = $(this);
        var email = $self.val()
        var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if(email == "") {
            $self.val("邮箱不能为空").css("color", "#FF4040")
            $('.email_err').css("display", "block")
        } else {
            if(!re.test(email)) {
                $self.val("邮箱格式错误").css("color", "#FF4040")
                $('.email_err').css("display", "block")
            } else {
                $.ajax({
                    type : "post",
                    url  : "/do_check_email/"+email,
                    data : $self.serialize(),
                }).done(function(data) {
                    if(data.email_ok === 0) {
                        $self.val("邮箱已存在").css("color", "#FF4040")
                        $('.email_err').css("display", "block")
                    } else {
                        $('.email_err').css("display", "none")
                        $('.email_ok').css("display", "block")
                    }
                })
            }
        }
    })

    $(".email").focus(function(){
        if($(this).val() === "邮箱不能为空" || $(this).val() === "邮箱格式错误" || $(this).val() === "邮箱已存在"){
            $(this).val("").css("color", "#000")
        } else {
            $(this).css("color", "#000")
        }
    })

    $(".form_reg").submit(function(event) {
        $self = $(this);
        //alert(">>>here")
        $.ajax({
            type : $self.attr('method'),
            url  : $self.attr('action'),
            data : $self.serialize(),
        }).done(function(data) {
            if (data.reg_ok === 1) {
                alert('注册成功')
                setTimeout(function() {
                    location.href = "/index"
                }, 500)                
            } else {
                alert('注册失败')                
            }
        })
        event.preventDefault()
    })
})