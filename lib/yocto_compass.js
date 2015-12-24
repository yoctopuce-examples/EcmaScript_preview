/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Compass functions
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

//--- (YCompass return codes)
//--- (end of YCompass return codes)
//--- (YCompass definitions)
export const Y_AXIS_X                        = 0;
export const Y_AXIS_Y                        = 1;
export const Y_AXIS_Z                        = 2;
export const Y_AXIS_INVALID                  = -1;
export const Y_MAGNETICHEADING_INVALID       = YAPI.INVALID_DOUBLE;
//--- (end of YCompass definitions)

//--- (YCompass class start)
/**
 * YCompass Class: Compass function interface
 *
 * The YSensor class is the parent class for all Yoctopuce sensors. It can be
 * used to read the current value and unit of any sensor, read the min/max
 * value, configure autonomous recording frequency and access recorded data.
 * It also provide a function to register a callback invoked each time the
 * observed value changes, or at a predefined interval. Using this class rather
 * than a specific subclass makes it possible to create generic applications
 * that work with any Yoctopuce sensor, even those that do not yet exist.
 * Note: The YAnButton class is the only analog input which does not inherit
 * from YSensor.
 */
//--- (end of YCompass class start)

export class YCompass extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YCompass constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Compass';
        /** @member {number} **/
        this._axis                       = Y_AXIS_INVALID;
        /** @member {number} **/
        this._magneticHeading            = Y_MAGNETICHEADING_INVALID;
        this.imm_setConst({
            AXIS_X                       : 0,
            AXIS_Y                       : 1,
            AXIS_Z                       : 2,
            AXIS_INVALID                 : -1,
            MAGNETICHEADING_INVALID      : YAPI.INVALID_DOUBLE
        });
        //--- (end of YCompass constructor)
    }

    //--- (YCompass implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'axis':
            this._axis = parseInt(val);
            return 1;
        case 'magneticHeading':
            this._magneticHeading = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    async get_axis()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_AXIS_INVALID;
            }
        }
        return this._axis;
    }

    /**
     * Returns the magnetic heading, regardless of the configured bearing.
     *
     * @return {number} a floating point number corresponding to the magnetic heading, regardless of the
     * configured bearing
     *
     * On failure, throws an exception or returns YCompass.MAGNETICHEADING_INVALID.
     */
    async get_magneticHeading()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MAGNETICHEADING_INVALID;
            }
        }
        return this._magneticHeading;
    }

    /**
     * Retrieves a compass for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the compass is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCompass.isOnline() to test if the compass is
     * indeed online at a given time. In case of ambiguity when looking for
     * a compass by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the compass
     *
     * @return {YCompass} a YCompass object allowing you to drive the compass.
     */
    static FindCompass(func)
    {
        /** @type {YCompass} **/
        let obj;
        obj = YFunction._FindFromCache('Compass', func);
        if (obj == null) {
            obj = new YCompass(YAPI, func);
            YFunction._AddToCache('Compass',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a compass for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the compass is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCompass.isOnline() to test if the compass is
     * indeed online at a given time. In case of ambiguity when looking for
     * a compass by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the compass
     *
     * @return {YCompass} a YCompass object allowing you to drive the compass.
     */
    static FindCompassInContext(yctx,func)
    {
        /** @type {YCompass} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Compass', func);
        if (obj == null) {
            obj = new YCompass(yctx, func);
            YFunction._AddToCache('Compass',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of compasses started using yFirstCompass().
     *
     * @return {YCompass} a pointer to a YCompass object, corresponding to
     *         a compass currently online, or a null pointer
     *         if there are no more compasses to enumerate.
     */
    /* */ nextCompass()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YCompass.FindCompassInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of compasses currently accessible.
     * Use the method YCompass.nextCompass() to iterate on
     * next compasses.
     *
     * @return {YCompass} a pointer to a YCompass object, corresponding to
     *         the first compass currently online, or a null pointer
     *         if there are none.
     */
    static FirstCompass()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Compass');
        if(next_hwid == null) return null;
        return YCompass.FindCompass(next_hwid);
    }

    /**
     * Starts the enumeration of compasses currently accessible.
     * Use the method YCompass.nextCompass() to iterate on
     * next compasses.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YCompass} a pointer to a YCompass object, corresponding to
     *         the first compass currently online, or a null pointer
     *         if there are none.
     */
    static FirstCompassInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Compass');
        if(next_hwid == null) return null;
        return YCompass.FindCompassInContext(yctx, next_hwid);
    }

    //--- (end of YCompass implementation)
}

//--- (Compass functions)

/**
 * comment from .yc definition
 */
export function yFindCompass(func)
{
    return YCompass.FindCompass(func);
}

/**
 * comment from .yc definition
 */
export function yFirstCompass()
{
    return YCompass.FirstCompass();
}

//--- (end of Compass functions)
