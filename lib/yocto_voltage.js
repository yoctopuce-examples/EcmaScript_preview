/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for Voltage functions
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

//--- (YVoltage return codes)
//--- (end of YVoltage return codes)
//--- (YVoltage definitions)
//--- (end of YVoltage definitions)

//--- (YVoltage class start)
/**
 * YVoltage Class: Voltage function interface
 *
 * The Yoctopuce class YVoltage allows you to read and configure Yoctopuce voltage
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 */
//--- (end of YVoltage class start)

export class YVoltage extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YVoltage constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Voltage';
        //--- (end of YVoltage constructor)
    }

    //--- (YVoltage implementation)

    /**
     * Retrieves a voltage sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the voltage sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YVoltage.isOnline() to test if the voltage sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a voltage sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the voltage sensor
     *
     * @return {YVoltage} a YVoltage object allowing you to drive the voltage sensor.
     */
    static FindVoltage(func)
    {
        /** @type {YVoltage} **/
        let obj;
        obj = YFunction._FindFromCache('Voltage', func);
        if (obj == null) {
            obj = new YVoltage(YAPI, func);
            YFunction._AddToCache('Voltage',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a voltage sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the voltage sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YVoltage.isOnline() to test if the voltage sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a voltage sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the voltage sensor
     *
     * @return {YVoltage} a YVoltage object allowing you to drive the voltage sensor.
     */
    static FindVoltageInContext(yctx,func)
    {
        /** @type {YVoltage} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'Voltage', func);
        if (obj == null) {
            obj = new YVoltage(yctx, func);
            YFunction._AddToCache('Voltage',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of voltage sensors started using yFirstVoltage().
     *
     * @return {YVoltage} a pointer to a YVoltage object, corresponding to
     *         a voltage sensor currently online, or a null pointer
     *         if there are no more voltage sensors to enumerate.
     */
    /* */ nextVoltage()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YVoltage.FindVoltageInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of voltage sensors currently accessible.
     * Use the method YVoltage.nextVoltage() to iterate on
     * next voltage sensors.
     *
     * @return {YVoltage} a pointer to a YVoltage object, corresponding to
     *         the first voltage sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstVoltage()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('Voltage');
        if(next_hwid == null) return null;
        return YVoltage.FindVoltage(next_hwid);
    }

    /**
     * Starts the enumeration of voltage sensors currently accessible.
     * Use the method YVoltage.nextVoltage() to iterate on
     * next voltage sensors.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YVoltage} a pointer to a YVoltage object, corresponding to
     *         the first voltage sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstVoltageInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('Voltage');
        if(next_hwid == null) return null;
        return YVoltage.FindVoltageInContext(yctx, next_hwid);
    }

    //--- (end of YVoltage implementation)
}

//--- (Voltage functions)

/**
 * comment from .yc definition
 */
export function yFindVoltage(func)
{
    return YVoltage.FindVoltage(func);
}

/**
 * comment from .yc definition
 */
export function yFirstVoltage()
{
    return YVoltage.FirstVoltage();
}

//--- (end of Voltage functions)
