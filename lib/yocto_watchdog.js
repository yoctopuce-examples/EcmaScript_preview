/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Watchdog functions
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

//--- (YWatchdog return codes)
//--- (end of YWatchdog return codes)
//--- (YWatchdog definitions)
export const Y_STATE_A                       = 0;
export const Y_STATE_B                       = 1;
export const Y_STATE_INVALID                 = -1;
export const Y_STATEATPOWERON_UNCHANGED      = 0;
export const Y_STATEATPOWERON_A              = 1;
export const Y_STATEATPOWERON_B              = 2;
export const Y_STATEATPOWERON_INVALID        = -1;
export const Y_OUTPUT_OFF                    = 0;
export const Y_OUTPUT_ON                     = 1;
export const Y_OUTPUT_INVALID                = -1;
export const Y_AUTOSTART_OFF                 = 0;
export const Y_AUTOSTART_ON                  = 1;
export const Y_AUTOSTART_INVALID             = -1;
export const Y_RUNNING_OFF                   = 0;
export const Y_RUNNING_ON                    = 1;
export const Y_RUNNING_INVALID               = -1;
export const Y_MAXTIMEONSTATEA_INVALID       = YAPI.INVALID_LONG;
export const Y_MAXTIMEONSTATEB_INVALID       = YAPI.INVALID_LONG;
export const Y_PULSETIMER_INVALID            = YAPI.INVALID_LONG;
export const Y_DELAYEDPULSETIMER_INVALID     = null;
export const Y_COUNTDOWN_INVALID             = YAPI.INVALID_LONG;
export const Y_TRIGGERDELAY_INVALID          = YAPI.INVALID_LONG;
export const Y_TRIGGERDURATION_INVALID       = YAPI.INVALID_LONG;
//--- (end of YWatchdog definitions)

//--- (YWatchdog class start)
/**
 * YWatchdog Class: Watchdog function interface
 *
 * The watchog function works like a relay and can cause a brief power cut
 * to an appliance after a preset delay to force this appliance to
 * reset. The Watchdog must be called from time to time to reset the
 * timer and prevent the appliance reset.
 * The watchdog can be driven direcly with <i>pulse</i> and <i>delayedpulse</i> methods to switch
 * off an appliance for a given duration.
 */
//--- (end of YWatchdog class start)

