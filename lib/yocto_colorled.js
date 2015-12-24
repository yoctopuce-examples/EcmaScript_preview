/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for ColorLed functions
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

//--- (YColorLed return codes)
//--- (end of YColorLed return codes)
//--- (YColorLed definitions)
export const Y_RGBCOLOR_INVALID              = YAPI.INVALID_UINT;
export const Y_HSLCOLOR_INVALID              = YAPI.INVALID_UINT;
export const Y_RGBMOVE_INVALID               = null;
export const Y_HSLMOVE_INVALID               = null;
export const Y_RGBCOLORATPOWERON_INVALID     = YAPI.INVALID_UINT;
export const Y_BLINKSEQSIZE_INVALID          = YAPI.INVALID_UINT;
export const Y_BLINKSEQMAXSIZE_INVALID       = YAPI.INVALID_UINT;
export const Y_BLINKSEQSIGNATURE_INVALID     = YAPI.INVALID_UINT;
export const Y_COMMAND_INVALID               = YAPI.INVALID_STRING;
//--- (end of YColorLed definitions)

//--- (YColorLed class start)
/**
 * YColorLed Class: ColorLed function interface
 *
 * The Yoctopuce application programming interface
 * allows you to drive a color led using RGB coordinates as well as HSL coordinates.
 * The module performs all conversions form RGB to HSL automatically. It is then
 * self-evident to turn on a led with a given hue and to progressively vary its
 * saturation or lightness. If needed, you can find more information on the
 * difference between RGB and HSL in the section following this one.
 */
//--- (end of YColorLed class start)

