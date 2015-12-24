/*********************************************************************
 *
 * $Id: pic24config.php 22503 2015-12-22 15:34:43Z mvuilleu $
 *
 * Implements the high-level API for SerialPort functions
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

//--- (YSerialPort return codes)
//--- (end of YSerialPort return codes)
//--- (YSerialPort definitions)
export const Y_VOLTAGELEVEL_OFF              = 0;
export const Y_VOLTAGELEVEL_TTL3V            = 1;
export const Y_VOLTAGELEVEL_TTL3VR           = 2;
export const Y_VOLTAGELEVEL_TTL5V            = 3;
export const Y_VOLTAGELEVEL_TTL5VR           = 4;
export const Y_VOLTAGELEVEL_RS232            = 5;
export const Y_VOLTAGELEVEL_RS485            = 6;
export const Y_VOLTAGELEVEL_INVALID          = -1;
export const Y_SERIALMODE_INVALID            = YAPI.INVALID_STRING;
export const Y_PROTOCOL_INVALID              = YAPI.INVALID_STRING;
export const Y_RXCOUNT_INVALID               = YAPI.INVALID_UINT;
export const Y_TXCOUNT_INVALID               = YAPI.INVALID_UINT;
export const Y_ERRCOUNT_INVALID              = YAPI.INVALID_UINT;
export const Y_RXMSGCOUNT_INVALID            = YAPI.INVALID_UINT;
export const Y_TXMSGCOUNT_INVALID            = YAPI.INVALID_UINT;
export const Y_LASTMSG_INVALID               = YAPI.INVALID_STRING;
export const Y_CURRENTJOB_INVALID            = YAPI.INVALID_STRING;
export const Y_STARTUPJOB_INVALID            = YAPI.INVALID_STRING;
export const Y_COMMAND_INVALID               = YAPI.INVALID_STRING;
//--- (end of YSerialPort definitions)

//--- (YSerialPort class start)
/**
 * YSerialPort Class: SerialPort function interface
 *
 * The SerialPort function interface allows you to fully drive a Yoctopuce
 * serial port, to send and receive data, and to configure communication
 * parameters (baud rate, bit count, parity, flow control and protocol).
 * Note that Yoctopuce serial ports are not exposed as virtual COM ports.
 * They are meant to be used in the same way as all Yoctopuce devices.
 */
//--- (end of YSerialPort class start)

export class YSerialPort extends YFunction
{
    constructor(obj_yapi, str_func)
    {
        //--- (YSerialPort constructor)
        super(obj_yapi, str_func);
        /** @member {string} **/
        this._className                  = 'SerialPort';
        /** @member {string} **/
        this._serialMode                 = Y_SERIALMODE_INVALID;
        /** @member {string} **/
        this._protocol                   = Y_PROTOCOL_INVALID;
        /** @member {number} **/
        this._voltageLevel               = Y_VOLTAGELEVEL_INVALID;
        /** @member {number} **/
        this._rxCount                    = Y_RXCOUNT_INVALID;
        /** @member {number} **/
        this._txCount                    = Y_TXCOUNT_INVALID;
        /** @member {number} **/
        this._errCount                   = Y_ERRCOUNT_INVALID;
        /** @member {number} **/
        this._rxMsgCount                 = Y_RXMSGCOUNT_INVALID;
        /** @member {number} **/
        this._txMsgCount                 = Y_TXMSGCOUNT_INVALID;
        /** @member {string} **/
        this._lastMsg                    = Y_LASTMSG_INVALID;
        /** @member {string} **/
        this._currentJob                 = Y_CURRENTJOB_INVALID;
        /** @member {string} **/
        this._startupJob                 = Y_STARTUPJOB_INVALID;
        /** @member {string} **/
        this._command                    = Y_COMMAND_INVALID;
        /** @member {number} **/
        this._rxptr                      = 0;
        this.imm_setConst({
            SERIALMODE_INVALID           : YAPI.INVALID_STRING,
            PROTOCOL_INVALID             : YAPI.INVALID_STRING,
            VOLTAGELEVEL_OFF             : 0,
            VOLTAGELEVEL_TTL3V           : 1,
            VOLTAGELEVEL_TTL3VR          : 2,
            VOLTAGELEVEL_TTL5V           : 3,
            VOLTAGELEVEL_TTL5VR          : 4,
            VOLTAGELEVEL_RS232           : 5,
            VOLTAGELEVEL_RS485           : 6,
            VOLTAGELEVEL_INVALID         : -1,
            RXCOUNT_INVALID              : YAPI.INVALID_UINT,
            TXCOUNT_INVALID              : YAPI.INVALID_UINT,
            ERRCOUNT_INVALID             : YAPI.INVALID_UINT,
            RXMSGCOUNT_INVALID           : YAPI.INVALID_UINT,
            TXMSGCOUNT_INVALID           : YAPI.INVALID_UINT,
            LASTMSG_INVALID              : YAPI.INVALID_STRING,
            CURRENTJOB_INVALID           : YAPI.INVALID_STRING,
            STARTUPJOB_INVALID           : YAPI.INVALID_STRING,
            COMMAND_INVALID              : YAPI.INVALID_STRING
        });
        //--- (end of YSerialPort constructor)
    }

    //--- (YSerialPort implementation)

    imm_parseAttr(name, val)
    {
        switch(name) {
        case 'serialMode':
            this._serialMode = val;
            return 1;
        case 'protocol':
            this._protocol = val;
            return 1;
        case 'voltageLevel':
            this._voltageLevel = parseInt(val);
            return 1;
        case 'rxCount':
            this._rxCount = parseInt(val);
            return 1;
        case 'txCount':
            this._txCount = parseInt(val);
            return 1;
        case 'errCount':
            this._errCount = parseInt(val);
            return 1;
        case 'rxMsgCount':
            this._rxMsgCount = parseInt(val);
            return 1;
        case 'txMsgCount':
            this._txMsgCount = parseInt(val);
            return 1;
        case 'lastMsg':
            this._lastMsg = val;
            return 1;
        case 'currentJob':
            this._currentJob = val;
            return 1;
        case 'startupJob':
            this._startupJob = val;
            return 1;
        case 'command':
            this._command = val;
            return 1;
        }
        return super.imm_parseAttr(name, val);
    }

