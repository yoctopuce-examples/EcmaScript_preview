/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for GenericSensor functions
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

//--- (YGenericSensor return codes)
//--- (end of YGenericSensor return codes)
//--- (YGenericSensor definitions)
export const Y_SIGNALSAMPLING_HIGH_RATE      = 0;
export const Y_SIGNALSAMPLING_HIGH_RATE_FILTERED = 1;
export const Y_SIGNALSAMPLING_LOW_NOISE      = 2;
export const Y_SIGNALSAMPLING_LOW_NOISE_FILTERED = 3;
export const Y_SIGNALSAMPLING_INVALID        = -1;
export const Y_SIGNALVALUE_INVALID           = YAPI.INVALID_DOUBLE;
export const Y_SIGNALUNIT_INVALID            = YAPI.INVALID_STRING;
export const Y_SIGNALRANGE_INVALID           = YAPI.INVALID_STRING;
export const Y_VALUERANGE_INVALID            = YAPI.INVALID_STRING;
export const Y_SIGNALBIAS_INVALID            = YAPI.INVALID_DOUBLE;
//--- (end of YGenericSensor definitions)

//--- (YGenericSensor class start)
/**
 * YGenericSensor Class: GenericSensor function interface
 *
 * The YGenericSensor class allows you to read and configure Yoctopuce signal
 * transducers. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to configure the automatic conversion between the
 * measured signal and the corresponding engineering unit.
 */
//--- (end of YGenericSensor class start)

