/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for CarbonDioxide functions
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

//--- (YCarbonDioxide return codes)
//--- (end of YCarbonDioxide return codes)
//--- (YCarbonDioxide definitions)
export const Y_ABCPERIOD_INVALID             = YAPI.INVALID_INT;
export const Y_COMMAND_INVALID               = YAPI.INVALID_STRING;
//--- (end of YCarbonDioxide definitions)

//--- (YCarbonDioxide class start)
/**
 * YCarbonDioxide Class: CarbonDioxide function interface
 *
 * The Yoctopuce class YCarbonDioxide allows you to read and configure Yoctopuce CO2
 * sensors. It inherits from YSensor class the core functions to read measurements,
 * register callback functions, access to the autonomous datalogger.
 * This class adds the ability to perform manual calibration if reuired.
 */
//--- (end of YCarbonDioxide class start)

export class YCarbonDioxide extends YSensor
{
    constructor(obj_yapi, str_func)
    {
        //--- (YCarbonDioxide constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'CarbonDioxide';
        /** @member {number} **/
        this._abcPeriod                  = Y_ABCPERIOD_INVALID;
        /** @member {string} **/
        this._command                    = Y_COMMAND_INVALID;
        this.imm_setConst({
            ABCPERIOD_INVALID            : YAPI.INVALID_INT,
            COMMAND_INVALID              : YAPI.INVALID_STRING
        });
        //--- (end of YCarbonDioxide constructor)
    }

    //--- (YCarbonDioxide implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'abcPeriod':
            this._abcPeriod = parseInt(val);
            return 1;
        case 'command':
            this._command = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the Automatic Baseline Calibration period, in hours. A negative value
     * means that automatic baseline calibration is disabled.
     *
     * @return {number} an integer corresponding to the Automatic Baseline Calibration period, in hours
     *
     * On failure, throws an exception or returns YCarbonDioxide.ABCPERIOD_INVALID.
     */
    async get_abcPeriod()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ABCPERIOD_INVALID;
            }
        }
        return this._abcPeriod;
    }

    /**
     * Modifies Automatic Baseline Calibration period, in hours. If you need
     * to disable automatic baseline calibration (for instance when using the
     * sensor in an environment that is constantly above 400ppm CO2), set the
     * period to -1. Remember to call the saveToFlash() method of the
     * module if the modification must be kept.
     *
     * @param newval {number} : an integer
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_abcPeriod(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('abcPeriod',rest_val);
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
     * Retrieves a CO2 sensor for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the CO2 sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCarbonDioxide.isOnline() to test if the CO2 sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a CO2 sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the CO2 sensor
     *
     * @return {YCarbonDioxide} a YCarbonDioxide object allowing you to drive the CO2 sensor.
     */
    static FindCarbonDioxide(func, obj_yapi = YAPI)
    {
        /** @type {YCarbonDioxide} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'CarbonDioxide', func);
        if (obj == null) {
            obj = new YCarbonDioxide(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'CarbonDioxide',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a CO2 sensor for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the CO2 sensor is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YCarbonDioxide.isOnline() to test if the CO2 sensor is
     * indeed online at a given time. In case of ambiguity when looking for
     * a CO2 sensor by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the CO2 sensor
     *
     * @return {YCarbonDioxide} a YCarbonDioxide object allowing you to drive the CO2 sensor.
     */
    static FindCarbonDioxideInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YCarbonDioxide} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'CarbonDioxide', func);
        if (obj == null) {
            obj = new YCarbonDioxide(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'CarbonDioxide',  func, obj);
        }
        return obj;
    }

    /**
     * Triggers a baseline calibration at standard CO2 ambiant level (400ppm).
     * It is normally not necessary to manually calibrate the sensor, because
     * the built-in automatic baseline calibration procedure will automatically
     * fix any long-term drift based on the lowest level of CO2 observed over the
     * automatic calibration period. However, if you disable automatic baseline
     * calibration, you may want to manually trigger a calibration from time to
     * time. Before starting a baseline calibration, make sure to put the sensor
     * in a standard environment (e.g. outside in fresh air) at around 400ppm.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async triggetBaselineCalibration()
    {
        return await this.set_command('BC');
    }

    /**
     * Triggers a zero calibration of the sensor on carbon dioxide-free air.
     * It is normally not necessary to manually calibrate the sensor, because
     * the built-in automatic baseline calibration procedure will automatically
     * fix any long-term drift based on the lowest level of CO2 observed over the
     * automatic calibration period. However, if you disable automatic baseline
     * calibration, you may want to manually trigger a calibration from time to
     * time. Before starting a zero calibration, you should circulate carbon
     * dioxide-free air within the sensor for a minute or two, using a small pipe
     * connected to the sensor. Please contact support@yoctopuce.com for more details
     * on the zero calibration procedure.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async triggetZeroCalibration()
    {
        return await this.set_command('ZC');
    }

    /**
     * Continues the enumeration of CO2 sensors started using yFirstCarbonDioxide().
     *
     * @return {YCarbonDioxide} a pointer to a YCarbonDioxide object, corresponding to
     *         a CO2 sensor currently online, or a null pointer
     *         if there are no more CO2 sensors to enumerate.
     */
    /**/ nextCarbonDioxide()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YCarbonDioxide.FindCarbonDioxide(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of CO2 sensors currently accessible.
     * Use the method YCarbonDioxide.nextCarbonDioxide() to iterate on
     * next CO2 sensors.
     *
     * @return {YCarbonDioxide} a pointer to a YCarbonDioxide object, corresponding to
     *         the first CO2 sensor currently online, or a null pointer
     *         if there are none.
     */
    static FirstCarbonDioxide(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('CarbonDioxide');
        if(next_hwid == null) return null;
        return YCarbonDioxide.FindCarbonDioxide(next_hwid, obj_yapi);
    }

    //--- (end of YCarbonDioxide implementation)
}

//--- (CarbonDioxide functions)

/**
 * comment from .yc definition
 */
export function yFindCarbonDioxide(func)
{
    return YCarbonDioxide.FindCarbonDioxide(func);
}

/**
 * comment from .yc definition
 */
export function yFirstCarbonDioxide()
{
    return YCarbonDioxide.FirstCarbonDioxide();
}

//--- (end of CarbonDioxide functions)
