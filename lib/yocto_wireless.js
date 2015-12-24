/*********************************************************************
 *
 * $Id: yocto_wireless.js 21680 2015-10-02 13:42:44Z seb $
 *
 * Implements yFindWireless(), the high-level API for Wireless functions
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
 *  THE SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" WITHOUT
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

//--- (generated code: YWireless definitions)
export const Y_SECURITY_UNKNOWN              = 0;
export const Y_SECURITY_OPEN                 = 1;
export const Y_SECURITY_WEP                  = 2;
export const Y_SECURITY_WPA                  = 3;
export const Y_SECURITY_WPA2                 = 4;
export const Y_SECURITY_INVALID              = -1;
export const Y_LINKQUALITY_INVALID           = YAPI.INVALID_UINT;
export const Y_SSID_INVALID                  = YAPI.INVALID_STRING;
export const Y_CHANNEL_INVALID               = YAPI.INVALID_UINT;
export const Y_MESSAGE_INVALID               = YAPI.INVALID_STRING;
export const Y_WLANCONFIG_INVALID            = YAPI.INVALID_STRING;
//--- (end of generated code: YWireless definitions)

//--- (generated code: YWlanRecord definitions)
//--- (end of generated code: YWlanRecord definitions)

//--- (generated code: YWlanRecord class start)
/**
 * YWlanRecord Class: Description of a wireless network
 *
 *
 */
//--- (end of generated code: YWlanRecord class start)
class YWlanRecord
{
    constructor(str_json)
    {       
        //--- (generated code: YWlanRecord constructor)
        /** @member {string} **/
        this._ssid                       = '';
        /** @member {number} **/
        this._channel                    = 0;
        /** @member {string} **/
        this._sec                        = '';
        /** @member {number} **/
        this._rssi                       = 0;
        //--- (end of generated code: YWlanRecord constructor)
        
        var loadval = JSON.parse(str_json);
        this._ssid    = loadval.ssid;
        this._channel = loadval.channel;
        this._sec     = loadval.sec;
        this._rssi    = loadval.rssi;
    }

    //--- (generated code: YWlanRecord implementation)

    /* */ get_ssid()
    {
        return this._ssid;
    }

    /* */ get_channel()
    {
        return this._channel;
    }

    /* */ get_security()
    {
        return this._sec;
    }

    /* */ get_linkQuality()
    {
        return this._rssi;
    }

    //--- (end of generated code: YWlanRecord implementation)
}


//--- (generated code: YWireless class start)
/**
 * YWireless Class: Wireless function interface
 *
 * YWireless functions provides control over wireless network parameters
 * and status for devices that are wireless-enabled.
 */
//--- (end of generated code: YWireless class start)
export class YWireless extends YFunction
{
    constructor(str_func)
    {
        //--- (generated code: YWireless constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Wireless';
        /** @member {number} **/
        this._linkQuality                = Y_LINKQUALITY_INVALID;
        /** @member {string} **/
        this._ssid                       = Y_SSID_INVALID;
        /** @member {number} **/
        this._channel                    = Y_CHANNEL_INVALID;
        /** @member {number} **/
        this._security                   = Y_SECURITY_INVALID;
        /** @member {string} **/
        this._message                    = Y_MESSAGE_INVALID;
        /** @member {string} **/
        this._wlanConfig                 = Y_WLANCONFIG_INVALID;
        this.imm_setConst({
            LINKQUALITY_INVALID          : YAPI.INVALID_UINT,
            SSID_INVALID                 : YAPI.INVALID_STRING,
            CHANNEL_INVALID              : YAPI.INVALID_UINT,
            SECURITY_UNKNOWN             : 0,
            SECURITY_OPEN                : 1,
            SECURITY_WEP                 : 2,
            SECURITY_WPA                 : 3,
            SECURITY_WPA2                : 4,
            SECURITY_INVALID             : -1,
            MESSAGE_INVALID              : YAPI.INVALID_STRING,
            WLANCONFIG_INVALID           : YAPI.INVALID_STRING
        });
        //--- (end of generated code: YWireless constructor)
    }

