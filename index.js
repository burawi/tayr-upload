module.exports = function(app, T) {

    var filerup = require('filerup')(app);

    var exports = {};

    exports.upload = function(req,settings) {
        return new Promise(function(resolve, reject) {
            var defaults = {
                tableName: 'file'
            };
            settings = Object.assign({},defaults,settings);
            var files = filerup.upload(req, settings);
            var paths = [];
            files.paths.forEach(function (path) {
                paths.push({
                    path: path,
                    createdAt: new Date()
                });
            });
            if(paths.length > 0){
                T.storeRows(settings.tableName,paths).then(function (paths) {
                    resolve(paths);
                })
            } else {
                resolve(paths);
            }
        });
    }

    return exports;
};
