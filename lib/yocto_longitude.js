/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Longitude functions
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

//--- (YLongitude return codes)
//--- (end of YLongitude return codes)
//--- (YLongitude definitions)
//--- (end of YLongitude definitions)

//--- (YLongitude class start)
/**
 * YLongitude Class: Longitude function interface
 *
 * The Yoctopuce class YLongitude allows you to read the longitude from Yoctopuce
 * geolocalization sensors. It inherits from the YSensor class the core functions to
 * read measurements, register callback functions, access the autonomous
 * datalogger.
 */
//--- (end of YLongitude class start)

export class YLongitude extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YLongitude constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Longitude';
        //--- (end of YLongitude constructor)
    }

    //--- (YLongitude implementation)

    /**
     * Retrieves a longitude sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the longitude sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLongitude.isOnline() to test if the longitude sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a longitude sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the longitude sensor
     *
     * @return {YLongitude} a YLongitude object allowing you to drive the longitude sensor.
     */
    static FindLongitude(func, obj_yapi = YAPI)
    {
        /** @type {YLongitude} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Longitude', func);
        if (obj == null) {
            obj = new YLongitude(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Longitude',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a longitude sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the longitude sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YLongitude.isOnline() to test if the longitude sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a longitude sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the longitude sensor
     *
     * @return {YLongitude} a YLongitude object allowing you to drive the longitude sensor.
     */
    static FindLongitudeInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YLongitude} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Longitude', func);
        if (obj == null) {
            obj = new YLongitude(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Longitude',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of longitude sensors started using yFirstLongitude().
     *
     * @return {YLongitude} a pointer to a YLongitude object, corresponding to
     *         a longitude sensor currently online, or a null pointer
     *         if there are no more longitude sensors to enumerate.
     */
    /**/ nextLongitude()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YLongitude.FindLongitude(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of longitude sensors currently accessible.
     * Use the method YLongitude.nextLongitude() to iterate on
     * next longitude sensors.
     *
     * @return {YLongitude} a pointer to a YLongitude object, corresponding to
     *         the first longitude sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstLongitude(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Longitude');
        if(next_hwid == null) return null;
        return YLongitude.FindLongitude(next_hwid, obj_yapi);
    }

    //--- (end of YLongitude implementation)
}

//--- (Longitude functions)

/**
 * comment from .yc definition
 */
export function yFindLongitude(func)
{
    return YLongitude.FindLongitude(func);
}

/**
 * comment from .yc definition
 */
export function yFirstLongitude()
{
    return YLongitude.FirstLongitude();
}

//--- (end of Longitude functions)
