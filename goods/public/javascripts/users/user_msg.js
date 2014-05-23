exports.date_to_ms_datetime = function(date) {
    var year    = exports.format_integer(date.getFullYear(), 4)
    var month   = exports.format_integer(date.getMonth()+1, 2)
    var day     = exports.format_integer(date.getDate(),  2)
    var hours   = exports.format_integer(date.getHours(), 2)
    var minutes = exports.format_integer(date.getMinutes(), 2)
    var seconds = exports.format_integer(date.getSeconds(), 2)

    return util.format("%s-%s-%s %s:%s:%s", year, month, day, hours, minutes, seconds)
}

exports.date_to_ms_date = function(date) {
    var year    = exports.format_integer(date.getFullYear(), 4)
    var month   = exports.format_integer(date.getMonth()+1, 2)
    var day     = exports.format_integer(date.getDate(),  2)

    return util.format("%s-%s-%s", year, month, day)
}

exports.format_integer = function(num, width) {
    var str_of_num = num.toString()

    if(str_of_num.length >= width) {
        return str_of_num.substring(str_of_num.length - width)
    }

    else {
        var result = ''
        var zero_count = width - str_of_num.length

        for (var i = 0; i<zero_count; i++) {
            result += '0'
        }

        result += str_of_num
        return  result
    }
}