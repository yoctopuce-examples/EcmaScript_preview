Preview of the YEcmaScript 2015 library
=======================================

## License information

Copyright (C) 2015 and beyond by Yoctopuce Sarl, Switzerland.

Yoctopuce Sarl (hereafter Licensor) grants to you a perpetual
non-exclusive license to use, modify, copy and integrate this
file into your software for the sole purpose of interfacing
with Yoctopuce products.

You may reproduce and distribute copies of this file in
source or object form, as long as the sole purpose of this
code is to interface with Yoctopuce products. You must retain
this notice in the distributed source file.

You should refer to Yoctopuce General Terms and Conditions
for additional information regarding your rights and
obligations.

THE SOFTWARE AND DOCUMENTATION ARE PROVIDED "AS IS" WITHOUT
WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO
EVENT SHALL LICENSOR BE LIABLE FOR ANY INCIDENTAL, SPECIAL,
INDIRECT OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA,
COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY OR
SERVICES, ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT
LIMITED TO ANY DEFENSE THEREOF), ANY CLAIMS FOR INDEMNITY OR
CONTRIBUTION, OR OTHER SIMILAR COSTS, WHETHER ASSERTED ON THE
BASIS OF CONTRACT, TORT (INCLUDING NEGLIGENCE), BREACH OF
WARRANTY, OR OTHERWISE.

## Content of this package

* **bin/**
	Misc tools used internally
* **bundles/**
	Pretranspiled files
* **example_html/**
	Directory with examples that run into a web browser
* **example_node/**
	Directory with examples that run on node.js
* **lib/**
	Source code of the library (in Javascript)
* **config.js**
	jspm's package file
* **jspm-index.js**
	Root file for Javascript package manager
* **LICENCE.TXT**
	Yoctopuce Licence
* **npm-index.js**
	Root file for node package manager
* **package.json**
	npm's package file


## Installation

Start by installing Node.Js for your system, because you'll need it to install jspm. It's very easy, under Windows you
only have to run the installer and that's it. Make sure to install it fully, including npm, and add it to the system
path. Now, you must install jspm on the machine. You can do this very easily with an npm command:
```bash
 npm install jspm -g
```

Then, you can prepare npm and jspm to work with our EcmaScript Yoctopuce library. To do so, go to the library root
directory and run:

```bash
npm install
jspm install
```


## Running the library examples

To transpile and run with Node.JS one of the examples, you can simply use the jspm run command:

```bash
jspm run example_nodejs/Doc-Inventory/inventory.js
```


For HTML examples, it's even simpler: you only have to open the HTML file with a browser, as it is the SystemJS module
manager which loads and transpiles the code on the fly.

To avoid transpiling the library each time you run the code, because it takes a few seconds, you can ask jspm to
pre-build a bundle with the translation of all the classes and all the shims needed to run these classes.

Here is how to proceed:

```bash
jspm bundle lib/yocto_api bundles/yocto_api.js --inject
```


The module manager is then able to automatically intercept all the references to the yocto_api module and to use the
pre-transpiled bundle instead.

Finally, to make a monolithic compressed file with all the dependencies of a project, as said above, you use the
following command:

```bash
jspm bundle-sfx --minify example_html/Doc-Inventory/inventory inventory-sfx.js
```


## More information

* http://www.yoctopuce.com/EN/article/experimenting-with-ecmascript-2015
* http://www.yoctopuce.com/EN/article/remote-device-control-using-websocket-callbacks

