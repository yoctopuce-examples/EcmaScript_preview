/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for PwmOutput functions
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

//--- (YPwmOutput return codes)
//--- (end of YPwmOutput return codes)
//--- (YPwmOutput definitions)
export const Y_ENABLED_FALSE                 = 0;
export const Y_ENABLED_TRUE                  = 1;
export const Y_ENABLED_INVALID               = -1;
export const Y_ENABLEDATPOWERON_FALSE        = 0;
export const Y_ENABLEDATPOWERON_TRUE         = 1;
export const Y_ENABLEDATPOWERON_INVALID      = -1;
export const Y_FREQUENCY_INVALID             = YAPI.INVALID_DOUBLE;
export const Y_PERIOD_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_DUTYCYCLE_INVALID             = YAPI.INVALID_DOUBLE;
export const Y_PULSEDURATION_INVALID         = YAPI.INVALID_DOUBLE;
export const Y_PWMTRANSITION_INVALID         = YAPI.INVALID_STRING;
export const Y_DUTYCYCLEATPOWERON_INVALID    = YAPI.INVALID_DOUBLE;
//--- (end of YPwmOutput definitions)

//--- (YPwmOutput class start)
/**
 * YPwmOutput Class: PwmOutput function interface
 *
 * The Yoctopuce application programming interface allows you to configure, start, and stop the PWM.
 */
//--- (end of YPwmOutput class start)

