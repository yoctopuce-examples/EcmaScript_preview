/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Led functions
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

//--- (YLed return codes)
//--- (end of YLed return codes)
//--- (YLed definitions)
export const Y_POWER_OFF                     = 0;
export const Y_POWER_ON                      = 1;
export const Y_POWER_INVALID                 = -1;
export const Y_BLINKING_STILL                = 0;
export const Y_BLINKING_RELAX                = 1;
export const Y_BLINKING_AWARE                = 2;
export const Y_BLINKING_RUN                  = 3;
export const Y_BLINKING_CALL                 = 4;
export const Y_BLINKING_PANIC                = 5;
export const Y_BLINKING_INVALID              = -1;
export const Y_LUMINOSITY_INVALID            = YAPI.INVALID_UINT;
//--- (end of YLed definitions)

//--- (YLed class start)
/**
 * YLed Class: Led function interface
 *
 * Yoctopuce application programming interface
 * allows you not only to drive the intensity of the led, but also to
 * have it blink at various preset frequencies.
 */
//--- (end of YLed class start)

export class YLed extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YLed constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Led';
        /** @member {number} **/
        this._power                      = Y_POWER_INVALID;
        /** @member {number} **/
        this._luminosity                 = Y_LUMINOSITY_INVALID;
        /** @member {number} **/
        this._blinking                   = Y_BLINKING_INVALID;
        this.imm_setConst({
            POWER_OFF                    : 0,
            POWER_ON                     : 1,
            POWER_INVALID                : -1,
            LUMINOSITY_INVALID           : YAPI.INVALID_UINT,
            BLINKING_STILL               : 0,
            BLINKING_RELAX               : 1,
            BLINKING_AWARE               : 2,
            BLINKING_RUN                 : 3,
            BLINKING_CALL                : 4,
            BLINKING_PANIC               : 5,
            BLINKING_INVALID             : -1
        });
        //--- (end of YLed constructor)
    }

    //--- (YLed implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'power':
            this._power = parseInt(val);
            return 1;
        case 'luminosity':
            this._luminosity = parseInt(val);
            return 1;
        case 'blinking':
            this._blinking = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the current led state.
     *
     * @return {number} either YLed.POWER_OFF or YLed.POWER_ON, according to the current led state
     *
     * On failure, throws an exception or returns YLed.POWER_INVALID.
     */
    async get_power()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_POWER_INVALID;
            }
        }
        return this._power;
    }

    /**
     * Changes the state of the led.
     *
     * @param newval {number} : either YLed.POWER_OFF or YLed.POWER_ON, according to the state of the led
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_power(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('power',rest_val);
    }

    /**
     * Returns the current led intensity (in per cent).
     *
     * @return {number} an integer corresponding to the current led intensity (in per cent)
     *
     * On failure, throws an exception or returns YLed.LUMINOSITY_INVALID.
     */
    async get_luminosity()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_LUMINOSITY_INVALID;
            }
        }
        return this._luminosity;
    }

    /**
     * Changes the current led intensity (in per cent).
     *
     * @param newval {number} : an integer corresponding to the current led intensity (in per cent)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_luminosity(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('luminosity',rest_val);
    }

    /**
     * Returns the current led signaling mode.
     *
     * @return {number} a value among YLed.BLINKING_STILL, YLed.BLINKING_RELAX, YLed.BLINKING_AWARE,
     * YLed.BLINKING_RUN, YLed.BLINKING_CALL and YLed.BLINKING_PANIC corresponding to the current led signaling mode
     *
     * On failure, throws an exception or returns YLed.BLINKING_INVALID.
     */
    async get_blinking()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BLINKING_INVALID;
            }
        }
        return this._blinking;
    }

    /**
     * Changes the current led signaling mode.
     *
     * @param newval {number} : a value among YLed.BLINKING_STILL, YLed.BLINKING_RELAX,
     * YLed.BLINKING_AWARE, YLed.BLINKING_RUN, YLed.BLINKING_CALL and YLed.BLINKING_PANIC corresponding to
     * the current led signaling mode
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_blinking(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('blinking',rest_val);
    }

    /**
     * Retrieves a led for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the led is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLed.isOnline() to test if the led is
     * indeed online at a given time. In case of ambiguity when looking for
     * a led by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the led
     *
     * @return {YLed} a YLed object allowing you to drive the led.
     */
    static FindLed(func, obj_yapi = YAPI)
    {
        /** @type {YLed} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Led', func);
        if (obj == null) {
            obj = new YLed(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Led',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a led for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the led is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLed.isOnline() to test if the led is
     * indeed online at a given time. In case of ambiguity when looking for
     * a led by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the led
     *
     * @return {YLed} a YLed object allowing you to drive the led.
     */
    static FindLedInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YLed} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Led', func);
        if (obj == null) {
            obj = new YLed(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Led',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of leds started using yFirstLed().
     *
     * @return {YLed} a pointer to a YLed object, corresponding to
     *         a led currently online, or a null pointer
     *         if there are no more leds to enumerate.
     */
    /**/ nextLed()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YLed.FindLed(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of leds currently accessible.
     * Use the method YLed.nextLed() to iterate on
     * next leds.
     *
     * @return {YLed} a pointer to a YLed object, corresponding to
     *         the first led currently online, or a null pointer
     *         if there are none.
     */
    static FirstLed(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Led');
        if(next_hwid == null) return null;
        return YLed.FindLed(next_hwid, obj_yapi);
    }

    //--- (end of YLed implementation)
}

//--- (Led functions)

/**
 * comment from .yc definition
 */
export function yFindLed(func)
{
    return YLed.FindLed(func);
}

/**
 * comment from .yc definition
 */
export function yFirstLed()
{
    return YLed.FirstLed();
}

//--- (end of Led functions)
