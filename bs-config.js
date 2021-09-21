
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "files": ["lib", "demo"],
    "server": {
        baseDir: "demo",
        routes: {
            "/node_modules": "node_modules"
        }
    },
    middleware: [
        {
            route: "/lib",
            handle: function(req, res, next) {
                return next();
            }
        }
    ]
};