/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for QuadratureDecoder functions
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

//--- (YQuadratureDecoder return codes)
//--- (end of YQuadratureDecoder return codes)
//--- (YQuadratureDecoder definitions)
export const Y_DECODING_OFF                  = 0;
export const Y_DECODING_ON                   = 1;
export const Y_DECODING_INVALID              = -1;
export const Y_SPEED_INVALID                 = YAPI.INVALID_DOUBLE;
//--- (end of YQuadratureDecoder definitions)

//--- (YQuadratureDecoder class start)
/**
 * YQuadratureDecoder Class: QuadratureDecoder function interface
 *
 * The class YQuadratureDecoder allows you to decode a two-wire signal produced by a
 * quadrature encoder. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 */
//--- (end of YQuadratureDecoder class start)

export class YQuadratureDecoder extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YQuadratureDecoder constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'QuadratureDecoder';
        /** @member {number} **/
        this._speed                      = Y_SPEED_INVALID;
        /** @member {number} **/
        this._decoding                   = Y_DECODING_INVALID;
        this.imm_setConst({
            SPEED_INVALID                : YAPI.INVALID_DOUBLE,
            DECODING_OFF                 : 0,
            DECODING_ON                  : 1,
            DECODING_INVALID             : -1
        });
        //--- (end of YQuadratureDecoder constructor)
    }

    //--- (YQuadratureDecoder implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'speed':
            this._speed = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'decoding':
            this._decoding = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Changes the current expected position of the quadrature decoder.
     * Invoking this function implicitely activates the quadrature decoder.
     *
     * @param newval {number} : a floating point number corresponding to the current expected position of
     * the quadrature decoder
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
     * Returns the PWM frequency in Hz.
     *
     * @return {number} a floating point number corresponding to the PWM frequency in Hz
     *
     * On failure, throws an exception or returns YQuadratureDecoder.SPEED_INVALID.
     */
    async get_speed()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SPEED_INVALID;
            }
        }
        return this._speed;
    }

    /**
     * Returns the current activation state of the quadrature decoder.
     *
     * @return {number} either YQuadratureDecoder.DECODING_OFF or YQuadratureDecoder.DECODING_ON,
     * according to the current activation state of the quadrature decoder
     *
     * On failure, throws an exception or returns YQuadratureDecoder.DECODING_INVALID.
     */
    async get_decoding()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_DECODING_INVALID;
            }
        }
        return this._decoding;
    }

    /**
     * Changes the activation state of the quadrature decoder.
     *
     * @param newval {number} : either YQuadratureDecoder.DECODING_OFF or YQuadratureDecoder.DECODING_ON,
     * according to the activation state of the quadrature decoder
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_decoding(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('decoding',rest_val);
    }

    /**
     * Retrieves a quadrature decoder for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the quadrature decoder is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YQuadratureDecoder.isOnline() to test if the quadrature decoder is
     * indeed online at a given time. In case of ambiguity when looking for
     * a quadrature decoder by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the quadrature decoder
     *
     * @return {YQuadratureDecoder} a YQuadratureDecoder object allowing you to drive the quadrature decoder.
     */
    static FindQuadratureDecoder(func)
    {
        /** @type {YQuadratureDecoder} **/
        let obj;
        obj = YFunction._FindFromCache('QuadratureDecoder', func);
        if (obj == null) {
            obj = new YQuadratureDecoder(YAPI, func);
            YFunction._AddToCache('QuadratureDecoder',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a quadrature decoder for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the quadrature decoder is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YQuadratureDecoder.isOnline() to test if the quadrature decoder is
     * indeed online at a given time. In case of ambiguity when looking for
     * a quadrature decoder by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the quadrature decoder
     *
     * @return {YQuadratureDecoder} a YQuadratureDecoder object allowing you to drive the quadrature decoder.
     */
    static FindQuadratureDecoderInContext(yctx,func)
    {
        /** @type {YQuadratureDecoder} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'QuadratureDecoder', func);
        if (obj == null) {
            obj = new YQuadratureDecoder(yctx, func);
            YFunction._AddToCache('QuadratureDecoder',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of quadrature decoders started using yFirstQuadratureDecoder().
     *
     * @return {YQuadratureDecoder} a pointer to a YQuadratureDecoder object, corresponding to
     *         a quadrature decoder currently online, or a null pointer
     *         if there are no more quadrature decoders to enumerate.
     */
    /* */ nextQuadratureDecoder()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YQuadratureDecoder.FindQuadratureDecoderInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of quadrature decoders currently accessible.
     * Use the method YQuadratureDecoder.nextQuadratureDecoder() to iterate on
     * next quadrature decoders.
     *
     * @return {YQuadratureDecoder} a pointer to a YQuadratureDecoder object, corresponding to
     *         the first quadrature decoder currently online, or a null pointer
     *         if there are none.
     */
    static FirstQuadratureDecoder()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('QuadratureDecoder');
        if(next_hwid == null) return null;
        return YQuadratureDecoder.FindQuadratureDecoder(next_hwid);
    }

    /**
     * Starts the enumeration of quadrature decoders currently accessible.
     * Use the method YQuadratureDecoder.nextQuadratureDecoder() to iterate on
     * next quadrature decoders.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YQuadratureDecoder} a pointer to a YQuadratureDecoder object, corresponding to
     *         the first quadrature decoder currently online, or a null pointer
     *         if there are none.
     */
    static FirstQuadratureDecoderInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('QuadratureDecoder');
        if(next_hwid == null) return null;
        return YQuadratureDecoder.FindQuadratureDecoderInContext(yctx, next_hwid);
    }

    //--- (end of YQuadratureDecoder implementation)
}

//--- (QuadratureDecoder functions)

/**
 * comment from .yc definition
 */
export function yFindQuadratureDecoder(func)
{
    return YQuadratureDecoder.FindQuadratureDecoder(func);
}

/**
 * comment from .yc definition
 */
export function yFirstQuadratureDecoder()
{
    return YQuadratureDecoder.FirstQuadratureDecoder();
}

//--- (end of QuadratureDecoder functions)
