var model_users = require('../model/users');
var u2 = require("./util2");

exports.check_nick = function(req, res) {
    var nick = req.params.nick
    //console.log(">>>>>"+nick)
    model_users.user_select_by_nickname(nick, function(err, rows){
        if(err) {
            console.log(">>>>select fail")
            return
        } else {
            //console.log(rows.length)
            if(rows.length !== 0) {
                res.send({nick_ok: 0})
            } else {
                res.send({nick_ok: 1})
            }
        }
    })
}

exports.check_email = function(req, res) {
    var email = req.params.email
    model_users.user_select_by_email(email, function(err, rows){
        if(err) {
            console.log(">>>>select fail")
            return
        } else {
            if(rows.length !== 0) {
                res.send({email_ok: 0})
            } else {
                res.send({email_ok: 1})
            }
        }
        
    })
}

exports.reg = function(req, res, cb){
    var nick = req.body.nick
    var pwd = req.body.pwd
    var repwd = req.body.repwd
    var email = req.body.email
    var tag = 0
    if(nick === "昵称不能为空"||nick === "昵称已存在"||nick === ""){
        tag = 1
    }
    if(pwd === "请输入密码"||pwd === "密码长度为6-12"||pwd === "") {
        tag = 1
    }
    if(repwd === "两次输入密码不同"||repwd === ""){
        tag = 1
    }
    if(email === ""||email==="邮箱不能为空"||email==="邮箱格式错误"||email==="邮箱已存在") {
        tag = 1
    }
    if(tag) {
        return;
    }
    var args = {}
    args.nick_name = nick
    args.password = pwd
    args.email = email
    model_users.user_add(args, function(err, result){
        //
        if(err) {
            console.log("reg error")
            return
        } else {
            console.log("reg sucess")
            model_users.user_select_by_nickname(nick, function(err, output){
                if(output.length === 1){
                    var cookies = {}
                    cookies.id = output[0].user_id
                    cookies.nick = output[0].nick_name
                    cookies.email = output[0].email
                    cookies.points = output[0].points
                    cookies.name = output[0].name
                    cookies.sex = output[0].sex
                    cookies.birthday = output[0].birthday
                    cookies.address = output[0].address
                    cookies.school = output[0].school

                    var user_str = ''
                    for(var key in cookies) {
                        if(typeof cookies[key] === 'function')
                            continue
                        if( user_str === '') {
                            user_str = key + '=' + cookies[key]
                        }
                        else {
                            user_str = user_str + '&' + key + '=' + cookies[key]
                        }
                    }
                    console.log(user_str)
                    u2.set_cookies(res, 'users', user_str, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
                    console.log(">>>>>>>>>>>>>>set cookies success!")
                    res.send({reg_ok: 1})
                }else{
                    console.log(">>>>>>>>set cookies fail")
                    res.send({reg_ok: 0})
                }                
            })
            //res.render('main', { nick : nick})
            
        }
    })

}
