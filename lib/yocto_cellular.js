/*********************************************************************
 *
 * $Id: yocto_cellular.js 21680 2015-10-02 13:42:44Z seb $
 *
 * Implements the high-level API for Cellular functions
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

import { YAPI, YAPI_SUCCESS, YFunction, YModule, YSensor } from 'lib/yocto_api'

//--- (generated code: YCellRecord return codes)
//--- (end of generated code: YCellRecord return codes)
//--- (generated code: YCellRecord definitions)
//--- (end of generated code: YCellRecord definitions)

//--- (generated code: YCellRecord class start)
/**
 * YCellRecord Class: Description of a cellular antenna
 *
 *
 */
//--- (end of generated code: YCellRecord class start)

export class YCellRecord
{
    constructor(int_mcc,int_mnc,int_lac,int_cellId,int_dbm,int_tad,str_oper)
    {
        //--- (generated code: YCellRecord constructor)
        /** @member {string} **/
        this._oper                       = '';
        /** @member {number} **/
        this._mcc                        = 0;
        /** @member {number} **/
        this._mnc                        = 0;
        /** @member {number} **/
        this._lac                        = 0;
        /** @member {number} **/
        this._cid                        = 0;
        /** @member {number} **/
        this._dbm                        = 0;
        /** @member {number} **/
        this._tad                        = 0;
        //--- (end of generated code: YCellRecord constructor)
        this._oper = str_oper;
        this._mcc = int_mcc;
        this._mnc = int_mnc;
        this._lac = int_lac;
        this._cid = int_cellId;
        this._dbm = int_dbm;
        this._tad = int_tad;
    }

    //--- (generated code: YCellRecord implementation)

    /**/ get_cellOperator()
    {
        return this._oper;
    }

    /**/ get_mobileCountryCode()
    {
        return this._mcc;
    }

    /**/ get_mobileNetworkCode()
    {
        return this._mnc;
    }

    /**/ get_locationAreaCode()
    {
        return this._lac;
    }

    /**/ get_cellId()
    {
        return this._cid;
    }

    /**/ get_signalStrength()
    {
        return this._dbm;
    }

    /**/ get_timingAdvance()
    {
        return this._tad;
    }

    //--- (end of generated code: YCellRecord implementation)
}

//--- (generated code: CellRecord functions)
//--- (end of generated code: CellRecord functions)


//--- (generated code: YCellular return codes)
//--- (end of generated code: YCellular return codes)
//--- (generated code: YCellular definitions)
export const Y_ENABLEDATA_HOMENETWORK        = 0;
export const Y_ENABLEDATA_ROAMING            = 1;
export const Y_ENABLEDATA_NEVER              = 2;
export const Y_ENABLEDATA_INVALID            = -1;
export const Y_LINKQUALITY_INVALID           = YAPI.INVALID_UINT;
export const Y_CELLOPERATOR_INVALID          = YAPI.INVALID_STRING;
export const Y_CELLIDENTIFIER_INVALID        = YAPI.INVALID_STRING;
export const Y_IMSI_INVALID                  = YAPI.INVALID_STRING;
export const Y_MESSAGE_INVALID               = YAPI.INVALID_STRING;
export const Y_PIN_INVALID                   = YAPI.INVALID_STRING;
export const Y_LOCKEDOPERATOR_INVALID        = YAPI.INVALID_STRING;
export const Y_APN_INVALID                   = YAPI.INVALID_STRING;
export const Y_APNSECRET_INVALID             = YAPI.INVALID_STRING;
export const Y_COMMAND_INVALID               = YAPI.INVALID_STRING;
//--- (end of generated code: YCellular definitions)

//--- (generated code: YCellular class start)
/**
 * YCellular Class: Cellular function interface
 *
 * YCellular functions provides control over cellular network parameters
 * and status for devices that are GSM-enabled.
 */
//--- (end of generated code: YCellular class start)

