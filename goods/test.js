var conn = require("./model/conn/connection")
var u2 = require("./routes/util2")
var model_msg = require('./model/msg');
var model_cars = require('./model/cars');
var model_goods = require('./model/goods');
var model_addr = require('./model/addr');
var model_needs = require('./model/needs');
var model_orders = require('./model/orders');
//add goods
// var args_goods = {}
// args_goods.good_name = "高等数学"
// args_goods.user_id = 1
// args_goods.good_price = "5.00"
// args_goods.sort_id = 1
// args_goods.level = 8
// args_goods.sum = 1
// args_goods.introduction = ""
// args_goods.img_path = "1.jpg"

// model_goods.good_add(args_goods, function(err, rows) {
//     if(err) {
//         console.log("err")
//     } else {
//         console.log("success")
//     }
// })
//add car
var args_cars = {}
args_cars.user_id = 1
args_cars.good_id = 1
args_cars.sum = 1

model_cars.car_add(args_cars, function(err, rows) {
    if(err) {
        console.log("err")
    } else {
        console.log("success")
    }
})
// var msg_add = function(args, cb) {
//     var now_date = u2.date_format(new Date())
//     var sql = "insert into message(from_id,user_id,send_time,content) values("
//         sql += args.from+","+args.to+",'"+now_date+"','"+args.content+"');"
//     conn.exec_sql(sql, cb)
// }

// var msg_select_by_time = function(date, cb) {
//     var sql = "select * from message where TO_DAYS(send_time) = TO_DAYS('"+date+"');"
//     conn.exec_sql(sql, cb)
// }

// exports.need_select_today = function(cb) {
//     var sql = "select * from message where TO_DAYS(send_time) = TO_DAYS(curdate());"
//     conn.exec_sql(sql, cb)
// }
// // var args = {}
// // args.from = 1
// // args.to = 2
// // args.content = "dfdfefdfd"
// exports.need_select_today(function(err, rows) {
//     if(err) {
//         console.log("err")
//     } else {
//         console.log(rows)
//     }
// })
// var goods = {name:"djifjd",img_path:"sig/djifjdg/jdig.jpg;apg.jpg;rese.jpg"}
// var img = goods.img_path.split(";")
// goods.img_path = img
// console.log(goods)
