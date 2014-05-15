var conn = require("./conn/connection")

//add
exports.user_add = function(args, cb) {
    var sql = "insert into users(nick_name,password,email)"
    sql += "values('"+args.nick_name+"','"+args.password+"','"+args.email+"');"
    conn.exec_sql(sql, cb)
}

//select
exports.user_select_all = function(cb) {
    var sql = "select * from users;"
    conn.exec_sql(sql, cb) 
}

//--------查看被禁用账号
exports.user_select_err = function(cb) {
    var sql = "select * from users where status = 0;"
    conn.exec_sql(sql, cb)
}

exports.user_select_all_order = function(cb) {
    var sql = "select * from users order by points desc;"
    conn.exec_sql(sql, cb)
}

exports.user_select_by_id = function(id, cb) {
    var sql = "select * from users where user_id = "+id+";"
    conn.exec_sql(sql, cb)
}
exports.user_select_by_nickname = function(nickname, cb) {
    var sql = "select * from users where nick_name = '"+nickname+"';"
    conn.exec_sql(sql, cb)
}
exports.user_select_by_email = function(email, cb) {
    var sql = "select * from users where email = '"+email+"';"
    conn.exec_sql(sql, cb)
}

exports.user_select_school_by_nick = function(nick, cb) {
    var sql = "select school from users where nick_name = '"+nick+"';"
    conn.exec_sql(sql, cb)
}

//update
exports.user_update = function(args, cb){
    var sql = "update users set name = '"+args.name+"',sex = '"+args.sex+"',"
    sql += "birthday = '"+args.birthday+"',address = "+args.address+"',"
    sql += "school = '"+args.school+"';"
    conn.exec_sql(sql, cb)
}

//--------禁用账号
exports.user_update_status = function(cb) {
    var sql = "update users set status = 0;"
    conn.exec_sql(sql, cb)
}