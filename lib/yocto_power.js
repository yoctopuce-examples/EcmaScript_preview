/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Power functions
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

//--- (YPower return codes)
//--- (end of YPower return codes)
//--- (YPower definitions)
export const Y_COSPHI_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_METER_INVALID                 = YAPI.INVALID_DOUBLE;
export const Y_METERTIMER_INVALID            = YAPI.INVALID_UINT;
//--- (end of YPower definitions)

//--- (YPower class start)
/**
 * YPower Class: Power function interface
 *
 * The Yoctopuce class YPower allows you to read and configure Yoctopuce power
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to access the energy counter and the power factor.
 */
//--- (end of YPower class start)

export class YPower extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YPower constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Power';
        /** @member {number} **/
        this._cosPhi                     = Y_COSPHI_INVALID;
        /** @member {number} **/
        this._meter                      = Y_METER_INVALID;
        /** @member {number} **/
        this._meterTimer                 = Y_METERTIMER_INVALID;
        this.imm_setConst({
            COSPHI_INVALID               : YAPI.INVALID_DOUBLE,
            METER_INVALID                : YAPI.INVALID_DOUBLE,
            METERTIMER_INVALID           : YAPI.INVALID_UINT
        });
        //--- (end of YPower constructor)
    }

    //--- (YPower implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'cosPhi':
            this._cosPhi = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'meter':
            this._meter = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'meterTimer':
            this._meterTimer = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the power factor (the ratio between the real power consumed,
     * measured in W, and the apparent power provided, measured in VA).
     *
     * @return {number} a floating point number corresponding to the power factor (the ratio between the
     * real power consumed,
     *         measured in W, and the apparent power provided, measured in VA)
     *
     * On failure, throws an exception or returns YPower.COSPHI_INVALID.
     */
    async get_cosPhi()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_COSPHI_INVALID;
            }
        }
        return this._cosPhi;
    }

    async set_meter(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('meter',rest_val);
    }

    /**
     * Returns the energy counter, maintained by the wattmeter by integrating the power consumption over time.
     * Note that this counter is reset at each start of the device.
     *
     * @return {number} a floating point number corresponding to the energy counter, maintained by the
     * wattmeter by integrating the power consumption over time
     *
     * On failure, throws an exception or returns YPower.METER_INVALID.
     */
    async get_meter()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_METER_INVALID;
            }
        }
        return this._meter;
    }

    /**
     * Returns the elapsed time since last energy counter reset, in seconds.
     *
     * @return {number} an integer corresponding to the elapsed time since last energy counter reset, in seconds
     *
     * On failure, throws an exception or returns YPower.METERTIMER_INVALID.
     */
    async get_meterTimer()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_METERTIMER_INVALID;
            }
        }
        return this._meterTimer;
    }

    /**
     * Retrieves a electrical power sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the electrical power sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPower.isOnline() to test if the electrical power sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a electrical power sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the electrical power sensor
     *
     * @return {YPower} a YPower object allowing you to drive the electrical power sensor.
     */
    static FindPower(func)
    {
        /** @type {YPower} **/
        let obj;
        obj = YFunction._FindFromCache('Power', func);
        if (obj == null) {
            obj = new YPower(YAPI, func);
            YFunction._AddToCache('Power',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a electrical power sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the electrical power sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPower.isOnline() to test if the electrical power sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a electrical power sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the electrical power sensor
     *
     * @return {YPower} a YPower object allowing you to drive the electrical power sensor.
     */
    static FindPowerInContext(yctx,func)
    {
        /** @type {YPower} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Power', func);
        if (obj == null) {
            obj = new YPower(yctx, func);
            YFunction._AddToCache('Power',  func, obj);
        }
        return obj;
    }

    /**
     * Resets the energy counter.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async reset()
    {
        return await this.set_meter(0);
    }

    /**
     * Continues the enumeration of electrical power sensors started using yFirstPower().
     *
     * @return {YPower} a pointer to a YPower object, corresponding to
     *         a electrical power sensor currently online, or a null pointer
     *         if there are no more electrical power sensors to enumerate.
     */
    /* */ nextPower()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YPower.FindPowerInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of electrical power sensors currently accessible.
     * Use the method YPower.nextPower() to iterate on
     * next electrical power sensors.
     *
     * @return {YPower} a pointer to a YPower object, corresponding to
     *         the first electrical power sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstPower()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Power');
        if(next_hwid == null) return null;
        return YPower.FindPower(next_hwid);
    }

    /**
     * Starts the enumeration of electrical power sensors currently accessible.
     * Use the method YPower.nextPower() to iterate on
     * next electrical power sensors.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YPower} a pointer to a YPower object, corresponding to
     *         the first electrical power sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstPowerInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Power');
        if(next_hwid == null) return null;
        return YPower.FindPowerInContext(yctx, next_hwid);
    }

    //--- (end of YPower implementation)
}

//--- (Power functions)

/**
 * comment from .yc definition
 */
export function yFindPower(func)
{
    return YPower.FindPower(func);
}

/**
 * comment from .yc definition
 */
export function yFirstPower()
{
    return YPower.FirstPower();
}

//--- (end of Power functions)
