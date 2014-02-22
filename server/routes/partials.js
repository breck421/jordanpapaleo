'use strict';

exports.webapp = function(req, res) {
    res.render('../../public/app/views' + req.params);
};