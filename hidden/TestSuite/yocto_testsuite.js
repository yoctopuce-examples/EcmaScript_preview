/*********************************************************************
 *
 * $Id: yocto_testsuite.js 21802 2015-10-16 10:11:57Z seb $
 *
 * Implements the high-level API for TestSuite functions
 *
 * - - - - - - - - - License information: - - - - - - - - -
 *
 *  Copyright (C) 2011 and beyond by Yoctopuce Sarl, Switzerland.
 *
 *  Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
 *  non-exclusive license to use, modify, copy and integrate this
 *  file into your software for the sole purpose of interfacing
 *  with Yoctopuce products.
 *
 *  You may reproduce and distribute copies of this file in
 *  source or object form, as long as the sole purpose of this
 *  code is to interface with Yoctopuce products. You must retain
 *  this notice in the distributed source file.
 *
 *  You should refer to Yoctopuce General Terms and Conditions
 *  for additional information regarding your rights and
 *  obligations.
 *
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED 'AS IS' WITHOUT
 *  WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
 *  EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
 *  INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
 *  COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
 *  SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
 *  LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
 *  CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
 *  BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
 *  WARRANTY, OR OTHERWISE.
 *
 *********************************************************************/

if(typeof YAPI == "undefined") { if(typeof yAPI != "undefined") window["YAPI"]=yAPI; else throw "YAPI is not defined, please include yocto_api.js first"; }

//--- (generated code: YTestSuite return codes)
//--- (end of generated code: YTestSuite return codes)
//--- (generated code: YTestSuite definitions)
//--- (end of generated code: YTestSuite definitions)

//--- (generated code: YTestSuite class start)
/**
 * YTestSuite Class: DisplayLayer object interface
 *
 * The Yoctopuce class YPressure allows you to read and configure Yoctopuce pressure
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 */
//--- (end of generated code: YTestSuite class start)