export class YCellular extends YFunction
{
    constructor(str_func)
    {
        //--- (generated code: YCellular constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Cellular';
        /** @member {number} **/
        this._linkQuality                = Y_LINKQUALITY_INVALID;
        /** @member {string} **/
        this._cellOperator               = Y_CELLOPERATOR_INVALID;
        /** @member {string} **/
        this._cellIdentifier             = Y_CELLIDENTIFIER_INVALID;
        /** @member {string} **/
        this._imsi                       = Y_IMSI_INVALID;
        /** @member {string} **/
        this._message                    = Y_MESSAGE_INVALID;
        /** @member {string} **/
        this._pin                        = Y_PIN_INVALID;
        /** @member {string} **/
        this._lockedOperator             = Y_LOCKEDOPERATOR_INVALID;
        /** @member {number} **/
        this._enableData                 = Y_ENABLEDATA_INVALID;
        /** @member {string} **/
        this._apn                        = Y_APN_INVALID;
        /** @member {string} **/
        this._apnSecret                  = Y_APNSECRET_INVALID;
        /** @member {string} **/
        this._command                    = Y_COMMAND_INVALID;
        this.imm_setConst({
            LINKQUALITY_INVALID          : YAPI.INVALID_UINT,
            CELLOPERATOR_INVALID         : YAPI.INVALID_STRING,
            CELLIDENTIFIER_INVALID       : YAPI.INVALID_STRING,
            IMSI_INVALID                 : YAPI.INVALID_STRING,
            MESSAGE_INVALID              : YAPI.INVALID_STRING,
            PIN_INVALID                  : YAPI.INVALID_STRING,
            LOCKEDOPERATOR_INVALID       : YAPI.INVALID_STRING,
            ENABLEDATA_HOMENETWORK       : 0,
            ENABLEDATA_ROAMING           : 1,
            ENABLEDATA_NEVER             : 2,
            ENABLEDATA_INVALID           : -1,
            APN_INVALID                  : YAPI.INVALID_STRING,
            APNSECRET_INVALID            : YAPI.INVALID_STRING,
            COMMAND_INVALID              : YAPI.INVALID_STRING
        });
        //--- (end of generated code: YCellular constructor)
    }

