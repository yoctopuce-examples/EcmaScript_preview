/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for PwmInput functions
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

//--- (YPwmInput return codes)
//--- (end of YPwmInput return codes)
//--- (YPwmInput definitions)
export const Y_PWMREPORTMODE_PWM_DUTYCYCLE   = 0;
export const Y_PWMREPORTMODE_PWM_FREQUENCY   = 1;
export const Y_PWMREPORTMODE_PWM_PULSEDURATION = 2;
export const Y_PWMREPORTMODE_PWM_EDGECOUNT   = 3;
export const Y_PWMREPORTMODE_INVALID         = -1;
export const Y_DUTYCYCLE_INVALID             = YAPI.INVALID_DOUBLE;
export const Y_PULSEDURATION_INVALID         = YAPI.INVALID_DOUBLE;
export const Y_FREQUENCY_INVALID             = YAPI.INVALID_DOUBLE;
export const Y_PERIOD_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_PULSECOUNTER_INVALID          = YAPI.INVALID_LONG;
export const Y_PULSETIMER_INVALID            = YAPI.INVALID_LONG;
//--- (end of YPwmInput definitions)

//--- (YPwmInput class start)
/**
 * YPwmInput Class: PwmInput function interface
 *
 * The Yoctopuce class YPwmInput allows you to read and configure Yoctopuce PWM
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to configure the signal parameter used to transmit
 * information: the duty cycle, the frequency or the pulse width.
 */
//--- (end of YPwmInput class start)

