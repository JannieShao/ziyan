var do_cookies = require('./do_cookies');
var util = require("./util")

exports.index = function (req, res) {
    var cookies = req.cookies
    if(!cookies || !cookies["users"]) {
        res.render('main', {if_log : 0})
        return
    }
    do_cookies.set_cookie_users_id(cookies["users"].id, function(cookies){
        var user_info = cookies
        if(cookies == null) {
            res.clearCookie('users')
            return util.render_page_500(res)
        }
        res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
        res.render('main', {if_log : 1, user : user_info});
    })   
}

exports.login = function(req, res) {
    var cookies = req.cookies
    if(cookies["users"]) {
        do_cookies.set_cookie_users_id(cookies["users"].id, function(cookies){
            var user_info = cookies
            if(cookies == null) {
                res.clearCookie('users')
                return util.render_page_500(res)
            }
            res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
            res.render('main', {if_log : 1, user : user_info, login_err : 1});
        })
        //res.render('main', {if_log : 1, user : cookies["users"], login_err : 1})
        return
    }
    res.render('login');
}

exports.admin = function(req, res) {
    res.render('admin/main');
}
exports.reg = function(req, res) {
    var cookies = req.cookies
    if(cookies && cookies["users"]) {
        do_cookies.set_cookie_users_id(cookies["users"].id, function(cookies){
            var user_info = cookies
            if(cookies == null) {
                res.clearCookie('users')
                return util.render_page_500(res)
            }
            res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
            res.render('main', {if_log : 1, user : user_info});
        })
        //res.render('main', {if_log : 1, user : cookies["users"]})
        return
    }
    res.render('reg');
}

exports.user = function(req, res) {
    var cookies = req.cookies
    if(cookies && cookies["users"]) {
        do_cookies.set_cookie_users_id(cookies["users"].id, function(cookies){
            var user_info = cookies
            if(cookies == null) {
                res.clearCookie('users')
                return util.render_page_500(res)
            }
            res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
            res.render('users/main', {if_log : 1, user : user_info})
        })
        //res.render('users/main', {if_log : 1, user : cookies["users"]})
        return
    }
    res.render('login')
}

//用于手动添加分类的工具
exports.tools_add_sorts = function(req, res) {
    res.render('tools/addsort');
}
exports.icon = function(req, res) {
    res.render('tools/show_icon');
}