var YTestSuite; // definition below
(function()
{
    function _YTestSuite(str_func)
    {
        //--- (generated code: YTestSuite constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'TestSuite';
        //--- (end of generated code: YTestSuite constructor)
    }

    //--- (generated code: YTestSuite implementation)

    /**
     * Retrieves a function for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the function is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YTestSuite.isOnline() to test if the function is
     * indeed online at a given time. In case of ambiguity when looking for
     * a function by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the function
     *
     * @return {YTestSuite} a YTestSuite object allowing you to drive the function.
     */
    static FindTestSuite(func, obj_yapi = YAPI)
    {
        /** @type {YTestSuite} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'TestSuite', func);
        if (obj == null) {
            obj = new YTestSuite(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'TestSuite',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a function for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the function is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YTestSuite.isOnline() to test if the function is
     * indeed online at a given time. In case of ambiguity when looking for
     * a function by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the function
     *
     * @return {YTestSuite} a YTestSuite object allowing you to drive the function.
     */
    static FindTestSuiteInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YTestSuite} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'TestSuite', func);
        if (obj == null) {
            obj = new YTestSuite(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'TestSuite',  func, obj);
        }
        return obj;
    }

    async test_json()
    {
        /** @type {Uint8Array} **/
        let bin_val;
        /** @type {string} **/
        let val;
        /** @type {string} **/
        let json;
        bin_val = this._yapi.imm_str2bin('"abcd1234\'\\"abcd"');
        //may throw an exception
        val = this.imm_json_get_string(bin_val);
        if (!(val == 'abcd1234\'"abcd')) {
            return 'Error in _json_get_string function("abcd1234\'\\"abcd")';
        }
        //bin_val = STR2BIN("");
        //val = this->_json_get_string(bin_val);
        //IF(NOT(STR_EQUAL(val,"")), RETURN("Error in _json_get_string function(\"\""));
        json = '{"module": {"productName": "YoctoHub-Ethernet","serialNumber": "YHUBETH1-10EEB","logicalName": "","productId": 14,"upTime": 33793},"network": {"ipConfig": "DHCP:169.254.45.138/16/169.254.0.1","callbackUrl": "http://e.g/i/post.json?apikey=c4a35&json=","callbackMethod": 1,"poeCurrent": 150},"services": {"whitePages": [{"serialNumber": "YHUBETH1-10EEB","logicalName": "[\\"\'\\\\]","productName": "YoctoHub-Ethernet","networkUrl": "/api"},{"serialNumber": "LIGHTMK2-39087","logicalName": "","productName": "Yocto-Light-V2","networkUrl": "/bySerial/LIGHTMK2-39087/api"}],"yellowPages": {"HubPort": [{"baseType": 0,"advertisedValue": "ON"},{"baseType": 0,"advertisedValue": "ON"}]}}}';
        val = this.imm_get_json_path(json, 'module|serialNumber');
        if (!(val == '"YHUBETH1-10EEB"')) {
            return 'Error in _get_json_path("module|serialNumber"';
        }
        val = this.imm_decode_json_string(val);
        if (!(val == 'YHUBETH1-10EEB')) {
            return 'Error in _decode_json_string("\\"YHUBETH1-10EEB\\""';
        }
        val = this.imm_get_json_path(json, 'module|productId');
        if (!(val == '14')) {
            return 'Error in _json_get_path function("module|productId"';
        }
        val = this.imm_get_json_path(json, 'services|whitePages|1|networkUrl');
        val = this.imm_decode_json_string(val);
        if (!(val == '/bySerial/LIGHTMK2-39087/api')) {
            return 'Error in _json_get_path("services|whitePages|1|networkUrl"';
        }
        val = this.imm_get_json_path(json, 'network');
        if ((val).length < 143) {
            return 'Error in _json_get_path("network"';
        }
        return '';
    }

    async test_atoi()
    {
        /** @type {string} **/
        let val;
        /** @type {number} **/
        let res;
        val = '32';
        res = this._yapi.imm_atoi(val);
        if (res != 32) {
            return val;
        }
        val = '+32';
        res = this._yapi.imm_atoi(val);
        if (res != 32) {
            return val;
        }
        val = '-32';
        res = this._yapi.imm_atoi(val);
        if (res != -32) {
            return val;
        }
        val = '32.54';
        res = this._yapi.imm_atoi(val);
        if (res != 32) {
            return val;
        }
        val = 'asasdf';
        res = this._yapi.imm_atoi(val);
        if (res != 0) {
            return val;
        }
        val = '   32';
        res = this._yapi.imm_atoi(val);
        if (res != 32) {
            return val;
        }
        val = '   -32pouet';
        res = this._yapi.imm_atoi(val);
        if (res != -32) {
            return val;
        }
        val = '-32.8';
        res = this._yapi.imm_atoi(val);
        if (res != -32) {
            return val;
        }
        val = '';
        res = this._yapi.imm_atoi(val);
        if (res != 0) {
            return 'empty';
        }
        return '';
    }

    async test_str_bin_hex()
    {
        /** @type {string} **/
        let org_str;
        /** @type {Uint8Array} **/
        let bindata;
        /** @type {string} **/
        let hex_str;
        /** @type {string} **/
        let final_str;
        org_str = 'This Is a Test 2+2=4';
        bindata = this._yapi.imm_str2bin(org_str);
        hex_str = this._yapi.imm_bin2hexstr(bindata);
        if (!(hex_str == '546869732049732061205465737420322B323D34')) {
            return 'Error: in string to bin to hex string';
        }
        bindata = this._yapi.imm_hexstr2bin(hex_str);
        final_str = this._yapi.imm_bin2str(bindata);
        if (!(final_str == org_str)) {
            return 'Error: in hex string to bin to string';
        }
        return '';
    }

    async Run()
    {
        /** @type {string} **/
        let res;
        console.log('Start test suite.');
        res = 'Test API version: ' + this._yapi.GetAPIVersion();
        console.log(res);
        console.log(' - test atoi functions.');
        res = await this.test_atoi();
        if (!(res == '')) {
            return res;
        }
        console.log(' - test bin functions.');
        res = await this.test_str_bin_hex();
        if (!(res == '')) {
            return res;
        }
        console.log(' - test json functions.');
        //may throw an exception
        res = await this.test_json();
        if (!(res == '')) {
            return res;
        }
        // may throw an exception
        //res = this->TestSaveSettings();
        //IF(NOT(STR_EQUAL(res,"")), RETURN(res));
        return 'TestSuite success!';
    }

    async TestSaveSettings()
    {
        /** @type {YModule} **/
        let src;
        /** @type {YModule} **/
        let dst;
        /** @type {YFiles} **/
        let files_src;
        /** @type {YFiles} **/
        let files_dst;
        /** @type {string} **/
        let serial;
        /** @type {string} **/
        let product;
        /** @type {string[]} **/
        let relays = [];
        /** @type {Uint8Array} **/
        let allSettings;
        /** @type {string} **/
        let tmp;
        // may throw an exception
        console.log('Register hubs 172.17.17.89 and 172.17.17.61.');
        this._yapi.RegisterHub('172.17.17.89');
        this._yapi.RegisterHub('172.17.17.61');
        src = await YModule.FirstModule();
        while (!(src == null)) {
            serial = await src.get_serialNumber();
            product = await src.get_productName();
            tmp = serial + ' (' + product + ')';
            console.log(tmp);
            relays = await src.get_functionIds('Relay');
            for (let ii in  relays) {
                tmp = '   - ' +  relays[ii];
                console.log(tmp);;
            }
            src = await src.nextModule();
        }
        src = await YModule.FindModule('YHUBETH1-22D8A.module');
        dst = await YModule.FindModule('YHUBETH1-10EEB.module');
        files_src = await YFiles.FindFiles('YHUBETH1-22D8A.files');
        files_dst = await YFiles.FindFiles('YHUBETH1-10EEB.files');
        console.log('Prepare hubs for test.');
        await src.set_logicalName('ok');
        await dst.set_logicalName('error');
        console.log('format fs');
        await files_src.format_fs();
        await files_dst.format_fs();
        console.log('upload test file');
        await files_src.upload('test_file.txt', this._yapi.imm_str2bin('This Is a Test{"task1":{"interval":500,"script":[{"writeHex":"61"},{"expect":"($1:BYTE)"}]}}'));
        console.log('upload done');
        tmp = await src.get_logicalName();
        if (!(tmp == 'ok')) {
            return 'Error:  YModule.set_logicalname(ok)';
        }
        tmp = await dst.get_logicalName();
        if (!(tmp == 'error')) {
            return 'Error: YModule.set_logicalname(error)';
        }
        console.log('get src file count');
        if (await files_src.get_filesCount() != 1) {
            return 'Error: YFiles.upload()';
        }
        console.log('get dst file count');
        if (await files_dst.get_filesCount() != 0) {
            return 'Error: YFiles.format_fs()';
        }
        console.log('get all settings.');
        allSettings = await src.get_allSettings();
        tmp = this._yapi.imm_bin2str(allSettings);
        console.log('restore all settings and files.');
        await dst.set_allSettingsAndFiles(allSettings);
        console.log('verify settings and files.');
        tmp = await dst.get_logicalName();
        if (!(tmp == 'ok')) {
            return 'Error: logicalname not restored';
        }
        if (await files_dst.get_filesCount() != 1) {
            return 'Error: files not restored';
        }
        console.log('Cleanup dst hub.');
        await files_dst.format_fs();
        await dst.set_logicalName('error');
        console.log('restore settings only.');
        await dst.set_allSettings(allSettings);console.log('verify settings only.');
        tmp = await dst.get_logicalName();
        if (!(tmp == 'ok')) {
            return 'Error: logicalname not restored';
        }
        if (await files_dst.get_filesCount() != 0) {
            return 'Error: files not restored';
        }
        console.log('TestSaveSettings success.');
        this._yapi.FreeAPI();
        return '';
    }

    /**
     * Continues the enumeration of functions started using yFirstTestSuite().
     *
     * @return {YTestSuite} a pointer to a YTestSuite object, corresponding to
     *         a function currently online, or a null pointer
     *         if there are no more functions to enumerate.
     */
    /**/ nextTestSuite()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YTestSuite.FindTestSuite(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of functions currently accessible.
     * Use the method YTestSuite.nextTestSuite() to iterate on
     * next functions.
     *
     * @return {YTestSuite} a pointer to a YTestSuite object, corresponding to
     *         the first function currently online, or a null pointer
     *         if there are none.
     */
    static FirstTestSuite(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('TestSuite');
        if(next_hwid == null) return null;
        return YTestSuite.FindTestSuite(next_hwid, obj_yapi);
    }

    //--- (end of generated code: YTestSuite implementation)

    //--- (generated code: YTestSuite initialization)
    YTestSuite = YFunction._Subclass(_YTestSuite, {
    }, {
        // Class methods
        FindTestSuite               : YTestSuite_FindTestSuite,
        FirstTestSuite              : YTestSuite_FirstTestSuite
    }, {
        // Methods
        test_json                   : YTestSuite_test_json,
        test_atoi                   : YTestSuite_test_atoi,
        test_str_bin_hex            : YTestSuite_test_str_bin_hex,
        Run                         : YTestSuite_Run,
        TestSaveSettings            : YTestSuite_TestSaveSettings,
        nextTestSuite               : YTestSuite_nextTestSuite
    });
    //--- (end of generated code: YTestSuite initialization)
})();

//--- (generated code: TestSuite functions)

/**
 * comment from .yc definition
 */
export function yFindTestSuite(func)
{
    return YTestSuite.FindTestSuite(func);
}

/**
 * comment from .yc definition
 */
export function yFirstTestSuite()
{
    return YTestSuite.FirstTestSuite();
}

//--- (end of generated code: TestSuite functions)
