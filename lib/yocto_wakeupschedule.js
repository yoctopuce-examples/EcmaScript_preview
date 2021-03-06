/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for WakeUpSchedule functions
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

//--- (YWakeUpSchedule return codes)
//--- (end of YWakeUpSchedule return codes)
//--- (YWakeUpSchedule definitions)
export const Y_MINUTESA_INVALID              = YAPI.INVALID_UINT;
export const Y_MINUTESB_INVALID              = YAPI.INVALID_UINT;
export const Y_HOURS_INVALID                 = YAPI.INVALID_UINT;
export const Y_WEEKDAYS_INVALID              = YAPI.INVALID_UINT;
export const Y_MONTHDAYS_INVALID             = YAPI.INVALID_UINT;
export const Y_MONTHS_INVALID                = YAPI.INVALID_UINT;
export const Y_NEXTOCCURENCE_INVALID         = YAPI.INVALID_LONG;
//--- (end of YWakeUpSchedule definitions)

//--- (YWakeUpSchedule class start)
/**
 * YWakeUpSchedule Class: WakeUpSchedule function interface
 *
 * The WakeUpSchedule function implements a wake up condition. The wake up time is
 * specified as a set of months and/or days and/or hours and/or minutes when the
 * wake up should happen.
 */
//--- (end of YWakeUpSchedule class start)