    //--- (generated code: YCellular implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'linkQuality':
            this._linkQuality = parseInt(val);
            return 1;
        case 'cellOperator':
            this._cellOperator = val;
            return 1;
        case 'cellIdentifier':
            this._cellIdentifier = val;
            return 1;
        case 'imsi':
            this._imsi = val;
            return 1;
        case 'message':
            this._message = val;
            return 1;
        case 'pin':
            this._pin = val;
            return 1;
        case 'lockedOperator':
            this._lockedOperator = val;
            return 1;
        case 'enableData':
            this._enableData = parseInt(val);
            return 1;
        case 'apn':
            this._apn = val;
            return 1;
        case 'apnSecret':
            this._apnSecret = val;
            return 1;
        case 'command':
            this._command = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the link quality, expressed in percent.
     *
     * @return {number} an integer corresponding to the link quality, expressed in percent
     *
     * On failure, throws an exception or returns YCellular.LINKQUALITY_INVALID.
     */
    async get_linkQuality()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_LINKQUALITY_INVALID;
            }
        }
        return this._linkQuality;
    }

    /**
     * Returns the name of the cell operator currently in use.
     *
     * @return {string} a string corresponding to the name of the cell operator currently in use
     *
     * On failure, throws an exception or returns YCellular.CELLOPERATOR_INVALID.
     */
    async get_cellOperator()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CELLOPERATOR_INVALID;
            }
        }
        return this._cellOperator;
    }

    /**
     * Returns the unique identifier of the cellular antenna in use: MCC, MNC, LAC and Cell ID.
     *
     * @return {string} a string corresponding to the unique identifier of the cellular antenna in use:
     * MCC, MNC, LAC and Cell ID
     *
     * On failure, throws an exception or returns YCellular.CELLIDENTIFIER_INVALID.
     */
    async get_cellIdentifier()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CELLIDENTIFIER_INVALID;
            }
        }
        return this._cellIdentifier;
    }

    /**
     * Returns an opaque string if a PIN code has been configured in the device to access
     * the SIM card, or an empty string if none has been configured or if the code provided
     * was rejected by the SIM card.
     *
     * @return {string} a string corresponding to an opaque string if a PIN code has been configured in
     * the device to access
     *         the SIM card, or an empty string if none has been configured or if the code provided
     *         was rejected by the SIM card
     *
     * On failure, throws an exception or returns YCellular.IMSI_INVALID.
     */
    async get_imsi()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_IMSI_INVALID;
            }
        }
        return this._imsi;
    }

    /**
     * Returns the latest status message from the wireless interface.
     *
     * @return {string} a string corresponding to the latest status message from the wireless interface
     *
     * On failure, throws an exception or returns YCellular.MESSAGE_INVALID.
     */
    async get_message()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MESSAGE_INVALID;
            }
        }
        return this._message;
    }

    /**
     * Returns an opaque string if a PIN code has been configured in the device to access
     * the SIM card, or an empty string if none has been configured or if the code provided
     * was rejected by the SIM card.
     *
     * @return {string} a string corresponding to an opaque string if a PIN code has been configured in
     * the device to access
     *         the SIM card, or an empty string if none has been configured or if the code provided
     *         was rejected by the SIM card
     *
     * On failure, throws an exception or returns YCellular.PIN_INVALID.
     */
    async get_pin()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PIN_INVALID;
            }
        }
        return this._pin;
    }

    /**
     * Changes the PIN code used by the module to access the SIM card.
     * This function does not change the code on the SIM card itself, but only changes
     * the parameter used by the device to try to get access to it. If the SIM code
     * does not work immediately on first try, it will be automatically forgotten
     * and the message will be set to "Enter SIM PIN". The method should then be
     * invoked again with right correct PIN code. After three failed attempts in a row,
     * the message is changed to "Enter SIM PUK" and the SIM card PUK code must be
     * provided using method sendPUK.
     *
     * Remember to call the saveToFlash() method of the module to save the
     * new value in the device flash.
     *
     * @param newval {string} : a string corresponding to the PIN code used by the module to access the SIM card
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_pin(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('pin',rest_val);
    }

    /**
     * Returns the name of the only cell operator to use if automatic choice is disabled,
     * or an empty string if the SIM card will automatically choose among available
     * cell operators.
     *
     * @return {string} a string corresponding to the name of the only cell operator to use if automatic
     * choice is disabled,
     *         or an empty string if the SIM card will automatically choose among available
     *         cell operators
     *
     * On failure, throws an exception or returns YCellular.LOCKEDOPERATOR_INVALID.
     */
    async get_lockedOperator()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_LOCKEDOPERATOR_INVALID;
            }
        }
        return this._lockedOperator;
    }

    /**
     * Changes the name of the cell operator to be used. If the name is an empty
     * string, the choice will be made automatically based on the SIM card. Otherwise,
     * the selected operator is the only one that will be used.
     *
     * @param newval {string} : a string corresponding to the name of the cell operator to be used
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_lockedOperator(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('lockedOperator',rest_val);
    }

    /**
     * Returns the condition for enabling IP data services (GPRS).
     * When data services are disabled, SMS are the only mean of communication.
     *
     * @return {number} a value among YCellular.ENABLEDATA_HOMENETWORK, YCellular.ENABLEDATA_ROAMING and
     * YCellular.ENABLEDATA_NEVER corresponding to the condition for enabling IP data services (GPRS)
     *
     * On failure, throws an exception or returns YCellular.ENABLEDATA_INVALID.
     */
    async get_enableData()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ENABLEDATA_INVALID;
            }
        }
        return this._enableData;
    }

    /**
     * Changes the condition for enabling IP data services (GPRS).
     * The service can be either fully deactivated, or limited to the SIM home network,
     * or enabled for all partner networks (roaming). Caution: enabling data services
     * on roaming networks may cause prohibitive communication costs !
     *
     * When data services are disabled, SMS are the only mean of communication.
     *
     * @param newval {number} : a value among YCellular.ENABLEDATA_HOMENETWORK,
     * YCellular.ENABLEDATA_ROAMING and YCellular.ENABLEDATA_NEVER corresponding to the condition for
     * enabling IP data services (GPRS)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_enableData(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('enableData',rest_val);
    }

    /**
     * Returns the Access Point Name (APN) to be used, if needed.
     * When left blank, the APN suggested by the cell operator will be used.
     *
     * @return {string} a string corresponding to the Access Point Name (APN) to be used, if needed
     *
     * On failure, throws an exception or returns YCellular.APN_INVALID.
     */
    async get_apn()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_APN_INVALID;
            }
        }
        return this._apn;
    }

    /**
     * Returns the Access Point Name (APN) to be used, if needed.
     * When left blank, the APN suggested by the cell operator will be used.
     *
     * @param newval {string} : a string
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_apn(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('apn',rest_val);
    }

    /**
     * Returns an opaque string if APN authentication parameters have been configured
     * in the device, or an empty string otherwise.
     * To configure these parameters, use set_apnAuth().
     *
     * @return {string} a string corresponding to an opaque string if APN authentication parameters have
     * been configured
     *         in the device, or an empty string otherwise
     *
     * On failure, throws an exception or returns YCellular.APNSECRET_INVALID.
     */
    async get_apnSecret()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_APNSECRET_INVALID;
            }
        }
        return this._apnSecret;
    }

    async set_apnSecret(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('apnSecret',rest_val);
    }

    async get_command()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_COMMAND_INVALID;
            }
        }
        return this._command;
    }

    async set_command(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('command',rest_val);
    }

    /**
     * Retrieves a cellular interface for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the cellular interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCellular.isOnline() to test if the cellular interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a cellular interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the cellular interface
     *
     * @return {YCellular} a YCellular object allowing you to drive the cellular interface.
     */
    static FindCellular(func, obj_yapi = YAPI)
    {
        /** @type {YCellular} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Cellular', func);
        if (obj == null) {
            obj = new YCellular(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Cellular',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a cellular interface for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the cellular interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCellular.isOnline() to test if the cellular interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a cellular interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the cellular interface
     *
     * @return {YCellular} a YCellular object allowing you to drive the cellular interface.
     */
    static FindCellularInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YCellular} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Cellular', func);
        if (obj == null) {
            obj = new YCellular(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Cellular',  func, obj);
        }
        return obj;
    }

    /**
     * Sends a PUK code to unlock the SIM card after three failed PIN code attempts, and
     * setup a new PIN into the SIM card. Only ten consecutives tentatives are permitted:
     * after that, the SIM card will be blocked permanently without any mean of recovery
     * to use it again. Note that after calling this method, you have usually to invoke
     * method set_pin() to tell the YoctoHub which PIN to use in the future.
     *
     * @param puk {string} : the SIM PUK code
     * @param newPin {string} : new PIN code to configure into the SIM card
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async sendPUK(puk,newPin)
    {
        /** @type {string} **/
        let gsmMsg;
        gsmMsg = await this.get_message();
        if (!(gsmMsg == 'Enter SIM PUK')) {
            return this._throw(YAPI_INVALID_ARGUMENT,'PUK not expected at this time',YAPI_INVALID_ARGUMENT);
        }
        if (newPin == '') {
            return await this.set_command('AT+CPIN='+puk+',0000;+CLCK=SC,0,0000');
        }
        return await this.set_command('AT+CPIN='+puk+','+newPin);
    }

    /**
     * Configure authentication parameters to connect to the APN. Both
     * PAP and CHAP authentication are supported.
     *
     * @param username {string} : APN username
     * @param password {string} : APN password
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_apnAuth(username,password)
    {
        return await this.set_apnSecret(username+','+password);
    }

    /**
     * Sends an AT command to the GSM module and returns the command output.
     * The command will only execute when the GSM module is in standard
     * command state, and should leave it in the exact same state.
     * Use this function with great care !
     *
     * @param cmd {string} : the AT command to execute, like for instance: "+CCLK?".
     *
     * @return {string} a string with the result of the commands. Empty lines are
     *         automatically removed from the output.
     */
    async _AT(cmd)
    {
        /** @type {number} **/
        let chrPos;
        /** @type {number} **/
        let cmdLen;
        /** @type {number} **/
        let waitMore;
        /** @type {string} **/
        let res;
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {string} **/
        let buffstr;
        /** @type {number} **/
        let buffstrlen;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let suffixlen;
        // quote dangerous characters used in AT commands
        cmdLen = (cmd).length;
        chrPos = (cmd).indexOf('#');
        while (chrPos >= 0) {
            cmd = (cmd).substr( 0, chrPos)+''+String.fromCharCode(37)+'23'+(cmd).substr( chrPos+1, cmdLen-chrPos-1);
            cmdLen = cmdLen + 2;
            chrPos = (cmd).indexOf('#');
        }
        chrPos = (cmd).indexOf('+');
        while (chrPos >= 0) {
            cmd = (cmd).substr( 0, chrPos)+''+String.fromCharCode(37)+'2B'+(cmd).substr( chrPos+1, cmdLen-chrPos-1);
            cmdLen = cmdLen + 2;
            chrPos = (cmd).indexOf('+');
        }
        chrPos = (cmd).indexOf('=');
        while (chrPos >= 0) {
            cmd = (cmd).substr( 0, chrPos)+''+String.fromCharCode(37)+'3D'+(cmd).substr( chrPos+1, cmdLen-chrPos-1);
            cmdLen = cmdLen + 2;
            chrPos = (cmd).indexOf('=');
        }
        cmd = 'at.txt?cmd='+cmd;
        res = '';
        // max 2 minutes (each iteration may take up to 5 seconds if waiting)
        waitMore = 24;
        while (waitMore > 0) {
            buff = await this._download(cmd);
            bufflen = (buff).length;
            buffstr = this._yapi.imm_bin2str(buff);
            buffstrlen = (buffstr).length;
            idx = bufflen - 1;
            while ((idx > 0) && (buff[idx] != 64) && (buff[idx] != 10) && (buff[idx] != 13)) {
                idx = idx - 1;
            }
            if (buff[idx] == 64) {
                suffixlen = bufflen - idx;
                cmd = 'at.txt?cmd='+(buffstr).substr( buffstrlen - suffixlen, suffixlen);
                buffstr = (buffstr).substr( 0, buffstrlen - suffixlen);
                waitMore = waitMore - 1;
            } else {
                waitMore = 0;
            }
            res = res+''+buffstr;
        }
        return res;
    }

    /**
     * Returns the list detected cell operators in the neighborhood.
     * This function will typically take between 30 seconds to 1 minute to
     * return. Note that any SIM card can usually only connect to specific
     * operators. All networks returned by this function might therefore
     * not be available for connection.
     *
     * @return {string[]} a list of string (cell operator names).
     */
    async get_availableOperators()
    {
        /** @type {string} **/
        let cops;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let slen;
        /** @type {string[]} **/
        let res = [];
        // may throw an exception
        cops = await this._AT('+COPS=?');
        slen = (cops).length;
        res.length = 0;
        idx = (cops).indexOf('(');
        while (idx >= 0) {
            slen = slen - (idx+1);
            cops = (cops).substr( idx+1, slen);
            idx = (cops).indexOf('"');
            if (idx > 0) {
                slen = slen - (idx+1);
                cops = (cops).substr( idx+1, slen);
                idx = (cops).indexOf('"');
                if (idx > 0) {
                    res.push((cops).substr( 0, idx));
                }
            }
            idx = (cops).indexOf('(');
        }
        return res;
    }

    /**
     * Returns a list of nearby cellular antennas, as required for quick
     * geolocation of the device. The first cell listed is the serving
     * cell, and the next ones are the neighboor cells reported by the
     * serving cell.
     *
     * @return {YCellRecord[]} a list of YCellRecords.
     */
    async quickCellSurvey()
    {
        /** @type {string} **/
        let moni;
        /** @type {string[]} **/
        let recs = [];
        /** @type {number} **/
        let llen;
        /** @type {string} **/
        let mccs;
        /** @type {number} **/
        let mcc;
        /** @type {string} **/
        let mncs;
        /** @type {number} **/
        let mnc;
        /** @type {number} **/
        let lac;
        /** @type {number} **/
        let cellId;
        /** @type {string} **/
        let dbms;
        /** @type {number} **/
        let dbm;
        /** @type {string} **/
        let tads;
        /** @type {number} **/
        let tad;
        /** @type {string} **/
        let oper;
        /** @type {YCellRecord[]} **/
        let res = [];
        // may throw an exception
        moni = await this._AT('+CCED=0;#MONI=7;#MONI');
        mccs = (moni).substr(7, 3);
        if ((mccs).substr(0, 1) == '0') {
            mccs = (mccs).substr(1, 2);
        }
        if ((mccs).substr(0, 1) == '0') {
            mccs = (mccs).substr(1, 1);
        }
        mcc = this._yapi.imm_atoi(mccs);
        mncs = (moni).substr(11, 3);
        if ((mncs).substr(2, 1) == ',') {
            mncs = (mncs).substr(0, 2);
        }
        if ((mncs).substr(0, 1) == '0') {
            mncs = (mncs).substr(1, (mncs).length-1);
        }
        mnc = this._yapi.imm_atoi(mncs);
        recs = (moni).split('#');
        // process each line in turn
        res.length = 0;
        for (let ii in recs) {
            llen = (recs[ii]).length - 2;
            if (llen >= 44) {
                if ((recs[ii]).substr(41, 3) == 'dbm') {
                    lac = parseInt((recs[ii]).substr(16, 4), 16);
                    cellId = parseInt((recs[ii]).substr(23, 4), 16);
                    dbms = (recs[ii]).substr(37, 4);
                    if ((dbms).substr(0, 1) == ' ') {
                        dbms = (dbms).substr(1, 3);
                    }
                    dbm = this._yapi.imm_atoi(dbms);
                    if (llen > 66) {
                        tads = (recs[ii]).substr(54, 2);
                        if ((tads).substr(0, 1) == ' ') {
                            tads = (tads).substr(1, 3);
                        }
                        tad = this._yapi.imm_atoi(tads);
                        oper = (recs[ii]).substr(66, llen-66);
                    } else {
                        tad = -1;
                        oper = '';
                    }
                    if (lac < 65535) {
                        res.push(new YCellRecord(mcc, mnc, lac, cellId, dbm, tad, oper));
                    }
                }
            }
            ;;
        }
        return res;
    }

    /**
     * Continues the enumeration of cellular interfaces started using yFirstCellular().
     *
     * @return {YCellular} a pointer to a YCellular object, corresponding to
     *         a cellular interface currently online, or a null pointer
     *         if there are no more cellular interfaces to enumerate.
     */
    /**/ nextCellular()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YCellular.FindCellular(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of cellular interfaces currently accessible.
     * Use the method YCellular.nextCellular() to iterate on
     * next cellular interfaces.
     *
     * @return {YCellular} a pointer to a YCellular object, corresponding to
     *         the first cellular interface currently online, or a null pointer
     *         if there are none.
     */
    static FirstCellular(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Cellular');
        if(next_hwid == null) return null;
        return YCellular.FindCellular(next_hwid, obj_yapi);
    }

    //--- (end of generated code: YCellular implementation)
}

//--- (generated code: Cellular functions)

/**
 * comment from .yc definition
 */
export function yFindCellular(func)
{
    return YCellular.FindCellular(func);
}

/**
 * comment from .yc definition
 */
export function yFirstCellular()
{
    return YCellular.FirstCellular();
}

//--- (end of generated code: Cellular functions)
