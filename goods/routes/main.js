var do_cookies = require('./do_cookies');
var util = require("./util");
var model_msg = require('../model/msg');
var model_cars = require('../model/cars');
var model_goods = require('../model/goods');
var model_addr = require('../model/addr');
var model_needs = require('../model/needs');
var model_orders = require('../model/orders');

var sorts_all = {"书籍":{"教材":{"基础课程":{"高等数学":0,"大学英语":0,"线性代数":0,"概率论":0,"大学物理":0,"数电模电":0,"计算机基础":0,"工程制图":0,"大学语文":0,"思想道德修养":0,"马克思主义哲学原理":0,"毛概":0,"其他":0},"专业相关":{"机械工程":0,"计算机":0,"信息科学":0,"经济管理":0,"材料科学":0,"外国语":0,"环境与化工":0,"艺术设计":0,"医学":0,"建筑学":0,"其他":0}},"考研考级":{"考研":{"英语":0,"数学":0,"政治":0,"专业课":0},"考级":{"英语四级":0,"英语六级":0,"计算机等级":0,"软考":0,"其他":0}},"杂志":0,"小说":0,"漫画":0,"其他":0},"数码":{"手机":0,"数码相机":0,"mp3/4":0,"U盘":0,"读卡器":0,"光盘":0,"配件":{"耳机":0,"手机电池":0,"移动电源":0,"充电器":0,"数据线":0,"保护壳/套":0,"支架":0,"其他":0},"其他":0},"电脑及周边":{"台式机":0,"笔记本":0,"路由器":0,"交换机":0,"周边配件":{"显示器":0,"键盘":0,"鼠标":0,"摄像头":0,"音响":0,"散热器":0,"电源":0,"CPU":0,"主板":0,"显卡":0,"声卡":0,"其他":0},"其他":0},"卡/票/证":{"卡":{"手机卡":0,"充值卡":0,"上网卡":0,"公交卡":0,"IP卡/电话卡":0,"打折卡/优惠卡":0,"其他":0},"票":{"门票":0,"其他":0},"证":{"听课证":0,"其他":0}},"休闲娱乐":{"单车":0,"桌游":0,"乐器":0,"玩具":0,"收藏":0,"其他":0},"饰品/手表":{"饰品":{"项链":0,"手链":0,"脚链":0,"挂坠":0,"耳钉":0,"其他":0},"手表":{"男表":0,"女表":0}},"鞋包":{"鞋":{"男鞋":0,"女鞋":0},"包":{"男包":0,"女包":0,"箱包":0}},"服装":{"男装":0,"女装":0},"体育用品":{"轮滑/滑板":{"轮滑鞋":0,"滑板":0,"护具":0,"其他":0},"球/球拍":{"羽毛球":0,"网球":0,"乒乓球":0,"足球":0,"篮球":0,"排球":0,"其他":0},"球衣/球鞋":{"球衣":0,"球鞋":0},"运动服":0,"跆拳道服":0,"泳衣":0,"其他":0},"女生专区":{"指甲油":0,"发簪":0,"发夹":0,"其他":0},"男生专区":{"打火机":0,"剃须刀":0,"其他":0},"其他":0}
var page_size = 2


function check_cookies(args, req, res) {
    var cookies = req.cookies
    var path1, path2
    if(args.length === 1) {
        path1 = path2 = args[0]
    }
    if(args.length === 2) {
        path1 = args[0]
        path2 = args[1]
    }
    if(!cookies || !cookies["users"]) {
        res.render(path1, {if_log : 0, sorts: sorts_all})
        return
    }
    do_cookies.set_cookie_users_id(cookies["users"].id, function(cookies){
        var user_info = cookies
        if(cookies == null) {
            res.clearCookie('users')
            return util.render_page_500(res)
        }
        res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
        res.render(path2, {if_log : 1, user : user_info, sorts: sorts_all});
    }) 
}

exports.index = function (req, res) {
    check_cookies(['main'], req, res) 
}


exports.search = function (req, res) {
    check_cookies(['search_res'], req, res)  
}
exports.show_goods = function (req, res) {
    check_cookies(['show_goods'], req, res)  
}
exports.order = function (req, res) {
    check_cookies(['order'], req, res)  
}
exports.needs = function (req, res) {
    check_cookies(['needs'], req, res)  
}

exports.login = function(req, res) {
    check_cookies(['login','main'], req, res)
}

exports.admin = function(req, res) {
    res.render('admin/main');
}
exports.reg = function(req, res) {
    check_cookies(['reg','main'], req, res)
}

exports.user = function(req, res) {
    //check_cookies(['login','users/user_center'], req, res)
    var cookies = req.cookies
    if(!cookies || !cookies["users"]) {
        res.render('login', {if_log : 0, sorts: sorts_all})
        return
    }
    var user_id = cookies["users"].id
    do_cookies.set_cookie_users_id(user_id, function(cookies){
        var user_info = cookies
        if(cookies == null) {
            res.clearCookie('users')
            return util.render_page_500(res)
        }
        res.cookie('users', user_info, { domain:"192.168.33.10", path: '/', maxAge : 1000 * 60 * 30 })
        var cars = {}
        model_cars.car_select_by_user(1, page_size, user_id, function(err, rows) {
            if(err) {
                console.log("get user car fail")
            } else {
                cars = rows
                for(var i=0;i<cars.length;i++) {
                    var img = cars[i].img_path.split(";")
                    for(var j=0;j<img.length;j++) {
                        var img_no = "good_img_"+j
                        cars[i][img_no] = img[j]
                    }
                } 
                res.render('users/main', {if_log : 1, user : user_info, sorts: sorts_all, cars: cars});                   
            }
            
        })
        //console.log(cars)
        //res.render('users/main', {if_log : 1, user : user_info, sorts: sorts_all});
    })
}


//用于手动添加分类的工具
exports.tools_add_sorts = function(req, res) {
    res.render('tools/addsort');
}
//用于展示插件图标样式的工具
exports.icon = function(req, res) {
    res.render('tools/show_icon');
}