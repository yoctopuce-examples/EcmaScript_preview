import { YAPI, YAPIContext, YFunction, YModule, YSensor, YErrorMsg, yGetTickCount } from 'lib/yocto_api';

var http = System._nodeRequire('http');

async function HttpCallbackHandler(message, response) {
    // Here you can filter the requests by URL if you want
    console.log('Received ' + message.method + ' request for ' + message.url);

    // The part below starts the Yoctopuce library in HTTP Callback mode and interacts
    // with modules connected on the VirtualHub or YoctoHub that made the HTTP request
    let errmsg = new YErrorMsg();
    let yctx = new YAPIContext();
    if(await yctx.RegisterHubHttpCallback(message, response, errmsg) != YAPI.SUCCESS) {
        console.log('HTTP callback error: '+errmsg);
        response.write('Error: '+errmsg);
        response.end();
        yctx.FreeAPI();
        return;
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('HTTP callback start<br>\n');

    // Display a list of modules on incoming hub to the Node.js console
    await yctx.UpdateDeviceList(errmsg);
    var module = YModule.FirstModuleInContext(yctx);
    while(module) {
        var msg = (await module.get_serialNumber()) + ' (' + (await module.get_productName()) + ')';
        console.log(msg);
        response.write(msg+'<br>\n');
        module = module.nextModule();
    }
    yctx.FreeAPI();

    response.write('HTTP callback completed<br>\n');
    response.end();
}

process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

// Instantiate a simple HTTP server
http.createServer(HttpCallbackHandler).listen(8044, '127.0.0.1');

console.log('Node.js HTTP Callback server running at http://127.0.0.1:8044/');
