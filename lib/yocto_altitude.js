/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Altitude functions
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

//--- (YAltitude return codes)
//--- (end of YAltitude return codes)
//--- (YAltitude definitions)
export const Y_QNH_INVALID                   = YAPI.INVALID_DOUBLE;
export const Y_TECHNOLOGY_INVALID            = YAPI.INVALID_STRING;
//--- (end of YAltitude definitions)

//--- (YAltitude class start)
/**
 * YAltitude Class: Altitude function interface
 *
 * The Yoctopuce class YAltitude allows you to read and configure Yoctopuce altitude
 * sensors. It inherits from the YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to configure the barometric pressure adjusted to
 * sea level (QNH) for barometric sensors.
 */
//--- (end of YAltitude class start)

export class YAltitude extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YAltitude constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Altitude';
        /** @member {number} **/
        this._qnh                        = Y_QNH_INVALID;
        /** @member {string} **/
        this._technology                 = Y_TECHNOLOGY_INVALID;
        this.imm_setConst({
            QNH_INVALID                  : YAPI.INVALID_DOUBLE,
            TECHNOLOGY_INVALID           : YAPI.INVALID_STRING
        });
        //--- (end of YAltitude constructor)
    }

    //--- (YAltitude implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'qnh':
            this._qnh = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'technology':
            this._technology = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Changes the current estimated altitude. This allows to compensate for
     * ambient pressure variations and to work in relative mode.
     *
     * @param newval {number} : a floating point number corresponding to the current estimated altitude
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_currentValue(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('currentValue',rest_val);
    }

    /**
     * Changes the barometric pressure adjusted to sea level used to compute
     * the altitude (QNH). This enables you to compensate for atmospheric pressure
     * changes due to weather conditions.
     *
     * @param newval {number} : a floating point number corresponding to the barometric pressure adjusted
     * to sea level used to compute
     *         the altitude (QNH)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_qnh(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('qnh',rest_val);
    }

    /**
     * Returns the barometric pressure adjusted to sea level used to compute
     * the altitude (QNH).
     *
     * @return {number} a floating point number corresponding to the barometric pressure adjusted to sea
     * level used to compute
     *         the altitude (QNH)
     *
     * On failure, throws an exception or returns YAltitude.QNH_INVALID.
     */
    async get_qnh()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_QNH_INVALID;
            }
        }
        return this._qnh;
    }

    /**
     * Returns the technology used by the sesnor to compute
     * altitude. Possibles values are  "barometric" and "gps"
     *
     * @return {string} a string corresponding to the technology used by the sesnor to compute
     *         altitude
     *
     * On failure, throws an exception or returns YAltitude.TECHNOLOGY_INVALID.
     */
    async get_technology()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_TECHNOLOGY_INVALID;
            }
        }
        return this._technology;
    }

    /**
     * Retrieves an altimeter for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the altimeter is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAltitude.isOnline() to test if the altimeter is
     * indeed online at a given time. In case of ambiguity when looking for
     * an altimeter by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the altimeter
     *
     * @return {YAltitude} a YAltitude object allowing you to drive the altimeter.
     */
    static FindAltitude(func, obj_yapi = YAPI)
    {
        /** @type {YAltitude} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Altitude', func);
        if (obj == null) {
            obj = new YAltitude(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Altitude',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves an altimeter for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the altimeter is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAltitude.isOnline() to test if the altimeter is
     * indeed online at a given time. In case of ambiguity when looking for
     * an altimeter by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the altimeter
     *
     * @return {YAltitude} a YAltitude object allowing you to drive the altimeter.
     */
    static FindAltitudeInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YAltitude} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Altitude', func);
        if (obj == null) {
            obj = new YAltitude(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Altitude',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of altimeters started using yFirstAltitude().
     *
     * @return {YAltitude} a pointer to a YAltitude object, corresponding to
     *         an altimeter currently online, or a null pointer
     *         if there are no more altimeters to enumerate.
     */
    /**/ nextAltitude()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YAltitude.FindAltitude(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of altimeters currently accessible.
     * Use the method YAltitude.nextAltitude() to iterate on
     * next altimeters.
     *
     * @return {YAltitude} a pointer to a YAltitude object, corresponding to
     *         the first altimeter currently online, or a null pointer
     *         if there are none.
     */
    static FirstAltitude(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Altitude');
        if(next_hwid == null) return null;
        return YAltitude.FindAltitude(next_hwid, obj_yapi);
    }

    //--- (end of YAltitude implementation)
}

//--- (Altitude functions)

/**
 * comment from .yc definition
 */
export function yFindAltitude(func)
{
    return YAltitude.FindAltitude(func);
}

/**
 * comment from .yc definition
 */
export function yFirstAltitude()
{
    return YAltitude.FirstAltitude();
}

//--- (end of Altitude functions)