export class YGenericSensor extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YGenericSensor constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'GenericSensor';
        /** @member {number} **/
        this._signalValue                = Y_SIGNALVALUE_INVALID;
        /** @member {string} **/
        this._signalUnit                 = Y_SIGNALUNIT_INVALID;
        /** @member {string} **/
        this._signalRange                = Y_SIGNALRANGE_INVALID;
        /** @member {string} **/
        this._valueRange                 = Y_VALUERANGE_INVALID;
        /** @member {number} **/
        this._signalBias                 = Y_SIGNALBIAS_INVALID;
        /** @member {number} **/
        this._signalSampling             = Y_SIGNALSAMPLING_INVALID;
        this.imm_setConst({
            SIGNALVALUE_INVALID          : YAPI.INVALID_DOUBLE,
            SIGNALUNIT_INVALID           : YAPI.INVALID_STRING,
            SIGNALRANGE_INVALID          : YAPI.INVALID_STRING,
            VALUERANGE_INVALID           : YAPI.INVALID_STRING,
            SIGNALBIAS_INVALID           : YAPI.INVALID_DOUBLE,
            SIGNALSAMPLING_HIGH_RATE     : 0,
            SIGNALSAMPLING_HIGH_RATE_FILTERED : 1,
            SIGNALSAMPLING_LOW_NOISE     : 2,
            SIGNALSAMPLING_LOW_NOISE_FILTERED : 3,
            SIGNALSAMPLING_INVALID       : -1
        });
        //--- (end of YGenericSensor constructor)
    }

    //--- (YGenericSensor implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'signalValue':
            this._signalValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'signalUnit':
            this._signalUnit = val;
            return 1;
        case 'signalRange':
            this._signalRange = val;
            return 1;
        case 'valueRange':
            this._valueRange = val;
            return 1;
        case 'signalBias':
            this._signalBias = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'signalSampling':
            this._signalSampling = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Changes the measuring unit for the measured value.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval {string} : a string corresponding to the measuring unit for the measured value
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_unit(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('unit',rest_val);
    }

    /**
     * Returns the measured value of the electrical signal used by the sensor.
     *
     * @return {number} a floating point number corresponding to the measured value of the electrical
     * signal used by the sensor
     *
     * On failure, throws an exception or returns YGenericSensor.SIGNALVALUE_INVALID.
     */
    async get_signalValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNALVALUE_INVALID;
            }
        }
        return Math.round(this._signalValue * 1000) / 1000;
    }

    /**
     * Returns the measuring unit of the electrical signal used by the sensor.
     *
     * @return {string} a string corresponding to the measuring unit of the electrical signal used by the sensor
     *
     * On failure, throws an exception or returns YGenericSensor.SIGNALUNIT_INVALID.
     */
    async get_signalUnit()
    {
        if (this._cacheExpiration == 0) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNALUNIT_INVALID;
            }
        }
        return this._signalUnit;
    }

    /**
     * Returns the electric signal range used by the sensor.
     *
     * @return {string} a string corresponding to the electric signal range used by the sensor
     *
     * On failure, throws an exception or returns YGenericSensor.SIGNALRANGE_INVALID.
     */
    async get_signalRange()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNALRANGE_INVALID;
            }
        }
        return this._signalRange;
    }

    /**
     * Changes the electric signal range used by the sensor.
     *
     * @param newval {string} : a string corresponding to the electric signal range used by the sensor
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_signalRange(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('signalRange',rest_val);
    }

    /**
     * Returns the physical value range measured by the sensor.
     *
     * @return {string} a string corresponding to the physical value range measured by the sensor
     *
     * On failure, throws an exception or returns YGenericSensor.VALUERANGE_INVALID.
     */
    async get_valueRange()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_VALUERANGE_INVALID;
            }
        }
        return this._valueRange;
    }

    /**
     * Changes the physical value range measured by the sensor. As a side effect, the range modification may
     * automatically modify the display resolution.
     *
     * @param newval {string} : a string corresponding to the physical value range measured by the sensor
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_valueRange(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('valueRange',rest_val);
    }

    /**
     * Changes the electric signal bias for zero shift adjustment.
     * If your electric signal reads positif when it should be zero, setup
     * a positive signalBias of the same value to fix the zero shift.
     *
     * @param newval {number} : a floating point number corresponding to the electric signal bias for zero
     * shift adjustment
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_signalBias(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('signalBias',rest_val);
    }

    /**
     * Returns the electric signal bias for zero shift adjustment.
     * A positive bias means that the signal is over-reporting the measure,
     * while a negative bias means that the signal is underreporting the measure.
     *
     * @return {number} a floating point number corresponding to the electric signal bias for zero shift adjustment
     *
     * On failure, throws an exception or returns YGenericSensor.SIGNALBIAS_INVALID.
     */
    async get_signalBias()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNALBIAS_INVALID;
            }
        }
        return this._signalBias;
    }

    /**
     * Returns the electric signal sampling method to use.
     * The HIGH_RATE method uses the highest sampling frequency, without any filtering.
     * The HIGH_RATE_FILTERED method adds a windowed 7-sample median filter.
     * The LOW_NOISE method uses a reduced acquisition frequency to reduce noise.
     * The LOW_NOISE_FILTERED method combines a reduced frequency with the median filter
     * to get measures as stable as possible when working on a noisy signal.
     *
     * @return {number} a value among YGenericSensor.SIGNALSAMPLING_HIGH_RATE,
     * YGenericSensor.SIGNALSAMPLING_HIGH_RATE_FILTERED, YGenericSensor.SIGNALSAMPLING_LOW_NOISE and
     * YGenericSensor.SIGNALSAMPLING_LOW_NOISE_FILTERED corresponding to the electric signal sampling method to use
     *
     * On failure, throws an exception or returns YGenericSensor.SIGNALSAMPLING_INVALID.
     */
    async get_signalSampling()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNALSAMPLING_INVALID;
            }
        }
        return this._signalSampling;
    }

    /**
     * Changes the electric signal sampling method to use.
     * The HIGH_RATE method uses the highest sampling frequency, without any filtering.
     * The HIGH_RATE_FILTERED method adds a windowed 7-sample median filter.
     * The LOW_NOISE method uses a reduced acquisition frequency to reduce noise.
     * The LOW_NOISE_FILTERED method combines a reduced frequency with the median filter
     * to get measures as stable as possible when working on a noisy signal.
     *
     * @param newval {number} : a value among YGenericSensor.SIGNALSAMPLING_HIGH_RATE,
     * YGenericSensor.SIGNALSAMPLING_HIGH_RATE_FILTERED, YGenericSensor.SIGNALSAMPLING_LOW_NOISE and
     * YGenericSensor.SIGNALSAMPLING_LOW_NOISE_FILTERED corresponding to the electric signal sampling method to use
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_signalSampling(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('signalSampling',rest_val);
    }

    /**
     * Retrieves a generic sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the generic sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YGenericSensor.isOnline() to test if the generic sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a generic sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the generic sensor
     *
     * @return {YGenericSensor} a YGenericSensor object allowing you to drive the generic sensor.
     */
    static FindGenericSensor(func)
    {
        /** @type {YGenericSensor} **/
        let obj;
        obj = YFunction._FindFromCache('GenericSensor', func);
        if (obj == null) {
            obj = new YGenericSensor(YAPI, func);
            YFunction._AddToCache('GenericSensor',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a generic sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the generic sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YGenericSensor.isOnline() to test if the generic sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a generic sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the generic sensor
     *
     * @return {YGenericSensor} a YGenericSensor object allowing you to drive the generic sensor.
     */
    static FindGenericSensorInContext(yctx,func)
    {
        /** @type {YGenericSensor} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'GenericSensor', func);
        if (obj == null) {
            obj = new YGenericSensor(yctx, func);
            YFunction._AddToCache('GenericSensor',  func, obj);
        }
        return obj;
    }

    /**
     * Adjusts the signal bias so that the current signal value is need
     * precisely as zero.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async zeroAdjust()
    {
        /** @type {number} **/
        let currSignal;
        /** @type {number} **/
        let currBias;
        currSignal = await this.get_signalValue();
        currBias = await this.get_signalBias();
        return await this.set_signalBias(currSignal + currBias);
    }

    /**
     * Continues the enumeration of generic sensors started using yFirstGenericSensor().
     *
     * @return {YGenericSensor} a pointer to a YGenericSensor object, corresponding to
     *         a generic sensor currently online, or a null pointer
     *         if there are no more generic sensors to enumerate.
     */
    /* */ nextGenericSensor()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YGenericSensor.FindGenericSensorInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of generic sensors currently accessible.
     * Use the method YGenericSensor.nextGenericSensor() to iterate on
     * next generic sensors.
     *
     * @return {YGenericSensor} a pointer to a YGenericSensor object, corresponding to
     *         the first generic sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstGenericSensor()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('GenericSensor');
        if(next_hwid == null) return null;
        return YGenericSensor.FindGenericSensor(next_hwid);
    }

    /**
     * Starts the enumeration of generic sensors currently accessible.
     * Use the method YGenericSensor.nextGenericSensor() to iterate on
     * next generic sensors.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YGenericSensor} a pointer to a YGenericSensor object, corresponding to
     *         the first generic sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstGenericSensorInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('GenericSensor');
        if(next_hwid == null) return null;
        return YGenericSensor.FindGenericSensorInContext(yctx, next_hwid);
    }

    //--- (end of YGenericSensor implementation)
}

//--- (GenericSensor functions)

/**
 * comment from .yc definition
 */
export function yFindGenericSensor(func)
{
    return YGenericSensor.FindGenericSensor(func);
}

/**
 * comment from .yc definition
 */
export function yFirstGenericSensor()
{
    return YGenericSensor.FirstGenericSensor();
}

//--- (end of GenericSensor functions)
