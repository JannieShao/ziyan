var conn = require("./conn/connection")

//add
exports.addr_add = function(args, cb) {
    var sql = "insert into address(user_id,name,addr,tel) values("
    sql += args.user_id+",'"+args.name+"','"+args.addr+"','"+args.tel+"');"
    conn.exec_sql(sql, cb)
}

//select
exports.addr_select_by_user = function(user_id, cb) {
    var sql = "select * from address where user_id = "+user_id+";"
    conn.exec_sql(sql, cb)
}

exports.addr_select_by_id = function(addr_id, cb) {
    var sql = "select * from address where id = "+addr_id+";"
    conn.exec_sql(sql, cb)
} 

exports.addr_select_by_status = function(args, cb) {
    var sql = "select * from address where user_id = "+args.user_id+" and addr_status="+args.addr_status+";"
    conn.exec_sql(sql, cb)
}

//update
exports.addr_update_status = function(args, cb) {
    var sql = "update address set status = "+args.status+" where addr_id = "+args.addr_id+";"
    conn.exec_sql(sql, cb)
}
//delete
exports.addr_del = function(id, cb) {
    var sql = "delete from address where addr_id = "+id+";"
    conn.exec_sql(sql, cb)
}