export class YWatchdog extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YWatchdog constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Watchdog';
        /** @member {number} **/
        this._state                      = Y_STATE_INVALID;
        /** @member {number} **/
        this._stateAtPowerOn             = Y_STATEATPOWERON_INVALID;
        /** @member {number} **/
        this._maxTimeOnStateA            = Y_MAXTIMEONSTATEA_INVALID;
        /** @member {number} **/
        this._maxTimeOnStateB            = Y_MAXTIMEONSTATEB_INVALID;
        /** @member {number} **/
        this._output                     = Y_OUTPUT_INVALID;
        /** @member {number} **/
        this._pulseTimer                 = Y_PULSETIMER_INVALID;
        /** @member {YDelayedPulse} **/
        this._delayedPulseTimer          = Y_DELAYEDPULSETIMER_INVALID;
        /** @member {number} **/
        this._countdown                  = Y_COUNTDOWN_INVALID;
        /** @member {number} **/
        this._autoStart                  = Y_AUTOSTART_INVALID;
        /** @member {number} **/
        this._running                    = Y_RUNNING_INVALID;
        /** @member {number} **/
        this._triggerDelay               = Y_TRIGGERDELAY_INVALID;
        /** @member {number} **/
        this._triggerDuration            = Y_TRIGGERDURATION_INVALID;
        this.imm_setConst({
            STATE_A                      : 0,
            STATE_B                      : 1,
            STATE_INVALID                : -1,
            STATEATPOWERON_UNCHANGED     : 0,
            STATEATPOWERON_A             : 1,
            STATEATPOWERON_B             : 2,
            STATEATPOWERON_INVALID       : -1,
            MAXTIMEONSTATEA_INVALID      : YAPI.INVALID_LONG,
            MAXTIMEONSTATEB_INVALID      : YAPI.INVALID_LONG,
            OUTPUT_OFF                   : 0,
            OUTPUT_ON                    : 1,
            OUTPUT_INVALID               : -1,
            PULSETIMER_INVALID           : YAPI.INVALID_LONG,
            COUNTDOWN_INVALID            : YAPI.INVALID_LONG,
            AUTOSTART_OFF                : 0,
            AUTOSTART_ON                 : 1,
            AUTOSTART_INVALID            : -1,
            RUNNING_OFF                  : 0,
            RUNNING_ON                   : 1,
            RUNNING_INVALID              : -1,
            TRIGGERDELAY_INVALID         : YAPI.INVALID_LONG,
            TRIGGERDURATION_INVALID      : YAPI.INVALID_LONG
        });
        //--- (end of YWatchdog constructor)
    }

    //--- (YWatchdog implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'state':
            this._state = parseInt(val);
            return 1;
        case 'stateAtPowerOn':
            this._stateAtPowerOn = parseInt(val);
            return 1;
        case 'maxTimeOnStateA':
            this._maxTimeOnStateA = parseInt(val);
            return 1;
        case 'maxTimeOnStateB':
            this._maxTimeOnStateB = parseInt(val);
            return 1;
        case 'output':
            this._output = parseInt(val);
            return 1;
        case 'pulseTimer':
            this._pulseTimer = parseInt(val);
            return 1;
        case 'delayedPulseTimer':
            this._delayedPulseTimer = val;
            return 1;
        case 'countdown':
            this._countdown = parseInt(val);
            return 1;
        case 'autoStart':
            this._autoStart = parseInt(val);
            return 1;
        case 'running':
            this._running = parseInt(val);
            return 1;
        case 'triggerDelay':
            this._triggerDelay = parseInt(val);
            return 1;
        case 'triggerDuration':
            this._triggerDuration = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the state of the watchdog (A for the idle position, B for the active position).
     *
     * @return {number} either YWatchdog.STATE_A or YWatchdog.STATE_B, according to the state of the
     * watchdog (A for the idle position, B for the active position)
     *
     * On failure, throws an exception or returns YWatchdog.STATE_INVALID.
     */
    async get_state()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_STATE_INVALID;
            }
        }
        return this._state;
    }

    /**
     * Changes the state of the watchdog (A for the idle position, B for the active position).
     *
     * @param newval {number} : either YWatchdog.STATE_A or YWatchdog.STATE_B, according to the state of
     * the watchdog (A for the idle position, B for the active position)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_state(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('state',rest_val);
    }

    /**
     * Returns the state of the watchdog at device startup (A for the idle position, B for the active
     * position, UNCHANGED for no change).
     *
     * @return {number} a value among YWatchdog.STATEATPOWERON_UNCHANGED, YWatchdog.STATEATPOWERON_A and
     * YWatchdog.STATEATPOWERON_B corresponding to the state of the watchdog at device startup (A for the
     * idle position, B for the active position, UNCHANGED for no change)
     *
     * On failure, throws an exception or returns YWatchdog.STATEATPOWERON_INVALID.
     */
    async get_stateAtPowerOn()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_STATEATPOWERON_INVALID;
            }
        }
        return this._stateAtPowerOn;
    }

    /**
     * Preset the state of the watchdog at device startup (A for the idle position,
     * B for the active position, UNCHANGED for no modification). Remember to call the matching module saveToFlash()
     * method, otherwise this call will have no effect.
     *
     * @param newval {number} : a value among YWatchdog.STATEATPOWERON_UNCHANGED,
     * YWatchdog.STATEATPOWERON_A and YWatchdog.STATEATPOWERON_B
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_stateAtPowerOn(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('stateAtPowerOn',rest_val);
    }

    /**
     * Retourne the maximum time (ms) allowed for $THEFUNCTIONS$ to stay in state A before automatically
     * switching back in to B state. Zero means no maximum time.
     *
     * @return {number} an integer
     *
     * On failure, throws an exception or returns YWatchdog.MAXTIMEONSTATEA_INVALID.
     */
    async get_maxTimeOnStateA()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MAXTIMEONSTATEA_INVALID;
            }
        }
        return this._maxTimeOnStateA;
    }

    /**
     * Sets the maximum time (ms) allowed for $THEFUNCTIONS$ to stay in state A before automatically
     * switching back in to B state. Use zero for no maximum time.
     *
     * @param newval {number} : an integer
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_maxTimeOnStateA(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('maxTimeOnStateA',rest_val);
    }

    /**
     * Retourne the maximum time (ms) allowed for $THEFUNCTIONS$ to stay in state B before automatically
     * switching back in to A state. Zero means no maximum time.
     *
     * @return {number} an integer
     *
     * On failure, throws an exception or returns YWatchdog.MAXTIMEONSTATEB_INVALID.
     */
    async get_maxTimeOnStateB()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MAXTIMEONSTATEB_INVALID;
            }
        }
        return this._maxTimeOnStateB;
    }

    /**
     * Sets the maximum time (ms) allowed for $THEFUNCTIONS$ to stay in state B before automatically
     * switching back in to A state. Use zero for no maximum time.
     *
     * @param newval {number} : an integer
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_maxTimeOnStateB(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('maxTimeOnStateB',rest_val);
    }

    /**
     * Returns the output state of the watchdog, when used as a simple switch (single throw).
     *
     * @return {number} either YWatchdog.OUTPUT_OFF or YWatchdog.OUTPUT_ON, according to the output state
     * of the watchdog, when used as a simple switch (single throw)
     *
     * On failure, throws an exception or returns YWatchdog.OUTPUT_INVALID.
     */
    async get_output()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_OUTPUT_INVALID;
            }
        }
        return this._output;
    }

    /**
     * Changes the output state of the watchdog, when used as a simple switch (single throw).
     *
     * @param newval {number} : either YWatchdog.OUTPUT_OFF or YWatchdog.OUTPUT_ON, according to the
     * output state of the watchdog, when used as a simple switch (single throw)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_output(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('output',rest_val);
    }

    /**
     * Returns the number of milliseconds remaining before the watchdog is returned to idle position
     * (state A), during a measured pulse generation. When there is no ongoing pulse, returns zero.
     *
     * @return {number} an integer corresponding to the number of milliseconds remaining before the
     * watchdog is returned to idle position
     *         (state A), during a measured pulse generation
     *
     * On failure, throws an exception or returns YWatchdog.PULSETIMER_INVALID.
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

    async set_pulseTimer(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('pulseTimer',rest_val);
    }

    /**
     * Sets the relay to output B (active) for a specified duration, then brings it
     * automatically back to output A (idle state).
     *
     * @param ms_duration {number} : pulse duration, in millisecondes
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async pulse(ms_duration)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(ms_duration);
        return await this._setAttr('pulseTimer',rest_val);
    }

    async get_delayedPulseTimer()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_DELAYEDPULSETIMER_INVALID;
            }
        }
        return this._delayedPulseTimer;
    }

    async set_delayedPulseTimer(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval.target)+':'+String(newval.ms);
        return await this._setAttr('delayedPulseTimer',rest_val);
    }

    /**
     * Schedules a pulse.
     *
     * @param ms_delay {number} : waiting time before the pulse, in millisecondes
     * @param ms_duration {number} : pulse duration, in millisecondes
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async delayedPulse(ms_delay,ms_duration)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(ms_delay)+':'+String(ms_duration);
        return await this._setAttr('delayedPulseTimer',rest_val);
    }

    /**
     * Returns the number of milliseconds remaining before a pulse (delayedPulse() call)
     * When there is no scheduled pulse, returns zero.
     *
     * @return {number} an integer corresponding to the number of milliseconds remaining before a pulse
     * (delayedPulse() call)
     *         When there is no scheduled pulse, returns zero
     *
     * On failure, throws an exception or returns YWatchdog.COUNTDOWN_INVALID.
     */
    async get_countdown()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_COUNTDOWN_INVALID;
            }
        }
        return this._countdown;
    }

    /**
     * Returns the watchdog runing state at module power on.
     *
     * @return {number} either YWatchdog.AUTOSTART_OFF or YWatchdog.AUTOSTART_ON, according to the
     * watchdog runing state at module power on
     *
     * On failure, throws an exception or returns YWatchdog.AUTOSTART_INVALID.
     */
    async get_autoStart()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_AUTOSTART_INVALID;
            }
        }
        return this._autoStart;
    }

    /**
     * Changes the watchdog runningsttae at module power on. Remember to call the
     * saveToFlash() method and then to reboot the module to apply this setting.
     *
     * @param newval {number} : either YWatchdog.AUTOSTART_OFF or YWatchdog.AUTOSTART_ON, according to the
     * watchdog runningsttae at module power on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_autoStart(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('autoStart',rest_val);
    }

    /**
     * Returns the watchdog running state.
     *
     * @return {number} either YWatchdog.RUNNING_OFF or YWatchdog.RUNNING_ON, according to the watchdog running state
     *
     * On failure, throws an exception or returns YWatchdog.RUNNING_INVALID.
     */
    async get_running()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RUNNING_INVALID;
            }
        }
        return this._running;
    }

    /**
     * Changes the running state of the watchdog.
     *
     * @param newval {number} : either YWatchdog.RUNNING_OFF or YWatchdog.RUNNING_ON, according to the
     * running state of the watchdog
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_running(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('running',rest_val);
    }

    /**
     * Resets the watchdog. When the watchdog is running, this function
     * must be called on a regular basis to prevent the watchog to
     * trigger
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async resetWatchdog()
    {
        /** @type {string} **/
        let rest_val;
        rest_val = '1';
        return await this._setAttr('running',rest_val);
    }

    /**
     * Returns  the waiting duration before a reset is automatically triggered by the watchdog, in milliseconds.
     *
     * @return {number} an integer corresponding to  the waiting duration before a reset is automatically
     * triggered by the watchdog, in milliseconds
     *
     * On failure, throws an exception or returns YWatchdog.TRIGGERDELAY_INVALID.
     */
    async get_triggerDelay()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_TRIGGERDELAY_INVALID;
            }
        }
        return this._triggerDelay;
    }

    /**
     * Changes the waiting delay before a reset is triggered by the watchdog, in milliseconds.
     *
     * @param newval {number} : an integer corresponding to the waiting delay before a reset is triggered
     * by the watchdog, in milliseconds
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_triggerDelay(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('triggerDelay',rest_val);
    }

    /**
     * Returns the duration of resets caused by the watchdog, in milliseconds.
     *
     * @return {number} an integer corresponding to the duration of resets caused by the watchdog, in milliseconds
     *
     * On failure, throws an exception or returns YWatchdog.TRIGGERDURATION_INVALID.
     */
    async get_triggerDuration()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_TRIGGERDURATION_INVALID;
            }
        }
        return this._triggerDuration;
    }

    /**
     * Changes the duration of resets caused by the watchdog, in milliseconds.
     *
     * @param newval {number} : an integer corresponding to the duration of resets caused by the watchdog,
     * in milliseconds
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_triggerDuration(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('triggerDuration',rest_val);
    }

    /**
     * Retrieves a watchdog for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the watchdog is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWatchdog.isOnline() to test if the watchdog is
     * indeed online at a given time. In case of ambiguity when looking for
     * a watchdog by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the watchdog
     *
     * @return {YWatchdog} a YWatchdog object allowing you to drive the watchdog.
     */
    static FindWatchdog(func)
    {
        /** @type {YWatchdog} **/
        let obj;
        obj = YFunction._FindFromCache('Watchdog', func);
        if (obj == null) {
            obj = new YWatchdog(YAPI, func);
            YFunction._AddToCache('Watchdog',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a watchdog for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the watchdog is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWatchdog.isOnline() to test if the watchdog is
     * indeed online at a given time. In case of ambiguity when looking for
     * a watchdog by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the watchdog
     *
     * @return {YWatchdog} a YWatchdog object allowing you to drive the watchdog.
     */
    static FindWatchdogInContext(yctx,func)
    {
        /** @type {YWatchdog} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Watchdog', func);
        if (obj == null) {
            obj = new YWatchdog(yctx, func);
            YFunction._AddToCache('Watchdog',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of watchdog started using yFirstWatchdog().
     *
     * @return {YWatchdog} a pointer to a YWatchdog object, corresponding to
     *         a watchdog currently online, or a null pointer
     *         if there are no more watchdog to enumerate.
     */
    /* */ nextWatchdog()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YWatchdog.FindWatchdogInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of watchdog currently accessible.
     * Use the method YWatchdog.nextWatchdog() to iterate on
     * next watchdog.
     *
     * @return {YWatchdog} a pointer to a YWatchdog object, corresponding to
     *         the first watchdog currently online, or a null pointer
     *         if there are none.
     */
    static FirstWatchdog()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Watchdog');
        if(next_hwid == null) return null;
        return YWatchdog.FindWatchdog(next_hwid);
    }

    /**
     * Starts the enumeration of watchdog currently accessible.
     * Use the method YWatchdog.nextWatchdog() to iterate on
     * next watchdog.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YWatchdog} a pointer to a YWatchdog object, corresponding to
     *         the first watchdog currently online, or a null pointer
     *         if there are none.
     */
    static FirstWatchdogInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Watchdog');
        if(next_hwid == null) return null;
        return YWatchdog.FindWatchdogInContext(yctx, next_hwid);
    }

    //--- (end of YWatchdog implementation)
}

//--- (Watchdog functions)

/**
 * comment from .yc definition
 */
export function yFindWatchdog(func)
{
    return YWatchdog.FindWatchdog(func);
}

/**
 * comment from .yc definition
 */
export function yFirstWatchdog()
{
    return YWatchdog.FirstWatchdog();
}

//--- (end of Watchdog functions)
