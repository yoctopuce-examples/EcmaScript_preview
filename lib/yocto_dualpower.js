/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for DualPower functions
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

//--- (YDualPower return codes)
//--- (end of YDualPower return codes)
//--- (YDualPower definitions)
export const Y_POWERSTATE_OFF                = 0;
export const Y_POWERSTATE_FROM_USB           = 1;
export const Y_POWERSTATE_FROM_EXT           = 2;
export const Y_POWERSTATE_INVALID            = -1;
export const Y_POWERCONTROL_AUTO             = 0;
export const Y_POWERCONTROL_FROM_USB         = 1;
export const Y_POWERCONTROL_FROM_EXT         = 2;
export const Y_POWERCONTROL_OFF              = 3;
export const Y_POWERCONTROL_INVALID          = -1;
export const Y_EXTVOLTAGE_INVALID            = YAPI.INVALID_UINT;
//--- (end of YDualPower definitions)

//--- (YDualPower class start)
/**
 * YDualPower Class: External power supply control interface
 *
 * Yoctopuce application programming interface allows you to control
 * the power source to use for module functions that require high current.
 * The module can also automatically disconnect the external power
 * when a voltage drop is observed on the external power source
 * (external battery running out of power).
 */
//--- (end of YDualPower class start)

export class YDualPower extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YDualPower constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'DualPower';
        /** @member {number} **/
        this._powerState                 = Y_POWERSTATE_INVALID;
        /** @member {number} **/
        this._powerControl               = Y_POWERCONTROL_INVALID;
        /** @member {number} **/
        this._extVoltage                 = Y_EXTVOLTAGE_INVALID;
        this.imm_setConst({
            POWERSTATE_OFF               : 0,
            POWERSTATE_FROM_USB          : 1,
            POWERSTATE_FROM_EXT          : 2,
            POWERSTATE_INVALID           : -1,
            POWERCONTROL_AUTO            : 0,
            POWERCONTROL_FROM_USB        : 1,
            POWERCONTROL_FROM_EXT        : 2,
            POWERCONTROL_OFF             : 3,
            POWERCONTROL_INVALID         : -1,
            EXTVOLTAGE_INVALID           : YAPI.INVALID_UINT
        });
        //--- (end of YDualPower constructor)
    }

    //--- (YDualPower implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'powerState':
            this._powerState = parseInt(val);
            return 1;
        case 'powerControl':
            this._powerControl = parseInt(val);
            return 1;
        case 'extVoltage':
            this._extVoltage = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the current power source for module functions that require lots of current.
     *
     * @return {number} a value among YDualPower.POWERSTATE_OFF, YDualPower.POWERSTATE_FROM_USB and
     * YDualPower.POWERSTATE_FROM_EXT corresponding to the current power source for module functions that
     * require lots of current
     *
     * On failure, throws an exception or returns YDualPower.POWERSTATE_INVALID.
     */
    async get_powerState()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_POWERSTATE_INVALID;
            }
        }
        return this._powerState;
    }

    /**
     * Returns the selected power source for module functions that require lots of current.
     *
     * @return {number} a value among YDualPower.POWERCONTROL_AUTO, YDualPower.POWERCONTROL_FROM_USB,
     * YDualPower.POWERCONTROL_FROM_EXT and YDualPower.POWERCONTROL_OFF corresponding to the selected
     * power source for module functions that require lots of current
     *
     * On failure, throws an exception or returns YDualPower.POWERCONTROL_INVALID.
     */
    async get_powerControl()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_POWERCONTROL_INVALID;
            }
        }
        return this._powerControl;
    }

    /**
     * Changes the selected power source for module functions that require lots of current.
     *
     * @param newval {number} : a value among YDualPower.POWERCONTROL_AUTO,
     * YDualPower.POWERCONTROL_FROM_USB, YDualPower.POWERCONTROL_FROM_EXT and YDualPower.POWERCONTROL_OFF
     * corresponding to the selected power source for module functions that require lots of current
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_powerControl(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('powerControl',rest_val);
    }

    /**
     * Returns the measured voltage on the external power source, in millivolts.
     *
     * @return {number} an integer corresponding to the measured voltage on the external power source, in millivolts
     *
     * On failure, throws an exception or returns YDualPower.EXTVOLTAGE_INVALID.
     */
    async get_extVoltage()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_EXTVOLTAGE_INVALID;
            }
        }
        return this._extVoltage;
    }

    /**
     * Retrieves a dual power control for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the power control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDualPower.isOnline() to test if the power control is
     * indeed online at a given time. In case of ambiguity when looking for
     * a dual power control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the power control
     *
     * @return {YDualPower} a YDualPower object allowing you to drive the power control.
     */
    static FindDualPower(func, obj_yapi = YAPI)
    {
        /** @type {YDualPower} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'DualPower', func);
        if (obj == null) {
            obj = new YDualPower(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'DualPower',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a dual power control for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the power control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDualPower.isOnline() to test if the power control is
     * indeed online at a given time. In case of ambiguity when looking for
     * a dual power control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the power control
     *
     * @return {YDualPower} a YDualPower object allowing you to drive the power control.
     */
    static FindDualPowerInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YDualPower} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'DualPower', func);
        if (obj == null) {
            obj = new YDualPower(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'DualPower',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of dual power controls started using yFirstDualPower().
     *
     * @return {YDualPower} a pointer to a YDualPower object, corresponding to
     *         a dual power control currently online, or a null pointer
     *         if there are no more dual power controls to enumerate.
     */
    /**/ nextDualPower()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YDualPower.FindDualPower(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of dual power controls currently accessible.
     * Use the method YDualPower.nextDualPower() to iterate on
     * next dual power controls.
     *
     * @return {YDualPower} a pointer to a YDualPower object, corresponding to
     *         the first dual power control currently online, or a null pointer
     *         if there are none.
     */
    static FirstDualPower(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('DualPower');
        if(next_hwid == null) return null;
        return YDualPower.FindDualPower(next_hwid, obj_yapi);
    }

    //--- (end of YDualPower implementation)
}

//--- (DualPower functions)

/**
 * comment from .yc definition
 */
export function yFindDualPower(func)
{
    return YDualPower.FindDualPower(func);
}

/**
 * comment from .yc definition
 */
export function yFirstDualPower()
{
    return YDualPower.FirstDualPower();
}

//--- (end of DualPower functions)
