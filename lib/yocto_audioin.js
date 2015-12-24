/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for AudioIn functions
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

//--- (YAudioIn return codes)
//--- (end of YAudioIn return codes)
//--- (YAudioIn definitions)
export const Y_MUTE_FALSE                    = 0;
export const Y_MUTE_TRUE                     = 1;
export const Y_MUTE_INVALID                  = -1;
export const Y_VOLUME_INVALID                = YAPI.INVALID_UINT;
export const Y_VOLUMERANGE_INVALID           = YAPI.INVALID_STRING;
export const Y_SIGNAL_INVALID                = YAPI.INVALID_INT;
export const Y_NOSIGNALFOR_INVALID           = YAPI.INVALID_INT;
//--- (end of YAudioIn definitions)

//--- (YAudioIn class start)
/**
 * YAudioIn Class: AudioIn function interface
 *
 * The Yoctopuce application programming interface allows you to configure the volume of the input channel.
 */
//--- (end of YAudioIn class start)

export class YAudioIn extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YAudioIn constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'AudioIn';
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
        //--- (end of YAudioIn constructor)
    }

    //--- (YAudioIn implementation)

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
     * Returns audio input gain, in per cents.
     *
     * @return {number} an integer corresponding to audio input gain, in per cents
     *
     * On failure, throws an exception or returns YAudioIn.VOLUME_INVALID.
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
     * Changes audio input gain, in per cents.
     *
     * @param newval {number} : an integer corresponding to audio input gain, in per cents
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
     * @return {number} either YAudioIn.MUTE_FALSE or YAudioIn.MUTE_TRUE, according to the state of the mute function
     *
     * On failure, throws an exception or returns YAudioIn.MUTE_INVALID.
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
     * @param newval {number} : either YAudioIn.MUTE_FALSE or YAudioIn.MUTE_TRUE, according to the state
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
     * On failure, throws an exception or returns YAudioIn.VOLUMERANGE_INVALID.
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
     * Returns the detected input signal level.
     *
     * @return {number} an integer corresponding to the detected input signal level
     *
     * On failure, throws an exception or returns YAudioIn.SIGNAL_INVALID.
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
     * On failure, throws an exception or returns YAudioIn.NOSIGNALFOR_INVALID.
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
     * Retrieves an audio input for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the audio input is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAudioIn.isOnline() to test if the audio input is
     * indeed online at a given time. In case of ambiguity when looking for
     * an audio input by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the audio input
     *
     * @return {YAudioIn} a YAudioIn object allowing you to drive the audio input.
     */
    static FindAudioIn(func, obj_yapi = YAPI)
    {
        /** @type {YAudioIn} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'AudioIn', func);
        if (obj == null) {
            obj = new YAudioIn(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'AudioIn',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves an audio input for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the audio input is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YAudioIn.isOnline() to test if the audio input is
     * indeed online at a given time. In case of ambiguity when looking for
     * an audio input by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the audio input
     *
     * @return {YAudioIn} a YAudioIn object allowing you to drive the audio input.
     */
    static FindAudioInInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YAudioIn} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'AudioIn', func);
        if (obj == null) {
            obj = new YAudioIn(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'AudioIn',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of audio inputs started using yFirstAudioIn().
     *
     * @return {YAudioIn} a pointer to a YAudioIn object, corresponding to
     *         an audio input currently online, or a null pointer
     *         if there are no more audio inputs to enumerate.
     */
    /**/ nextAudioIn()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YAudioIn.FindAudioIn(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of audio inputs currently accessible.
     * Use the method YAudioIn.nextAudioIn() to iterate on
     * next audio inputs.
     *
     * @return {YAudioIn} a pointer to a YAudioIn object, corresponding to
     *         the first audio input currently online, or a null pointer
     *         if there are none.
     */
    static FirstAudioIn(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('AudioIn');
        if(next_hwid == null) return null;
        return YAudioIn.FindAudioIn(next_hwid, obj_yapi);
    }

    //--- (end of YAudioIn implementation)
}

//--- (AudioIn functions)

/**
 * comment from .yc definition
 */
export function yFindAudioIn(func)
{
    return YAudioIn.FindAudioIn(func);
}

/**
 * comment from .yc definition
 */
export function yFirstAudioIn()
{
    return YAudioIn.FirstAudioIn();
}

//--- (end of AudioIn functions)
