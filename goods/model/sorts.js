var conn = require("./conn/connection")

exports.sorts_insert = function(args, cb){
    var sql = "insert into sorts(s_name_a,s_name_b,s_name_c,s_name_d) values"
    sql += "('"
    sql += args.sort_a+"','"
    sql += args.sort_b+"','"
    sql += args.sort_c+"','"
    sql += args.sort_d
    sql += "');"
    console.log(">>>>>\n"+sql)
    conn.exec_sql(sql, cb)
}

exports.sorts_show_all = function(cb) {
    var sql = "select * from sorts;"
    conn.exec_sql(sql, cb)
}
//使用编号查询分类
exports.sorts_select_by_id = function(id，cb) {
    var sql = "select * from sorts where sort_id = "+id+";"
    conn.exec_sql(sql, cb)
}
//查询一级分类
exports.sorts_select_a = function(cb) {
    var sql = "select s_name_a from sorts;"
    conn.exec_sql(sql, cb)
}
//使用一级类别查询二级分类
exports.sorts_select_b_by_a = function(sort_a, cb) {
    var sql = "select s_name_b from sorts where s_name_a = '"+sort_a+"';"
    conn.exec_sql(sql, cb)
}
//使用二级类别查询三级分类
exports.sorts_select_c_by_b = function(sort_b, cb) {
    var sql = "select s_name_c from sorts where s_name_b = '"+sort_b+"';"
    conn.exec_sql(sql, cb)
}
//使用三级类别查询四级分类
exports.sorts_select_d_by_c = function(sort_c, cb) {
    var sql = "select s_name_d from sorts where s_name_c = '"+sort_c+"';"
    conn.exec_sql(sql, cb)
}