    /**
     * Returns the serial port communication parameters, as a string such as
     * "9600,8N1". The string includes the baud rate, the number of data bits,
     * the parity, and the number of stop bits. An optional suffix is included
     * if flow control is active: "CtsRts" for hardware handshake, "XOnXOff"
     * for logical flow control and "Simplex" for acquiring a shared bus using
     * the RTS line (as used by some RS485 adapters for instance).
     *
     * @return {string} a string corresponding to the serial port communication parameters, as a string such as
     *         "9600,8N1"
     *
     * On failure, throws an exception or returns YSerialPort.SERIALMODE_INVALID.
     */
    async get_serialMode()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_SERIALMODE_INVALID;
            }
        }
        return this._serialMode;
    }

    /**
     * Changes the serial port communication parameters, with a string such as
     * "9600,8N1". The string includes the baud rate, the number of data bits,
     * the parity, and the number of stop bits. An optional suffix can be added
     * to enable flow control: "CtsRts" for hardware handshake, "XOnXOff"
     * for logical flow control and "Simplex" for acquiring a shared bus using
     * the RTS line (as used by some RS485 adapters for instance).
     *
     * @param newval {string} : a string corresponding to the serial port communication parameters, with a
     * string such as
     *         "9600,8N1"
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_serialMode(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('serialMode',rest_val);
    }

    /**
     * Returns the type of protocol used over the serial line, as a string.
     * Possible values are "Line" for ASCII messages separated by CR and/or LF,
     * "Frame:[timeout]ms" for binary messages separated by a delay time,
     * "Modbus-ASCII" for MODBUS messages in ASCII mode,
     * "Modbus-RTU" for MODBUS messages in RTU mode,
     * "Char" for a continuous ASCII stream or
     * "Byte" for a continuous binary stream.
     *
     * @return {string} a string corresponding to the type of protocol used over the serial line, as a string
     *
     * On failure, throws an exception or returns YSerialPort.PROTOCOL_INVALID.
     */
    async get_protocol()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_PROTOCOL_INVALID;
            }
        }
        return this._protocol;
    }

    /**
     * Changes the type of protocol used over the serial line.
     * Possible values are "Line" for ASCII messages separated by CR and/or LF,
     * "Frame:[timeout]ms" for binary messages separated by a delay time,
     * "Modbus-ASCII" for MODBUS messages in ASCII mode,
     * "Modbus-RTU" for MODBUS messages in RTU mode,
     * "Char" for a continuous ASCII stream or
     * "Byte" for a continuous binary stream.
     * The suffix "/[wait]ms" can be added to reduce the transmit rate so that there
     * is always at lest the specified number of milliseconds between each bytes sent.
     *
     * @param newval {string} : a string corresponding to the type of protocol used over the serial line
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_protocol(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('protocol',rest_val);
    }

    /**
     * Returns the voltage level used on the serial line.
     *
     * @return {number} a value among YSerialPort.VOLTAGELEVEL_OFF, YSerialPort.VOLTAGELEVEL_TTL3V,
     * YSerialPort.VOLTAGELEVEL_TTL3VR, YSerialPort.VOLTAGELEVEL_TTL5V, YSerialPort.VOLTAGELEVEL_TTL5VR,
     * YSerialPort.VOLTAGELEVEL_RS232 and YSerialPort.VOLTAGELEVEL_RS485 corresponding to the voltage
     * level used on the serial line
     *
     * On failure, throws an exception or returns YSerialPort.VOLTAGELEVEL_INVALID.
     */
    async get_voltageLevel()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_VOLTAGELEVEL_INVALID;
            }
        }
        return this._voltageLevel;
    }

    /**
     * Changes the voltage type used on the serial line. Valid
     * values  will depend on the Yoctopuce device model featuring
     * the serial port feature.  Check your device documentation
     * to find out which values are valid for that specific model.
     * Trying to set an invalid value will have no effect.
     *
     * @param newval {number} : a value among YSerialPort.VOLTAGELEVEL_OFF,
     * YSerialPort.VOLTAGELEVEL_TTL3V, YSerialPort.VOLTAGELEVEL_TTL3VR, YSerialPort.VOLTAGELEVEL_TTL5V,
     * YSerialPort.VOLTAGELEVEL_TTL5VR, YSerialPort.VOLTAGELEVEL_RS232 and YSerialPort.VOLTAGELEVEL_RS485
     * corresponding to the voltage type used on the serial line
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_voltageLevel(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = String(newval);
        return await this._setAttr('voltageLevel',rest_val);
    }

    /**
     * Returns the total number of bytes received since last reset.
     *
     * @return {number} an integer corresponding to the total number of bytes received since last reset
     *
     * On failure, throws an exception or returns YSerialPort.RXCOUNT_INVALID.
     */
    async get_rxCount()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RXCOUNT_INVALID;
            }
        }
        return this._rxCount;
    }

    /**
     * Returns the total number of bytes transmitted since last reset.
     *
     * @return {number} an integer corresponding to the total number of bytes transmitted since last reset
     *
     * On failure, throws an exception or returns YSerialPort.TXCOUNT_INVALID.
     */
    async get_txCount()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_TXCOUNT_INVALID;
            }
        }
        return this._txCount;
    }

    /**
     * Returns the total number of communication errors detected since last reset.
     *
     * @return {number} an integer corresponding to the total number of communication errors detected since last reset
     *
     * On failure, throws an exception or returns YSerialPort.ERRCOUNT_INVALID.
     */
    async get_errCount()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_ERRCOUNT_INVALID;
            }
        }
        return this._errCount;
    }

    /**
     * Returns the total number of messages received since last reset.
     *
     * @return {number} an integer corresponding to the total number of messages received since last reset
     *
     * On failure, throws an exception or returns YSerialPort.RXMSGCOUNT_INVALID.
     */
    async get_rxMsgCount()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_RXMSGCOUNT_INVALID;
            }
        }
        return this._rxMsgCount;
    }

    /**
     * Returns the total number of messages send since last reset.
     *
     * @return {number} an integer corresponding to the total number of messages send since last reset
     *
     * On failure, throws an exception or returns YSerialPort.TXMSGCOUNT_INVALID.
     */
    async get_txMsgCount()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_TXMSGCOUNT_INVALID;
            }
        }
        return this._txMsgCount;
    }

    /**
     * Returns the latest message fully received (for Line, Frame and Modbus protocols).
     *
     * @return {string} a string corresponding to the latest message fully received (for Line, Frame and
     * Modbus protocols)
     *
     * On failure, throws an exception or returns YSerialPort.LASTMSG_INVALID.
     */
    async get_lastMsg()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_LASTMSG_INVALID;
            }
        }
        return this._lastMsg;
    }

    /**
     * Returns the name of the job file currently in use.
     *
     * @return {string} a string corresponding to the name of the job file currently in use
     *
     * On failure, throws an exception or returns YSerialPort.CURRENTJOB_INVALID.
     */
    async get_currentJob()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_CURRENTJOB_INVALID;
            }
        }
        return this._currentJob;
    }

    /**
     * Changes the job to use when the device is powered on.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval {string} : a string corresponding to the job to use when the device is powered on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_currentJob(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('currentJob',rest_val);
    }

    /**
     * Returns the job file to use when the device is powered on.
     *
     * @return {string} a string corresponding to the job file to use when the device is powered on
     *
     * On failure, throws an exception or returns YSerialPort.STARTUPJOB_INVALID.
     */
    async get_startupJob()
    {
        if (this._cacheExpiration <= this._yapi.GetTickCount()) {
            if (await this.load(this._yapi.defaultCacheValidity) != YAPI_SUCCESS) {
                return Y_STARTUPJOB_INVALID;
            }
        }
        return this._startupJob;
    }

    /**
     * Changes the job to use when the device is powered on.
     * Remember to call the saveToFlash() method of the module if the
     * modification must be kept.
     *
     * @param newval {string} : a string corresponding to the job to use when the device is powered on
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_startupJob(newval)
    {
        /** @type {string} **/
        let rest_val;
        rest_val = newval;
        return await this._setAttr('startupJob',rest_val);
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
     * Retrieves a serial port for a given identifier.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the serial port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YSerialPort.isOnline() to test if the serial port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a serial port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param func {string} : a string that uniquely characterizes the serial port
     *
     * @return {YSerialPort} a YSerialPort object allowing you to drive the serial port.
     */
    static FindSerialPort(func, obj_yapi = YAPI)
    {
        /** @type {YSerialPort} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, 'SerialPort', func);
        if (obj == null) {
            obj = new YSerialPort(obj_yapi, func);
            YFunction._AddToCache(obj_yapi, 'SerialPort',  func, obj);
        }
        return obj;
    }

    /**
     * Retrieves a serial port for a given identifier in a YAPI context.
     * The identifier can be specified using several formats:
     * <ul>
     * <li>FunctionLogicalName</li>
     * <li>ModuleSerialNumber.FunctionIdentifier</li>
     * <li>ModuleSerialNumber.FunctionLogicalName</li>
     * <li>ModuleLogicalName.FunctionIdentifier</li>
     * <li>ModuleLogicalName.FunctionLogicalName</li>
     * </ul>
     *
     * This function does not require that the serial port is online at the time
     * it is invoked. The returned object is nevertheless valid.
     * Use the method YSerialPort.isOnline() to test if the serial port is
     * indeed online at a given time. In case of ambiguity when looking for
     * a serial port by logical name, no error is notified: the first instance
     * found is returned. The search is performed first by hardware name,
     * then by logical name.
     *
     * @param yctx {YAPIContext} : a YAPI context
     * @param func {string} : a string that uniquely characterizes the serial port
     *
     * @return {YSerialPort} a YSerialPort object allowing you to drive the serial port.
     */
    static FindSerialPortInContext(yctx,func, obj_yapi = YAPI)
    {
        /** @type {YSerialPort} **/
        let obj;
        obj = YFunction._FindFromCache(obj_yapi, yctx,  'SerialPort', func);
        if (obj == null) {
            obj = new YSerialPort(obj_yapi, yctx, func);
            YFunction._AddToCache(obj_yapi, 'SerialPort',  func, obj);
        }
        return obj;
    }

    async sendCommand(text)
    {
        return await this.set_command(text);
    }

    /**
     * Clears the serial port buffer and resets counters to zero.
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async reset()
    {
        this._rxptr = 0;
        // may throw an exception
        return await this.sendCommand('Z');
    }

    /**
     * Manually sets the state of the RTS line. This function has no effect when
     * hardware handshake is enabled, as the RTS line is driven automatically.
     *
     * @param val {number} : 1 to turn RTS on, 0 to turn RTS off
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async set_RTS(val)
    {
        return await this.sendCommand('R'+String(Math.round(val)));
    }

    /**
     * Reads the level of the CTS line. The CTS line is usually driven by
     * the RTS signal of the connected serial device.
     *
     * @return {number} 1 if the CTS line is high, 0 if the CTS line is low.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async get_CTS()
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let res;
        // may throw an exception
        buff = await this._download('cts.txt');
        if (!((buff).length == 1)) {
            return this._throw(YAPI_IO_ERROR,'invalid CTS reply',YAPI_IO_ERROR);
        }
        res = buff[0] - 48;
        return res;
    }

    /**
     * Sends a single byte to the serial port.
     *
     * @param code {number} : the byte to send
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeByte(code)
    {
        return await this.sendCommand('$'+('00'+(code).toString(16)).slice(-2));
    }

    /**
     * Sends an ASCII string to the serial port, as is.
     *
     * @param text {string} : the text string to send
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeStr(text)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let ch;
        buff = this._yapi.imm_str2bin(text);
        bufflen = (buff).length;
        if (bufflen < 100) {
            ch = 0x20;
            idx = 0;
            while ((idx < bufflen) && (ch != 0)) {
                ch = buff[idx];
                if ((ch >= 0x20) && (ch < 0x7f)) {
                    idx = idx + 1;
                } else {
                    ch = 0;
                }
            }
            if (idx >= bufflen) {
                return await this.sendCommand('+'+text);
            }
        }
        // send string using file upload
        return await this._upload('txdata', buff);
    }

    /**
     * Sends a binary buffer to the serial port, as is.
     *
     * @param buff {Uint8Array} : the binary buffer to send
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeBin(buff)
    {
        return await this._upload('txdata', buff);
    }

    /**
     * Sends a byte sequence (provided as a list of bytes) to the serial port.
     *
     * @param byteList {Integer[]} : a list of byte codes
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeArray(byteList)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let hexb;
        /** @type {number} **/
        let res;
        bufflen = byteList.length;
        buff = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
            hexb = byteList[idx];
            buff.set([hexb], idx);
            idx = idx + 1;
        }
        // may throw an exception
        res = await this._upload('txdata', buff);
        return res;
    }

    /**
     * Sends a byte sequence (provided as a hexadecimal string) to the serial port.
     *
     * @param hexString {string} : a string of hexadecimal byte codes
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeHex(hexString)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let hexb;
        /** @type {number} **/
        let res;
        bufflen = (hexString).length;
        if (bufflen < 100) {
            return await this.sendCommand('$'+hexString);
        }
        bufflen = ((bufflen) >> (1));
        buff = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
            hexb = parseInt((hexString).substr( 2 * idx, 2), 16);
            buff.set([hexb], idx);
            idx = idx + 1;
        }
        // may throw an exception
        res = await this._upload('txdata', buff);
        return res;
    }

    /**
     * Sends an ASCII string to the serial port, followed by a line break (CR LF).
     *
     * @param text {string} : the text string to send
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeLine(text)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let ch;
        buff = this._yapi.imm_str2bin(text+'\r\n');
        bufflen = (buff).length-2;
        if (bufflen < 100) {
            ch = 0x20;
            idx = 0;
            while ((idx < bufflen) && (ch != 0)) {
                ch = buff[idx];
                if ((ch >= 0x20) && (ch < 0x7f)) {
                    idx = idx + 1;
                } else {
                    ch = 0;
                }
            }
            if (idx >= bufflen) {
                return await this.sendCommand('!'+text);
            }
        }
        // send string using file upload
        return await this._upload('txdata', buff);
    }

    /**
     * Sends a MODBUS message (provided as a hexadecimal string) to the serial port.
     * The message must start with the slave address. The MODBUS CRC/LRC is
     * automatically added by the function. This function does not wait for a reply.
     *
     * @param hexString {string} : a hexadecimal message string, including device address but no CRC/LRC
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async writeMODBUS(hexString)
    {
        return await this.sendCommand(':'+hexString);
    }

    /**
     * Reads one byte from the receive buffer, starting at current stream position.
     * If data at current stream position is not available anymore in the receive buffer,
     * or if there is no data available yet, the function returns YAPI.NO_MORE_DATA.
     *
     * @return {number} the next byte
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readByte()
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let mult;
        /** @type {number} **/
        let endpos;
        /** @type {number} **/
        let res;
        // may throw an exception
        buff = await this._download('rxdata.bin?pos='+String(Math.round(this._rxptr))+'&len=1');
        bufflen = (buff).length - 1;
        endpos = 0;
        mult = 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            endpos = endpos + mult * (buff[bufflen] - 48);
            mult = mult * 10;
            bufflen = bufflen - 1;
        }
        this._rxptr = endpos;
        if (bufflen == 0) {
            return YAPI_NO_MORE_DATA;
        }
        res = buff[0];
        return res;
    }

    /**
     * Reads data from the receive buffer as a string, starting at current stream position.
     * If data at current stream position is not available anymore in the receive buffer, the
     * function performs a short read.
     *
     * @param nChars {number} : the maximum number of characters to read
     *
     * @return {string} a string with receive buffer contents
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readStr(nChars)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let mult;
        /** @type {number} **/
        let endpos;
        /** @type {string} **/
        let res;
        if (nChars > 65535) {
            nChars = 65535;
        }
        // may throw an exception
        buff = await this._download('rxdata.bin?pos='+String(Math.round(this._rxptr))+'&len='+String(Math.round(nChars)));
        bufflen = (buff).length - 1;
        endpos = 0;
        mult = 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            endpos = endpos + mult * (buff[bufflen] - 48);
            mult = mult * 10;
            bufflen = bufflen - 1;
        }
        this._rxptr = endpos;
        res = (this._yapi.imm_bin2str(buff)).substr( 0, bufflen);
        return res;
    }

    /**
     * Reads data from the receive buffer as a binary buffer, starting at current stream position.
     * If data at current stream position is not available anymore in the receive buffer, the
     * function performs a short read.
     *
     * @param nChars {number} : the maximum number of bytes to read
     *
     * @return {Uint8Array} a binary object with receive buffer contents
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readBin(nChars)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let mult;
        /** @type {number} **/
        let endpos;
        /** @type {number} **/
        let idx;
        /** @type {Uint8Array} **/
        let res;
        if (nChars > 65535) {
            nChars = 65535;
        }
        // may throw an exception
        buff = await this._download('rxdata.bin?pos='+String(Math.round(this._rxptr))+'&len='+String(Math.round(nChars)));
        bufflen = (buff).length - 1;
        endpos = 0;
        mult = 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            endpos = endpos + mult * (buff[bufflen] - 48);
            mult = mult * 10;
            bufflen = bufflen - 1;
        }
        this._rxptr = endpos;
        res = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
            res.set([buff[idx]], idx);
            idx = idx + 1;
        }
        return res;
    }

    /**
     * Reads data from the receive buffer as a list of bytes, starting at current stream position.
     * If data at current stream position is not available anymore in the receive buffer, the
     * function performs a short read.
     *
     * @param nChars {number} : the maximum number of bytes to read
     *
     * @return {Integer[]} a sequence of bytes with receive buffer contents
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readArray(nChars)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let mult;
        /** @type {number} **/
        let endpos;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let b;
        /** @type {number[]} **/
        let res = [];
        if (nChars > 65535) {
            nChars = 65535;
        }
        // may throw an exception
        buff = await this._download('rxdata.bin?pos='+String(Math.round(this._rxptr))+'&len='+String(Math.round(nChars)));
        bufflen = (buff).length - 1;
        endpos = 0;
        mult = 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            endpos = endpos + mult * (buff[bufflen] - 48);
            mult = mult * 10;
            bufflen = bufflen - 1;
        }
        this._rxptr = endpos;
        res.length = 0;
        idx = 0;
        while (idx < bufflen) {
            b = buff[idx];
            res.push(b);
            idx = idx + 1;
        }
        return res;
    }

    /**
     * Reads data from the receive buffer as a hexadecimal string, starting at current stream position.
     * If data at current stream position is not available anymore in the receive buffer, the
     * function performs a short read.
     *
     * @param nBytes {number} : the maximum number of bytes to read
     *
     * @return {string} a string with receive buffer contents, encoded in hexadecimal
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readHex(nBytes)
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let mult;
        /** @type {number} **/
        let endpos;
        /** @type {number} **/
        let ofs;
        /** @type {string} **/
        let res;
        if (nBytes > 65535) {
            nBytes = 65535;
        }
        // may throw an exception
        buff = await this._download('rxdata.bin?pos='+String(Math.round(this._rxptr))+'&len='+String(Math.round(nBytes)));
        bufflen = (buff).length - 1;
        endpos = 0;
        mult = 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            endpos = endpos + mult * (buff[bufflen] - 48);
            mult = mult * 10;
            bufflen = bufflen - 1;
        }
        this._rxptr = endpos;
        res = '';
        ofs = 0;
        while (ofs + 3 < bufflen) {
            res = res+''+('00'+(buff[ofs]).toString(16)).slice(-2)+''+('00'+(buff[ofs + 1]).toString(16)).slice(-2)+''+('00'+(buff[ofs + 2]).toString(16)).slice(-2)+''+('00'+(buff[ofs + 3]).toString(16)).slice(-2);
            ofs = ofs + 4;
        }
        while (ofs < bufflen) {
            res = res+''+('00'+(buff[ofs]).toString(16)).slice(-2);
            ofs = ofs + 1;
        }
        return res;
    }

    /**
     * Reads a single line (or message) from the receive buffer, starting at current stream position.
     * This function is intended to be used when the serial port is configured for a message protocol,
     * such as 'Line' mode or MODBUS protocols.
     *
     * If data at current stream position is not available anymore in the receive buffer,
     * the function returns the oldest available line and moves the stream position just after.
     * If no new full line is received, the function returns an empty line.
     *
     * @return {string} a string with a single line of text
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async readLine()
    {
        /** @type {string} **/
        let url;
        /** @type {Uint8Array} **/
        let msgbin;
        /** @type {string[]} **/
        let msgarr = [];
        /** @type {number} **/
        let msglen;
        /** @type {string} **/
        let res;
        // may throw an exception
        url = 'rxmsg.json?pos='+String(Math.round(this._rxptr))+'&len=1&maxw=1';
        msgbin = await this._download(url);
        msgarr = this.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
            return '';
        }
        // last element of array is the new position
        msglen = msglen - 1;
        this._rxptr = this._yapi.imm_atoi(msgarr[msglen]);
        if (msglen == 0) {
            return '';
        }
        res = this.imm_json_get_string(this._yapi.imm_str2bin(msgarr[0]));
        return res;
    }

    /**
     * Searches for incoming messages in the serial port receive buffer matching a given pattern,
     * starting at current position. This function will only compare and return printable characters
     * in the message strings. Binary protocols are handled as hexadecimal strings.
     *
     * The search returns all messages matching the expression provided as argument in the buffer.
     * If no matching message is found, the search waits for one up to the specified maximum timeout
     * (in milliseconds).
     *
     * @param pattern {string} : a limited regular expression describing the expected message format,
     *         or an empty string if all messages should be returned (no filtering).
     *         When using binary protocols, the format applies to the hexadecimal
     *         representation of the message.
     * @param maxWait {number} : the maximum number of milliseconds to wait for a message if none is found
     *         in the receive buffer.
     *
     * @return {string[]} an array of strings containing the messages found, if any.
     *         Binary messages are converted to hexadecimal representation.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async readMessages(pattern,maxWait)
    {
        /** @type {string} **/
        let url;
        /** @type {Uint8Array} **/
        let msgbin;
        /** @type {string[]} **/
        let msgarr = [];
        /** @type {number} **/
        let msglen;
        /** @type {string[]} **/
        let res = [];
        /** @type {number} **/
        let idx;
        // may throw an exception
        url = 'rxmsg.json?pos='+String(Math.round(this._rxptr))+'&maxw='+String(Math.round(maxWait))+'&pat='+pattern;
        msgbin = await this._download(url);
        msgarr = this.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
            return res;
        }
        // last element of array is the new position
        msglen = msglen - 1;
        this._rxptr = this._yapi.imm_atoi(msgarr[msglen]);
        idx = 0;
        while (idx < msglen) {
            res.push(this.imm_json_get_string(this._yapi.imm_str2bin(msgarr[idx])));
            idx = idx + 1;
        }
        return res;
    }

    /**
     * Changes the current internal stream position to the specified value. This function
     * does not affect the device, it only changes the value stored in the YSerialPort object
     * for the next read operations.
     *
     * @param absPos {number} : the absolute position index for next read operations.
     *
     * @return {number} nothing.
     */
    async read_seek(absPos)
    {
        this._rxptr = absPos;
        return YAPI_SUCCESS;
    }

    /**
     * Returns the current absolute stream position pointer of the YSerialPort object.
     *
     * @return {number} the absolute position index for next read operations.
     */
    async read_tell()
    {
        return this._rxptr;
    }

    /**
     * Returns the number of bytes available to read in the input buffer starting from the
     * current absolute stream position pointer of the YSerialPort object.
     *
     * @return {number} the number of bytes available to read
     */
    async read_avail()
    {
        /** @type {Uint8Array} **/
        let buff;
        /** @type {number} **/
        let bufflen;
        /** @type {number} **/
        let res;
        // may throw an exception
        buff = await this._download('rxcnt.bin?pos='+String(Math.round(this._rxptr)));
        bufflen = (buff).length - 1;
        while ((bufflen > 0) && (buff[bufflen] != 64)) {
            bufflen = bufflen - 1;
        }
        res = this._yapi.imm_atoi((this._yapi.imm_bin2str(buff)).substr( 0, bufflen));
        return res;
    }

    /**
     * Sends a text line query to the serial port, and reads the reply, if any.
     * This function is intended to be used when the serial port is configured for 'Line' protocol.
     *
     * @param query {string} : the line query to send (without CR/LF)
     * @param maxWait {number} : the maximum number of milliseconds to wait for a reply.
     *
     * @return {string} the next text line received after sending the text query, as a string.
     *         Additional lines can be obtained by calling readLine or readMessages.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async queryLine(query,maxWait)
    {
        /** @type {string} **/
        let url;
        /** @type {Uint8Array} **/
        let msgbin;
        /** @type {string[]} **/
        let msgarr = [];
        /** @type {number} **/
        let msglen;
        /** @type {string} **/
        let res;
        // may throw an exception
        url = 'rxmsg.json?len=1&maxw='+String(Math.round(maxWait))+'&cmd=!'+query;
        msgbin = await this._download(url);
        msgarr = this.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
            return '';
        }
        // last element of array is the new position
        msglen = msglen - 1;
        this._rxptr = this._yapi.imm_atoi(msgarr[msglen]);
        if (msglen == 0) {
            return '';
        }
        res = this.imm_json_get_string(this._yapi.imm_str2bin(msgarr[0]));
        return res;
    }

    /**
     * Sends a message to a specified MODBUS slave connected to the serial port, and reads the
     * reply, if any. The message is the PDU, provided as a vector of bytes.
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to query
     * @param pduBytes {Integer[]} : the message to send (PDU), as a vector of bytes. The first byte of the
     *         PDU is the MODBUS function code.
     *
     * @return {Integer[]} the received reply, as a vector of bytes.
     *
     * On failure, throws an exception or returns an empty array (or a MODBUS error reply).
     */
    async queryMODBUS(slaveNo,pduBytes)
    {
        /** @type {number} **/
        let funCode;
        /** @type {number} **/
        let nib;
        /** @type {number} **/
        let i;
        /** @type {string} **/
        let cmd;
        /** @type {string} **/
        let url;
        /** @type {string} **/
        let pat;
        /** @type {Uint8Array} **/
        let msgs;
        /** @type {string[]} **/
        let reps = [];
        /** @type {string} **/
        let rep;
        /** @type {number[]} **/
        let res = [];
        /** @type {number} **/
        let replen;
        /** @type {number} **/
        let hexb;
        funCode = pduBytes[0];
        nib = ((funCode) >> (4));
        pat = ('00'+(slaveNo).toString(16)).slice(-2)+'['+(nib).toString(16)+''+((nib+8)).toString(16)+']'+(((funCode) & (15))).toString(16)+'.*';
        cmd = ('00'+(slaveNo).toString(16)).slice(-2)+''+('00'+(funCode).toString(16)).slice(-2);
        i = 1;
        while (i < pduBytes.length) {
            cmd = cmd+''+('00'+(((pduBytes[i]) & (0xff))).toString(16)).slice(-2);
            i = i + 1;
        }
        // may throw an exception
        url = 'rxmsg.json?cmd=:'+cmd+'&pat=:'+pat;
        msgs = await this._download(url);
        reps = this.imm_json_get_array(msgs);
        if (!(reps.length > 1)) {
            return this._throw(YAPI_IO_ERROR,'no reply from slave',res);
        }
        if (reps.length > 1) {
            rep = this.imm_json_get_string(this._yapi.imm_str2bin(reps[0]));
            replen = (((rep).length - 3) >> (1));
            i = 0;
            while (i < replen) {
                hexb = parseInt((rep).substr(2 * i + 3, 2), 16);
                res.push(hexb);
                i = i + 1;
            }
            if (res[0] != funCode) {
                i = res[1];
                if (!(i > 1)) {
                    return this._throw(YAPI_NOT_SUPPORTED,'MODBUS error: unsupported function code',res);
                }
                if (!(i > 2)) {
                    return this._throw(YAPI_INVALID_ARGUMENT,'MODBUS error: illegal data address',res);
                }
                if (!(i > 3)) {
                    return this._throw(YAPI_INVALID_ARGUMENT,'MODBUS error: illegal data value',res);
                }
                if (!(i > 4)) {
                    return this._throw(YAPI_INVALID_ARGUMENT,'MODBUS error: failed to execute function',res);
                }
            }
        }
        return res;
    }

    /**
     * Reads one or more contiguous internal bits (or coil status) from a MODBUS serial device.
     * This method uses the MODBUS function code 0x01 (Read Coils).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to query
     * @param pduAddr {number} : the relative address of the first bit/coil to read (zero-based)
     * @param nBits {number} : the number of bits/coils to read
     *
     * @return {Integer[]} a vector of integers, each corresponding to one bit.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async modbusReadBits(slaveNo,pduAddr,nBits)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number[]} **/
        let res = [];
        /** @type {number} **/
        let bitpos;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let val;
        /** @type {number} **/
        let mask;
        pdu.push(0x01);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nBits) >> (8)));
        pdu.push(((nBits) & (0xff)));
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        bitpos = 0;
        idx = 2;
        val = reply[idx];
        mask = 1;
        while (bitpos < nBits) {
            if (((val) & (mask)) == 0) {
                res.push(0);
            } else {
                res.push(1);
            }
            bitpos = bitpos + 1;
            if (mask == 0x80) {
                idx = idx + 1;
                val = reply[idx];
                mask = 1;
            } else {
                mask = ((mask) << (1));
            }
        }
        return res;
    }

    /**
     * Reads one or more contiguous input bits (or discrete inputs) from a MODBUS serial device.
     * This method uses the MODBUS function code 0x02 (Read Discrete Inputs).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to query
     * @param pduAddr {number} : the relative address of the first bit/input to read (zero-based)
     * @param nBits {number} : the number of bits/inputs to read
     *
     * @return {Integer[]} a vector of integers, each corresponding to one bit.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async modbusReadInputBits(slaveNo,pduAddr,nBits)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number[]} **/
        let res = [];
        /** @type {number} **/
        let bitpos;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let val;
        /** @type {number} **/
        let mask;
        pdu.push(0x02);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nBits) >> (8)));
        pdu.push(((nBits) & (0xff)));
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        bitpos = 0;
        idx = 2;
        val = reply[idx];
        mask = 1;
        while (bitpos < nBits) {
            if (((val) & (mask)) == 0) {
                res.push(0);
            } else {
                res.push(1);
            }
            bitpos = bitpos + 1;
            if (mask == 0x80) {
                idx = idx + 1;
                val = reply[idx];
                mask = 1;
            } else {
                mask = ((mask) << (1));
            }
        }
        return res;
    }

    /**
     * Reads one or more contiguous internal registers (holding registers) from a MODBUS serial device.
     * This method uses the MODBUS function code 0x03 (Read Holding Registers).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to query
     * @param pduAddr {number} : the relative address of the first holding register to read (zero-based)
     * @param nWords {number} : the number of holding registers to read
     *
     * @return {Integer[]} a vector of integers, each corresponding to one 16-bit register value.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async modbusReadRegisters(slaveNo,pduAddr,nWords)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number[]} **/
        let res = [];
        /** @type {number} **/
        let regpos;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let val;
        pdu.push(0x03);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nWords) >> (8)));
        pdu.push(((nWords) & (0xff)));
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nWords) {
            val = ((reply[idx]) << (8));
            idx = idx + 1;
            val = val + reply[idx];
            idx = idx + 1;
            res.push(val);
            regpos = regpos + 1;
        }
        return res;
    }

    /**
     * Reads one or more contiguous input registers (read-only registers) from a MODBUS serial device.
     * This method uses the MODBUS function code 0x04 (Read Input Registers).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to query
     * @param pduAddr {number} : the relative address of the first input register to read (zero-based)
     * @param nWords {number} : the number of input registers to read
     *
     * @return {Integer[]} a vector of integers, each corresponding to one 16-bit input value.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async modbusReadInputRegisters(slaveNo,pduAddr,nWords)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number[]} **/
        let res = [];
        /** @type {number} **/
        let regpos;
        /** @type {number} **/
        let idx;
        /** @type {number} **/
        let val;
        pdu.push(0x04);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nWords) >> (8)));
        pdu.push(((nWords) & (0xff)));
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nWords) {
            val = ((reply[idx]) << (8));
            idx = idx + 1;
            val = val + reply[idx];
            idx = idx + 1;
            res.push(val);
            regpos = regpos + 1;
        }
        return res;
    }

    /**
     * Sets a single internal bit (or coil) on a MODBUS serial device.
     * This method uses the MODBUS function code 0x05 (Write Single Coil).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to drive
     * @param pduAddr {number} : the relative address of the bit/coil to set (zero-based)
     * @param value {number} : the value to set (0 for OFF state, non-zero for ON state)
     *
     * @return {number} the number of bits/coils affected on the device (1)
     *
     * On failure, throws an exception or returns zero.
     */
    async modbusWriteBit(slaveNo,pduAddr,value)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number} **/
        let res;
        res = 0;
        if (value != 0) {
            value = 0xff;
        }
        pdu.push(0x05);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(value);
        pdu.push(0x00);
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        res = 1;
        return res;
    }

    /**
     * Sets several contiguous internal bits (or coils) on a MODBUS serial device.
     * This method uses the MODBUS function code 0x0f (Write Multiple Coils).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to drive
     * @param pduAddr {number} : the relative address of the first bit/coil to set (zero-based)
     * @param bits {Integer[]} : the vector of bits to be set (one integer per bit)
     *
     * @return {number} the number of bits/coils affected on the device
     *
     * On failure, throws an exception or returns zero.
     */
    async modbusWriteBits(slaveNo,pduAddr,bits)
    {
        /** @type {number} **/
        let nBits;
        /** @type {number} **/
        let nBytes;
        /** @type {number} **/
        let bitpos;
        /** @type {number} **/
        let val;
        /** @type {number} **/
        let mask;
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number} **/
        let res;
        res = 0;
        nBits = bits.length;
        nBytes = (((nBits + 7)) >> (3));
        pdu.push(0x0f);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nBits) >> (8)));
        pdu.push(((nBits) & (0xff)));
        pdu.push(nBytes);
        bitpos = 0;
        val = 0;
        mask = 1;
        while (bitpos < nBits) {
            if (bits[bitpos] != 0) {
                val = ((val) | (mask));
            }
            bitpos = bitpos + 1;
            if (mask == 0x80) {
                pdu.push(val);
                val = 0;
                mask = 1;
            } else {
                mask = ((mask) << (1));
            }
        }
        if (mask != 1) {
            pdu.push(val);
        }
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        res = ((reply[3]) << (8));
        res = res + reply[4];
        return res;
    }

    /**
     * Sets a single internal register (or holding register) on a MODBUS serial device.
     * This method uses the MODBUS function code 0x06 (Write Single Register).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to drive
     * @param pduAddr {number} : the relative address of the register to set (zero-based)
     * @param value {number} : the 16 bit value to set
     *
     * @return {number} the number of registers affected on the device (1)
     *
     * On failure, throws an exception or returns zero.
     */
    async modbusWriteRegister(slaveNo,pduAddr,value)
    {
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number} **/
        let res;
        res = 0;
        if (value != 0) {
            value = 0xff;
        }
        pdu.push(0x06);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((value) >> (8)));
        pdu.push(((value) & (0xff)));
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        res = 1;
        return res;
    }

    /**
     * Sets several contiguous internal registers (or holding registers) on a MODBUS serial device.
     * This method uses the MODBUS function code 0x10 (Write Multiple Registers).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to drive
     * @param pduAddr {number} : the relative address of the first internal register to set (zero-based)
     * @param values {Integer[]} : the vector of 16 bit values to set
     *
     * @return {number} the number of registers affected on the device
     *
     * On failure, throws an exception or returns zero.
     */
    async modbusWriteRegisters(slaveNo,pduAddr,values)
    {
        /** @type {number} **/
        let nWords;
        /** @type {number} **/
        let nBytes;
        /** @type {number} **/
        let regpos;
        /** @type {number} **/
        let val;
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number} **/
        let res;
        res = 0;
        nWords = values.length;
        nBytes = 2 * nWords;
        pdu.push(0x10);
        pdu.push(((pduAddr) >> (8)));
        pdu.push(((pduAddr) & (0xff)));
        pdu.push(((nWords) >> (8)));
        pdu.push(((nWords) & (0xff)));
        pdu.push(nBytes);
        regpos = 0;
        while (regpos < nWords) {
            val = values[regpos];
            pdu.push(((val) >> (8)));
            pdu.push(((val) & (0xff)));
            regpos = regpos + 1;
        }
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        res = ((reply[3]) << (8));
        res = res + reply[4];
        return res;
    }

    /**
     * Sets several contiguous internal registers (holding registers) on a MODBUS serial device,
     * then performs a contiguous read of a set of (possibly different) internal registers.
     * This method uses the MODBUS function code 0x17 (Read/Write Multiple Registers).
     *
     * @param slaveNo {number} : the address of the slave MODBUS device to drive
     * @param pduWriteAddr {number} : the relative address of the first internal register to set (zero-based)
     * @param values {Integer[]} : the vector of 16 bit values to set
     * @param pduReadAddr {number} : the relative address of the first internal register to read (zero-based)
     * @param nReadWords {number} : the number of 16 bit values to read
     *
     * @return {Integer[]} a vector of integers, each corresponding to one 16-bit register value read.
     *
     * On failure, throws an exception or returns an empty array.
     */
    async modbusWriteAndReadRegisters(slaveNo,pduWriteAddr,values,pduReadAddr,nReadWords)
    {
        /** @type {number} **/
        let nWriteWords;
        /** @type {number} **/
        let nBytes;
        /** @type {number} **/
        let regpos;
        /** @type {number} **/
        let val;
        /** @type {number} **/
        let idx;
        /** @type {number[]} **/
        let pdu = [];
        /** @type {number[]} **/
        let reply = [];
        /** @type {number[]} **/
        let res = [];
        nWriteWords = values.length;
        nBytes = 2 * nWriteWords;
        pdu.push(0x17);
        pdu.push(((pduReadAddr) >> (8)));
        pdu.push(((pduReadAddr) & (0xff)));
        pdu.push(((nReadWords) >> (8)));
        pdu.push(((nReadWords) & (0xff)));
        pdu.push(((pduWriteAddr) >> (8)));
        pdu.push(((pduWriteAddr) & (0xff)));
        pdu.push(((nWriteWords) >> (8)));
        pdu.push(((nWriteWords) & (0xff)));
        pdu.push(nBytes);
        regpos = 0;
        while (regpos < nWriteWords) {
            val = values[regpos];
            pdu.push(((val) >> (8)));
            pdu.push(((val) & (0xff)));
            regpos = regpos + 1;
        }
        // may throw an exception
        reply = await this.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
            return res;
        }
        if (reply[0] != pdu[0]) {
            return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nReadWords) {
            val = ((reply[idx]) << (8));
            idx = idx + 1;
            val = val + reply[idx];
            idx = idx + 1;
            res.push(val);
            regpos = regpos + 1;
        }
        return res;
    }

    /**
     * Saves the job definition string (JSON data) into a job file.
     * The job file can be later enabled using selectJob().
     *
     * @param jobfile {string} : name of the job file to save on the device filesystem
     * @param jsonDef {string} : a string containing a JSON definition of the job
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async uploadJob(jobfile,jsonDef)
    {
        await this._upload(jobfile, this._yapi.imm_str2bin(jsonDef));
        return YAPI_SUCCESS;
    }

    /**
     * Load and start processing the specified job file. The file must have
     * been previously created using the user interface or uploaded on the
     * device filesystem using the uploadJob() function.
     *
     * @param jobfile {string} : name of the job file (on the device filesystem)
     *
     * @return {number} YAPI.SUCCESS if the call succeeds.
     *
     * On failure, throws an exception or returns a negative error code.
     */
    async selectJob(jobfile)
    {
        return await this.set_currentJob(jobfile);
    }

    /**
     * Continues the enumeration of serial ports started using yFirstSerialPort().
     *
     * @return {YSerialPort} a pointer to a YSerialPort object, corresponding to
     *         a serial port currently online, or a null pointer
     *         if there are no more serial ports to enumerate.
     */
    /**/ nextSerialPort()
    {
        /** @type {object} **/
        let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
        if(resolve.errorType != YAPI_SUCCESS) return null;
        /** @type {string} **/
        let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
        if(next_hwid == null) return null;
        return YSerialPort.FindSerialPort(next_hwid, this._yapi);
    }

    /**
     * Starts the enumeration of serial ports currently accessible.
     * Use the method YSerialPort.nextSerialPort() to iterate on
     * next serial ports.
     *
     * @return {YSerialPort} a pointer to a YSerialPort object, corresponding to
     *         the first serial port currently online, or a null pointer
     *         if there are none.
     */
    static FirstSerialPort(obj_yapi = YAPI)
    {
        /** @type {string} **/
        let next_hwid = obj_yapi.imm_getFirstHardwareId('SerialPort');
        if(next_hwid == null) return null;
        return YSerialPort.FindSerialPort(next_hwid, obj_yapi);
    }

    //--- (end of YSerialPort implementation)
}

//--- (SerialPort functions)

/**
 * comment from .yc definition
 */
export function yFindSerialPort(func)
{
    return YSerialPort.FindSerialPort(func);
}

/**
 * comment from .yc definition
 */
export function yFirstSerialPort()
{
    return YSerialPort.FirstSerialPort();
}

//--- (end of SerialPort functions)
