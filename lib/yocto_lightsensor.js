/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for LightSensor functions
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

//--- (YLightSensor return codes)
//--- (end of YLightSensor return codes)
//--- (YLightSensor definitions)
export const Y_MEASURETYPE_HUMAN_EYE         = 0;
export const Y_MEASURETYPE_WIDE_SPECTRUM     = 1;
export const Y_MEASURETYPE_INFRARED          = 2;
export const Y_MEASURETYPE_HIGH_RATE         = 3;
export const Y_MEASURETYPE_HIGH_ENERGY       = 4;
export const Y_MEASURETYPE_INVALID           = -1;
//--- (end of YLightSensor definitions)

//--- (YLightSensor class start)
/**
 * YLightSensor Class: LightSensor function interface
 *
 * The Yoctopuce class YLightSensor allows you to read and configure Yoctopuce light
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to easily perform a one-point linear calibration
 * to compensate the effect of a glass or filter placed in front of the sensor.
 * For some light sensors with several working modes, this class can select the
 * desired working mode.
 */
//--- (end of YLightSensor class start)

export class YLightSensor extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YLightSensor constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'LightSensor';
        /** @member {number} **/
        this._measureType                = Y_MEASURETYPE_INVALID;
        this.imm_setConst({
            MEASURETYPE_HUMAN_EYE        : 0,
            MEASURETYPE_WIDE_SPECTRUM    : 1,
            MEASURETYPE_INFRARED         : 2,
            MEASURETYPE_HIGH_RATE        : 3,
            MEASURETYPE_HIGH_ENERGY      : 4,
            MEASURETYPE_INVALID          : -1
        });
        //--- (end of YLightSensor constructor)
    }

    //--- (YLightSensor implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'measureType':
            this._measureType = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    async set_currentValue(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('currentValue',rest_val);
    }

    /**
     * Changes the sensor-specific calibration parameter so that the current value
     * matches a desired target (linear scaling).
     *
     * @param calibratedVal {number} : the desired target value.
     *
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async calibrate(calibratedVal)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(calibratedVal * 65536.0));
        return await this._setAttr('currentValue',rest_val);
    }

    /**
     * Returns the type of light measure.
     *
     * @return {number} a value among YLightSensor.MEASURETYPE_HUMAN_EYE,
     * YLightSensor.MEASURETYPE_WIDE_SPECTRUM, YLightSensor.MEASURETYPE_INFRARED,
     * YLightSensor.MEASURETYPE_HIGH_RATE and YLightSensor.MEASURETYPE_HIGH_ENERGY corresponding to the
     * type of light measure
     *
     * On failure, throws an exception or returns YLightSensor.MEASURETYPE_INVALID.
     */
    async get_measureType()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MEASURETYPE_INVALID;
            }
        }
        return this._measureType;
    }

    /**
     * Modify the light sensor type used in the device. The measure can either
     * approximate the response of the human eye, focus on a specific light
     * spectrum, depending on the capabilities of the light-sensitive cell.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval {number} : a value among YLightSensor.MEASURETYPE_HUMAN_EYE,
     * YLightSensor.MEASURETYPE_WIDE_SPECTRUM, YLightSensor.MEASURETYPE_INFRARED,
     * YLightSensor.MEASURETYPE_HIGH_RATE and YLightSensor.MEASURETYPE_HIGH_ENERGY
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_measureType(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('measureType',rest_val);
    }

    /**
     * Retrieves a light sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the light sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLightSensor.isOnline() to test if the light sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a light sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the light sensor
     *
     * @return {YLightSensor} a YLightSensor object allowing you to drive the light sensor.
     */
    static FindLightSensor(func)
    {
        /** @type {YLightSensor} **/
        let obj;
        obj = YFunction._FindFromCache('LightSensor', func);
        if (obj == null) {
            obj = new YLightSensor(YAPI, func);
            YFunction._AddToCache('LightSensor',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a light sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the light sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLightSensor.isOnline() to test if the light sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a light sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the light sensor
     *
     * @return {YLightSensor} a YLightSensor object allowing you to drive the light sensor.
     */
    static FindLightSensorInContext(yctx,func)
    {
        /** @type {YLightSensor} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'LightSensor', func);
        if (obj == null) {
            obj = new YLightSensor(yctx, func);
            YFunction._AddToCache('LightSensor',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of light sensors started using yFirstLightSensor().
     *
     * @return {YLightSensor} a pointer to a YLightSensor object, corresponding to
     *         a light sensor currently online, or a null pointer
     *         if there are no more light sensors to enumerate.
     */
    /* */ nextLightSensor()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YLightSensor.FindLightSensorInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of light sensors currently accessible.
     * Use the method YLightSensor.nextLightSensor() to iterate on
     * next light sensors.
     *
     * @return {YLightSensor} a pointer to a YLightSensor object, corresponding to
     *         the first light sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstLightSensor()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('LightSensor');
        if(next_hwid == null) return null;
        return YLightSensor.FindLightSensor(next_hwid);
    }

    /**
     * Starts the enumeration of light sensors currently accessible.
     * Use the method YLightSensor.nextLightSensor() to iterate on
     * next light sensors.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YLightSensor} a pointer to a YLightSensor object, corresponding to
     *         the first light sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstLightSensorInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('LightSensor');
        if(next_hwid == null) return null;
        return YLightSensor.FindLightSensorInContext(yctx, next_hwid);
    }

    //--- (end of YLightSensor implementation)
}

//--- (LightSensor functions)

/**
 * comment from .yc definition
 */
export function yFindLightSensor(func)
{
    return YLightSensor.FindLightSensor(func);
}

/**
 * comment from .yc definition
 */
export function yFirstLightSensor()
{
    return YLightSensor.FirstLightSensor();
}

//--- (end of LightSensor functions)
