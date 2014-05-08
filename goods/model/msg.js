var conn = require("./conn/connection")

//add
exports.msg_add = function(args, cb) {
    var sql = "insert into message(from_id,user_id,send_time,content) values("
        sql += args.from+","+args.to+",'"+args.times+"','"+args.content+"');"
    conn.exec_sql(sql, cb)
}

//select
exports.msg_select_all = function(cb) {
    var sql = "select * from message;"
    conn.exec_sql(sql, cb)
}

exports.msg_select_by_id = function(id, cb) {
    var sql = "select * from message where msg_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.msg_select_by_from = function(id, cb) {
    var sql = "select * from message where from_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.msg_select_by_to = function(id, cb) {
    var sql = "select * from message where user_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.msg_select_by_status = function(status, cb) {
    var sql = "select * from message where msg_status = "+status+";"
    conn.exec_sql(sql, cb)
}

exports.msg_select_by_to_status = function(args, cb) {
    var sql = "select * from message where user_id = "+args.to+" and msg_status="+args.status+";"
    conn.exec_sql(sql, cb)
}

//update
exports.msg_update_status = function(args, cb) {
    var sql = "update message set msg_status = "+args.status+" where msg_id = "+args.id+";"
    conn.exec_sql(sql, cb)
}