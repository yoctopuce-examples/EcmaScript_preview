/*********************************************************************
 *
 * $Id: yocto_gyro.js 19704 2015-03-13 06:10:37Z mvuilleu $
 *
 * Implements the high-level API for Gyro functions
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

import { YAPI, YAPI_SUCCESS, YFunction, YModule, YSensor } from 'lib/yocto_api'

//--- (generated code: YQt return codes)
//--- (end of generated code: YQt return codes)
//--- (generated code: YQt definitions)
//--- (end of generated code: YQt definitions)

//--- (generated code: YGyro return codes)
//--- (end of generated code: YGyro return codes)
//--- (generated code: YGyro definitions)
export const Y_XVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_YVALUE_INVALID                = YAPI.INVALID_DOUBLE;
export const Y_ZVALUE_INVALID                = YAPI.INVALID_DOUBLE;
//--- (end of generated code: YGyro definitions)

//--- (generated code: YQt class start)
/**
 * YQt Class: Quaternion interface
 *
 * The Yoctopuce API YQt class provides direct access to the Yocto3D attitude estimation
 * using a quaternion. It is usually not needed to use the YQt class directly, as the
 * YGyro class provides a more convenient higher-level interface.
 */
//--- (end of generated code: YQt class start)
export class YQt extends YFunction
{
    constructor(str_func)
    {
        //--- (generated code: YQt constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Qt';
        //--- (end of generated code: YQt constructor)
    }

    //--- (generated code: YQt implementation)

    /**
     * Retrieves a quaternion component for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the quaternion component is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YQt.isOnline() to test if the quaternion component is
     * indeed online at a given time. In case of ambiguity when looking for
     * a quaternion component by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the quaternion component
     *
     * @return {YQt} a YQt object allowing you to drive the quaternion component.
     */
    static FindQt(func, obj_yapi = YAPI)
    {
        /** @type {YQt} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Qt', func);
        if (obj == null) {
            obj = new YQt(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Qt',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a quaternion component for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the quaternion component is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YQt.isOnline() to test if the quaternion component is
     * indeed online at a given time. In case of ambiguity when looking for
     * a quaternion component by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the quaternion component
     *
     * @return {YQt} a YQt object allowing you to drive the quaternion component.
     */
    static FindQtInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YQt} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Qt', func);
        if (obj == null) {
            obj = new YQt(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Qt',  func, obj);
        }
        return obj;
    }

