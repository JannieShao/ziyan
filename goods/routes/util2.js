exports.set_cookies = function(res, key, value, options) {
    if (typeof value == 'string') {
        options.no_encoding = true
        var cookie = res.cookie(key, value, options)
        return cookie
    }

    if (typeof value == 'object') {
        var val = ''
        for (var k in value) {
            if (val == '') {
                val = k + '=' + value[k]
            }
            else {
                val = val + '&' + k + '=' + value[k]
            }
        }

        options.no_encoding = true
        var cookie = res.cookie(key, val, options)

        return cookie
    }
}
//--------------------------------------------------------------------------------------------------------
exports.check_name = function(name) {
    var re = /^[\u4e00-\u9fa5]{2,4}$/
    return re.test(name)
}
//---------------------------------------------------------------------------------------------------------
exports.check_email = function(email) {
    var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    return re.test(email)
}
//---------------------------------------------------------------------------------------------------------
exports.check_cardid = function(cardid) {
    var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return re.test(cardid)
}
//---------------------------------------------------------------------------------------------------------
exports.yesteday = function() {
    return exports.prev_day(1)
}
//---------------------------------------------------------------------------------------------------------
exports.today = function() {
    return exports.prev_day(0)
}
//---------------------------------------------------------------------------------------------------------
exports.day_begin = function(day) {
    if (day === 'yesterday') {
        day = exports.yesteday()
    }

    return Math.floor((new Date(day)).valueOf() / 1000)
}
//---------------------------------------------------------------------------------------------------------
exports.prev_day = function(num) {
    var time_len = 24 * 60 * 60 * 1000 * num
    var yday     = Date.now() - time_len
    var d_yday   = new Date(yday)

    var year  = '' + d_yday.getFullYear()
    var month = (d_yday.getMonth() > 8) ? ('' + (d_yday.getMonth() + 1)) : ('0' + (d_yday.getMonth() + 1))
    var day   = (d_yday.getDate() > 9)  ? ('' + d_yday.getDate()) : ('0' + d_yday.getDate())
    var date  = year + '-' + month + '-' + day

    return date
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

//------------------
exports.encrypt_3des = function(text, secret_key){
    var assert = require('assert')
    var crypto = require('crypto')
    var Buffer = require('buffer').Buffer
    var ENCODING = 'base64'

    var cipher = crypto.createCipher('des-ede', secret_key)
    var cryptedPassword = cipher.update(text, 'utf8',ENCODING)
    cryptedPassword+= cipher.final(ENCODING)

    return cryptedPassword
}
//---------------------------------------------------------------------------------------------------------
exports.dencrypt_3des = function(text, secret_key){
    var assert = require('assert')
    var crypto = require('crypto')
    var Buffer = require('buffer').Buffer
    var ENCODING = 'base64'

    var decipher = crypto.createDecipher('des-ede', secret_key)
    var decryptedPassword = decipher.update(text, ENCODING,'utf8')
    decryptedPassword += decipher.final('utf8')

    return decryptedPassword
}
exports.encrypt_by_md5 = function(plaintext) {
    var md5 = crypto.createHash('md5')
    md5.update(plaintext, "utf8")
    return md5.digest("hex")
}