export class YPwmInput extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YPwmInput constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'PwmInput';
        /** @member {number} **/
        this._dutyCycle                  = Y_DUTYCYCLE_INVALID;
        /** @member {number} **/
        this._pulseDuration              = Y_PULSEDURATION_INVALID;
        /** @member {number} **/
        this._frequency                  = Y_FREQUENCY_INVALID;
        /** @member {number} **/
        this._period                     = Y_PERIOD_INVALID;
        /** @member {number} **/
        this._pulseCounter               = Y_PULSECOUNTER_INVALID;
        /** @member {number} **/
        this._pulseTimer                 = Y_PULSETIMER_INVALID;
        /** @member {number} **/
        this._pwmReportMode              = Y_PWMREPORTMODE_INVALID;
        this.imm_setConst({
            DUTYCYCLE_INVALID            : YAPI.INVALID_DOUBLE,
            PULSEDURATION_INVALID        : YAPI.INVALID_DOUBLE,
            FREQUENCY_INVALID            : YAPI.INVALID_DOUBLE,
            PERIOD_INVALID               : YAPI.INVALID_DOUBLE,
            PULSECOUNTER_INVALID         : YAPI.INVALID_LONG,
            PULSETIMER_INVALID           : YAPI.INVALID_LONG,
            PWMREPORTMODE_PWM_DUTYCYCLE  : 0,
            PWMREPORTMODE_PWM_FREQUENCY  : 1,
            PWMREPORTMODE_PWM_PULSEDURATION : 2,
            PWMREPORTMODE_PWM_EDGECOUNT  : 3,
            PWMREPORTMODE_INVALID        : -1
        });
        //--- (end of YPwmInput constructor)
    }

    //--- (YPwmInput implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'dutyCycle':
            this._dutyCycle = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'pulseDuration':
            this._pulseDuration = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'frequency':
            this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'period':
            this._period = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'pulseCounter':
            this._pulseCounter = parseInt(val);
            return 1;
        case 'pulseTimer':
            this._pulseTimer = parseInt(val);
            return 1;
        case 'pwmReportMode':
            this._pwmReportMode = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the PWM duty cycle, in per cents.
     *
     * @return {number} a floating point number corresponding to the PWM duty cycle, in per cents
     *
     * On failure, throws an exception or returns YPwmInput.DUTYCYCLE_INVALID.
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
     * Returns the PWM pulse length in milliseconds, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the PWM pulse length in milliseconds, as
     * a floating point number
     *
     * On failure, throws an exception or returns YPwmInput.PULSEDURATION_INVALID.
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

    /**
     * Returns the PWM frequency in Hz.
     *
     * @return {number} a floating point number corresponding to the PWM frequency in Hz
     *
     * On failure, throws an exception or returns YPwmInput.FREQUENCY_INVALID.
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
     * Returns the PWM period in milliseconds.
     *
     * @return {number} a floating point number corresponding to the PWM period in milliseconds
     *
     * On failure, throws an exception or returns YPwmInput.PERIOD_INVALID.
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
     * Returns the pulse counter value. Actually that
     * counter is incremented twice per period. That counter is
     * limited  to 1 billion
     *
     * @return {number} an integer corresponding to the pulse counter value
     *
     * On failure, throws an exception or returns YPwmInput.PULSECOUNTER_INVALID.
     */
    async get_pulseCounter()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PULSECOUNTER_INVALID;
            }
        }
        return this._pulseCounter;
    }

    async set_pulseCounter(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('pulseCounter',rest_val);
    }

    /**
     * Returns the timer of the pulses counter (ms)
     *
     * @return {number} an integer corresponding to the timer of the pulses counter (ms)
     *
     * On failure, throws an exception or returns YPwmInput.PULSETIMER_INVALID.
     */
    async get_pulseTimer()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PULSETIMER_INVALID;
            }
        }
        return this._pulseTimer;
    }

    /**
     * Returns the parameter (frequency/duty cycle, pulse width, edges count) returned by the
     * get_currentValue function and callbacks. Attention
     *
     * @return {number} a value among YPwmInput.PWMREPORTMODE_PWM_DUTYCYCLE,
     * YPwmInput.PWMREPORTMODE_PWM_FREQUENCY, YPwmInput.PWMREPORTMODE_PWM_PULSEDURATION and
     * YPwmInput.PWMREPORTMODE_PWM_EDGECOUNT corresponding to the parameter (frequency/duty cycle, pulse
     * width, edges count) returned by the get_currentValue function and callbacks
     *
     * On failure, throws an exception or returns YPwmInput.PWMREPORTMODE_INVALID.
     */
    async get_pwmReportMode()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PWMREPORTMODE_INVALID;
            }
        }
        return this._pwmReportMode;
    }

    /**
     * Modifies the  parameter  type (frequency/duty cycle, pulse width, or edge count) returned by the
     * get_currentValue function and callbacks.
     * The edge count value is limited to the 6 lowest digits. For values greater than one million, use
     * get_pulseCounter().
     *
     * @param newval {number} : a value among YPwmInput.PWMREPORTMODE_PWM_DUTYCYCLE,
     * YPwmInput.PWMREPORTMODE_PWM_FREQUENCY, YPwmInput.PWMREPORTMODE_PWM_PULSEDURATION and
     * YPwmInput.PWMREPORTMODE_PWM_EDGECOUNT
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_pwmReportMode(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('pwmReportMode',rest_val);
    }

    /**
     * Retrieves a PWM input for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the PWM input is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmInput.isOnline() to test if the PWM input is
     * indeed online at a given time. In case of ambiguity when looking for
     * a PWM input by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the PWM input
     *
     * @return {YPwmInput} a YPwmInput object allowing you to drive the PWM input.
     */
    static FindPwmInput(func)
    {
        /** @type {YPwmInput} **/
        let obj;
        obj = YFunction._FindFromCache('PwmInput', func);
        if (obj == null) {
            obj = new YPwmInput(YAPI, func);
            YFunction._AddToCache('PwmInput',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a PWM input for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the PWM input is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YPwmInput.isOnline() to test if the PWM input is
     * indeed online at a given time. In case of ambiguity when looking for
     * a PWM input by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the PWM input
     *
     * @return {YPwmInput} a YPwmInput object allowing you to drive the PWM input.
     */
    static FindPwmInputInContext(yctx,func)
    {
        /** @type {YPwmInput} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'PwmInput', func);
        if (obj == null) {
            obj = new YPwmInput(yctx, func);
            YFunction._AddToCache('PwmInput',  func, obj);
        }
        return obj;
    }

    /**
     * Returns the pulse counter value as well as its timer.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async resetCounter()
    {
        return await this.set_pulseCounter(0);
    }

    /**
     * Continues the enumeration of PWM inputs started using yFirstPwmInput().
     *
     * @return {YPwmInput} a pointer to a YPwmInput object, corresponding to
     *         a PWM input currently online, or a null pointer
     *         if there are no more PWM inputs to enumerate.
     */
    /* */ nextPwmInput()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YPwmInput.FindPwmInputInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of PWM inputs currently accessible.
     * Use the method YPwmInput.nextPwmInput() to iterate on
     * next PWM inputs.
     *
     * @return {YPwmInput} a pointer to a YPwmInput object, corresponding to
     *         the first PWM input currently online, or a null pointer
     *         if there are none.
     */
    static FirstPwmInput()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('PwmInput');
        if(next_hwid == null) return null;
        return YPwmInput.FindPwmInput(next_hwid);
    }

    /**
     * Starts the enumeration of PWM inputs currently accessible.
     * Use the method YPwmInput.nextPwmInput() to iterate on
     * next PWM inputs.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YPwmInput} a pointer to a YPwmInput object, corresponding to
     *         the first PWM input currently online, or a null pointer
     *         if there are none.
     */
    static FirstPwmInputInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('PwmInput');
        if(next_hwid == null) return null;
        return YPwmInput.FindPwmInputInContext(yctx, next_hwid);
    }

    //--- (end of YPwmInput implementation)
}

//--- (PwmInput functions)

/**
 * comment from .yc definition
 */
export function yFindPwmInput(func)
{
    return YPwmInput.FindPwmInput(func);
}

/**
 * comment from .yc definition
 */
export function yFirstPwmInput()
{
    return YPwmInput.FirstPwmInput();
}

//--- (end of PwmInput functions)
