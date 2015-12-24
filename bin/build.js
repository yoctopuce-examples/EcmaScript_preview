// This script is intended to be used from the package root, from npm scripts.
//
// Usage:
//
//   npm run build
//   => bump version number to next pre-release suffix
//      and recreate jspm bundles
//
//   npm run build -- 1.10.21818
//   => set official version number and recreate jspm bundle
//
//   npm run unbuild
//   => bump version number to next pre-release suffix
//      and deregister jspm bundle to work on source files directly
//
// Additional commands:
//   npm run set-version
//   => switch package.json to the next pre-release version (-dev.0)
//
//   npm run set-version -- 1.10.21818
//   => switch package.json to the specified version
//
//   npm run make-index
//   => rebuild the global jspm index file that includes all functions
//
"use strict";
var fs = require('fs');
var resolve = require('path').resolve;
var semver = require('semver');
var jspm = require('jspm');

function makeIndex()
{
    // generate an index.js file that includes support for all Yoctopuce functions
    var index = 'export * from \'lib/yocto_api\'\n';
    var lib = resolve(__dirname, '../lib/');
    fs.readdirSync(lib).forEach(function (mod) {
        if (mod.length > 3 && mod.slice(-3) == '.js') {
            index += 'export * from \'lib/' + mod.slice(0, -3) + '\'\n';
        }
    });
    fs.writeFileSync("jspm-index.js", index, 'utf-8');
    console.log('jspm-index.js file has been recreated')
}

function setVersion(str_newver)
{
    var json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log('Was at version ' + json.version);
    if (str_newver) {
        // argument is new version number
        var newver = semver.clean(str_newver);
        if (newver) {
            json.version = newver;
        } else {
            console.log('Invalid version number: ' + process.argv[2]);
        }
    } else {
        // bump local revision number
        json.version = semver.inc(json.version, 'prerelease', 'dev');
    }
    console.log('Now at version ' + json.version);
    fs.writeFileSync("package.json", JSON.stringify(json, null, 2), 'utf-8');
}

function build()
{
    var bundleOptions = { sourceMaps: true, lowResSourceMaps: false, minify: false, inject:true };
    console.log('Please be patient, this can take a few minutes...');
    jspm.setPackagePath('.');
    console.log('Creating yocto_api bundle');
    jspm.bundle('lib/yocto_api', 'bundles/yocto_api.js', bundleOptions)
    .then(function() { console.log('Bundle created, jspm will use pre-transpiled files'); })
    .catch(function(err) { console.log(err); });
}

function unbuild()
{
    jspm.setPackagePath('.');
    jspm.unbundle()
    .then(function() { console.log('Bundles unregistered, jspm will work from source files'); })
    .catch(function(err) { console.log(err); });
}

var args = process.argv.slice(2);
if(args.length == 0) {
    setVersion();
    makeIndex();
    build();
} else {
    switch(args[0]) {
        case "build":
            setVersion(args[1]);
            makeIndex();
            build(args[1]);
            break;
        case "unbuild":
            setVersion();
            makeIndex();
            unbuild();
            break;
        case "set-version":
            setVersion(args[1]);
            break;
        case "make-index":
            makeIndex();
            break;
    }
}