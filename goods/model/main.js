var conn = require("./conn/connection")

// var test_select = function(cb){
//     var sql = "select * from sorts;"
//     conn.exec_sql(sql, cb)
// }
// // var test_insert  = function(cb){
// //     var sql = "insert into sorts(sort_name,s_name) values('教材','基础课程');"
// //     conn.exec_sql(sql, cb)
// // }
// var test_del = function(id, cb){
//     var sql = "delete from sorts where sort_id ="+ id +";"
//     conn.exec_sql(sql, cb)
// }
// var test_update = function(id, s_name, cb){
//     var sql = "update sorts set s_name='"+s_name+"' where sort_id="+id+";"
//     conn.exec_sql(sql, cb)
// }
// test_insert(function(err, rows){
//     console.log(rows)
//     console.log(">>>>>>>>>>>>>add success")
// })

// test_del(1,function(err, rows){
//     console.log(rows)
//     console.log(">>>>>delete success")
// })

// test_update(3,"考研",function(err,rows){
//     console.log(rows)
//     console.log(">>>>>>>>>>>>>update success")
// })

// test_select(function(err, rows){
//     console.log(rows)
//     console.log(">>>I'm here~~~")
// })


//测试插入订单
// var order_add = function(args, cb) {
//     var sql = "insert into orders(user_id,addr_id) values("+args.order.user_id+","+args.order.add_id+");"
//     sql += "insert into orders_msg(order_id,good_id,sum,price) values"
//     for(var item in args.msg) {
//         sql += "(LAST_INSERT_ID(),"+args.msg[item].good_id+","+args.msg[item].sum+",'"+args.msg[item].price+"'),"
//     }
//     sql = sql.substring(0,sql.length-1)
//     sql += ";"

//     console.log(sql)
    
//     conn.exec_sql(sql, cb)
// }

// var args ={}

// args.order = {}
// args.order.user_id = 2
// args.order.add_id = 3

// args.msg = []

// for(var item=0;item<3;item++){
//     args.msg[item]={}
//     args.msg[item].good_id = item
//     args.msg[item].sum = 3
//     args.msg[item].price = '3433434'
// }
// order_add(args,function(err, rows){
//     console.log(">>>>>>>>>>>>>add success")
// })


var order_delete = function(id, cb) {
    var sql = "delete from orders where order_id = "+id+";"
    sql += "delete from orders_msg where order_id = "+id+";"
    conn.exec_sql(sql, cb)
}

order_delete(14, function(err, rows){
    console.log(">>>>>>>>>>>>>delete order success")
})

var order_select_all = function(cb) {
    var sql = "select * from orders_msg;"
    conn.exec_sql(sql, cb)
}
order_select_all(function(err, rows){
    console.log(rows)
})