export class YPwmOutput extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YPwmOutput constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'PwmOutput';
        /** @member {number} **/
        this._enabled                    = Y_ENABLED_INVALID;
        /** @member {number} **/
        this._frequency                  = Y_FREQUENCY_INVALID;
        /** @member {number} **/
        this._period                     = Y_PERIOD_INVALID;
        /** @member {number} **/
        this._dutyCycle                  = Y_DUTYCYCLE_INVALID;
        /** @member {number} **/
        this._pulseDuration              = Y_PULSEDURATION_INVALID;
        /** @member {string} **/
        this._pwmTransition              = Y_PWMTRANSITION_INVALID;
        /** @member {number} **/
        this._enabledAtPowerOn           = Y_ENABLEDATPOWERON_INVALID;
        /** @member {number} **/
        this._dutyCycleAtPowerOn         = Y_DUTYCYCLEATPOWERON_INVALID;
        this.imm_setConst({
            ENABLED_FALSE                : 0,
            ENABLED_TRUE                 : 1,
            ENABLED_INVALID              : -1,
            FREQUENCY_INVALID            : YAPI.INVALID_DOUBLE,
            PERIOD_INVALID               : YAPI.INVALID_DOUBLE,
            DUTYCYCLE_INVALID            : YAPI.INVALID_DOUBLE,
            PULSEDURATION_INVALID        : YAPI.INVALID_DOUBLE,
            PWMTRANSITION_INVALID        : YAPI.INVALID_STRING,
            ENABLEDATPOWERON_FALSE       : 0,
            ENABLEDATPOWERON_TRUE        : 1,
            ENABLEDATPOWERON_INVALID     : -1,
            DUTYCYCLEATPOWERON_INVALID   : YAPI.INVALID_DOUBLE
        });
        //--- (end of YPwmOutput constructor)
    }

    //--- (YPwmOutput implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'enabled':
            this._enabled = parseInt(val);
            return 1;
        case 'frequency':
            this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'period':
            this._period = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'dutyCycle':
            this._dutyCycle = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'pulseDuration':
            this._pulseDuration = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'pwmTransition':
            this._pwmTransition = val;
            return 1;
        case 'enabledAtPowerOn':
            this._enabledAtPowerOn = parseInt(val);
            return 1;
        case 'dutyCycleAtPowerOn':
            this._dutyCycleAtPowerOn = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the state of the PWMs.
     *
     * @return {number} either YPwmOutput.ENABLED_FALSE or YPwmOutput.ENABLED_TRUE, according to the state of the PWMs
     *
     * On failure, throws an exception or returns YPwmOutput.ENABLED_INVALID.
     */
    async get_enabled()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ENABLED_INVALID;
            }
        }
        return this._enabled;
    }

    /**
     * Stops or starts the PWM.
     *
     * @param newval {number} : either YPwmOutput.ENABLED_FALSE or YPwmOutput.ENABLED_TRUE
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_enabled(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('enabled',rest_val);
    }

    /**
     * Changes the PWM frequency. The duty cycle is kept unchanged thanks to an
     * automatic pulse width change.
     *
     * @param newval {number} : a floating point number corresponding to the PWM frequency
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_frequency(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('frequency',rest_val);
    }

    /**
     * Returns the PWM frequency in Hz.
     *
     * @return {number} a floating point number corresponding to the PWM frequency in Hz
     *
     * On failure, throws an exception or returns YPwmOutput.FREQUENCY_INVALID.
     */
    async get_frequency()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_FREQUENCY_INVALID;
            }
        }
        return this._frequency;
    }

    /**
     * Changes the PWM period in milliseconds.
     *
     * @param newval {number} : a floating point number corresponding to the PWM period in milliseconds
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_period(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('period',rest_val);
    }

    /**
     * Returns the PWM period in milliseconds.
     *
     * @return {number} a floating point number corresponding to the PWM period in milliseconds
     *
     * On failure, throws an exception or returns YPwmOutput.PERIOD_INVALID.
     */
    async get_period()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PERIOD_INVALID;
            }
        }
        return this._period;
    }

    /**
     * Changes the PWM duty cycle, in per cents.
     *
     * @param newval {number} : a floating point number corresponding to the PWM duty cycle, in per cents
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_dutyCycle(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('dutyCycle',rest_val);
    }

    /**
     * Returns the PWM duty cycle, in per cents.
     *
     * @return {number} a floating point number corresponding to the PWM duty cycle, in per cents
     *
     * On failure, throws an exception or returns YPwmOutput.DUTYCYCLE_INVALID.
     */
    async get_dutyCycle()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_DUTYCYCLE_INVALID;
            }
        }
        return this._dutyCycle;
    }

    /**
     * Changes the PWM pulse length, in milliseconds. A pulse length cannot be longer than period,
     * otherwise it is truncated.
     *
     * @param newval {number} : a floating point number corresponding to the PWM pulse length, in milliseconds
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_pulseDuration(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('pulseDuration',rest_val);
    }

    /**
     * Returns the PWM pulse length in milliseconds, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the PWM pulse length in milliseconds, as
     * a floating point number
     *
     * On failure, throws an exception or returns YPwmOutput.PULSEDURATION_INVALID.
     */
    async get_pulseDuration()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PULSEDURATION_INVALID;
            }
        }
        return this._pulseDuration;
    }

    async get_pwmTransition()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PWMTRANSITION_INVALID;
            }
        }
        return this._pwmTransition;
    }

    async set_pwmTransition(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('pwmTransition',rest_val);
    }

    /**
     * Returns the state of the PWM at device power on.
     *
     * @return {number} either YPwmOutput.ENABLEDATPOWERON_FALSE or YPwmOutput.ENABLEDATPOWERON_TRUE,
     * according to the state of the PWM at device power on
     *
     * On failure, throws an exception or returns YPwmOutput.ENABLEDATPOWERON_INVALID.
     */
    async get_enabledAtPowerOn()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ENABLEDATPOWERON_INVALID;
            }
        }
        return this._enabledAtPowerOn;
    }

    /**
     * Changes the state of the PWM at device power on. Remember to call the matching module saveToFlash()
     * method, otherwise this call will have no effect.
     *
     * @param newval {number} : either YPwmOutput.ENABLEDATPOWERON_FALSE or
     * YPwmOutput.ENABLEDATPOWERON_TRUE, according to the state of the PWM at device power on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_enabledAtPowerOn(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('enabledAtPowerOn',rest_val);
    }

    /**
     * Changes the PWM duty cycle at device power on. Remember to call the matching
     * module saveToFlash() method, otherwise this call will have no effect.
     *
     * @param newval {number} : a floating point number corresponding to the PWM duty cycle at device power on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_dutyCycleAtPowerOn(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('dutyCycleAtPowerOn',rest_val);
    }

    /**
     * Returns the PWMs duty cycle at device power on as a floating point number between 0 and 100
     *
     * @return {number} a floating point number corresponding to the PWMs duty cycle at device power on as
     * a floating point number between 0 and 100
     *
     * On failure, throws an exception or returns YPwmOutput.DUTYCYCLEATPOWERON_INVALID.
     */
    async get_dutyCycleAtPowerOn()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_DUTYCYCLEATPOWERON_INVALID;
            }
        }
        return this._dutyCycleAtPowerOn;
    }

    /**
     * Retrieves a PWM for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the PWM is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmOutput.isOnline() to test if the PWM is
     * indeed online at a given time. In case of ambiguity when looking for
     * a PWM by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the PWM
     *
     * @return {YPwmOutput} a YPwmOutput object allowing you to drive the PWM.
     */
    static FindPwmOutput(func)
    {
        /** @type {YPwmOutput} **/
        let obj;
        obj = YFunction._FindFromCache('PwmOutput', func);
        if (obj == null) {
            obj = new YPwmOutput(YAPI, func);
            YFunction._AddToCache('PwmOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a PWM for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the PWM is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmOutput.isOnline() to test if the PWM is
     * indeed online at a given time. In case of ambiguity when looking for
     * a PWM by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the PWM
     *
     * @return {YPwmOutput} a YPwmOutput object allowing you to drive the PWM.
     */
    static FindPwmOutputInContext(yctx,func)
    {
        /** @type {YPwmOutput} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'PwmOutput', func);
        if (obj == null) {
            obj = new YPwmOutput(yctx, func);
            YFunction._AddToCache('PwmOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Performs a smooth transistion of the pulse duration toward a given value. Any period,
     * frequency, duty cycle or pulse width change will cancel any ongoing transition process.
     *
     * @param ms_target   : new pulse duration at the end of the transition
     *         (floating-point number, representing the pulse duration in milliseconds)
     * @param ms_duration {number} : total duration of the transition, in milliseconds
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async pulseDurationMove(ms_target,ms_duration)
    {
        /** @type {string} **/
        let newval;
        if (ms_target < 0.0) {
            ms_target = 0.0;
        }
        newval = String(Math.round(Math.round(ms_target*65536)))+'ms:'+String(Math.round(ms_duration));
        return await this.set_pwmTransition(newval);
    }

    /**
     * Performs a smooth change of the pulse duration toward a given value.
     *
     * @param target      : new duty cycle at the end of the transition
     *         (floating-point number, between 0 and 1)
     * @param ms_duration {number} : total duration of the transition, in milliseconds
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async dutyCycleMove(target,ms_duration)
    {
        /** @type {string} **/
        let newval;
        if (target < 0.0) {
            target = 0.0;
        }
        if (target > 100.0) {
            target = 100.0;
        }
        newval = String(Math.round(Math.round(target*65536)))+':'+String(Math.round(ms_duration));
        return await this.set_pwmTransition(newval);
    }

    /**
     * Continues the enumeration of PWMs started using yFirstPwmOutput().
     *
     * @return {YPwmOutput} a pointer to a YPwmOutput object, corresponding to
     *         a PWM currently online, or a null pointer
     *         if there are no more PWMs to enumerate.
     */
    /* */ nextPwmOutput()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YPwmOutput.FindPwmOutputInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of PWMs currently accessible.
     * Use the method YPwmOutput.nextPwmOutput() to iterate on
     * next PWMs.
     *
     * @return {YPwmOutput} a pointer to a YPwmOutput object, corresponding to
     *         the first PWM currently online, or a null pointer
     *         if there are none.
     */
    static FirstPwmOutput()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('PwmOutput');
        if(next_hwid == null) return null;
        return YPwmOutput.FindPwmOutput(next_hwid);
    }

    /**
     * Starts the enumeration of PWMs currently accessible.
     * Use the method YPwmOutput.nextPwmOutput() to iterate on
     * next PWMs.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YPwmOutput} a pointer to a YPwmOutput object, corresponding to
     *         the first PWM currently online, or a null pointer
     *         if there are none.
     */
    static FirstPwmOutputInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('PwmOutput');
        if(next_hwid == null) return null;
        return YPwmOutput.FindPwmOutputInContext(yctx, next_hwid);
    }

    //--- (end of YPwmOutput implementation)
}

//--- (PwmOutput functions)

/**
 * comment from .yc definition
 */
export function yFindPwmOutput(func)
{
    return YPwmOutput.FindPwmOutput(func);
}

/**
 * comment from .yc definition
 */
export function yFirstPwmOutput()
{
    return YPwmOutput.FirstPwmOutput();
}

//--- (end of PwmOutput functions)
