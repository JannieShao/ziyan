var crypto = require('crypto')

var is_leap_year = exports.is_leap_year = function(year) {  //判断闰年
    if (year % 4 == 0 && year % 100 != 0) {
        return true
    }

    if(year % 400 == 0) {
        return true
    }

    return false
}
//---------------------------------------------------------------------------------------------------------
var is_greater_month = exports.is_greater_month = function(month) {  //判断大月
    return (month-1)%7%2 == 0
}
//----------------------------------------
//判断日期格式是否正确    返回值是错误信息, 无错误信息即表示合法日期字符串
exports.is_date_string = function(str){
    var err                 //出错信息
    var separator = "-"     //日期分隔符

    var date_array = str.split(separator)
    if(date_array.length != 3) {
        err = "日期格式必须为: yyyy-MM-dd"
        return err
    }

    var year  = parseInt(date_array[0], 10);
    var month = parseInt(date_array[1], 10);
    var day   = parseInt(date_array[2], 10);

    if(isNaN(year)||isNaN(month)||isNaN(day)) {
        err = "日期格式错误: 年月日必须为纯数字"
        return err
    }

    if(month>12 || month<1) {
        err = "日期格式错误: 月份必须介于1和12之间"
        return err
    }

    if( is_greater_month(month) && (day>31||day<1) ) {
        err = "日期格式错误: 大月的天数必须介于1到31之间"
        return err
    }
    if( !is_greater_month(month) && (day>30||day<1) ) {
        err = "日期格式错误: 小月的天数必须介于1到31之间"
        return err
    }

    if(month==2) {
        if(is_leap_year(year) && day > 29) {
            err = "日期格式错误: 闰年的2月份天数不能超过29"
            return err
        }

        if(!is_leap_year(year) && day > 28) {
            err = "日期格式错误: 非闰年的2月份天数不能超过28"
            return err
        }
    }

    return err
}

exports.encrypt_by_md5 = function(plaintext) {

    var md5 = crypto.createHash('md5')
    md5.update(plaintext, "utf8")
    return md5.digest("hex")
}