    //--- (generated code: YWireless implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'linkQuality':
            this._linkQuality = parseInt(val);
            return 1;
        case 'ssid':
            this._ssid = val;
            return 1;
        case 'channel':
            this._channel = parseInt(val);
            return 1;
        case 'security':
            this._security = parseInt(val);
            return 1;
        case 'message':
            this._message = val;
            return 1;
        case 'wlanConfig':
            this._wlanConfig = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the link quality, expressed in percent.
     *
     * @return {number} an integer corresponding to the link quality, expressed in percent
     *
     * On failure, throws an exception or returns YWireless.LINKQUALITY_INVALID.
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
     * Returns the wireless network name (SSID).
     *
     * @return {string} a string corresponding to the wireless network name (SSID)
     *
     * On failure, throws an exception or returns YWireless.SSID_INVALID.
     */
    async get_ssid()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SSID_INVALID;
            }
        }
        return this._ssid;
    }

    /**
     * Returns the 802.11 channel currently used, or 0 when the selected network has not been found.
     *
     * @return {number} an integer corresponding to the 802.11 channel currently used, or 0 when the
     * selected network has not been found
     *
     * On failure, throws an exception or returns YWireless.CHANNEL_INVALID.
     */
    async get_channel()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CHANNEL_INVALID;
            }
        }
        return this._channel;
    }

    /**
     * Returns the security algorithm used by the selected wireless network.
     *
     * @return {number} a value among YWireless.SECURITY_UNKNOWN, YWireless.SECURITY_OPEN,
     * YWireless.SECURITY_WEP, YWireless.SECURITY_WPA and YWireless.SECURITY_WPA2 corresponding to the
     * security algorithm used by the selected wireless network
     *
     * On failure, throws an exception or returns YWireless.SECURITY_INVALID.
     */
    async get_security()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SECURITY_INVALID;
            }
        }
        return this._security;
    }

    /**
     * Returns the latest status message from the wireless interface.
     *
     * @return {string} a string corresponding to the latest status message from the wireless interface
     *
     * On failure, throws an exception or returns YWireless.MESSAGE_INVALID.
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

    async get_wlanConfig()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_WLANCONFIG_INVALID;
            }
        }
        return this._wlanConfig;
    }

    async set_wlanConfig(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('wlanConfig',rest_val);
    }

    /**
     * Retrieves a wireless lan interface for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the wireless lan interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWireless.isOnline() to test if the wireless lan interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a wireless lan interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the wireless lan interface
     *
     * @return {YWireless} a YWireless object allowing you to drive the wireless lan interface.
     */
    static FindWireless(func)
    {
        /** @type {YWireless} **/
        let obj;
        obj = YFunction._FindFromCache('Wireless', func);
        if (obj == null) {
            obj = new YWireless(YAPI, func);
            YFunction._AddToCache('Wireless',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a wireless lan interface for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the wireless lan interface is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWireless.isOnline() to test if the wireless lan interface is
     * indeed online at a given time. In case of ambiguity when looking for
     * a wireless lan interface by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the wireless lan interface
     *
     * @return {YWireless} a YWireless object allowing you to drive the wireless lan interface.
     */
    static FindWirelessInContext(yctx,func)
    {
        /** @type {YWireless} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Wireless', func);
        if (obj == null) {
            obj = new YWireless(yctx, func);
            YFunction._AddToCache('Wireless',  func, obj);
        }
        return obj;
    }

    /**
     * Changes the configuration of the wireless lan interface to connect to an existing
     * access point (infrastructure mode).
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param ssid {string} : the name of the network to connect to
     * @param securityKey {string} : the network key, as a character string
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async joinNetwork(ssid,securityKey)
    {
        return await this.set_wlanConfig('INFRA:'+ssid+'\\'+securityKey);
    }

    /**
     * Changes the configuration of the wireless lan interface to create an ad-hoc
     * wireless network, without using an access point. On the YoctoHub-Wireless-g,
     * it is best to use softAPNetworkInstead(), which emulates an access point
     * (Soft AP) which is more efficient and more widely supported than ad-hoc networks.
     *
     * When a security key is specified for an ad-hoc network, the network is protected
     * by a WEP40 key (5 characters or 10 hexadecimal digits) or WEP128 key (13 characters
     * or 26 hexadecimal digits). It is recommended to use a well-randomized WEP128 key
     * using 26 hexadecimal digits to maximize security.
     * Remember to call the saveToFlash() method and then to reboot the module
     * to apply this setting.
     *
     * @param ssid {string} : the name of the network to connect to
     * @param securityKey {string} : the network key, as a character string
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async adhocNetwork(ssid,securityKey)
    {
        return await this.set_wlanConfig('ADHOC:'+ssid+'\\'+securityKey);
    }

    /**
     * Changes the configuration of the wireless lan interface to create a new wireless
     * network by emulating a WiFi access point (Soft AP). This function can only be
     * used with the YoctoHub-Wireless-g.
     *
     * When a security key is specified for a SoftAP network, the network is protected
     * by a WEP40 key (5 characters or 10 hexadecimal digits) or WEP128 key (13 characters
     * or 26 hexadecimal digits). It is recommended to use a well-randomized WEP128 key
     * using 26 hexadecimal digits to maximize security.
     * Remember to call the saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param ssid {string} : the name of the network to connect to
     * @param securityKey {string} : the network key, as a character string
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async softAPNetwork(ssid,securityKey)
    {
        return await this.set_wlanConfig('SOFTAP:'+ssid+'\\'+securityKey);
    }

    /**
     * Returns a list of YWlanRecord objects that describe detected Wireless networks.
     * This list is not updated when the module is already connected to an acces point (infrastructure mode).
     * To force an update of this list, adhocNetwork() must be called to disconnect
     * the module from the current network. The returned list must be unallocated by the caller.
     *
     * @return {YWlanRecord[]} a list of YWlanRecord objects, containing the SSID, channel,
     *         link quality and the type of security of the wireless network.
     *
     * On failure, throws an exception or returns an empty list.
     */
    async get_detectedWlans()
    {
        /** @type {Uint8Array} **/
        let json;
        /** @type {string[]} **/
        let wlanlist = [];
        /** @type {YWlanRecord[]} **/
        let res = [];
        // may throw an exception
        json = await this._download('wlan.json?by=name');
        wlanlist = this.imm_json_get_array(json);
        res.length = 0;
        for (let ii in wlanlist) {
            res.push(new YWlanRecord(wlanlist[ii]));
        }
        return res;
    }

    /**
     * Continues the enumeration of wireless lan interfaces started using yFirstWireless().
     *
     * @return {YWireless} a pointer to a YWireless object, corresponding to
     *         a wireless lan interface currently online, or a null pointer
     *         if there are no more wireless lan interfaces to enumerate.
     */
    /* */ nextWireless()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YWireless.FindWirelessInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of wireless lan interfaces currently accessible.
     * Use the method YWireless.nextWireless() to iterate on
     * next wireless lan interfaces.
     *
     * @return {YWireless} a pointer to a YWireless object, corresponding to
     *         the first wireless lan interface currently online, or a null pointer
     *         if there are none.
     */
    static FirstWireless()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Wireless');
        if(next_hwid == null) return null;
        return YWireless.FindWireless(next_hwid);
    }

    /**
     * Starts the enumeration of wireless lan interfaces currently accessible.
     * Use the method YWireless.nextWireless() to iterate on
     * next wireless lan interfaces.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YWireless} a pointer to a YWireless object, corresponding to
     *         the first wireless lan interface currently online, or a null pointer
     *         if there are none.
     */
    static FirstWirelessInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Wireless');
        if(next_hwid == null) return null;
        return YWireless.FindWirelessInContext(yctx, next_hwid);
    }

    //--- (end of generated code: YWireless implementation)
}

//--- (generated code: Wireless functions)

/**
 * comment from .yc definition
 */
export function yFindWireless(func)
{
    return YWireless.FindWireless(func);
}

/**
 * comment from .yc definition
 */
export function yFirstWireless()
{
    return YWireless.FirstWireless();
}

//--- (end of generated code: Wireless functions)