export class YColorLed extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YColorLed constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'ColorLed';
        /** @member {number} **/
        this._rgbColor                   = Y_RGBCOLOR_INVALID;
        /** @member {number} **/
        this._hslColor                   = Y_HSLCOLOR_INVALID;
        /** @member {YMove} **/
        this._rgbMove                    = Y_RGBMOVE_INVALID;
        /** @member {YMove} **/
        this._hslMove                    = Y_HSLMOVE_INVALID;
        /** @member {number} **/
        this._rgbColorAtPowerOn          = Y_RGBCOLORATPOWERON_INVALID;
        /** @member {number} **/
        this._blinkSeqSize               = Y_BLINKSEQSIZE_INVALID;
        /** @member {number} **/
        this._blinkSeqMaxSize            = Y_BLINKSEQMAXSIZE_INVALID;
        /** @member {number} **/
        this._blinkSeqSignature          = Y_BLINKSEQSIGNATURE_INVALID;
        /** @member {string} **/
        this._command                    = Y_COMMAND_INVALID;
        this.imm_setConst({
            RGBCOLOR_INVALID             : YAPI.INVALID_UINT,
            HSLCOLOR_INVALID             : YAPI.INVALID_UINT,
            RGBCOLORATPOWERON_INVALID    : YAPI.INVALID_UINT,
            BLINKSEQSIZE_INVALID         : YAPI.INVALID_UINT,
            BLINKSEQMAXSIZE_INVALID      : YAPI.INVALID_UINT,
            BLINKSEQSIGNATURE_INVALID    : YAPI.INVALID_UINT,
            COMMAND_INVALID              : YAPI.INVALID_STRING
        });
        //--- (end of YColorLed constructor)
    }

    //--- (YColorLed implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'rgbColor':
            this._rgbColor = parseInt(val);
            return 1;
        case 'hslColor':
            this._hslColor = parseInt(val);
            return 1;
        case 'rgbMove':
            this._rgbMove = val;
            return 1;
        case 'hslMove':
            this._hslMove = val;
            return 1;
        case 'rgbColorAtPowerOn':
            this._rgbColorAtPowerOn = parseInt(val);
            return 1;
        case 'blinkSeqSize':
            this._blinkSeqSize = parseInt(val);
            return 1;
        case 'blinkSeqMaxSize':
            this._blinkSeqMaxSize = parseInt(val);
            return 1;
        case 'blinkSeqSignature':
            this._blinkSeqSignature = parseInt(val);
            return 1;
        case 'command':
            this._command = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the current RGB color of the led.
     *
     * @return {number} an integer corresponding to the current RGB color of the led
     *
     * On failure, throws an exception or returns YColorLed.RGBCOLOR_INVALID.
     */
    async get_rgbColor()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RGBCOLOR_INVALID;
            }
        }
        return this._rgbColor;
    }

    /**
     * Changes the current color of the led, using a RGB color. Encoding is done as follows: 0xRRGGBB.
     *
     * @param newval {number} : an integer corresponding to the current color of the led, using a RGB color
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_rgbColor(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = '0x'+newval.toString(16);
        return await this._setAttr('rgbColor',rest_val);
    }

    /**
     * Returns the current HSL color of the led.
     *
     * @return {number} an integer corresponding to the current HSL color of the led
     *
     * On failure, throws an exception or returns YColorLed.HSLCOLOR_INVALID.
     */
    async get_hslColor()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_HSLCOLOR_INVALID;
            }
        }
        return this._hslColor;
    }

    /**
     * Changes the current color of the led, using a color HSL. Encoding is done as follows: 0xHHSSLL.
     *
     * @param newval {number} : an integer corresponding to the current color of the led, using a color HSL
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_hslColor(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = '0x'+newval.toString(16);
        return await this._setAttr('hslColor',rest_val);
    }

    async get_rgbMove()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RGBMOVE_INVALID;
            }
        }
        return this._rgbMove;
    }

    async set_rgbMove(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval.target)+':'+String(newval.ms);
        return await this._setAttr('rgbMove',rest_val);
    }

    /**
     * Performs a smooth transition in the RGB color space between the current color and a target color.
     *
     * @param rgb_target  : desired RGB color at the end of the transition
     * @param ms_duration {number} : duration of the transition, in millisecond
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async rgbMove(rgb_target,ms_duration)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(rgb_target)+':'+String(ms_duration);
        return await this._setAttr('rgbMove',rest_val);
    }

    async get_hslMove()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_HSLMOVE_INVALID;
            }
        }
        return this._hslMove;
    }

    async set_hslMove(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval.target)+':'+String(newval.ms);
        return await this._setAttr('hslMove',rest_val);
    }

    /**
     * Performs a smooth transition in the HSL color space between the current color and a target color.
     *
     * @param hsl_target  : desired HSL color at the end of the transition
     * @param ms_duration {number} : duration of the transition, in millisecond
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async hslMove(hsl_target,ms_duration)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(hsl_target)+':'+String(ms_duration);
        return await this._setAttr('hslMove',rest_val);
    }

    /**
     * Returns the configured color to be displayed when the module is turned on.
     *
     * @return {number} an integer corresponding to the configured color to be displayed when the module is turned on
     *
     * On failure, throws an exception or returns YColorLed.RGBCOLORATPOWERON_INVALID.
     */
    async get_rgbColorAtPowerOn()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RGBCOLORATPOWERON_INVALID;
            }
        }
        return this._rgbColorAtPowerOn;
    }

    /**
     * Changes the color that the led will display by default when the module is turned on.
     *
     * @param newval {number} : an integer corresponding to the color that the led will display by default
     * when the module is turned on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_rgbColorAtPowerOn(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = '0x'+newval.toString(16);
        return await this._setAttr('rgbColorAtPowerOn',rest_val);
    }

    /**
     * Returns the current length of the blinking sequence
     *
     * @return {number} an integer corresponding to the current length of the blinking sequence
     *
     * On failure, throws an exception or returns YColorLed.BLINKSEQSIZE_INVALID.
     */
    async get_blinkSeqSize()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BLINKSEQSIZE_INVALID;
            }
        }
        return this._blinkSeqSize;
    }

    /**
     * Returns the maximum length of the blinking sequence
     *
     * @return {number} an integer corresponding to the maximum length of the blinking sequence
     *
     * On failure, throws an exception or returns YColorLed.BLINKSEQMAXSIZE_INVALID.
     */
    async get_blinkSeqMaxSize()
    {
        if (this._cacheExpiration == 0) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BLINKSEQMAXSIZE_INVALID;
            }
        }
        return this._blinkSeqMaxSize;
    }

    /**
     * Return the blinking sequence signature. Since blinking
     * sequences cannot be read from the device, this can be used
     * to detect if a specific blinking sequence is already
     * programmed.
     *
     * @return {number} an integer
     *
     * On failure, throws an exception or returns YColorLed.BLINKSEQSIGNATURE_INVALID.
     */
    async get_blinkSeqSignature()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BLINKSEQSIGNATURE_INVALID;
            }
        }
        return this._blinkSeqSignature;
    }

    async get_command()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_COMMAND_INVALID;
            }
        }
        return this._command;
    }

    async set_command(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('command',rest_val);
    }

    /**
     * Retrieves an RGB led for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the RGB led is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YColorLed.isOnline() to test if the RGB led is
     * indeed online at a given time. In case of ambiguity when looking for
     * an RGB led by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the RGB led
     *
     * @return {YColorLed} a YColorLed object allowing you to drive the RGB led.
     */
    static FindColorLed(func, obj_yapi = YAPI)
    {
        /** @type {YColorLed} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'ColorLed', func);
        if (obj == null) {
            obj = new YColorLed(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'ColorLed',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves an RGB led for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the RGB led is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YColorLed.isOnline() to test if the RGB led is
     * indeed online at a given time. In case of ambiguity when looking for
     * an RGB led by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the RGB led
     *
     * @return {YColorLed} a YColorLed object allowing you to drive the RGB led.
     */
    static FindColorLedInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YColorLed} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'ColorLed', func);
        if (obj == null) {
            obj = new YColorLed(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'ColorLed',  func, obj);
        }
        return obj;
    }

    async sendCommand(command)
    {
        return await this.set_command(command);
    }

    /**
     * Add a new transition to the blinking sequence, the move will
     * be performed in the HSL space.
     *
     * @param HSLcolor {number} : desired HSL color when the traisntion is completed
     * @param msDelay {number} : duration of the color transition, in milliseconds.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *         On failure, throws an exception or returns a negative error code.
     */
    async addHslMoveToBlinkSeq(HSLcolor,msDelay)
    {
        return await this.sendCommand('H'+String(Math.round(HSLcolor))+','+String(Math.round(msDelay)));
    }

    /**
     * Add a new transition to the blinking sequence, the move will
     * be performed in the RGB space.
     *
     * @param RGBcolor {number} : desired RGB color when the transition is completed
     * @param msDelay {number} : duration of the color transition, in milliseconds.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *         On failure, throws an exception or returns a negative error code.
     */
    async addRgbMoveToBlinkSeq(RGBcolor,msDelay)
    {
        return await this.sendCommand('R'+String(Math.round(RGBcolor))+','+String(Math.round(msDelay)));
    }

    /**
     * Starts the preprogrammed blinking sequence. The sequence will
     * run in loop until it is stopped by stopBlinkSeq or an explicit
     * change.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *         On failure, throws an exception or returns a negative error code.
     */
    async startBlinkSeq()
    {
        return await this.sendCommand('S');
    }

    /**
     * Stops the preprogrammed blinking sequence.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *         On failure, throws an exception or returns a negative error code.
     */
    async stopBlinkSeq()
    {
        return await this.sendCommand('X');
    }

    /**
     * Resets the preprogrammed blinking sequence.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *         On failure, throws an exception or returns a negative error code.
     */
    async resetBlinkSeq()
    {
        return await this.sendCommand('Z');
    }

    /**
     * Continues the enumeration of RGB leds started using yFirstColorLed().
     *
     * @return {YColorLed} a pointer to a YColorLed object, corresponding to
     *         an RGB led currently online, or a null pointer
     *         if there are no more RGB leds to enumerate.
     */
    /**/ nextColorLed()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YColorLed.FindColorLed(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of RGB leds currently accessible.
     * Use the method YColorLed.nextColorLed() to iterate on
     * next RGB leds.
     *
     * @return {YColorLed} a pointer to a YColorLed object, corresponding to
     *         the first RGB led currently online, or a null pointer
     *         if there are none.
     */
    static FirstColorLed(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('ColorLed');
        if(next_hwid == null) return null;
        return YColorLed.FindColorLed(next_hwid, obj_yapi);
    }

    //--- (end of YColorLed implementation)
}

//--- (ColorLed functions)

/**
 * comment from .yc definition
 */
export function yFindColorLed(func)
{
    return YColorLed.FindColorLed(func);
}

/**
 * comment from .yc definition
 */
export function yFirstColorLed()
{
    return YColorLed.FirstColorLed();
}

//--- (end of ColorLed functions)
