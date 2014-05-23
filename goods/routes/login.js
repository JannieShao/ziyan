var do_cookies = require('./do_cookies');
var u2 = require('./util2');

exports.login = function(req, res) {
    var nick = req.body.nick
    var pwd = req.body.pwd
    var args = {}

    args.nick = nick
    args.password = u2.encrypt_by_md5(pwd)

    do_cookies.set_cookie_users_n_p(args, res)
}