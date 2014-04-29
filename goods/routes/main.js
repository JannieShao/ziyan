exports.index = function (req, res) {
    // if (req.session.user) {
    //     res.render('main', {if_log : 1, user : req.session.user});
    // } else {
        res.render('main', {if_log : 0});        
    // }
}
// exports.admin = function (req, res){
//     model_mr.get_mr_list(function(err, results){
//         if (err) {
//             console.log("fail");
//         } else {
//             res.render('meeting/admin/main', {mr_list : results})
//         }
//     });
// }

exports.login = function(req, res) {
    res.render('login');
}
exports.admin = function(req, res) {
    res.render('admin/main');
}