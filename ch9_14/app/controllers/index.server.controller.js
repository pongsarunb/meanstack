exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World to EJS',
        user: JSON.stringify(req.user)
    });
};