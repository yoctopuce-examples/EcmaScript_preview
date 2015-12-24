/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for PwmPowerSource functions
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

//--- (YPwmPowerSource return codes)
//--- (end of YPwmPowerSource return codes)
//--- (YPwmPowerSource definitions)
export const Y_POWERMODE_USB_5V              = 0;
export const Y_POWERMODE_USB_3V              = 1;
export const Y_POWERMODE_EXT_V               = 2;
export const Y_POWERMODE_OPNDRN              = 3;
export const Y_POWERMODE_INVALID             = -1;
//--- (end of YPwmPowerSource definitions)

//--- (YPwmPowerSource class start)
/**
 * YPwmPowerSource Class: PwmPowerSource function interface
 *
 * The Yoctopuce application programming interface allows you to configure
 * the voltage source used by all PWM on the same device.
 */
//--- (end of YPwmPowerSource class start)

export class YPwmPowerSource extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YPwmPowerSource constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'PwmPowerSource';
        /** @member {number} **/
        this._powerMode                  = Y_POWERMODE_INVALID;
        this.imm_setConst({
            POWERMODE_USB_5V             : 0,
            POWERMODE_USB_3V             : 1,
            POWERMODE_EXT_V              : 2,
            POWERMODE_OPNDRN             : 3,
            POWERMODE_INVALID            : -1
        });
        //--- (end of YPwmPowerSource constructor)
    }

    //--- (YPwmPowerSource implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'powerMode':
            this._powerMode = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the selected power source for the PWM on the same device
     *
     * @return {number} a value among YPwmPowerSource.POWERMODE_USB_5V, YPwmPowerSource.POWERMODE_USB_3V,
     * YPwmPowerSource.POWERMODE_EXT_V and YPwmPowerSource.POWERMODE_OPNDRN corresponding to the selected
     * power source for the PWM on the same device
     *
     * On failure, throws an exception or returns YPwmPowerSource.POWERMODE_INVALID.
     */
    async get_powerMode()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_POWERMODE_INVALID;
            }
        }
        return this._powerMode;
    }

    /**
     * Changes  the PWM power source. PWM can use isolated 5V from USB, isolated 3V from USB or
     * voltage from an external power source. The PWM can also work in open drain  mode. In that
     * mode, the PWM actively pulls the line down.
     * Warning: this setting is common to all PWM on the same device. If you change that parameter,
     * all PWM located on the same device are  affected.
     * If you want the change to be kept after a device reboot, make sure  to call the matching
     * module saveToFlash().
     *
     * @param newval {number} : a value among YPwmPowerSource.POWERMODE_USB_5V,
     * YPwmPowerSource.POWERMODE_USB_3V, YPwmPowerSource.POWERMODE_EXT_V and
     * YPwmPowerSource.POWERMODE_OPNDRN corresponding to  the PWM power source
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_powerMode(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('powerMode',rest_val);
    }

    /**
     * Retrieves a voltage source for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the voltage source is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmPowerSource.isOnline() to test if the voltage source is
     * indeed online at a given time. In case of ambiguity when looking for
     * a voltage source by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the voltage source
     *
     * @return {YPwmPowerSource} a YPwmPowerSource object allowing you to drive the voltage source.
     */
    static FindPwmPowerSource(func, obj_yapi = YAPI)
    {
        /** @type {YPwmPowerSource} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'PwmPowerSource', func);
        if (obj == null) {
            obj = new YPwmPowerSource(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'PwmPowerSource',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a voltage source for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the voltage source is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmPowerSource.isOnline() to test if the voltage source is
     * indeed online at a given time. In case of ambiguity when looking for
     * a voltage source by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the voltage source
     *
     * @return {YPwmPowerSource} a YPwmPowerSource object allowing you to drive the voltage source.
     */
    static FindPwmPowerSourceInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YPwmPowerSource} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'PwmPowerSource', func);
        if (obj == null) {
            obj = new YPwmPowerSource(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'PwmPowerSource',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of Voltage sources started using yFirstPwmPowerSource().
     *
     * @return {YPwmPowerSource} a pointer to a YPwmPowerSource object, corresponding to
     *         a voltage source currently online, or a null pointer
     *         if there are no more Voltage sources to enumerate.
     */
    /**/ nextPwmPowerSource()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YPwmPowerSource.FindPwmPowerSource(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of Voltage sources currently accessible.
     * Use the method YPwmPowerSource.nextPwmPowerSource() to iterate on
     * next Voltage sources.
     *
     * @return {YPwmPowerSource} a pointer to a YPwmPowerSource object, corresponding to
     *         the first source currently online, or a null pointer
     *         if there are none.
     */
    static FirstPwmPowerSource(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('PwmPowerSource');
        if(next_hwid == null) return null;
        return YPwmPowerSource.FindPwmPowerSource(next_hwid, obj_yapi);
    }

    //--- (end of YPwmPowerSource implementation)
}

//--- (PwmPowerSource functions)

/**
 * comment from .yc definition
 */
export function yFindPwmPowerSource(func)
{
    return YPwmPowerSource.FindPwmPowerSource(func);
}

/**
 * comment from .yc definition
 */
export function yFirstPwmPowerSource()
{
    return YPwmPowerSource.FirstPwmPowerSource();
}

//--- (end of PwmPowerSource functions)
