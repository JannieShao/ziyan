var conn = require("./connection")

var test_select = function(cb){
    var sql = "select * from sorts;"
    conn.exec_sql(sql, cb)
}
var test_insert  = function(cb){
    var sql = "insert into sorts(sort_name,s_name) values('教材','基础课程')"
    conn.exec_sql(sql, cb)
}
var test_del = function(id, cb){
    var sql = "delete from sorts where sort_id ="+ id +";"
    conn.exec_sql(sql, cb)
}
var test_update = function(id, s_name, cb){
    var sql = "update sorts set s_name='"+s_name+"' where sort_id="+id+";"
    conn.exec_sql(sql, cb)
}
test_insert(function(err, rows){
    console.log(rows)
    console.log(">>>>>>>>>>>>>add success")
})

test_del(1,function(err, rows){
    console.log(rows)
    console.log(">>>>>delete success")
})

test_update(3,"考研",function(err,rows){
    console.log(rows)
    console.log(">>>>>>>>>>>>>update success")
})

test_select(function(err, rows){
    console.log(rows)
    console.log(">>>I'm here~~~")
})


