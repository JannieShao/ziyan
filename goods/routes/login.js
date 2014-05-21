var do_cookies = require('./do_cookies');
var u2 = require('./util2');

exports.login = function(req, res) {
    var nick = req.body.nick
    var pwd = req.body.pwd
    var args = {}

    args.nick = nick
    args.password = u2.encrypt_by_md5(pwd)

    do_cookies.set_cookie_users_n_p(args, res)

    // model_users.user_select_by_n_p(args, function(err, rows) {
    //     if(err) {
    //         console.log("login fail")
    //     } else {
    //         //console.log(rows)
    //         if(rows.length === 0) {
    //             res.send({login_ok: 0})
    //         } else {
    //             do_cookies.set_cookie_users(rows, res, function(){
    //                 res.send({login_ok: 1})
    //             })
    //             // do_cookies.set_cookie_users(rows, res)
    //             // res.send({login_ok: 1})
    //         }
    //     }
    // })
}