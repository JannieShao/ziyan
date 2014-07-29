
var conn = require("./conn/connection")


//初始化物品分类
var add_sorts = function(args, cb) {
    var sql = "insert into sorts(s_name_a,s_name_b,s_name_c,s_name_d) values('"
        sql += args.a+"','"+args.b+"','"+args.c+"','"+args.d+"');"
    conn.exec_sql(sql, cb)
}

var sorts = {
                "书籍":{
                    "教材":{
                            "基础课程":{
                                "高等数学":0,
                                "大学英语":0,
                                "线性代数":0,
                                "概率论":0,
                                "大学物理":0,
                                "数电模电":0,
                                "计算机基础":0,
                                "工程制图":0,
                                "大学语文":0,
                                "思想道德修养":0,
                                "马克思主义哲学原理":0,
                                "毛概":0,
                                "其他":0
                            },
                            "专业相关":{
                                "机械工程":0,
                                "计算机":0,
                                "信息科学":0,
                                "经济管理":0,
                                "材料科学":0,
                                "外国语":0,
                                "环境与化工":0,
                                "艺术设计":0,
                                "医学":0,
                                "建筑学":0,
                                "其他":0
                            }
                        },
                    "考研考级":{
                        "考研":{
                            "英语":0,
                            "数学":0,
                            "政治":0,
                            "专业课":0
                        },
                        "考级":{
                            "英语四级":0,
                            "英语六级":0,
                            "计算机等级":0,
                            "软考":0,
                            "其他":0
                        }
                    },
                    "杂志":0,
                    "小说":0,
                    "漫画":0,
                    "其他":0
                },                
                "数码":{
                    "手机":0,
                    "数码相机":0,
                    "mp3/4":0,
                    "U盘":0,
                    "读卡器":0,
                    "光盘":0,
                    "配件":{
                        "耳机":0,
                        "手机电池":0,
                        "移动电源":0,
                        "充电器":0,
                        "数据线":0,
                        "保护壳/套":0,
                        "支架":0,
                        "其他":0
                    },
                    "其他":0
                },
                "电脑及周边":{
                    "台式机":0,
                    "笔记本":0,
                    "路由器":0,
                    "交换机":0,
                    "周边配件":{
                        "显示器":0,
                        "键盘":0,
                        "鼠标":0,
                        "摄像头":0,
                        "音响":0,
                        "散热器":0,
                        "电源":0,
                        "CPU":0,
                        "主板":0,
                        "显卡":0,
                        "声卡":0,
                        "其他":0
                    },
                    "其他":0
                },
                "卡/票/证":{
                    "卡":{
                        "手机卡":0,
                        "充值卡":0,
                        "上网卡":0,
                        "公交卡":0,
                        "IP卡/电话卡":0,
                        "打折卡/优惠卡":0,
                        "其他":0
                    },
                    "票":{
                        "门票":0,
                        "其他":0
                    },
                    "证":{
                        "听课证":0,
                        "其他":0
                    }
                },
                "休闲娱乐":{
                    "单车":0,
                    "桌游":0,
                    "乐器":0,
                    "玩具":0,
                    "收藏":0,
                    "其他":0
                },
                "饰品/手表":{
                    "饰品":{
                        "项链":0,
                        "手链":0,
                        "脚链":0,
                        "挂坠":0,
                        "耳钉":0,
                        "其他":0
                    },
                    "手表":{
                        "男表":0,
                        "女表":0
                    }
                },
                "鞋包":{
                    "鞋":{
                        "男鞋":0,
                        "女鞋":0
                    },
                    "包":{
                        "男包":0,
                        "女包":0,
                        "箱包":0
                    }
                },
                "服装":{
                    "男装":0,
                    "女装":0
                },
                "体育用品":{
                    "轮滑/滑板":{
                        "轮滑鞋":0,
                        "滑板":0,
                        "护具":0,
                        "其他":0
                    },
                    "球/球拍":{
                        "羽毛球":0,
                        "网球":0,
                        "乒乓球":0,
                        "足球":0,
                        "篮球":0,
                        "排球":0,
                        "其他":0
                    },
                    "球衣/球鞋":{
                        "球衣":0,
                        "球鞋":0
                    },
                    "运动服":0,
                    "跆拳道服":0,
                    "泳衣":0,
                    "其他":0
                },
                "女生专区":{
                    "指甲油":0,
                    "发簪":0,
                    "发夹":0,
                    "其他":0
                },
                "男生专区":{
                    "打火机":0,
                    "剃须刀":0,
                    "其他":0
                },
                "其他":0
            }
var show_sorts = function() {
    console.log("show_all_sorts_here >>>>>>>>>>")
    var tag = 1
    for(var item_a in sorts) {
        if(sorts[item_a] === 0) {
            var args = {}
            args.a = item_a
            args.b = ""
            args.c = ""
            args.d = ""
            add_sorts(args, function(err, rows) {
                if(err) {
                    console.log("err")
                } else {
                   // console.log("success") 
                }                
            })
        } else {
            for(var item_b in sorts[item_a]) {
                if(sorts[item_a][item_b] === 0) {
                    var args = {}
                    args.a = item_a
                    args.b = item_b
                    args.c = ""
                    args.d = ""
                    add_sorts(args, function(err, rows) {
                        if(err) {
                            console.log("err")
                        } else {
                           // console.log("success") 
                        }
                    })
                } else {
                    for(var item_c in sorts[item_a][item_b]) {
                        //console.log("    "+item_c+":\n")
                        if(sorts[item_a][item_b][item_c] === 0) {
                            var args = {}
                            args.a = item_a
                            args.b = item_b
                            args.c = item_c
                            args.d = ""
                            console.log(args.a+"--"+args.b+"--"+args.c+"--"+args.d+"\n")
                        } else {
                            for(var item_d in sorts[item_a][item_b][item_c]) {
                                var args = {}
                                args.a = item_a
                                args.b = item_b
                                args.c = item_c
                                args.d = item_d
                                add_sorts(args, function(err, rows) {
                                    if(err) {
                                        console.log("err")
                                    } else {
                                       // console.log("success") 
                                    }
                                })                                
                            }
                        }                    
                    }   
                }        
            }            
        }
    }
    console.log("success add all sorts")
}
show_sorts()

// 测试插入订单
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


// var order_delete = function(id, cb) {
//     var sql = "delete from orders where order_id = "+id+";"
//     sql += "delete from orders_msg where order_id = "+id+";"
//     conn.exec_sql(sql, cb)
// }

// order_delete(14, function(err, rows){
//     console.log(">>>>>>>>>>>>>delete order success")
// })

// var order_select_all = function(cb) {
//     var sql = "select * from orders_msg;"
//     conn.exec_sql(sql, cb)
// }
// order_select_all(function(err, rows){
//     console.log(">>>>>"+rows)
// })


// var msg_total_by_to = function(id, cb) {
//     var sql = "select count(msg_id) as total from message where user_id ="+id+" and msg_status =0;"
//     conn.exec_sql(sql, cb)
// }

// var total;

// msg_total_by_to(1, function(err, rows) {
//     total = rows[0].total
//     run()
// })
// function run(){
//     console.log(">>>>>"+total)
// }