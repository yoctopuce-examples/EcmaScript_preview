/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for PowerOutput functions
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

//--- (YPowerOutput return codes)
//--- (end of YPowerOutput return codes)
//--- (YPowerOutput definitions)
export const Y_VOLTAGE_OFF                   = 0;
export const Y_VOLTAGE_OUT3V3                = 1;
export const Y_VOLTAGE_OUT5V                 = 2;
export const Y_VOLTAGE_INVALID               = -1;
//--- (end of YPowerOutput definitions)

//--- (YPowerOutput class start)
/**
 * YPowerOutput Class: External power supply control interface
 *
 * Yoctopuce application programming interface allows you to control
 * the power ouput featured on some devices such as the Yocto-Serial.
 */
//--- (end of YPowerOutput class start)

export class YPowerOutput extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YPowerOutput constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'PowerOutput';
        /** @member {number} **/
        this._voltage                    = Y_VOLTAGE_INVALID;
        this.imm_setConst({
            VOLTAGE_OFF                  : 0,
            VOLTAGE_OUT3V3               : 1,
            VOLTAGE_OUT5V                : 2,
            VOLTAGE_INVALID              : -1
        });
        //--- (end of YPowerOutput constructor)
    }

    //--- (YPowerOutput implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'voltage':
            this._voltage = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the voltage on the power ouput featured by
     * the module.
     *
     * @return {number} a value among YPowerOutput.VOLTAGE_OFF, YPowerOutput.VOLTAGE_OUT3V3 and
     * YPowerOutput.VOLTAGE_OUT5V corresponding to the voltage on the power ouput featured by
     *         the module
     *
     * On failure, throws an exception or returns YPowerOutput.VOLTAGE_INVALID.
     */
    async get_voltage()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_VOLTAGE_INVALID;
            }
        }
        return this._voltage;
    }

    /**
     * Changes the voltage on the power output provided by the
     * module. Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval {number} : a value among YPowerOutput.VOLTAGE_OFF, YPowerOutput.VOLTAGE_OUT3V3 and
     * YPowerOutput.VOLTAGE_OUT5V corresponding to the voltage on the power output provided by the
     *         module
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_voltage(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('voltage',rest_val);
    }

    /**
     * Retrieves a dual power  ouput control for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the power ouput control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPowerOutput.isOnline() to test if the power ouput control is
     * indeed online at a given time. In case of ambiguity when looking for
     * a dual power  ouput control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the power ouput control
     *
     * @return {YPowerOutput} a YPowerOutput object allowing you to drive the power ouput control.
     */
    static FindPowerOutput(func, obj_yapi = YAPI)
    {
        /** @type {YPowerOutput} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'PowerOutput', func);
        if (obj == null) {
            obj = new YPowerOutput(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'PowerOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a dual power  ouput control for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the power ouput control is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPowerOutput.isOnline() to test if the power ouput control is
     * indeed online at a given time. In case of ambiguity when looking for
     * a dual power  ouput control by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the power ouput control
     *
     * @return {YPowerOutput} a YPowerOutput object allowing you to drive the power ouput control.
     */
    static FindPowerOutputInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YPowerOutput} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'PowerOutput', func);
        if (obj == null) {
            obj = new YPowerOutput(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'PowerOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of dual power ouput controls started using yFirstPowerOutput().
     *
     * @return {YPowerOutput} a pointer to a YPowerOutput object, corresponding to
     *         a dual power  ouput control currently online, or a null pointer
     *         if there are no more dual power ouput controls to enumerate.
     */
    /**/ nextPowerOutput()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YPowerOutput.FindPowerOutput(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of dual power ouput controls currently accessible.
     * Use the method YPowerOutput.nextPowerOutput() to iterate on
     * next dual power ouput controls.
     *
     * @return {YPowerOutput} a pointer to a YPowerOutput object, corresponding to
     *         the first dual power ouput control currently online, or a null pointer
     *         if there are none.
     */
    static FirstPowerOutput(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('PowerOutput');
        if(next_hwid == null) return null;
        return YPowerOutput.FindPowerOutput(next_hwid, obj_yapi);
    }

    //--- (end of YPowerOutput implementation)
}

//--- (PowerOutput functions)

/**
 * comment from .yc definition
 */
export function yFindPowerOutput(func)
{
    return YPowerOutput.FindPowerOutput(func);
}

/**
 * comment from .yc definition
 */
export function yFirstPowerOutput()
{
    return YPowerOutput.FirstPowerOutput();
}

//--- (end of PowerOutput functions)
