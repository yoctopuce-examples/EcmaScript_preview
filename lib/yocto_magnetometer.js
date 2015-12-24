/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Magnetometer functions
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

//--- (YMagnetometer return codes)
//--- (end of YMagnetometer return codes)
//--- (YMagnetometer definitions)
export const Y_XVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_YVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_ZVALUE_INVALID                = YAPI.INVALID_DOUBLE;
//--- (end of YMagnetometer definitions)

//--- (YMagnetometer class start)
/**
 * YMagnetometer Class: Magnetometer function interface
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
//--- (end of YMagnetometer class start)

export class YMagnetometer extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YMagnetometer constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Magnetometer';
        /** @member {number} **/
        this._xValue                     = Y_XVALUE_INVALID;
        /** @member {number} **/
        this._yValue                     = Y_YVALUE_INVALID;
        /** @member {number} **/
        this._zValue                     = Y_ZVALUE_INVALID;
        this.imm_setConst({
            XVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            YVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            ZVALUE_INVALID               : YAPI.INVALID_DOUBLE
        });
        //--- (end of YMagnetometer constructor)
    }

    //--- (YMagnetometer implementation)

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
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the X component of the magnetic field, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the X component of the magnetic field, as
     * a floating point number
     *
     * On failure, throws an exception or returns YMagnetometer.XVALUE_INVALID.
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
     * Returns the Y component of the magnetic field, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the Y component of the magnetic field, as
     * a floating point number
     *
     * On failure, throws an exception or returns YMagnetometer.YVALUE_INVALID.
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
     * Returns the Z component of the magnetic field, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the Z component of the magnetic field, as
     * a floating point number
     *
     * On failure, throws an exception or returns YMagnetometer.ZVALUE_INVALID.
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

    /**
     * Retrieves a magnetometer for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the magnetometer is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YMagnetometer.isOnline() to test if the magnetometer is
     * indeed online at a given time. In case of ambiguity when looking for
     * a magnetometer by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the magnetometer
     *
     * @return {YMagnetometer} a YMagnetometer object allowing you to drive the magnetometer.
     */
    static FindMagnetometer(func)
    {
        /** @type {YMagnetometer} **/
        let obj;
        obj = YFunction._FindFromCache('Magnetometer', func);
        if (obj == null) {
            obj = new YMagnetometer(YAPI, func);
            YFunction._AddToCache('Magnetometer',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a magnetometer for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the magnetometer is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YMagnetometer.isOnline() to test if the magnetometer is
     * indeed online at a given time. In case of ambiguity when looking for
     * a magnetometer by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the magnetometer
     *
     * @return {YMagnetometer} a YMagnetometer object allowing you to drive the magnetometer.
     */
    static FindMagnetometerInContext(yctx,func)
    {
        /** @type {YMagnetometer} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Magnetometer', func);
        if (obj == null) {
            obj = new YMagnetometer(yctx, func);
            YFunction._AddToCache('Magnetometer',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of magnetometers started using yFirstMagnetometer().
     *
     * @return {YMagnetometer} a pointer to a YMagnetometer object, corresponding to
     *         a magnetometer currently online, or a null pointer
     *         if there are no more magnetometers to enumerate.
     */
    /* */ nextMagnetometer()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YMagnetometer.FindMagnetometerInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of magnetometers currently accessible.
     * Use the method YMagnetometer.nextMagnetometer() to iterate on
     * next magnetometers.
     *
     * @return {YMagnetometer} a pointer to a YMagnetometer object, corresponding to
     *         the first magnetometer currently online, or a null pointer
     *         if there are none.
     */
    static FirstMagnetometer()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Magnetometer');
        if(next_hwid == null) return null;
        return YMagnetometer.FindMagnetometer(next_hwid);
    }

    /**
     * Starts the enumeration of magnetometers currently accessible.
     * Use the method YMagnetometer.nextMagnetometer() to iterate on
     * next magnetometers.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YMagnetometer} a pointer to a YMagnetometer object, corresponding to
     *         the first magnetometer currently online, or a null pointer
     *         if there are none.
     */
    static FirstMagnetometerInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Magnetometer');
        if(next_hwid == null) return null;
        return YMagnetometer.FindMagnetometerInContext(yctx, next_hwid);
    }

    //--- (end of YMagnetometer implementation)
}

//--- (Magnetometer functions)

/**
 * comment from .yc definition
 */
export function yFindMagnetometer(func)
{
    return YMagnetometer.FindMagnetometer(func);
}

/**
 * comment from .yc definition
 */
export function yFirstMagnetometer()
{
    return YMagnetometer.FirstMagnetometer();
}

//--- (end of Magnetometer functions)
