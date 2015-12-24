/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Voc functions
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

//--- (YVoc return codes)
//--- (end of YVoc return codes)
//--- (YVoc definitions)
//--- (end of YVoc definitions)

//--- (YVoc class start)
/**
 * YVoc Class: Voc function interface
 *
 * The Yoctopuce class YVoc allows you to read and configure Yoctopuce Volatile Organic
 * Compound sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 */
//--- (end of YVoc class start)

export class YVoc extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YVoc constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Voc';
        //--- (end of YVoc constructor)
    }

    //--- (YVoc implementation)

    /**
     * Retrieves a Volatile Organic Compound sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the Volatile Organic Compound sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YVoc.isOnline() to test if the Volatile Organic Compound sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a Volatile Organic Compound sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the Volatile Organic Compound sensor
     *
     * @return {YVoc} a YVoc object allowing you to drive the Volatile Organic Compound sensor.
     */
    static FindVoc(func, obj_yapi = YAPI)
    {
        /** @type {YVoc} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Voc', func);
        if (obj == null) {
            obj = new YVoc(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Voc',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a Volatile Organic Compound sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the Volatile Organic Compound sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YVoc.isOnline() to test if the Volatile Organic Compound sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a Volatile Organic Compound sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the Volatile Organic Compound sensor
     *
     * @return {YVoc} a YVoc object allowing you to drive the Volatile Organic Compound sensor.
     */
    static FindVocInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YVoc} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Voc', func);
        if (obj == null) {
            obj = new YVoc(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Voc',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of Volatile Organic Compound sensors started using yFirstVoc().
     *
     * @return {YVoc} a pointer to a YVoc object, corresponding to
     *         a Volatile Organic Compound sensor currently online, or a null pointer
     *         if there are no more Volatile Organic Compound sensors to enumerate.
     */
    /**/ nextVoc()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YVoc.FindVoc(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of Volatile Organic Compound sensors currently accessible.
     * Use the method YVoc.nextVoc() to iterate on
     * next Volatile Organic Compound sensors.
     *
     * @return {YVoc} a pointer to a YVoc object, corresponding to
     *         the first Volatile Organic Compound sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstVoc(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Voc');
        if(next_hwid == null) return null;
        return YVoc.FindVoc(next_hwid, obj_yapi);
    }

    //--- (end of YVoc implementation)
}

//--- (Voc functions)

/**
 * comment from .yc definition
 */
export function yFindVoc(func)
{
    return YVoc.FindVoc(func);
}

/**
 * comment from .yc definition
 */
export function yFirstVoc()
{
    return YVoc.FirstVoc();
}

//--- (end of Voc functions)
