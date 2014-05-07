var mysql = require("mysql")

var options = {
    host     : "192.168.33.10",
    port     : 3306,
    user     : "root",
    password : "123456",
    database : "goods",
    multipleStatements : true,
    charset            : 'LATIN1_SWEDISH_CI',
}    

var conn = mysql.createConnection(options)
if (!conn) {
    console.log('mysql createConnection error', options)
}
conn.connect(function(err,rows) {
    if (err) {
        console.log('mysql connect err', err, options)
    }
    // conn.end()
})
exports.exec_sql = function(sql, cb){
    conn.query(sql, function(err, rows) {
        cb(err, rows)
    })
}
