var conn = require("./conn/connection")

//add
exports.order_add = function(args, cb) {
    var sql = "insert into orders(user_id,addr_id) values("+args.order.user_id+","+args.order.add_id+");"
    sql += "insert into orders_msg(order_id,good_id,sum,price) values"
    for(var item in args.msg) {
        sql += "(LAST_INSERT_ID(),"+args.msg[item].good_id+","+args.msg[item].sum+",'"+args.msg[item].price+"'),"
    }
    sql = sql.substring(0,sql.length-1)
    sql += ";"

    console.log(sql)
    
    conn.exec_sql(sql, cb)
}

//select
exports.order_select_all = function(cb){
    var sql = "select * from orders;"
    conn.exec_sql(sql, cb)
}
exports.order_select_msg_by_id = function(id, cb) {
    var sql = "select * from orders_msg where order_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.order_select_by_user = function(id, cb) {
    var sql = "select * from orders where user_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.order_select_by_status = function(status, cb) {
    var sql = "select * from orders where order_status = "+status+";"
    conn.exec_sql(sql, cb)
}

exports.order_select_by_u_s = function(user, status, cb) {
    var sql = "select * from orders where user_id = "+user+" and order_status = "+status+";"
    conn.exec_sql(sql, cb)
}

//update
exports.order_update_status = function(id, status, cb) {
    var sql = "update orders set order_status = "+status+" where order_id = "+id+";"
    conn.exec_sql(sql, cb)
}

//delete
exports.order_delete = function(id, cb) {
    var sql = "delete from orders where order_id = "+id+";"
    sql += "delete from orders_msg where order_id = "+id+";"
    conn.exec_sql(sql, cb)
}