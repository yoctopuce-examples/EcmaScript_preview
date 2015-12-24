import { YAPI, YFunction, YModule, YSensor, YErrorMsg } from 'lib/yocto_api';

async function startDemo()
{
    // Setup the API to use the VirtualHub on local machine
    let errmsg = new YErrorMsg();
    await YAPI.DisableExceptions();
    if (await YAPI.RegisterHub('http://127.0.0.1:4444/', errmsg) != YAPI.SUCCESS) {
        console.log('Cannot contact VirtualHub on 127.0.0.1');
    }
    refresh();
}

async function refresh()
{
    try {
        let errmsg = new YErrorMsg();
        await YAPI.UpdateDeviceList(errmsg);

        let module = YModule.FirstModule();
        while(module) {
            let line = await module.get_serialNumber();
            line += '(' + (await module.get_productName()) + ')';
            console.log(line);
            module = module.nextModule();
        }
        setTimeout(refresh, 500);
    } catch(e) {
        console.log(e);
    }
}

process.on('unhandledRejection', function(reason, p) {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

console.log('Start demo');
try {
    startDemo();
} catch(e) {
    console.log(e);
}
