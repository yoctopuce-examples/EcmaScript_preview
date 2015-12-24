"use strict";
var yoctolib = require('../../bundles/yoctolib.js');
var YAPI = yoctolib.YAPI;
var YRelay = yoctolib.YRelay;

var errmsg = new YErrorMsg();
var relay1;
YAPI.RegisterHub('ws://127.0.0.1:4444/', errmsg)
.then(function(res) {
    if(res != YAPI.SUCCESS) {
        console.log('Cannot contact VirtualHub on 127.0.0.1: '+errmsg.msg);
    }
    relay1 = YRelay.FindRelay('relay1');
    return relay1.isOnline();
})
.then(function(online) {
    console.log('isOnline: '+online);
    return relay1.get_state();
})
.then(function(currState) {
    return relay1.set_state(currState);
})
.catch(function(err) {
    console.log(err);
});
