/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for CurrentLoopOutput functions
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

//--- (YCurrentLoopOutput return codes)
//--- (end of YCurrentLoopOutput return codes)
//--- (YCurrentLoopOutput definitions)
export const Y_LOOPPOWER_NOPWR               = 0;
export const Y_LOOPPOWER_LOWPWR              = 1;
export const Y_LOOPPOWER_POWEROK             = 2;
export const Y_LOOPPOWER_INVALID             = -1;
export const Y_CURRENT_INVALID               = YAPI.INVALID_DOUBLE;
export const Y_CURRENTTRANSITION_INVALID     = YAPI.INVALID_STRING;
export const Y_CURRENTATSTARTUP_INVALID      = YAPI.INVALID_DOUBLE;
//--- (end of YCurrentLoopOutput definitions)

//--- (YCurrentLoopOutput class start)
/**
 * YCurrentLoopOutput Class: CurrentLoopOutput function interface
 *
 * The Yoctopuce application programming interface allows you to change the value of the 4-20mA
 * output as well as to know the current loop state.
 */
//--- (end of YCurrentLoopOutput class start)

export class YCurrentLoopOutput extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YCurrentLoopOutput constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'CurrentLoopOutput';
        /** @member {number} **/
        this._current                    = Y_CURRENT_INVALID;
        /** @member {string} **/
        this._currentTransition          = Y_CURRENTTRANSITION_INVALID;
        /** @member {number} **/
        this._currentAtStartUp           = Y_CURRENTATSTARTUP_INVALID;
        /** @member {number} **/
        this._loopPower                  = Y_LOOPPOWER_INVALID;
        this.imm_setConst({
            CURRENT_INVALID              : YAPI.INVALID_DOUBLE,
            CURRENTTRANSITION_INVALID    : YAPI.INVALID_STRING,
            CURRENTATSTARTUP_INVALID     : YAPI.INVALID_DOUBLE,
            LOOPPOWER_NOPWR              : 0,
            LOOPPOWER_LOWPWR             : 1,
            LOOPPOWER_POWEROK            : 2,
            LOOPPOWER_INVALID            : -1
        });
        //--- (end of YCurrentLoopOutput constructor)
    }

    //--- (YCurrentLoopOutput implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'current':
            this._current = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'currentTransition':
            this._currentTransition = val;
            return 1;
        case 'currentAtStartUp':
            this._currentAtStartUp = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'loopPower':
            this._loopPower = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Changes the current loop, the valid range is from 3 to 21mA. If the loop is
     * not propely powered, the  target current is not reached and
     * loopPower is set to LOWPWR.
     *
     * @param newval {number} : a floating point number corresponding to the current loop, the valid range
     * is from 3 to 21mA
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_current(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('current',rest_val);
    }

    /**
     * Returns the loop current set point in mA.
     *
     * @return {number} a floating point number corresponding to the loop current set point in mA
     *
     * On failure, throws an exception or returns YCurrentLoopOutput.CURRENT_INVALID.
     */
    async get_current()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CURRENT_INVALID;
            }
        }
        return this._current;
    }

    async get_currentTransition()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CURRENTTRANSITION_INVALID;
            }
        }
        return this._currentTransition;
    }

    async set_currentTransition(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('currentTransition',rest_val);
    }

    /**
     * Changes the loop current at device start up. Remember to call the matching
     * module saveToFlash() method, otherwise this call has no effect.
     *
     * @param newval {number} : a floating point number corresponding to the loop current at device start up
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_currentAtStartUp(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('currentAtStartUp',rest_val);
    }

    /**
     * Returns the current in the loop at device startup, in mA
     *
     * @return {number} a floating point number corresponding to the current in the loop at device startup, in mA
     *
     * On failure, throws an exception or returns YCurrentLoopOutput.CURRENTATSTARTUP_INVALID.
     */
    async get_currentAtStartUp()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CURRENTATSTARTUP_INVALID;
            }
        }
        return this._currentAtStartUp;
    }

    /**
     * Returns the loop powerstate.  POWEROK: the loop
     * is powered. NOPWR: the loop in not powered. LOWPWR: the loop is not
     * powered enough to maintain the current required (insufficient voltage).
     *
     * @return {number} a value among YCurrentLoopOutput.LOOPPOWER_NOPWR,
     * YCurrentLoopOutput.LOOPPOWER_LOWPWR and YCurrentLoopOutput.LOOPPOWER_POWEROK corresponding to the
     * loop powerstate
     *
     * On failure, throws an exception or returns YCurrentLoopOutput.LOOPPOWER_INVALID.
     */
    async get_loopPower()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_LOOPPOWER_INVALID;
            }
        }
        return this._loopPower;
    }

    /**
     * Retrieves a 4-20mA output for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the 4-20mA output is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCurrentLoopOutput.isOnline() to test if the 4-20mA output is
     * indeed online at a given time. In case of ambiguity when looking for
     * a 4-20mA output by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the 4-20mA output
     *
     * @return {YCurrentLoopOutput} a YCurrentLoopOutput object allowing you to drive the 4-20mA output.
     */
    static FindCurrentLoopOutput(func, obj_yapi = YAPI)
    {
        /** @type {YCurrentLoopOutput} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'CurrentLoopOutput', func);
        if (obj == null) {
            obj = new YCurrentLoopOutput(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'CurrentLoopOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a 4-20mA output for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the 4-20mA output is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCurrentLoopOutput.isOnline() to test if the 4-20mA output is
     * indeed online at a given time. In case of ambiguity when looking for
     * a 4-20mA output by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the 4-20mA output
     *
     * @return {YCurrentLoopOutput} a YCurrentLoopOutput object allowing you to drive the 4-20mA output.
     */
    static FindCurrentLoopOutputInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YCurrentLoopOutput} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'CurrentLoopOutput', func);
        if (obj == null) {
            obj = new YCurrentLoopOutput(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'CurrentLoopOutput',  func, obj);
        }
        return obj;
    }

    /**
     * Performs a smooth transistion of current flowing in the loop. Any current explicit
     * change cancels any ongoing transition process.
     *
     * @param mA_target   : new current value at the end of the transition
     *         (floating-point number, representing the transition duration in mA)
     * @param ms_duration {number} : total duration of the transition, in milliseconds
     *
     * @return {number} YAPI.SUCCESS when the call succeeds.
     */
    async currentMove(mA_target,ms_duration)
    {
        /** @type {string} **/
        let newval;
        if (mA_target < 3.0) {
            mA_target  = 3.0;
        }
        if (mA_target > 21.0) {
            mA_target = 21.0;
        }
        newval = String(Math.round(Math.round(mA_target*1000)))+':'+String(Math.round(ms_duration));
        // may throw an exception
        return await this.set_currentTransition(newval);
    }

    /**
     * Continues the enumeration of 4-20mA outputs started using yFirstCurrentLoopOutput().
     *
     * @return {YCurrentLoopOutput} a pointer to a YCurrentLoopOutput object, corresponding to
     *         a 4-20mA output currently online, or a null pointer
     *         if there are no more 4-20mA outputs to enumerate.
     */
    /**/ nextCurrentLoopOutput()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YCurrentLoopOutput.FindCurrentLoopOutput(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of 4-20mA outputs currently accessible.
     * Use the method YCurrentLoopOutput.nextCurrentLoopOutput() to iterate on
     * next 4-20mA outputs.
     *
     * @return {YCurrentLoopOutput} a pointer to a YCurrentLoopOutput object, corresponding to
     *         the first 4-20mA output currently online, or a null pointer
     *         if there are none.
     */
    static FirstCurrentLoopOutput(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('CurrentLoopOutput');
        if(next_hwid == null) return null;
        return YCurrentLoopOutput.FindCurrentLoopOutput(next_hwid, obj_yapi);
    }

    //--- (end of YCurrentLoopOutput implementation)
}

//--- (CurrentLoopOutput functions)

/**
 * comment from .yc definition
 */
export function yFindCurrentLoopOutput(func)
{
    return YCurrentLoopOutput.FindCurrentLoopOutput(func);
}

/**
 * comment from .yc definition
 */
export function yFirstCurrentLoopOutput()
{
    return YCurrentLoopOutput.FirstCurrentLoopOutput();
}

//--- (end of CurrentLoopOutput functions)
