/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Accelerometer functions
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

//--- (YAccelerometer return codes)
//--- (end of YAccelerometer return codes)
//--- (YAccelerometer definitions)
export const Y_GRAVITYCANCELLATION_OFF       = 0;
export const Y_GRAVITYCANCELLATION_ON        = 1;
export const Y_GRAVITYCANCELLATION_INVALID   = -1;
export const Y_XVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_YVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_ZVALUE_INVALID                = YAPI.INVALID_DOUBLE;
//--- (end of YAccelerometer definitions)

//--- (YAccelerometer class start)
/**
 * YAccelerometer Class: Accelerometer function interface
 *
 * The YSensor class is the parent class for all Yoctopuce sensors. It can be
 * used to read the current value and unit of any sensor, read the min/max
 * value, configure autonomous recording frequency and access recorded data.
 * It also provide a function to register a callback invoked each time the
 * observed value changes, or at a predefined interval. Using this class rather
 * than a specific subclass makes it possible to create generic applications
 * that work with any Yoctopuce sensor, even those that do not yet exist.
 * Note: The YAnButton class is the only analog input which does not inherit
 * from YSensor.
 */
//--- (end of YAccelerometer class start)

export class YAccelerometer extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YAccelerometer constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Accelerometer';
        /** @member {number} **/
        this._xValue                     = Y_XVALUE_INVALID;
        /** @member {number} **/
        this._yValue                     = Y_YVALUE_INVALID;
        /** @member {number} **/
        this._zValue                     = Y_ZVALUE_INVALID;
        /** @member {number} **/
        this._gravityCancellation        = Y_GRAVITYCANCELLATION_INVALID;
        this.imm_setConst({
            XVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            YVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            ZVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            GRAVITYCANCELLATION_OFF      : 0,
            GRAVITYCANCELLATION_ON       : 1,
            GRAVITYCANCELLATION_INVALID  : -1
        });
        //--- (end of YAccelerometer constructor)
    }

    //--- (YAccelerometer implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'xValue':
            this._xValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'yValue':
            this._yValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'zValue':
            this._zValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'gravityCancellation':
            this._gravityCancellation = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the X component of the acceleration, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the X component of the acceleration, as a
     * floating point number
     *
     * On failure, throws an exception or returns YAccelerometer.XVALUE_INVALID.
     */
    async get_xValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_XVALUE_INVALID;
            }
        }
        return this._xValue;
    }

    /**
     * Returns the Y component of the acceleration, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the Y component of the acceleration, as a
     * floating point number
     *
     * On failure, throws an exception or returns YAccelerometer.YVALUE_INVALID.
     */
    async get_yValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_YVALUE_INVALID;
            }
        }
        return this._yValue;
    }

    /**
     * Returns the Z component of the acceleration, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the Z component of the acceleration, as a
     * floating point number
     *
     * On failure, throws an exception or returns YAccelerometer.ZVALUE_INVALID.
     */
    async get_zValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ZVALUE_INVALID;
            }
        }
        return this._zValue;
    }

    async get_gravityCancellation()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_GRAVITYCANCELLATION_INVALID;
            }
        }
        return this._gravityCancellation;
    }

    async set_gravityCancellation(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('gravityCancellation',rest_val);
    }

    /**
     * Retrieves an accelerometer for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the accelerometer is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAccelerometer.isOnline() to test if the accelerometer is
     * indeed online at a given time. In case of ambiguity when looking for
     * an accelerometer by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the accelerometer
     *
     * @return {YAccelerometer} a YAccelerometer object allowing you to drive the accelerometer.
     */
    static FindAccelerometer(func)
    {
        /** @type {YAccelerometer} **/
        let obj;
        obj = YFunction._FindFromCache('Accelerometer', func);
        if (obj == null) {
            obj = new YAccelerometer(YAPI, func);
            YFunction._AddToCache('Accelerometer',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves an accelerometer for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the accelerometer is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAccelerometer.isOnline() to test if the accelerometer is
     * indeed online at a given time. In case of ambiguity when looking for
     * an accelerometer by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the accelerometer
     *
     * @return {YAccelerometer} a YAccelerometer object allowing you to drive the accelerometer.
     */
    static FindAccelerometerInContext(yctx,func)
    {
        /** @type {YAccelerometer} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Accelerometer', func);
        if (obj == null) {
            obj = new YAccelerometer(yctx, func);
            YFunction._AddToCache('Accelerometer',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of accelerometers started using yFirstAccelerometer().
     *
     * @return {YAccelerometer} a pointer to a YAccelerometer object, corresponding to
     *         an accelerometer currently online, or a null pointer
     *         if there are no more accelerometers to enumerate.
     */
    /* */ nextAccelerometer()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YAccelerometer.FindAccelerometerInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of accelerometers currently accessible.
     * Use the method YAccelerometer.nextAccelerometer() to iterate on
     * next accelerometers.
     *
     * @return {YAccelerometer} a pointer to a YAccelerometer object, corresponding to
     *         the first accelerometer currently online, or a null pointer
     *         if there are none.
     */
    static FirstAccelerometer()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Accelerometer');
        if(next_hwid == null) return null;
        return YAccelerometer.FindAccelerometer(next_hwid);
    }

    /**
     * Starts the enumeration of accelerometers currently accessible.
     * Use the method YAccelerometer.nextAccelerometer() to iterate on
     * next accelerometers.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YAccelerometer} a pointer to a YAccelerometer object, corresponding to
     *         the first accelerometer currently online, or a null pointer
     *         if there are none.
     */
    static FirstAccelerometerInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Accelerometer');
        if(next_hwid == null) return null;
        return YAccelerometer.FindAccelerometerInContext(yctx, next_hwid);
    }

    //--- (end of YAccelerometer implementation)
}

//--- (Accelerometer functions)

/**
 * comment from .yc definition
 */
export function yFindAccelerometer(func)
{
    return YAccelerometer.FindAccelerometer(func);
}

/**
 * comment from .yc definition
 */
export function yFirstAccelerometer()
{
    return YAccelerometer.FirstAccelerometer();
}

//--- (end of Accelerometer functions)
