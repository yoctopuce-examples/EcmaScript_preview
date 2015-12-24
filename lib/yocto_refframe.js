/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for RefFrame functions
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

//--- (YRefFrame return codes)
//--- (end of YRefFrame return codes)
//--- (YRefFrame definitions)
export const Y_MOUNTPOSITION_BOTTOM          = 0;
export const Y_MOUNTPOSITION_TOP             = 1;
export const Y_MOUNTPOSITION_FRONT           = 2;
export const Y_MOUNTPOSITION_REAR            = 3;
export const Y_MOUNTPOSITION_RIGHT           = 4;
export const Y_MOUNTPOSITION_LEFT            = 5;
export const Y_MOUNTORIENTATION_TWELVE       = 0;
export const Y_MOUNTORIENTATION_THREE        = 1;
export const Y_MOUNTORIENTATION_SIX          = 2;
export const Y_MOUNTORIENTATION_NINE         = 3;
export const Y_MOUNTPOS_INVALID              = YAPI.INVALID_UINT;
export const Y_BEARING_INVALID               = YAPI.INVALID_DOUBLE;
export const Y_CALIBRATIONPARAM_INVALID      = YAPI.INVALID_STRING;
//--- (end of YRefFrame definitions)

//--- (YRefFrame class start)
/**
 * YRefFrame Class: Reference frame configuration
 *
 * This class is used to setup the base orientation of the Yocto-3D, so that
 * the orientation functions, relative to the earth surface plane, use
 * the proper reference frame. The class also implements a tridimensional
 * sensor calibration process, which can compensate for local variations
 * of standard gravity and improve the precision of the tilt sensors.
 */
//--- (end of YRefFrame class start)

