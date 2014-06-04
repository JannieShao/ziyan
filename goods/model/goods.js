var conn = require("./conn/connection")
var u2 = require("../routes/util2")
//add
exports.good_add = function(args, cb) {
    var now_date = u2.date_format(new Date())
    var sql = "insert into goods(good_name,user_id,add_time,good_price,sort_id,level,sum,introduction,img_path)"
    sql += "values('"+args.good_name+"',"+args.user_id+",'"+now_date+"','"+args.good_price+"',"+args.sort_id+","
    sql += args.level+","+args.sum+",'"+args.introduction+"','"+args.img_path+"');"
    conn.exec_sql(sql, cb)
}
//select
exports.good_select_all = function(cb) {
    var sql = "select * from goods;"
    conn.exec_sql(sql, cb)
}

exports.good_select_id_name = function(name, cb) {
    var sql = "select good_id,good_name from goods;"
    conn.exec_sql(sql, cb)
}
//-----条件查询
exports.good_select_by_id = function(id, cb) {
    var sql = "select * from goods where good_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.good_select_by_user = function(id, cb) {
    var sql = "select * from goods where user_id = "+id+";"
    conn.exec_sql(sql, cb)
}
exports.good_select_by_add_time = function(date, cb) {
    var sql = "select * from goods where TO_DAYS(add_time) = TO_DAYS('"+date+"');"
    conn.exec_sql(sql, cb)
}
exports.good_select_by_status = function(status, cb) {
    var sql = "select * from goods where good_status = "+status+";"
    conn.exec_sql(sql, cb)
}
//update
exports.good_update_sum = function(args, cb) {
    var sql = "update goods set sum = "+args.sum+" where good_id = "+args.id+";"
    conn.exec_sql(sql, cb)
}

exports.good_update_status = function(args, cb) {
    var sql = "update goods set good_status = "+args.status+" where good_id = "+args.id+";"
    conn.exec_sql(sql, cb)
}

//delete
exports.good_delete = function(id, cb) {
    var sql = "delete from goods where good_id = "+id+";"
    conn.exec_sql(sql, cb)
}