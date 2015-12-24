import { YAPI, YFunction, YModule, YSensor, YErrorMsg } from 'lib/yocto_api';

async function startDemo()
{
    // Setup the API to use the VirtualHub on local machine
    debugger;
    let errmsg = new YErrorMsg();
    await YAPI.DisableExceptions();
    if(await YAPI.RegisterHub('ws://127.0.0.1:4444/', errmsg) != YAPI.SUCCESS) {
        alert('Cannot contact VirtualHub on 127.0.0.1: '+errmsg.msg);
    }
    refresh();
}

async function refresh()
{
    let errmsg = new YErrorMsg();
    await YAPI.UpdateDeviceList(errmsg);

    let html = '';
    let module = YModule.FirstModule();
    while(module) {
        html += await module.get_serialNumber();
        html += '(' + (await module.get_productName()) + ')<br>';
        module = module.nextModule();
    }
    document.getElementById('list').innerHTML = html;
    setTimeout(refresh, 500);
}

window.addEventListener('onunhandledrejection', function(event) {
    console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
});

startDemo();
