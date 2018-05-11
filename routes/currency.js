var express = require('express');
var router = express.Router();
var currency = require("../bin/app_packages/currency");

router.get('/api/:value', function (request, response, next) {
    let value = request.params.value;
    let cur = {
        currency: value
    };
    response.json(cur);
});
router.post('/', function (request, response, next) {
    console.log(request.body);
    response.json({"currency":"post"});
});
module.exports = router;
