var model_users = require('../model/users');
var do_cookies = require('./do_cookies');
var u2 = require('./util2');

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
    args.password = u2.encrypt_by_md5(pwd)
    args.email = email
    model_users.user_add(args, function(err, result){
        //
        if(err) {
            console.log("reg error")
            return
        } else {
            console.log("new user 【"+nick+"】 reg sucess")

            do_cookies.set_cookie_users_nick(nick, res)            
        }
    })
}

exports.check_tel = function(req, res) {
    var tel = req.params.tel
    model_users.user_select_by_tel(tel, function(err, rows){
        if(err) {
            console.log(">>>>select fail")
            return
        } else {
            if(rows.length !== 0) {
                res.send({tel_ok: 0})
            } else {
                res.send({tel_ok: 1})
            }
        }
        
    })
}
