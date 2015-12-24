/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Tilt functions
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

//--- (YTilt return codes)
//--- (end of YTilt return codes)
//--- (YTilt definitions)
export const Y_AXIS_X                        = 0;
export const Y_AXIS_Y                        = 1;
export const Y_AXIS_Z                        = 2;
export const Y_AXIS_INVALID                  = -1;
//--- (end of YTilt definitions)

//--- (YTilt class start)
/**
 * YTilt Class: Tilt function interface
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
//--- (end of YTilt class start)

export class YTilt extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YTilt constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Tilt';
        /** @member {number} **/
        this._axis                       = Y_AXIS_INVALID;
        this.imm_setConst({
            AXIS_X                       : 0,
            AXIS_Y                       : 1,
            AXIS_Z                       : 2,
            AXIS_INVALID                 : -1
        });
        //--- (end of YTilt constructor)
    }

    //--- (YTilt implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'axis':
            this._axis = parseInt(val);
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
     * Retrieves a tilt sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the tilt sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YTilt.isOnline() to test if the tilt sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a tilt sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the tilt sensor
     *
     * @return {YTilt} a YTilt object allowing you to drive the tilt sensor.
     */
    static FindTilt(func)
    {
        /** @type {YTilt} **/
        let obj;
        obj = YFunction._FindFromCache('Tilt', func);
        if (obj == null) {
            obj = new YTilt(YAPI, func);
            YFunction._AddToCache('Tilt',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a tilt sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the tilt sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YTilt.isOnline() to test if the tilt sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a tilt sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the tilt sensor
     *
     * @return {YTilt} a YTilt object allowing you to drive the tilt sensor.
     */
    static FindTiltInContext(yctx,func)
    {
        /** @type {YTilt} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Tilt', func);
        if (obj == null) {
            obj = new YTilt(yctx, func);
            YFunction._AddToCache('Tilt',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of tilt sensors started using yFirstTilt().
     *
     * @return {YTilt} a pointer to a YTilt object, corresponding to
     *         a tilt sensor currently online, or a null pointer
     *         if there are no more tilt sensors to enumerate.
     */
    /* */ nextTilt()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YTilt.FindTiltInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of tilt sensors currently accessible.
     * Use the method YTilt.nextTilt() to iterate on
     * next tilt sensors.
     *
     * @return {YTilt} a pointer to a YTilt object, corresponding to
     *         the first tilt sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstTilt()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Tilt');
        if(next_hwid == null) return null;
        return YTilt.FindTilt(next_hwid);
    }

    /**
     * Starts the enumeration of tilt sensors currently accessible.
     * Use the method YTilt.nextTilt() to iterate on
     * next tilt sensors.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YTilt} a pointer to a YTilt object, corresponding to
     *         the first tilt sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstTiltInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Tilt');
        if(next_hwid == null) return null;
        return YTilt.FindTiltInContext(yctx, next_hwid);
    }

    //--- (end of YTilt implementation)
}

//--- (Tilt functions)

/**
 * comment from .yc definition
 */
export function yFindTilt(func)
{
    return YTilt.FindTilt(func);
}

/**
 * comment from .yc definition
 */
export function yFirstTilt()
{
    return YTilt.FirstTilt();
}

//--- (end of Tilt functions)
