/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for HubPort functions
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

'use strict';
import { YAPI, YAPI_SUCCESS, YFunction, YModule, YSensor } from 'lib/yocto_api'

//--- (YHubPort return codes)
//--- (end of YHubPort return codes)
//--- (YHubPort definitions)
export const Y_ENABLED_FALSE                 = 0;
export const Y_ENABLED_TRUE                  = 1;
export const Y_ENABLED_INVALID               = -1;
export const Y_PORTSTATE_OFF                 = 0;
export const Y_PORTSTATE_OVRLD               = 1;
export const Y_PORTSTATE_ON                  = 2;
export const Y_PORTSTATE_RUN                 = 3;
export const Y_PORTSTATE_PROG                = 4;
export const Y_PORTSTATE_INVALID             = -1;
export const Y_BAUDRATE_INVALID              = YAPI.INVALID_UINT;
//--- (end of YHubPort definitions)

//--- (YHubPort class start)
/**
 * YHubPort Class: Yocto-hub port interface
 *
 * YHubPort objects provide control over the power supply for every
 * YoctoHub port and provide information about the device connected to it.
 * The logical name of a YHubPort is always automatically set to the
 * unique serial number of the Yoctopuce device connected to it.
 */
//--- (end of YHubPort class start)

export class YHubPort extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YHubPort constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'HubPort';
        /** @member {number} **/
        this._enabled                    = Y_ENABLED_INVALID;
        /** @member {number} **/
        this._portState                  = Y_PORTSTATE_INVALID;
        /** @member {number} **/
        this._baudRate                   = Y_BAUDRATE_INVALID;
        this.imm_setConst({
            ENABLED_FALSE                : 0,
            ENABLED_TRUE                 : 1,
            ENABLED_INVALID              : -1,
            PORTSTATE_OFF                : 0,
            PORTSTATE_OVRLD              : 1,
            PORTSTATE_ON                 : 2,
            PORTSTATE_RUN                : 3,
            PORTSTATE_PROG               : 4,
            PORTSTATE_INVALID            : -1,
            BAUDRATE_INVALID             : YAPI.INVALID_UINT
        });
        //--- (end of YHubPort constructor)
    }

    //--- (YHubPort implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'enabled':
            this._enabled = parseInt(val);
            return 1;
        case 'portState':
            this._portState = parseInt(val);
            return 1;
        case 'baudRate':
            this._baudRate = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns true if the Yocto-hub port is powered, false otherwise.
     *
     * @return {number} either YHubPort.ENABLED_FALSE or YHubPort.ENABLED_TRUE, according to true if the
     * Yocto-hub port is powered, false otherwise
     *
     * On failure, throws an exception or returns YHubPort.ENABLED_INVALID.
     */
    async get_enabled()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ENABLED_INVALID;
            }
        }
        return this._enabled;
    }

    /**
     * Changes the activation of the Yocto-hub port. If the port is enabled, the
     * connected module is powered. Otherwise, port power is shut down.
     *
     * @param newval {number} : either YHubPort.ENABLED_FALSE or YHubPort.ENABLED_TRUE, according to the
     * activation of the Yocto-hub port
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_enabled(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('enabled',rest_val);
    }

    /**
     * Returns the current state of the Yocto-hub port.
     *
     * @return {number} a value among YHubPort.PORTSTATE_OFF, YHubPort.PORTSTATE_OVRLD,
     * YHubPort.PORTSTATE_ON, YHubPort.PORTSTATE_RUN and YHubPort.PORTSTATE_PROG corresponding to the
     * current state of the Yocto-hub port
     *
     * On failure, throws an exception or returns YHubPort.PORTSTATE_INVALID.
     */
    async get_portState()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTSTATE_INVALID;
            }
        }
        return this._portState;
    }

    /**
     * Returns the current baud rate used by this Yocto-hub port, in kbps.
     * The default value is 1000 kbps, but a slower rate may be used if communication
     * problems are encountered.
     *
     * @return {number} an integer corresponding to the current baud rate used by this Yocto-hub port, in kbps
     *
     * On failure, throws an exception or returns YHubPort.BAUDRATE_INVALID.
     */
    async get_baudRate()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BAUDRATE_INVALID;
            }
        }
        return this._baudRate;
    }

    /**
     * Retrieves a Yocto-hub port for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the Yocto-hub port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YHubPort.isOnline() to test if the Yocto-hub port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a Yocto-hub port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the Yocto-hub port
     *
     * @return {YHubPort} a YHubPort object allowing you to drive the Yocto-hub port.
     */
    static FindHubPort(func, obj_yapi = YAPI)
    {
        /** @type {YHubPort} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'HubPort', func);
        if (obj == null) {
            obj = new YHubPort(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'HubPort',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a Yocto-hub port for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the Yocto-hub port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YHubPort.isOnline() to test if the Yocto-hub port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a Yocto-hub port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the Yocto-hub port
     *
     * @return {YHubPort} a YHubPort object allowing you to drive the Yocto-hub port.
     */
    static FindHubPortInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YHubPort} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'HubPort', func);
        if (obj == null) {
            obj = new YHubPort(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'HubPort',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of Yocto-hub ports started using yFirstHubPort().
     *
     * @return {YHubPort} a pointer to a YHubPort object, corresponding to
     *         a Yocto-hub port currently online, or a null pointer
     *         if there are no more Yocto-hub ports to enumerate.
     */
    /**/ nextHubPort()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YHubPort.FindHubPort(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of Yocto-hub ports currently accessible.
     * Use the method YHubPort.nextHubPort() to iterate on
     * next Yocto-hub ports.
     *
     * @return {YHubPort} a pointer to a YHubPort object, corresponding to
     *         the first Yocto-hub port currently online, or a null pointer
     *         if there are none.
     */
    static FirstHubPort(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('HubPort');
        if(next_hwid == null) return null;
        return YHubPort.FindHubPort(next_hwid, obj_yapi);
    }

    //--- (end of YHubPort implementation)
}

//--- (HubPort functions)

/**
 * comment from .yc definition
 */
export function yFindHubPort(func)
{
    return YHubPort.FindHubPort(func);
}

/**
 * comment from .yc definition
 */
export function yFirstHubPort()
{
    return YHubPort.FirstHubPort();
}

//--- (end of HubPort functions)
