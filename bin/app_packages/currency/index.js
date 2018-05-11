const https = require('https');
const {URL} = require('url');
const options = new URL('https://netology-fbb-store-api.herokuapp.com/currency');

https.get(options, (res) => {
    let data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });

    res.on('end', function () {
        // console.log(data);
    })
});

module.exports = {};