export class YRefFrame extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YRefFrame constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'RefFrame';
        /** @member {number} **/
        this._mountPos                   = Y_MOUNTPOS_INVALID;
        /** @member {number} **/
        this._bearing                    = Y_BEARING_INVALID;
        /** @member {string} **/
        this._calibrationParam           = Y_CALIBRATIONPARAM_INVALID;
        /** @member {number} **/
        this._calibStage                 = 0;
        /** @member {string} **/
        this._calibStageHint             = '';
        /** @member {number} **/
        this._calibStageProgress         = 0;
        /** @member {number} **/
        this._calibProgress              = 0;
        /** @member {string} **/
        this._calibLogMsg                = '';
        /** @member {string} **/
        this._calibSavedParams           = '';
        /** @member {number} **/
        this._calibCount                 = 0;
        /** @member {number} **/
        this._calibInternalPos           = 0;
        /** @member {number} **/
        this._calibPrevTick              = 0;
        /** @member {number[]} **/
        this._calibOrient                = [];
        /** @member {number[]} **/
        this._calibDataAccX              = [];
        /** @member {number[]} **/
        this._calibDataAccY              = [];
        /** @member {number[]} **/
        this._calibDataAccZ              = [];
        /** @member {number[]} **/
        this._calibDataAcc               = [];
        /** @member {number} **/
        this._calibAccXOfs               = 0;
        /** @member {number} **/
        this._calibAccYOfs               = 0;
        /** @member {number} **/
        this._calibAccZOfs               = 0;
        /** @member {number} **/
        this._calibAccXScale             = 0;
        /** @member {number} **/
        this._calibAccYScale             = 0;
        /** @member {number} **/
        this._calibAccZScale             = 0;
        this.imm_setConst({
            MOUNTPOS_INVALID             : YAPI.INVALID_UINT,
            BEARING_INVALID              : YAPI.INVALID_DOUBLE,
            CALIBRATIONPARAM_INVALID     : YAPI.INVALID_STRING,
            MOUNTPOSITION_BOTTOM         : 0,
            MOUNTPOSITION_TOP            : 1,
            MOUNTPOSITION_FRONT          : 2,
            MOUNTPOSITION_REAR           : 3,
            MOUNTPOSITION_RIGHT          : 4,
            MOUNTPOSITION_LEFT           : 5,
            MOUNTORIENTATION_TWELVE      : 0,
            MOUNTORIENTATION_THREE       : 1,
            MOUNTORIENTATION_SIX         : 2,
            MOUNTORIENTATION_NINE        : 3
        });
        //--- (end of YRefFrame constructor)
    }

    //--- (YRefFrame implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'mountPos':
            this._mountPos = parseInt(val);
            return 1;
        case 'bearing':
            this._bearing = Math.round(val * 1000.0 / 65536.0) / 1000.0;
            return 1;
        case 'calibrationParam':
            this._calibrationParam = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    async get_mountPos()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_MOUNTPOS_INVALID;
            }
        }
        return this._mountPos;
    }

    async set_mountPos(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('mountPos',rest_val);
    }

    /**
     * Changes the reference bearing used by the compass. The relative bearing
     * indicated by the compass is the difference between the measured magnetic
     * heading and the reference bearing indicated here.
     *
     * For instance, if you setup as reference bearing the value of the earth
     * magnetic declination, the compass will provide the orientation relative
     * to the geographic North.
     *
     * Similarly, when the sensor is not mounted along the standard directions
     * because it has an additional yaw angle, you can set this angle in the reference
     * bearing so that the compass provides the expected natural direction.
     *
     * Remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * @param newval {number} : a floating point number corresponding to the reference bearing used by the compass
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_bearing(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return await this._setAttr('bearing',rest_val);
    }

    /**
     * Returns the reference bearing used by the compass. The relative bearing
     * indicated by the compass is the difference between the measured magnetic
     * heading and the reference bearing indicated here.
     *
     * @return {number} a floating point number corresponding to the reference bearing used by the compass
     *
     * On failure, throws an exception or returns YRefFrame.BEARING_INVALID.
     */
    async get_bearing()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_BEARING_INVALID;
            }
        }
        return this._bearing;
    }

    async get_calibrationParam()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CALIBRATIONPARAM_INVALID;
            }
        }
        return this._calibrationParam;
    }

    async set_calibrationParam(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('calibrationParam',rest_val);
    }

    /**
     * Retrieves a reference frame for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the reference frame is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YRefFrame.isOnline() to test if the reference frame is
     * indeed online at a given time. In case of ambiguity when looking for
     * a reference frame by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the reference frame
     *
     * @return {YRefFrame} a YRefFrame object allowing you to drive the reference frame.
     */
    static FindRefFrame(func, obj_yapi = YAPI)
    {
        /** @type {YRefFrame} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'RefFrame', func);
        if (obj == null) {
            obj = new YRefFrame(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'RefFrame',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a reference frame for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the reference frame is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YRefFrame.isOnline() to test if the reference frame is
     * indeed online at a given time. In case of ambiguity when looking for
     * a reference frame by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the reference frame
     *
     * @return {YRefFrame} a YRefFrame object allowing you to drive the reference frame.
     */
    static FindRefFrameInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YRefFrame} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'RefFrame', func);
        if (obj == null) {
            obj = new YRefFrame(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'RefFrame',  func, obj);
        }
        return obj;
    }

    /**
     * Returns the installation position of the device, as configured
     * in order to define the reference frame for the compass and the
     * pitch/roll tilt sensors.
     *
     * @return {MOUNTPOSITION} a value among the YRefFrame.MOUNTPOSITION enumeration
     *         (YRefFrame.MOUNTPOSITION_BOTTOM,   YRefFrame.MOUNTPOSITION_TOP,
     *         YRefFrame.MOUNTPOSITION_FRONT,    YRefFrame.MOUNTPOSITION_RIGHT,
     *         YRefFrame.MOUNTPOSITION_REAR,     YRefFrame.MOUNTPOSITION_LEFT),
     *         corresponding to the installation in a box, on one of the six faces.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_mountPosition()
    {
        /** @type {number} **/
        let position;
        position = await this.get_mountPos();
        return ((position) >> (2));
    }

    /**
     * Returns the installation orientation of the device, as configured
     * in order to define the reference frame for the compass and the
     * pitch/roll tilt sensors.
     *
     * @return {MOUNTORIENTATION} a value among the enumeration YRefFrame.MOUNTORIENTATION
     *         (YRefFrame.MOUNTORIENTATION_TWELVE, YRefFrame.MOUNTORIENTATION_THREE,
     *         YRefFrame.MOUNTORIENTATION_SIX,     YRefFrame.MOUNTORIENTATION_NINE)
     *         corresponding to the orientation of the "X" arrow on the device,
     *         as on a clock dial seen from an observer in the center of the box.
     *         On the bottom face, the 12H orientation points to the front, while
     *         on the top face, the 12H orientation points to the rear.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_mountOrientation()
    {
        /** @type {number} **/
        let position;
        position = await this.get_mountPos();
        return ((position) & (3));
    }

    /**
     * Changes the compass and tilt sensor frame of reference. The magnetic compass
     * and the tilt sensors (pitch and roll) naturally work in the plane
     * parallel to the earth surface. In case the device is not installed upright
     * and horizontally, you must select its reference orientation (parallel to
     * the earth surface) so that the measures are made relative to this position.
     *
     * @param position {MOUNTPOSITION} : a value among the YRefFrame.MOUNTPOSITION enumeration
     *         (YRefFrame.MOUNTPOSITION_BOTTOM,   YRefFrame.MOUNTPOSITION_TOP,
     *         YRefFrame.MOUNTPOSITION_FRONT,    YRefFrame.MOUNTPOSITION_RIGHT,
     *         YRefFrame.MOUNTPOSITION_REAR,     YRefFrame.MOUNTPOSITION_LEFT),
     *         corresponding to the installation in a box, on one of the six faces.
     * @param orientation {MOUNTORIENTATION} : a value among the enumeration YRefFrame.MOUNTORIENTATION
     *         (YRefFrame.MOUNTORIENTATION_TWELVE, YRefFrame.MOUNTORIENTATION_THREE,
     *         YRefFrame.MOUNTORIENTATION_SIX,     YRefFrame.MOUNTORIENTATION_NINE)
     *         corresponding to the orientation of the "X" arrow on the device,
     *         as on a clock dial seen from an observer in the center of the box.
     *         On the bottom face, the 12H orientation points to the front, while
     *         on the top face, the 12H orientation points to the rear.
     *
     * Remember to call the saveToFlash()
     * method of the module if the modification must be kept.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_mountPosition(position,orientation)
    {
        /** @type {number} **/
        let mixedPos;
        mixedPos = ((position) << (2)) + orientation;
        return await this.set_mountPos(mixedPos);
    }

    async _calibSort(start,stopidx)
    {
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let changed;
        /** @type {number} **/
        let a;
        /** @type {number} **/
        let b;
        /** @type {number} **/
        let xa;
        /** @type {number} **/
        let xb;
        // bubble sort is good since we will re-sort again after offset adjustment
        changed = 1;
        while (changed > 0) {
            changed = 0;
            a = this._calibDataAcc[start];
            idx = start + 1;
            while (idx < stopidx) {
                b = this._calibDataAcc[idx];
                if (a > b) {
                    this._calibDataAcc[idx-1] = b;
                    this._calibDataAcc[idx] = a;
                    xa = this._calibDataAccX[idx-1];
                    xb = this._calibDataAccX[idx];
                    this._calibDataAccX[idx-1] = xb;
                    this._calibDataAccX[idx] = xa;
                    xa = this._calibDataAccY[idx-1];
                    xb = this._calibDataAccY[idx];
                    this._calibDataAccY[idx-1] = xb;
                    this._calibDataAccY[idx] = xa;
                    xa = this._calibDataAccZ[idx-1];
                    xb = this._calibDataAccZ[idx];
                    this._calibDataAccZ[idx-1] = xb;
                    this._calibDataAccZ[idx] = xa;
                    changed = changed + 1;
                } else {
                    a = b;
                }
                idx = idx + 1;
            }
        }
        return 0;
    }

    /**
     * Initiates the sensors tridimensional calibration process.
     * This calibration is used at low level for inertial position estimation
     * and to enhance the precision of the tilt sensors.
     *
     * After calling this method, the device should be moved according to the
     * instructions provided by method get_3DCalibrationHint,
     * and more3DCalibration should be invoked about 5 times per second.
     * The calibration procedure is completed when the method
     * get_3DCalibrationProgress returns 100. At this point,
     * the computed calibration parameters can be applied using method
     * save3DCalibration. The calibration process can be canceled
     * at any time using method cancel3DCalibration.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async start3DCalibration()
    {
        if (!(await this.isOnline())) {
            return YAPI_DEVICE_NOT_FOUND;
        }
        if (this._calibStage != 0) {
            await this.cancel3DCalibration();
        }
        this._calibSavedParams = await this.get_calibrationParam();
        await this.set_calibrationParam('0');
        this._calibCount = 50;
        this._calibStage = 1;
        this._calibStageHint = 'Set down the device on a steady horizontal surface';
        this._calibStageProgress = 0;
        this._calibProgress = 1;
        this._calibInternalPos = 0;
        this._calibPrevTick = ((this._yapi.GetTickCount()) & (0x7FFFFFFF));
        this._calibOrient.length = 0;
        this._calibDataAccX.length = 0;
        this._calibDataAccY.length = 0;
        this._calibDataAccZ.length = 0;
        this._calibDataAcc.length = 0;
        return YAPI_SUCCESS;
    }

    /**
     * Continues the sensors tridimensional calibration process previously
     * initiated using method start3DCalibration.
     * This method should be called approximately 5 times per second, while
     * positioning the device according to the instructions provided by method
     * get_3DCalibrationHint. Note that the instructions change during
     * the calibration process.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async more3DCalibration()
    {
        /** @type {number} **/
        let currTick;
        /** @type {Uint8Array} **/
        let jsonData;
        /** @type {number} **/
        let xVal;
        /** @type {number} **/
        let yVal;
        /** @type {number} **/
        let zVal;
        /** @type {number} **/
        let xSq;
        /** @type {number} **/
        let ySq;
        /** @type {number} **/
        let zSq;
        /** @type {number} **/
        let norm;
        /** @type {number} **/
        let orient;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let intpos;
        /** @type {number} **/
        let err;
        // make sure calibration has been started
        if (this._calibStage == 0) {
            return YAPI_INVALID_ARGUMENT;
        }
        if (this._calibProgress == 100) {
            return YAPI_SUCCESS;
        }
        // make sure we leave at least 160ms between samples
        currTick =  ((this._yapi.GetTickCount()) & (0x7FFFFFFF));
        if (((currTick - this._calibPrevTick) & (0x7FFFFFFF)) < 160) {
            return YAPI_SUCCESS;
        }
        // load current accelerometer values, make sure we are on a straight angle
        // (default timeout to 0,5 sec without reading measure when out of range)
        this._calibStageHint = 'Set down the device on a steady horizontal surface';
        this._calibPrevTick = ((currTick + 500) & (0x7FFFFFFF));
        jsonData = await this._download('api/accelerometer.json');
        xVal = this._yapi.imm_atoi(this.imm_json_get_key(jsonData, 'xValue')) / 65536.0;
        yVal = this._yapi.imm_atoi(this.imm_json_get_key(jsonData, 'yValue')) / 65536.0;
        zVal = this._yapi.imm_atoi(this.imm_json_get_key(jsonData, 'zValue')) / 65536.0;
        xSq = xVal * xVal;
        if (xSq >= 0.04 && xSq < 0.64) {
            return YAPI_SUCCESS;
        }
        if (xSq >= 1.44) {
            return YAPI_SUCCESS;
        }
        ySq = yVal * yVal;
        if (ySq >= 0.04 && ySq < 0.64) {
            return YAPI_SUCCESS;
        }
        if (ySq >= 1.44) {
            return YAPI_SUCCESS;
        }
        zSq = zVal * zVal;
        if (zSq >= 0.04 && zSq < 0.64) {
            return YAPI_SUCCESS;
        }
        if (zSq >= 1.44) {
            return YAPI_SUCCESS;
        }
        norm = Math.sqrt(xSq + ySq + zSq);
        if (norm < 0.8 || norm > 1.2) {
            return YAPI_SUCCESS;
        }
        this._calibPrevTick = currTick;
        // Determine the device orientation index
        orient = 0;
        if (zSq > 0.5) {
            if (zVal > 0) {
                orient = 0;
            } else {
                orient = 1;
            }
        }
        if (xSq > 0.5) {
            if (xVal > 0) {
                orient = 2;
            } else {
                orient = 3;
            }
        }
        if (ySq > 0.5) {
            if (yVal > 0) {
                orient = 4;
            } else {
                orient = 5;
            }
        }
        // Discard measures that are not in the proper orientation
        if (this._calibStageProgress == 0) {
            idx = 0;
            err = 0;
            while (idx + 1 < this._calibStage) {
                if (this._calibOrient[idx] == orient) {
                    err = 1;
                }
                idx = idx + 1;
            }
            if (err != 0) {
                this._calibStageHint = 'Turn the device on another face';
                return YAPI_SUCCESS;
            }
            this._calibOrient.push(orient);
        } else {
            if (orient != this._calibOrient[this._calibStage-1]) {
                this._calibStageHint = 'Not yet done, please move back to the previous face';
                return YAPI_SUCCESS;
            }
        }
        // Save measure
        this._calibStageHint = 'calibrating..';
        this._calibDataAccX.push(xVal);
        this._calibDataAccY.push(yVal);
        this._calibDataAccZ.push(zVal);
        this._calibDataAcc.push(norm);
        this._calibInternalPos = this._calibInternalPos + 1;
        this._calibProgress = 1 + 16 * (this._calibStage - 1) + parseInt((16 * this._calibInternalPos) / (this._calibCount), 10);
        if (this._calibInternalPos < this._calibCount) {
            this._calibStageProgress = 1 + parseInt((99 * this._calibInternalPos) / (this._calibCount), 10);
            return YAPI_SUCCESS;
        }
        // Stage done, compute preliminary result
        intpos = (this._calibStage - 1) * this._calibCount;
        await this._calibSort(intpos, intpos + this._calibCount);
        intpos = intpos + parseInt((this._calibCount) / (2), 10);
        this._calibLogMsg = 'Stage '+String(Math.round(this._calibStage))+': median is '+String(Math.round(Math.round(1000*this._calibDataAccX[intpos])))+','+String(Math.round(Math.round(1000*this._calibDataAccY[intpos])))+','+String(Math.round(Math.round(1000*this._calibDataAccZ[intpos])));
        // move to next stage
        this._calibStage = this._calibStage + 1;
        if (this._calibStage < 7) {
            this._calibStageHint = 'Turn the device on another face';
            this._calibPrevTick = ((currTick + 500) & (0x7FFFFFFF));
            this._calibStageProgress = 0;
            this._calibInternalPos = 0;
            return YAPI_SUCCESS;
        }
        // Data collection completed, compute accelerometer shift
        xVal = 0;
        yVal = 0;
        zVal = 0;
        idx = 0;
        while (idx < 6) {
            intpos = idx * this._calibCount + parseInt((this._calibCount) / (2), 10);
            orient = this._calibOrient[idx];
            if (orient == 0 || orient == 1) {
                zVal = zVal + this._calibDataAccZ[intpos];
            }
            if (orient == 2 || orient == 3) {
                xVal = xVal + this._calibDataAccX[intpos];
            }
            if (orient == 4 || orient == 5) {
                yVal = yVal + this._calibDataAccY[intpos];
            }
            idx = idx + 1;
        }
        this._calibAccXOfs = xVal / 2.0;
        this._calibAccYOfs = yVal / 2.0;
        this._calibAccZOfs = zVal / 2.0;
        // Recompute all norms, taking into account the computed shift, and re-sort
        intpos = 0;
        while (intpos < this._calibDataAcc.length) {
            xVal = this._calibDataAccX[intpos] - this._calibAccXOfs;
            yVal = this._calibDataAccY[intpos] - this._calibAccYOfs;
            zVal = this._calibDataAccZ[intpos] - this._calibAccZOfs;
            norm = Math.sqrt(xVal * xVal + yVal * yVal + zVal * zVal);
            this._calibDataAcc[intpos] = norm;
            intpos = intpos + 1;
        }
        idx = 0;
        while (idx < 6) {
            intpos = idx * this._calibCount;
            await this._calibSort(intpos, intpos + this._calibCount);
            idx = idx + 1;
        }
        // Compute the scaling factor for each axis
        xVal = 0;
        yVal = 0;
        zVal = 0;
        idx = 0;
        while (idx < 6) {
            intpos = idx * this._calibCount + parseInt((this._calibCount) / (2), 10);
            orient = this._calibOrient[idx];
            if (orient == 0 || orient == 1) {
                zVal = zVal + this._calibDataAcc[intpos];
            }
            if (orient == 2 || orient == 3) {
                xVal = xVal + this._calibDataAcc[intpos];
            }
            if (orient == 4 || orient == 5) {
                yVal = yVal + this._calibDataAcc[intpos];
            }
            idx = idx + 1;
        }
        this._calibAccXScale = xVal / 2.0;
        this._calibAccYScale = yVal / 2.0;
        this._calibAccZScale = zVal / 2.0;
        // Report completion
        this._calibProgress = 100;
        this._calibStageHint = 'Calibration data ready for saving';
        return YAPI_SUCCESS;
    }

    /**
     * Returns instructions to proceed to the tridimensional calibration initiated with
     * method start3DCalibration.
     *
     * @return {string} a character string.
     */
    async get_3DCalibrationHint()
    {
        return this._calibStageHint;
    }

    /**
     * Returns the global process indicator for the tridimensional calibration
     * initiated with method start3DCalibration.
     *
     * @return {number} an integer between 0 (not started) and 100 (stage completed).
     */
    async get_3DCalibrationProgress()
    {
        return this._calibProgress;
    }

    /**
     * Returns index of the current stage of the calibration
     * initiated with method start3DCalibration.
     *
     * @return {number} an integer, growing each time a calibration stage is completed.
     */
    async get_3DCalibrationStage()
    {
        return this._calibStage;
    }

    /**
     * Returns the process indicator for the current stage of the calibration
     * initiated with method start3DCalibration.
     *
     * @return {number} an integer between 0 (not started) and 100 (stage completed).
     */
    async get_3DCalibrationStageProgress()
    {
        return this._calibStageProgress;
    }

    /**
     * Returns the latest log message from the calibration process.
     * When no new message is available, returns an empty string.
     *
     * @return {string} a character string.
     */
    async get_3DCalibrationLogMsg()
    {
        /** @type {string} **/
        let msg;
        msg = this._calibLogMsg;
        this._calibLogMsg = '';
        return msg;
    }

    /**
     * Applies the sensors tridimensional calibration parameters that have just been computed.
     * Remember to call the saveToFlash()  method of the module if the changes
     * must be kept when the device is restarted.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async save3DCalibration()
    {
        /** @type {number} **/
        let shiftX;
        /** @type {number} **/
        let shiftY;
        /** @type {number} **/
        let shiftZ;
        /** @type {number} **/
        let scaleExp;
        /** @type {number} **/
        let scaleX;
        /** @type {number} **/
        let scaleY;
        /** @type {number} **/
        let scaleZ;
        /** @type {number} **/
        let scaleLo;
        /** @type {number} **/
        let scaleHi;
        /** @type {string} **/
        let newcalib;
        if (this._calibProgress != 100) {
            return YAPI_INVALID_ARGUMENT;
        }
        // Compute integer values (correction unit is 732ug/count)
        shiftX = -Math.round(this._calibAccXOfs / 0.000732);
        if (shiftX < 0) {
            shiftX = shiftX + 65536;
        }
        shiftY = -Math.round(this._calibAccYOfs / 0.000732);
        if (shiftY < 0) {
            shiftY = shiftY + 65536;
        }
        shiftZ = -Math.round(this._calibAccZOfs / 0.000732);
        if (shiftZ < 0) {
            shiftZ = shiftZ + 65536;
        }
        scaleX = Math.round(2048.0 / this._calibAccXScale) - 2048;
        scaleY = Math.round(2048.0 / this._calibAccYScale) - 2048;
        scaleZ = Math.round(2048.0 / this._calibAccZScale) - 2048;
        if (scaleX < -2048 || scaleX >= 2048 || scaleY < -2048 || scaleY >= 2048 || scaleZ < -2048 || scaleZ >= 2048) {
            scaleExp = 3;
        } else {
            if (scaleX < -1024 || scaleX >= 1024 || scaleY < -1024 || scaleY >= 1024 || scaleZ < -1024 || scaleZ >= 1024) {
                scaleExp = 2;
            } else {
                if (scaleX < -512 || scaleX >= 512 || scaleY < -512 || scaleY >= 512 || scaleZ < -512 || scaleZ >= 512) {
                    scaleExp = 1;
                } else {
                    scaleExp = 0;
                }
            }
        }
        if (scaleExp > 0) {
            scaleX = ((scaleX) >> (scaleExp));
            scaleY = ((scaleY) >> (scaleExp));
            scaleZ = ((scaleZ) >> (scaleExp));
        }
        if (scaleX < 0) {
            scaleX = scaleX + 1024;
        }
        if (scaleY < 0) {
            scaleY = scaleY + 1024;
        }
        if (scaleZ < 0) {
            scaleZ = scaleZ + 1024;
        }
        scaleLo = ((((scaleY) & (15))) << (12)) + ((scaleX) << (2)) + scaleExp;
        scaleHi = ((scaleZ) << (6)) + ((scaleY) >> (4));
        // Save calibration parameters
        newcalib = '5,'+String(Math.round(shiftX))+','+String(Math.round(shiftY))+','+String(Math.round(shiftZ))+','+String(Math.round(scaleLo))+','+String(Math.round(scaleHi));
        this._calibStage = 0;
        return await this.set_calibrationParam(newcalib);
    }

    /**
     * Aborts the sensors tridimensional calibration process et restores normal settings.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async cancel3DCalibration()
    {
        if (this._calibStage == 0) {
            return YAPI_SUCCESS;
        }
        // may throw an exception
        this._calibStage = 0;
        return await this.set_calibrationParam(this._calibSavedParams);
    }

    /**
     * Continues the enumeration of reference frames started using yFirstRefFrame().
     *
     * @return {YRefFrame} a pointer to a YRefFrame object, corresponding to
     *         a reference frame currently online, or a null pointer
     *         if there are no more reference frames to enumerate.
     */
    /**/ nextRefFrame()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YRefFrame.FindRefFrame(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of reference frames currently accessible.
     * Use the method YRefFrame.nextRefFrame() to iterate on
     * next reference frames.
     *
     * @return {YRefFrame} a pointer to a YRefFrame object, corresponding to
     *         the first reference frame currently online, or a null pointer
     *         if there are none.
     */
    static FirstRefFrame(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('RefFrame');
        if(next_hwid == null) return null;
        return YRefFrame.FindRefFrame(next_hwid, obj_yapi);
    }

    //--- (end of YRefFrame implementation)
}

//--- (RefFrame functions)

/**
 * comment from .yc definition
 */
export function yFindRefFrame(func)
{
    return YRefFrame.FindRefFrame(func);
}

/**
 * comment from .yc definition
 */
export function yFirstRefFrame()
{
    return YRefFrame.FirstRefFrame();
}

//--- (end of RefFrame functions)
