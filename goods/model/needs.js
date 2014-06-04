var conn = require("./conn/connection")
var u2 = require("../routes/util2")
//add
exports.need_add = function(args, cb) {    
    var now_date = u2.date_format(new Date())
    var sql = "insert into needs_msg(user_id,add_time,good_name,amount,introduction,school) values("
        sql += args.user_id+",'"+now_date+"','"+args.good_name+"',"+args.amount+",'"+args.introduction+"','"+args.school+"');"
    conn.exec_sql(sql, cb)
}

//select
exports.need_select_all = function(cb) {
    var sql = "select * from needs;"
    conn.exec_sql(sql, cb)
}

exports.need_select_by_id = function(id, cb) {
    var sql = "select * from needs where n_id = "+id+";"
    conn.exec_sql(sql, cb)
}

//---------查询times对应日期提交的供需记录
exports.need_select_by_time = function(times, cb) {
    var sql = "select * from needs where TO_DAYS(add_time) = TO_DAYS('"+times+"');"
    conn.exec_sql(sql, cb)
}
//---------查询今天添加的供需记录
exports.need_select_today = function(cb) {
    var sql = "select * from needs where TO_DAYS(add_time) = TO_DAYS(curdate());"
    conn.exec_sql(sql, cb)
}

exports.needs_select_by_school = function(school, cb) {
    var sql = "select * from needs where school = '"+school+"';"
    conn.exec_sql(sql, cb)
}

exports.needs_select_by_status = function(status, cb) {
    var sql = "select * from needs where status = "+status+";"
    conn.exec_sql(sql, cb)
}
