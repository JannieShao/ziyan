var model_sorts = require('../model/sorts');

exports.add_sorts = function(req, res){
    var args = {}
    args.sort_a = req.body.sort_a
    args.sort_b = req.body.sort_b
    args.sort_c = req.body.sort_c
    args.sort_d = req.body.sort_d

    console.log(args)

    model_sorts.sorts_insert(args, function(err, rows){
        model_sorts.sorts_show_all(function(err, rows){
            console.log(rows)
        })
        res.render('tools/addsort')
    })
}