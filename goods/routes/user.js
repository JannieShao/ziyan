var u2 = require('./util2');
var model_users = require('../model/users');
var model_cars = require('../model/cars');
//user_center
exports.update_user_msg = function(req, res){
    var id = req.params.id
    var name = req.body.uname
    var sex = req.body.sex
    var birth = req.body.birthday
    var school = req.body.school
    var tel = req.body.tel

    var tag = 0
    if(name === "姓名不能为空"||name === "姓名必须是2-4位汉字"||name === ""){
        tag = 1
    }
    var birth_err = u2.is_date_string(birth)
    if(birth === ""||birth_err) {
        tag = 1
    }
    if(school === "所在学校不能为空"||school === ""){
        tag = 1
    }
    if(tel === ""||tel==="手机号码不能为空"||tel==="手机号码格式错误"||tel==="手机号码已存在") {
        tag = 1
    }
    if(tag) {
        return;
    }

    var args = {}
    args.id = id
    args.name = name
    args.sex = sex
    args.birthday = birth
    args.school = school
    args.tel = tel
    model_users.user_update(args, function(err, result){
        //
        if(err) {
            console.log("update error")
            return
        } else {
            console.log("update msg sucess")
            res.send({update_ok: 1})                      
        }
    })
}

exports.change_user_msg = function(req, res) {
    var id = req.params.id
    var sex = req.body.sex
    var birth = req.body.birthday
    var tel = req.body.tel

    var tag = 0

    var birth_err = u2.is_date_string(birth)
    if(birth === ""||birth_err) {
        tag = 1
    }
    if(tel === ""||tel==="手机号码不能为空"||tel==="手机号码格式错误"||tel==="手机号码已存在") {
        tag = 1
    }
    if(tag) {
        return;
    }
    var args = {}
    args.id = id
    args.sex = sex
    args.birthday = birth
    args.tel = tel
    model_users.user_update_change(args, function(err, result){
        //
        if(err) {
            console.log("change error")
            return
        } else {
            console.log("change msg sucess")
            res.send({change_ok: 1})                      
        }
    })
}

exports.change_user_pwd = function(req, res) {
    var id = req.params.id
    var old_pwd = req.body.old_pwd
    var new_pwd = req.body.new_pwd
    var new_repwd = req.body.new_repwd

    var tag = 0
    if(new_pwd === "请输入密码"||new_pwd === "密码长度为6-12"||new_pwd === "" ){
        tag = 1
    }
    if(new_repwd === ""||new_repwd==="两次输入密码不同") {
        tag = 1
    }
    if(tag) {
        return;
    }
    var args = {}
    args.id = id
    args.password = u2.encrypt_by_md5(new_pwd)
    var pwd = u2.encrypt_by_md5(old_pwd)
    model_users.user_select_pwd(id, function(err, rows) {
        if(err) {
            console.log("check error")
            return
        } else {
            if(rows[0].password == pwd) {
                model_users.user_update_pwd(args, function(err, rows) {
                   if(err) {
                        console.log("change error")
                        return
                    } else {
                        console.log("change pwd sucess")
                        res.send({change_pwd_ok: 1})                      
                    } 
                })
            } else {
                res.send({change_pwd_ok: 0})
            }
        }
    })
}
//user_car
exports.remove_car = function(req, res) {
    var id = req.params.id
    model_cars.car_delete_by_id(id, function(err, rows) {
        if(err) {
            console.log("remove car "+id+"fail");
            res.send({ok: 0})
        } else {
            res.send({ok: 1})
        }
    })
}

// exports.get_car_msg_by_user = function(req,res) {
//     var cookies = req.cookies
//     var user = cookies["users"]
//     var current_page = req.body.req_page
//     if(current_page === undefined || current_page === NaN || current_page < 1) {
//         current_page = 1
//     }
//     current_page = Number(current_page)

//     var count = 0
//     model_car.car_select_total_by_user(user.id, function(err, rows) {
//         if(err) {
//             ms.log.error("counting all booking info failed")
//             return res.send({ok:0})
//         }
//         if(rows[0].count !== undefined) {
//             count = rows[0].total
//         }

//         var page = pagination(current_page, count)
//         //console.log("\n>>>>>>>>>>>>>>>count:"+count+"\n")

//         var offset = (current_page - 1) * page_size || 0
//         model_book.get_booking_msg_by_user(offset, page.page_size, user.id, function(err , rows) {
//             if(err) {
//                 ms.log.error("Get car msg failed ")
//                 return util.render_page_500(res)
//             }
//             page.list = rows
//             res.render("/user#user_car" , {page : page, user : user})
//         })
//     })



// }