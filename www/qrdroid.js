var exec = require('cordova/exec');

/*exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'qrdroid', 'coolMethod', [arg0]);
};*/

function QRDroid () {};

QRDroid.prototype = {

    scan: function (params, success, failure)
    {
        params = params || {};
        exec(success, failure, 'QRDroid', 'scan', [params]);
    }
};

module.exports = new QRDroid;
