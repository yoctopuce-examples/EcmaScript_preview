import { YAPI, YFunction, YModule, YSensor, YErrorMsg, yGetTickCount } from 'lib/yocto_api';
import { YAnButton } from 'lib/yocto_anbutton';
import { YRelay } from 'lib/yocto_relay';

var sum1,sum2,cnt1,cnt2;
var prevVal = -1000;
var reftime;

function callback(anbutton, value)
{
    var val = parseInt(value);
    if(val < 10 || val > 990) {
        var delta = val - prevVal;
        if(delta < 0) delta = -delta;
        if(delta < 20) return;
        prevVal = val;
        sum2 += (yGetTickCount()-reftime);
        cnt2++;
        //dump += '- ' + (yGetTickCount()-reftime) + ':' + value + '<br>';
    }
}

async function runTest()
{
    let errmsg = new YErrorMsg();
    if (await YAPI.RegisterHub('ws://127.0.0.1:4444/', errmsg) != YAPI.SUCCESS) {
        console.log('Cannot contact VirtualHub on 127.0.0.1: '+errmsg.msg);
    }

    let input1 = YAnButton.FindAnButton('input1');
    let relay1 = YRelay.FindRelay('relay1');
    if (!await input1.isOnline() || !await relay1.isOnline()) {
        console.log('Devices not found, check cable!');
        return;
    }

    // Pass 1
    reftime = yGetTickCount();
    for(let i = 0; i < 128; i++) {
        await relay1.set_state((i & 1)!=0 ? YRelay.STATE_A : YRelay.STATE_B);
    }
    let duration = yGetTickCount() - reftime;
    let dump = 'Average set time:        '+(duration/128)+'<br>';
    await YAPI.Sleep(200, new YErrorMsg());

    // Pass 2
    reftime = yGetTickCount();
    for(let i = 0; i < 32; i++) {
        await relay1.set_state((i & 1)!=0 ? YRelay.STATE_A : YRelay.STATE_B);
        await relay1.get_state();
    }
    duration = yGetTickCount() - reftime;
    dump += 'Average set/get time:    '+(duration/32)+'<br>';

    // prepare roundtrip test
    input1.registerValueCallback(callback);
    await YAPI.Sleep(500, new YErrorMsg());
    sum1 = 0; sum2 = 0; cnt1 = 0; cnt2 = 0;

    // Pass 3
    for(let i = 0; i < 32; i++) {
        reftime = YAPI.GetTickCount();
        await relay1.set_state((i & 1)!=0 ? YRelay.STATE_A : YRelay.STATE_B);
        sum1 += YAPI.GetTickCount() - reftime;
        cnt1++;
        await YAPI.Sleep(50, new YErrorMsg());
    }

    dump +=
        'Average command time:    ' + ((sum1+cnt1/2) / cnt1) + ' (on '+cnt1+' samples)<br>' +
        'Average round-trip time: ' + ((sum2+cnt2/2) / cnt2) + ' (on '+cnt2+' samples)<br>';
    if(YAPI._isNodeJS) {
        console.log(dump.replace(/<br>/g ,'\n'));
    } else {
        document.getElementById('cout').innerHTML = dump;
    }
    YAPI.FreeAPI();
}

if(YAPI._isNodeJS) {
    process.on('unhandledRejection', function(reason, p) {
        console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    });
} else {
    window.addEventListener('onunhandledrejection', function(event) {
        console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
    });
}
try {
    runTest();
} catch(e) {
    console.log(e);
}
