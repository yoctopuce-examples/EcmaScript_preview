/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for DigitalIO functions
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

//--- (YDigitalIO return codes)
//--- (end of YDigitalIO return codes)
//--- (YDigitalIO definitions)
export const Y_OUTPUTVOLTAGE_USB_5V          = 0;
export const Y_OUTPUTVOLTAGE_USB_3V          = 1;
export const Y_OUTPUTVOLTAGE_EXT_V           = 2;
export const Y_OUTPUTVOLTAGE_INVALID         = -1;
export const Y_PORTSTATE_INVALID             = YAPI.INVALID_UINT;
export const Y_PORTDIRECTION_INVALID         = YAPI.INVALID_UINT;
export const Y_PORTOPENDRAIN_INVALID         = YAPI.INVALID_UINT;
export const Y_PORTPOLARITY_INVALID          = YAPI.INVALID_UINT;
export const Y_PORTSIZE_INVALID              = YAPI.INVALID_UINT;
export const Y_COMMAND_INVALID               = YAPI.INVALID_STRING;
//--- (end of YDigitalIO definitions)

//--- (YDigitalIO class start)
/**
 * YDigitalIO Class: Digital IO function interface
 *
 * The Yoctopuce application programming interface allows you to switch the state of each
 * bit of the I/O port. You can switch all bits at once, or one by one. The library
 * can also automatically generate short pulses of a determined duration. Electrical behavior
 * of each I/O can be modified (open drain and reverse polarity).
 */
//--- (end of YDigitalIO class start)

