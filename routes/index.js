var express = require('express');
var router = express.Router();
var data = require('../storiesConfig');

router.get('/', function(req, res) {
    var model = data;
    model.storylist = [];
    for (story in data.stories) {
        model.storylist.push(story);
    }
    res.render('index', model);
});

router.get('/:page', function(req, res) {

    var pageSlug = req.params.page;
    var model = data.stories[pageSlug];
    model.shared = data.shared;
    res.render('story', model);
});

module.exports = router;
