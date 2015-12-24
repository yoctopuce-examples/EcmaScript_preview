import { YAPI, YAPIContext, YFunction, YModule, YSensor, YErrorMsg, yGetTickCount } from 'lib/yocto_api';

var WebSocketServer = System._nodeRequire('ws').Server;

async function WebSocketCallbackHandler(ws)
{
    // Here you can filter the requests by URL if you want
    console.log('Received websocket request');

    // The part below starts the Yoctopuce library in WebSocket Callback mode and interacts
    // with modules connected on the VirtualHub or YoctoHub that made the HTTP request
    let errmsg = new YErrorMsg();
    let yctx = new YAPIContext();
    if(await yctx.RegisterHubWebSocketCallback(ws, errmsg) != YAPI.SUCCESS) {
        console.log('HTTP callback error: '+errmsg);
        yctx.FreeAPI();
        return;
    }

    // Display a list of modules on incoming hub to the Node.js console
    await yctx.UpdateDeviceList(errmsg);
    var module = YModule.FirstModuleInContext(yctx);
    while(module) {
        var msg = (await module.get_serialNumber()) + ' (' + (await module.get_productName()) + ')';
        console.log(msg);
        module = module.nextModule();
    }
    yctx.FreeAPI();
}

process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

// Instantiate a simple HTTP server
var wss = new WebSocketServer({ port: 8044 });
wss.on('connection', WebSocketCallbackHandler);

console.log('Node.js WebSocket Callback server running at http://127.0.0.1:8044/');
