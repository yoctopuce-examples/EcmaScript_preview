/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for AudioOut functions
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

//--- (YAudioOut return codes)
//--- (end of YAudioOut return codes)
//--- (YAudioOut definitions)
export const Y_MUTE_FALSE                    = 0;
export const Y_MUTE_TRUE                     = 1;
export const Y_MUTE_INVALID                  = -1;
export const Y_VOLUME_INVALID                = YAPI.INVALID_UINT;
export const Y_VOLUMERANGE_INVALID           = YAPI.INVALID_STRING;
export const Y_SIGNAL_INVALID                = YAPI.INVALID_INT;
export const Y_NOSIGNALFOR_INVALID           = YAPI.INVALID_INT;
//--- (end of YAudioOut definitions)

//--- (YAudioOut class start)
/**
 * YAudioOut Class: AudioOut function interface
 *
 * The Yoctopuce application programming interface allows you to configure the volume of the outout.
 */
//--- (end of YAudioOut class start)

export class YAudioOut extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YAudioOut constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'AudioOut';
        /** @member {number} **/
        this._volume                     = Y_VOLUME_INVALID;
        /** @member {number} **/
        this._mute                       = Y_MUTE_INVALID;
        /** @member {string} **/
        this._volumeRange                = Y_VOLUMERANGE_INVALID;
        /** @member {number} **/
        this._signal                     = Y_SIGNAL_INVALID;
        /** @member {number} **/
        this._noSignalFor                = Y_NOSIGNALFOR_INVALID;
        this.imm_setConst({
            VOLUME_INVALID               : YAPI.INVALID_UINT,
            MUTE_FALSE                   : 0,
            MUTE_TRUE                    : 1,
            MUTE_INVALID                 : -1,
            VOLUMERANGE_INVALID          : YAPI.INVALID_STRING,
            SIGNAL_INVALID               : YAPI.INVALID_INT,
            NOSIGNALFOR_INVALID          : YAPI.INVALID_INT
        });
        //--- (end of YAudioOut constructor)
    }

    //--- (YAudioOut implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'volume':
            this._volume = parseInt(val);
            return 1;
        case 'mute':
            this._mute = parseInt(val);
            return 1;
        case 'volumeRange':
            this._volumeRange = val;
            return 1;
        case 'signal':
            this._signal = parseInt(val);
            return 1;
        case 'noSignalFor':
            this._noSignalFor = parseInt(val);
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns audio output volume, in per cents.
     *
     * @return {number} an integer corresponding to audio output volume, in per cents
     *
     * On failure, throws an exception or returns YAudioOut.VOLUME_INVALID.
     */
    async get_volume()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_VOLUME_INVALID;
            }
        }
        return this._volume;
    }

    /**
     * Changes audio output volume, in per cents.
     *
     * @param newval {number} : an integer corresponding to audio output volume, in per cents
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_volume(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('volume',rest_val);
    }

    /**
     * Returns the state of the mute function.
     *
     * @return {number} either YAudioOut.MUTE_FALSE or YAudioOut.MUTE_TRUE, according to the state of the mute function
     *
     * On failure, throws an exception or returns YAudioOut.MUTE_INVALID.
     */
    async get_mute()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MUTE_INVALID;
            }
        }
        return this._mute;
    }

    /**
     * Changes the state of the mute function. Remember to call the matching module
     * saveToFlash() method to save the setting permanently.
     *
     * @param newval {number} : either YAudioOut.MUTE_FALSE or YAudioOut.MUTE_TRUE, according to the state
     * of the mute function
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_mute(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('mute',rest_val);
    }

    /**
     * Returns the supported volume range. The low value of the
     * range corresponds to the minimal audible value. To
     * completely mute the sound, use set_mute()
     * instead of the set_volume().
     *
     * @return {string} a string corresponding to the supported volume range
     *
     * On failure, throws an exception or returns YAudioOut.VOLUMERANGE_INVALID.
     */
    async get_volumeRange()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_VOLUMERANGE_INVALID;
            }
        }
        return this._volumeRange;
    }

    /**
     * Returns the detected output current level.
     *
     * @return {number} an integer corresponding to the detected output current level
     *
     * On failure, throws an exception or returns YAudioOut.SIGNAL_INVALID.
     */
    async get_signal()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SIGNAL_INVALID;
            }
        }
        return this._signal;
    }

    /**
     * Returns the number of seconds elapsed without detecting a signal
     *
     * @return {number} an integer corresponding to the number of seconds elapsed without detecting a signal
     *
     * On failure, throws an exception or returns YAudioOut.NOSIGNALFOR_INVALID.
     */
    async get_noSignalFor()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_NOSIGNALFOR_INVALID;
            }
        }
        return this._noSignalFor;
    }

    /**
     * Retrieves an audio output for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the audio output is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAudioOut.isOnline() to test if the audio output is
     * indeed online at a given time. In case of ambiguity when looking for
     * an audio output by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the audio output
     *
     * @return {YAudioOut} a YAudioOut object allowing you to drive the audio output.
     */
    static FindAudioOut(func, obj_yapi = YAPI)
    {
        /** @type {YAudioOut} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'AudioOut', func);
        if (obj == null) {
            obj = new YAudioOut(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'AudioOut',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves an audio output for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the audio output is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAudioOut.isOnline() to test if the audio output is
     * indeed online at a given time. In case of ambiguity when looking for
     * an audio output by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the audio output
     *
     * @return {YAudioOut} a YAudioOut object allowing you to drive the audio output.
     */
    static FindAudioOutInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YAudioOut} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'AudioOut', func);
        if (obj == null) {
            obj = new YAudioOut(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'AudioOut',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of audio outputs started using yFirstAudioOut().
     *
     * @return {YAudioOut} a pointer to a YAudioOut object, corresponding to
     *         an audio output currently online, or a null pointer
     *         if there are no more audio outputs to enumerate.
     */
    /**/ nextAudioOut()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YAudioOut.FindAudioOut(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of audio outputs currently accessible.
     * Use the method YAudioOut.nextAudioOut() to iterate on
     * next audio outputs.
     *
     * @return {YAudioOut} a pointer to a YAudioOut object, corresponding to
     *         the first audio output currently online, or a null pointer
     *         if there are none.
     */
    static FirstAudioOut(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('AudioOut');
        if(next_hwid == null) return null;
        return YAudioOut.FindAudioOut(next_hwid, obj_yapi);
    }

    //--- (end of YAudioOut implementation)
}

//--- (AudioOut functions)

/**
 * comment from .yc definition
 */
export function yFindAudioOut(func)
{
    return YAudioOut.FindAudioOut(func);
}

/**
 * comment from .yc definition
 */
export function yFirstAudioOut()
{
    return YAudioOut.FirstAudioOut();
}

//--- (end of AudioOut functions)
