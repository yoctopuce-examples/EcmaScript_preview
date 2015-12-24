/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for OsControl functions
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

//--- (YOsControl return codes)
//--- (end of YOsControl return codes)
//--- (YOsControl definitions)
export const Y_SHUTDOWNCOUNTDOWN_INVALID     = YAPI.INVALID_UINT;
//--- (end of YOsControl definitions)

//--- (YOsControl class start)
/**
 * YOsControl Class: OS control
 *
 * The OScontrol object allows some control over the operating system running a VirtualHub.
 * OsControl is available on the VirtualHub software only. This feature must be activated at the VirtualHub
 * start up with -o option.
 */
//--- (end of YOsControl class start)

export class YOsControl extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YOsControl constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'OsControl';
        /** @member {number} **/
        this._shutdownCountdown          = Y_SHUTDOWNCOUNTDOWN_INVALID;
        this.imm_setConst({
            SHUTDOWNCOUNTDOWN_INVALID    : YAPI.INVALID_UINT
        });
        //--- (end of YOsControl constructor)
    }

    //--- (YOsControl implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'shutdownCountdown':
            this._shutdownCountdown = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the remaining number of seconds before the OS shutdown, or zero when no
     * shutdown has been scheduled.
     *
     * @return {number} an integer corresponding to the remaining number of seconds before the OS
     * shutdown, or zero when no
     *         shutdown has been scheduled
     *
     * On failure, throws an exception or returns YOsControl.SHUTDOWNCOUNTDOWN_INVALID.
     */
    async get_shutdownCountdown()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SHUTDOWNCOUNTDOWN_INVALID;
            }
        }
        return this._shutdownCountdown;
    }

    async set_shutdownCountdown(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('shutdownCountdown',rest_val);
    }

    /**
     * Retrieves OS control for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the OS control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YOsControl.isOnline() to test if the OS control is
     * indeed online at a given time. In case of ambiguity when looking for
     * OS control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the OS control
     *
     * @return {YOsControl} a YOsControl object allowing you to drive the OS control.
     */
    static FindOsControl(func, obj_yapi = YAPI)
    {
        /** @type {YOsControl} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'OsControl', func);
        if (obj == null) {
            obj = new YOsControl(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'OsControl',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves OS control for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the OS control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YOsControl.isOnline() to test if the OS control is
     * indeed online at a given time. In case of ambiguity when looking for
     * OS control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the OS control
     *
     * @return {YOsControl} a YOsControl object allowing you to drive the OS control.
     */
    static FindOsControlInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YOsControl} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'OsControl', func);
        if (obj == null) {
            obj = new YOsControl(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'OsControl',  func, obj);
        }
        return obj;
    }

    /**
     * Schedules an OS shutdown after a given number of seconds.
     *
     * @param secBeforeShutDown {number} : number of seconds before shutdown
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async shutdown(secBeforeShutDown)
    {
        return await this.set_shutdownCountdown(secBeforeShutDown);
    }

    /**
     * Continues the enumeration of OS control started using yFirstOsControl().
     *
     * @return {YOsControl} a pointer to a YOsControl object, corresponding to
     *         OS control currently online, or a null pointer
     *         if there are no more OS control to enumerate.
     */
    /**/ nextOsControl()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YOsControl.FindOsControl(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of OS control currently accessible.
     * Use the method YOsControl.nextOsControl() to iterate on
     * next OS control.
     *
     * @return {YOsControl} a pointer to a YOsControl object, corresponding to
     *         the first OS control currently online, or a null pointer
     *         if there are none.
     */
    static FirstOsControl(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('OsControl');
        if(next_hwid == null) return null;
        return YOsControl.FindOsControl(next_hwid, obj_yapi);
    }

    //--- (end of YOsControl implementation)
}

//--- (OsControl functions)

/**
 * comment from .yc definition
 */
export function yFindOsControl(func)
{
    return YOsControl.FindOsControl(func);
}

/**
 * comment from .yc definition
 */
export function yFirstOsControl()
{
    return YOsControl.FirstOsControl();
}

//--- (end of OsControl functions)