export class YWakeUpSchedule extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YWakeUpSchedule constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'WakeUpSchedule';
        /** @member {number} **/
        this._minutesA                   = Y_MINUTESA_INVALID;
        /** @member {number} **/
        this._minutesB                   = Y_MINUTESB_INVALID;
        /** @member {number} **/
        this._hours                      = Y_HOURS_INVALID;
        /** @member {number} **/
        this._weekDays                   = Y_WEEKDAYS_INVALID;
        /** @member {number} **/
        this._monthDays                  = Y_MONTHDAYS_INVALID;
        /** @member {number} **/
        this._months                     = Y_MONTHS_INVALID;
        /** @member {number} **/
        this._nextOccurence              = Y_NEXTOCCURENCE_INVALID;
        this.imm_setConst({
            MINUTESA_INVALID             : YAPI.INVALID_UINT,
            MINUTESB_INVALID             : YAPI.INVALID_UINT,
            HOURS_INVALID                : YAPI.INVALID_UINT,
            WEEKDAYS_INVALID             : YAPI.INVALID_UINT,
            MONTHDAYS_INVALID            : YAPI.INVALID_UINT,
            MONTHS_INVALID               : YAPI.INVALID_UINT,
            NEXTOCCURENCE_INVALID        : YAPI.INVALID_LONG
        });
        //--- (end of YWakeUpSchedule constructor)
    }

    //--- (YWakeUpSchedule implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'minutesA':
            this._minutesA = parseInt(val);
            return 1;
        case 'minutesB':
            this._minutesB = parseInt(val);
            return 1;
        case 'hours':
            this._hours = parseInt(val);
            return 1;
        case 'weekDays':
            this._weekDays = parseInt(val);
            return 1;
        case 'monthDays':
            this._monthDays = parseInt(val);
            return 1;
        case 'months':
            this._months = parseInt(val);
            return 1;
        case 'nextOccurence':
            this._nextOccurence = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the minutes in the 00-29 interval of each hour scheduled for wake up.
     *
     * @return {number} an integer corresponding to the minutes in the 00-29 interval of each hour
     * scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.MINUTESA_INVALID.
     */
    async get_minutesA()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MINUTESA_INVALID;
            }
        }
        return this._minutesA;
    }

    /**
     * Changes the minutes in the 00-29 interval when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the minutes in the 00-29 interval when a wake
     * up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_minutesA(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('minutesA',rest_val);
    }

    /**
     * Returns the minutes in the 30-59 intervalof each hour scheduled for wake up.
     *
     * @return {number} an integer corresponding to the minutes in the 30-59 intervalof each hour scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.MINUTESB_INVALID.
     */
    async get_minutesB()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MINUTESB_INVALID;
            }
        }
        return this._minutesB;
    }

    /**
     * Changes the minutes in the 30-59 interval when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the minutes in the 30-59 interval when a wake
     * up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_minutesB(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('minutesB',rest_val);
    }

    /**
     * Returns the hours scheduled for wake up.
     *
     * @return {number} an integer corresponding to the hours scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.HOURS_INVALID.
     */
    async get_hours()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_HOURS_INVALID;
            }
        }
        return this._hours;
    }

    /**
     * Changes the hours when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the hours when a wake up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_hours(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('hours',rest_val);
    }

    /**
     * Returns the days of the week scheduled for wake up.
     *
     * @return {number} an integer corresponding to the days of the week scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.WEEKDAYS_INVALID.
     */
    async get_weekDays()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_WEEKDAYS_INVALID;
            }
        }
        return this._weekDays;
    }

    /**
     * Changes the days of the week when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the days of the week when a wake up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_weekDays(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('weekDays',rest_val);
    }

    /**
     * Returns the days of the month scheduled for wake up.
     *
     * @return {number} an integer corresponding to the days of the month scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.MONTHDAYS_INVALID.
     */
    async get_monthDays()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MONTHDAYS_INVALID;
            }
        }
        return this._monthDays;
    }

    /**
     * Changes the days of the month when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the days of the month when a wake up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_monthDays(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('monthDays',rest_val);
    }

    /**
     * Returns the months scheduled for wake up.
     *
     * @return {number} an integer corresponding to the months scheduled for wake up
     *
     * On failure, throws an exception or returns YWakeUpSchedule.MONTHS_INVALID.
     */
    async get_months()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MONTHS_INVALID;
            }
        }
        return this._months;
    }

    /**
     * Changes the months when a wake up must take place.
     *
     * @param newval {number} : an integer corresponding to the months when a wake up must take place
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_months(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('months',rest_val);
    }

    /**
     * Returns the date/time (seconds) of the next wake up occurence
     *
     * @return {number} an integer corresponding to the date/time (seconds) of the next wake up occurence
     *
     * On failure, throws an exception or returns YWakeUpSchedule.NEXTOCCURENCE_INVALID.
     */
    async get_nextOccurence()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_NEXTOCCURENCE_INVALID;
            }
        }
        return this._nextOccurence;
    }

    /**
     * Retrieves a wake up schedule for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the wake up schedule is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWakeUpSchedule.isOnline() to test if the wake up schedule is
     * indeed online at a given time. In case of ambiguity when looking for
     * a wake up schedule by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the wake up schedule
     *
     * @return {YWakeUpSchedule} a YWakeUpSchedule object allowing you to drive the wake up schedule.
     */
    static FindWakeUpSchedule(func)
    {
        /** @type {YWakeUpSchedule} **/
        let obj;
        obj = YFunction._FindFromCache('WakeUpSchedule', func);
        if (obj == null) {
            obj = new YWakeUpSchedule(YAPI, func);
            YFunction._AddToCache('WakeUpSchedule',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a wake up schedule for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the wake up schedule is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YWakeUpSchedule.isOnline() to test if the wake up schedule is
     * indeed online at a given time. In case of ambiguity when looking for
     * a wake up schedule by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the wake up schedule
     *
     * @return {YWakeUpSchedule} a YWakeUpSchedule object allowing you to drive the wake up schedule.
     */
    static FindWakeUpScheduleInContext(yctx,func)
    {
        /** @type {YWakeUpSchedule} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'WakeUpSchedule', func);
        if (obj == null) {
            obj = new YWakeUpSchedule(yctx, func);
            YFunction._AddToCache('WakeUpSchedule',  func, obj);
        }
        return obj;
    }

    /**
     * Returns all the minutes of each hour that are scheduled for wake up.
     */
    async get_minutes()
    {
        /** @type {number} **/
        let res;
        // may throw an exception
        res = await this.get_minutesB();
        res = ((res) << (30));
        res = res + await this.get_minutesA();
        return res;
    }

    /**
     * Changes all the minutes where a wake up must take place.
     *
     * @param bitmap {number} : Minutes 00-59 of each hour scheduled for wake up.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_minutes(bitmap)
    {
        await this.set_minutesA(((bitmap) & (0x3fffffff)));
        bitmap = ((bitmap) >> (30));
        return await this.set_minutesB(((bitmap) & (0x3fffffff)));
    }

    /**
     * Continues the enumeration of wake up schedules started using yFirstWakeUpSchedule().
     *
     * @return {YWakeUpSchedule} a pointer to a YWakeUpSchedule object, corresponding to
     *         a wake up schedule currently online, or a null pointer
     *         if there are no more wake up schedules to enumerate.
     */
    /* */ nextWakeUpSchedule()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YWakeUpSchedule.FindWakeUpScheduleInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of wake up schedules currently accessible.
     * Use the method YWakeUpSchedule.nextWakeUpSchedule() to iterate on
     * next wake up schedules.
     *
     * @return {YWakeUpSchedule} a pointer to a YWakeUpSchedule object, corresponding to
     *         the first wake up schedule currently online, or a null pointer
     *         if there are none.
     */
    static FirstWakeUpSchedule()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('WakeUpSchedule');
        if(next_hwid == null) return null;
        return YWakeUpSchedule.FindWakeUpSchedule(next_hwid);
    }

    /**
     * Starts the enumeration of wake up schedules currently accessible.
     * Use the method YWakeUpSchedule.nextWakeUpSchedule() to iterate on
     * next wake up schedules.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YWakeUpSchedule} a pointer to a YWakeUpSchedule object, corresponding to
     *         the first wake up schedule currently online, or a null pointer
     *         if there are none.
     */
    static FirstWakeUpScheduleInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('WakeUpSchedule');
        if(next_hwid == null) return null;
        return YWakeUpSchedule.FindWakeUpScheduleInContext(yctx, next_hwid);
    }

    //--- (end of YWakeUpSchedule implementation)
}

//--- (WakeUpSchedule functions)

/**
 * comment from .yc definition
 */
export function yFindWakeUpSchedule(func)
{
    return YWakeUpSchedule.FindWakeUpSchedule(func);
}

/**
 * comment from .yc definition
 */
export function yFirstWakeUpSchedule()
{
    return YWakeUpSchedule.FirstWakeUpSchedule();
}

//--- (end of WakeUpSchedule functions)
