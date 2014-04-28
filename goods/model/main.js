var mysql = require("mysql")
var util = require('util') 
var options = {
    host     : "192.168.10.106",
    port     : 3306,
    user     : "root",
    password : "123456",
 //   database : "mysql",
    multipleStatements : true,
    charset            : 'LATIN1_SWEDISH_CI',
} 

var conn = mysql.createConnection(options)

if (!conn) {
    console.log('mysql createConnection err', dbs.options)
}

conn.connect(function(err) {
    var sql = "select * from user limit 1;"
    if (err) {
        console.log('mysql connect err', err, dbs.options)
    }
    conn.query("use mysql")
    conn.query(sql, function(err, rows) {
        console.log(rows)
    })

    conn.end()
})
//-------------------------------------------------
//----------------------------------------------------

function get_mr_list(cb) {
    var sql = "select * from meeting_room";

    db.exec_sql(sql, function(err, rows) {
        cb(err, rows)
    })
}
exports.get_mr_list = get_mr_list;
//---------------------------------------------------------------------------------------------
function find_mr_by_name(name, cb) {
    var sql = util.format("select * from meeting_room where name = '%s'", name)

    db.exec_sql(sql, function(err, rows) {
        cb(err, rows)
    })
}
exports.find_mr_by_name = find_mr_by_name;
//---------------------------------------------------------------------------------------------
function find_mr_by_id(mr_id, cb) {
    var sql = util.format("select * from meeting_room where id = %d", mr_id)

    db.exec_sql(sql, function(err, rows) {
        cb(err, rows)
    })
}
exports.find_mr_by_id = find_mr_by_id;
//---------------------------------------------------------------------------------------------
function find_mr_by_floor(mr_floor, cb) {
    var sql = util.format("select * from meeting_room where floor = %d", mr_floor)

    db.exec_sql(sql, function(err, rows) {
        cb(err, rows)
    })
}
exports.find_mr_by_floor = find_mr_by_floor;
//-------------------------------------------------------------------------------------
function edit_mr(id, record, cb) {
    var sql = util.format("update meeting_room set name = '%s', floor = %d, location = '%s', introduction = '%s' where id = %d",
                    record.name, record.floor, record.location, record.intro, id);

    db.exec_sql(sql, function(err, rows) {
        if (cb) {
            cb(err, rows)
        }
    })
}
exports.edit_mr = edit_mr;
//--------------------------------------------------------------------------------------------
function add_mr(record, cb){
    var sql = util.format("insert into meeting_room (name, floor, location, introduction) values('%s', %d, '%s', '%s')",
                    record.name, record.floor, record.location, record.intro);
    db.exec_sql(sql, function(err, rows){
        if(cb){
            cb(err, rows)
        }
    })
}
exports.add_mr = add_mr
//----------------------------------------------------------------------------------------------
function del_mr(id, cb){
    var sql = util.format("delete from meeting_room where id = %d", id);
    db.exec_sql(sql, function(err, rows){
        if(cb){
            cb(err, rows)
        }
    })
}
exports.del_mr = del_mr
