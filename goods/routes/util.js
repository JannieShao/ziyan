exports.render_page_500 = function(res) {
    return res.render('errors/page-500')
}

exports.render_page_403 = function(res) {
    return res.render('errors/page-403')
}