    /**
     * Continues the enumeration of quaternion components started using yFirstQt().
     *
     * @return {YQt} a pointer to a YQt object, corresponding to
     *         a quaternion component currently online, or a null pointer
     *         if there are no more quaternion components to enumerate.
     */
    /**/ nextQt()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YQt.FindQt(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of quaternion components currently accessible.
     * Use the method YQt.nextQt() to iterate on
     * next quaternion components.
     *
     * @return {YQt} a pointer to a YQt object, corresponding to
     *         the first quaternion component currently online, or a null pointer
     *         if there are none.
     */
    static FirstQt(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Qt');
        if(next_hwid == null) return null;
        return YQt.FindQt(next_hwid, obj_yapi);
    }

    //--- (end of generated code: YQt implementation)
}

//--- (generated code: Qt functions)

/**
 * comment from .yc definition
 */
export function yFindQt(func)
{
    return YQt.FindQt(func);
}

/**
 * comment from .yc definition
 */
export function yFirstQt()
{
    return YQt.FirstQt();
}

//--- (end of generated code: Qt functions)

function yInternalGyroCallback(YQt_obj, str_value)
{
    var gyro = YQt_obj.get_userData();
    if(!gyro) return;
    var idx = parseInt(YQt_obj.get_functionId().slice(2));
    gyro._invokeGyroCallbacks(idx, parseInt(str_value));
}

//--- (generated code: YGyro class start)
/**
 * YGyro Class: Gyroscope function interface
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
//--- (end of generated code: YGyro class start)
export class YGyro extends YFunction
{
    constructor(str_func)
    {
        //--- (generated code: YGyro constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'Gyro';
        /** @member {number} **/
        this._xValue                     = Y_XVALUE_INVALID;
        /** @member {number} **/
        this._yValue                     = Y_YVALUE_INVALID;
        /** @member {number} **/
        this._zValue                     = Y_ZVALUE_INVALID;
        /** @member {number} **/
        this._qt_stamp                   = 0;
        /** @member {YQt} **/
        this._qt_w                       = null;
        /** @member {YQt} **/
        this._qt_x                       = null;
        /** @member {YQt} **/
        this._qt_y                       = null;
        /** @member {YQt} **/
        this._qt_z                       = null;
        /** @member {number} **/
        this._w                          = 0;
        /** @member {number} **/
        this._x                          = 0;
        /** @member {number} **/
        this._y                          = 0;
        /** @member {number} **/
        this._z                          = 0;
        /** @member {number} **/
        this._angles_stamp               = 0;
        /** @member {number} **/
        this._head                       = 0;
        /** @member {number} **/
        this._pitch                      = 0;
        /** @member {number} **/
        this._roll                       = 0;
        /** @member {YQuatCallback} **/
        this._quatCallback               = null;
        /** @member {YAnglesCallback} **/
        this._anglesCallback             = null;
        this.imm_setConst({
            XVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            YVALUE_INVALID               : YAPI.INVALID_DOUBLE,
            ZVALUE_INVALID               : YAPI.INVALID_DOUBLE
        });
        //--- (end of generated code: YGyro constructor)
    }

    //--- (generated code: YGyro implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'xValue':
            this._xValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'yValue':
            this._yValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'zValue':
            this._zValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the angular velocity around the X axis of the device, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the angular velocity around the X axis of
     * the device, as a floating point number
     *
     * On failure, throws an exception or returns YGyro.XVALUE_INVALID.
     */
    async get_xValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_XVALUE_INVALID;
            }
        }
        return this._xValue;
    }

    /**
     * Returns the angular velocity around the Y axis of the device, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the angular velocity around the Y axis of
     * the device, as a floating point number
     *
     * On failure, throws an exception or returns YGyro.YVALUE_INVALID.
     */
    async get_yValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_YVALUE_INVALID;
            }
        }
        return this._yValue;
    }

    /**
     * Returns the angular velocity around the Z axis of the device, as a floating point number.
     *
     * @return {number} a floating point number corresponding to the angular velocity around the Z axis of
     * the device, as a floating point number
     *
     * On failure, throws an exception or returns YGyro.ZVALUE_INVALID.
     */
    async get_zValue()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ZVALUE_INVALID;
            }
        }
        return this._zValue;
    }

    /**
     * Retrieves a gyroscope for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the gyroscope is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YGyro.isOnline() to test if the gyroscope is
     * indeed online at a given time. In case of ambiguity when looking for
     * a gyroscope by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the gyroscope
     *
     * @return {YGyro} a YGyro object allowing you to drive the gyroscope.
     */
    static FindGyro(func, obj_yapi = YAPI)
    {
        /** @type {YGyro} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'Gyro', func);
        if (obj == null) {
            obj = new YGyro(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'Gyro',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a gyroscope for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the gyroscope is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YGyro.isOnline() to test if the gyroscope is
     * indeed online at a given time. In case of ambiguity when looking for
     * a gyroscope by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the gyroscope
     *
     * @return {YGyro} a YGyro object allowing you to drive the gyroscope.
     */
    static FindGyroInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YGyro} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'Gyro', func);
        if (obj == null) {
            obj = new YGyro(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'Gyro',  func, obj);
        }
        return obj;
    }

    async _loadQuaternion()
    {
        /** @type {number} **/
        let now_stamp;
        /** @type {number} **/
        let age_ms;
        now_stamp = ((this._yapi.GetTickCount()) & (0x7FFFFFFF));
        age_ms = (((now_stamp - this._qt_stamp)) & (0x7FFFFFFF));
        if ((age_ms >= 10) || (this._qt_stamp == 0)) {
            if (await this.load(10) != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            if (this._qt_stamp == 0) {
                this._qt_w = await YQt.FindQt(this._serial+'.qt1');
                this._qt_x = await YQt.FindQt(this._serial+'.qt2');
                this._qt_y = await YQt.FindQt(this._serial+'.qt3');
                this._qt_z = await YQt.FindQt(this._serial+'.qt4');
            }
            if (await this._qt_w.load(9) != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            if (await this._qt_x.load(9) != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            if (await this._qt_y.load(9) != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            if (await this._qt_z.load(9) != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            this._w = await this._qt_w.get_currentValue();
            this._x = await this._qt_x.get_currentValue();
            this._y = await this._qt_y.get_currentValue();
            this._z = await this._qt_z.get_currentValue();
            this._qt_stamp = now_stamp;
        }
        return YAPI_SUCCESS;
    }

    async _loadAngles()
    {
        /** @type {number} **/
        let sqw;
        /** @type {number} **/
        let sqx;
        /** @type {number} **/
        let sqy;
        /** @type {number} **/
        let sqz;
        /** @type {number} **/
        let norm;
        /** @type {number} **/
        let delta;
        // may throw an exception
        if (await this._loadQuaternion() != YAPI_SUCCESS) {
            return YAPI_DEVICE_NOT_FOUND;
        }
        if (this._angles_stamp != this._qt_stamp) {
            sqw = this._w * this._w;
            sqx = this._x * this._x;
            sqy = this._y * this._y;
            sqz = this._z * this._z;
            norm = sqx + sqy + sqz + sqw;
            delta = this._y * this._w - this._x * this._z;
            if (delta > 0.499 * norm) {
                this._pitch = 90.0;
                this._head  = Math.round(2.0 * 1800.0/Math.PI * Math.atan2(this._x,this._w)) / 10.0;
            } else {
                if (delta < -0.499 * norm) {
                    this._pitch = -90.0;
                    this._head  = Math.round(-2.0 * 1800.0/Math.PI * Math.atan2(this._x,this._w)) / 10.0;
                } else {
                    this._roll  = Math.round(1800.0/Math.PI * Math.atan2(2.0 * (this._w * this._x + this._y * this._z),sqw - sqx - sqy + sqz)) / 10.0;
                    this._pitch = Math.round(1800.0/Math.PI * Math.asin(2.0 * delta / norm)) / 10.0;
                    this._head  = Math.round(1800.0/Math.PI * Math.atan2(2.0 * (this._x * this._y + this._z * this._w),sqw + sqx - sqy - sqz)) / 10.0;
                }
            }
            this._angles_stamp = this._qt_stamp;
        }
        return YAPI_SUCCESS;
    }

    /**
     * Returns the estimated roll angle, based on the integration of
     * gyroscopic measures combined with acceleration and
     * magnetic field measurements.
     * The axis corresponding to the roll angle can be mapped to any
     * of the device X, Y or Z physical directions using methods of
     * the class YRefFrame.
     *
     * @return {number} a floating-point number corresponding to roll angle
     *         in degrees, between -180 and +180.
     */
    async get_roll()
    {
        await this._loadAngles();
        return this._roll;
    }

    /**
     * Returns the estimated pitch angle, based on the integration of
     * gyroscopic measures combined with acceleration and
     * magnetic field measurements.
     * The axis corresponding to the pitch angle can be mapped to any
     * of the device X, Y or Z physical directions using methods of
     * the class YRefFrame.
     *
     * @return {number} a floating-point number corresponding to pitch angle
     *         in degrees, between -90 and +90.
     */
    async get_pitch()
    {
        await this._loadAngles();
        return this._pitch;
    }

    /**
     * Returns the estimated heading angle, based on the integration of
     * gyroscopic measures combined with acceleration and
     * magnetic field measurements.
     * The axis corresponding to the heading can be mapped to any
     * of the device X, Y or Z physical directions using methods of
     * the class YRefFrame.
     *
     * @return {number} a floating-point number corresponding to heading
     *         in degrees, between 0 and 360.
     */
    async get_heading()
    {
        await this._loadAngles();
        return this._head;
    }

    /**
     * Returns the w component (real part) of the quaternion
     * describing the device estimated orientation, based on the
     * integration of gyroscopic measures combined with acceleration and
     * magnetic field measurements.
     *
     * @return {number} a floating-point number corresponding to the w
     *         component of the quaternion.
     */
    async get_quaternionW()
    {
        await this._loadQuaternion();
        return this._w;
    }

    /**
     * Returns the x component of the quaternion
     * describing the device estimated orientation, based on the
     * integration of gyroscopic measures combined with acceleration and
     * magnetic field measurements. The x component is
     * mostly correlated with rotations on the roll axis.
     *
     * @return {number} a floating-point number corresponding to the x
     *         component of the quaternion.
     */
    async get_quaternionX()
    {
        await this._loadQuaternion();
        return this._x;
    }

    /**
     * Returns the y component of the quaternion
     * describing the device estimated orientation, based on the
     * integration of gyroscopic measures combined with acceleration and
     * magnetic field measurements. The y component is
     * mostly correlated with rotations on the pitch axis.
     *
     * @return {number} a floating-point number corresponding to the y
     *         component of the quaternion.
     */
    async get_quaternionY()
    {
        await this._loadQuaternion();
        return this._y;
    }

    /**
     * Returns the x component of the quaternion
     * describing the device estimated orientation, based on the
     * integration of gyroscopic measures combined with acceleration and
     * magnetic field measurements. The x component is
     * mostly correlated with changes of heading.
     *
     * @return {number} a floating-point number corresponding to the z
     *         component of the quaternion.
     */
    async get_quaternionZ()
    {
        await this._loadQuaternion();
        return this._z;
    }

    /**
     * Registers a callback function that will be invoked each time that the estimated
     * device orientation has changed. The call frequency is typically around 95Hz during a move.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered.
     * For good responsiveness, remember to call one of these two functions periodically.
     * To unregister a callback, pass a null pointer as argument.
     *
     * @param callback {YQuatCallback} : the callback function to invoke, or a null pointer.
     *         The callback function should take five arguments:
     *         the YGyro object of the turning device, and the floating
     *         point values of the four components w, x, y and z
     *         (as floating-point numbers).
     * @noreturn
     */
    async registerQuaternionCallback(callback)
    {
        this._quatCallback = callback;
        if (callback != null) {
            if (await this._loadQuaternion() != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            await this._qt_w.set_userData(this);
            await this._qt_x.set_userData(this);
            await this._qt_y.set_userData(this);
            await this._qt_z.set_userData(this);
            await this._qt_w.registerValueCallback(yInternalGyroCallback);
            await this._qt_x.registerValueCallback(yInternalGyroCallback);
            await this._qt_y.registerValueCallback(yInternalGyroCallback);
            await this._qt_z.registerValueCallback(yInternalGyroCallback);
        } else {
            if (!(this._anglesCallback != null)) {
                await this._qt_w.registerValueCallback(null);
                await this._qt_x.registerValueCallback(null);
                await this._qt_y.registerValueCallback(null);
                await this._qt_z.registerValueCallback(null);
            }
        }
        return 0;
    }

    /**
     * Registers a callback function that will be invoked each time that the estimated
     * device orientation has changed. The call frequency is typically around 95Hz during a move.
     * The callback is invoked only during the execution of ySleep or yHandleEvents.
     * This provides control over the time when the callback is triggered.
     * For good responsiveness, remember to call one of these two functions periodically.
     * To unregister a callback, pass a null pointer as argument.
     *
     * @param callback {YAnglesCallback} : the callback function to invoke, or a null pointer.
     *         The callback function should take four arguments:
     *         the YGyro object of the turning device, and the floating
     *         point values of the three angles roll, pitch and heading
     *         in degrees (as floating-point numbers).
     * @noreturn
     */
    async registerAnglesCallback(callback)
    {
        this._anglesCallback = callback;
        if (callback != null) {
            if (await this._loadQuaternion() != YAPI_SUCCESS) {
                return YAPI_DEVICE_NOT_FOUND;
            }
            await this._qt_w.set_userData(this);
            await this._qt_x.set_userData(this);
            await this._qt_y.set_userData(this);
            await this._qt_z.set_userData(this);
            await this._qt_w.registerValueCallback(yInternalGyroCallback);
            await this._qt_x.registerValueCallback(yInternalGyroCallback);
            await this._qt_y.registerValueCallback(yInternalGyroCallback);
            await this._qt_z.registerValueCallback(yInternalGyroCallback);
        } else {
            if (!(this._quatCallback != null)) {
                await this._qt_w.registerValueCallback(null);
                await this._qt_x.registerValueCallback(null);
                await this._qt_y.registerValueCallback(null);
                await this._qt_z.registerValueCallback(null);
            }
        }
        return 0;
    }

    async _invokeGyroCallbacks(qtIndex,qtValue)
    {
        switch(qtIndex - 1) {
        case 0:
            this._w = qtValue;
            break;
        case 1:
            this._x = qtValue;
            break;
        case 2:
            this._y = qtValue;
            break;
        case 3:
            this._z = qtValue;
            break;
        }
        if (qtIndex < 4) {
            return 0;
        }
        this._qt_stamp = ((this._yapi.GetTickCount()) & (0x7FFFFFFF));
        if (this._quatCallback != null) {
            await this._quatCallback(this, this._w, this._x, this._y, this._z);
        }
        if (this._anglesCallback != null) {
            await this._loadAngles();
            await this._anglesCallback(this, this._roll, this._pitch, this._head);
        }
        return 0;
    }

    /**
     * Continues the enumeration of gyroscopes started using yFirstGyro().
     *
     * @return {YGyro} a pointer to a YGyro object, corresponding to
     *         a gyroscope currently online, or a null pointer
     *         if there are no more gyroscopes to enumerate.
     */
    /**/ nextGyro()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YGyro.FindGyro(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of gyroscopes currently accessible.
     * Use the method YGyro.nextGyro() to iterate on
     * next gyroscopes.
     *
     * @return {YGyro} a pointer to a YGyro object, corresponding to
     *         the first gyro currently online, or a null pointer
     *         if there are none.
     */
    static FirstGyro(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('Gyro');
        if(next_hwid == null) return null;
        return YGyro.FindGyro(next_hwid, obj_yapi);
    }

    //--- (end of generated code: YGyro implementation)
}

//--- (generated code: Gyro functions)

/**
 * comment from .yc definition
 */
export function yFindGyro(func)
{
    return YGyro.FindGyro(func);
}

/**
 * comment from .yc definition
 */
export function yFirstGyro()
{
    return YGyro.FirstGyro();
}

//--- (end of generated code: Gyro functions)

