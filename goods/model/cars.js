var conn = require("./conn/connection")

//add
exports.car_add = function(args, cb){
    var sql = "insert into cars(user_id,good_id,sum)"
    sql += "values("+args.user_id+","+args.good_id+","+args.sum+")"
    conn.exec_sql(sql, cb)
}

//select
exports.car_select_by_user = function(offset, page_size, id, cb) {
    var sql = "select c.car_id,g.good_id,g.good_name,g.good_price,g.img_path,c.sum,g.level"
    sql += " from cars c inner join goods g on c.good_id=g.good_id where c.user_id = "
    sql += id+" order by car_id limit "+offset+","+page_size+";"
    conn.exec_sql(sql, cb)
}

exports.car_select_by_id = function(id, cb) {
    var sql = "select * from cars where car_id = "+id+";"
    conn.exec_sql(sql, cb)
}

exports.car_select_total_by_user = function(id, cb) {
    var sql = "select count(car_id) as total from cars where user_id ="+id+";"
    conn.exec_sql(sql, cb)
}

//update

//delete
exports.car_delete_by_id = function(id, cb) {
    var sql = "delete from cars where car_id = "+id+";"
    conn.exec_sql(sql, cb)
}