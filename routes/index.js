var express = require('express');
var router = express.Router();
var global = require('../models/global.json')

router.get('/', function(req, res) {
    var model = {};
    model.storylist = [];
    global.storyCatalog.forEach(function (item) {
        model.storylist.push(item.slug);
    });
    model.global = global;
    res.render('index', model);
});

router.get('/:page', function(req, res) {

    var pageSlug = req.params.page;
    var storyMeta = global.storyCatalog.filter(function (item) {
       return item.slug === pageSlug;
    })[0];

    var model = require('../models/'+storyMeta.file);
    model.global = global;
    res.render(model.template, model);
});

module.exports = router;
