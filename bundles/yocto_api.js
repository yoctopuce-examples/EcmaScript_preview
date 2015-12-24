System.registerDynamic("npm:babel-runtime@5.8.34/helpers/class-call-check", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/define-property", ["npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/object/define-property", ["npm:core-js@1.2.6/library/fn/object/define-property"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/define-property'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/helpers/create-class", ["npm:babel-runtime@5.8.34/core-js/object/define-property"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('npm:babel-runtime@5.8.34/core-js/object/define-property')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.object-sap", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      fails = $__require('npm:core-js@1.2.6/library/modules/$.fails');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor", ["npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.object-sap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  $__require('npm:core-js@1.2.6/library/modules/$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor", ["npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/helpers/get", ["npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$getOwnPropertyDescriptor = $__require('npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/helpers/inherits", ["npm:babel-runtime@5.8.34/core-js/object/create", "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$create = $__require('npm:babel-runtime@5.8.34/core-js/object/create')["default"];
  var _Object$setPrototypeOf = $__require('npm:babel-runtime@5.8.34/core-js/object/set-prototype-of')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.keyof", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.to-iobject"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  module.exports = function(object, el) {
    var O = toIObject(object),
        keys = $.getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index)
      if (O[key = keys[index++]] === el)
        return key;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.get-names", ["npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      getNames = $__require('npm:core-js@1.2.6/library/modules/$').getNames,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames(toIObject(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.enum-keys", ["npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$');
  module.exports = function(it) {
    var keys = $.getKeys(it),
        getSymbols = $.getSymbols;
    if (getSymbols) {
      var symbols = getSymbols(it),
          isEnum = $.isEnum,
          i = 0,
          key;
      while (symbols.length > i)
        if (isEnum.call(it, key = symbols[i++]))
          keys.push(key);
    }
    return keys;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array", ["npm:core-js@1.2.6/library/modules/$.cof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof');
  module.exports = Array.isArray || function(arg) {
    return cof(arg) == 'Array';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.symbol", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.redefine", "npm:core-js@1.2.6/library/modules/$.fails", "npm:core-js@1.2.6/library/modules/$.shared", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.keyof", "npm:core-js@1.2.6/library/modules/$.get-names", "npm:core-js@1.2.6/library/modules/$.enum-keys", "npm:core-js@1.2.6/library/modules/$.is-array", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.library"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine'),
      $fails = $__require('npm:core-js@1.2.6/library/modules/$.fails'),
      shared = $__require('npm:core-js@1.2.6/library/modules/$.shared'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid'),
      wks = $__require('npm:core-js@1.2.6/library/modules/$.wks'),
      keyOf = $__require('npm:core-js@1.2.6/library/modules/$.keyof'),
      $names = $__require('npm:core-js@1.2.6/library/modules/$.get-names'),
      enumKeys = $__require('npm:core-js@1.2.6/library/modules/$.enum-keys'),
      isArray = $__require('npm:core-js@1.2.6/library/modules/$.is-array'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      getDesc = $.getDesc,
      setDesc = $.setDesc,
      _create = $.create,
      getNames = $names.get,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      setter = false,
      HIDDEN = wks('_hidden'),
      isEnum = $.isEnum,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      useNative = typeof $Symbol == 'function',
      ObjectProto = Object.prototype;
  var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create(setDesc({}, 'a', {get: function() {
        return setDesc(this, 'a', {value: 7}).a;
      }})).a != 7;
  }) ? function(it, key, D) {
    var protoDesc = getDesc(ObjectProto, key);
    if (protoDesc)
      delete ObjectProto[key];
    setDesc(it, key, D);
    if (protoDesc && it !== ObjectProto)
      setDesc(ObjectProto, key, protoDesc);
  } : setDesc;
  var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol.prototype);
    sym._k = tag;
    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value) {
        if (has(this, HIDDEN) && has(this[HIDDEN], tag))
          this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return sym;
  };
  var isSymbol = function(it) {
    return typeof it == 'symbol';
  };
  var $defineProperty = function defineProperty(it, key, D) {
    if (D && has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN))
          setDesc(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key])
          it[HIDDEN][key] = false;
        D = _create(D, {enumerable: createDesc(0, false)});
      }
      return setSymbolDesc(it, key, D);
    }
    return setDesc(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i)
      $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key);
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    var D = getDesc(it = toIObject(it), key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
      D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN)
        result.push(key);
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var names = getNames(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i)
      if (has(AllSymbols, key = names[i++]))
        result.push(AllSymbols[key]);
    return result;
  };
  var $stringify = function stringify(it) {
    if (it === undefined || isSymbol(it))
      return;
    var args = [it],
        i = 1,
        $$ = arguments,
        replacer,
        $replacer;
    while ($$.length > i)
      args.push($$[i++]);
    replacer = args[1];
    if (typeof replacer == 'function')
      $replacer = replacer;
    if ($replacer || !isArray(replacer))
      replacer = function(key, value) {
        if ($replacer)
          value = $replacer.call(this, key, value);
        if (!isSymbol(value))
          return value;
      };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  };
  var buggyJSON = $fails(function() {
    var S = $Symbol();
    return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
  });
  if (!useNative) {
    $Symbol = function Symbol() {
      if (isSymbol(this))
        throw TypeError('Symbol is not a constructor');
      return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
    };
    redefine($Symbol.prototype, 'toString', function toString() {
      return this._k;
    });
    isSymbol = function(it) {
      return it instanceof $Symbol;
    };
    $.create = $create;
    $.isEnum = $propertyIsEnumerable;
    $.getDesc = $getOwnPropertyDescriptor;
    $.setDesc = $defineProperty;
    $.setDescs = $defineProperties;
    $.getNames = $names.get = $getOwnPropertyNames;
    $.getSymbols = $getOwnPropertySymbols;
    if (DESCRIPTORS && !$__require('npm:core-js@1.2.6/library/modules/$.library')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
  }
  var symbolStatics = {
    'for': function(key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    keyFor: function keyFor(key) {
      return keyOf(SymbolRegistry, key);
    },
    useSetter: function() {
      setter = true;
    },
    useSimple: function() {
      setter = false;
    }
  };
  $.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function(it) {
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  });
  setter = true;
  $export($export.G + $export.W, {Symbol: $Symbol});
  $export($export.S, 'Symbol', symbolStatics);
  $export($export.S + $export.F * !useNative, 'Object', {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
  setToStringTag($Symbol, 'Symbol');
  setToStringTag(Math, 'Math', true);
  setToStringTag(global.JSON, 'JSON', true);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/symbol/index", ["npm:core-js@1.2.6/library/modules/es6.symbol", "npm:core-js@1.2.6/library/modules/es6.object.to-string", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.symbol');
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').Symbol;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/symbol", ["npm:core-js@1.2.6/library/fn/symbol/index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/fn/symbol/index');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/symbol", ["npm:core-js@1.2.6/library/fn/symbol"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/symbol'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/create", ["npm:core-js@1.2.6/library/modules/$"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/object/create", ["npm:core-js@1.2.6/library/fn/object/create"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/create'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of", ["npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.set-proto"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $export = $__require('npm:core-js@1.2.6/library/modules/$.export');
  $export($export.S, 'Object', {setPrototypeOf: $__require('npm:core-js@1.2.6/library/modules/$.set-proto').set});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/set-prototype-of", ["npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').Object.setPrototypeOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/object/set-prototype-of", ["npm:core-js@1.2.6/library/fn/object/set-prototype-of"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/set-prototype-of'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.object.to-string", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.add-to-unscopables", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-step", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iobject", ["npm:core-js@1.2.6/library/modules/$.cof"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-iobject", ["npm:core-js@1.2.6/library/modules/$.iobject", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IObject = $__require('npm:core-js@1.2.6/library/modules/$.iobject'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.iterator", ["npm:core-js@1.2.6/library/modules/$.add-to-unscopables", "npm:core-js@1.2.6/library/modules/$.iter-step", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.to-iobject", "npm:core-js@1.2.6/library/modules/$.iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var addToUnscopables = $__require('npm:core-js@1.2.6/library/modules/$.add-to-unscopables'),
      step = $__require('npm:core-js@1.2.6/library/modules/$.iter-step'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      toIObject = $__require('npm:core-js@1.2.6/library/modules/$.to-iobject');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.iter-define')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/web.dom.iterable", ["npm:core-js@1.2.6/library/modules/es6.array.iterator", "npm:core-js@1.2.6/library/modules/$.iterators"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.array.iterator');
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.strict-new", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.for-of", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.iter-call", "npm:core-js@1.2.6/library/modules/$.is-array-iter", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/core.get-iterator-method"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-proto", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.ctx"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var getDesc = $__require('npm:core-js@1.2.6/library/modules/$').getDesc,
      isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.6/library/modules/$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.same-value", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.species-constructor", ["npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
      aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.invoke", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.html", ["npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.global').document && document.documentElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.dom-create", ["npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
      document = $__require('npm:core-js@1.2.6/library/modules/$.global').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.task", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.invoke", "npm:core-js@1.2.6/library/modules/$.html", "npm:core-js@1.2.6/library/modules/$.dom-create", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
        invoke = $__require('npm:core-js@1.2.6/library/modules/$.invoke'),
        html = $__require('npm:core-js@1.2.6/library/modules/$.html'),
        cel = $__require('npm:core-js@1.2.6/library/modules/$.dom-create'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('npm:core-js@1.2.6/library/modules/$.cof')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.microtask", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.task", "npm:core-js@1.2.6/library/modules/$.cof", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        macrotask = $__require('npm:core-js@1.2.6/library/modules/$.task').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('npm:core-js@1.2.6/library/modules/$.cof')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine-all", ["npm:core-js@1.2.6/library/modules/$.redefine"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-species", ["npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      DESCRIPTORS = $__require('npm:core-js@1.2.6/library/modules/$.descriptors'),
      SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.promise", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.library", "npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.classof", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.is-object", "npm:core-js@1.2.6/library/modules/$.an-object", "npm:core-js@1.2.6/library/modules/$.a-function", "npm:core-js@1.2.6/library/modules/$.strict-new", "npm:core-js@1.2.6/library/modules/$.for-of", "npm:core-js@1.2.6/library/modules/$.set-proto", "npm:core-js@1.2.6/library/modules/$.same-value", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.species-constructor", "npm:core-js@1.2.6/library/modules/$.microtask", "npm:core-js@1.2.6/library/modules/$.descriptors", "npm:core-js@1.2.6/library/modules/$.redefine-all", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.set-species", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.iter-detect", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
        LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library'),
        global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
        ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
        classof = $__require('npm:core-js@1.2.6/library/modules/$.classof'),
        $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
        isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object'),
        anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object'),
        aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function'),
        strictNew = $__require('npm:core-js@1.2.6/library/modules/$.strict-new'),
        forOf = $__require('npm:core-js@1.2.6/library/modules/$.for-of'),
        setProto = $__require('npm:core-js@1.2.6/library/modules/$.set-proto').set,
        same = $__require('npm:core-js@1.2.6/library/modules/$.same-value'),
        SPECIES = $__require('npm:core-js@1.2.6/library/modules/$.wks')('species'),
        speciesConstructor = $__require('npm:core-js@1.2.6/library/modules/$.species-constructor'),
        asap = $__require('npm:core-js@1.2.6/library/modules/$.microtask'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('npm:core-js@1.2.6/library/modules/$.descriptors')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('npm:core-js@1.2.6/library/modules/$.redefine-all')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag')(P, PROMISE);
    $__require('npm:core-js@1.2.6/library/modules/$.set-species')(PROMISE);
    Wrapper = $__require('npm:core-js@1.2.6/library/modules/$.core')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('npm:core-js@1.2.6/library/modules/$.iter-detect')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/promise", ["npm:core-js@1.2.6/library/modules/es6.object.to-string", "npm:core-js@1.2.6/library/modules/es6.string.iterator", "npm:core-js@1.2.6/library/modules/web.dom.iterable", "npm:core-js@1.2.6/library/modules/es6.promise", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.object.to-string');
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator');
  $__require('npm:core-js@1.2.6/library/modules/web.dom.iterable');
  $__require('npm:core-js@1.2.6/library/modules/es6.promise');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').Promise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/promise", ["npm:core-js@1.2.6/library/fn/promise"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/promise'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2/browser", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.11.2", ["npm:process@0.11.2/browser"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:process@0.11.2/browser');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index", ["npm:process@0.11.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.2');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2", ["github:jspm/nodelibs-process@0.1.2/index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:jspm/nodelibs-process@0.1.2/index');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/regenerator/runtime", ["npm:babel-runtime@5.8.34/core-js/symbol", "npm:babel-runtime@5.8.34/core-js/object/create", "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of", "npm:babel-runtime@5.8.34/core-js/promise", "github:jspm/nodelibs-process@0.1.2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var _Symbol = $__require('npm:babel-runtime@5.8.34/core-js/symbol')["default"];
    var _Object$create = $__require('npm:babel-runtime@5.8.34/core-js/object/create')["default"];
    var _Object$setPrototypeOf = $__require('npm:babel-runtime@5.8.34/core-js/object/set-prototype-of')["default"];
    var _Promise = $__require('npm:babel-runtime@5.8.34/core-js/promise')["default"];
    !(function(global) {
      "use strict";
      var hasOwn = Object.prototype.hasOwnProperty;
      var undefined;
      var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      var inModule = typeof module === "object";
      var runtime = global.regeneratorRuntime;
      if (runtime) {
        if (inModule) {
          module.exports = runtime;
        }
        return;
      }
      runtime = global.regeneratorRuntime = inModule ? module.exports : {};
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var generator = _Object$create((outerFn || Generator).prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }
      runtime.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }
      runtime.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      runtime.mark = function(genFun) {
        if (_Object$setPrototypeOf) {
          _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = _Object$create(Gp);
        return genFun;
      };
      runtime.awrap = function(arg) {
        return new AwaitArgument(arg);
      };
      function AwaitArgument(arg) {
        this.arg = arg;
      }
      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value instanceof AwaitArgument) {
              return _Promise.resolve(value.arg).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return _Promise.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, reject);
          }
        }
        if (typeof process === "object" && process.domain) {
          invoke = process.domain.bind(invoke);
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new _Promise(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      runtime.async = function(innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                context.delegate = null;
                var returnMethod = delegate.iterator["return"];
                if (returnMethod) {
                  var record = tryCatch(returnMethod, delegate.iterator, arg);
                  if (record.type === "throw") {
                    method = "throw";
                    arg = record.arg;
                    continue;
                  }
                }
                if (method === "return") {
                  continue;
                }
              }
              var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
              if (record.type === "throw") {
                context.delegate = null;
                method = "throw";
                arg = record.arg;
                continue;
              }
              method = "next";
              arg = undefined;
              var info = record.arg;
              if (info.done) {
                context[delegate.resultName] = info.value;
                context.next = delegate.nextLoc;
              } else {
                state = GenStateSuspendedYield;
                return info;
              }
              context.delegate = null;
            }
            if (method === "next") {
              if (state === GenStateSuspendedYield) {
                context.sent = arg;
              } else {
                context.sent = undefined;
              }
            } else if (method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw arg;
              }
              if (context.dispatchException(arg)) {
                method = "next";
                arg = undefined;
              }
            } else if (method === "return") {
              context.abrupt("return", arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              var info = {
                value: record.arg,
                done: context.done
              };
              if (record.arg === ContinueSentinel) {
                if (context.delegate && method === "next") {
                  arg = undefined;
                }
              } else {
                return info;
              }
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              method = "throw";
              arg = record.arg;
            }
          }
        };
      }
      defineIteratorMethods(Gp);
      Gp[iteratorSymbol] = function() {
        return this;
      };
      Gp[toStringTagSymbol] = "Generator";
      Gp.toString = function() {
        return "[object Generator]";
      };
      function pushTryEntry(locs) {
        var entry = {tryLoc: locs[0]};
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{tryLoc: "root"}];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      runtime.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }
                  next.value = undefined;
                  next.done = true;
                  return next;
                };
            return next.next = next;
          }
        }
        return {next: doneResult};
      }
      runtime.values = values;
      function doneResult() {
        return {
          value: undefined,
          done: true
        };
      }
      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = undefined;
          this.done = false;
          this.delegate = null;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.next = finallyEntry.finallyLoc;
          } else {
            this.complete(record);
          }
          return ContinueSentinel;
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = record.arg;
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          return ContinueSentinel;
        }
      };
    })(typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
  })($__require('github:jspm/nodelibs-process@0.1.2'));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/regenerator/index", ["npm:babel-runtime@5.8.34/regenerator/runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var g = typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this;
  var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
  var oldRuntime = hadRuntime && g.regeneratorRuntime;
  g.regeneratorRuntime = undefined;
  module.exports = $__require('npm:babel-runtime@5.8.34/regenerator/runtime');
  if (hadRuntime) {
    g.regeneratorRuntime = oldRuntime;
  } else {
    try {
      delete g.regeneratorRuntime;
    } catch (e) {
      g.regeneratorRuntime = undefined;
    }
  }
  module.exports = {
    "default": module.exports,
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/regenerator", ["npm:babel-runtime@5.8.34/regenerator/index"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:babel-runtime@5.8.34/regenerator/index');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.string-at", ["npm:core-js@1.2.6/library/modules/$.to-integer", "npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.library", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.redefine", ["npm:core-js@1.2.6/library/modules/$.hide"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.hide');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.property-desc", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.fails", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.descriptors", ["npm:core-js@1.2.6/library/modules/$.fails"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = !$__require('npm:core-js@1.2.6/library/modules/$.fails')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.hide", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.descriptors"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      createDesc = $__require('npm:core-js@1.2.6/library/modules/$.property-desc');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.descriptors') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-create", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.property-desc", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$'),
      descriptor = $__require('npm:core-js@1.2.6/library/modules/$.property-desc'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.6/library/modules/$.hide')(IteratorPrototype, $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.has", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.set-to-string-tag", ["npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var def = $__require('npm:core-js@1.2.6/library/modules/$').setDesc,
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-define", ["npm:core-js@1.2.6/library/modules/$.library", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.redefine", "npm:core-js@1.2.6/library/modules/$.hide", "npm:core-js@1.2.6/library/modules/$.has", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.iter-create", "npm:core-js@1.2.6/library/modules/$.set-to-string-tag", "npm:core-js@1.2.6/library/modules/$", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var LIBRARY = $__require('npm:core-js@1.2.6/library/modules/$.library'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      redefine = $__require('npm:core-js@1.2.6/library/modules/$.redefine'),
      hide = $__require('npm:core-js@1.2.6/library/modules/$.hide'),
      has = $__require('npm:core-js@1.2.6/library/modules/$.has'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      $iterCreate = $__require('npm:core-js@1.2.6/library/modules/$.iter-create'),
      setToStringTag = $__require('npm:core-js@1.2.6/library/modules/$.set-to-string-tag'),
      getProto = $__require('npm:core-js@1.2.6/library/modules/$').getProto,
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.string.iterator", ["npm:core-js@1.2.6/library/modules/$.string-at", "npm:core-js@1.2.6/library/modules/$.iter-define"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $at = $__require('npm:core-js@1.2.6/library/modules/$.string-at')(true);
  $__require('npm:core-js@1.2.6/library/modules/$.iter-define')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.a-function", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.ctx", ["npm:core-js@1.2.6/library/modules/$.a-function"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var aFunction = $__require('npm:core-js@1.2.6/library/modules/$.a-function');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.export", ["npm:core-js@1.2.6/library/modules/$.global", "npm:core-js@1.2.6/library/modules/$.core", "npm:core-js@1.2.6/library/modules/$.ctx"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      core = $__require('npm:core-js@1.2.6/library/modules/$.core'),
      ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.defined", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-object", ["npm:core-js@1.2.6/library/modules/$.defined"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var defined = $__require('npm:core-js@1.2.6/library/modules/$.defined');
  module.exports = function(it) {
    return Object(defined(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-object", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.an-object", ["npm:core-js@1.2.6/library/modules/$.is-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isObject = $__require('npm:core-js@1.2.6/library/modules/$.is-object');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-call", ["npm:core-js@1.2.6/library/modules/$.an-object"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var anObject = $__require('npm:core-js@1.2.6/library/modules/$.an-object');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.is-array-iter", ["npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-integer", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.to-length", ["npm:core-js@1.2.6/library/modules/$.to-integer"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toInteger = $__require('npm:core-js@1.2.6/library/modules/$.to-integer'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.cof", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.classof", ["npm:core-js@1.2.6/library/modules/$.cof", "npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var cof = $__require('npm:core-js@1.2.6/library/modules/$.cof'),
      TAG = $__require('npm:core-js@1.2.6/library/modules/$.wks')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iterators", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/core.get-iterator-method", ["npm:core-js@1.2.6/library/modules/$.classof", "npm:core-js@1.2.6/library/modules/$.wks", "npm:core-js@1.2.6/library/modules/$.iterators", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var classof = $__require('npm:core-js@1.2.6/library/modules/$.classof'),
      ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      Iterators = $__require('npm:core-js@1.2.6/library/modules/$.iterators');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.shared", ["npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = $__require('npm:core-js@1.2.6/library/modules/$.global'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.uid", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.global", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.wks", ["npm:core-js@1.2.6/library/modules/$.shared", "npm:core-js@1.2.6/library/modules/$.uid", "npm:core-js@1.2.6/library/modules/$.global"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var store = $__require('npm:core-js@1.2.6/library/modules/$.shared')('wks'),
      uid = $__require('npm:core-js@1.2.6/library/modules/$.uid'),
      Symbol = $__require('npm:core-js@1.2.6/library/modules/$.global').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.iter-detect", ["npm:core-js@1.2.6/library/modules/$.wks"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ITERATOR = $__require('npm:core-js@1.2.6/library/modules/$.wks')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/es6.array.from", ["npm:core-js@1.2.6/library/modules/$.ctx", "npm:core-js@1.2.6/library/modules/$.export", "npm:core-js@1.2.6/library/modules/$.to-object", "npm:core-js@1.2.6/library/modules/$.iter-call", "npm:core-js@1.2.6/library/modules/$.is-array-iter", "npm:core-js@1.2.6/library/modules/$.to-length", "npm:core-js@1.2.6/library/modules/core.get-iterator-method", "npm:core-js@1.2.6/library/modules/$.iter-detect"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = $__require('npm:core-js@1.2.6/library/modules/$.ctx'),
      $export = $__require('npm:core-js@1.2.6/library/modules/$.export'),
      toObject = $__require('npm:core-js@1.2.6/library/modules/$.to-object'),
      call = $__require('npm:core-js@1.2.6/library/modules/$.iter-call'),
      isArrayIter = $__require('npm:core-js@1.2.6/library/modules/$.is-array-iter'),
      toLength = $__require('npm:core-js@1.2.6/library/modules/$.to-length'),
      getIterFn = $__require('npm:core-js@1.2.6/library/modules/core.get-iterator-method');
  $export($export.S + $export.F * !$__require('npm:core-js@1.2.6/library/modules/$.iter-detect')(function(iter) {
    Array.from(iter);
  }), 'Array', {from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          $$ = arguments,
          $$len = $$.length,
          mapfn = $$len > 1 ? $$[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping)
        mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) {
          result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/modules/$.core", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/array/from", ["npm:core-js@1.2.6/library/modules/es6.string.iterator", "npm:core-js@1.2.6/library/modules/es6.array.from", "npm:core-js@1.2.6/library/modules/$.core"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('npm:core-js@1.2.6/library/modules/es6.string.iterator');
  $__require('npm:core-js@1.2.6/library/modules/es6.array.from');
  module.exports = $__require('npm:core-js@1.2.6/library/modules/$.core').Array.from;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.34/core-js/array/from", ["npm:core-js@1.2.6/library/fn/array/from"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/array/from'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.register('lib/yocto_api.js', ['npm:babel-runtime@5.8.34/helpers/class-call-check', 'npm:babel-runtime@5.8.34/helpers/create-class', 'npm:babel-runtime@5.8.34/helpers/get', 'npm:babel-runtime@5.8.34/helpers/inherits', 'npm:babel-runtime@5.8.34/core-js/promise', 'npm:babel-runtime@5.8.34/regenerator', 'npm:babel-runtime@5.8.34/core-js/array/from'], function (_export) {
    var _classCallCheck, _createClass, _get, _inherits, _Promise, _regeneratorRuntime, _Array$from, YAPI_SUCCESS, YAPI_NOT_INITIALIZED, YAPI_INVALID_ARGUMENT, YAPI_NOT_SUPPORTED, YAPI_DEVICE_NOT_FOUND, YAPI_VERSION_MISMATCH, YAPI_DEVICE_BUSY, YAPI_TIMEOUT, YAPI_IO_ERROR, YAPI_NO_MORE_DATA, YAPI_EXHAUSTED, YAPI_DOUBLE_ACCES, YAPI_UNAUTHORIZED, YAPI_RTC_NOT_READY, YAPI_FILE_NOT_FOUND, YAPI_INVALID_INT, YAPI_INVALID_UINT, YAPI_INVALID_LONG, YAPI_INVALID_DOUBLE, YAPI_INVALID_STRING, Y_FUNCTIONDESCRIPTOR_INVALID, Y_HARDWAREID_INVALID, Y_FUNCTIONID_INVALID, Y_FRIENDLYNAME_INVALID, Y_LOGICALNAME_INVALID, Y_ADVERTISEDVALUE_INVALID, Y_PERSISTENTSETTINGS_LOADED, Y_PERSISTENTSETTINGS_SAVED, Y_PERSISTENTSETTINGS_MODIFIED, Y_PERSISTENTSETTINGS_INVALID, Y_BEACON_OFF, Y_BEACON_ON, Y_BEACON_INVALID, Y_PRODUCTNAME_INVALID, Y_SERIALNUMBER_INVALID, Y_PRODUCTID_INVALID, Y_PRODUCTRELEASE_INVALID, Y_FIRMWARERELEASE_INVALID, Y_LUMINOSITY_INVALID, Y_UPTIME_INVALID, Y_USBCURRENT_INVALID, Y_REBOOTCOUNTDOWN_INVALID, Y_USERVAR_INVALID, Y_UNIT_INVALID, Y_CURRENTVALUE_INVALID, Y_LOWESTVALUE_INVALID, Y_HIGHESTVALUE_INVALID, Y_CURRENTRAWVALUE_INVALID, Y_LOGFREQUENCY_INVALID, Y_REPORTFREQUENCY_INVALID, Y_CALIBRATIONPARAM_INVALID, Y_RESOLUTION_INVALID, Y_SENSORSTATE_INVALID, Y_DATA_INVALID, Y_DURATION_INVALID, Y_DETECT_NONE, Y_DETECT_USB, Y_DETECT_NET, Y_DETECT_ALL, YOCTO_CALIB_TYPE_OFS, NOTIFY_NETPKT_NAME, NOTIFY_NETPKT_CHILD, NOTIFY_NETPKT_FUNCNAME, NOTIFY_NETPKT_FUNCVAL, NOTIFY_NETPKT_LOG, NOTIFY_NETPKT_FUNCNAMEYDX, NOTIFY_NETPKT_FLUSHV2YDX, NOTIFY_NETPKT_FUNCV2YDX, NOTIFY_NETPKT_TIMEV2YDX, NOTIFY_NETPKT_DEVLOGYDX, NOTIFY_NETPKT_TIMEVALYDX, NOTIFY_NETPKT_FUNCVALYDX, NOTIFY_NETPKT_TIMEAVGYDX, NOTIFY_NETPKT_NOT_SYNC, NOTIFY_NETPKT_STOP, NOTIFY_V2_LEGACY, NOTIFY_V2_6RAWBYTES, NOTIFY_V2_TYPEDDATA, NOTIFY_V2_FLUSHGROUP, PUBVAL_LEGACY, PUBVAL_1RAWBYTE, PUBVAL_2RAWBYTES, PUBVAL_3RAWBYTES, PUBVAL_4RAWBYTES, PUBVAL_5RAWBYTES, PUBVAL_6RAWBYTES, PUBVAL_C_LONG, PUBVAL_C_FLOAT, PUBVAL_YOCTO_FLOAT_E3, PUBVAL_YOCTO_FLOAT_E6, YOCTO_PUBVAL_LEN, YOCTO_PUBVAL_SIZE, Y_BASETYPES, YErrorMsg, YFunctionType, YHTTPRequest, YFuncRequest, _YY_LoadVal, YDevice, YFirmwareUpdate, YFunction, YModule, YSensor, YMeasure, YDataStream, YDataSet, YGenericHub, YHttpHub, YHttpNodeHub, YHttpCallbackHub, YWebSocketHub, YWebSocketNodeHub, YWebSocketCallbackHub, YAPIContext, YAPI, yLinearCalibrationHandler;

    function yFindModule(func) {
        return YModule.FindModule(func);
    }

    function yFirstModule() {
        return YModule.FirstModule();
    }

    function yFindSensor(func) {
        return YSensor.FindSensor(func);
    }

    function yFirstSensor() {
        return YSensor.FirstSensor();
    }

    function yGetAPIVersion() {
        return _regeneratorRuntime.async(function yGetAPIVersion$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.GetAPIVersion());

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yInitAPI(mode, errmsg) {
        return _regeneratorRuntime.async(function yInitAPI$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.InitAPI(mode, errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yFreeAPI() {
        return _regeneratorRuntime.async(function yFreeAPI$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.FreeAPI());

                case 2:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yDisableExceptions() {
        return _regeneratorRuntime.async(function yDisableExceptions$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.DisableExceptions());

                case 2:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yEnableExceptions() {
        return _regeneratorRuntime.async(function yEnableExceptions$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.EnableExceptions());

                case 2:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yRegisterHub(url, errmsg) {
        return _regeneratorRuntime.async(function yRegisterHub$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.RegisterHub(url, errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yPreregisterHub(url, errmsg) {
        return _regeneratorRuntime.async(function yPreregisterHub$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.PreregisterHub(url, errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yUnregisterHub(url) {
        return _regeneratorRuntime.async(function yUnregisterHub$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.UnregisterHub(url));

                case 2:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yUpdateDeviceList(errmsg) {
        return _regeneratorRuntime.async(function yUpdateDeviceList$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.UpdateDeviceList(errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yHandleEvents(errmsg) {
        return _regeneratorRuntime.async(function yHandleEvents$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.HandleEvents(errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function ySleep(ms_duration, errmsg) {
        return _regeneratorRuntime.async(function ySleep$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.Sleep(ms_duration, errmsg));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yGetTickCount() {
        return YAPI.GetTickCount();
    }

    function yCheckLogicalName(name) {
        return _regeneratorRuntime.async(function yCheckLogicalName$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.CheckLogicalName(name));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yRegisterDeviceArrivalCallback(arrivalCallback) {
        return _regeneratorRuntime.async(function yRegisterDeviceArrivalCallback$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.RegisterDeviceArrivalCallback(arrivalCallback));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yRegisterDeviceChangeCallback(changeCallback) {
        return _regeneratorRuntime.async(function yRegisterDeviceChangeCallback$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.RegisterDeviceChangeCallback(changeCallback));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yRegisterDeviceRemovalCallback(removalCallback) {
        return _regeneratorRuntime.async(function yRegisterDeviceRemovalCallback$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.RegisterDeviceRemovalCallback(removalCallback));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    function yRegisterCalibrationHandler(calibrationType, calibrationHandler) {
        return _regeneratorRuntime.async(function yRegisterCalibrationHandler$(context$1$0) {
            while (1) switch (context$1$0.prev = context$1$0.next) {
                case 0:
                    context$1$0.next = 2;
                    return _regeneratorRuntime.awrap(YAPI.RegisterCalibrationHandler(calibrationType, calibrationHandler));

                case 2:
                    return context$1$0.abrupt('return', context$1$0.sent);

                case 3:
                case 'end':
                    return context$1$0.stop();
            }
        }, null, this);
    }

    return {
        setters: [function (_npmBabelRuntime5834HelpersClassCallCheck) {
            _classCallCheck = _npmBabelRuntime5834HelpersClassCallCheck['default'];
        }, function (_npmBabelRuntime5834HelpersCreateClass) {
            _createClass = _npmBabelRuntime5834HelpersCreateClass['default'];
        }, function (_npmBabelRuntime5834HelpersGet) {
            _get = _npmBabelRuntime5834HelpersGet['default'];
        }, function (_npmBabelRuntime5834HelpersInherits) {
            _inherits = _npmBabelRuntime5834HelpersInherits['default'];
        }, function (_npmBabelRuntime5834CoreJsPromise) {
            _Promise = _npmBabelRuntime5834CoreJsPromise['default'];
        }, function (_npmBabelRuntime5834Regenerator) {
            _regeneratorRuntime = _npmBabelRuntime5834Regenerator['default'];
        }, function (_npmBabelRuntime5834CoreJsArrayFrom) {
            _Array$from = _npmBabelRuntime5834CoreJsArrayFrom['default'];
        }],
        execute: function () {
            'use strict';

            _export('yFindModule', yFindModule);

            _export('yFirstModule', yFirstModule);

            _export('yFindSensor', yFindSensor);

            _export('yFirstSensor', yFirstSensor);

            _export('yGetAPIVersion', yGetAPIVersion);

            _export('yInitAPI', yInitAPI);

            _export('yFreeAPI', yFreeAPI);

            _export('yDisableExceptions', yDisableExceptions);

            _export('yEnableExceptions', yEnableExceptions);

            _export('yRegisterHub', yRegisterHub);

            _export('yPreregisterHub', yPreregisterHub);

            _export('yUnregisterHub', yUnregisterHub);

            _export('yUpdateDeviceList', yUpdateDeviceList);

            _export('yHandleEvents', yHandleEvents);

            _export('ySleep', ySleep);

            _export('yGetTickCount', yGetTickCount);

            _export('yCheckLogicalName', yCheckLogicalName);

            _export('yRegisterDeviceArrivalCallback', yRegisterDeviceArrivalCallback);

            _export('yRegisterDeviceChangeCallback', yRegisterDeviceChangeCallback);

            _export('yRegisterDeviceRemovalCallback', yRegisterDeviceRemovalCallback);

            _export('yRegisterCalibrationHandler', yRegisterCalibrationHandler);

            YAPI_SUCCESS = 0;

            _export('YAPI_SUCCESS', YAPI_SUCCESS);

            YAPI_NOT_INITIALIZED = -1;

            _export('YAPI_NOT_INITIALIZED', YAPI_NOT_INITIALIZED);

            YAPI_INVALID_ARGUMENT = -2;

            _export('YAPI_INVALID_ARGUMENT', YAPI_INVALID_ARGUMENT);

            YAPI_NOT_SUPPORTED = -3;

            _export('YAPI_NOT_SUPPORTED', YAPI_NOT_SUPPORTED);

            YAPI_DEVICE_NOT_FOUND = -4;

            _export('YAPI_DEVICE_NOT_FOUND', YAPI_DEVICE_NOT_FOUND);

            YAPI_VERSION_MISMATCH = -5;

            _export('YAPI_VERSION_MISMATCH', YAPI_VERSION_MISMATCH);

            YAPI_DEVICE_BUSY = -6;

            _export('YAPI_DEVICE_BUSY', YAPI_DEVICE_BUSY);

            YAPI_TIMEOUT = -7;

            _export('YAPI_TIMEOUT', YAPI_TIMEOUT);

            YAPI_IO_ERROR = -8;

            _export('YAPI_IO_ERROR', YAPI_IO_ERROR);

            YAPI_NO_MORE_DATA = -9;

            _export('YAPI_NO_MORE_DATA', YAPI_NO_MORE_DATA);

            YAPI_EXHAUSTED = -10;

            _export('YAPI_EXHAUSTED', YAPI_EXHAUSTED);

            YAPI_DOUBLE_ACCES = -11;

            _export('YAPI_DOUBLE_ACCES', YAPI_DOUBLE_ACCES);

            YAPI_UNAUTHORIZED = -12;

            _export('YAPI_UNAUTHORIZED', YAPI_UNAUTHORIZED);

            YAPI_RTC_NOT_READY = -13;

            _export('YAPI_RTC_NOT_READY', YAPI_RTC_NOT_READY);

            YAPI_FILE_NOT_FOUND = -14;

            _export('YAPI_FILE_NOT_FOUND', YAPI_FILE_NOT_FOUND);

            YAPI_INVALID_INT = 0x7fffffff;

            _export('YAPI_INVALID_INT', YAPI_INVALID_INT);

            YAPI_INVALID_UINT = -1;

            _export('YAPI_INVALID_UINT', YAPI_INVALID_UINT);

            YAPI_INVALID_LONG = 0x7fffffffffffffff;

            _export('YAPI_INVALID_LONG', YAPI_INVALID_LONG);

            YAPI_INVALID_DOUBLE = -Number.MAX_VALUE;

            _export('YAPI_INVALID_DOUBLE', YAPI_INVALID_DOUBLE);

            YAPI_INVALID_STRING = '!INVALID!';

            _export('YAPI_INVALID_STRING', YAPI_INVALID_STRING);

            Y_FUNCTIONDESCRIPTOR_INVALID = YAPI_INVALID_STRING;

            _export('Y_FUNCTIONDESCRIPTOR_INVALID', Y_FUNCTIONDESCRIPTOR_INVALID);

            Y_HARDWAREID_INVALID = YAPI_INVALID_STRING;

            _export('Y_HARDWAREID_INVALID', Y_HARDWAREID_INVALID);

            Y_FUNCTIONID_INVALID = YAPI_INVALID_STRING;

            _export('Y_FUNCTIONID_INVALID', Y_FUNCTIONID_INVALID);

            Y_FRIENDLYNAME_INVALID = YAPI_INVALID_STRING;

            _export('Y_FRIENDLYNAME_INVALID', Y_FRIENDLYNAME_INVALID);

            Y_LOGICALNAME_INVALID = YAPI_INVALID_STRING;

            _export('Y_LOGICALNAME_INVALID', Y_LOGICALNAME_INVALID);

            Y_ADVERTISEDVALUE_INVALID = YAPI_INVALID_STRING;

            _export('Y_ADVERTISEDVALUE_INVALID', Y_ADVERTISEDVALUE_INVALID);

            Y_PERSISTENTSETTINGS_LOADED = 0;

            _export('Y_PERSISTENTSETTINGS_LOADED', Y_PERSISTENTSETTINGS_LOADED);

            Y_PERSISTENTSETTINGS_SAVED = 1;

            _export('Y_PERSISTENTSETTINGS_SAVED', Y_PERSISTENTSETTINGS_SAVED);

            Y_PERSISTENTSETTINGS_MODIFIED = 2;

            _export('Y_PERSISTENTSETTINGS_MODIFIED', Y_PERSISTENTSETTINGS_MODIFIED);

            Y_PERSISTENTSETTINGS_INVALID = -1;

            _export('Y_PERSISTENTSETTINGS_INVALID', Y_PERSISTENTSETTINGS_INVALID);

            Y_BEACON_OFF = 0;

            _export('Y_BEACON_OFF', Y_BEACON_OFF);

            Y_BEACON_ON = 1;

            _export('Y_BEACON_ON', Y_BEACON_ON);

            Y_BEACON_INVALID = -1;

            _export('Y_BEACON_INVALID', Y_BEACON_INVALID);

            Y_PRODUCTNAME_INVALID = YAPI_INVALID_STRING;

            _export('Y_PRODUCTNAME_INVALID', Y_PRODUCTNAME_INVALID);

            Y_SERIALNUMBER_INVALID = YAPI_INVALID_STRING;

            _export('Y_SERIALNUMBER_INVALID', Y_SERIALNUMBER_INVALID);

            Y_PRODUCTID_INVALID = YAPI_INVALID_UINT;

            _export('Y_PRODUCTID_INVALID', Y_PRODUCTID_INVALID);

            Y_PRODUCTRELEASE_INVALID = YAPI_INVALID_UINT;

            _export('Y_PRODUCTRELEASE_INVALID', Y_PRODUCTRELEASE_INVALID);

            Y_FIRMWARERELEASE_INVALID = YAPI_INVALID_STRING;

            _export('Y_FIRMWARERELEASE_INVALID', Y_FIRMWARERELEASE_INVALID);

            Y_LUMINOSITY_INVALID = YAPI_INVALID_UINT;

            _export('Y_LUMINOSITY_INVALID', Y_LUMINOSITY_INVALID);

            Y_UPTIME_INVALID = YAPI_INVALID_LONG;

            _export('Y_UPTIME_INVALID', Y_UPTIME_INVALID);

            Y_USBCURRENT_INVALID = YAPI_INVALID_UINT;

            _export('Y_USBCURRENT_INVALID', Y_USBCURRENT_INVALID);

            Y_REBOOTCOUNTDOWN_INVALID = YAPI_INVALID_INT;

            _export('Y_REBOOTCOUNTDOWN_INVALID', Y_REBOOTCOUNTDOWN_INVALID);

            Y_USERVAR_INVALID = YAPI_INVALID_INT;

            _export('Y_USERVAR_INVALID', Y_USERVAR_INVALID);

            Y_UNIT_INVALID = YAPI_INVALID_STRING;

            _export('Y_UNIT_INVALID', Y_UNIT_INVALID);

            Y_CURRENTVALUE_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_CURRENTVALUE_INVALID', Y_CURRENTVALUE_INVALID);

            Y_LOWESTVALUE_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_LOWESTVALUE_INVALID', Y_LOWESTVALUE_INVALID);

            Y_HIGHESTVALUE_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_HIGHESTVALUE_INVALID', Y_HIGHESTVALUE_INVALID);

            Y_CURRENTRAWVALUE_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_CURRENTRAWVALUE_INVALID', Y_CURRENTRAWVALUE_INVALID);

            Y_LOGFREQUENCY_INVALID = YAPI_INVALID_STRING;

            _export('Y_LOGFREQUENCY_INVALID', Y_LOGFREQUENCY_INVALID);

            Y_REPORTFREQUENCY_INVALID = YAPI_INVALID_STRING;

            _export('Y_REPORTFREQUENCY_INVALID', Y_REPORTFREQUENCY_INVALID);

            Y_CALIBRATIONPARAM_INVALID = YAPI_INVALID_STRING;

            _export('Y_CALIBRATIONPARAM_INVALID', Y_CALIBRATIONPARAM_INVALID);

            Y_RESOLUTION_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_RESOLUTION_INVALID', Y_RESOLUTION_INVALID);

            Y_SENSORSTATE_INVALID = YAPI_INVALID_INT;

            _export('Y_SENSORSTATE_INVALID', Y_SENSORSTATE_INVALID);

            Y_DATA_INVALID = YAPI_INVALID_DOUBLE;

            _export('Y_DATA_INVALID', Y_DATA_INVALID);

            Y_DURATION_INVALID = YAPI_INVALID_INT;

            _export('Y_DURATION_INVALID', Y_DURATION_INVALID);

            Y_DETECT_NONE = 0;

            _export('Y_DETECT_NONE', Y_DETECT_NONE);

            Y_DETECT_USB = 1;

            _export('Y_DETECT_USB', Y_DETECT_USB);

            Y_DETECT_NET = 2;

            _export('Y_DETECT_NET', Y_DETECT_NET);

            Y_DETECT_ALL = Y_DETECT_USB | Y_DETECT_NET;

            _export('Y_DETECT_ALL', Y_DETECT_ALL);

            YOCTO_CALIB_TYPE_OFS = 30;
            NOTIFY_NETPKT_NAME = '0';
            NOTIFY_NETPKT_CHILD = '2';
            NOTIFY_NETPKT_FUNCNAME = '4';
            NOTIFY_NETPKT_FUNCVAL = '5';
            NOTIFY_NETPKT_LOG = '7';
            NOTIFY_NETPKT_FUNCNAMEYDX = '8';
            NOTIFY_NETPKT_FLUSHV2YDX = 't';
            NOTIFY_NETPKT_FUNCV2YDX = 'u';
            NOTIFY_NETPKT_TIMEV2YDX = 'v';
            NOTIFY_NETPKT_DEVLOGYDX = 'w';
            NOTIFY_NETPKT_TIMEVALYDX = 'x';
            NOTIFY_NETPKT_FUNCVALYDX = 'y';
            NOTIFY_NETPKT_TIMEAVGYDX = 'z';
            NOTIFY_NETPKT_NOT_SYNC = '@';
            NOTIFY_NETPKT_STOP = 10;
            NOTIFY_V2_LEGACY = 0;
            NOTIFY_V2_6RAWBYTES = 1;
            NOTIFY_V2_TYPEDDATA = 2;
            NOTIFY_V2_FLUSHGROUP = 3;
            PUBVAL_LEGACY = 0;
            PUBVAL_1RAWBYTE = 1;
            PUBVAL_2RAWBYTES = 2;
            PUBVAL_3RAWBYTES = 3;
            PUBVAL_4RAWBYTES = 4;
            PUBVAL_5RAWBYTES = 5;
            PUBVAL_6RAWBYTES = 6;
            PUBVAL_C_LONG = 7;
            PUBVAL_C_FLOAT = 8;
            PUBVAL_YOCTO_FLOAT_E3 = 9;
            PUBVAL_YOCTO_FLOAT_E6 = 10;
            YOCTO_PUBVAL_LEN = 16;
            YOCTO_PUBVAL_SIZE = 6;
            Y_BASETYPES = { Function: 0, Sensor: 1 };

            YErrorMsg = function YErrorMsg() {
                var str_msg = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

                _classCallCheck(this, YErrorMsg);

                this.msg = str_msg;
            };

            _export('YErrorMsg', YErrorMsg);

            YFunctionType = (function () {
                function YFunctionType(obj_yapi, str_classname) {
                    _classCallCheck(this, YFunctionType);

                    this._yapi = obj_yapi;

                    this._className = str_classname;

                    this._connectedFns = {};
                    this._requestedFns = {};
                    this._hwIdByName = {};
                    this._nameByHwId = {};
                    this._valueByHwId = {};
                    this._baseType = 0;
                }

                _createClass(YFunctionType, [{
                    key: 'imm_reindexFunction',
                    value: function imm_reindexFunction(str_hwid, str_name, str_val, int_basetype) {
                        var currname = this._nameByHwId[str_hwid];
                        var res = false;
                        if (currname == undefined || currname == '') {
                            if (str_name != '') {
                                this._nameByHwId[str_hwid] = str_name;
                                res = true;
                            }
                        } else if (currname != str_name) {
                            if (this._hwIdByName[currname] == str_hwid) delete this._hwIdByName[currname];
                            if (str_name != '') {
                                this._nameByHwId[str_hwid] = str_name;
                            } else {
                                delete this._nameByHwId[str_hwid];
                            }
                            res = true;
                        }
                        if (str_name != '') {
                            this._hwIdByName[str_name] = str_hwid;
                        }
                        if (str_val != undefined) {
                            this._valueByHwId[str_hwid] = str_val;
                        } else {
                            if (this._valueByHwId[str_hwid] == undefined) {
                                this._valueByHwId[str_hwid] = '';
                            }
                        }
                        if (int_basetype != undefined) {
                            if (this._baseType == 0) {
                                this._baseType = int_basetype;
                            }
                        }
                        return res;
                    }
                }, {
                    key: 'imm_forgetFunction',
                    value: function imm_forgetFunction(str_hwid) {
                        var currname = this._nameByHwId[str_hwid];
                        if (currname != undefined) {
                            if (currname != '' && this._hwIdByName[currname] == str_hwid) {
                                delete this._hwIdByName[currname];
                            }
                            delete this._nameByHwId[str_hwid];
                        }
                        if (this._valueByHwId[str_hwid] != undefined) {
                            delete this._valueByHwId[str_hwid];
                        }
                    }
                }, {
                    key: 'imm_resolve',
                    value: function imm_resolve(str_func) {
                        var dotpos = str_func.indexOf('.');
                        var res;
                        if (dotpos < 0) {
                            res = this._hwIdByName[str_func];
                            if (res != undefined) {
                                return { errorType: YAPI_SUCCESS,
                                    errorMsg: 'no error',
                                    result: String(res) };
                            }

                            dotpos = str_func.length;
                            str_func += '.' + this._className.substr(0, 1).toLowerCase() + this._className.substr(1);
                        }

                        if (this._valueByHwId[str_func] != undefined) {
                            return { errorType: YAPI_SUCCESS,
                                errorMsg: 'no error',
                                result: String(str_func) };
                        }
                        if (dotpos > 0) {
                            var devid = str_func.substr(0, dotpos);
                            var funcid = str_func.substr(dotpos + 1);
                            var dev = this._yapi.imm_getDevice(devid);
                            if (!dev) {
                                return { errorType: YAPI_DEVICE_NOT_FOUND,
                                    errorMsg: 'Device [' + devid + '] not online',
                                    result: null };
                            }
                            var serial = dev.imm_getSerialNumber();
                            res = serial + '.' + funcid;
                            if (this._valueByHwId[res] != undefined) {
                                return { errorType: YAPI_SUCCESS,
                                    errorMsg: 'no error',
                                    result: String(res) };
                            }

                            var i,
                                nfun = dev.imm_functionCount();
                            for (i = 0; i < nfun; i++) {
                                res = serial + '.' + dev.imm_functionId(i);
                                var name = this._nameByHwId[res];
                                if (name != undefined && name == funcid) {
                                    return { errorType: YAPI_SUCCESS,
                                        errorMsg: 'no error',
                                        result: String(res) };
                                }
                            }
                        } else {
                            funcid = str_func.substr(1);
                            for (var hwid_str in this._connectedFns) {
                                var pos = hwid_str.indexOf('.');
                                var str_function = hwid_str.substr(pos + 1);
                                if (str_function == funcid) {
                                    return { errorType: YAPI_SUCCESS,
                                        errorMsg: 'no error',
                                        result: String(hwid_str) };
                                }
                            }
                        }
                        return { errorType: YAPI_DEVICE_NOT_FOUND,
                            errorMsg: 'No function [' + funcid + '] found on device [' + serial + ']',
                            result: null };
                    }
                }, {
                    key: 'imm_getFriendlyName',
                    value: function imm_getFriendlyName(str_func) {
                        var resolved = this.imm_resolve(str_func);
                        var name;
                        if (resolved.errorType != YAPI_SUCCESS) {
                            return resolved;
                        }
                        if (this._className == 'Module') {
                            var friend = resolved.result;
                            name = this._nameByHwId[resolved.result];
                            if (name != undefined && name != '') {
                                friend = this._nameByHwId[resolved.result];
                            }
                            return { errorType: YAPI_SUCCESS,
                                errorMsg: 'no error',
                                result: String(friend) };
                        } else {
                            var pos = resolved.result.indexOf('.');
                            var str_serialMod = resolved.result.substr(0, pos);
                            var str_friendModFull = this._yapi.imm_getFriendlyNameFunction('Module', str_serialMod).result;
                            var int_friendModDot = str_friendModFull.indexOf('.');
                            var str_friendMod = int_friendModDot > 0 ? str_friendModFull.substr(0, int_friendModDot) : str_friendModFull;
                            var str_friendFunc = resolved.result.substr(pos + 1);
                            name = this._nameByHwId[resolved.result];
                            if (name != undefined && name != '') {
                                str_friendFunc = name;
                            }
                            return { errorType: YAPI_SUCCESS,
                                errorMsg: 'no error',
                                result: String(str_friendMod + '.' + str_friendFunc) };
                        }
                    }
                }, {
                    key: 'imm_setFunction',
                    value: function imm_setFunction(str_func, obj_func) {
                        var funres = this.imm_resolve(str_func);
                        if (funres.result != undefined) {
                            this._connectedFns[funres.result] = obj_func;
                        } else {
                            this._requestedFns[str_func] = obj_func;
                        }
                    }
                }, {
                    key: 'imm_getFunction',
                    value: function imm_getFunction(str_func) {
                        var funres = this.imm_resolve(str_func);
                        if (funres.errorType == YAPI_SUCCESS) {
                            var conn_fn = this._connectedFns[funres.result];
                            if (conn_fn != undefined) return conn_fn;

                            var req_fn = this._requestedFns[str_func];
                            if (req_fn != undefined) {
                                this._connectedFns[funres.result] = req_fn;
                                delete this._requestedFns[str_func];
                            }
                            return req_fn;
                        } else {
                            return this._requestedFns[str_func];
                        }
                    }
                }, {
                    key: 'imm_setFunctionValue',
                    value: function imm_setFunctionValue(str_hwid, str_pubval) {
                        var currval = this._valueByHwId[str_hwid];
                        if (!(currval == undefined) && currval == str_pubval) {
                            return false;
                        }
                        this._valueByHwId[str_hwid] = str_pubval;
                        return true;
                    }
                }, {
                    key: 'imm_getFunctionValue',
                    value: function imm_getFunctionValue(str_hwid) {
                        return this._valueByHwId[str_hwid];
                    }
                }, {
                    key: 'imm_getBaseType',
                    value: function imm_getBaseType() {
                        return this._baseType;
                    }
                }, {
                    key: 'imm_getFirstHardwareId',
                    value: function imm_getFirstHardwareId() {
                        var res = null;

                        for (res in this._valueByHwId) break;
                        return res;
                    }
                }, {
                    key: 'imm_getNextHardwareId',
                    value: function imm_getNextHardwareId(str_hwid) {
                        for (var iter_hwid in this._valueByHwId) {
                            if (str_hwid == '!') return iter_hwid;
                            if (str_hwid == iter_hwid) str_hwid = '!';
                        }
                        return null;
                    }
                }]);

                return YFunctionType;
            })();

            YHTTPRequest = function YHTTPRequest(bin_res) {
                var int_errType = arguments.length <= 1 || arguments[1] === undefined ? YAPI_SUCCESS : arguments[1];
                var str_errMsg = arguments.length <= 2 || arguments[2] === undefined ? 'no error' : arguments[2];

                _classCallCheck(this, YHTTPRequest);

                this.bin_result = bin_res;

                this.errorType = int_errType;

                this.errorMsg = str_errMsg;

                this.acceptor = null;
            };

            YFuncRequest = function YFuncRequest(obj_res) {
                var int_errType = arguments.length <= 1 || arguments[1] === undefined ? YAPI_SUCCESS : arguments[1];
                var str_errMsg = arguments.length <= 2 || arguments[2] === undefined ? 'no error' : arguments[2];

                _classCallCheck(this, YFuncRequest);

                this.obj_result = obj_res;

                this.errorType = int_errType;

                this.errorMsg = str_errMsg;
            };

            _YY_LoadVal = function _YY_LoadVal() {
                _classCallCheck(this, _YY_LoadVal);

                this.serialNumber = '';

                this.logicalName = '';

                this.productName = '';

                this.productId = 0;

                this.beacon = 0;

                this.services = {
                    whitePages: [{ networkUrl: '' }],
                    yellowPages: []
                };

                this.calib = '';

                this.unit = '';

                this.cal = '';

                this.streams = [];
            };

            YDevice = (function () {
                function YDevice(obj_yapi, str_rooturl, obj_wpRec, obj_ypRecs) {
                    _classCallCheck(this, YDevice);

                    this._yapi = obj_yapi;

                    this._rootUrl = str_rooturl;

                    this._serialNumber = '';

                    this._logicalName = '';

                    this._productName = '';

                    this._productId = 0;

                    this._beacon = 0;

                    this._devYdx = -1;

                    this._lastErrorType = YAPI_SUCCESS;

                    this._lastErrorMsg = 'no error';

                    this._cache = { _expiration: 0, _json: new Uint8Array(0) };

                    this._functions = [];

                    this._busy = 0;

                    this._pendingQueries = _Promise.resolve();

                    this._deviceTime = 0;

                    if (obj_wpRec != undefined) {
                        this._serialNumber = obj_wpRec.serialNumber;
                        this._logicalName = obj_wpRec.logicalName;
                        this._productName = obj_wpRec.productName;
                        this._productId = obj_wpRec.productId;
                        this._beacon = obj_wpRec.beacon;
                        this._devYdx = obj_wpRec.index == undefined ? -1 : obj_wpRec.index;
                        this.imm_updateFromYP(obj_ypRecs);
                        this._yapi.imm_reindexDevice(this);
                    }
                }

                _createClass(YDevice, [{
                    key: '_throw',
                    value: function _throw(int_errType, str_errMsg, obj_retVal) {
                        this._lastErrorType = int_errType;
                        this._lastErrorMsg = str_errMsg;
                        this._yapi._throw(int_errType, str_errMsg, obj_retVal);
                    }
                }, {
                    key: 'imm_getRootUrl',
                    value: function imm_getRootUrl() {
                        return this._rootUrl;
                    }
                }, {
                    key: 'imm_getSerialNumber',
                    value: function imm_getSerialNumber() {
                        return this._serialNumber;
                    }
                }, {
                    key: 'imm_getLogicalName',
                    value: function imm_getLogicalName() {
                        return this._logicalName;
                    }
                }, {
                    key: 'imm_getProductName',
                    value: function imm_getProductName() {
                        return this._productName;
                    }
                }, {
                    key: 'imm_getProductId',
                    value: function imm_getProductId() {
                        return this._productId;
                    }
                }, {
                    key: 'imm_getBeacon',
                    value: function imm_getBeacon() {
                        return this._beacon;
                    }
                }, {
                    key: 'imm_getDeviceTime',
                    value: function imm_getDeviceTime() {
                        return this._deviceTime;
                    }
                }, {
                    key: 'imm_setDeviceTime',
                    value: function imm_setDeviceTime(float_timestamp) {
                        this._deviceTime = float_timestamp;
                    }
                }, {
                    key: 'imm_getDevYdx',
                    value: function imm_getDevYdx() {
                        return this._devYdx;
                    }
                }, {
                    key: 'imm_describe',
                    value: function imm_describe() {
                        var res = this._rootUrl;
                        if (this._serialNumber != '') {
                            res = this._serialNumber;
                            if (this._logicalName != '') {
                                res = res + ' (' + this._logicalName + ')';
                            }
                        }
                        return this._productName + ' ' + res;
                    }
                }, {
                    key: 'imm_updateFromYP',
                    value: function imm_updateFromYP(obj_ypRecs) {
                        var funidx = 0;
                        for (var categ in obj_ypRecs) {
                            for (var key in obj_ypRecs[categ]) {
                                var rec = obj_ypRecs[categ][key];
                                var hwid = rec['hardwareId'];
                                var dotpos = hwid.indexOf('.');
                                if (hwid.substr(0, dotpos) == this._serialNumber) {
                                    var funydx = rec['index'];
                                    if (funydx == undefined) funydx = funidx;
                                    this._functions[funydx] = [hwid.substr(dotpos + 1), rec['logicalName']];
                                    funidx++;
                                }
                            }
                        }
                    }
                }, {
                    key: 'imm_updateFromReq',
                    value: function imm_updateFromReq(yreq, loadval) {
                        this._cache._expiration = this._yapi.GetTickCount() + this._yapi.defaultCacheValidity;
                        this._cache._json = yreq.bin_result;

                        var func;
                        var reindex = false;
                        if (this._productName == '') {
                            for (func in loadval) {
                                if (func == 'module') {
                                    this._serialNumber = loadval.module.serialNumber;
                                    this._logicalName = loadval.module.logicalName;
                                    this._productName = loadval.module.productName;
                                    this._productId = loadval.module.productId;
                                    this._beacon = loadval.module.beacon;
                                } else if (func == 'services') {
                                    this.imm_updateFromYP(loadval.services.yellowPages);
                                }
                            }
                            reindex = true;
                        } else {
                            var renamed = false;
                            for (func in loadval) {
                                if (func == 'module') {
                                    if (this._logicalName != loadval.module.logicalName) {
                                        this._logicalName = loadval.module.logicalName;
                                        reindex = true;
                                    }
                                    this._beacon = loadval.module.beacon;
                                } else if (func != 'services') {
                                    var name = loadval[func]['logicalName'];
                                    if (name == undefined) name = loadval.module.logicalName;
                                    var pubval = loadval[func]['advertisedValue'];
                                    if (pubval != undefined) {
                                        this._yapi.imm_setFunctionValue(loadval.module.serialNumber + '.' + func, pubval);
                                    }
                                    var funydx;
                                    for (funydx in this._functions) {
                                        if (this._functions[funydx][0] == func) {
                                            if (this._functions[funydx][1] != name) {
                                                this._functions[funydx][1] = name;
                                                reindex = true;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (reindex) {
                            this._yapi.imm_reindexDevice(this);
                        }
                    }
                }, {
                    key: 'imm_dropCache',
                    value: function imm_dropCache() {
                        this._cache._expiration = 0;
                    }
                }, {
                    key: 'imm_functionCount',
                    value: function imm_functionCount() {
                        return this._functions.length;
                    }
                }, {
                    key: 'imm_functionId',
                    value: function imm_functionId(int_idx) {
                        if (int_idx < this._functions.length) {
                            return this._functions[int_idx][0];
                        }
                        return '';
                    }
                }, {
                    key: 'imm_functionBaseType',
                    value: function imm_functionBaseType(int_idx) {
                        if (int_idx < this._functions.length) {
                            var ftype = this._yapi.imm_getFunctionBaseType(this._serialNumber + '.' + this._functions[int_idx][0]);
                            for (var name in Y_BASETYPES) {
                                if (Y_BASETYPES[name] == ftype) {
                                    return name;
                                }
                            }
                        }
                        return 'Function';
                    }
                }, {
                    key: 'imm_functionType',
                    value: function imm_functionType(int_idx) {
                        if (int_idx < this._functions.length) {
                            var funid = this._functions[int_idx][0];
                            var i;
                            for (i = 0; i < funid.length; i++) {
                                if (funid[i] >= '0' && funid[i] <= '9') {
                                    break;
                                }
                            }
                            return funid[0].toUpperCase() + funid.substr(1, i - 1);
                        }
                        return '';
                    }
                }, {
                    key: 'imm_functionName',
                    value: function imm_functionName(int_idx) {
                        if (int_idx < this._functions.length) {
                            return this._functions[int_idx][1];
                        }
                        return '';
                    }
                }, {
                    key: 'imm_functionValue',
                    value: function imm_functionValue(int_idx) {
                        if (int_idx < this._functions.length) {
                            return this._yapi.imm_getFunctionValue(this._serialNumber + '.' + this._functions[int_idx][0]);
                        }
                        return '';
                    }
                }, {
                    key: 'requestAPI',
                    value: function requestAPI(int_msValidity) {
                        var yreq;
                        return _regeneratorRuntime.async(function requestAPI$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cache._expiration > this._yapi.GetTickCount())) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', new YHTTPRequest(this._cache._json));

                                case 2:
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._yapi.devRequest(this._rootUrl, 'GET /api.json'));

                                case 4:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', yreq);

                                case 7:
                                    if (!int_msValidity) {
                                        int_msValidity = this._yapi.defaultCacheValidity;
                                    }
                                    this._cache._expiration = this._yapi.GetTickCount() + int_msValidity;
                                    this._cache._json = yreq.bin_result;
                                    return context$2$0.abrupt('return', yreq);

                                case 11:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'refresh',
                    value: function refresh() {
                        var yreq, loadval;
                        return _regeneratorRuntime.async(function refresh$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.requestAPI(this._yapi.defaultCacheValidity));

                                case 2:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 5:
                                    loadval = null;

                                    try {
                                        loadval = JSON.parse(this._yapi.imm_bin2str(yreq.bin_result));
                                    } catch (err) {}

                                    if (loadval) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_IO_ERROR, 'Request failed, could not parse API result for ' + this._rootUrl, YAPI_IO_ERROR));

                                case 9:
                                    this.imm_updateFromReq(yreq, loadval);
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 11:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YDevice;
            })();

            YFirmwareUpdate = (function () {
                function YFirmwareUpdate(obj_yapi, str_serial, str_path, bin_settings) {
                    _classCallCheck(this, YFirmwareUpdate);

                    this._yapi = obj_yapi;

                    this._serial = '';

                    this._settings = new Uint8Array(0);

                    this._firmwarepath = '';

                    this._progress_msg = '';

                    this._progress_c = 0;

                    this._progress = 0;

                    this._restore_step = 0;

                    this._serial = str_serial;

                    this._settings = bin_settings;

                    this._firmwarepath = str_path;
                }

                _createClass(YFirmwareUpdate, [{
                    key: '_processMore',
                    value: function _processMore(i) {
                        return _regeneratorRuntime.async(function _processMore$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._progress = -1;
                                    this._progress_msg = 'not supported in JS';

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_progress',
                    value: function get_progress() {
                        return _regeneratorRuntime.async(function get_progress$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._progress >= 0)) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._processMore(0));

                                case 3:
                                    return context$2$0.abrupt('return', this._progress);

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_progressMessage',
                    value: function get_progressMessage() {
                        return _regeneratorRuntime.async(function get_progressMessage$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._progress_msg);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'startUpdate',
                    value: function startUpdate() {
                        var err, leng;
                        return _regeneratorRuntime.async(function startUpdate$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    err = undefined;
                                    leng = undefined;

                                    err = this._yapi.imm_bin2str(this._settings);
                                    leng = err.length;

                                    if (!(leng >= 6 && 'error:' == err.substr(0, 6))) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    this._progress = -1;
                                    this._progress_msg = err.substr(6, leng - 6);
                                    context$2$0.next = 13;
                                    break;

                                case 9:
                                    this._progress = 0;
                                    this._progress_c = 0;
                                    context$2$0.next = 13;
                                    return _regeneratorRuntime.awrap(this._processMore(1));

                                case 13:
                                    return context$2$0.abrupt('return', this._progress);

                                case 14:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }], [{
                    key: 'CheckFirmware',
                    value: function CheckFirmware(serial, path, minrelease) {
                        return _regeneratorRuntime.async(function CheckFirmware$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', 'error: Not yet supported in Javascript');

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'GetAllBootLoaders',
                    value: function GetAllBootLoaders() {
                        return _regeneratorRuntime.async(function GetAllBootLoaders$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', []);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YFirmwareUpdate;
            })();

            YFunction = (function () {
                function YFunction(obj_yapi, str_func) {
                    _classCallCheck(this, YFunction);

                    this._yapi = obj_yapi;

                    this._className = 'Function';

                    this._func = str_func;

                    this._lastErrorType = YAPI_SUCCESS;

                    this._lastErrorMsg = 'no error';

                    this._dataStreams = {};

                    this._userData = null;

                    this._cache = { _expiration: 0 };

                    this._logicalName = Y_LOGICALNAME_INVALID;

                    this._advertisedValue = Y_ADVERTISEDVALUE_INVALID;

                    this._valueCallbackFunction = null;

                    this._cacheExpiration = 0;

                    this._serial = '';

                    this._funId = '';

                    this._hwId = '';

                    this.FUNCTIONDESCRIPTOR_INVALID = YAPI_INVALID_STRING;

                    this.HARDWAREID_INVALID = YAPI_INVALID_STRING;

                    this.FUNCTIONID_INVALID = YAPI_INVALID_STRING;

                    this.FRIENDLYNAME_INVALID = YAPI_INVALID_STRING;

                    this.LOGICALNAME_INVALID = YAPI_INVALID_STRING;

                    this.ADVERTISEDVALUE_INVALID = YAPI_INVALID_STRING;
                }

                _createClass(YFunction, [{
                    key: '_throw',
                    value: function _throw(int_errType, str_errMsg, obj_retVal) {
                        this._lastErrorType = int_errType;
                        this._lastErrorMsg = str_errMsg;
                        this._yapi._throw(int_errType, str_errMsg, obj_retVal);
                    }
                }, {
                    key: 'imm_setConst',
                    value: function imm_setConst(obj) {
                        for (var key in obj) {
                            this[key] = obj[key];
                            this.constructor[key] = obj[key];
                        }
                    }
                }, {
                    key: 'imm_parseAttr',
                    value: function imm_parseAttr(name, val) {
                        switch (name) {
                            case '_expiration':
                                this._cacheExpiration = val;
                                return 1;
                            case 'logicalName':
                                this._logicalName = val;
                                return 1;
                            case 'advertisedValue':
                                this._advertisedValue = val;
                                return 1;
                        }
                        return 0;
                    }
                }, {
                    key: 'get_logicalName',
                    value: function get_logicalName() {
                        return _regeneratorRuntime.async(function get_logicalName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_LOGICALNAME_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._logicalName);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_logicalName',
                    value: function set_logicalName(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_logicalName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    if (this._yapi.CheckLogicalName(newval)) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(this._yapi.INVALID_ARGUMENT, 'Invalid name :' + newval, this._yapi.INVALID_ARGUMENT));

                                case 3:
                                    rest_val = newval;
                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this._setAttr('logicalName', rest_val));

                                case 6:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_advertisedValue',
                    value: function get_advertisedValue() {
                        return _regeneratorRuntime.async(function get_advertisedValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_ADVERTISEDVALUE_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._advertisedValue);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_advertisedValue',
                    value: function set_advertisedValue(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_advertisedValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = newval;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('advertisedValue', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'registerValueCallback',
                    value: function registerValueCallback(callback) {
                        var val;
                        return _regeneratorRuntime.async(function registerValueCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    val = undefined;

                                    if (!(callback != null)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(YFunction._UpdateValueCallbackList(this, true));

                                case 4:
                                    context$2$0.next = 8;
                                    break;

                                case 6:
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(YFunction._UpdateValueCallbackList(this, false));

                                case 8:
                                    this._valueCallbackFunction = callback;
                                    context$2$0.t0 = callback != null;

                                    if (!context$2$0.t0) {
                                        context$2$0.next = 14;
                                        break;
                                    }

                                    context$2$0.next = 13;
                                    return _regeneratorRuntime.awrap(this.isOnline());

                                case 13:
                                    context$2$0.t0 = context$2$0.sent;

                                case 14:
                                    if (!context$2$0.t0) {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    val = this._advertisedValue;

                                    if (val == '') {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    context$2$0.next = 19;
                                    return _regeneratorRuntime.awrap(this._invokeValueCallback(val));

                                case 19:
                                    return context$2$0.abrupt('return', 0);

                                case 20:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_invokeValueCallback',
                    value: function _invokeValueCallback(value) {
                        return _regeneratorRuntime.async(function _invokeValueCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._valueCallbackFunction != null)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._valueCallbackFunction(this, value));

                                case 3:
                                    context$2$0.next = 5;
                                    break;

                                case 5:
                                    return context$2$0.abrupt('return', 0);

                                case 6:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'muteValueCallbacks',
                    value: function muteValueCallbacks() {
                        return _regeneratorRuntime.async(function muteValueCallbacks$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_advertisedValue('SILENT'));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'unmuteValueCallbacks',
                    value: function unmuteValueCallbacks() {
                        return _regeneratorRuntime.async(function unmuteValueCallbacks$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_advertisedValue(''));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_parserHelper',
                    value: function _parserHelper() {
                        return _regeneratorRuntime.async(function _parserHelper$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', 0);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'nextFunction',
                    value: function nextFunction() {
                        var resolve = this._yapi.imm_resolveFunction(this._className, this._func);
                        if (resolve.errorType != YAPI_SUCCESS) return null;

                        var next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
                        if (next_hwid == null) return null;
                        return YFunction.FindFunctionInContext(this._yapi, next_hwid);
                    }
                }, {
                    key: 'describe',
                    value: function describe() {
                        var resolve;
                        return _regeneratorRuntime.async(function describe$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._hwId != '')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._className + '(' + this._func + ')=' + this._hwId);

                                case 2:
                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS && resolve.result != this._func)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._className + '(' + this._func + ')=unresolved');

                                case 5:
                                    return context$2$0.abrupt('return', this._className + '(' + this._func + ')=' + resolve.result);

                                case 6:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_hardwareId',
                    value: function get_hardwareId() {
                        var resolve;
                        return _regeneratorRuntime.async(function get_hardwareId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._hwId != '')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._hwId);

                                case 2:
                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this.isOnline());

                                case 6:
                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(resolve.errorType, resolve.errorMsg, Y_HARDWAREID_INVALID));

                                case 9:
                                    return context$2$0.abrupt('return', resolve.result);

                                case 10:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_functionId',
                    value: function get_functionId() {
                        var resolve, pos;
                        return _regeneratorRuntime.async(function get_functionId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._funId != '')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._funId);

                                case 2:
                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this.isOnline());

                                case 6:
                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(resolve.errorType, resolve.errorMsg, Y_FUNCTIONID_INVALID));

                                case 9:
                                    pos = resolve.result.indexOf('.');
                                    return context$2$0.abrupt('return', resolve.result.substr(pos + 1));

                                case 11:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_friendlyName',
                    value: function get_friendlyName() {
                        var resolve;
                        return _regeneratorRuntime.async(function get_friendlyName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    resolve = this._yapi.imm_getFriendlyNameFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.isOnline());

                                case 4:
                                    resolve = this._yapi.imm_getFriendlyNameFunction(this._className, this._func);

                                    if (!(resolve.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(resolve.errorType, resolve.errorMsg, Y_FRIENDLYNAME_INVALID));

                                case 7:
                                    return context$2$0.abrupt('return', resolve.result);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_parse',
                    value: function _parse(yreq, msValidity) {
                        var key;
                        return _regeneratorRuntime.async(function _parse$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    yreq.obj_result['_expiration'] = this._yapi.GetTickCount() + msValidity;
                                    this._serial = yreq.obj_result.deviceid;
                                    this._funId = yreq.obj_result.functionid;
                                    this._hwId = yreq.obj_result.hwid;
                                    this._cache = yreq.obj_result;

                                    for (key in yreq.obj_result) {
                                        this.imm_parseAttr(key, yreq.obj_result[key]);
                                    }
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(this._parserHelper());

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_g',
                    value: function _g(str_attr) {
                        this.imm_parseAttr(str_attr, this._cache[str_attr]);
                        return this['_' + str_attr];
                    }
                }, {
                    key: '_getAttr',
                    value: function _getAttr(str_attr) {
                        return _regeneratorRuntime.async(function _getAttr$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', null);

                                case 7:
                                    if (typeof this._cache[str_attr] == 'undefined') {
                                        this._throw(YAPI_VERSION_MISMATCH, 'No such attribute ' + str_attr + ' in function', null);
                                    }
                                    return context$2$0.abrupt('return', this._cache[str_attr]);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_getFixedAttr',
                    value: function _getFixedAttr(str_attr) {
                        return _regeneratorRuntime.async(function _getFixedAttr$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration == 0)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', null);

                                case 7:
                                    if (typeof this._cache[str_attr] == 'undefined') {
                                        this._throw(YAPI_VERSION_MISMATCH, 'No such attribute ' + str_attr + ' in function', null);
                                    }
                                    return context$2$0.abrupt('return', this._cache[str_attr]);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_escapeAttr',
                    value: function imm_escapeAttr(str_newval) {
                        return escape(str_newval).replace(/[+]/g, '%2B').replace(/%20/g, '+').replace(/%21/g, '!').replace(/%24/g, '$').replace(/%27/g, '\'').replace(/%28/g, '(').replace(/%29/g, ')').replace(/%2[cC]/g, ',').replace(/%2[fF]/g, '/').replace(/%3[aA]/g, ':').replace(/%3[bB]/g, ';').replace(/%3[fF]/g, '?').replace(/%5[bB]/g, '[').replace(/%5[dD]/g, ']');
                    }
                }, {
                    key: '_setAttr',
                    value: function _setAttr(str_attr, str_newval) {
                        var attrname, attrval, extra;
                        return _regeneratorRuntime.async(function _setAttr$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(str_newval == undefined)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_INVALID_ARGUMENT, 'Undefined value to set for attribute ' + str_attr, null));

                                case 2:
                                    attrname = encodeURIComponent(str_attr);
                                    attrval = this.imm_escapeAttr(str_newval);
                                    extra = '/' + attrname + '?' + attrname + '=' + attrval + '&.';

                                    if (this._cacheExpiration != 0) {
                                        this._cacheExpiration = this._yapi.GetTickCount();
                                        this._cache._expiration = this._cacheExpiration;
                                    }
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(this._yapi.funcRequest(this._className, this._func, extra));

                                case 8:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_download',
                    value: function _download(str_path) {
                        var devid, yreq;
                        return _regeneratorRuntime.async(function _download$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    devid = this._serial;

                                    if (!(devid == '')) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.module().get_serialNumber());

                                case 4:
                                    devid = context$2$0.sent;

                                case 5:
                                    if (!(devid == Y_SERIALNUMBER_INVALID)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 7:
                                    context$2$0.next = 9;
                                    return _regeneratorRuntime.awrap(this._yapi.devRequest(devid, 'GET /' + str_path));

                                case 9:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 12;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, ''));

                                case 12:
                                    return context$2$0.abrupt('return', yreq.bin_result);

                                case 13:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_upload',
                    value: function _upload(str_path, bin_content) {
                        var devid, httpreq, len;
                        return _regeneratorRuntime.async(function _upload$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    devid = this._serial;

                                    if (!(devid == '')) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.module().get_serialNumber());

                                case 4:
                                    devid = context$2$0.sent;

                                case 5:
                                    if (!(devid == Y_SERIALNUMBER_INVALID)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this.get_errorType());

                                case 7:
                                    httpreq = 'POST /upload.html';
                                    len = bin_content.length;

                                    if (typeof bin_content == 'string' || bin_content instanceof String) {
                                        bin_content = this._yapi.imm_str2bin(bin_content);
                                    } else if (bin_content instanceof Array) {
                                        bin_content = new Uint8Array(bin_content);
                                    }
                                    context$2$0.next = 12;
                                    return _regeneratorRuntime.awrap(this._yapi.devRequest(devid, httpreq, bin_content));

                                case 12:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 13:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'wait_async',
                    value: function wait_async(callback) {
                        var _this = this;

                        var context = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                        var devid = this._serial;
                        if (devid == '') {
                            this.module().get_serialNumber().then(function () {
                                return _this.wait_async(callback, context);
                            });
                            return YAPI_SUCCESS;
                        }
                        if (devid == Y_SERIALNUMBER_INVALID) {
                            callback(context, this);
                            return YAPI_SUCCESS;
                        }
                        var lockdev = this._yapi.imm_getDevice(devid);

                        var delayedCode = function delayedCode() {
                            callback(context, _this);
                        };
                        lockdev._pendingQueries = lockdev._pendingQueries.then(delayedCode, delayedCode);
                        return YAPI_SUCCESS;
                    }
                }, {
                    key: 'imm_json_get_key',
                    value: function imm_json_get_key(bin_jsonbuff, str_key) {
                        var loadval = JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
                        if (typeof loadval[str_key] != 'undefined') {
                            return loadval[str_key];
                        }
                        return '';
                    }
                }, {
                    key: 'imm_json_get_string',
                    value: function imm_json_get_string(bin_jsonbuff) {
                        return JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
                    }
                }, {
                    key: 'imm_json_get_array',
                    value: function imm_json_get_array(bin_jsonbuff) {
                        var loadval = JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
                        var res = [];
                        for (var idx in loadval) {
                            res.push(JSON.stringify(loadval[idx]));
                        }
                        return res;
                    }
                }, {
                    key: 'imm_get_json_path',
                    value: function imm_get_json_path(str_json, str_path) {
                        var json = JSON.parse(str_json);
                        var paths = str_path.split('|');
                        for (var i = 0; i < paths.length; i++) {
                            var tmp = paths[i];
                            json = json[tmp];
                            if (json == undefined) {
                                return '';
                            }
                        }
                        return JSON.stringify(json);
                    }
                }, {
                    key: 'imm_decode_json_string',
                    value: function imm_decode_json_string(str_json) {
                        return JSON.parse(str_json);
                    }
                }, {
                    key: 'imm_findDataStream',
                    value: function imm_findDataStream(obj_dataset, str_def) {
                        var key = obj_dataset.imm_get_functionId() + ':' + str_def;
                        if (this._dataStreams[key]) return this._dataStreams[key];

                        var newDataStream = new YDataStream(this, obj_dataset, this._yapi.imm_decodeWords(str_def));
                        this._dataStreams[key] = newDataStream;
                        return newDataStream;
                    }
                }, {
                    key: 'clearDataStreamCache',
                    value: function clearDataStreamCache() {
                        return _regeneratorRuntime.async(function clearDataStreamCache$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._dataStreams = {};

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'isOnline',
                    value: function isOnline() {
                        var yreq;
                        return _regeneratorRuntime.async(function isOnline$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration > this._yapi.GetTickCount())) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', true);

                                case 2:
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._yapi.funcRequest(this._className, this._func, '', this._yapi.defaultCacheValidity));

                                case 4:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    if (!(yreq.errorType == YAPI_DEVICE_BUSY)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', true);

                                case 10:
                                    return context$2$0.abrupt('return', false);

                                case 11:
                                    context$2$0.next = 13;
                                    return _regeneratorRuntime.awrap(this._parse(yreq, this._yapi.defaultCacheValidity));

                                case 13:
                                    return context$2$0.abrupt('return', true);

                                case 14:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_errorType',
                    value: function get_errorType() {
                        return this._lastErrorType;
                    }
                }, {
                    key: 'get_errorMessage',
                    value: function get_errorMessage() {
                        return this._lastErrorMsg;
                    }
                }, {
                    key: 'load',
                    value: function load(msValidity) {
                        var yreq;
                        return _regeneratorRuntime.async(function load$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._yapi.funcRequest(this._className, this._func, '', msValidity));

                                case 2:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 5:
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this._parse(yreq, msValidity));

                                case 7:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'clearCache',
                    value: function clearCache() {
                        var devreq;
                        return _regeneratorRuntime.async(function clearCache$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._yapi._funcDev(this._className, this._func));

                                case 2:
                                    devreq = context$2$0.sent;

                                    if (!(devreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return');

                                case 5:
                                    devreq.result.device.imm_dropCache();
                                    if (this._cacheExpiration > 0) {
                                        this._cacheExpiration = this._yapi.GetTickCount();
                                    }

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'module',
                    value: function module() {
                        var hwid, resolve, dotidx;
                        return _regeneratorRuntime.async(function module$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._serial != '')) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(yFindModule(this._serial + '.module', this._yapi));

                                case 3:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 4:
                                    hwid = this._func;

                                    if (hwid.indexOf('.') < 0) {
                                        resolve = this._yapi.imm_resolveFunction(this._className, this._func);
                                        if (resolve.errorType == YAPI_SUCCESS) hwid = resolve.result;
                                    }
                                    dotidx = hwid.indexOf('.');

                                    if (!(dotidx >= 0)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    context$2$0.next = 10;
                                    return _regeneratorRuntime.awrap(YModule.FindModuleInContext(this._yapi, hwid.substr(0, dotidx) + '.module'));

                                case 10:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 11:
                                    context$2$0.next = 13;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 13:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 == context$2$0.t1)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    resolve = this._yapi.imm_resolveFunction(this._className, this._func);
                                    if (resolve.result != undefined) hwid = resolve.result;

                                case 18:
                                    dotidx = hwid.indexOf('.');

                                    if (!(dotidx >= 0)) {
                                        context$2$0.next = 23;
                                        break;
                                    }

                                    context$2$0.next = 22;
                                    return _regeneratorRuntime.awrap(YModule.FindModuleInContext(this._yapi, hwid.substr(0, dotidx) + '.module'));

                                case 22:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 23:
                                    context$2$0.next = 25;
                                    return _regeneratorRuntime.awrap(YModule.FindModuleInContext(this._yapi, 'module_of_' + this.className + '_' + this._func));

                                case 25:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 26:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_module',
                    value: function get_module() {
                        return _regeneratorRuntime.async(function get_module$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(module());

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_functionDescriptor',
                    value: function get_functionDescriptor() {
                        var hwid, resolve, dotidx;
                        return _regeneratorRuntime.async(function get_functionDescriptor$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._hwId != '')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._hwId);

                                case 2:
                                    hwid = this._func;

                                    if (hwid.indexOf('.') < 0) {
                                        resolve = this._yapi.imm_resolveFunction(this._className, this._func);

                                        if (resolve.errorType != YAPI_SUCCESS) hwid = resolve.result;
                                    }
                                    dotidx = hwid.indexOf('.');

                                    if (!(dotidx >= 0)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', hwid);

                                case 7:
                                    return context$2$0.abrupt('return', Y_FUNCTIONDESCRIPTOR_INVALID);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_userData',
                    value: function get_userData() {
                        return _regeneratorRuntime.async(function get_userData$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._userData);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_userData',
                    value: function set_userData(data) {
                        return _regeneratorRuntime.async(function set_userData$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._userData = data;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }], [{
                    key: 'FindFunction',
                    value: function FindFunction(func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCache('Function', func);
                        if (obj == null) {
                            obj = new YFunction(YAPI, func);
                            YFunction._AddToCache('Function', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FindFunctionInContext',
                    value: function FindFunctionInContext(yctx, func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCacheInContext(yctx, 'Function', func);
                        if (obj == null) {
                            obj = new YFunction(yctx, func);
                            YFunction._AddToCache('Function', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FirstFunction',
                    value: function FirstFunction() {
                        var next_hwid = YAPI.imm_getFirstHardwareId('Function');
                        if (next_hwid == null) return null;
                        return YFunction.FindFunction(next_hwid);
                    }
                }, {
                    key: 'FirstFunctionInContext',
                    value: function FirstFunctionInContext(yctx) {
                        var next_hwid = yctx.imm_getFirstHardwareId('Function');
                        if (next_hwid == null) return null;
                        return YFunction.FindFunctionInContext(yctx, next_hwid);
                    }
                }, {
                    key: '_FindFromCacheInContext',
                    value: function _FindFromCacheInContext(yctx, className, func) {
                        return yctx.imm_getFunction(className, func);
                    }
                }, {
                    key: '_FindFromCache',
                    value: function _FindFromCache(className, func) {
                        return YAPI.imm_getFunction(className, func);
                    }
                }, {
                    key: '_AddToCache',
                    value: function _AddToCache(className, func, obj) {
                        obj._yapi.imm_setFunction(className, func, obj);
                    }
                }, {
                    key: '_ClearCache',
                    value: function _ClearCache() {
                        var obj_yapi = arguments.length <= 0 || arguments[0] === undefined ? YAPI : arguments[0];

                        obj_yapi.imm_init();
                    }
                }, {
                    key: '_UpdateValueCallbackList',
                    value: function _UpdateValueCallbackList(obj_func, bool_add) {
                        return _regeneratorRuntime.async(function _UpdateValueCallbackList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(obj_func._yapi._UpdateValueCallbackList(obj_func, bool_add));

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_UpdateTimedReportCallbackList',
                    value: function _UpdateTimedReportCallbackList(obj_func, bool_add) {
                        return _regeneratorRuntime.async(function _UpdateTimedReportCallbackList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(obj_func._yapi._UpdateTimedReportCallbackList(obj_func, bool_add));

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YFunction;
            })();

            _export('YFunction', YFunction);

            YModule = (function (_YFunction) {
                _inherits(YModule, _YFunction);

                function YModule(obj_yapi, str_func) {
                    _classCallCheck(this, YModule);

                    _get(Object.getPrototypeOf(YModule.prototype), 'constructor', this).call(this, obj_yapi, str_func);

                    this._className = 'Module';

                    this._productName = Y_PRODUCTNAME_INVALID;

                    this._serialNumber = Y_SERIALNUMBER_INVALID;

                    this._productId = Y_PRODUCTID_INVALID;

                    this._productRelease = Y_PRODUCTRELEASE_INVALID;

                    this._firmwareRelease = Y_FIRMWARERELEASE_INVALID;

                    this._persistentSettings = Y_PERSISTENTSETTINGS_INVALID;

                    this._luminosity = Y_LUMINOSITY_INVALID;

                    this._beacon = Y_BEACON_INVALID;

                    this._upTime = Y_UPTIME_INVALID;

                    this._usbCurrent = Y_USBCURRENT_INVALID;

                    this._rebootCountdown = Y_REBOOTCOUNTDOWN_INVALID;

                    this._userVar = Y_USERVAR_INVALID;

                    this._logCallback = null;
                    this.imm_setConst({
                        PRODUCTNAME_INVALID: YAPI_INVALID_STRING,
                        SERIALNUMBER_INVALID: YAPI_INVALID_STRING,
                        PRODUCTID_INVALID: YAPI_INVALID_UINT,
                        PRODUCTRELEASE_INVALID: YAPI_INVALID_UINT,
                        FIRMWARERELEASE_INVALID: YAPI_INVALID_STRING,
                        PERSISTENTSETTINGS_LOADED: 0,
                        PERSISTENTSETTINGS_SAVED: 1,
                        PERSISTENTSETTINGS_MODIFIED: 2,
                        PERSISTENTSETTINGS_INVALID: -1,
                        LUMINOSITY_INVALID: YAPI_INVALID_UINT,
                        BEACON_OFF: 0,
                        BEACON_ON: 1,
                        BEACON_INVALID: -1,
                        UPTIME_INVALID: YAPI_INVALID_LONG,
                        USBCURRENT_INVALID: YAPI_INVALID_UINT,
                        REBOOTCOUNTDOWN_INVALID: YAPI_INVALID_INT,
                        USERVAR_INVALID: YAPI_INVALID_INT
                    });

                    var devid = this._func;
                    var dotidx = devid.indexOf('.');
                    if (dotidx > 0) devid = devid.substr(0, dotidx);
                    var dev = this._yapi.imm_getDevice(devid);
                    if (dev) {
                        this._serial = dev.imm_getSerialNumber();
                        this._funId = 'module';
                        this._hwId = this._serial + '.module';
                    }
                }

                _createClass(YModule, [{
                    key: '_throw',
                    value: function _throw(int_errType, str_errMsg, obj_retVal) {
                        this._lastErrorType = int_errType;
                        this._lastErrorMsg = str_errMsg;
                        this._yapi._throw(int_errType, str_errMsg, obj_retVal);
                    }
                }, {
                    key: 'imm_getDev',
                    value: function imm_getDev() {
                        var devid = this._func;

                        var dotidx = devid.indexOf('.');
                        if (dotidx > 0) devid = devid.substr(0, dotidx);

                        var dev = this._yapi.imm_getDevice(devid);
                        if (!dev) {
                            this._throw(YAPI_DEVICE_NOT_FOUND, 'Device [' + devid + '] is not online', null);
                        }
                        return dev;
                    }
                }, {
                    key: 'functionCount',
                    value: function functionCount() {
                        var dev;
                        return _regeneratorRuntime.async(function functionCount$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_DEVICE_NOT_FOUND);

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionCount());

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'functionId',
                    value: function functionId(functionIndex) {
                        var dev;
                        return _regeneratorRuntime.async(function functionId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionId(functionIndex));

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'functionType',
                    value: function functionType(functionIndex) {
                        var dev;
                        return _regeneratorRuntime.async(function functionType$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionType(functionIndex));

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'functionBaseType',
                    value: function functionBaseType(functionIndex) {
                        var dev;
                        return _regeneratorRuntime.async(function functionBaseType$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionBaseType(functionIndex));

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'functionName',
                    value: function functionName(functionIndex) {
                        var dev;
                        return _regeneratorRuntime.async(function functionName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionName(functionIndex));

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'functionValue',
                    value: function functionValue(functionIndex) {
                        var dev;
                        return _regeneratorRuntime.async(function functionValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '');

                                case 3:
                                    return context$2$0.abrupt('return', dev.imm_functionValue(functionIndex));

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'loadUrl',
                    value: function loadUrl(str_url) {
                        var dev, yreq;
                        return _regeneratorRuntime.async(function loadUrl$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (dev) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', null);

                                case 3:
                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this._yapi.devRequest(dev.imm_getRootUrl(), 'GET ' + str_url));

                                case 5:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, null));

                                case 8:
                                    return context$2$0.abrupt('return', yreq.bin_result);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_logicalName',
                    value: function get_logicalName() {
                        var dev, json_val;
                        return _regeneratorRuntime.async(function get_logicalName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = this.imm_getDev();

                                    if (!(dev != null && this._cache._expiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', dev._logicalName);

                                case 3:
                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this._getAttr('logicalName'));

                                case 5:
                                    json_val = context$2$0.sent;
                                    return context$2$0.abrupt('return', json_val == null ? Y_LOGICALNAME_INVALID : json_val);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_flattenJsonStruct',
                    value: function imm_flattenJsonStruct(jsoncomplex) {
                        var decoded = JSON.parse(jsoncomplex);
                        var attrs = [];
                        for (var function_name in decoded) {
                            if (function_name == 'services') continue;
                            var function_attrs = decoded[function_name];
                            for (var attr_name in function_attrs) {
                                var attr_value = function_attrs[attr_name];
                                if (attr_value === null || typeof attr_value === 'object') {
                                    continue;
                                }
                                var flat = function_name + '/' + attr_name + '=' + attr_value;
                                attrs.push(flat);
                            }
                        }
                        return JSON.stringify(attrs);
                    }
                }, {
                    key: 'imm_parseAttr',
                    value: function imm_parseAttr(name, val) {
                        switch (name) {
                            case 'productName':
                                this._productName = val;
                                return 1;
                            case 'serialNumber':
                                this._serialNumber = val;
                                return 1;
                            case 'productId':
                                this._productId = parseInt(val);
                                return 1;
                            case 'productRelease':
                                this._productRelease = parseInt(val);
                                return 1;
                            case 'firmwareRelease':
                                this._firmwareRelease = val;
                                return 1;
                            case 'persistentSettings':
                                this._persistentSettings = parseInt(val);
                                return 1;
                            case 'luminosity':
                                this._luminosity = parseInt(val);
                                return 1;
                            case 'beacon':
                                this._beacon = parseInt(val);
                                return 1;
                            case 'upTime':
                                this._upTime = parseInt(val);
                                return 1;
                            case 'usbCurrent':
                                this._usbCurrent = parseInt(val);
                                return 1;
                            case 'rebootCountdown':
                                this._rebootCountdown = parseInt(val);
                                return 1;
                            case 'userVar':
                                this._userVar = parseInt(val);
                                return 1;
                        }
                        return _get(Object.getPrototypeOf(YModule.prototype), 'imm_parseAttr', this).call(this, name, val);
                    }
                }, {
                    key: 'get_productName',
                    value: function get_productName() {
                        var dev;
                        return _regeneratorRuntime.async(function get_productName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = undefined;

                                    if (!(this._cacheExpiration == 0)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    dev = this.imm_getDev();

                                    if (dev == null) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', dev.imm_getProductName());

                                case 5:
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 7:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_PRODUCTNAME_INVALID);

                                case 11:
                                    return context$2$0.abrupt('return', this._productName);

                                case 12:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_serialNumber',
                    value: function get_serialNumber() {
                        var dev;
                        return _regeneratorRuntime.async(function get_serialNumber$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = undefined;

                                    if (!(this._cacheExpiration == 0)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    dev = this.imm_getDev();

                                    if (dev == null) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', dev.imm_getSerialNumber());

                                case 5:
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 7:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_SERIALNUMBER_INVALID);

                                case 11:
                                    return context$2$0.abrupt('return', this._serialNumber);

                                case 12:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_productId',
                    value: function get_productId() {
                        var dev;
                        return _regeneratorRuntime.async(function get_productId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = undefined;

                                    if (!(this._cacheExpiration == 0)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    dev = this.imm_getDev();

                                    if (dev == null) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', dev.imm_getProductId());

                                case 5:
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 7:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_PRODUCTID_INVALID);

                                case 11:
                                    return context$2$0.abrupt('return', this._productId);

                                case 12:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_productRelease',
                    value: function get_productRelease() {
                        return _regeneratorRuntime.async(function get_productRelease$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration == 0)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_PRODUCTRELEASE_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._productRelease);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_firmwareRelease',
                    value: function get_firmwareRelease() {
                        return _regeneratorRuntime.async(function get_firmwareRelease$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_FIRMWARERELEASE_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._firmwareRelease);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_persistentSettings',
                    value: function get_persistentSettings() {
                        return _regeneratorRuntime.async(function get_persistentSettings$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_PERSISTENTSETTINGS_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._persistentSettings);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_persistentSettings',
                    value: function set_persistentSettings(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_persistentSettings$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(newval);
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('persistentSettings', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_luminosity',
                    value: function get_luminosity() {
                        return _regeneratorRuntime.async(function get_luminosity$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_LUMINOSITY_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._luminosity);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_luminosity',
                    value: function set_luminosity(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_luminosity$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(newval);
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('luminosity', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_beacon',
                    value: function get_beacon() {
                        var dev;
                        return _regeneratorRuntime.async(function get_beacon$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    dev = undefined;

                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    dev = this.imm_getDev();

                                    if (dev == null) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(dev.getBeacon());

                                case 6:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 7:
                                    context$2$0.next = 9;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 9:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_BEACON_INVALID);

                                case 13:
                                    return context$2$0.abrupt('return', this._beacon);

                                case 14:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_beacon',
                    value: function set_beacon(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_beacon$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(newval);
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('beacon', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_upTime',
                    value: function get_upTime() {
                        return _regeneratorRuntime.async(function get_upTime$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_UPTIME_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._upTime);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_usbCurrent',
                    value: function get_usbCurrent() {
                        return _regeneratorRuntime.async(function get_usbCurrent$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_USBCURRENT_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._usbCurrent);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_rebootCountdown',
                    value: function get_rebootCountdown() {
                        return _regeneratorRuntime.async(function get_rebootCountdown$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_REBOOTCOUNTDOWN_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._rebootCountdown);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_rebootCountdown',
                    value: function set_rebootCountdown(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_rebootCountdown$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(newval);
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('rebootCountdown', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_userVar',
                    value: function get_userVar() {
                        return _regeneratorRuntime.async(function get_userVar$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_USERVAR_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._userVar);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_userVar',
                    value: function set_userVar(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_userVar$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(newval);
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('userVar', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'saveToFlash',
                    value: function saveToFlash() {
                        return _regeneratorRuntime.async(function saveToFlash$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_persistentSettings(Y_PERSISTENTSETTINGS_SAVED));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'revertFromFlash',
                    value: function revertFromFlash() {
                        return _regeneratorRuntime.async(function revertFromFlash$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_persistentSettings(Y_PERSISTENTSETTINGS_LOADED));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'reboot',
                    value: function reboot(secBeforeReboot) {
                        return _regeneratorRuntime.async(function reboot$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_rebootCountdown(secBeforeReboot));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'triggerFirmwareUpdate',
                    value: function triggerFirmwareUpdate(secBeforeReboot) {
                        return _regeneratorRuntime.async(function triggerFirmwareUpdate$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.set_rebootCountdown(-secBeforeReboot));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'checkFirmware',
                    value: function checkFirmware(path, onlynew) {
                        var serial, release, tmp_res;
                        return _regeneratorRuntime.async(function checkFirmware$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    serial = undefined;
                                    release = undefined;
                                    tmp_res = undefined;

                                    if (!onlynew) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    context$2$0.t0 = this._yapi;
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.get_firmwareRelease());

                                case 7:
                                    context$2$0.t1 = context$2$0.sent;
                                    release = context$2$0.t0.imm_atoi.call(context$2$0.t0, context$2$0.t1);
                                    context$2$0.next = 12;
                                    break;

                                case 11:
                                    release = 0;

                                case 12:
                                    context$2$0.next = 14;
                                    return _regeneratorRuntime.awrap(this.get_serialNumber());

                                case 14:
                                    serial = context$2$0.sent;
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(YFirmwareUpdate.CheckFirmware(serial, path, release));

                                case 17:
                                    tmp_res = context$2$0.sent;

                                    if (tmp_res.indexOf('error:') == 0) {
                                        this._throw(YAPI_INVALID_ARGUMENT, tmp_res);
                                    }
                                    return context$2$0.abrupt('return', tmp_res);

                                case 20:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'updateFirmware',
                    value: function updateFirmware(path) {
                        var serial, settings;
                        return _regeneratorRuntime.async(function updateFirmware$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    serial = undefined;
                                    settings = undefined;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.get_serialNumber());

                                case 4:
                                    serial = context$2$0.sent;
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.get_allSettings());

                                case 7:
                                    settings = context$2$0.sent;

                                    if (settings.length == 0) {
                                        this._throw(YAPI_IO_ERROR, 'Unable to get device settings');
                                        settings = this._yapi.imm_str2bin('error:Unable to get device settings');
                                    }
                                    return context$2$0.abrupt('return', new YFirmwareUpdate(serial, path, settings));

                                case 10:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_allSettings',
                    value: function get_allSettings() {
                        var settings, json, res, sep, name, item, t_type, id, url, file_data, file_data_bin, temp_data_bin, ext_settings, filelist, templist, ii;
                        return _regeneratorRuntime.async(function get_allSettings$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    settings = undefined;
                                    json = undefined;
                                    res = undefined;
                                    sep = undefined;
                                    name = undefined;
                                    item = undefined;
                                    t_type = undefined;
                                    id = undefined;
                                    url = undefined;
                                    file_data = undefined;
                                    file_data_bin = undefined;
                                    temp_data_bin = undefined;
                                    ext_settings = undefined;
                                    filelist = [];
                                    templist = [];
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(this._download('api.json'));

                                case 17:
                                    settings = context$2$0.sent;

                                    if (!(settings.length == 0)) {
                                        context$2$0.next = 20;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', settings);

                                case 20:
                                    ext_settings = ', "extras":[';
                                    context$2$0.next = 23;
                                    return _regeneratorRuntime.awrap(this.get_functionIds('Temperature'));

                                case 23:
                                    templist = context$2$0.sent;

                                    sep = '';
                                    context$2$0.t0 = _regeneratorRuntime.keys(templist);

                                case 26:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 52;
                                        break;
                                    }

                                    ii = context$2$0.t1.value;
                                    context$2$0.t2 = this._yapi;
                                    context$2$0.next = 31;
                                    return _regeneratorRuntime.awrap(this.get_firmwareRelease());

                                case 31:
                                    context$2$0.t3 = context$2$0.sent;
                                    context$2$0.t4 = context$2$0.t2.imm_atoi.call(context$2$0.t2, context$2$0.t3);

                                    if (!(context$2$0.t4 > 9000)) {
                                        context$2$0.next = 50;
                                        break;
                                    }

                                    url = 'api/' + templist[ii] + '/sensorType';
                                    context$2$0.t5 = this._yapi;
                                    context$2$0.next = 38;
                                    return _regeneratorRuntime.awrap(this._download(url));

                                case 38:
                                    context$2$0.t6 = context$2$0.sent;
                                    t_type = context$2$0.t5.imm_bin2str.call(context$2$0.t5, context$2$0.t6);

                                    if (!(t_type == 'RES_NTC')) {
                                        context$2$0.next = 50;
                                        break;
                                    }

                                    id = templist[ii].substr(11, templist[ii].length - 11);
                                    context$2$0.next = 44;
                                    return _regeneratorRuntime.awrap(this._download('extra.json?page=' + id));

                                case 44:
                                    temp_data_bin = context$2$0.sent;

                                    if (!(temp_data_bin.length == 0)) {
                                        context$2$0.next = 47;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', temp_data_bin);

                                case 47:
                                    item = sep + '{"fid":"' + templist[ii] + '", "json":' + this._yapi.imm_bin2str(temp_data_bin) + '}\n';
                                    ext_settings = ext_settings + item;
                                    sep = ',';

                                case 50:
                                    context$2$0.next = 26;
                                    break;

                                case 52:
                                    ext_settings = ext_settings + '],\n"files":[';
                                    context$2$0.next = 55;
                                    return _regeneratorRuntime.awrap(this.hasFunction('files'));

                                case 55:
                                    if (!context$2$0.sent) {
                                        context$2$0.next = 85;
                                        break;
                                    }

                                    context$2$0.next = 58;
                                    return _regeneratorRuntime.awrap(this._download('files.json?a=dir&f='));

                                case 58:
                                    json = context$2$0.sent;

                                    if (!(json.length == 0)) {
                                        context$2$0.next = 61;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', json);

                                case 61:
                                    filelist = this.imm_json_get_array(json);
                                    sep = '';
                                    context$2$0.t7 = _regeneratorRuntime.keys(filelist);

                                case 64:
                                    if ((context$2$0.t8 = context$2$0.t7()).done) {
                                        context$2$0.next = 85;
                                        break;
                                    }

                                    ii = context$2$0.t8.value;

                                    name = this.imm_json_get_key(this._yapi.imm_str2bin(filelist[ii]), 'name');

                                    if (!(name.length == 0)) {
                                        context$2$0.next = 69;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._yapi.imm_str2bin(name));

                                case 69:
                                    context$2$0.t9 = _regeneratorRuntime;
                                    context$2$0.t10 = this;
                                    context$2$0.next = 73;
                                    return _regeneratorRuntime.awrap(this._escapeAttr(name));

                                case 73:
                                    context$2$0.t11 = context$2$0.sent;
                                    context$2$0.t12 = context$2$0.t10._download.call(context$2$0.t10, context$2$0.t11);
                                    context$2$0.next = 77;
                                    return context$2$0.t9.awrap.call(context$2$0.t9, context$2$0.t12);

                                case 77:
                                    file_data_bin = context$2$0.sent;

                                    file_data = this._yapi.imm_bin2hexstr(file_data_bin);
                                    item = sep + '{"name":"' + name + '", "data":"' + file_data + '"}\n';
                                    ext_settings = ext_settings + item;
                                    sep = ',';;
                                    context$2$0.next = 64;
                                    break;

                                case 85:
                                    ext_settings = ext_settings + ']}';
                                    res = this._yapi.imm_str2bin('{ "api":') + settings + this._yapi.imm_str2bin(ext_settings);
                                    return context$2$0.abrupt('return', res);

                                case 88:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'loadThermistorExtra',
                    value: function loadThermistorExtra(funcId, jsonExtra) {
                        var values, url, curr, currTemp, ofs, size;
                        return _regeneratorRuntime.async(function loadThermistorExtra$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    values = [];
                                    url = undefined;
                                    curr = undefined;
                                    currTemp = undefined;
                                    ofs = undefined;
                                    size = undefined;

                                    url = 'api/' + funcId + '.json?command=Z';
                                    context$2$0.next = 9;
                                    return _regeneratorRuntime.awrap(this._download(url));

                                case 9:
                                    values = this.imm_json_get_array(this._yapi.imm_str2bin(jsonExtra));
                                    ofs = 0;
                                    size = values.length;

                                case 12:
                                    if (!(ofs + 1 < size)) {
                                        context$2$0.next = 21;
                                        break;
                                    }

                                    curr = values[ofs];
                                    currTemp = values[ofs + 1];
                                    url = 'api/' + funcId + '/.json?command=m' + curr + ':' + currTemp;
                                    context$2$0.next = 18;
                                    return _regeneratorRuntime.awrap(this._download(url));

                                case 18:
                                    ofs = ofs + 2;
                                    context$2$0.next = 12;
                                    break;

                                case 21:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 22:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_extraSettings',
                    value: function set_extraSettings(jsonExtra) {
                        var extras, functionId, data, ii;
                        return _regeneratorRuntime.async(function set_extraSettings$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    extras = [];
                                    functionId = undefined;
                                    data = undefined;

                                    extras = this.imm_json_get_array(this._yapi.imm_str2bin(jsonExtra));
                                    context$2$0.t0 = _regeneratorRuntime.keys(extras);

                                case 5:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 17;
                                        break;
                                    }

                                    ii = context$2$0.t1.value;

                                    functionId = this.imm_get_json_path(extras[ii], 'fid');
                                    functionId = this.imm_decode_json_string(functionId);
                                    data = this.imm_get_json_path(extras[ii], 'json');
                                    context$2$0.next = 12;
                                    return _regeneratorRuntime.awrap(this.hasFunction(functionId));

                                case 12:
                                    if (!context$2$0.sent) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    context$2$0.next = 15;
                                    return _regeneratorRuntime.awrap(this.loadThermistorExtra(functionId, data));

                                case 15:
                                    context$2$0.next = 5;
                                    break;

                                case 17:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 18:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_allSettingsAndFiles',
                    value: function set_allSettingsAndFiles(settings) {
                        var down, json, json_api, json_files, json_extra, files, res, _name, data, ii;

                        return _regeneratorRuntime.async(function set_allSettingsAndFiles$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    down = undefined;
                                    json = undefined;
                                    json_api = undefined;
                                    json_files = undefined;
                                    json_extra = undefined;

                                    json = this._yapi.imm_bin2str(settings);
                                    json_api = this.imm_get_json_path(json, 'api');

                                    if (!(json_api == '')) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    context$2$0.next = 10;
                                    return _regeneratorRuntime.awrap(this.set_allSettings(settings));

                                case 10:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 11:
                                    json_extra = this.imm_get_json_path(json, 'extras');

                                    if (json_extra == '') {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    context$2$0.next = 15;
                                    return _regeneratorRuntime.awrap(this.set_extraSettings(json_extra));

                                case 15:
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(this.set_allSettings(this._yapi.imm_str2bin(json_api)));

                                case 17:
                                    context$2$0.next = 19;
                                    return _regeneratorRuntime.awrap(this.hasFunction('files'));

                                case 19:
                                    if (!context$2$0.sent) {
                                        context$2$0.next = 45;
                                        break;
                                    }

                                    files = [];
                                    res = undefined;
                                    _name = undefined;
                                    data = undefined;
                                    context$2$0.next = 26;
                                    return _regeneratorRuntime.awrap(this._download('files.json?a=format'));

                                case 26:
                                    down = context$2$0.sent;

                                    res = this.imm_get_json_path(this._yapi.imm_bin2str(down), 'res');
                                    res = this.imm_decode_json_string(res);

                                    if (res == 'ok') {
                                        context$2$0.next = 31;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_IO_ERROR, 'format failed', YAPI_IO_ERROR));

                                case 31:
                                    json_files = this.imm_get_json_path(json, 'files');
                                    files = this.imm_json_get_array(this._yapi.imm_str2bin(json_files));
                                    context$2$0.t0 = _regeneratorRuntime.keys(files);

                                case 34:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 45;
                                        break;
                                    }

                                    ii = context$2$0.t1.value;

                                    _name = this.imm_get_json_path(files[ii], 'name');
                                    _name = this.imm_decode_json_string(_name);
                                    data = this.imm_get_json_path(files[ii], 'data');
                                    data = this.imm_decode_json_string(data);
                                    context$2$0.next = 42;
                                    return _regeneratorRuntime.awrap(this._upload(_name, this._yapi.imm_hexstr2bin(data)));

                                case 42:
                                    ;
                                    context$2$0.next = 34;
                                    break;

                                case 45:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 46:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'hasFunction',
                    value: function hasFunction(funcId) {
                        var count, i, fid;
                        return _regeneratorRuntime.async(function hasFunction$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    count = undefined;
                                    i = undefined;
                                    fid = undefined;
                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this.functionCount());

                                case 5:
                                    count = context$2$0.sent;

                                    i = 0;

                                case 7:
                                    if (!(i < count)) {
                                        context$2$0.next = 16;
                                        break;
                                    }

                                    context$2$0.next = 10;
                                    return _regeneratorRuntime.awrap(this.functionId(i));

                                case 10:
                                    fid = context$2$0.sent;

                                    if (!(fid == funcId)) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', true);

                                case 13:
                                    i = i + 1;
                                    context$2$0.next = 7;
                                    break;

                                case 16:
                                    return context$2$0.abrupt('return', false);

                                case 17:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_functionIds',
                    value: function get_functionIds(funType) {
                        var count, i, ftype, res;
                        return _regeneratorRuntime.async(function get_functionIds$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    count = undefined;
                                    i = undefined;
                                    ftype = undefined;
                                    res = [];
                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this.functionCount());

                                case 6:
                                    count = context$2$0.sent;

                                    i = 0;

                                case 8:
                                    if (!(i < count)) {
                                        context$2$0.next = 32;
                                        break;
                                    }

                                    context$2$0.next = 11;
                                    return _regeneratorRuntime.awrap(this.functionType(i));

                                case 11:
                                    ftype = context$2$0.sent;

                                    if (!(ftype == funType)) {
                                        context$2$0.next = 20;
                                        break;
                                    }

                                    context$2$0.t0 = res;
                                    context$2$0.next = 16;
                                    return _regeneratorRuntime.awrap(this.functionId(i));

                                case 16:
                                    context$2$0.t1 = context$2$0.sent;
                                    context$2$0.t0.push.call(context$2$0.t0, context$2$0.t1);
                                    context$2$0.next = 29;
                                    break;

                                case 20:
                                    context$2$0.next = 22;
                                    return _regeneratorRuntime.awrap(this.functionBaseType(i));

                                case 22:
                                    ftype = context$2$0.sent;

                                    if (!(ftype == funType)) {
                                        context$2$0.next = 29;
                                        break;
                                    }

                                    context$2$0.t2 = res;
                                    context$2$0.next = 27;
                                    return _regeneratorRuntime.awrap(this.functionId(i));

                                case 27:
                                    context$2$0.t3 = context$2$0.sent;
                                    context$2$0.t2.push.call(context$2$0.t2, context$2$0.t3);

                                case 29:
                                    i = i + 1;
                                    context$2$0.next = 8;
                                    break;

                                case 32:
                                    return context$2$0.abrupt('return', res);

                                case 33:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'calibVersion',
                    value: function calibVersion(cparams) {
                        return _regeneratorRuntime.async(function calibVersion$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(cparams == '0,')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 3);

                                case 2:
                                    if (!(cparams.indexOf(',') >= 0)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    if (!(cparams.indexOf(' ') > 0)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 3);

                                case 7:
                                    return context$2$0.abrupt('return', 1);

                                case 8:
                                    if (!(cparams == '' || cparams == '0')) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 1);

                                case 10:
                                    if (!(cparams.length < 2 || cparams.indexOf('.') >= 0)) {
                                        context$2$0.next = 14;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 0);

                                case 14:
                                    return context$2$0.abrupt('return', 2);

                                case 15:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'calibScale',
                    value: function calibScale(unit_name, sensorType) {
                        return _regeneratorRuntime.async(function calibScale$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(unit_name == 'g' || unit_name == 'gauss' || unit_name == 'W')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 1000);

                                case 2:
                                    if (!(unit_name == 'C')) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    if (!(sensorType == '')) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 16);

                                case 5:
                                    if (!(this._yapi.imm_atoi(sensorType) < 8)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 16);

                                case 9:
                                    return context$2$0.abrupt('return', 100);

                                case 10:
                                    if (!(unit_name == 'm' || unit_name == 'deg')) {
                                        context$2$0.next = 12;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 10);

                                case 12:
                                    return context$2$0.abrupt('return', 1);

                                case 13:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'calibOffset',
                    value: function calibOffset(unit_name) {
                        return _regeneratorRuntime.async(function calibOffset$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(unit_name == '% RH' || unit_name == 'mbar' || unit_name == 'lx')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 0);

                                case 2:
                                    return context$2$0.abrupt('return', 32767);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'calibConvert',
                    value: function calibConvert(param, currentFuncValue, unit_name, sensorType) {
                        var paramVer, funVer, funScale, funOffset, paramScale, paramOffset, words, words_str, calibData, iCalib, calibType, i, maxSize, ratio, nPoints, wordVal, ii;
                        return _regeneratorRuntime.async(function calibConvert$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    paramVer = undefined;
                                    funVer = undefined;
                                    funScale = undefined;
                                    funOffset = undefined;
                                    paramScale = undefined;
                                    paramOffset = undefined;
                                    words = [];
                                    words_str = [];
                                    calibData = [];
                                    iCalib = [];
                                    calibType = undefined;
                                    i = undefined;
                                    maxSize = undefined;
                                    ratio = undefined;
                                    nPoints = undefined;
                                    wordVal = undefined;
                                    context$2$0.next = 18;
                                    return _regeneratorRuntime.awrap(this.calibVersion(param));

                                case 18:
                                    paramVer = context$2$0.sent;
                                    context$2$0.next = 21;
                                    return _regeneratorRuntime.awrap(this.calibVersion(currentFuncValue));

                                case 21:
                                    funVer = context$2$0.sent;
                                    context$2$0.next = 24;
                                    return _regeneratorRuntime.awrap(this.calibScale(unit_name, sensorType));

                                case 24:
                                    funScale = context$2$0.sent;
                                    context$2$0.next = 27;
                                    return _regeneratorRuntime.awrap(this.calibOffset(unit_name));

                                case 27:
                                    funOffset = context$2$0.sent;

                                    paramScale = funScale;
                                    paramOffset = funOffset;
                                    if (funVer < 3) {
                                        if (funVer == 2) {
                                            words = this._yapi.imm_decodeWords(currentFuncValue);
                                            if (words[0] == 1366 && words[1] == 12500) {
                                                funScale = 1;
                                                funOffset = 0;
                                            } else {
                                                funScale = words[1];
                                                funOffset = words[0];
                                            }
                                        } else {
                                            if (funVer == 1) {
                                                if (currentFuncValue == '' || this._yapi.imm_atoi(currentFuncValue) > 10) {
                                                    funScale = 0;
                                                }
                                            }
                                        }
                                    }
                                    calibData.length = 0;
                                    calibType = 0;
                                    if (paramVer < 3) {
                                        if (paramVer == 2) {
                                            words = this._yapi.imm_decodeWords(param);
                                            if (words[0] == 1366 && words[1] == 12500) {
                                                paramScale = 1;
                                                paramOffset = 0;
                                            } else {
                                                paramScale = words[1];
                                                paramOffset = words[0];
                                            }
                                            if (words.length >= 3 && words[2] > 0) {
                                                maxSize = 3 + 2 * (words[2] % 10);
                                                if (maxSize > words.length) {
                                                    maxSize = words.length;
                                                }
                                                i = 3;
                                                while (i < maxSize) {
                                                    calibData.push(words[i]);
                                                    i = i + 1;
                                                }
                                            }
                                        } else {
                                            if (paramVer == 1) {
                                                words_str = param.split(',');
                                                for (ii in words_str) {
                                                    words.push(this._yapi.imm_atoi(words_str[ii]));
                                                }
                                                if (param == '' || words[0] > 10) {
                                                    paramScale = 0;
                                                }
                                                if (words.length > 0 && words[0] > 0) {
                                                    maxSize = 1 + 2 * (words[0] % 10);
                                                    if (maxSize > words.length) {
                                                        maxSize = words.length;
                                                    }
                                                    i = 1;
                                                    while (i < maxSize) {
                                                        calibData.push(words[i]);
                                                        i = i + 1;
                                                    }
                                                }
                                            } else {
                                                if (paramVer == 0) {
                                                    ratio = parseFloat(param);
                                                    if (ratio > 0) {
                                                        calibData.push(0.0);
                                                        calibData.push(0.0);
                                                        calibData.push(Math.round(65535 / ratio));
                                                        calibData.push(65535.0);
                                                    }
                                                }
                                            }
                                        }
                                        i = 0;
                                        while (i < calibData.length) {
                                            if (paramScale > 0) {
                                                calibData[i] = (calibData[i] - paramOffset) / paramScale;
                                            } else {
                                                calibData[i] = this._yapi.imm_decimalToDouble(Math.round(calibData[i]));
                                            }
                                            i = i + 1;
                                        }
                                    } else {
                                        iCalib = this._yapi.imm_decodeFloats(param);
                                        calibType = Math.round(iCalib[0] / 1000.0);
                                        if (calibType >= 30) {
                                            calibType = calibType - 30;
                                        }
                                        i = 1;
                                        while (i < iCalib.length) {
                                            calibData.push(iCalib[i] / 1000.0);
                                            i = i + 1;
                                        }
                                    }
                                    if (funVer >= 3) {
                                        if (calibData.length == 0) {
                                            param = '0,';
                                        } else {
                                            param = 30 + calibType;
                                            i = 0;
                                            while (i < calibData.length) {
                                                if ((i & 1) > 0) {
                                                    param = param + ':';
                                                } else {
                                                    param = param + ' ';
                                                }
                                                param = param + Math.round(calibData[i] * 1000.0 / 1000.0);
                                                i = i + 1;
                                            }
                                            param = param + ',';
                                        }
                                    } else {
                                        if (funVer >= 1) {
                                            nPoints = parseInt(calibData.length / 2, 10);
                                            param = nPoints;
                                            i = 0;
                                            while (i < 2 * nPoints) {
                                                if (funScale == 0) {
                                                    wordVal = this._yapi.imm_doubleToDecimal(Math.round(calibData[i]));
                                                } else {
                                                    wordVal = calibData[i] * funScale + funOffset;
                                                }
                                                param = param + ',' + Math.round(wordVal);
                                                i = i + 1;
                                            }
                                        } else {
                                            if (calibData.length == 4) {
                                                param = Math.round(1000 * (calibData[3] - calibData[1]) / calibData[2] - calibData[0]);
                                            }
                                        }
                                    }
                                    return context$2$0.abrupt('return', param);

                                case 36:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_allSettings',
                    value: function set_allSettings(settings) {
                        var restoreLast, old_json_flat, old_dslist, old_jpath, old_jpath_len, old_val_arr, actualSettings, new_dslist, new_jpath, new_jpath_len, new_val_arr, cpos, eqpos, leng, i, j, njpath, jpath, fun, attr, value, url, tmp, new_calib, sensorType, unit_name, newval, oldval, old_calib, each_str, do_update, found, ii;
                        return _regeneratorRuntime.async(function set_allSettings$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    restoreLast = [];
                                    old_json_flat = undefined;
                                    old_dslist = [];
                                    old_jpath = [];
                                    old_jpath_len = [];
                                    old_val_arr = [];
                                    actualSettings = undefined;
                                    new_dslist = [];
                                    new_jpath = [];
                                    new_jpath_len = [];
                                    new_val_arr = [];
                                    cpos = undefined;
                                    eqpos = undefined;
                                    leng = undefined;
                                    i = undefined;
                                    j = undefined;
                                    njpath = undefined;
                                    jpath = undefined;
                                    fun = undefined;
                                    attr = undefined;
                                    value = undefined;
                                    url = undefined;
                                    tmp = undefined;
                                    new_calib = undefined;
                                    sensorType = undefined;
                                    unit_name = undefined;
                                    newval = undefined;
                                    oldval = undefined;
                                    old_calib = undefined;
                                    each_str = undefined;
                                    do_update = undefined;
                                    found = undefined;

                                    tmp = this._yapi.imm_bin2str(settings);
                                    tmp = this.imm_get_json_path(tmp, 'api');
                                    if (!(tmp == '')) {
                                        settings = this._yapi.imm_str2bin(tmp);
                                    }
                                    oldval = '';
                                    newval = '';
                                    old_json_flat = this.imm_flattenJsonStruct(settings);
                                    old_dslist = this.imm_json_get_array(old_json_flat);
                                    context$2$0.t0 = _regeneratorRuntime.keys(old_dslist);

                                case 40:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 57;
                                        break;
                                    }

                                    ii = context$2$0.t1.value;

                                    each_str = this.imm_json_get_string(this._yapi.imm_str2bin(old_dslist[ii]));
                                    leng = each_str.length;
                                    eqpos = each_str.indexOf('=');

                                    if (!(eqpos < 0 || leng == 0)) {
                                        context$2$0.next = 48;
                                        break;
                                    }

                                    this._throw(YAPI_INVALID_ARGUMENT, 'Invalid settings');
                                    return context$2$0.abrupt('return', YAPI_INVALID_ARGUMENT);

                                case 48:
                                    jpath = each_str.substr(0, eqpos);
                                    eqpos = eqpos + 1;
                                    value = each_str.substr(eqpos, leng - eqpos);
                                    old_jpath.push(jpath);
                                    old_jpath_len.push(jpath.length);
                                    old_val_arr.push(value);;
                                    context$2$0.next = 40;
                                    break;

                                case 57:
                                    context$2$0.next = 59;
                                    return _regeneratorRuntime.awrap(this._download('api.json'));

                                case 59:
                                    actualSettings = context$2$0.sent;

                                    actualSettings = this.imm_flattenJsonStruct(actualSettings);
                                    new_dslist = this.imm_json_get_array(actualSettings);
                                    context$2$0.t2 = _regeneratorRuntime.keys(new_dslist);

                                case 63:
                                    if ((context$2$0.t3 = context$2$0.t2()).done) {
                                        context$2$0.next = 80;
                                        break;
                                    }

                                    ii = context$2$0.t3.value;

                                    each_str = this.imm_json_get_string(this._yapi.imm_str2bin(new_dslist[ii]));
                                    leng = each_str.length;
                                    eqpos = each_str.indexOf('=');

                                    if (!(eqpos < 0 || leng == 0)) {
                                        context$2$0.next = 71;
                                        break;
                                    }

                                    this._throw(YAPI_INVALID_ARGUMENT, 'Invalid settings');
                                    return context$2$0.abrupt('return', YAPI_INVALID_ARGUMENT);

                                case 71:
                                    jpath = each_str.substr(0, eqpos);
                                    eqpos = eqpos + 1;
                                    value = each_str.substr(eqpos, leng - eqpos);
                                    new_jpath.push(jpath);
                                    new_jpath_len.push(jpath.length);
                                    new_val_arr.push(value);;
                                    context$2$0.next = 63;
                                    break;

                                case 80:
                                    i = 0;

                                case 81:
                                    if (!(i < new_jpath.length)) {
                                        context$2$0.next = 172;
                                        break;
                                    }

                                    njpath = new_jpath[i];
                                    leng = njpath.length;
                                    cpos = njpath.indexOf('/');

                                    if (!(cpos < 0 || leng == 0)) {
                                        context$2$0.next = 87;
                                        break;
                                    }

                                    return context$2$0.abrupt('continue', 81);

                                case 87:
                                    fun = njpath.substr(0, cpos);
                                    cpos = cpos + 1;
                                    attr = njpath.substr(cpos, leng - cpos);
                                    do_update = true;
                                    if (fun == 'services') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'firmwareRelease') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'usbCurrent') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'upTime') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'persistentSettings') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'adminPassword') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'userPassword') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'rebootCountdown') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'advertisedValue') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'poeCurrent') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'readiness') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'ipAddress') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'subnetMask') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'router') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'linkQuality') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'ssid') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'channel') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'security') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'message') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'currentValue') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'currentRawValue') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'currentRunIndex') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'pulseTimer') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'lastTimePressed') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'lastTimeReleased') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'filesCount') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'freeSpace') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'timeUTC') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'rtcTime') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'unixTime') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'dateTime') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'rawValue') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'lastMsg') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'delayedPulseTimer') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'rxCount') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'txCount') {
                                        do_update = false;
                                    }
                                    if (do_update && attr == 'msgCount') {
                                        do_update = false;
                                    }
                                    if (do_update) {
                                        do_update = false;
                                        newval = new_val_arr[i];
                                        j = 0;
                                        found = false;
                                        while (j < old_jpath.length && !found) {
                                            if (new_jpath_len[i] == old_jpath_len[j] && new_jpath[i] == old_jpath[j]) {
                                                found = true;
                                                oldval = old_val_arr[j];
                                                if (!(newval == oldval)) {
                                                    do_update = true;
                                                }
                                            }
                                            j = j + 1;
                                        }
                                    }

                                    if (!do_update) {
                                        context$2$0.next = 169;
                                        break;
                                    }

                                    if (!(attr == 'calibrationParam')) {
                                        context$2$0.next = 158;
                                        break;
                                    }

                                    old_calib = '';
                                    unit_name = '';
                                    sensorType = '';
                                    new_calib = newval;
                                    j = 0;
                                    found = false;
                                    while (j < old_jpath.length && !found) {
                                        if (new_jpath_len[i] == old_jpath_len[j] && new_jpath[i] == old_jpath[j]) {
                                            found = true;
                                            old_calib = old_val_arr[j];
                                        }
                                        j = j + 1;
                                    }
                                    tmp = fun + '/unit';
                                    j = 0;
                                    found = false;
                                    while (j < new_jpath.length && !found) {
                                        if (tmp == new_jpath[j]) {
                                            found = true;
                                            unit_name = new_val_arr[j];
                                        }
                                        j = j + 1;
                                    }
                                    tmp = fun + '/sensorType';
                                    j = 0;
                                    found = false;
                                    while (j < new_jpath.length && !found) {
                                        if (tmp == new_jpath[j]) {
                                            found = true;
                                            sensorType = new_val_arr[j];
                                        }
                                        j = j + 1;
                                    }
                                    context$2$0.next = 148;
                                    return _regeneratorRuntime.awrap(this.calibConvert(old_calib, new_val_arr[i], unit_name, sensorType));

                                case 148:
                                    newval = context$2$0.sent;
                                    context$2$0.t4 = 'api/' + fun + '.json?' + attr + '=';
                                    context$2$0.next = 152;
                                    return _regeneratorRuntime.awrap(this._escapeAttr(newval));

                                case 152:
                                    context$2$0.t5 = context$2$0.sent;
                                    url = context$2$0.t4 + context$2$0.t5;
                                    context$2$0.next = 156;
                                    return _regeneratorRuntime.awrap(this._download(url));

                                case 156:
                                    context$2$0.next = 169;
                                    break;

                                case 158:
                                    context$2$0.t6 = 'api/' + fun + '.json?' + attr + '=';
                                    context$2$0.next = 161;
                                    return _regeneratorRuntime.awrap(this._escapeAttr(oldval));

                                case 161:
                                    context$2$0.t7 = context$2$0.sent;
                                    url = context$2$0.t6 + context$2$0.t7;

                                    if (!(attr == 'resolution')) {
                                        context$2$0.next = 167;
                                        break;
                                    }

                                    restoreLast.push(url);
                                    context$2$0.next = 169;
                                    break;

                                case 167:
                                    context$2$0.next = 169;
                                    return _regeneratorRuntime.awrap(this._download(url));

                                case 169:
                                    i = i + 1;
                                    context$2$0.next = 81;
                                    break;

                                case 172:
                                    context$2$0.t8 = _regeneratorRuntime.keys(restoreLast);

                                case 173:
                                    if ((context$2$0.t9 = context$2$0.t8()).done) {
                                        context$2$0.next = 180;
                                        break;
                                    }

                                    ii = context$2$0.t9.value;
                                    context$2$0.next = 177;
                                    return _regeneratorRuntime.awrap(this._download(restoreLast[ii]));

                                case 177:
                                    ;
                                    context$2$0.next = 173;
                                    break;

                                case 180:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 181:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'download',
                    value: function download(pathname) {
                        return _regeneratorRuntime.async(function download$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._download(pathname));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_icon2d',
                    value: function get_icon2d() {
                        return _regeneratorRuntime.async(function get_icon2d$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._download('icon2d.png'));

                                case 2:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_lastLogs',
                    value: function get_lastLogs() {
                        var content;
                        return _regeneratorRuntime.async(function get_lastLogs$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    content = undefined;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._download('logs.txt'));

                                case 3:
                                    content = context$2$0.sent;
                                    return context$2$0.abrupt('return', this._yapi.imm_bin2str(content));

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'nextModule',
                    value: function nextModule() {
                        var resolve = this._yapi.imm_resolveFunction(this._className, this._func);
                        if (resolve.errorType != YAPI_SUCCESS) return null;

                        var next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
                        if (next_hwid == null) return null;
                        return YModule.FindModuleInContext(this._yapi, next_hwid);
                    }
                }], [{
                    key: 'FindModule',
                    value: function FindModule(func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCache('Module', func);
                        if (obj == null) {
                            obj = new YModule(YAPI, func);
                            YFunction._AddToCache('Module', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FindModuleInContext',
                    value: function FindModuleInContext(yctx, func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCacheInContext(yctx, 'Module', func);
                        if (obj == null) {
                            obj = new YModule(yctx, func);
                            YFunction._AddToCache('Module', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FirstModule',
                    value: function FirstModule() {
                        var next_hwid = YAPI.imm_getFirstHardwareId('Module');
                        if (next_hwid == null) return null;
                        return YModule.FindModule(next_hwid);
                    }
                }, {
                    key: 'FirstModuleInContext',
                    value: function FirstModuleInContext(yctx) {
                        var next_hwid = yctx.imm_getFirstHardwareId('Module');
                        if (next_hwid == null) return null;
                        return YModule.FindModuleInContext(yctx, next_hwid);
                    }
                }]);

                return YModule;
            })(YFunction);

            _export('YModule', YModule);

            YSensor = (function (_YFunction2) {
                _inherits(YSensor, _YFunction2);

                function YSensor(obj_yapi, str_func) {
                    _classCallCheck(this, YSensor);

                    _get(Object.getPrototypeOf(YSensor.prototype), 'constructor', this).call(this, obj_yapi, str_func);

                    this._className = 'Sensor';

                    this._unit = Y_UNIT_INVALID;

                    this._currentValue = Y_CURRENTVALUE_INVALID;

                    this._lowestValue = Y_LOWESTVALUE_INVALID;

                    this._highestValue = Y_HIGHESTVALUE_INVALID;

                    this._currentRawValue = Y_CURRENTRAWVALUE_INVALID;

                    this._logFrequency = Y_LOGFREQUENCY_INVALID;

                    this._reportFrequency = Y_REPORTFREQUENCY_INVALID;

                    this._calibrationParam = Y_CALIBRATIONPARAM_INVALID;

                    this._resolution = Y_RESOLUTION_INVALID;

                    this._sensorState = Y_SENSORSTATE_INVALID;

                    this._timedReportCallbackSensor = null;

                    this._prevTimedReport = 0;

                    this._iresol = 0;

                    this._offset = 0;

                    this._scale = 0;

                    this._decexp = 0;

                    this._isScal = 0;

                    this._isScal32 = 0;

                    this._caltyp = 0;

                    this._calpar = [];

                    this._calraw = [];

                    this._calref = [];

                    this._calhdl = null;
                    this.imm_setConst({
                        UNIT_INVALID: YAPI_INVALID_STRING,
                        CURRENTVALUE_INVALID: YAPI_INVALID_DOUBLE,
                        LOWESTVALUE_INVALID: YAPI_INVALID_DOUBLE,
                        HIGHESTVALUE_INVALID: YAPI_INVALID_DOUBLE,
                        CURRENTRAWVALUE_INVALID: YAPI_INVALID_DOUBLE,
                        LOGFREQUENCY_INVALID: YAPI_INVALID_STRING,
                        REPORTFREQUENCY_INVALID: YAPI_INVALID_STRING,
                        CALIBRATIONPARAM_INVALID: YAPI_INVALID_STRING,
                        RESOLUTION_INVALID: YAPI_INVALID_DOUBLE,
                        SENSORSTATE_INVALID: YAPI_INVALID_INT
                    });
                }

                _createClass(YSensor, [{
                    key: 'imm_parseAttr',
                    value: function imm_parseAttr(name, val) {
                        switch (name) {
                            case 'unit':
                                this._unit = val;
                                return 1;
                            case 'currentValue':
                                this._currentValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
                                return 1;
                            case 'lowestValue':
                                this._lowestValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
                                return 1;
                            case 'highestValue':
                                this._highestValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
                                return 1;
                            case 'currentRawValue':
                                this._currentRawValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
                                return 1;
                            case 'logFrequency':
                                this._logFrequency = val;
                                return 1;
                            case 'reportFrequency':
                                this._reportFrequency = val;
                                return 1;
                            case 'calibrationParam':
                                this._calibrationParam = val;
                                return 1;
                            case 'resolution':
                                this._resolution = Math.round(val * 1000.0 / 65536.0) / 1000.0;
                                return 1;
                            case 'sensorState':
                                this._sensorState = parseInt(val);
                                return 1;
                        }
                        return _get(Object.getPrototypeOf(YSensor.prototype), 'imm_parseAttr', this).call(this, name, val);
                    }
                }, {
                    key: 'get_unit',
                    value: function get_unit() {
                        return _regeneratorRuntime.async(function get_unit$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_UNIT_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._unit);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_currentValue',
                    value: function get_currentValue() {
                        var res;
                        return _regeneratorRuntime.async(function get_currentValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;

                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 4:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CURRENTVALUE_INVALID);

                                case 8:
                                    context$2$0.next = 10;
                                    return _regeneratorRuntime.awrap(this._applyCalibration(this._currentRawValue));

                                case 10:
                                    res = context$2$0.sent;

                                    if (res == Y_CURRENTVALUE_INVALID) {
                                        res = this._currentValue;
                                    }
                                    res = res * this._iresol;
                                    return context$2$0.abrupt('return', Math.round(res) / this._iresol);

                                case 14:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_lowestValue',
                    value: function set_lowestValue(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_lowestValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(Math.round(newval * 65536.0));
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('lowestValue', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_lowestValue',
                    value: function get_lowestValue() {
                        var res;
                        return _regeneratorRuntime.async(function get_lowestValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;

                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 4:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_LOWESTVALUE_INVALID);

                                case 8:
                                    res = this._lowestValue * this._iresol;
                                    return context$2$0.abrupt('return', Math.round(res) / this._iresol);

                                case 10:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_highestValue',
                    value: function set_highestValue(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_highestValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(Math.round(newval * 65536.0));
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('highestValue', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_highestValue',
                    value: function get_highestValue() {
                        var res;
                        return _regeneratorRuntime.async(function get_highestValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;

                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 4:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_HIGHESTVALUE_INVALID);

                                case 8:
                                    res = this._highestValue * this._iresol;
                                    return context$2$0.abrupt('return', Math.round(res) / this._iresol);

                                case 10:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_currentRawValue',
                    value: function get_currentRawValue() {
                        return _regeneratorRuntime.async(function get_currentRawValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CURRENTRAWVALUE_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._currentRawValue);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_logFrequency',
                    value: function get_logFrequency() {
                        return _regeneratorRuntime.async(function get_logFrequency$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_LOGFREQUENCY_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._logFrequency);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_logFrequency',
                    value: function set_logFrequency(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_logFrequency$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = newval;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('logFrequency', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_reportFrequency',
                    value: function get_reportFrequency() {
                        return _regeneratorRuntime.async(function get_reportFrequency$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_REPORTFREQUENCY_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._reportFrequency);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_reportFrequency',
                    value: function set_reportFrequency(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_reportFrequency$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = newval;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('reportFrequency', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_calibrationParam',
                    value: function get_calibrationParam() {
                        return _regeneratorRuntime.async(function get_calibrationParam$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CALIBRATIONPARAM_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._calibrationParam);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_calibrationParam',
                    value: function set_calibrationParam(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_calibrationParam$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = newval;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('calibrationParam', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'set_resolution',
                    value: function set_resolution(newval) {
                        var rest_val;
                        return _regeneratorRuntime.async(function set_resolution$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;

                                    rest_val = String(Math.round(newval * 65536.0));
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this._setAttr('resolution', rest_val));

                                case 4:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_resolution',
                    value: function get_resolution() {
                        return _regeneratorRuntime.async(function get_resolution$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_RESOLUTION_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._resolution);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_sensorState',
                    value: function get_sensorState() {
                        return _regeneratorRuntime.async(function get_sensorState$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._cacheExpiration <= this._yapi.GetTickCount())) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 3:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_SENSORSTATE_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._sensorState);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_parserHelper',
                    value: function _parserHelper() {
                        var position, maxpos, iCalib, iRaw, iRef, fRaw, fRef;
                        return _regeneratorRuntime.async(function _parserHelper$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    position = undefined;
                                    maxpos = undefined;
                                    iCalib = [];
                                    iRaw = undefined;
                                    iRef = undefined;
                                    fRaw = undefined;
                                    fRef = undefined;

                                    this._caltyp = -1;
                                    this._scale = -1;
                                    this._isScal32 = false;
                                    this._calpar.length = 0;
                                    this._calraw.length = 0;
                                    this._calref.length = 0;

                                    if (this._resolution > 0) {
                                        this._iresol = Math.round(1.0 / this._resolution);
                                    } else {
                                        this._iresol = 10000;
                                        this._resolution = 0.0001;
                                    }

                                    if (!(this._calibrationParam == '' || this._calibrationParam == '0')) {
                                        context$2$0.next = 17;
                                        break;
                                    }

                                    this._caltyp = 0;
                                    return context$2$0.abrupt('return', 0);

                                case 17:
                                    if (!(this._calibrationParam.indexOf(',') >= 0)) {
                                        context$2$0.next = 42;
                                        break;
                                    }

                                    iCalib = this._yapi.imm_decodeFloats(this._calibrationParam);
                                    this._caltyp = parseInt(iCalib[0] / 1000, 10);

                                    if (!(this._caltyp > 0)) {
                                        context$2$0.next = 28;
                                        break;
                                    }

                                    if (!(this._caltyp < YOCTO_CALIB_TYPE_OFS)) {
                                        context$2$0.next = 24;
                                        break;
                                    }

                                    this._caltyp = -1;
                                    return context$2$0.abrupt('return', 0);

                                case 24:
                                    this.imm_calhdl = this._yapi.imm_getCalibrationHandler(this._caltyp);

                                    if (this.imm_calhdl != null) {
                                        context$2$0.next = 28;
                                        break;
                                    }

                                    this._caltyp = -1;
                                    return context$2$0.abrupt('return', 0);

                                case 28:
                                    this._isScal = true;
                                    this._isScal32 = true;
                                    this._offset = 0;
                                    this._scale = 1000;
                                    maxpos = iCalib.length;
                                    this._calpar.length = 0;
                                    position = 1;
                                    while (position < maxpos) {
                                        this._calpar.push(iCalib[position]);
                                        position = position + 1;
                                    }
                                    this._calraw.length = 0;
                                    this._calref.length = 0;
                                    position = 1;
                                    while (position + 1 < maxpos) {
                                        fRaw = iCalib[position];
                                        fRaw = fRaw / 1000.0;
                                        fRef = iCalib[position + 1];
                                        fRef = fRef / 1000.0;
                                        this._calraw.push(fRaw);
                                        this._calref.push(fRef);
                                        position = position + 2;
                                    }
                                    context$2$0.next = 61;
                                    break;

                                case 42:
                                    iCalib = this._yapi.imm_decodeWords(this._calibrationParam);

                                    if (!(iCalib.length < 2)) {
                                        context$2$0.next = 46;
                                        break;
                                    }

                                    this._caltyp = -1;
                                    return context$2$0.abrupt('return', 0);

                                case 46:
                                    this._isScal = iCalib[1] > 0;
                                    if (this._isScal) {
                                        this._offset = iCalib[0];
                                        if (this._offset > 32767) {
                                            this._offset = this._offset - 65536;
                                        }
                                        this._scale = iCalib[1];
                                        this._decexp = 0;
                                    } else {
                                        this._offset = 0;
                                        this._scale = 1;
                                        this._decexp = 1.0;
                                        position = iCalib[0];
                                        while (position > 0) {
                                            this._decexp = this._decexp * 10;
                                            position = position - 1;
                                        }
                                    }

                                    if (!(iCalib.length == 2)) {
                                        context$2$0.next = 51;
                                        break;
                                    }

                                    this._caltyp = 0;
                                    return context$2$0.abrupt('return', 0);

                                case 51:
                                    this._caltyp = iCalib[2];
                                    this.imm_calhdl = this._yapi.imm_getCalibrationHandler(this._caltyp);
                                    if (this._caltyp <= 10) {
                                        maxpos = this._caltyp;
                                    } else {
                                        if (this._caltyp <= 20) {
                                            maxpos = this._caltyp - 10;
                                        } else {
                                            maxpos = 5;
                                        }
                                    }
                                    maxpos = 3 + 2 * maxpos;
                                    if (maxpos > iCalib.length) {
                                        maxpos = iCalib.length;
                                    }
                                    this._calpar.length = 0;
                                    this._calraw.length = 0;
                                    this._calref.length = 0;
                                    position = 3;
                                    while (position + 1 < maxpos) {
                                        iRaw = iCalib[position];
                                        iRef = iCalib[position + 1];
                                        this._calpar.push(iRaw);
                                        this._calpar.push(iRef);
                                        if (this._isScal) {
                                            fRaw = iRaw;
                                            fRaw = (fRaw - this._offset) / this._scale;
                                            fRef = iRef;
                                            fRef = (fRef - this._offset) / this._scale;
                                            this._calraw.push(fRaw);
                                            this._calref.push(fRef);
                                        } else {
                                            this._calraw.push(this._yapi.imm_decimalToDouble(iRaw));
                                            this._calref.push(this._yapi.imm_decimalToDouble(iRef));
                                        }
                                        position = position + 2;
                                    }

                                case 61:
                                    return context$2$0.abrupt('return', 0);

                                case 62:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'isSensorReady',
                    value: function isSensorReady() {
                        return _regeneratorRuntime.async(function isSensorReady$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.isOnline());

                                case 2:
                                    if (context$2$0.sent) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', false);

                                case 4:
                                    if (this._sensorState == 0) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', false);

                                case 6:
                                    return context$2$0.abrupt('return', true);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'startDataLogger',
                    value: function startDataLogger() {
                        var res;
                        return _regeneratorRuntime.async(function startDataLogger$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._download('api/dataLogger/recording?recording=1'));

                                case 3:
                                    res = context$2$0.sent;

                                    if (res.length > 0) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_IO_ERROR, 'unable to start datalogger', YAPI_IO_ERROR));

                                case 6:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'stopDataLogger',
                    value: function stopDataLogger() {
                        var res;
                        return _regeneratorRuntime.async(function stopDataLogger$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._download('api/dataLogger/recording?recording=0'));

                                case 3:
                                    res = context$2$0.sent;

                                    if (res.length > 0) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_IO_ERROR, 'unable to stop datalogger', YAPI_IO_ERROR));

                                case 6:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_recordedData',
                    value: function get_recordedData(startTime, endTime) {
                        var funcid, funit;
                        return _regeneratorRuntime.async(function get_recordedData$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    funcid = undefined;
                                    funit = undefined;
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.get_functionId());

                                case 4:
                                    funcid = context$2$0.sent;
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.get_unit());

                                case 7:
                                    funit = context$2$0.sent;
                                    return context$2$0.abrupt('return', new YDataSet(this, funcid, funit, startTime, endTime));

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'registerTimedReportCallback',
                    value: function registerTimedReportCallback(callback) {
                        return _regeneratorRuntime.async(function registerTimedReportCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(callback != null)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(YFunction._UpdateTimedReportCallbackList(this, true));

                                case 3:
                                    context$2$0.next = 7;
                                    break;

                                case 5:
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(YFunction._UpdateTimedReportCallbackList(this, false));

                                case 7:
                                    this._timedReportCallbackSensor = callback;
                                    return context$2$0.abrupt('return', 0);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_invokeTimedReportCallback',
                    value: function _invokeTimedReportCallback(value) {
                        return _regeneratorRuntime.async(function _invokeTimedReportCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._timedReportCallbackSensor != null)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._timedReportCallbackSensor(this, value));

                                case 3:
                                    context$2$0.next = 5;
                                    break;

                                case 5:
                                    return context$2$0.abrupt('return', 0);

                                case 6:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'calibrateFromPoints',
                    value: function calibrateFromPoints(rawValues, refValues) {
                        var rest_val;
                        return _regeneratorRuntime.async(function calibrateFromPoints$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rest_val = undefined;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._encodeCalibrationPoints(rawValues, refValues));

                                case 3:
                                    rest_val = context$2$0.sent;
                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this._setAttr('calibrationParam', rest_val));

                                case 6:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'loadCalibrationPoints',
                    value: function loadCalibrationPoints(rawValues, refValues) {
                        var ii;
                        return _regeneratorRuntime.async(function loadCalibrationPoints$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    rawValues.length = 0;
                                    refValues.length = 0;

                                    if (!(this._scale == 0)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 5:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_DEVICE_NOT_FOUND);

                                case 9:
                                    if (!(this._caltyp < 0)) {
                                        context$2$0.next = 12;
                                        break;
                                    }

                                    this._throw(YAPI_NOT_SUPPORTED, 'Calibration parameters format mismatch. Please upgrade your library or firmware.');
                                    return context$2$0.abrupt('return', YAPI_NOT_SUPPORTED);

                                case 12:
                                    rawValues.length = 0;
                                    refValues.length = 0;
                                    for (ii in this._calraw) {
                                        rawValues.push(this._calraw[ii]);
                                    }
                                    for (ii in this._calref) {
                                        refValues.push(this._calref[ii]);
                                    }
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 17:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_encodeCalibrationPoints',
                    value: function _encodeCalibrationPoints(rawValues, refValues) {
                        var res, npt, idx, iRaw, iRef;
                        return _regeneratorRuntime.async(function _encodeCalibrationPoints$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = undefined;
                                    npt = undefined;
                                    idx = undefined;
                                    iRaw = undefined;
                                    iRef = undefined;

                                    npt = rawValues.length;

                                    if (!(npt != refValues.length)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    this._throw(YAPI_INVALID_ARGUMENT, 'Invalid calibration parameters (size mismatch)');
                                    return context$2$0.abrupt('return', YAPI_INVALID_STRING);

                                case 9:
                                    if (!(npt == 0)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', '0');

                                case 11:
                                    if (!(this._scale == 0)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    context$2$0.next = 14;
                                    return _regeneratorRuntime.awrap(this.load(this._yapi.defaultCacheValidity));

                                case 14:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = YAPI_SUCCESS;

                                    if (!(context$2$0.t0 != context$2$0.t1)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_INVALID_STRING);

                                case 18:
                                    if (!(this._caltyp < 0 || this._scale < 0)) {
                                        context$2$0.next = 21;
                                        break;
                                    }

                                    this._throw(YAPI_NOT_SUPPORTED, 'Calibration parameters format mismatch. Please upgrade your library or firmware.');
                                    return context$2$0.abrupt('return', '0');

                                case 21:
                                    if (this._isScal32) {
                                        res = String(Math.round(YOCTO_CALIB_TYPE_OFS));
                                        idx = 0;
                                        while (idx < npt) {
                                            res = res + ',' + String(Math.round(rawValues[idx] * 1000) / 1000) + ',' + String(Math.round(refValues[idx] * 1000) / 1000);
                                            idx = idx + 1;
                                        }
                                    } else {
                                        if (this._isScal) {
                                            res = String(Math.round(npt));
                                            idx = 0;
                                            while (idx < npt) {
                                                iRaw = Math.round(rawValues[idx] * this._scale + this._offset);
                                                iRef = Math.round(refValues[idx] * this._scale + this._offset);
                                                res = res + ',' + String(Math.round(iRaw)) + ',' + String(Math.round(iRef));
                                                idx = idx + 1;
                                            }
                                        } else {
                                            res = String(Math.round(10 + npt));
                                            idx = 0;
                                            while (idx < npt) {
                                                iRaw = this._yapi.imm_doubleToDecimal(rawValues[idx]);
                                                iRef = this._yapi.imm_doubleToDecimal(refValues[idx]);
                                                res = res + ',' + String(Math.round(iRaw)) + ',' + String(Math.round(iRef));
                                                idx = idx + 1;
                                            }
                                        }
                                    }
                                    return context$2$0.abrupt('return', res);

                                case 23:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_applyCalibration',
                    value: function _applyCalibration(rawValue) {
                        return _regeneratorRuntime.async(function _applyCalibration$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(rawValue == Y_CURRENTVALUE_INVALID)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CURRENTVALUE_INVALID);

                                case 2:
                                    if (!(this._caltyp == 0)) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', rawValue);

                                case 4:
                                    if (!(this._caltyp < 0)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CURRENTVALUE_INVALID);

                                case 6:
                                    if (this.imm_calhdl != null) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_CURRENTVALUE_INVALID);

                                case 8:
                                    return context$2$0.abrupt('return', this.imm_calhdl(rawValue, this._caltyp, this._calpar, this._calraw, this._calref));

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_decodeTimedReport',
                    value: function _decodeTimedReport(timestamp, report) {
                        var i, byteVal, poww, minRaw, avgRaw, maxRaw, sublen, difRaw, startTime, endTime, minVal, avgVal, maxVal;
                        return _regeneratorRuntime.async(function _decodeTimedReport$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    i = undefined;
                                    byteVal = undefined;
                                    poww = undefined;
                                    minRaw = undefined;
                                    avgRaw = undefined;
                                    maxRaw = undefined;
                                    sublen = undefined;
                                    difRaw = undefined;
                                    startTime = undefined;
                                    endTime = undefined;
                                    minVal = undefined;
                                    avgVal = undefined;
                                    maxVal = undefined;

                                    startTime = this._prevTimedReport;
                                    endTime = timestamp;
                                    this._prevTimedReport = endTime;
                                    if (startTime == 0) {
                                        startTime = endTime;
                                    }
                                    if (report[0] == 2) {
                                        if (report.length <= 5) {
                                            poww = 1;
                                            avgRaw = 0;
                                            byteVal = 0;
                                            i = 1;
                                            while (i < report.length) {
                                                byteVal = report[i];
                                                avgRaw = avgRaw + poww * byteVal;
                                                poww = poww * 0x100;
                                                i = i + 1;
                                            }
                                            if ((byteVal & 0x80) != 0) {
                                                avgRaw = avgRaw - poww;
                                            }
                                            avgVal = avgRaw / 1000.0;
                                            if (this._caltyp != 0) {
                                                if (this.imm_calhdl != null) {
                                                    avgVal = this.imm_calhdl(avgVal, this._caltyp, this._calpar, this._calraw, this._calref);
                                                }
                                            }
                                            minVal = avgVal;
                                            maxVal = avgVal;
                                        } else {
                                            sublen = 1 + (report[1] & 3);
                                            poww = 1;
                                            avgRaw = 0;
                                            byteVal = 0;
                                            i = 2;
                                            while (sublen > 0 && i < report.length) {
                                                byteVal = report[i];
                                                avgRaw = avgRaw + poww * byteVal;
                                                poww = poww * 0x100;
                                                i = i + 1;
                                                sublen = sublen - 1;
                                            }
                                            if ((byteVal & 0x80) != 0) {
                                                avgRaw = avgRaw - poww;
                                            }
                                            sublen = 1 + (report[1] >> 2 & 3);
                                            poww = 1;
                                            difRaw = 0;
                                            while (sublen > 0 && i < report.length) {
                                                byteVal = report[i];
                                                difRaw = difRaw + poww * byteVal;
                                                poww = poww * 0x100;
                                                i = i + 1;
                                                sublen = sublen - 1;
                                            }
                                            minRaw = avgRaw - difRaw;
                                            sublen = 1 + (report[1] >> 4 & 3);
                                            poww = 1;
                                            difRaw = 0;
                                            while (sublen > 0 && i < report.length) {
                                                byteVal = report[i];
                                                difRaw = difRaw + poww * byteVal;
                                                poww = poww * 0x100;
                                                i = i + 1;
                                                sublen = sublen - 1;
                                            }
                                            maxRaw = avgRaw + difRaw;
                                            avgVal = avgRaw / 1000.0;
                                            minVal = minRaw / 1000.0;
                                            maxVal = maxRaw / 1000.0;
                                            if (this._caltyp != 0) {
                                                if (this.imm_calhdl != null) {
                                                    avgVal = this.imm_calhdl(avgVal, this._caltyp, this._calpar, this._calraw, this._calref);
                                                    minVal = this.imm_calhdl(minVal, this._caltyp, this._calpar, this._calraw, this._calref);
                                                    maxVal = this.imm_calhdl(maxVal, this._caltyp, this._calpar, this._calraw, this._calref);
                                                }
                                            }
                                        }
                                    } else {
                                        if (report[0] == 0) {
                                            poww = 1;
                                            avgRaw = 0;
                                            byteVal = 0;
                                            i = 1;
                                            while (i < report.length) {
                                                byteVal = report[i];
                                                avgRaw = avgRaw + poww * byteVal;
                                                poww = poww * 0x100;
                                                i = i + 1;
                                            }
                                            if (this._isScal) {
                                                avgVal = this.imm_decodeVal(avgRaw);
                                            } else {
                                                if ((byteVal & 0x80) != 0) {
                                                    avgRaw = avgRaw - poww;
                                                }
                                                avgVal = this.imm_decodeAvg(avgRaw);
                                            }
                                            minVal = avgVal;
                                            maxVal = avgVal;
                                        } else {
                                            minRaw = report[1] + 0x100 * report[2];
                                            maxRaw = report[3] + 0x100 * report[4];
                                            avgRaw = report[5] + 0x100 * report[6] + 0x10000 * report[7];
                                            byteVal = report[8];
                                            if ((byteVal & 0x80) == 0) {
                                                avgRaw = avgRaw + 0x1000000 * byteVal;
                                            } else {
                                                avgRaw = avgRaw - 0x1000000 * (0x100 - byteVal);
                                            }
                                            minVal = this.imm_decodeVal(minRaw);
                                            avgVal = this.imm_decodeAvg(avgRaw);
                                            maxVal = this.imm_decodeVal(maxRaw);
                                        }
                                    }
                                    return context$2$0.abrupt('return', new YMeasure(startTime, endTime, minVal, avgVal, maxVal));

                                case 19:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_decodeVal',
                    value: function imm_decodeVal(w) {
                        var val = undefined;
                        val = w;
                        if (this._isScal) {
                            val = (val - this._offset) / this._scale;
                        } else {
                            val = this._yapi.imm_decimalToDouble(w);
                        }
                        if (this._caltyp != 0) {
                            if (this.imm_calhdl != null) {
                                val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
                            }
                        }
                        return val;
                    }
                }, {
                    key: 'imm_decodeAvg',
                    value: function imm_decodeAvg(dw) {
                        var val = undefined;
                        val = dw;
                        if (this._isScal) {
                            val = (val / 100 - this._offset) / this._scale;
                        } else {
                            val = val / this._decexp;
                        }
                        if (this._caltyp != 0) {
                            if (this.imm_calhdl != null) {
                                val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
                            }
                        }
                        return val;
                    }
                }, {
                    key: 'nextSensor',
                    value: function nextSensor() {
                        var resolve = this._yapi.imm_resolveFunction(this._className, this._func);
                        if (resolve.errorType != YAPI_SUCCESS) return null;

                        var next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
                        if (next_hwid == null) return null;
                        return YSensor.FindSensorInContext(this._yapi, next_hwid);
                    }
                }], [{
                    key: 'FindSensor',
                    value: function FindSensor(func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCache('Sensor', func);
                        if (obj == null) {
                            obj = new YSensor(YAPI, func);
                            YFunction._AddToCache('Sensor', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FindSensorInContext',
                    value: function FindSensorInContext(yctx, func) {
                        var obj = undefined;
                        obj = YFunction._FindFromCacheInContext(yctx, 'Sensor', func);
                        if (obj == null) {
                            obj = new YSensor(yctx, func);
                            YFunction._AddToCache('Sensor', func, obj);
                        }
                        return obj;
                    }
                }, {
                    key: 'FirstSensor',
                    value: function FirstSensor() {
                        var next_hwid = YAPI.imm_getFirstHardwareId('Sensor');
                        if (next_hwid == null) return null;
                        return YSensor.FindSensor(next_hwid);
                    }
                }, {
                    key: 'FirstSensorInContext',
                    value: function FirstSensorInContext(yctx) {
                        var next_hwid = yctx.imm_getFirstHardwareId('Sensor');
                        if (next_hwid == null) return null;
                        return YSensor.FindSensorInContext(yctx, next_hwid);
                    }
                }]);

                return YSensor;
            })(YFunction);

            YMeasure = (function () {
                function YMeasure(float_start, float_end, float_minVal, float_avgVal, float_maxVal) {
                    _classCallCheck(this, YMeasure);

                    this._start = 0;

                    this._end = 0;

                    this._minVal = 0;

                    this._avgVal = 0;

                    this._maxVal = 0;

                    this._start = float_start;
                    this._end = float_end;
                    this._minVal = float_minVal;
                    this._avgVal = float_avgVal;
                    this._maxVal = float_maxVal;
                }

                _createClass(YMeasure, [{
                    key: 'get_startTimeUTC',
                    value: function get_startTimeUTC() {
                        return this._start;
                    }
                }, {
                    key: 'get_endTimeUTC',
                    value: function get_endTimeUTC() {
                        return this._end;
                    }
                }, {
                    key: 'get_minValue',
                    value: function get_minValue() {
                        return this._minVal;
                    }
                }, {
                    key: 'get_averageValue',
                    value: function get_averageValue() {
                        return this._avgVal;
                    }
                }, {
                    key: 'get_maxValue',
                    value: function get_maxValue() {
                        return this._maxVal;
                    }
                }, {
                    key: 'get_startTimeUTC_asDate',
                    value: function get_startTimeUTC_asDate() {
                        return new Date(Math.round(this._start * 1000));
                    }
                }, {
                    key: 'get_endTimeUTC_asDate',
                    value: function get_endTimeUTC_asDate() {
                        return new Date(Math.round(this._end * 1000));
                    }
                }]);

                return YMeasure;
            })();

            YDataStream = (function () {
                function YDataStream(obj_parent, obj_dataset, encoded) {
                    _classCallCheck(this, YDataStream);

                    this._parent = null;

                    this._runNo = 0;

                    this._utcStamp = 0;

                    this._nCols = 0;

                    this._nRows = 0;

                    this._duration = 0;

                    this._columnNames = [];

                    this._functionId = '';

                    this._isClosed = 0;

                    this._isAvg = 0;

                    this._isScal = 0;

                    this._isScal32 = 0;

                    this._decimals = 0;

                    this._offset = 0;

                    this._scale = 0;

                    this._samplesPerHour = 0;

                    this._minVal = 0;

                    this._avgVal = 0;

                    this._maxVal = 0;

                    this._decexp = 0;

                    this._caltyp = 0;

                    this._calpar = [];

                    this._calraw = [];

                    this._calref = [];

                    this._values = [];

                    this._parent = obj_parent;
                    this._calhdl = null;
                    if (typeof obj_dataset != 'undefined') {
                        this.imm_initFromDataSet(obj_dataset, encoded);
                    }
                }

                _createClass(YDataStream, [{
                    key: 'imm_initFromDataSet',
                    value: function imm_initFromDataSet(dataset, encoded) {
                        var val = undefined;

                        var i = undefined;

                        var maxpos = undefined;

                        var iRaw = undefined;

                        var iRef = undefined;

                        var fRaw = undefined;

                        var fRef = undefined;

                        var duration_float = undefined;

                        var iCalib = [];

                        this._runNo = encoded[0] + (encoded[1] << 16);
                        this._utcStamp = encoded[2] + (encoded[3] << 16);
                        val = encoded[4];
                        this._isAvg = (val & 0x100) == 0;
                        this._samplesPerHour = val & 0xff;
                        if ((val & 0x100) != 0) {
                            this._samplesPerHour = this._samplesPerHour * 3600;
                        } else {
                            if ((val & 0x200) != 0) {
                                this._samplesPerHour = this._samplesPerHour * 60;
                            }
                        }
                        val = encoded[5];
                        if (val > 32767) {
                            val = val - 65536;
                        }
                        this._decimals = val;
                        this._offset = val;
                        this._scale = encoded[6];
                        this._isScal = this._scale != 0;
                        this._isScal32 = encoded.length >= 14;
                        val = encoded[7];
                        this._isClosed = val != 0xffff;
                        if (val == 0xffff) {
                            val = 0;
                        }
                        this._nRows = val;
                        duration_float = this._nRows * 3600 / this._samplesPerHour;
                        this._duration = Math.round(duration_float);

                        this._decexp = 1.0;
                        if (this._scale == 0) {
                            i = 0;
                            while (i < this._decimals) {
                                this._decexp = this._decexp * 10.0;
                                i = i + 1;
                            }
                        }
                        iCalib = dataset.imm_get_calibration();
                        this._caltyp = iCalib[0];
                        if (this._caltyp != 0) {
                            this.imm_calhdl = this._yapi.imm_getCalibrationHandler(this._caltyp);
                            maxpos = iCalib.length;
                            this._calpar.length = 0;
                            this._calraw.length = 0;
                            this._calref.length = 0;
                            if (this._isScal32) {
                                i = 1;
                                while (i < maxpos) {
                                    this._calpar.push(iCalib[i]);
                                    i = i + 1;
                                }
                                i = 1;
                                while (i + 1 < maxpos) {
                                    fRaw = iCalib[i];
                                    fRaw = fRaw / 1000.0;
                                    fRef = iCalib[i + 1];
                                    fRef = fRef / 1000.0;
                                    this._calraw.push(fRaw);
                                    this._calref.push(fRef);
                                    i = i + 2;
                                }
                            } else {
                                i = 1;
                                while (i + 1 < maxpos) {
                                    iRaw = iCalib[i];
                                    iRef = iCalib[i + 1];
                                    this._calpar.push(iRaw);
                                    this._calpar.push(iRef);
                                    if (this._isScal) {
                                        fRaw = iRaw;
                                        fRaw = (fRaw - this._offset) / this._scale;
                                        fRef = iRef;
                                        fRef = (fRef - this._offset) / this._scale;
                                        this._calraw.push(fRaw);
                                        this._calref.push(fRef);
                                    } else {
                                        this._calraw.push(this._yapi.imm_decimalToDouble(iRaw));
                                        this._calref.push(this._yapi.imm_decimalToDouble(iRef));
                                    }
                                    i = i + 2;
                                }
                            }
                        }

                        this._functionId = dataset.imm_get_functionId();
                        if (this._isAvg) {
                            this._columnNames.length = 0;
                            this._columnNames.push(this._functionId + '_min');
                            this._columnNames.push(this._functionId + '_avg');
                            this._columnNames.push(this._functionId + '_max');
                            this._nCols = 3;
                        } else {
                            this._columnNames.length = 0;
                            this._columnNames.push(this._functionId);
                            this._nCols = 1;
                        }

                        if (this._nRows > 0) {
                            if (this._isScal32) {
                                this._avgVal = this.imm_decodeAvg(encoded[8] + ((encoded[9] ^ 0x8000) << 16), 1);
                                this._minVal = this.imm_decodeVal(encoded[10] + (encoded[11] << 16));
                                this._maxVal = this.imm_decodeVal(encoded[12] + (encoded[13] << 16));
                            } else {
                                this._minVal = this.imm_decodeVal(encoded[8]);
                                this._maxVal = this.imm_decodeVal(encoded[9]);
                                this._avgVal = this.imm_decodeAvg(encoded[10] + (encoded[11] << 16), this._nRows);
                            }
                        }
                        return 0;
                    }
                }, {
                    key: 'imm_parseStream',
                    value: function imm_parseStream(sdata) {
                        var idx = undefined;

                        var udat = [];

                        var dat = [];
                        if (sdata.length == 0) {
                            this._nRows = 0;
                            return YAPI_SUCCESS;
                        }

                        udat = this._yapi.imm_decodeWords(this._parent.imm_json_get_string(sdata));
                        this._values.length = 0;
                        idx = 0;
                        if (this._isAvg) {
                            while (idx + 3 < udat.length) {
                                dat.length = 0;
                                if (this._isScal32) {
                                    dat.push(this.imm_decodeVal(udat[idx + 2] + (udat[idx + 3] << 16)));
                                    dat.push(this.imm_decodeAvg(udat[idx] + ((udat[idx + 1] ^ 0x8000) << 16), 1));
                                    dat.push(this.imm_decodeVal(udat[idx + 4] + (udat[idx + 5] << 16)));
                                    idx = idx + 6;
                                } else {
                                    dat.push(this.imm_decodeVal(udat[idx]));
                                    dat.push(this.imm_decodeAvg(udat[idx + 2] + (udat[idx + 3] << 16), 1));
                                    dat.push(this.imm_decodeVal(udat[idx + 1]));
                                    idx = idx + 4;
                                }
                                this._values.push(dat.slice());
                            }
                        } else {
                            if (this._isScal && !this._isScal32) {
                                while (idx < udat.length) {
                                    dat.length = 0;
                                    dat.push(this.imm_decodeVal(udat[idx]));
                                    this._values.push(dat.slice());
                                    idx = idx + 1;
                                }
                            } else {
                                while (idx + 1 < udat.length) {
                                    dat.length = 0;
                                    dat.push(this.imm_decodeAvg(udat[idx] + ((udat[idx + 1] ^ 0x8000) << 16), 1));
                                    this._values.push(dat.slice());
                                    idx = idx + 2;
                                }
                            }
                        }

                        this._nRows = this._values.length;
                        return YAPI_SUCCESS;
                    }
                }, {
                    key: 'imm_get_url',
                    value: function imm_get_url() {
                        var url = undefined;
                        url = 'logger.json?id=' + this._functionId + '&run=' + String(Math.round(this._runNo)) + '&utc=' + String(Math.round(this._utcStamp));
                        return url;
                    }
                }, {
                    key: 'loadStream',
                    value: function loadStream() {
                        return _regeneratorRuntime.async(function loadStream$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.t0 = this;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this._parent._download(this.imm_get_url()));

                                case 3:
                                    context$2$0.t1 = context$2$0.sent;
                                    return context$2$0.abrupt('return', context$2$0.t0.imm_parseStream.call(context$2$0.t0, context$2$0.t1));

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_decodeVal',
                    value: function imm_decodeVal(w) {
                        var val = undefined;
                        val = w;
                        if (this._isScal32) {
                            val = val / 1000.0;
                        } else {
                            if (this._isScal) {
                                val = (val - this._offset) / this._scale;
                            } else {
                                val = this._yapi.imm_decimalToDouble(w);
                            }
                        }
                        if (this._caltyp != 0) {
                            val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
                        }
                        return val;
                    }
                }, {
                    key: 'imm_decodeAvg',
                    value: function imm_decodeAvg(dw, count) {
                        var val = undefined;
                        val = dw;
                        if (this._isScal32) {
                            val = val / 1000.0;
                        } else {
                            if (this._isScal) {
                                val = (val / (100 * count) - this._offset) / this._scale;
                            } else {
                                val = val / (count * this._decexp);
                            }
                        }
                        if (this._caltyp != 0) {
                            val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
                        }
                        return val;
                    }
                }, {
                    key: 'isClosed',
                    value: function isClosed() {
                        return _regeneratorRuntime.async(function isClosed$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._isClosed);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_runIndex',
                    value: function get_runIndex() {
                        return _regeneratorRuntime.async(function get_runIndex$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._runNo);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_startTime',
                    value: function get_startTime() {
                        return _regeneratorRuntime.async(function get_startTime$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._utcStamp - parseInt(+new Date() / 1000, 10));

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_startTimeUTC',
                    value: function get_startTimeUTC() {
                        return _regeneratorRuntime.async(function get_startTimeUTC$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._utcStamp);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_dataSamplesIntervalMs',
                    value: function get_dataSamplesIntervalMs() {
                        return _regeneratorRuntime.async(function get_dataSamplesIntervalMs$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', parseInt(3600000 / this._samplesPerHour, 10));

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_dataSamplesInterval',
                    value: function get_dataSamplesInterval() {
                        return _regeneratorRuntime.async(function get_dataSamplesInterval$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', 3600.0 / this._samplesPerHour);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_rowCount',
                    value: function get_rowCount() {
                        return _regeneratorRuntime.async(function get_rowCount$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._nRows != 0 && this._isClosed)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._nRows);

                                case 2:
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.loadStream());

                                case 4:
                                    return context$2$0.abrupt('return', this._nRows);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_columnCount',
                    value: function get_columnCount() {
                        return _regeneratorRuntime.async(function get_columnCount$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._nCols != 0)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._nCols);

                                case 2:
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.loadStream());

                                case 4:
                                    return context$2$0.abrupt('return', this._nCols);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_columnNames',
                    value: function get_columnNames() {
                        return _regeneratorRuntime.async(function get_columnNames$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._columnNames.length != 0)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._columnNames);

                                case 2:
                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(this.loadStream());

                                case 4:
                                    return context$2$0.abrupt('return', this._columnNames);

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_minValue',
                    value: function get_minValue() {
                        return _regeneratorRuntime.async(function get_minValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._minVal);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_averageValue',
                    value: function get_averageValue() {
                        return _regeneratorRuntime.async(function get_averageValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._avgVal);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_maxValue',
                    value: function get_maxValue() {
                        return _regeneratorRuntime.async(function get_maxValue$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._maxVal);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_duration',
                    value: function get_duration() {
                        return _regeneratorRuntime.async(function get_duration$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!this._isClosed) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._duration);

                                case 2:
                                    return context$2$0.abrupt('return', parseInt(+new Date() / 1000, 10) - this._utcStamp);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_dataRows',
                    value: function get_dataRows() {
                        return _regeneratorRuntime.async(function get_dataRows$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._values.length == 0 || !this._isClosed)) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.loadStream());

                                case 3:
                                    return context$2$0.abrupt('return', this._values);

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_data',
                    value: function get_data(row, col) {
                        return _regeneratorRuntime.async(function get_data$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._values.length == 0 || !this._isClosed)) {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.loadStream());

                                case 3:
                                    if (!(row >= this._values.length)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_DATA_INVALID);

                                case 5:
                                    if (!(col >= this._values[row].length)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', Y_DATA_INVALID);

                                case 7:
                                    return context$2$0.abrupt('return', this._values[row][col]);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YDataStream;
            })();

            YDataSet = (function () {
                function YDataSet(obj_parent, str_functionId, str_unit, u32_startTime, u32_endTime) {
                    _classCallCheck(this, YDataSet);

                    this._parent = null;

                    this._hardwareId = '';

                    this._functionId = '';

                    this._unit = '';

                    this._startTime = 0;

                    this._endTime = 0;

                    this._progress = 0;

                    this._calib = [];

                    this._streams = [];

                    this._summary = null;

                    this._preview = [];

                    this._measures = [];

                    this._summary = new YMeasure(0, 0, 0, 0, 0);
                    if (typeof str_unit === 'undefined') {
                        this._parent = obj_parent;

                        this._yapi = obj_parent._yapi;
                        this._startTime = 0;
                        this._endTime = 0;
                    } else {
                            this._parent = obj_parent;

                            this._yapi = obj_parent._yapi;
                            this._functionId = str_functionId;
                            this._unit = str_unit;
                            this._startTime = u32_startTime;
                            this._endTime = u32_endTime;
                            this._progress = -1;
                        }
                }

                _createClass(YDataSet, [{
                    key: 'imm_get_functionId',
                    value: function imm_get_functionId() {
                        return this._functionId;
                    }
                }, {
                    key: 'imm_get_calibration',
                    value: function imm_get_calibration() {
                        return this._calib;
                    }
                }, {
                    key: 'processMore',
                    value: function processMore(progress, data) {
                        var stream, dataRows, strdata, tim, itv, nCols, minCol, avgCol, maxCol, ii;
                        return _regeneratorRuntime.async(function processMore$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    stream = undefined;
                                    dataRows = [];
                                    strdata = undefined;
                                    tim = undefined;
                                    itv = undefined;
                                    nCols = undefined;
                                    minCol = undefined;
                                    avgCol = undefined;
                                    maxCol = undefined;

                                    if (!(progress != this._progress)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._progress);

                                case 11:
                                    if (!(this._progress < 0)) {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    strdata = this._yapi.imm_bin2str(data);

                                    if (!(strdata == '{}')) {
                                        context$2$0.next = 16;
                                        break;
                                    }

                                    this._parent._throw(YAPI_VERSION_MISMATCH, 'device firmware is too old');
                                    return context$2$0.abrupt('return', YAPI_VERSION_MISMATCH);

                                case 16:
                                    context$2$0.next = 18;
                                    return _regeneratorRuntime.awrap(this._parse(strdata));

                                case 18:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 19:
                                    stream = this._streams[this._progress];
                                    stream.imm_parseStream(data);
                                    context$2$0.next = 23;
                                    return _regeneratorRuntime.awrap(stream.get_dataRows());

                                case 23:
                                    dataRows = context$2$0.sent;

                                    this._progress = this._progress + 1;

                                    if (!(dataRows.length == 0)) {
                                        context$2$0.next = 29;
                                        break;
                                    }

                                    context$2$0.next = 28;
                                    return _regeneratorRuntime.awrap(this.get_progress());

                                case 28:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 29:
                                    context$2$0.next = 31;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 31:
                                    tim = context$2$0.sent;
                                    context$2$0.next = 34;
                                    return _regeneratorRuntime.awrap(stream.get_dataSamplesInterval());

                                case 34:
                                    itv = context$2$0.sent;

                                    if (tim < itv) {
                                        tim = itv;
                                    }
                                    nCols = dataRows[0].length;
                                    minCol = 0;
                                    if (nCols > 2) {
                                        avgCol = 1;
                                    } else {
                                        avgCol = 0;
                                    }
                                    if (nCols > 2) {
                                        maxCol = 2;
                                    } else {
                                        maxCol = 0;
                                    }

                                    for (ii in dataRows) {
                                        if (tim >= this._startTime && (this._endTime == 0 || tim <= this._endTime)) {
                                            this._measures.push(new YMeasure(tim - itv, tim, dataRows[ii][minCol], dataRows[ii][avgCol], dataRows[ii][maxCol]));
                                        }
                                        tim = tim + itv;
                                    }

                                    context$2$0.next = 43;
                                    return _regeneratorRuntime.awrap(this.get_progress());

                                case 43:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 44:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_privateDataStreams',
                    value: function get_privateDataStreams() {
                        return _regeneratorRuntime.async(function get_privateDataStreams$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._streams);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_hardwareId',
                    value: function get_hardwareId() {
                        var mo;
                        return _regeneratorRuntime.async(function get_hardwareId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    mo = undefined;

                                    if (this._hardwareId == '') {
                                        context$2$0.next = 3;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._hardwareId);

                                case 3:
                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this._parent.get_module());

                                case 5:
                                    mo = context$2$0.sent;
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(mo.get_serialNumber());

                                case 8:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.t1 = context$2$0.t0 + '.';
                                    context$2$0.next = 12;
                                    return _regeneratorRuntime.awrap(this.get_functionId());

                                case 12:
                                    context$2$0.t2 = context$2$0.sent;
                                    this._hardwareId = context$2$0.t1 + context$2$0.t2;
                                    return context$2$0.abrupt('return', this._hardwareId);

                                case 15:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_functionId',
                    value: function get_functionId() {
                        return _regeneratorRuntime.async(function get_functionId$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._functionId);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_unit',
                    value: function get_unit() {
                        return _regeneratorRuntime.async(function get_unit$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._unit);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_startTimeUTC',
                    value: function get_startTimeUTC() {
                        return _regeneratorRuntime.async(function get_startTimeUTC$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._startTime);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_endTimeUTC',
                    value: function get_endTimeUTC() {
                        return _regeneratorRuntime.async(function get_endTimeUTC$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._endTime);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_progress',
                    value: function get_progress() {
                        return _regeneratorRuntime.async(function get_progress$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(this._progress < 0)) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 0);

                                case 2:
                                    if (!(this._progress >= this._streams.length)) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 100);

                                case 4:
                                    return context$2$0.abrupt('return', parseInt((1 + (1 + this._progress) * 98) / (1 + this._streams.length), 10));

                                case 5:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'loadMore',
                    value: function loadMore() {
                        var url, stream;
                        return _regeneratorRuntime.async(function loadMore$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    url = undefined;
                                    stream = undefined;

                                    if (!(this._progress < 0)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    url = 'logger.json?id=' + this._functionId;
                                    context$2$0.next = 12;
                                    break;

                                case 6:
                                    if (!(this._progress >= this._streams.length)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', 100);

                                case 10:
                                    stream = this._streams[this._progress];
                                    url = stream.imm_get_url();

                                case 12:
                                    context$2$0.t0 = _regeneratorRuntime;
                                    context$2$0.t1 = this;
                                    context$2$0.t2 = this._progress;
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(this._parent._download(url));

                                case 17:
                                    context$2$0.t3 = context$2$0.sent;
                                    context$2$0.t4 = context$2$0.t1.processMore.call(context$2$0.t1, context$2$0.t2, context$2$0.t3);
                                    context$2$0.next = 21;
                                    return context$2$0.t0.awrap.call(context$2$0.t0, context$2$0.t4);

                                case 21:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 22:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_summary',
                    value: function get_summary() {
                        return _regeneratorRuntime.async(function get_summary$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._summary);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_preview',
                    value: function get_preview() {
                        return _regeneratorRuntime.async(function get_preview$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._preview);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_measuresAt',
                    value: function get_measuresAt(measure) {
                        var startUtc, stream, dataRows, measures, tim, itv, nCols, minCol, avgCol, maxCol, ii;
                        return _regeneratorRuntime.async(function get_measuresAt$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    startUtc = undefined;
                                    stream = undefined;
                                    dataRows = [];
                                    measures = [];
                                    tim = undefined;
                                    itv = undefined;
                                    nCols = undefined;
                                    minCol = undefined;
                                    avgCol = undefined;
                                    maxCol = undefined;

                                    startUtc = Math.round(measure.get_startTimeUTC());
                                    stream = null;
                                    context$2$0.t0 = _regeneratorRuntime.keys(this._streams);

                                case 13:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 25;
                                        break;
                                    }

                                    ii = context$2$0.t1.value;
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(this._streams[ii].get_startTimeUTC());

                                case 17:
                                    context$2$0.t2 = context$2$0.sent;
                                    context$2$0.t3 = startUtc;

                                    if (!(context$2$0.t2 == context$2$0.t3)) {
                                        context$2$0.next = 21;
                                        break;
                                    }

                                    stream = this._streams[ii];

                                case 21:
                                    ;;
                                    context$2$0.next = 13;
                                    break;

                                case 25:
                                    if (!(stream == null)) {
                                        context$2$0.next = 27;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', measures);

                                case 27:
                                    context$2$0.next = 29;
                                    return _regeneratorRuntime.awrap(stream.get_dataRows());

                                case 29:
                                    dataRows = context$2$0.sent;

                                    if (!(dataRows.length == 0)) {
                                        context$2$0.next = 32;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', measures);

                                case 32:
                                    context$2$0.next = 34;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 34:
                                    tim = context$2$0.sent;
                                    context$2$0.next = 37;
                                    return _regeneratorRuntime.awrap(stream.get_dataSamplesInterval());

                                case 37:
                                    itv = context$2$0.sent;

                                    if (tim < itv) {
                                        tim = itv;
                                    }
                                    nCols = dataRows[0].length;
                                    minCol = 0;
                                    if (nCols > 2) {
                                        avgCol = 1;
                                    } else {
                                        avgCol = 0;
                                    }
                                    if (nCols > 2) {
                                        maxCol = 2;
                                    } else {
                                        maxCol = 0;
                                    }

                                    for (ii in dataRows) {
                                        if (tim >= this._startTime && (this._endTime == 0 || tim <= this._endTime)) {
                                            measures.push(new YMeasure(tim - itv, tim, dataRows[ii][minCol], dataRows[ii][avgCol], dataRows[ii][maxCol]));
                                        }
                                        tim = tim + itv;;
                                    }
                                    return context$2$0.abrupt('return', measures);

                                case 45:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'get_measures',
                    value: function get_measures() {
                        return _regeneratorRuntime.async(function get_measures$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', this._measures);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_parse',
                    value: function _parse(str_json) {
                        var summaryMinVal, summaryMaxVal, summaryTotalTime, summaryTotalAvg, startTime, endTime, loadval, i, stream, streamEndTime, streamStartTime, rec;
                        return _regeneratorRuntime.async(function _parse$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    summaryMinVal = Number.MAX_VALUE;
                                    summaryMaxVal = -Number.MAX_VALUE;
                                    summaryTotalTime = 0;
                                    summaryTotalAvg = 0;
                                    startTime = 0x7fffffff;
                                    endTime = 0;

                                    try {
                                        loadval = JSON.parse(str_json);
                                    } catch (err) {}

                                    if (loadval) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    this._progress = 0;
                                    return context$2$0.abrupt('return', this);

                                case 10:

                                    this._functionId = loadval.id;
                                    this._unit = loadval.unit;
                                    if (loadval.calib) {
                                        this._calib = this._yapi.imm_decodeFloats(loadval.calib);
                                        this._calib[0] = parseInt(this._calib[0] / 1000);
                                    } else {
                                        this._calib = this._yapi.imm_decodeWords(loadval.cal);
                                    }
                                    this._summary = new YMeasure(0, 0, 0, 0, 0);
                                    this._streams = [];
                                    this._preview = [];
                                    this._measures = [];
                                    i = 0;

                                case 18:
                                    if (!(i < loadval.streams.length)) {
                                        context$2$0.next = 108;
                                        break;
                                    }

                                    stream = this._parent.imm_findDataStream(this, loadval.streams[i]);
                                    context$2$0.next = 22;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 22:
                                    context$2$0.t0 = context$2$0.sent;
                                    context$2$0.next = 25;
                                    return _regeneratorRuntime.awrap(stream.get_duration());

                                case 25:
                                    context$2$0.t1 = context$2$0.sent;
                                    streamEndTime = context$2$0.t0 + context$2$0.t1;
                                    context$2$0.next = 29;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 29:
                                    context$2$0.t2 = context$2$0.sent;
                                    context$2$0.next = 32;
                                    return _regeneratorRuntime.awrap(stream.get_dataSamplesIntervalMs());

                                case 32:
                                    context$2$0.t3 = context$2$0.sent;
                                    context$2$0.t4 = context$2$0.t3 / 1000;
                                    context$2$0.t5 = parseInt(context$2$0.t4);
                                    streamStartTime = context$2$0.t2 - context$2$0.t5;

                                    if (!(this._startTime > 0 && streamEndTime <= this._startTime)) {
                                        context$2$0.next = 39;
                                        break;
                                    }

                                    context$2$0.next = 105;
                                    break;

                                case 39:
                                    context$2$0.t6 = this._endTime > 0;

                                    if (!context$2$0.t6) {
                                        context$2$0.next = 46;
                                        break;
                                    }

                                    context$2$0.next = 43;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 43:
                                    context$2$0.t7 = context$2$0.sent;
                                    context$2$0.t8 = this._endTime;
                                    context$2$0.t6 = context$2$0.t7 > context$2$0.t8;

                                case 46:
                                    if (!context$2$0.t6) {
                                        context$2$0.next = 49;
                                        break;
                                    }

                                    context$2$0.next = 105;
                                    break;

                                case 49:
                                    this._streams.push(stream);
                                    if (startTime > streamStartTime) {
                                        startTime = streamStartTime;
                                    }
                                    if (endTime < streamEndTime) {
                                        endTime = streamEndTime;
                                    }
                                    context$2$0.t10 = stream.isClosed();

                                    if (!context$2$0.t10) {
                                        context$2$0.next = 59;
                                        break;
                                    }

                                    context$2$0.next = 56;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 56:
                                    context$2$0.t11 = context$2$0.sent;
                                    context$2$0.t12 = this._startTime;
                                    context$2$0.t10 = context$2$0.t11 >= context$2$0.t12;

                                case 59:
                                    context$2$0.t9 = context$2$0.t10;

                                    if (!context$2$0.t9) {
                                        context$2$0.next = 62;
                                        break;
                                    }

                                    context$2$0.t9 = this._endTime == 0 || streamEndTime <= this._endTime;

                                case 62:
                                    if (!context$2$0.t9) {
                                        context$2$0.next = 105;
                                        break;
                                    }

                                    context$2$0.t13 = summaryMinVal;
                                    context$2$0.next = 66;
                                    return _regeneratorRuntime.awrap(stream.get_minValue());

                                case 66:
                                    context$2$0.t14 = context$2$0.sent;

                                    if (!(context$2$0.t13 > context$2$0.t14)) {
                                        context$2$0.next = 71;
                                        break;
                                    }

                                    context$2$0.next = 70;
                                    return _regeneratorRuntime.awrap(stream.get_minValue());

                                case 70:
                                    summaryMinVal = context$2$0.sent;

                                case 71:
                                    context$2$0.t15 = summaryMaxVal;
                                    context$2$0.next = 74;
                                    return _regeneratorRuntime.awrap(stream.get_maxValue());

                                case 74:
                                    context$2$0.t16 = context$2$0.sent;

                                    if (!(context$2$0.t15 < context$2$0.t16)) {
                                        context$2$0.next = 79;
                                        break;
                                    }

                                    context$2$0.next = 78;
                                    return _regeneratorRuntime.awrap(stream.get_maxValue());

                                case 78:
                                    summaryMaxVal = context$2$0.sent;

                                case 79:
                                    context$2$0.next = 81;
                                    return _regeneratorRuntime.awrap(stream.get_averageValue());

                                case 81:
                                    context$2$0.t17 = context$2$0.sent;
                                    context$2$0.next = 84;
                                    return _regeneratorRuntime.awrap(stream.get_duration());

                                case 84:
                                    context$2$0.t18 = context$2$0.sent;
                                    summaryTotalAvg += context$2$0.t17 * context$2$0.t18;
                                    context$2$0.next = 88;
                                    return _regeneratorRuntime.awrap(stream.get_duration());

                                case 88:
                                    summaryTotalTime += context$2$0.sent;
                                    context$2$0.t19 = YMeasure;
                                    context$2$0.next = 92;
                                    return _regeneratorRuntime.awrap(stream.get_startTimeUTC());

                                case 92:
                                    context$2$0.t20 = context$2$0.sent;
                                    context$2$0.t21 = streamEndTime;
                                    context$2$0.next = 96;
                                    return _regeneratorRuntime.awrap(stream.get_minValue());

                                case 96:
                                    context$2$0.t22 = context$2$0.sent;
                                    context$2$0.next = 99;
                                    return _regeneratorRuntime.awrap(stream.get_averageValue());

                                case 99:
                                    context$2$0.t23 = context$2$0.sent;
                                    context$2$0.next = 102;
                                    return _regeneratorRuntime.awrap(stream.get_maxValue());

                                case 102:
                                    context$2$0.t24 = context$2$0.sent;
                                    rec = new context$2$0.t19(context$2$0.t20, context$2$0.t21, context$2$0.t22, context$2$0.t23, context$2$0.t24);

                                    this._preview.push(rec);

                                case 105:
                                    i++;
                                    context$2$0.next = 18;
                                    break;

                                case 108:
                                    if (this._streams.length > 0 && summaryTotalTime > 0) {
                                        if (this._startTime < startTime) {
                                            this._startTime = startTime;
                                        }
                                        if (this._endTime == 0 || this._endTime > endTime) {
                                            this._endTime = endTime;
                                        }
                                        this._summary = new YMeasure(this._startTime, this._endTime, summaryMinVal, summaryTotalAvg / summaryTotalTime, summaryMaxVal);
                                    }
                                    this._progress = 0;
                                    return context$2$0.abrupt('return', this);

                                case 111:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YDataSet;
            })();

            YGenericHub = (function () {
                function YGenericHub(obj_yapi, var_urlInfo) {
                    _classCallCheck(this, YGenericHub);

                    this._yapi = obj_yapi;

                    this._lastErrorType = YAPI_SUCCESS;

                    this._lastErrorMsg = 'no error';

                    this.urlInfo = var_urlInfo;
                    this.notiflen = 32000;
                    this.devListValidity = 500;
                    this.devListExpires = 0;
                    this.serialByYdx = [];
                    this.retryDelay = 15;
                    this.notifPos = -1;
                    this.currPos = 0;
                    this.missing = {};
                    this.disconnecting = false;
                }

                _createClass(YGenericHub, [{
                    key: '_throw',
                    value: function _throw(int_errType, str_errMsg, obj_retVal) {
                        this._lastErrorType = int_errType;
                        this._lastErrorMsg = str_errMsg;
                        this._yapi._throw(int_errType, str_errMsg, obj_retVal);
                    }
                }, {
                    key: 'imm_forceUpdate',
                    value: function imm_forceUpdate() {
                        this.devListExpires = this._yapi.GetTickCount();
                    }
                }, {
                    key: 'testHub',
                    value: function testHub(errmsg) {
                        var yreq;
                        return _regeneratorRuntime.async(function testHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.request('GET', this.urlInfo.url, '/api/module.json', null));

                                case 2:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    errmsg.msg = yreq.errorMsg;
                                    return context$2$0.abrupt('return', yreq.errorType);

                                case 6:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'hubUpdateDeviceList',
                    value: function hubUpdateDeviceList() {
                        var hubDev, retcode, yreq, loadval, whitePages, yellowPages;
                        return _regeneratorRuntime.async(function hubUpdateDeviceList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    hubDev = this._yapi.imm_getDevice(this.urlInfo.url);
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(hubDev.refresh());

                                case 3:
                                    retcode = context$2$0.sent;

                                    if (!(retcode != YAPI_SUCCESS)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(retcode, hubDev._lastErrorMsg, retcode));

                                case 6:
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(hubDev.requestAPI(this._yapi.defaultCacheValidity));

                                case 8:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 11;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', yreq);

                                case 11:
                                    loadval = null;

                                    try {
                                        loadval = JSON.parse(this._yapi.imm_bin2str(yreq.bin_result));
                                    } catch (err) {}

                                    if (loadval) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_IO_ERROR, 'Request failed, could not parse API result for ' + hubDev.imm_describe(), YAPI_IO_ERROR));

                                case 15:
                                    whitePages = loadval['services']['whitePages'];
                                    yellowPages = loadval['services']['yellowPages'];

                                    if (!(whitePages == undefined)) {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(YAPI_INVALID_ARGUMENT, 'Device ' + hubDev.imm_describe() + ' is not a hub', YAPI_INVALID_ARGUMENT));

                                case 19:
                                    context$2$0.next = 21;
                                    return _regeneratorRuntime.awrap(this._yapi.updateDeviceList_process(this, hubDev, whitePages, yellowPages));

                                case 21:
                                    retcode = context$2$0.sent;

                                    if (!(retcode != YAPI_SUCCESS)) {
                                        context$2$0.next = 24;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(this._yapi._lastErrorType, this._yapi._lastErrorMsg, this._yapi._lastErrorType));

                                case 24:
                                    this.devListExpires = this._yapi.GetTickCount() + this.devListValidity;
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 26:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'request',
                    value: function request(method, baseUrl, devUrl, obj_body) {
                        var res;
                        return _regeneratorRuntime.async(function request$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    res = new YHTTPRequest(null);

                                    res.errorType = YAPI_NOT_SUPPORTED;
                                    res.errorMsg = 'GenericHub subclass expected';
                                    return context$2$0.abrupt('return', res);

                                case 4:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        return _regeneratorRuntime.async(function disconnect$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this.disconnecting = true;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YGenericHub;
            })();

            _export('YGenericHub', YGenericHub);

            YHttpHub = (function (_YGenericHub) {
                _inherits(YHttpHub, _YGenericHub);

                function YHttpHub(obj_yapi, var_urlInfo) {
                    _classCallCheck(this, YHttpHub);

                    _get(Object.getPrototypeOf(YHttpHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);

                    this.notbynRequest = null;

                    this.notbynOpenPromise = null;
                }

                _createClass(YHttpHub, [{
                    key: 'testHub',
                    value: function testHub(errmsg) {
                        var args;
                        return _regeneratorRuntime.async(function testHub$(context$2$0) {
                            var _this2 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!this.disconnecting) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_IO_ERROR);

                                case 2:
                                    args = '?len=' + this.notiflen.toString();

                                    if (this.notifPos > 0) {
                                        args += '&abs=' + this.notifPos.toString();
                                    }
                                    this.notbynOpenPromise = new _Promise(function (resolve, reject) {
                                        _this2.notbynRequest = new XMLHttpRequest();
                                        _this2.notbynRequest.open('GET', _this2.urlInfo.url + 'not.byn' + args, true, '', '');
                                        _this2.notbynRequest.overrideMimeType('text/plain; charset=x-user-defined');
                                        _this2.notbynRequest.onreadystatechange = function () {
                                            if (_this2.disconnecting) {
                                                return;
                                            }
                                            if (_this2.notbynRequest.readyState >= 3) {
                                                resolve(YAPI_SUCCESS);
                                                if (_this2.notbynRequest.readyState == 4 && parseInt(_this2.notbynRequest.status) != 200 && parseInt(_this2.notbynRequest.status) != 304) {
                                                    if (_this2.retryDelay < 15000) _this2.retryDelay *= 2;
                                                    _this2.devListValidity = 500;
                                                    _this2.devListExpires = 0;
                                                    setTimeout(function () {
                                                        _this2.testHub(new YErrorMsg());
                                                    }, _this2.retryDelay);
                                                } else {
                                                    if (_this2.notbynRequest.readyState == 3) {
                                                        if (_this2.notiflen == 1) return;
                                                    }
                                                    var newlen = _this2.notbynRequest.responseText.length;
                                                    if (newlen > _this2.currPos) {
                                                        _this2._yapi.parseEvents(_this2, _this2.notbynRequest.responseText.substr(_this2.currPos, newlen - _this2.currPos));
                                                    }

                                                    if (_this2.notbynRequest.readyState == 4 && parseInt(_this2.notbynRequest.status) != 0) {
                                                        _this2.currPos = 0;
                                                        _this2.testHub(new YErrorMsg());
                                                    }
                                                }
                                            }
                                        };
                                        _this2.notbynRequest.send('');
                                    });
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(this.notbynOpenPromise);

                                case 7:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'request',
                    value: function request(method, baseUrl, devUrl, obj_body) {
                        var httpPromise;
                        return _regeneratorRuntime.async(function request$(context$2$0) {
                            var _this3 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    httpPromise = new _Promise(function (resolve, reject) {
                                        var httpRequest = new XMLHttpRequest();
                                        httpRequest.open(method, baseUrl + devUrl, true, '', '');
                                        httpRequest.onreadystatechange = function () {
                                            if (httpRequest.readyState == 4) {
                                                var yreq = new YHTTPRequest(null);
                                                if (httpRequest.status != 200 && httpRequest.status != 304) {
                                                    yreq.errorType = YAPI_NOT_SUPPORTED;
                                                    yreq.errorMsg = 'HTTP Error ' + httpRequest.status;
                                                } else {
                                                    yreq.bin_result = _this3._yapi.imm_str2bin(httpRequest.responseText);
                                                }
                                                resolve(yreq);
                                            }
                                        };

                                        httpRequest.send(obj_body || '');
                                    });
                                    return context$2$0.abrupt('return', httpPromise);

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        return _regeneratorRuntime.async(function disconnect$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(YHttpHub.prototype), 'disconnect', this).call(this));

                                case 2:
                                    this.notbynRequest.abort();

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YHttpHub;
            })(YGenericHub);

            _export('YHttpHub', YHttpHub);

            YHttpNodeHub = (function (_YGenericHub2) {
                _inherits(YHttpNodeHub, _YGenericHub2);

                function YHttpNodeHub(obj_yapi, var_urlInfo) {
                    _classCallCheck(this, YHttpNodeHub);

                    _get(Object.getPrototypeOf(YHttpNodeHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);
                    this.http = this._yapi._nodeRequire('http');

                    this.notbynRequest = null;

                    this.notbynOpenPromise = null;
                }

                _createClass(YHttpNodeHub, [{
                    key: 'testHub',
                    value: function testHub(errmsg) {
                        var args, options;
                        return _regeneratorRuntime.async(function testHub$(context$2$0) {
                            var _this4 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!this.disconnecting) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_IO_ERROR);

                                case 2:
                                    args = '';

                                    if (this.notifPos > 0) {
                                        args = '?abs=' + this.notifPos.toString();
                                    }
                                    options = {
                                        method: 'GET',
                                        hostname: this.urlInfo.host,
                                        port: this.urlInfo.port,
                                        path: '/not.byn' + args
                                    };

                                    this.notbynOpenPromise = new _Promise(function (resolve, reject) {
                                        _this4.notbynRequest = _this4.http.request(options, function (res) {
                                            if (_this4.disconnecting) {
                                                return;
                                            }
                                            if (res.statusCode != 200 && res.statusCode != 304) {
                                                if (_this4.retryDelay < 15000) _this4.retryDelay *= 2;
                                                _this4.devListValidity = 500;
                                                _this4.devListExpires = 0;
                                                setTimeout(function () {
                                                    _this4.testHub(new YErrorMsg());
                                                }, _this4.retryDelay);
                                            } else {
                                                resolve(YAPI_SUCCESS);
                                                res.on('data', function (chunk) {
                                                    _this4._yapi.parseEvents(_this4, _this4._yapi.imm_bin2str(chunk));
                                                });
                                                res.on('end', function () {
                                                    _this4.currPos = 0;
                                                    _this4.testHub(new YErrorMsg());
                                                });
                                            }
                                        });
                                        _this4.notbynRequest.end();
                                    });
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(this.notbynOpenPromise);

                                case 8:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'request',
                    value: function request(str_method, baseUrl, devUrl, obj_body) {
                        var options, httpPromise;
                        return _regeneratorRuntime.async(function request$(context$2$0) {
                            var _this5 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    options = {
                                        method: str_method,
                                        hostname: this.urlInfo.host,
                                        port: this.urlInfo.port,
                                        path: devUrl
                                    };
                                    httpPromise = new _Promise(function (resolve, reject) {
                                        var response = new Buffer(0);
                                        var httpRequest = _this5.http.request(options, function (res) {
                                            if (res.statusCode != 200 && res.statusCode != 304) {
                                                var yreq = new YHTTPRequest(null);
                                                yreq.errorType = YAPI_NOT_SUPPORTED;
                                                yreq.errorMsg = 'HTTP Error ' + res.statusCode.toString();
                                                resolve(yreq);
                                            } else {
                                                res.on('data', function (chunk) {
                                                    response = Buffer.concat([response, chunk]);
                                                });
                                                res.on('end', function () {
                                                    resolve(new YHTTPRequest(new Uint8Array(response)));
                                                });
                                            }
                                        });
                                        httpRequest.end();
                                    });
                                    return context$2$0.abrupt('return', httpPromise);

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        return _regeneratorRuntime.async(function disconnect$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(YHttpNodeHub.prototype), 'disconnect', this).call(this));

                                case 2:
                                    this.notbynRequest.abort();

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YHttpNodeHub;
            })(YGenericHub);

            _export('YHttpNodeHub', YHttpNodeHub);

            YHttpCallbackHub = (function (_YGenericHub3) {
                _inherits(YHttpCallbackHub, _YGenericHub3);

                function YHttpCallbackHub(obj_yapi, var_urlInfo, incomingMessage, serverResponse) {
                    var _this6 = this;

                    _classCallCheck(this, YHttpCallbackHub);

                    _get(Object.getPrototypeOf(YHttpCallbackHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);
                    this.crypto = this._yapi._nodeRequire('crypto');

                    this._incomingMessage = incomingMessage;

                    this._serverResponse = serverResponse;

                    this._callbackData = new Buffer(0);

                    this._callbackCache = null;

                    this.httpCallbackPromise = new _Promise(function (resolve, reject) {
                        _this6._incomingMessage.on('data', function (chunk) {
                            _this6._callbackData = Buffer.concat([_this6._callbackData, chunk]);
                        });
                        _this6._incomingMessage.on('end', function () {
                            _this6._callbackData = new Uint8Array(_this6._callbackData);
                            _this6._callbackCache = JSON.parse(_this6._yapi.imm_bin2str(_this6._callbackData));
                            resolve(true);
                        });
                    });
                }

                _createClass(YHttpCallbackHub, [{
                    key: 'testHub',
                    value: function testHub(errmsg) {
                        var sign, pass, salt, data_str, check;
                        return _regeneratorRuntime.async(function testHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.httpCallbackPromise);

                                case 2:
                                    if (!(this._incomingMessage.method != 'POST')) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    errmsg.msg = 'HTTP POST expected';
                                    return context$2$0.abrupt('return', YAPI_INVALID_ARGUMENT);

                                case 5:
                                    if (!(this._callbackData.length == 0)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    errmsg.msg = 'Empty POST body';
                                    return context$2$0.abrupt('return', YAPI_NO_MORE_DATA);

                                case 8:
                                    if (!(this.urlInfo.pass != '')) {
                                        context$2$0.next = 23;
                                        break;
                                    }

                                    if (this._callbackCache.sign) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    errmsg.msg = 'missing signature from incoming YoctoHub (callback password required)';
                                    this._callbackCache = [];
                                    return context$2$0.abrupt('return', YAPI_NO_MORE_DATA);

                                case 13:
                                    sign = this._callbackCache['sign'];
                                    pass = this.urlInfo.pass;
                                    salt = undefined;

                                    if (pass.length == 32) {
                                        salt = pass.toLowerCase();
                                    } else {
                                        salt = this.crypto.createHash('md5').update(pass).digest('hex');
                                    }
                                    data_str = this._callbackStr.replace(sign, salt);
                                    check = this.crypto.createHash('md5').update(data_str).digest('hex');

                                    if (!(check.toLowerCase() != sign.toLowerCase())) {
                                        context$2$0.next = 23;
                                        break;
                                    }

                                    errmsg.msg = 'invalid signature from incoming YoctoHub (invalid callback password)';
                                    this._callbackCache = [];
                                    return context$2$0.abrupt('return', YAPI_UNAUTHORIZED);

                                case 23:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 24:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'request',
                    value: function request(str_method, baseUrl, devUrl, obj_body) {
                        var yreq, boundary, endb, jzon, subfun, jsonres;
                        return _regeneratorRuntime.async(function request$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    yreq = new YHTTPRequest(null);

                                    if (!(str_method == 'POST' && obj_body.length > 2)) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    boundary = '???';
                                    endb = 0;

                                case 4:
                                    if (!(endb < obj_body.length)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    if (!(obj_body[endb] == 13)) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    return context$2$0.abrupt('break', 10);

                                case 7:
                                    endb++;
                                    context$2$0.next = 4;
                                    break;

                                case 10:

                                    if (endb > 2 && endb < 20 && obj_body[0] == 45 && obj_body[1] == 45) {
                                        boundary = this._yapi.imm_bin2str(obj_body.subarray(2, endb));
                                    }
                                    this._serverResponse.write('\n@YoctoAPI:' + str_method + ' ' + devUrl + ' ' + obj_body.length + ':' + boundary + '\n');
                                    this._serverResponse.write(obj_body);
                                    context$2$0.next = 16;
                                    break;

                                case 15:
                                    if (str_method == 'GET') {
                                        jzon = devUrl.indexOf('?fw=');

                                        if (jzon != -1 && devUrl.indexOf('&', jzon) == -1) {
                                            devUrl = devUrl.slice(0, jzon);
                                        }
                                        if (devUrl.indexOf('?') == -1 || devUrl.indexOf('/logs.txt') != -1 || devUrl.indexOf('/logger.json') != -1 || devUrl.indexOf('/ping.txt') != -1 || devUrl.indexOf('/files.json?a=dir') != -1) {
                                            subfun = /\/api\/([a-z][A-Za-z0-9]*)[.]json$/.exec(devUrl);

                                            if (subfun) {
                                                devUrl = devUrl.slice(0, subfun.index) + '/api.json';
                                            }
                                            if (!this._callbackCache[devUrl]) {
                                                this._serverResponse.write('\n!YoctoAPI:' + devUrl + ' is not preloaded, adding to list');
                                                this._serverResponse.write('\n@YoctoAPI:+' + devUrl + '\n');
                                                yreq.errorType = YAPI_NO_MORE_DATA;
                                                yreq.errorMsg = 'URL ' + devUrl + ' not preloaded, adding to list';
                                            } else {
                                                jsonres = this._callbackCache[devUrl];

                                                if (subfun) {
                                                    jsonres = jsonres[subfun[1]];
                                                }
                                                yreq.bin_result = this._yapi.imm_str2bin(JSON.stringify(jsonres));
                                            }
                                        } else {
                                            this._serverResponse.write('\n@YoctoAPI:' + str_method + ' ' + devUrl + '\n');
                                            yreq.bin_result = new Uint8Array(0);
                                        }
                                    } else {
                                        yreq.errorType = YAPI_NOT_SUPPORTED;
                                        yreq.errorMsg = 'Unsupported HTTP method';
                                    }

                                case 16:
                                    return context$2$0.abrupt('return', yreq);

                                case 17:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YHttpCallbackHub;
            })(YGenericHub);

            _export('YHttpCallbackHub', YHttpCallbackHub);

            YWebSocketHub = (function (_YGenericHub4) {
                _inherits(YWebSocketHub, _YGenericHub4);

                function YWebSocketHub(obj_yapi, var_urlInfo) {
                    _classCallCheck(this, YWebSocketHub);

                    _get(Object.getPrototypeOf(YWebSocketHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);

                    this.websocket = null;

                    this.websocketOpenPromise = null;

                    this.tcpChan = [];
                }

                _createClass(YWebSocketHub, [{
                    key: 'imm_webSocketOpen',
                    value: function imm_webSocketOpen(str_url) {
                        this.websocket = new WebSocket(str_url);
                        this.websocket.binaryType = 'arraybuffer';
                    }
                }, {
                    key: 'testHub',
                    value: function testHub(errmsg) {
                        return _regeneratorRuntime.async(function testHub$(context$2$0) {
                            var _this7 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!this.disconnecting) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_IO_ERROR);

                                case 2:
                                    this.imm_webSocketOpen(this.urlInfo.url + 'not.byn');
                                    this.websocketOpenPromise = new _Promise(function (resolve, reject) {
                                        _this7.websocket.onmessage = function (evt) {
                                            resolve(YAPI_SUCCESS);
                                            _this7._webSocketMsg(new Uint8Array(evt.data));
                                        };
                                    });
                                    this.websocket.onclose = function (evt) {
                                        _this7.websocket = null;
                                        if (_this7.disconnecting) {
                                            return;
                                        }

                                        if (_this7.retryDelay < 15000) _this7.retryDelay *= 2;
                                        _this7.devListValidity = 500;
                                        _this7.devListExpires = 0;
                                        setTimeout(function () {
                                            _this7.testHub(new YErrorMsg());
                                        }, _this7.retryDelay);
                                    };
                                    this.websocket.onerror = function (evt) {
                                        console.log('WebSocket error: ', evt);
                                        _this7.websocket = null;
                                        if (_this7.disconnecting) {
                                            return;
                                        }

                                        if (_this7.retryDelay < 15000) _this7.retryDelay *= 2;
                                        _this7.devListValidity = 500;
                                        _this7.devListExpires = 0;
                                        setTimeout(function () {
                                            _this7.testHub(new YErrorMsg());
                                        }, _this7.retryDelay);
                                    };
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(this.websocketOpenPromise);

                                case 8:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 9:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_webSocketMsg',
                    value: function _webSocketMsg(arr_bytes) {
                        var text, i, ws, ystream, tcpchan, oldArr, newArr, frame, yreq, pos, header, words;
                        return _regeneratorRuntime.async(function _webSocketMsg$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    text = '';

                                    if (!(arr_bytes[0] == 8 * 8)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    for (i = 1; i < arr_bytes.length; i++) {
                                        text += String.fromCharCode(arr_bytes[i]);
                                    }
                                    context$2$0.next = 5;
                                    return _regeneratorRuntime.awrap(this._yapi.parseEvents(this, text));

                                case 5:
                                    return context$2$0.abrupt('return');

                                case 6:
                                    ws = this.websocket;
                                    ystream = arr_bytes[0] >> 3;
                                    tcpchan = arr_bytes[0] & 7;

                                    if (!(ystream == 1 || ystream == 2)) {
                                        context$2$0.next = 20;
                                        break;
                                    }

                                    if (this.tcpChan[tcpchan]) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    console.log('WS: Drop frame for closed tcpChan ' + tcpchan);
                                    return context$2$0.abrupt('return');

                                case 13:
                                    oldArr = this.tcpChan[tcpchan].bin_result;
                                    newArr = new Uint8Array(oldArr.length + arr_bytes.length - 1);

                                    newArr.set(oldArr, 0);
                                    newArr.set(arr_bytes.subarray(1), oldArr.length);
                                    this.tcpChan[tcpchan].bin_result = newArr;
                                    if (ystream == 2) {
                                        frame = new Uint8Array(1);

                                        frame[0] = 8 * 2 + tcpchan;
                                        this.websocket.send(frame);
                                        yreq = this.tcpChan[tcpchan];

                                        this.tcpChan[tcpchan] = null;
                                        pos = yreq.bin_result.indexOf(13);

                                        if (pos < 0) {
                                            yreq.errorType = YAPI_IO_ERROR;
                                            yreq.errorMsg = 'Bad response header';
                                        } else {
                                            header = this._yapi.imm_bin2str(yreq.bin_result.subarray(0, pos));
                                            words = header.split(' ');

                                            if (words[0] == 'OK') {
                                                yreq.errorType = YAPI_SUCCESS;
                                                yreq.bin_result = yreq.bin_result.subarray(4);
                                            } else if (words[0] == '0K') {
                                                yreq.errorType = YAPI_IO_ERROR;
                                                yreq.errorMsg = 'Unexpected persistent connection';
                                            } else {
                                                yreq.errorType = YAPI_IO_ERROR;
                                                yreq.errorMsg = 'HTTP error ' + header.slice(words[0].length + 1);
                                            }
                                        }
                                        yreq.acceptor(yreq);
                                    }
                                    return context$2$0.abrupt('return');

                                case 20:
                                    console.log('WS: Unsupported message', arr_bytes);

                                case 21:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_webSocketSend',
                    value: function imm_webSocketSend(arr_bytes) {
                        this.websocket.send(arr_bytes);
                    }
                }, {
                    key: 'request',
                    value: function request(method, baseUrl, devUrl, obj_body) {
                        var httpPromise;
                        return _regeneratorRuntime.async(function request$(context$2$0) {
                            var _this8 = this;

                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    httpPromise = new _Promise(function (resolve, reject) {
                                        var subReq = method + ' ' + devUrl + ' \r\n\r\n';
                                        var ws = _this8.websocket;
                                        var tcpchan = 0;

                                        while (_this8.tcpChan[tcpchan]) {
                                            tcpchan++;
                                        }
                                        if (tcpchan > 2) {
                                            console.log('WebSocket: TOO MANY CONCURRENT TCP CHANNELS');
                                            return;
                                        }
                                        _this8.tcpChan[tcpchan] = new YHTTPRequest(new Uint8Array(0));
                                        _this8.tcpChan[tcpchan].acceptor = resolve;

                                        var pos = 0;
                                        while (pos < subReq.length) {
                                            var framelen = 1 + subReq.length - pos;
                                            if (framelen > 125) framelen = 125;
                                            var datalen = framelen - 1;
                                            var i,
                                                frame = new Uint8Array(framelen);

                                            frame[0] = 8 + tcpchan;
                                            for (i = 0; i < datalen; i++) {
                                                frame[1 + i] = subReq.charCodeAt(pos + i);
                                            }
                                            pos += framelen - 1;
                                            _this8.imm_webSocketSend(frame);
                                        }
                                    });
                                    return context$2$0.abrupt('return', httpPromise);

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        return _regeneratorRuntime.async(function disconnect$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(YWebSocketHub.prototype), 'disconnect', this).call(this));

                                case 2:
                                    this.websocket.close();

                                case 3:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YWebSocketHub;
            })(YGenericHub);

            _export('YWebSocketHub', YWebSocketHub);

            YWebSocketNodeHub = (function (_YWebSocketHub) {
                _inherits(YWebSocketNodeHub, _YWebSocketHub);

                function YWebSocketNodeHub(obj_yapi, var_urlInfo) {
                    _classCallCheck(this, YWebSocketNodeHub);

                    _get(Object.getPrototypeOf(YWebSocketNodeHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);
                    this.wsWebSocket = this._yapi._nodeRequire('ws');
                }

                _createClass(YWebSocketNodeHub, [{
                    key: 'imm_webSocketOpen',
                    value: function imm_webSocketOpen(str_url) {
                        this.websocket = new this.wsWebSocket(this.urlInfo.url + 'not.byn');
                    }
                }, {
                    key: 'imm_webSocketSend',
                    value: function imm_webSocketSend(arr_bytes) {
                        this.websocket.send(arr_bytes, { binary: true, mask: false });
                    }
                }]);

                return YWebSocketNodeHub;
            })(YWebSocketHub);

            _export('YWebSocketNodeHub', YWebSocketNodeHub);

            YWebSocketCallbackHub = (function (_YWebSocketNodeHub) {
                _inherits(YWebSocketCallbackHub, _YWebSocketNodeHub);

                function YWebSocketCallbackHub(obj_yapi, var_urlInfo, ws) {
                    _classCallCheck(this, YWebSocketCallbackHub);

                    _get(Object.getPrototypeOf(YWebSocketCallbackHub.prototype), 'constructor', this).call(this, obj_yapi, var_urlInfo);
                    this.websocket = ws;
                }

                _createClass(YWebSocketCallbackHub, [{
                    key: 'imm_webSocketOpen',
                    value: function imm_webSocketOpen(str_url) {}
                }]);

                return YWebSocketCallbackHub;
            })(YWebSocketNodeHub);

            _export('YWebSocketCallbackHub', YWebSocketCallbackHub);

            YAPIContext = (function () {
                function YAPIContext() {
                    _classCallCheck(this, YAPIContext);

                    this.SUCCESS = 0;
                    this.NOT_INITIALIZED = -1;
                    this.INVALID_ARGUMENT = -2;
                    this.NOT_SUPPORTED = -3;
                    this.DEVICE_NOT_FOUND = -4;
                    this.VERSION_MISMATCH = -5;
                    this.DEVICE_BUSY = -6;
                    this.TIMEOUT = -7;
                    this.IO_ERROR = -8;
                    this.NO_MORE_DATA = -9;
                    this.EXHAUSTED = -10;
                    this.DOUBLE_ACCES = -11;
                    this.UNAUTHORIZED = -12;
                    this.RTC_NOT_READY = -13;
                    this.FILE_NOT_FOUND = -14;
                    this.INVALID_INT = YAPI_INVALID_INT;
                    this.INVALID_UINT = YAPI_INVALID_UINT;
                    this.INVALID_LONG = YAPI_INVALID_LONG;
                    this.INVALID_DOUBLE = YAPI_INVALID_DOUBLE;
                    this.INVALID_STRING = YAPI_INVALID_STRING;

                    this.DETECT_NONE = 0;
                    this.DETECT_USB = 1;
                    this.DETECT_NET = 2;
                    this.DETECT_ALL = this.DETECT_USB | this.DETECT_NET;

                    this.defaultEncoding = 'binary';

                    this.defaultCacheValidity = 5;

                    this.exceptionsDisabled = false;

                    this.imm_init();

                    for (var i = 1; i <= 20; i++) {
                        this.RegisterCalibrationHandler(i, this.LinearCalibrationHandler);
                    }
                    this.RegisterCalibrationHandler(YOCTO_CALIB_TYPE_OFS, this.LinearCalibrationHandler);
                }

                _createClass(YAPIContext, [{
                    key: 'imm_init',
                    value: function imm_init() {
                        this._hubs = [];
                        this._devs = {};
                        this._snByUrl = {};
                        this._snByName = {};
                        this._fnByType = {};
                        this._fnByType.Module = new YFunctionType(this, 'Module');

                        this._lastErrorType = YAPI_SUCCESS;

                        this._lastErrorMsg = 'no error';

                        this._firstArrival = true;

                        this._updateDevListStarted = false;

                        this._pendingCallbacks = [];

                        this._arrivalCallback = null;

                        this._namechgCallback = null;

                        this._removalCallback = null;

                        this._data_events = [];

                        this._forwardValues = 0;

                        this._calibHandlers = {};

                        this._ValueCallbackList = [];

                        this._TimedReportCallbackList = [];

                        this._isNodeJS = false;

                        this._nodeRequire = null;
                        if (typeof System != 'undefined') {
                            if (System._nodeRequire) {
                                this._isNodeJS = true;
                                this._nodeRequire = System._nodeRequire;
                            }
                        } else {
                            if (typeof require != 'undefined') {
                                this._isNodeJS = true;
                                this._nodeRequire = require;
                            }
                        }
                    }
                }, {
                    key: '_throw',
                    value: function _throw(int_errType, str_errMsg, obj_retVal) {
                        this._lastErrorType = int_errType;
                        this._lastErrorMsg = str_errMsg;

                        if (!this.exceptionsDisabled) {
                            try {
                                Trigger_Yocto_Error(int_errType, str_errMsg);
                            } catch (e) {
                                var key,
                                    exc = new Error(str_errMsg);
                                for (key in e) {
                                    if (key != 'name' && key != 'number' && key != 'message') exc[key] = e[key];
                                }
                                exc['name'] = 'YoctoError';
                                exc['message'] = str_errMsg;
                                exc['description'] = str_errMsg;
                                exc['number'] = int_errType;
                                throw exc;
                            }
                        }
                        return obj_retVal;
                    }
                }, {
                    key: '_addHub',
                    value: function _addHub(newhub) {
                        var serial, dev;
                        return _regeneratorRuntime.async(function _addHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._hubs.push(newhub);

                                    serial = this._snByUrl[newhub.urlInfo.url];

                                    if (serial) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    dev = new YDevice(this, newhub.urlInfo.url, null, null);
                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(dev.refresh());

                                case 6:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_getHub',
                    value: function imm_getHub(str_rootUrl) {
                        var i, hubUrl;

                        for (i = 0; i < this._hubs.length; i++) {
                            hubUrl = this._hubs[i].urlInfo.url;
                            if (str_rootUrl.slice(0, hubUrl.length) == hubUrl) {
                                return this._hubs[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: '_updateDeviceList_internal',
                    value: function _updateDeviceList_internal(bool_forceupdate, bool_invokecallbacks) {
                        var i, hubs, hub, rootUrl, hubDev, serial, rooturl, huburl, nbEvents, evt;
                        return _regeneratorRuntime.async(function _updateDeviceList_internal$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (this._firstArrival && bool_invokecallbacks && this._arrivalCallback) {
                                        bool_forceupdate = true;
                                    }
                                    if (bool_forceupdate) {
                                        for (i = 0; i < this._hubs.length; i++) {
                                            this._hubs[i].imm_forceUpdate();
                                        }
                                    }

                                    if (!(this._updateDevListStarted && this.GetTickCount() - this._updateDevListStarted < 30 * 1000)) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', {
                                        errorType: YAPI_SUCCESS,
                                        errorMsg: 'no error',
                                        result: YAPI_SUCCESS
                                    });

                                case 4:
                                    context$2$0.prev = 4;

                                    this._updateDevListStarted = this.GetTickCount();

                                    hubs = [];
                                    i = 0;

                                case 8:
                                    if (!(i < this._hubs.length)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    hub = this._hubs[i];
                                    rootUrl = hub.urlInfo.url;
                                    hubDev = this.imm_getDevice(rootUrl);

                                    if (hubDev) {
                                        context$2$0.next = 14;
                                        break;
                                    }

                                    return context$2$0.abrupt('continue', 15);

                                case 14:
                                    if (hub.devListExpires <= this.GetTickCount()) {
                                        hub.missing = [];
                                        hubs.push(hub);
                                    }

                                case 15:
                                    i++;
                                    context$2$0.next = 8;
                                    break;

                                case 18:
                                    for (serial in this._devs) {
                                        rooturl = this._devs[serial].imm_getRootUrl();

                                        for (i = 0; i < hubs.length; i++) {
                                            huburl = hubs[i].urlInfo.url;

                                            if (rooturl.substr(0, huburl.length) == huburl) {
                                                hubs[i].missing[serial] = true;
                                            }
                                        }
                                    }

                                    context$2$0.next = 21;
                                    return _regeneratorRuntime.awrap(_Promise.all(_Array$from(hubs, function (hub) {
                                        return hub.hubUpdateDeviceList();
                                    })));

                                case 21:
                                    if (!bool_invokecallbacks) {
                                        context$2$0.next = 48;
                                        break;
                                    }

                                    nbEvents = this._pendingCallbacks.length;
                                    i = 0;

                                case 24:
                                    if (!(i < nbEvents)) {
                                        context$2$0.next = 46;
                                        break;
                                    }

                                    evt = this._pendingCallbacks[i];
                                    serial = evt.slice(1);
                                    context$2$0.t0 = evt.charAt(0);
                                    context$2$0.next = context$2$0.t0 === '+' ? 30 : context$2$0.t0 === '/' ? 34 : context$2$0.t0 === '-' ? 38 : 43;
                                    break;

                                case 30:
                                    if (!(this._arrivalCallback != undefined)) {
                                        context$2$0.next = 33;
                                        break;
                                    }

                                    context$2$0.next = 33;
                                    return _regeneratorRuntime.awrap(this._arrivalCallback(yFindModule(serial + '.module')));

                                case 33:
                                    return context$2$0.abrupt('break', 43);

                                case 34:
                                    if (!(this._namechgCallback != undefined)) {
                                        context$2$0.next = 37;
                                        break;
                                    }

                                    context$2$0.next = 37;
                                    return _regeneratorRuntime.awrap(this._namechgCallback(yFindModule(serial + '.module')));

                                case 37:
                                    return context$2$0.abrupt('break', 43);

                                case 38:
                                    if (!(this._removalCallback != undefined)) {
                                        context$2$0.next = 41;
                                        break;
                                    }

                                    context$2$0.next = 41;
                                    return _regeneratorRuntime.awrap(this._removalCallback(yFindModule(serial + '.module')));

                                case 41:
                                    this.imm_forgetDevice(this._devs[serial]);
                                    return context$2$0.abrupt('break', 43);

                                case 43:
                                    i++;
                                    context$2$0.next = 24;
                                    break;

                                case 46:
                                    this._pendingCallbacks = this._pendingCallbacks.slice(nbEvents);
                                    if (this._arrivalCallback != undefined && this._firstArrival) {
                                        this._firstArrival = false;
                                    }

                                case 48:
                                    context$2$0.prev = 48;

                                    this._updateDevListStarted = false;
                                    return context$2$0.finish(48);

                                case 51:
                                    return context$2$0.abrupt('return', {
                                        errorType: YAPI_SUCCESS,
                                        errorMsg: 'no error',
                                        result: YAPI_SUCCESS
                                    });

                                case 52:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this, [[4,, 48, 51]]);
                    }
                }, {
                    key: 'updateDeviceList_process',
                    value: function updateDeviceList_process(hub, hubDev, whitePages, yellowPages) {
                        var refresh, serial, classname, obj_yprecs, ftype, key, yprec, hwid, basetype, devkey, devinfo, devydx, rooturl, currdev;
                        return _regeneratorRuntime.async(function updateDeviceList_process$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    refresh = {};
                                    serial = null;

                                    for (classname in yellowPages) {
                                        obj_yprecs = yellowPages[classname];
                                        ftype = this._fnByType[classname];

                                        if (ftype == undefined) {
                                            ftype = new YFunctionType(this, classname);
                                            this._fnByType[classname] = ftype;
                                        }
                                        for (key in obj_yprecs) {
                                            yprec = obj_yprecs[key];
                                            hwid = yprec['hardwareId'];
                                            basetype = yprec['baseType'];

                                            if (ftype.imm_reindexFunction(hwid, yprec['logicalName'], yprec['advertisedValue'], basetype)) {
                                                serial = hwid.substr(0, hwid.indexOf('.'));
                                                refresh[serial] = true;
                                            }
                                        }
                                    }
                                    context$2$0.t0 = _regeneratorRuntime.keys(whitePages);

                                case 4:
                                    if ((context$2$0.t1 = context$2$0.t0()).done) {
                                        context$2$0.next = 31;
                                        break;
                                    }

                                    devkey = context$2$0.t1.value;
                                    devinfo = whitePages[devkey];

                                    serial = devinfo['serialNumber'];
                                    devydx = devinfo['index'];
                                    rooturl = devinfo.networkUrl.slice(0, -3);

                                    if (rooturl.charAt(0) == '/') rooturl = hubDev.imm_getRootUrl() + rooturl.substr(1);
                                    currdev = this._devs[serial];

                                    if (currdev && this._arrivalCallback != undefined && this._firstArrival) {
                                        this._pendingCallbacks.push('+' + serial);
                                    }
                                    hub.serialByYdx[devydx] = serial;

                                    if (currdev) {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    new YDevice(this, rooturl, devinfo, yellowPages);
                                    if (this._arrivalCallback != undefined) {
                                        this._pendingCallbacks.push('+' + serial);
                                    }
                                    context$2$0.next = 28;
                                    break;

                                case 19:
                                    if (!(currdev.imm_getLogicalName() != devinfo['logicalName'])) {
                                        context$2$0.next = 25;
                                        break;
                                    }

                                    context$2$0.next = 22;
                                    return _regeneratorRuntime.awrap(currdev.refresh());

                                case 22:
                                    if (this._namechgCallback != undefined) {
                                        this._pendingCallbacks.push('/' + serial);
                                    }
                                    context$2$0.next = 28;
                                    break;

                                case 25:
                                    if (!(refresh[serial] || currdev.imm_getRootUrl() != rooturl || currdev.imm_getBeacon() != devinfo['beacon'])) {
                                        context$2$0.next = 28;
                                        break;
                                    }

                                    context$2$0.next = 28;
                                    return _regeneratorRuntime.awrap(currdev.refresh());

                                case 28:
                                    hub.missing[serial] = false;
                                    context$2$0.next = 4;
                                    break;

                                case 31:
                                    for (serial in hub.missing) {
                                        if (hub.missing[serial]) {
                                            if (this._removalCallback != undefined) {
                                                this._pendingCallbacks.push('-' + serial);
                                            } else {
                                                this.imm_forgetDevice(this._devs[serial]);
                                            }
                                        }
                                    }

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 33:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'parseEvents',
                    value: function parseEvents(hub, str_lines) {
                        var rows, nrows, value, idx, ev, firstCode, devydx, funydx, serial, funcid, pos, arr, dev, time, rawval, decodedval, notype, parts;
                        return _regeneratorRuntime.async(function parseEvents$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    hub.devListValidity = 10000;rows = str_lines.split('\n');
                                    nrows = rows.length;

                                    nrows--;
                                    idx = 0;

                                case 5:
                                    if (!(idx < nrows)) {
                                        context$2$0.next = 64;
                                        break;
                                    }

                                    ev = rows[idx];

                                    if (!(ev.length == 0)) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    return context$2$0.abrupt('continue', 61);

                                case 9:
                                    firstCode = ev.charAt(0);

                                    if (!(ev.length >= 3 && firstCode >= NOTIFY_NETPKT_FLUSHV2YDX && firstCode <= NOTIFY_NETPKT_TIMEAVGYDX)) {
                                        context$2$0.next = 39;
                                        break;
                                    }

                                    hub.retryDelay = 15;
                                    if (hub.notifPos >= 0) hub.notifPos += ev.length + 1;
                                    devydx = ev.charCodeAt(1) - 65;
                                    funydx = ev.charCodeAt(2) - 48;

                                    if (funydx >= 64) {
                                        funydx -= 64;
                                        devydx += 128;
                                    }
                                    serial = hub.serialByYdx[devydx];

                                    if (!(serial && this._devs[serial])) {
                                        context$2$0.next = 37;
                                        break;
                                    }

                                    funcid = funydx == 0xf ? 'time' : this._devs[serial].imm_functionId(funydx);

                                    if (!(funcid != '')) {
                                        context$2$0.next = 37;
                                        break;
                                    }

                                    value = ev.slice(3);
                                    context$2$0.t0 = firstCode;
                                    context$2$0.next = context$2$0.t0 === NOTIFY_NETPKT_FUNCVALYDX ? 24 : context$2$0.t0 === NOTIFY_NETPKT_DEVLOGYDX ? 27 : context$2$0.t0 === NOTIFY_NETPKT_TIMEVALYDX ? 28 : context$2$0.t0 === NOTIFY_NETPKT_TIMEAVGYDX ? 28 : context$2$0.t0 === NOTIFY_NETPKT_TIMEV2YDX ? 28 : context$2$0.t0 === NOTIFY_NETPKT_FUNCV2YDX ? 33 : context$2$0.t0 === NOTIFY_NETPKT_FLUSHV2YDX ? 36 : 36;
                                    break;

                                case 24:
                                    if (value != '') value = value.split('\0')[0];

                                    this.imm_setFunctionValue(serial + '.' + funcid, value);
                                    return context$2$0.abrupt('break', 37);

                                case 27:
                                    return context$2$0.abrupt('break', 37);

                                case 28:
                                    arr = [firstCode == 'x' ? 0 : firstCode == 'z' ? 1 : 2];

                                    for (pos = 0; pos < value.length; pos += 2) {
                                        arr.push(parseInt(value.substr(pos, 2), 16));
                                    }
                                    dev = this._devs[serial];

                                    if (funcid == 'time') {
                                        time = arr[1] + 0x100 * arr[2] + 0x10000 * arr[3] + 0x1000000 * arr[4];

                                        dev.imm_setDeviceTime(time + arr[5] / 250.0);
                                    } else {
                                        this.imm_setTimedReport(serial + '.' + funcid, dev.imm_getDeviceTime(), arr);
                                    }
                                    return context$2$0.abrupt('break', 37);

                                case 33:
                                    rawval = this.imm_decodeNetFuncValV2(value);

                                    if (rawval != null) {
                                        decodedval = this.imm_decodePubVal(rawval[0], rawval, 1, 6);

                                        this.imm_setFunctionValue(serial + '.' + funcid, decodedval);
                                    }
                                    return context$2$0.abrupt('break', 37);

                                case 36:
                                    return context$2$0.abrupt('break', 37);

                                case 37:
                                    context$2$0.next = 60;
                                    break;

                                case 39:
                                    if (!(ev.length > 5 && ev.substr(0, 4) == 'YN01')) {
                                        context$2$0.next = 57;
                                        break;
                                    }

                                    hub.retryDelay = 15;
                                    if (hub.notifPos >= 0) hub.notifPos += ev.length + 1;
                                    notype = ev.substr(4, 1);

                                    if (!(notype == '@')) {
                                        context$2$0.next = 47;
                                        break;
                                    }

                                    hub.notifPos = parseInt(ev.slice(5));
                                    context$2$0.next = 55;
                                    break;

                                case 47:
                                    context$2$0.t1 = parseInt(notype);
                                    context$2$0.next = context$2$0.t1 === 0 ? 50 : context$2$0.t1 === 2 ? 50 : context$2$0.t1 === 4 ? 50 : context$2$0.t1 === 8 ? 50 : context$2$0.t1 === 5 ? 52 : 55;
                                    break;

                                case 50:
                                    hub.devListExpires = 0;
                                    return context$2$0.abrupt('break', 55);

                                case 52:
                                    parts = ev.slice(5).split(',');

                                    if (parts.length > 2) {
                                        value = parts[2].split('\0');
                                        this.imm_setFunctionValue(parts[0] + '.' + parts[1], value[0]);
                                    }
                                    return context$2$0.abrupt('break', 55);

                                case 55:
                                    context$2$0.next = 60;
                                    break;

                                case 57:
                                    hub.devListValidity = 500;
                                    hub.devListExpires = 0;

                                    hub.notifPos = -1;

                                case 60:
                                    hub.currPos += ev.length + 1;

                                case 61:
                                    idx++;
                                    context$2$0.next = 5;
                                    break;

                                case 64:
                                    if (!(this._forwardValues > 0)) {
                                        context$2$0.next = 67;
                                        break;
                                    }

                                    context$2$0.next = 67;
                                    return _regeneratorRuntime.awrap(this.HandleEvents(new YErrorMsg()));

                                case 67:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_decodeNetFuncValV2',
                    value: function imm_decodeNetFuncValV2(p) {
                        var p_ofs = 0;
                        var ch = p.charCodeAt(p_ofs) & 0xff;
                        var len = 0;
                        var funcVal = [0, 0, 0, 0, 0, 0, 0];

                        if (ch < 32 || ch > 32 + 127) {
                            return null;
                        }

                        ch -= 32;
                        funcVal[0] = (ch & 0x40) != 0 ? NOTIFY_V2_6RAWBYTES : NOTIFY_V2_TYPEDDATA;

                        ch &= 0x3f;
                        while (len < YOCTO_PUBVAL_SIZE) {
                            p_ofs++;
                            if (p_ofs >= p.length) break;
                            var newCh = p.charCodeAt(p_ofs) & 0xff;
                            if (newCh == NOTIFY_NETPKT_STOP) {
                                break;
                            }
                            if (newCh < 32 || newCh > 32 + 127) {
                                return null;
                            }
                            newCh -= 32;
                            ch = (ch << 7) + newCh;
                            funcVal[len + 1] = ch >> 5 - len & 0xff;
                            len++;
                        }
                        return funcVal;
                    }
                }, {
                    key: 'imm_decodePubVal',
                    value: function imm_decodePubVal(int_typeV2, arr_funcval, int_ofs, int_funcvalen) {
                        var buffer = '';
                        var endp;
                        if (int_typeV2 == NOTIFY_V2_6RAWBYTES || int_typeV2 == NOTIFY_V2_TYPEDDATA) {
                            var funcValType;
                            if (int_typeV2 == NOTIFY_V2_6RAWBYTES) {
                                funcValType = PUBVAL_6RAWBYTES;
                            } else {
                                funcValType = arr_funcval[int_ofs++];
                            }
                            switch (funcValType) {
                                case PUBVAL_LEGACY:
                                    break;
                                case PUBVAL_1RAWBYTE:
                                case PUBVAL_2RAWBYTES:
                                case PUBVAL_3RAWBYTES:
                                case PUBVAL_4RAWBYTES:
                                case PUBVAL_5RAWBYTES:
                                case PUBVAL_6RAWBYTES:
                                    for (var i = 0; i < funcValType; i++) {
                                        var c = arr_funcval[int_ofs++];
                                        var b = c >> 4;
                                        buffer += b.toString(16);
                                        b = c & 0xf;
                                        buffer += b.toString(16);
                                    }
                                    return buffer;
                                case PUBVAL_C_LONG:
                                case PUBVAL_YOCTO_FLOAT_E3:
                                    var numVal = arr_funcval[int_ofs++];
                                    numVal += arr_funcval[int_ofs++] << 8;
                                    numVal += arr_funcval[int_ofs++] << 16;
                                    numVal += arr_funcval[int_ofs++] << 24;
                                    if (funcValType == PUBVAL_C_LONG) {
                                        return String(Math.round(numVal));
                                    } else {
                                        buffer = String(Math.round(numVal * 1000) / 1000000.0);
                                        endp = buffer.length;
                                        while (endp > 0 && buffer[endp - 1] == '0') {
                                            --endp;
                                        }
                                        if (endp > 0 && buffer[endp - 1] == '.') {
                                            --endp;
                                            buffer = buffer.substr(0, endp);
                                        }
                                        return buffer;
                                    }
                                case PUBVAL_C_FLOAT:
                                    var v = arr_funcval[int_ofs++];
                                    v += arr_funcval[int_ofs++] << 8;
                                    v += arr_funcval[int_ofs++] << 16;
                                    v += arr_funcval[int_ofs++] << 24;
                                    var fraction = (v & (1 << 23) - 1) + (1 << 23) * (v >> 31 | 1);
                                    var exp = (v >> 23 & 0xFF) - 127;
                                    var floatVal = fraction * Math.pow(2, exp - 23);
                                    buffer = String(Math.round(floatVal * 1000000) / 1000000);
                                    endp = buffer.length;
                                    while (endp > 0 && buffer[endp - 1] == '0') {
                                        --endp;
                                    }
                                    if (endp > 0 && buffer[endp - 1] == '.') {
                                        --endp;
                                        buffer = buffer.substr(0, endp);
                                    }
                                    return buffer;
                                default:
                                    return '?';
                            }

                            var len = 0;
                            buffer = '';
                            while (len < YOCTO_PUBVAL_SIZE && len < int_funcvalen) {
                                if (arr_funcval[len] == 0) break;
                                buffer += String.fromCharCode(arr_funcval[len]);
                                len++;
                            }
                        }
                        return buffer;
                    }
                }, {
                    key: 'imm_decExp',
                    value: function imm_decExp(int_pow) {
                        var arr = [1.0e-6, 1.0e-5, 1.0e-4, 1.0e-3, 1.0e-2, 1.0e-1, 1.0, 1.0e1, 1.0e2, 1.0e3, 1.0e4, 1.0e5, 1.0e6, 1.0e7, 1.0e8, 1.0e9];
                        return arr[int_pow];
                    }
                }, {
                    key: 'imm_decimalToDouble',
                    value: function imm_decimalToDouble(val) {
                        var negate = false;
                        var res;
                        var mantis = val & 2047;
                        if (mantis == 0) return 0.0;
                        if (val > 32767) {
                            negate = true;
                            val = 65536 - val;
                        } else if (val < 0) {
                            negate = true;
                            val = -val;
                        }
                        var decexp = this.imm_decExp(val >> 11);
                        if (decexp >= 1.0) {
                            res = mantis * decexp;
                        } else {
                            res = mantis / Math.round(1 / decexp);
                        }

                        return negate ? -res : res;
                    }
                }, {
                    key: 'imm_doubleToDecimal',
                    value: function imm_doubleToDecimal(val) {
                        var negate = false;
                        var comp, mant;
                        var decpow;
                        var res;

                        if (val == 0.0) {
                            return 0;
                        }
                        if (val < 0) {
                            negate = true;
                            val = -val;
                        }
                        comp = val / 1999.0;
                        decpow = 0;
                        while (comp > this.imm_decExp(decpow) && decpow < 15) {
                            decpow++;
                        }
                        mant = val / this.imm_decExp(decpow);
                        if (decpow == 15 && mant > 2047.0) {
                            res = (15 << 11) + 2047;
                        } else {
                                res = (decpow << 11) + Math.round(mant);
                            }
                        return negate ? -res : res;
                    }
                }, {
                    key: 'imm_getCalibrationHandler',
                    value: function imm_getCalibrationHandler(calibType) {
                        return this._calibHandlers[calibType];
                    }
                }, {
                    key: 'imm_decodeWords',
                    value: function imm_decodeWords(data) {
                        var udata = [];
                        for (var i = 0; i < data.length;) {
                            var c = data[i];
                            if (c == '*') {
                                val = 0;
                                i++;
                            } else if (c == 'X') {
                                val = 0xffff;
                                i++;
                            } else if (c == 'Y') {
                                val = 0x7fff;
                                i++;
                            } else if (c >= 'a') {
                                var srcpos = udata.length - 1 - (data.charCodeAt(i++) - 97);
                                if (srcpos < 0) val = 0;else val = udata[srcpos];
                            } else {
                                if (i + 3 > data.length) return udata;
                                var val = data.charCodeAt(i++) - 48;
                                val += data.charCodeAt(i++) - 48 << 5;
                                var lastcode = data.charCodeAt(i++);
                                if (lastcode == 122) lastcode = 92;
                                val += lastcode - 48 << 10;
                            }
                            udata.push(val);
                        }
                        return udata;
                    }
                }, {
                    key: 'imm_decodeFloats',
                    value: function imm_decodeFloats(data) {
                        var idata = [];
                        var p = 0;
                        var datalen = data.length;
                        while (p < datalen) {
                            var val = 0;
                            var sign = 1;
                            var dec = 0;
                            var decInc = 0;
                            var c = data[p++];
                            while (c != '-' && (c < '0' || c > '9')) {
                                if (p >= datalen) {
                                    return idata;
                                }
                                c = data[p++];
                            }
                            if (c == '-') {
                                if (p >= datalen) {
                                    return idata;
                                }
                                sign = -sign;
                                c = data[p++];
                            }
                            while (c >= '0' && c <= '9' || c == '.') {
                                if (c == '.') {
                                    decInc = 1;
                                } else if (dec < 3) {
                                    val = val * 10 + (c.charCodeAt(0) - 48);
                                    dec += decInc;
                                }
                                if (p < datalen) {
                                    c = data[p++];
                                } else {
                                    c = '\0';
                                }
                            }
                            if (dec < 3) {
                                if (dec == 0) val *= 1000;else if (dec == 1) val *= 100;else val *= 10;
                            }
                            idata.push(sign * val);
                        }
                        return idata;
                    }
                }, {
                    key: 'imm_atoi',
                    value: function imm_atoi(str_data) {
                        var num = parseInt(str_data);
                        if (isNaN(num)) {
                            return 0;
                        }
                        return Math.floor(num);
                    }
                }, {
                    key: 'imm_bin2str',
                    value: function imm_bin2str(bin_data) {
                        var len = bin_data.length;

                        var res = '';
                        for (var i = 0; i < len; i += 20) {
                            var subdata = bin_data.subarray(i, Math.min(i + 20, len));
                            res += String.fromCharCode.apply(null, subdata);
                        }
                        return res;
                    }
                }, {
                    key: 'imm_str2bin',
                    value: function imm_str2bin(str_data) {
                        var len = str_data.length;

                        var res = new Uint8Array(len);
                        for (var i = 0; i < len; i++) {
                            res[i] = str_data.charCodeAt(i);
                        }
                        return res;
                    }
                }, {
                    key: 'imm_bin2hexstr',
                    value: function imm_bin2hexstr(bin_data) {
                        var len = bin_data.length;

                        var res = '';
                        for (var i = 0; i < len; i++) {
                            var n = bin_data[i].toString(16);
                            res += n.length < 2 ? '0' + n : n;
                        }
                        return res.toUpperCase();
                    }
                }, {
                    key: 'imm_hexstr2bin',
                    value: function imm_hexstr2bin(str_data) {
                        var len = str_data.length >> 1;

                        var res = new Uint8Array(len);
                        for (var i = 0; i < len; i++) {
                            res[i] = parseInt(str_data.substr(2 * i, 2), 16);
                        }
                        return res;
                    }
                }, {
                    key: 'imm_getDevice',
                    value: function imm_getDevice(str_device) {
                        var dev = null;
                        var serial;

                        if (str_device.substr(0, 7) == 'http://' || str_device.substr(0, 5) == 'ws://') {
                            serial = this._snByUrl[str_device];
                            if (serial != undefined) dev = this._devs[serial];
                        } else {
                            if (this._devs[str_device]) {
                                dev = this._devs[str_device];
                            } else {
                                serial = this._snByName[str_device];
                                if (serial) {
                                    dev = this._devs[serial];
                                }
                            }
                        }
                        return dev;
                    }
                }, {
                    key: '_UpdateValueCallbackList',
                    value: function _UpdateValueCallbackList(obj_func, bool_add) {
                        var index;
                        return _regeneratorRuntime.async(function _UpdateValueCallbackList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    index = this._ValueCallbackList.indexOf(obj_func);

                                    if (!bool_add) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(obj_func.isOnline());

                                case 4:
                                    if (index < 0) {
                                        this._ValueCallbackList.push(obj_func);
                                    }
                                    context$2$0.next = 8;
                                    break;

                                case 7:
                                    if (index >= 0) {
                                        this._ValueCallbackList.splice(index, 1);
                                    }

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_UpdateTimedReportCallbackList',
                    value: function _UpdateTimedReportCallbackList(obj_func, bool_add) {
                        var index;
                        return _regeneratorRuntime.async(function _UpdateTimedReportCallbackList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    index = this._TimedReportCallbackList.indexOf(obj_func);

                                    if (!bool_add) {
                                        context$2$0.next = 7;
                                        break;
                                    }

                                    context$2$0.next = 4;
                                    return _regeneratorRuntime.awrap(obj_func.isOnline());

                                case 4:
                                    if (index < 0) {
                                        this._TimedReportCallbackList.push(obj_func);
                                    }
                                    context$2$0.next = 8;
                                    break;

                                case 7:
                                    if (index >= 0) {
                                        this._TimedReportCallbackList.splice(index, 1);
                                    }

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_functionClass',
                    value: function imm_functionClass(str_funcid) {
                        var dotpos = str_funcid.indexOf('.');
                        if (dotpos >= 0) str_funcid = str_funcid.substr(dotpos + 1);
                        var classlen = str_funcid.length;
                        while (str_funcid.substr(classlen - 1, 1) <= '9') classlen--;
                        var classname = str_funcid.substr(0, 1).toUpperCase() + str_funcid.substr(1, classlen - 1);
                        if (this._fnByType[classname] == undefined) this._fnByType[classname] = new YFunctionType(this, classname);

                        return classname;
                    }
                }, {
                    key: 'imm_reindexDevice',
                    value: function imm_reindexDevice(obj_dev) {
                        var rootUrl = obj_dev.imm_getRootUrl();
                        var serial = obj_dev.imm_getSerialNumber();
                        var lname = obj_dev.imm_getLogicalName();
                        this._devs[serial] = obj_dev;
                        this._snByUrl[rootUrl] = serial;
                        if (lname != '') this._snByName[lname] = serial;
                        this._fnByType['Module'].imm_reindexFunction(serial + '.module', lname, null, null);
                        var i,
                            count = obj_dev.imm_functionCount();
                        for (i = 0; i < count; i++) {
                            var funcid = obj_dev.imm_functionId(i);
                            var funcname = obj_dev.imm_functionName(i);
                            var classname = this.imm_functionClass(funcid);
                            this._fnByType[classname].imm_reindexFunction(serial + '.' + funcid, funcname, null, null);
                        }
                    }
                }, {
                    key: 'imm_forgetDevice',
                    value: function imm_forgetDevice(obj_dev) {
                        var rootUrl = obj_dev.imm_getRootUrl();
                        var serial = obj_dev.imm_getSerialNumber();
                        var lname = obj_dev.imm_getLogicalName();
                        delete this._devs[serial];
                        delete this._snByUrl[rootUrl];
                        if (this._snByName[lname] == serial) {
                            delete this._snByName[lname];
                        }
                        this._fnByType['Module'].imm_forgetFunction(serial + '.module');
                        var i,
                            count = obj_dev.imm_functionCount();
                        for (i = 0; i < count; i++) {
                            var funcid = obj_dev.imm_functionId(i);
                            var classname = this.imm_functionClass(funcid);
                            this._fnByType[classname].imm_forgetFunction(serial + '.' + funcid);
                        }
                    }
                }, {
                    key: 'imm_resolveFunction',
                    value: function imm_resolveFunction(str_className, str_func) {
                        if (Y_BASETYPES[str_className] == undefined) {
                            if (this._fnByType[str_className] == undefined) this._fnByType[str_className] = new YFunctionType(this, str_className);
                            return this._fnByType[str_className].imm_resolve(str_func);
                        }

                        var baseType = Y_BASETYPES[str_className];
                        var res;
                        for (str_className in this._fnByType) {
                            if (this._fnByType[str_className].imm_getBaseType() == baseType) {
                                res = this._fnByType[str_className].imm_resolve(str_func);
                                if (res.errorType == YAPI_SUCCESS) return res;
                            }
                        }
                        return { errorType: YAPI_DEVICE_NOT_FOUND,
                            errorMsg: 'No ' + str_className + ' [' + str_func + '] found (old firmware?)',
                            result: null };
                    }
                }, {
                    key: 'imm_getFriendlyNameFunction',
                    value: function imm_getFriendlyNameFunction(str_className, str_func) {
                        if (Y_BASETYPES[str_className] == undefined) {
                            if (this._fnByType[str_className] == undefined) this._fnByType[str_className] = new YFunctionType(this, str_className);
                            return this._fnByType[str_className].imm_getFriendlyName(str_func);
                        }

                        var baseType = Y_BASETYPES[str_className];
                        var res;
                        for (str_className in this._fnByType) {
                            if (this._fnByType[str_className].imm_getBaseType() == baseType) {
                                res = this._fnByType[str_className].imm_getFriendlyName(str_func);
                                if (res.errorType == YAPI_SUCCESS) return res;
                            }
                        }
                        return { errorType: YAPI_DEVICE_NOT_FOUND,
                            errorMsg: 'No ' + str_className + ' [' + str_func + '] found (old firmware?)',
                            result: null };
                    }
                }, {
                    key: 'imm_setFunction',
                    value: function imm_setFunction(str_className, str_func, obj_func) {
                        if (this._fnByType[str_className] == undefined) this._fnByType[str_className] = new YFunctionType(this, str_className);
                        return this._fnByType[str_className].imm_setFunction(str_func, obj_func);
                    }
                }, {
                    key: 'imm_getFunction',
                    value: function imm_getFunction(str_className, str_func) {
                        if (this._fnByType[str_className] == undefined) this._fnByType[str_className] = new YFunctionType(this, str_className);
                        return this._fnByType[str_className].imm_getFunction(str_func);
                    }
                }, {
                    key: 'imm_setFunctionValue',
                    value: function imm_setFunctionValue(str_hwid, str_pubval) {
                        var classname = this.imm_functionClass(str_hwid);
                        if (this._fnByType[classname].imm_setFunctionValue(str_hwid, str_pubval)) {
                            var receivers = this._ValueCallbackList;
                            for (var i = 0; i < receivers.length; i++) {
                                var fun = receivers[i];
                                if (!fun._hwId) continue;
                                if (fun._hwId == str_hwid) {
                                    this._data_events.push([fun, str_pubval]);
                                }
                            }
                        }
                    }
                }, {
                    key: 'imm_setTimedReport',
                    value: function imm_setTimedReport(str_hwid, float_timestamp, arr_report) {
                        var classname = this.imm_functionClass(str_hwid);
                        var receivers = this._TimedReportCallbackList;
                        for (var i = 0; i < receivers.length; i++) {
                            var fun = receivers[i];
                            if (!fun._hwId) continue;
                            if (fun._hwId == str_hwid) {
                                this._data_events.push([fun, float_timestamp, arr_report]);
                            }
                        }
                    }
                }, {
                    key: 'imm_getFunctionValue',
                    value: function imm_getFunctionValue(str_hwid) {
                        var classname = this.imm_functionClass(str_hwid);
                        return this._fnByType[classname].imm_getFunctionValue(str_hwid);
                    }
                }, {
                    key: 'imm_getFunctionBaseType',
                    value: function imm_getFunctionBaseType(str_hwid) {
                        var classname = this.imm_functionClass(str_hwid);
                        return this._fnByType[classname].imm_getBaseType();
                    }
                }, {
                    key: 'imm_getFirstHardwareId',
                    value: function imm_getFirstHardwareId(str_className) {
                        if (Y_BASETYPES[str_className] == undefined) {
                            if (this._fnByType[str_className] == undefined) this._fnByType[str_className] = new YFunctionType(this, str_className);
                            return this._fnByType[str_className].imm_getFirstHardwareId();
                        }

                        var baseType = Y_BASETYPES[str_className];
                        var res;
                        for (str_className in this._fnByType) {
                            if (this._fnByType[str_className].imm_getBaseType() == baseType) {
                                res = this._fnByType[str_className].imm_getFirstHardwareId();
                                if (res != undefined) return res;
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'imm_getNextHardwareId',
                    value: function imm_getNextHardwareId(str_className, str_hwid) {
                        if (Y_BASETYPES[str_className] == undefined) {
                            return this._fnByType[str_className].imm_getNextHardwareId(str_hwid);
                        }

                        var baseType = Y_BASETYPES[str_className];
                        var prevclass = this.imm_functionClass(str_hwid);
                        var res = this._fnByType[prevclass].imm_getNextHardwareId(str_hwid);
                        if (res != undefined) return res;
                        for (str_className in this._fnByType) {
                            if (prevclass != '') {
                                if (str_className != prevclass) continue;
                                prevclass = '';
                                continue;
                            }
                            if (this._fnByType[str_className].imm_getBaseType() == baseType) {
                                res = this._fnByType[str_className].imm_getFirstHardwareId();
                                if (res != undefined) return res;
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'devRequest',
                    value: function devRequest(str_device, str_request) {
                        var obj_body = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
                        var lines, res, lockdev, baseUrl, serial, words, hub, method, devUrl, pos, delayedCode, newPromise;
                        return _regeneratorRuntime.async(function devRequest$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    lines = str_request.split('\n');
                                    res = new YHTTPRequest(null);
                                    lockdev = undefined;
                                    baseUrl = undefined;

                                    if (!(str_device.substr(0, 7) == 'http://' || str_device.substr(0, 5) == 'ws://')) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    baseUrl = str_device;
                                    if (baseUrl.slice(-1) != '/') baseUrl = baseUrl + '/';
                                    if (lines[0].substr(0, 12) != 'GET /not.byn') {
                                        serial = this._snByUrl[baseUrl];

                                        if (serial) {
                                            lockdev = this._devs[serial];
                                        }
                                    }
                                    context$2$0.next = 20;
                                    break;

                                case 10:
                                    lockdev = this.imm_getDevice(str_device);

                                    if (lockdev) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    res.errorType = YAPI_DEVICE_NOT_FOUND;
                                    res.errorMsg = 'Device [' + str_device + '] not online';
                                    return context$2$0.abrupt('return', res);

                                case 15:
                                    if (!(lines[0] == 'GET /api.json')) {
                                        context$2$0.next = 19;
                                        break;
                                    }

                                    context$2$0.next = 18;
                                    return _regeneratorRuntime.awrap(lockdev.requestAPI(this.defaultCacheValidity));

                                case 18:
                                    return context$2$0.abrupt('return', context$2$0.sent);

                                case 19:
                                    baseUrl = lockdev.imm_getRootUrl();

                                case 20:
                                    words = lines[0].split(' ');

                                    if (!(words.length < 2)) {
                                        context$2$0.next = 27;
                                        break;
                                    }

                                    res.errorType = YAPI_INVALID_ARGUMENT;
                                    res.errorMsg = 'Invalid request, not enough words; expected a method name and a URL';
                                    return context$2$0.abrupt('return', res);

                                case 27:
                                    if (!(words.length > 2)) {
                                        context$2$0.next = 31;
                                        break;
                                    }

                                    res.errorType = YAPI_INVALID_ARGUMENT;
                                    res.errorMsg = 'Invalid request, too many words; make sure the URL is URI-encoded';
                                    return context$2$0.abrupt('return', res);

                                case 31:
                                    hub = this.imm_getHub(baseUrl);
                                    method = words[0];
                                    devUrl = words[1];

                                    if (devUrl.substr(0, 1) == '/') devUrl = devUrl.substr(1);
                                    pos = baseUrl.indexOf('//');

                                    pos = baseUrl.indexOf('/', pos + 3);
                                    devUrl = baseUrl.slice(pos) + devUrl;
                                    baseUrl = baseUrl.slice(0, pos);
                                    if (!obj_body) obj_body = '';

                                    delayedCode = function delayedCode() {
                                        return hub.request(method, baseUrl, devUrl, obj_body);
                                    };

                                    if (!lockdev) {
                                        context$2$0.next = 49;
                                        break;
                                    }

                                    newPromise = lockdev._pendingQueries.then(delayedCode, delayedCode);

                                    lockdev._pendingQueries = newPromise;
                                    context$2$0.next = 46;
                                    return _regeneratorRuntime.awrap(newPromise);

                                case 46:
                                    res = context$2$0.sent;
                                    context$2$0.next = 52;
                                    break;

                                case 49:
                                    context$2$0.next = 51;
                                    return _regeneratorRuntime.awrap(delayedCode());

                                case 51:
                                    res = context$2$0.sent;

                                case 52:
                                    return context$2$0.abrupt('return', res);

                                case 53:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_funcDev_internal',
                    value: function imm_funcDev_internal(str_className, str_func) {
                        var res = new YFuncRequest(null);
                        var resolve = this.imm_resolveFunction(str_className, str_func);
                        if (resolve.errorType != YAPI_SUCCESS) {
                            res.errorType = resolve.errorType;
                            res.errorMsg = resolve.errorMsg;
                        } else {
                            str_func = resolve.result;
                            var dotpos = str_func.indexOf('.');
                            var devid = str_func.substr(0, dotpos);
                            var funcid = str_func.substr(dotpos + 1);
                            var dev = this.imm_getDevice(devid);
                            if (dev == null) {
                                res.errorType = YAPI_DEVICE_NOT_FOUND;
                                res.errorMsg = 'Device [' + devid + '] not found';
                            } else {
                                res.obj_result = { device: dev, deviceid: devid, functionid: funcid, hwid: str_func };
                            }
                        }
                        return res;
                    }
                }, {
                    key: '_funcDev',
                    value: function _funcDev(str_className, str_func) {
                        var resolve, updRes;
                        return _regeneratorRuntime.async(function _funcDev$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    resolve = this.imm_funcDev_internal(str_className, str_func);

                                    if (!(resolve.errorType == YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', resolve);

                                case 5:
                                    if (!(resolve.errorType == YAPI_DEVICE_NOT_FOUND && this._hubs.length == 0)) {
                                        context$2$0.next = 8;
                                        break;
                                    }

                                    resolve.errorMsg = 'Impossible to contact any device because no hub has been registered';
                                    return context$2$0.abrupt('return', resolve);

                                case 8:
                                    context$2$0.next = 10;
                                    return _regeneratorRuntime.awrap(this._updateDeviceList_internal(true, false));

                                case 10:
                                    updRes = context$2$0.sent;

                                    if (!(updRes.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    resolve.errorType = updRes.errorType;
                                    resolve.errorMsg = updRes.errorMsg;
                                    return context$2$0.abrupt('return', resolve);

                                case 15:
                                    return context$2$0.abrupt('return', this.imm_funcDev_internal(str_className, str_func));

                                case 16:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'funcRequest',
                    value: function funcRequest(str_className, str_func, str_extra) {
                        var int_msValidity = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
                        var funcreq, devreq, loadval, yreq, jsonData, httpreq, key;
                        return _regeneratorRuntime.async(function funcRequest$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._funcDev(str_className, str_func));

                                case 2:
                                    funcreq = context$2$0.sent;

                                    if (!(funcreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', funcreq);

                                case 5:
                                    devreq = funcreq.obj_result;
                                    loadval = null;
                                    yreq = undefined;

                                    if (!(str_extra == '')) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    context$2$0.next = 11;
                                    return _regeneratorRuntime.awrap(devreq.device.requestAPI(int_msValidity));

                                case 11:
                                    yreq = context$2$0.sent;

                                    if (!(yreq != null)) {
                                        context$2$0.next = 16;
                                        break;
                                    }

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 15;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', yreq);

                                case 15:
                                    try {
                                        jsonData = JSON.parse(this.imm_bin2str(yreq.bin_result));

                                        loadval = jsonData[devreq.functionid];
                                    } catch (err) {}

                                case 16:
                                    context$2$0.next = 19;
                                    break;

                                case 18:
                                    devreq.device.imm_dropCache();

                                case 19:
                                    if (loadval) {
                                        context$2$0.next = 31;
                                        break;
                                    }

                                    if (str_extra == '') str_extra = '.json';
                                    httpreq = 'GET /api/' + devreq.functionid + str_extra;
                                    context$2$0.next = 24;
                                    return _regeneratorRuntime.awrap(this.devRequest(devreq.deviceid, httpreq));

                                case 24:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 27;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', yreq);

                                case 27:
                                    if (!(yreq.bin_result.length == 0 && httpreq.indexOf('?') >= 0)) {
                                        context$2$0.next = 30;
                                        break;
                                    }

                                    funcreq.obj_result = yreq.bin_result;
                                    return context$2$0.abrupt('return', funcreq);

                                case 30:
                                    try {
                                        loadval = JSON.parse(this.imm_bin2str(yreq.bin_result));
                                    } catch (err) {}

                                case 31:
                                    if (!loadval) {
                                        funcreq.errorType = YAPI_IO_ERROR;
                                        funcreq.errorMsg = 'Request failed, could not parse API value for function ' + devreq.hwid;
                                    } else {
                                        for (key in devreq) {
                                            loadval[key] = devreq[key];
                                        }
                                        funcreq.obj_result = loadval;
                                    }
                                    return context$2$0.abrupt('return', funcreq);

                                case 33:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'HTTPRequest',
                    value: function HTTPRequest(str_device, str_request) {
                        var yreq;
                        return _regeneratorRuntime.async(function HTTPRequest$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this.devRequest(str_device, str_request));

                                case 2:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 5;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, null));

                                case 5:
                                    return context$2$0.abrupt('return', yreq.bin_result);

                                case 6:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'GetAPIVersion',
                    value: function GetAPIVersion() {
                        return _regeneratorRuntime.async(function GetAPIVersion$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', '1.10.PATCH_WITH_BUILD');

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'InitAPI',
                    value: function InitAPI(mode, errmsg) {
                        return _regeneratorRuntime.async(function InitAPI$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'FreeAPI',
                    value: function FreeAPI() {
                        var i;
                        return _regeneratorRuntime.async(function FreeAPI$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    for (i = 0; i < this._hubs.length; i++) {
                                        this._hubs[i].disconnect();
                                    }

                                    this.imm_init();

                                case 2:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'DisableExceptions',
                    value: function DisableExceptions() {
                        return _regeneratorRuntime.async(function DisableExceptions$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this.exceptionsDisabled = true;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'EnableExceptions',
                    value: function EnableExceptions() {
                        return _regeneratorRuntime.async(function EnableExceptions$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this.exceptionsDisabled = false;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'imm_parseRegisteredUrl',
                    value: function imm_parseRegisteredUrl(str_url) {
                        var user = '';
                        var pass = '';
                        var port = '4444';
                        var host;
                        var url = 'http://';

                        if (str_url.slice(0, 7) == 'http://') {
                            str_url = str_url.slice(7);
                        } else if (str_url.slice(0, 5) == 'ws://') {
                            url = 'ws://';
                            str_url = str_url.slice(5);
                        }
                        var pos = str_url.indexOf('/');
                        if (pos > 0) {
                            str_url = str_url.slice(0, pos);
                        }
                        var authpos = str_url.indexOf('@');
                        if (authpos >= 0) {
                            var auth = str_url.slice(0, authpos);
                            var passpos = auth.indexOf(':');
                            if (passpos >= 0) {
                                user = auth.slice(0, passpos);
                                pass = auth.slice(passpos + 1);
                                url += user + ':' + pass + '@';
                            } else {
                                user = auth;
                                url += user + '@';
                            }
                            str_url = str_url.slice(authpos + 1);
                        }
                        pos = str_url.indexOf(':');
                        if (pos < 0) {
                            host = str_url;
                        } else {
                            host = str_url.slice(0, pos);
                            port = str_url.slice(pos + 1);
                        }
                        if (host == 'callback') {
                            if (url.slice(0, 3) == 'ws:') {
                                url = 'ws://callback:4444/';
                            } else {
                                url = 'http://callback:4444/';
                            }
                        } else {
                            url += host + ':' + port + '/';
                        }
                        var res = { 'user': user, 'pass': pass, 'host': host, 'port': port, 'url': url };
                        return res;
                    }
                }, {
                    key: 'imm_registerHub_internal',
                    value: function imm_registerHub_internal(urlInfo) {
                        var newhub = undefined;
                        if (urlInfo.url.slice(0, 3) == 'ws:') {
                            if (this._isNodeJS) {
                                newhub = new YWebSocketNodeHub(this, urlInfo);
                            } else {
                                newhub = new YWebSocketHub(this, urlInfo);
                            }
                        } else {
                            if (this._isNodeJS) {
                                newhub = new YHttpNodeHub(this, urlInfo);
                            } else {
                                newhub = new YHttpHub(this, urlInfo);
                            }
                        }
                        return newhub;
                    }
                }, {
                    key: 'RegisterHub',
                    value: function RegisterHub(url, errmsg) {
                        var urlInfo, newhub, retcode, yreq;
                        return _regeneratorRuntime.async(function RegisterHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    urlInfo = this.imm_parseRegisteredUrl(url);
                                    newhub = this.imm_getHub(urlInfo.url);

                                    if (!newhub) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 4:
                                    newhub = this.imm_registerHub_internal(urlInfo);
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(newhub.testHub(errmsg));

                                case 7:
                                    retcode = context$2$0.sent;

                                    if (!(retcode != YAPI_SUCCESS)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(retcode, errmsg.msg, retcode));

                                case 10:
                                    context$2$0.next = 12;
                                    return _regeneratorRuntime.awrap(this._addHub(newhub));

                                case 12:
                                    context$2$0.next = 14;
                                    return _regeneratorRuntime.awrap(this._updateDeviceList_internal(true, false));

                                case 14:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    if (errmsg != undefined) {
                                        errmsg.msg = yreq.errorMsg;
                                        this._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
                                    }
                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 18:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 19:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'PreregisterHub',
                    value: function PreregisterHub(url, errmsg) {
                        var urlInfo, newhub;
                        return _regeneratorRuntime.async(function PreregisterHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    urlInfo = this.imm_parseRegisteredUrl(url);
                                    newhub = this.imm_getHub(urlInfo.url);

                                    if (!newhub) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 4:
                                    newhub = this.imm_registerHub_internal(urlInfo);
                                    this._addHub(newhub);

                                    newhub.testHub(errmsg);

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 8:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterHubHttpCallback',
                    value: function RegisterHubHttpCallback(incomingMessage, serverResponse, errmsg) {
                        var urlInfo, newhub, retcode, yreq;
                        return _regeneratorRuntime.async(function RegisterHubHttpCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    urlInfo = this.imm_parseRegisteredUrl('http://callback:4444');
                                    newhub = this.imm_getHub(urlInfo.url);

                                    if (!newhub) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 4:
                                    newhub = new YHttpCallbackHub(this, urlInfo, incomingMessage, serverResponse);
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(newhub.httpCallbackPromise);

                                case 7:
                                    context$2$0.next = 9;
                                    return _regeneratorRuntime.awrap(newhub.testHub(errmsg));

                                case 9:
                                    retcode = context$2$0.sent;

                                    if (!(retcode != YAPI_SUCCESS)) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    this._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
                                    return context$2$0.abrupt('return', this._throw(retcode, errmsg.msg, retcode));

                                case 13:
                                    context$2$0.next = 15;
                                    return _regeneratorRuntime.awrap(this._addHub(newhub));

                                case 15:
                                    context$2$0.next = 17;
                                    return _regeneratorRuntime.awrap(this._updateDeviceList_internal(true, false));

                                case 17:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 21;
                                        break;
                                    }

                                    if (errmsg != undefined) {
                                        errmsg.msg = yreq.errorMsg;
                                        this._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
                                    }
                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 21:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 22:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterHubWebSocketCallback',
                    value: function RegisterHubWebSocketCallback(ws, errmsg) {
                        var urlInfo, newhub, retcode, yreq;
                        return _regeneratorRuntime.async(function RegisterHubWebSocketCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    urlInfo = this.imm_parseRegisteredUrl('http://callback:4444');
                                    newhub = this.imm_getHub(urlInfo.url);

                                    if (!newhub) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 4:
                                    newhub = new YWebSocketCallbackHub(this, urlInfo, ws);
                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(newhub.testHub(errmsg));

                                case 7:
                                    retcode = context$2$0.sent;

                                    if (!(retcode != YAPI_SUCCESS)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', this._throw(retcode, errmsg.msg, retcode));

                                case 10:
                                    context$2$0.next = 12;
                                    return _regeneratorRuntime.awrap(this._addHub(newhub));

                                case 12:
                                    context$2$0.next = 14;
                                    return _regeneratorRuntime.awrap(this._updateDeviceList_internal(true, false));

                                case 14:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 18;
                                        break;
                                    }

                                    if (errmsg != undefined) {
                                        errmsg.msg = yreq.errorMsg;
                                    }
                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 18:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 19:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'UnregisterHub',
                    value: function UnregisterHub(url) {
                        var urlInfo, i, j, serial, before, after;
                        return _regeneratorRuntime.async(function UnregisterHub$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    urlInfo = this.imm_parseRegisteredUrl(url);
                                    i = 0;

                                case 2:
                                    if (!(i < this._hubs.length)) {
                                        context$2$0.next = 13;
                                        break;
                                    }

                                    if (!(this._hubs[i].urlInfo.url == urlInfo.url)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    this._hubs[i].disconnect();
                                    for (j = 0; j < this._hubs[i].serialByYdx.length; j++) {
                                        serial = this._hubs[i].serialByYdx[j];

                                        this.imm_forgetDevice(this._devs[serial]);
                                    }
                                    before = this._hubs.slice(0, i);

                                    if (i + 1 < this._hubs.length) {
                                        after = this._hubs.slice(i + 1);

                                        this._hubs = before.concat(after);
                                    }
                                    this._hubs = before;
                                    return context$2$0.abrupt('return');

                                case 10:
                                    i++;
                                    context$2$0.next = 2;
                                    break;

                                case 13:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'UpdateDeviceList',
                    value: function UpdateDeviceList(errmsg) {
                        var yreq;
                        return _regeneratorRuntime.async(function UpdateDeviceList$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    context$2$0.next = 2;
                                    return _regeneratorRuntime.awrap(this._updateDeviceList_internal(false, true));

                                case 2:
                                    yreq = context$2$0.sent;

                                    if (!(yreq.errorType != YAPI_SUCCESS)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    if (errmsg != undefined) errmsg.msg = yreq.errorMsg;
                                    return context$2$0.abrupt('return', this._throw(yreq.errorType, yreq.errorMsg, yreq.errorType));

                                case 6:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'HandleEvents',
                    value: function HandleEvents(errmsg) {
                        var nEvents, i, evt, dev, report;
                        return _regeneratorRuntime.async(function HandleEvents$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    nEvents = this._data_events.length;
                                    i = 0;

                                case 2:
                                    if (!(i < nEvents)) {
                                        context$2$0.next = 17;
                                        break;
                                    }

                                    evt = this._data_events[i];

                                    if (!(typeof evt[1] == 'string')) {
                                        context$2$0.next = 9;
                                        break;
                                    }

                                    context$2$0.next = 7;
                                    return _regeneratorRuntime.awrap(evt[0]._invokeValueCallback(evt[1]));

                                case 7:
                                    context$2$0.next = 14;
                                    break;

                                case 9:
                                    dev = this.imm_getDevice(evt[0]._serial);

                                    if (!dev) {
                                        context$2$0.next = 14;
                                        break;
                                    }

                                    report = evt[0].imm_decodeTimedReport(evt[1], evt[2]);
                                    context$2$0.next = 14;
                                    return _regeneratorRuntime.awrap(evt[0]._invokeTimedReportCallback(report));

                                case 14:
                                    i++;
                                    context$2$0.next = 2;
                                    break;

                                case 17:
                                    this._data_events = this._data_events.slice(nEvents);

                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 19:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'Sleep',
                    value: function Sleep(ms_duration, errmsg) {
                        var end;
                        return _regeneratorRuntime.async(function Sleep$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    end = this.GetTickCount() + ms_duration;
                                    context$2$0.next = 3;
                                    return _regeneratorRuntime.awrap(this.HandleEvents(errmsg));

                                case 3:
                                    if (!(this.GetTickCount() < end)) {
                                        context$2$0.next = 10;
                                        break;
                                    }

                                    context$2$0.next = 6;
                                    return _regeneratorRuntime.awrap(this._microSleep_internal());

                                case 6:
                                    context$2$0.next = 8;
                                    return _regeneratorRuntime.awrap(this.HandleEvents(errmsg));

                                case 8:
                                    context$2$0.next = 3;
                                    break;

                                case 10:
                                    return context$2$0.abrupt('return', YAPI_SUCCESS);

                                case 11:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: '_microSleep_internal',
                    value: function _microSleep_internal() {
                        return new _Promise(function (resolve, reject) {
                            setTimeout(resolve, 3);
                        });
                    }
                }, {
                    key: 'GetTickCount',
                    value: function GetTickCount() {
                        return +new Date();
                    }
                }, {
                    key: 'CheckLogicalName',
                    value: function CheckLogicalName(name) {
                        return _regeneratorRuntime.async(function CheckLogicalName$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    if (!(name == '')) {
                                        context$2$0.next = 2;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', true);

                                case 2:
                                    if (name) {
                                        context$2$0.next = 4;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', false);

                                case 4:
                                    if (!(name.length > 19)) {
                                        context$2$0.next = 6;
                                        break;
                                    }

                                    return context$2$0.abrupt('return', false);

                                case 6:
                                    return context$2$0.abrupt('return', /^[A-Za-z0-9_\-]*$/.test(name));

                                case 7:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterDeviceArrivalCallback',
                    value: function RegisterDeviceArrivalCallback(arrivalCallback) {
                        return _regeneratorRuntime.async(function RegisterDeviceArrivalCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._arrivalCallback = arrivalCallback;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterDeviceChangeCallback',
                    value: function RegisterDeviceChangeCallback(changeCallback) {
                        return _regeneratorRuntime.async(function RegisterDeviceChangeCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._namechgCallback = changeCallback;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterDeviceRemovalCallback',
                    value: function RegisterDeviceRemovalCallback(removalCallback) {
                        return _regeneratorRuntime.async(function RegisterDeviceRemovalCallback$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._removalCallback = removalCallback;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'RegisterCalibrationHandler',
                    value: function RegisterCalibrationHandler(calibrationType, calibrationHandler) {
                        return _regeneratorRuntime.async(function RegisterCalibrationHandler$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    this._calibHandlers[calibrationType.toString()] = calibrationHandler;

                                case 1:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }, {
                    key: 'LinearCalibrationHandler',
                    value: function LinearCalibrationHandler(float_rawValue, int_calibType, arr_calibParams, arr_calibRawValues, arr_calibRefValues) {
                        var npt;
                        var x = arr_calibRawValues[0];
                        var adj = arr_calibRefValues[0] - x;
                        var i = 0;

                        if (int_calibType < YOCTO_CALIB_TYPE_OFS) {
                            npt = Math.min(int_calibType % 10, arr_calibRawValues.length, arr_calibRefValues.length);
                        } else {
                            npt = arr_calibRefValues.length;
                        }
                        while (float_rawValue > arr_calibRawValues[i] && ++i < npt) {
                            var x2 = x;
                            var adj2 = adj;

                            x = arr_calibRawValues[i];
                            adj = arr_calibRefValues[i] - x;

                            if (float_rawValue < x && x > x2) {
                                adj = adj2 + (adj - adj2) * (float_rawValue - x2) / (x - x2);
                            }
                        }
                        return float_rawValue + adj;
                    }
                }, {
                    key: 'imm_initshaw',
                    value: function imm_initshaw(str_s, int_pad, int_xinit, _shaw) {
                        var i,
                            j = -1,
                            k = 0;
                        var n = str_s.length;

                        for (i = 0; i < 64; i++) {
                            var c = 0;
                            if (i < n) {
                                c = str_s.charCodeAt(i);
                            } else if (int_pad != 0) {
                                if (i == n + 3) c = int_pad;else if (i == n + 4) c = 0x80;
                            }
                            if (k == 0) {
                                j++;
                                _shaw[j] = 0;
                                k = 32;
                            }
                            k -= 8;
                            _shaw[j] |= c << k;
                        }
                        if (int_pad != 0) {
                            _shaw[15] = 8 * (64 + n + 4);
                        }
                        if (int_xinit != 0) {
                            var xdw = int_xinit << 16 | int_xinit;
                            for (j = 0; j < 16; j++) {
                                _shaw[j] ^= xdw;
                            }
                        }
                    }
                }, {
                    key: 'imm_itershaw',
                    value: function imm_itershaw(s, _shaw) {
                        var a, b, c, d, e, t, k;

                        a = s[0];
                        b = s[1];
                        c = s[2];
                        d = s[3];
                        e = s[4];
                        for (k = 16; k < 80; k++) {
                            t = _shaw[k - 3] ^ _shaw[k - 8] ^ _shaw[k - 14] ^ _shaw[k - 16];
                            _shaw[k] = t << 1 | t >>> 31;
                        }
                        for (k = 0; k < 20; k++) {
                            t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x5A827999 + (b & c | ~b & d);
                            e = d;
                            d = c;
                            c = b << 30 | b >>> 2;
                            b = a;
                            a = t & 0xffffffff;
                        }
                        for (k = 20; k < 40; k++) {
                            t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x6ED9EBA1 + (b ^ c ^ d);
                            e = d;
                            d = c;
                            c = b << 30 | b >>> 2;
                            b = a;
                            a = t & 0xffffffff;
                        }
                        for (k = 40; k < 60; k++) {
                            t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x8F1BBCDC + (b & c | b & d | c & d);
                            e = d;
                            d = c;
                            c = b << 30 | b >>> 2;
                            b = a;
                            a = t & 0xffffffff;
                        }
                        for (k = 60; k < 80; k++) {
                            t = (a << 5 | a >>> 27) + e + _shaw[k] + 0xCA62C1D6 + (b ^ c ^ d);
                            e = d;
                            d = c;
                            c = b << 30 | b >>> 2;
                            b = a;
                            a = t & 0xffffffff;
                        }
                        _shaw[0] = s[0] + a & 0xffffffff;
                        _shaw[1] = s[1] + b & 0xffffffff;
                        _shaw[2] = s[2] + c & 0xffffffff;
                        _shaw[3] = s[3] + d & 0xffffffff;
                        _shaw[4] = s[4] + e & 0xffffffff;
                    }
                }, {
                    key: 'ComputePSK',
                    value: function ComputePSK(ssid, pass) {
                        var sha1_init, inner, outer, shau, res, iter, pos, k, _shaw, hex;

                        return _regeneratorRuntime.async(function ComputePSK$(context$2$0) {
                            while (1) switch (context$2$0.prev = context$2$0.next) {
                                case 0:
                                    sha1_init = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
                                    inner = [], outer = [], shau = [], res = [];

                                    _shaw = new Array(80);
                                    imm_initshaw(pass, 0, 0x3636, _shaw);
                                    imm_itershaw(sha1_init, _shaw);
                                    for (k = 0; k < 5; k++) inner[k] = _shaw[k];
                                    _shaw = new Array(80);
                                    imm_initshaw(pass, 0, 0x5c5c, _shaw);
                                    imm_itershaw(sha1_init, _shaw);
                                    for (k = 0; k < 5; k++) outer[k] = _shaw[k];

                                    pos = 0;
                                    for (k = 0; k < 5; k++) shau[k] = 0;
                                    _shaw = new Array(80);
                                    imm_initshaw(ssid, 1, 0, _shaw);

                                    for (iter = 0; iter < 8192;) {
                                        imm_itershaw(inner, _shaw);
                                        _shaw[5] = 0x80000000;
                                        for (k = 6; k < 15; k++) {
                                            _shaw[k] = 0;
                                        }
                                        _shaw[15] = 8 * (64 + 20);
                                        imm_itershaw(outer, _shaw);
                                        shau[0] ^= _shaw[0];
                                        shau[1] ^= _shaw[1];
                                        shau[2] ^= _shaw[2];
                                        shau[3] ^= _shaw[3];
                                        shau[4] ^= _shaw[4];
                                        iter++;

                                        if ((iter & 4095) == 0) {
                                            for (k = 0; k < 5 && pos < 32; k++) {
                                                res[pos++] = shau[k] >>> 24 & 0xff;
                                                res[pos++] = shau[k] >>> 16 & 0xff;
                                                res[pos++] = shau[k] >>> 8 & 0xff;
                                                res[pos++] = shau[k] & 0xff;
                                            }
                                            if (iter == 4096) {
                                                for (k = 0; k < 5; k++) shau[k] = 0;
                                                _shaw = new Array(80);
                                                imm_initshaw(ssid, 2, 0, _shaw);
                                            }
                                        }
                                    }
                                    hex = '';

                                    for (k = 0; k < 32; k++) {
                                        hex += ('0' + Number(res[k]).toString(16)).slice(-2);
                                    }
                                    return context$2$0.abrupt('return', hex);

                                case 18:
                                case 'end':
                                    return context$2$0.stop();
                            }
                        }, null, this);
                    }
                }]);

                return YAPIContext;
            })();

            _export('YAPIContext', YAPIContext);

            YAPI = new YAPIContext();

            _export('YAPI', YAPI);

            yLinearCalibrationHandler = YAPI.LinearCalibrationHandler;

            _export('yLinearCalibrationHandler', yLinearCalibrationHandler);
        }
    };
});
//# sourceMappingURL=yocto_api.js.map