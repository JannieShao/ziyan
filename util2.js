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