export class YDigitalIO extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YDigitalIO constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'DigitalIO';
        /** @member {number} **/
        this._portState                  = Y_PORTSTATE_INVALID;
        /** @member {number} **/
        this._portDirection              = Y_PORTDIRECTION_INVALID;
        /** @member {number} **/
        this._portOpenDrain              = Y_PORTOPENDRAIN_INVALID;
        /** @member {number} **/
        this._portPolarity               = Y_PORTPOLARITY_INVALID;
        /** @member {number} **/
        this._portSize                   = Y_PORTSIZE_INVALID;
        /** @member {number} **/
        this._outputVoltage              = Y_OUTPUTVOLTAGE_INVALID;
        /** @member {string} **/
        this._command                    = Y_COMMAND_INVALID;
        this.imm_setConst({
            PORTSTATE_INVALID            : YAPI.INVALID_UINT,
            PORTDIRECTION_INVALID        : YAPI.INVALID_UINT,
            PORTOPENDRAIN_INVALID        : YAPI.INVALID_UINT,
            PORTPOLARITY_INVALID         : YAPI.INVALID_UINT,
            PORTSIZE_INVALID             : YAPI.INVALID_UINT,
            OUTPUTVOLTAGE_USB_5V         : 0,
            OUTPUTVOLTAGE_USB_3V         : 1,
            OUTPUTVOLTAGE_EXT_V          : 2,
            OUTPUTVOLTAGE_INVALID        : -1,
            COMMAND_INVALID              : YAPI.INVALID_STRING
        });
        //--- (end of YDigitalIO constructor)
    }

    //--- (YDigitalIO implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'portState':
            this._portState = parseInt(val);
            return 1;
        case 'portDirection':
            this._portDirection = parseInt(val);
            return 1;
        case 'portOpenDrain':
            this._portOpenDrain = parseInt(val);
            return 1;
        case 'portPolarity':
            this._portPolarity = parseInt(val);
            return 1;
        case 'portSize':
            this._portSize = parseInt(val);
            return 1;
        case 'outputVoltage':
            this._outputVoltage = parseInt(val);
            return 1;
        case 'command':
            this._command = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the digital IO port state: bit 0 represents input 0, and so on.
     *
     * @return {number} an integer corresponding to the digital IO port state: bit 0 represents input 0, and so on
     *
     * On failure, throws an exception or returns YDigitalIO.PORTSTATE_INVALID.
     */
    async get_portState()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTSTATE_INVALID;
            }
        }
        return this._portState;
    }

    /**
     * Changes the digital IO port state: bit 0 represents input 0, and so on. This function has no effect
     * on bits configured as input in portDirection.
     *
     * @param newval {number} : an integer corresponding to the digital IO port state: bit 0 represents
     * input 0, and so on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_portState(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('portState',rest_val);
    }

    /**
     * Returns the IO direction of all bits of the port: 0 makes a bit an input, 1 makes it an output.
     *
     * @return {number} an integer corresponding to the IO direction of all bits of the port: 0 makes a
     * bit an input, 1 makes it an output
     *
     * On failure, throws an exception or returns YDigitalIO.PORTDIRECTION_INVALID.
     */
    async get_portDirection()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTDIRECTION_INVALID;
            }
        }
        return this._portDirection;
    }

    /**
     * Changes the IO direction of all bits of the port: 0 makes a bit an input, 1 makes it an output.
     * Remember to call the saveToFlash() method  to make sure the setting is kept after a reboot.
     *
     * @param newval {number} : an integer corresponding to the IO direction of all bits of the port: 0
     * makes a bit an input, 1 makes it an output
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_portDirection(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('portDirection',rest_val);
    }

    /**
     * Returns the electrical interface for each bit of the port. For each bit set to 0  the matching I/O
     * works in the regular,
     * intuitive way, for each bit set to 1, the I/O works in reverse mode.
     *
     * @return {number} an integer corresponding to the electrical interface for each bit of the port
     *
     * On failure, throws an exception or returns YDigitalIO.PORTOPENDRAIN_INVALID.
     */
    async get_portOpenDrain()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTOPENDRAIN_INVALID;
            }
        }
        return this._portOpenDrain;
    }

    /**
     * Changes the electrical interface for each bit of the port. 0 makes a bit a regular input/output, 1 makes
     * it an open-drain (open-collector) input/output. Remember to call the
     * saveToFlash() method  to make sure the setting is kept after a reboot.
     *
     * @param newval {number} : an integer corresponding to the electrical interface for each bit of the port
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_portOpenDrain(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('portOpenDrain',rest_val);
    }

    /**
     * Returns the polarity of all the bits of the port.  For each bit set to 0, the matching I/O works the regular,
     * intuitive way; for each bit set to 1, the I/O works in reverse mode.
     *
     * @return {number} an integer corresponding to the polarity of all the bits of the port
     *
     * On failure, throws an exception or returns YDigitalIO.PORTPOLARITY_INVALID.
     */
    async get_portPolarity()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTPOLARITY_INVALID;
            }
        }
        return this._portPolarity;
    }

    /**
     * Changes the polarity of all the bits of the port: 0 makes a bit an input, 1 makes it an output.
     * Remember to call the saveToFlash() method  to make sure the setting will be kept after a reboot.
     *
     * @param newval {number} : an integer corresponding to the polarity of all the bits of the port: 0
     * makes a bit an input, 1 makes it an output
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_portPolarity(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('portPolarity',rest_val);
    }

    /**
     * Returns the number of bits implemented in the I/O port.
     *
     * @return {number} an integer corresponding to the number of bits implemented in the I/O port
     *
     * On failure, throws an exception or returns YDigitalIO.PORTSIZE_INVALID.
     */
    async get_portSize()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PORTSIZE_INVALID;
            }
        }
        return this._portSize;
    }

    /**
     * Returns the voltage source used to drive output bits.
     *
     * @return {number} a value among YDigitalIO.OUTPUTVOLTAGE_USB_5V, YDigitalIO.OUTPUTVOLTAGE_USB_3V and
     * YDigitalIO.OUTPUTVOLTAGE_EXT_V corresponding to the voltage source used to drive output bits
     *
     * On failure, throws an exception or returns YDigitalIO.OUTPUTVOLTAGE_INVALID.
     */
    async get_outputVoltage()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_OUTPUTVOLTAGE_INVALID;
            }
        }
        return this._outputVoltage;
    }

    /**
     * Changes the voltage source used to drive output bits.
     * Remember to call the saveToFlash() method  to make sure the setting is kept after a reboot.
     *
     * @param newval {number} : a value among YDigitalIO.OUTPUTVOLTAGE_USB_5V,
     * YDigitalIO.OUTPUTVOLTAGE_USB_3V and YDigitalIO.OUTPUTVOLTAGE_EXT_V corresponding to the voltage
     * source used to drive output bits
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_outputVoltage(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('outputVoltage',rest_val);
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
     * Retrieves a digital IO port for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the digital IO port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDigitalIO.isOnline() to test if the digital IO port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a digital IO port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the digital IO port
     *
     * @return {YDigitalIO} a YDigitalIO object allowing you to drive the digital IO port.
     */
    static FindDigitalIO(func)
    {
        /** @type {YDigitalIO} **/
        let obj;
        obj = YFunction._FindFromCache('DigitalIO', func);
        if (obj == null) {
            obj = new YDigitalIO(YAPI, func);
            YFunction._AddToCache('DigitalIO',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a digital IO port for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the digital IO port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YDigitalIO.isOnline() to test if the digital IO port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a digital IO port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the digital IO port
     *
     * @return {YDigitalIO} a YDigitalIO object allowing you to drive the digital IO port.
     */
    static FindDigitalIOInContext(yctx,func)
    {
        /** @type {YDigitalIO} **/
        let obj;
        obj = YFunction._FindFromCacheInContext(yctx,  'DigitalIO', func);
        if (obj == null) {
            obj = new YDigitalIO(yctx, func);
            YFunction._AddToCache('DigitalIO',  func, obj);
        }
        return obj;
    }

    /**
     * Sets a single bit of the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     * @param bitstate {number} : the state of the bit (1 or 0)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_bitState(bitno,bitstate)
    {
        if (!(bitstate >= 0)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid bitstate',YAPI_INVALID_ARGUMENT);
        }
        if (!(bitstate <= 1)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid bitstate',YAPI_INVALID_ARGUMENT);
        }
        return await this.set_command(String.fromCharCode(82+bitstate)+''+String(Math.round(bitno)));
    }

    /**
     * Returns the state of a single bit of the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     *
     * @return {number} the bit state (0 or 1)
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_bitState(bitno)
    {
        /** @type {number} **/
        let portVal;
        portVal = await this.get_portState();
        return ((((portVal) >> (bitno))) & (1));
    }

    /**
     * Reverts a single bit of the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async toggle_bitState(bitno)
    {
        return await this.set_command('T'+String(Math.round(bitno)));
    }

    /**
     * Changes  the direction of a single bit from the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     * @param bitdirection {number} : direction to set, 0 makes the bit an input, 1 makes it an output.
     *         Remember to call the   saveToFlash() method to make sure the setting is kept after a reboot.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_bitDirection(bitno,bitdirection)
    {
        if (!(bitdirection >= 0)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid direction',YAPI_INVALID_ARGUMENT);
        }
        if (!(bitdirection <= 1)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid direction',YAPI_INVALID_ARGUMENT);
        }
        return await this.set_command(String.fromCharCode(73+6*bitdirection)+''+String(Math.round(bitno)));
    }

    /**
     * Returns the direction of a single bit from the I/O port (0 means the bit is an input, 1  an output).
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_bitDirection(bitno)
    {
        /** @type {number} **/
        let portDir;
        portDir = await this.get_portDirection();
        return ((((portDir) >> (bitno))) & (1));
    }

    /**
     * Changes the polarity of a single bit from the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0.
     * @param bitpolarity {number} : polarity to set, 0 makes the I/O work in regular mode, 1 makes the
     * I/O  works in reverse mode.
     *         Remember to call the   saveToFlash() method to make sure the setting is kept after a reboot.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_bitPolarity(bitno,bitpolarity)
    {
        if (!(bitpolarity >= 0)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid bitpolarity',YAPI_INVALID_ARGUMENT);
        }
        if (!(bitpolarity <= 1)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid bitpolarity',YAPI_INVALID_ARGUMENT);
        }
        return await this.set_command(String.fromCharCode(110+4*bitpolarity)+''+String(Math.round(bitno)));
    }

    /**
     * Returns the polarity of a single bit from the I/O port (0 means the I/O works in regular mode, 1
     * means the I/O  works in reverse mode).
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_bitPolarity(bitno)
    {
        /** @type {number} **/
        let portPol;
        portPol = await this.get_portPolarity();
        return ((((portPol) >> (bitno))) & (1));
    }

    /**
     * Changes  the electrical interface of a single bit from the I/O port.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     * @param opendrain {number} : 0 makes a bit a regular input/output, 1 makes
     *         it an open-drain (open-collector) input/output. Remember to call the
     *         saveToFlash() method to make sure the setting is kept after a reboot.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_bitOpenDrain(bitno,opendrain)
    {
        if (!(opendrain >= 0)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid state',YAPI_INVALID_ARGUMENT);
        }
        if (!(opendrain <= 1)) {
            return this._throw(YAPI_INVALID_ARGUMENT,'invalid state',YAPI_INVALID_ARGUMENT);
        }
        return await this.set_command(String.fromCharCode(100-32*opendrain)+''+String(Math.round(bitno)));
    }

    /**
     * Returns the type of electrical interface of a single bit from the I/O port. (0 means the bit is an
     * input, 1  an output).
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     *
     * @return {number}   0 means the a bit is a regular input/output, 1 means the bit is an open-drain
     *         (open-collector) input/output.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_bitOpenDrain(bitno)
    {
        /** @type {number} **/
        let portOpenDrain;
        portOpenDrain = await this.get_portOpenDrain();
        return ((((portOpenDrain) >> (bitno))) & (1));
    }

    /**
     * Triggers a pulse on a single bit for a specified duration. The specified bit
     * will be turned to 1, and then back to 0 after the given duration.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     * @param ms_duration {number} : desired pulse duration in milliseconds. Be aware that the device time
     *         resolution is not guaranteed up to the millisecond.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async pulse(bitno,ms_duration)
    {
        return await this.set_command('Z'+String(Math.round(bitno))+',0,'+String(Math.round(ms_duration)));
    }

    /**
     * Schedules a pulse on a single bit for a specified duration. The specified bit
     * will be turned to 1, and then back to 0 after the given duration.
     *
     * @param bitno {number} : the bit number; lowest bit has index 0
     * @param ms_delay {number} : waiting time before the pulse, in milliseconds
     * @param ms_duration {number} : desired pulse duration in milliseconds. Be aware that the device time
     *         resolution is not guaranteed up to the millisecond.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async delayedPulse(bitno,ms_delay,ms_duration)
    {
        return await this.set_command('Z'+String(Math.round(bitno))+','+String(Math.round(ms_delay))+','+String(Math.round(ms_duration)));
    }

    /**
     * Continues the enumeration of digital IO ports started using yFirstDigitalIO().
     *
     * @return {YDigitalIO} a pointer to a YDigitalIO object, corresponding to
     *         a digital IO port currently online, or a null pointer
     *         if there are no more digital IO ports to enumerate.
     */
    /* */ nextDigitalIO()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YDigitalIO.FindDigitalIOInContext(this._yapi, next_hwid);
    }

    /**
     * Starts the enumeration of digital IO ports currently accessible.
     * Use the method YDigitalIO.nextDigitalIO() to iterate on
     * next digital IO ports.
     *
     * @return {YDigitalIO} a pointer to a YDigitalIO object, corresponding to
     *         the first digital IO port currently online, or a null pointer
     *         if there are none.
     */
    static FirstDigitalIO()
    {
        /** @type {string} **/
        let next_hwid = YAPI.imm_getFirstHardwareId('DigitalIO');
        if(next_hwid == null) return null;
        return YDigitalIO.FindDigitalIO(next_hwid);
    }

    /**
     * Starts the enumeration of digital IO ports currently accessible.
     * Use the method YDigitalIO.nextDigitalIO() to iterate on
     * next digital IO ports.
     *
     * @param yctx {YAPIContext} : a YAPI context.
     *
     * @return {YDigitalIO} a pointer to a YDigitalIO object, corresponding to
     *         the first digital IO port currently online, or a null pointer
     *         if there are none.
     */
    static FirstDigitalIOInContext(yctx)
    {
        /** @type {string} **/
        let next_hwid = yctx.imm_getFirstHardwareId('DigitalIO');
        if(next_hwid == null) return null;
        return YDigitalIO.FindDigitalIOInContext(yctx, next_hwid);
    }

    //--- (end of YDigitalIO implementation)
}

//--- (DigitalIO functions)

/**
 * comment from .yc definition
 */
export function yFindDigitalIO(func)
{
    return YDigitalIO.FindDigitalIO(func);
}

/**
 * comment from .yc definition
 */
export function yFirstDigitalIO()
{
    return YDigitalIO.FirstDigitalIO();
}

//--- (end of DigitalIO functions)
