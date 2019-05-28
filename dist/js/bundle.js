/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fetch-polyfill/fetch.js":
/*!**********************************************!*\
  !*** ./node_modules/fetch-polyfill/fetch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    var self = this
    if (headers instanceof Headers) {
      headers.forEach(function(name, values) {
        values.forEach(function(value) {
          self.append(name, value)
        })
      })

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        self.append(name, headers[name])
      })
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  // Instead of iterable for now.
  Headers.prototype.forEach = function(callback) {
    var self = this
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      callback(name, self.map[name])
    })
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return fetch.Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new fetch.Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return fetch.Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return fetch.Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return fetch.Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(function (text) {
          return JSON.parse(text);
      });
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  function getXhr() {
    // from backbone.js 1.1.2
    // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
    if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
      this.usingActiveXhr = true;
      return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return new XMLHttpRequest();
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new fetch.Promise(function(resolve, reject) {
      var xhr = getXhr();
      if (request.credentials === 'cors') {
        xhr.withCredentials = true;
      }

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      function onload() {
        if (xhr.readyState !== 4) {
          return
        }
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }
      xhr.onreadystatechange = onload;
      if (!self.usingActiveXhr) {
        xhr.onload = onload;
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'))
        }
      }

      xhr.open(request.method, request.url, true)

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(name, values) {
        values.forEach(function(value) {
          xhr.setRequestHeader(name, value)
        })
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  fetch.Promise = self.Promise; // you could change it to your favorite alternative
  self.fetch.polyfill = true
})();


/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){"content-type"===d.toLowerCase()&&(this.u=!0);return aa.call(this,d,e)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&
(T.navigator.sendBeacon=function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accordion = function accordion() {
  var btn = document.querySelectorAll('.module__info-show .plus');

  if (btn.length != 0) {
    var count = [];

    for (var i = 0; i < btn.length; i++) {
      count[i] = 0;
    }

    document.body.addEventListener('click', function (event) {
      var _loop = function _loop(j) {
        for (var _i = 0; _i < btn[j].querySelectorAll('*').length; _i++) {
          if (event.target == btn[j] || event.target == btn[j].querySelectorAll('*')[_i]) {
            //запрещаем быстрые нажатия
            if (!btn[j].classList.contains('onmove')) {
              count[j]++;

              if (count[j] % 2 != 0) {
                (function () {
                  btn[j].classList.add('onmove');
                  var descr = document.createElement('div');
                  descr.classList.add('module__info-descr');
                  document.querySelectorAll('.module__info')[j].insertBefore(descr, document.querySelectorAll('.module__info-show ~ hr')[j]);
                  descr.textContent = "This module focuses on how to leverage your local muscle and \n                                        generate leads in your local community. Topics include areas to develop \n                                        like: your local gym, church, favorite local restaurant or bar, etc.. \n                                        Along with local business networking groups, community involvement and \n                                        charity work, local businesses (lender express and lender advantage), local \n                                        lunch n learns, first time homebuyer education, VA and or Reno events, and \n                                        more."; //анимация появления

                  var height = descr.getBoundingClientRect().height;
                  descr.style.height = '0';
                  descr.style.overflow = 'hidden';
                  var countHeight = 0;

                  var frame = function frame() {
                    descr.style.height = "".concat(countHeight += height / 30, "px");

                    if (countHeight >= height) {
                      descr.style.height = "".concat(height, "px");
                      clearInterval(accordIn);
                      btn[j].classList.remove('onmove');
                    }
                  };

                  var accordIn = setInterval(frame, 10);
                })();
              } else {
                (function () {
                  btn[j].classList.add('onmove');
                  var descr = document.querySelectorAll('.module__info')[j].querySelector('.module__info-show ~ div'),
                      height = descr.getBoundingClientRect().height;
                  var countHeight = height;

                  var frame = function frame() {
                    descr.style.height = "".concat(countHeight -= height / 30, "px");

                    if (countHeight <= 0) {
                      descr.style.height = "0";
                      clearInterval(accordOut);
                      document.querySelectorAll('.module__info')[j].removeChild(descr);
                      btn[j].classList.remove('onmove');
                    }
                  };

                  var accordOut = setInterval(frame, 10);
                })();
              }

              break;
            }
          }
        }
      };

      for (var j = 0; j < btn.length; j++) {
        _loop(j);
      }
    });
  }
};

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/difference.js":
/*!************************************!*\
  !*** ./src/js/parts/difference.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var difference = function difference(column) {
  if (column) {
    column.querySelectorAll('.officer__card-item').forEach(function (item) {
      column.removeChild(item);
    }); //функция создания новых карточек

    var cardNames = ['First', 'Second', 'Third'];

    var createCard = function createCard(n) {
      var card = document.createElement('div'),
          margin,
          moveLength;
      card.classList.add('officer__card-item'); //начальная позиция создается без анимации

      if (n == 1) {
        card.innerHTML = "\n                <div class=\"card__counter\">\n                    <svg width=\"18\" height=\"26\" viewBox=\"0 0 18 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <g opacity=\"0.34\" filter=\"url(#filter0_d)\">\n                        <path d=\"M4.824 11.6716V7.37561H6.048C8.12 7.37561 9.156 6.85161 9.156 5.80361C9.156 4.79561 8.128 4.28361 6.072 4.26761C5.44 4.26761 4.86 4.29961 4.332 4.36361L4.116 0.619608C4.9 0.515608 5.764 0.463608 6.708 0.463608C8.772 0.463608 10.384 0.907609 11.544 1.79561C12.712 2.68361 13.296 3.89161 13.296 5.41961C13.296 6.75561 12.88 7.85161 12.048 8.70761C11.216 9.55561 10.008 10.1316 8.424 10.4356L8.34 11.6716H4.824ZM6.576 12.9436C7.232 12.9436 7.804 13.1876 8.292 13.6756C8.788 14.1636 9.036 14.7396 9.036 15.4036C9.036 16.0756 8.788 16.6636 8.292 17.1676C7.804 17.6636 7.232 17.9116 6.576 17.9116C5.904 17.9116 5.32 17.6676 4.824 17.1796C4.336 16.6836 4.092 16.0956 4.092 15.4156C4.092 14.7516 4.336 14.1756 4.824 13.6876C5.32 13.1916 5.904 12.9436 6.576 12.9436Z\" fill=\"#BEBEBE\"/>\n                        </g>\n                        <defs>\n                        <filter id=\"filter0_d\" x=\"0.0917969\" y=\"0.463867\" width=\"17.204\" height=\"25.448\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n                        <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n                        <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n                        <feOffset dy=\"4\"/>\n                        <feGaussianBlur stdDeviation=\"2\"/>\n                        <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"/>\n                        <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n                        <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n                        </filter>\n                        </defs>\n                    </svg>\n                </div>\n                <div class=\"card__click\">\n                    <div>Click to show </div>\n                    <div class=\"plus\">\n                        <div class=\"plus__content\">\n                            <svg viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z\" fill=\"white\"/>\n                                <path d=\"M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z\" fill=\"white\"/>\n                            </svg>\n                        </div>\n                    </div>\n                </div>\n                ";
        column.appendChild(card);
      } else if (n > 1 && n <= 4) {
        //функция добавления карточек с анимацией
        var cardMove = function cardMove(n) {
          column.classList.add('onmove');
          moveLength = column.children[1].getBoundingClientRect().height;
          margin = column.children[1].getBoundingClientRect().top - column.children[0].getBoundingClientRect().bottom;
          var position = margin;
          var lastCardOpacity = 1;

          var firstFrame = function firstFrame() {
            column.lastChild.style.marginTop = "".concat(position += (margin + moveLength) / 30, "px");

            if (n == 4) {
              column.lastChild.style.opacity = "".concat(lastCardOpacity -= 1 / 30);
            }

            ;

            if (position >= margin + (margin + moveLength) / 2) {
              clearInterval(firstMove);
              column.lastChild.style.marginTop = "".concat(margin + (margin + moveLength) / 2, "px");

              if (n == 4) {
                column.lastChild.style.opacity = "0.5";
              }

              ;
              card.innerHTML = "\n                                <div class=\"card__counter\">0".concat(n - 1, "</div>\n                                <div class=\"card__descr\">\n                                    ").concat(cardNames[n - 2], " step with some text\n                                    and explanation\n                                </div>\n                            ");
              column.insertBefore(card, column.lastChild);
              card.style.position = 'absolute';
              card.style.marginTop = "".concat(margin - (margin + moveLength), "px");
              card.style.opacity = '0';

              if (n == 4) {
                column.lastChild.style.position = 'absolute';
                lastCardOpacity = 0.5;
              }

              position = margin + (margin + moveLength) / 2;
              var cardPosition = margin - (margin + moveLength),
                  cardOpacity = 0;

              var secondFrame = function secondFrame() {
                card.style.marginTop = "".concat(cardPosition += (margin + moveLength) / 15, "px");
                card.style.opacity = "".concat(cardOpacity += 1 / 15);
                column.lastChild.style.marginTop = "".concat(position += (margin + moveLength) / 30, "px");

                if (n == 4) {
                  column.lastChild.style.opacity = "".concat(lastCardOpacity -= 1 / 30);
                }

                if (position >= 2 * margin + moveLength) {
                  clearInterval(secondMove);
                  column.lastChild.style.marginTop = "".concat(margin, "px");
                  card.style.marginTop = "".concat(margin, "px");
                  card.style.opacity = '1';
                  card.style.position = '';

                  if (n == 4) {
                    column.lastChild.style.opacity = "0";
                    column.removeChild(column.lastChild);
                  }

                  column.classList.remove('onmove');
                }
              };

              var secondMove = setInterval(secondFrame, 10);
            }
          };

          var firstMove = setInterval(firstFrame, 10);
        };

        cardMove(n);
      }
    }; //добавим кликательную карточку в колонку


    createCard(column.children.length);
    document.body.addEventListener('click', function (event) {
      for (var i = 0; i < column.querySelectorAll('.plus *').length; i++) {
        if (event.target == column.querySelector('.plus') || event.target == column.querySelectorAll('.plus *')[i]) {
          //запрещаем быстрые нажатия
          if (!column.classList.contains('onmove')) {
            createCard(column.children.length);
          }

          break;
        }
      }
    });
  }
};

module.exports = difference;

/***/ }),

/***/ "./src/js/parts/download.js":
/*!**********************************!*\
  !*** ./src/js/parts/download.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var download = function download() {
  downloadBtns = document.querySelectorAll('.download');

  if (downloadBtns.length != 0) {
    document.body.addEventListener('click', function (event) {
      for (var i = 0; i < downloadBtns.length; i++) {
        for (var j = 0; j < downloadBtns[i].querySelectorAll('*').length; j++) {
          if (event.target == downloadBtns[i] || event.target == downloadBtns[i].querySelectorAll('*')[j]) {
            var _ret = function () {
              var downloadFrame = document.createElement('iframe');
              document.body.appendChild(downloadFrame);
              downloadFrame.style.position = 'fixed';
              downloadFrame.style.width = '100%';
              downloadFrame.style.height = '100%';
              downloadFrame.style.top = '0';
              downloadFrame.style.left = '0';
              downloadFrame.style.zIndex = '40';
              downloadFrame.setAttribute('src', './dist/download/ECMAScript.pdf');
              var downloadClose = document.createElement('div');
              document.body.appendChild(downloadClose);
              downloadClose.innerHTML = "&times;";
              downloadClose.classList.add('close__pdf');
              downloadClose.style.zIndex = '50';

              var closePdf = function closePdf() {
                document.body.removeChild(downloadFrame);
                downloadClose.removeEventListener('click', closePdf);
                document.body.removeChild(downloadClose);
              };

              downloadClose.addEventListener('click', closePdf);
              return "break";
            }();

            if (_ret === "break") break;
          }
        }
      }
    });
  }
};

module.exports = download;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var form = function form(formBlock) {
  if (formBlock) {
    //маска на email и дату
    var email = formBlock.querySelector('input[name="e-mail"]'),
        date = formBlock.querySelector('input[name="date"]');
    document.body.addEventListener('input', function (event) {
      if (event.target == email) {
        email.value = email.value.replace(/[а-яА-Яё]/, '');
      } else if (date && event.target == date) {
        date.value = date.value.replace(/[^\d\/\.]/, '');
      }
    });

    var sendForm = function sendForm(formBlock) {
      formBlock.addEventListener('submit', function (event) {
        event.preventDefault();

        var resp = function resp(message) {
          respMessage = document.createElement('p');
          document.querySelector('.form__message-window').appendChild(respMessage);
          respMessage.classList.add('form__message');

          if (message == 'success') {
            respMessage.innerHTML = 'Your data was successfully send!';
          } else if (message == 'failure') {
            respMessage.innerHTML = 'Error server! Try it later.';
          }

          document.querySelector('.overlay__form').style.display = 'flex';

          var listener = function listener() {
            document.querySelector('.overlay__form').style.display = 'none';
            document.querySelector('.form__message-window').removeChild(respMessage);
            document.body.removeEventListener('click', listener);
          };

          document.body.addEventListener('click', listener);
        };

        var countInput = 0;
        formBlock.querySelectorAll('input').forEach(function (item) {
          if (item.value != '') {
            item.style.backgroundColor = 'rgba(216, 216, 216, 0.3)';
            countInput++;
          }
        }); //если все инпуты заполнены, то отправляем форму

        if (countInput == formBlock.querySelectorAll('input').length) {
          //создаем данные в формате json
          var formData = new FormData(formBlock),
              obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj); //отправляем форму

          fetch('server.php', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: json
          }).then(function (response) {
            if (response.status == 200) {
              resp('success');
            } else {
              resp('failure');
            }
          }).catch(function () {
            console.error('Неуспех');
          });
        } else {
          //если не все инпуты заполнены, то помечаем их
          formBlock.querySelectorAll('input').forEach(function (item) {
            if (item.value == '') {
              item.style.backgroundColor = 'rgba(207, 83, 83, 0.3)';
            }
          });
        }
      });
    };

    sendForm(formBlock);
  }
};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/navigation.js":
/*!************************************!*\
  !*** ./src/js/parts/navigation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var navigation = function navigation(currentPage, teach) {
  var page = document.querySelector('.page'),
      sidecontrol = document.querySelectorAll('.sidecontrol'),
      moduleapp = document.querySelector('.moduleapp'),
      plus = document.querySelector('.showup__content-explore .plus'),
      slider = document.querySelector('.showup__content-slider'),
      moduleControl = document.querySelectorAll('.module__info-controls'); // установка значений страниц на навигационной панели

  var setNum = function setNum(currentPage) {
    if (currentPage == 1) {
      moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = "0".concat(moduleapp.children.length);
      moduleControl[currentPage - 1].querySelector('.next__counter').textContent = "0".concat(currentPage + 1);
    } else if (currentPage == moduleapp.children.length) {
      moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = "0".concat(currentPage - 1);
      moduleControl[currentPage - 1].querySelector('.next__counter').textContent = "0".concat(1);
    } else {
      moduleControl[currentPage - 1].querySelector('.prev__counter').textContent = "0".concat(currentPage - 1);
      moduleControl[currentPage - 1].querySelector('.next__counter').textContent = "0".concat(currentPage + 1);
    }
  }; //функция загрузки контента


  var loadContent = function loadContent(pageStr, currentPage) {
    //Показать нужную страницу
    var showPage = function showPage(n) {
      var pageNames = document.querySelectorAll(".".concat(pageStr.className, " > *")); // скрываем все страницы

      pageNames.forEach(function (item) {
        item.classList.add('hidePage');
        item.classList.remove('activePage');
      }); // показываем нужную страницу

      pageNames[n - 1].classList.add('activePage');
      pageNames[n - 1].classList.remove('hidePage');
    };

    showPage(currentPage); //смена экранов
    //поднимаем контрольную панель выше страниц

    sidecontrol.forEach(function (item) {
      item.style.zIndex = '20';
      item.querySelector('a').style.zIndex = '30';
    }); //делегируем события на элементы боковой панели и на нижнюю панель навигации

    document.body.addEventListener('click', function (event) {
      var movePage = function movePage(elem, n) {
        for (var i = 0; i < elem.querySelectorAll('*').length; i++) {
          if (event.target == elem || event.target == elem.querySelectorAll('*')[i]) {
            currentPage = currentPage + n;

            if (currentPage >= 1 && currentPage <= pageStr.children.length) {
              showPage(currentPage);
            } else if (currentPage < 1) {
              currentPage = pageStr.children.length;
              showPage(currentPage);
            } else {
              currentPage = 1;
              showPage(currentPage);
            } // активация всплытия окна учителя и автослайдера на 3 странице


            if (pageStr == page) {
              if (currentPage == 3) {
                teach();
                document.querySelector('.modules__content-slider').classList.add('auto');
              } else {
                document.querySelector('.modules__content-slider').classList.remove('auto');
              }
            }

            break;
          }
        }
      };

      sidecontrol[currentPage - 1].querySelectorAll('*').forEach(function (itemAll) {
        if (event.target == sidecontrol[currentPage - 1] || event.target == itemAll) {
          var icon = sidecontrol[currentPage - 1].querySelectorAll('a')[0];
          icon.querySelectorAll('*').forEach(function (item) {
            if (event.target == icon || event.target == item) {
              event.preventDefault();
              window.location = 'index.html';
            }
          });
          var arrow = sidecontrol[currentPage - 1].querySelectorAll('a')[1];
          movePage(arrow, 1);
        }
      });

      if (moduleControl.length > 0) {
        movePage(moduleControl[currentPage - 1].querySelector('.prev'), -1);
        movePage(moduleControl[currentPage - 1].querySelector('.next'), 1);
        setNum(currentPage);
      }

      ;
    });
  };

  if (page) {
    loadContent(page, 1); // переход по плюсику на слайдере первого экрана

    document.body.addEventListener('click', function (event) {
      plus.querySelectorAll('*').forEach(function (item) {
        if (event.target == item || event.target == plus) {
          window.location = 'modules.html';
        }
      });
    }); // переход по слайдам на слайдере первого экрана

    slider.addEventListener('click', function (event) {
      slider.querySelectorAll('.showup__content-slider .card').forEach(function (itemCard) {
        if (!itemCard.classList.contains('onmove')) {
          for (var i = 0; i < itemCard.querySelectorAll('*').length; i++) {
            if (event.target == itemCard || event.target == itemCard.querySelectorAll('*')[i]) {
              event.preventDefault();
              var pageLink = +itemCard.getAttribute('href').slice(-1);
              window.location = "modules.html#".concat(pageLink);
              break;
            }
          }
        }
      });
    });
  } else if (moduleapp) {
    loadContent(moduleapp, currentPage);
    setNum(currentPage);
  }
};

module.exports = navigation;

/***/ }),

/***/ "./src/js/parts/phoneMask.js":
/*!***********************************!*\
  !*** ./src/js/parts/phoneMask.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Функция телефонной маски, аргументы: элемент, начальные цифры без +
var phoneMask = function phoneMask(input, start) {
  if (input) {
    var string = '',
        numStr = '';
    var p = ('+' + start).length;
    input.addEventListener('input', function () {
      // Вводим только цифры, пробел и +
      string = input.value;

      while (/[^\d+]/.exec(string)) {
        string = string.replace(/[^\d+]/, '');
        input.value = string;
      } // + может быть только на первой позиции


      if (/\+/.exec(string) != null) {
        if (/\+/.exec(string).index == 0) {
          string = string.replace(/\+/g, '');
          string = '+' + string;
          input.value = string;
        } else {
          string = string.replace(/\+/g, '');
          input.value = string;
        }
      } // строка в инпуте всегда показывает в начале +start


      var reg = new RegExp('\\+' + start, '');

      if (p < 2) {
        console.log('ошибка');
      }

      if (reg.exec(string) == null || reg.exec(string).index != 0) {
        if (p >= string.length) {
          for (var i = 0; i < string.length; i++) {
            if (string[i] != ('+' + start)[i]) {
              string = string.replace(string, "+".concat(start, " ").concat(string.slice(i)));
              input.value = string;
              break;
            }
          }
        } else {
          for (var _i = 0; _i < p; _i++) {
            if (string[_i] != ('+' + start)[_i]) {
              string = string.replace(string, "+".concat(start, " ").concat(string.slice(_i)));
              input.value = string;
              break;
            }
          }
        }
      } else {
        while (reg.exec(string) == null || reg.exec(string).index != 0) {
          string = string.replace(string, "+".concat(start, " ").concat(string));
        }

        string = string.replace(string, "+".concat(start, " ").concat(string.slice(p)));
        input.value = string;
      } // количество чисел в инпуте меньше или равно 11


      numStr = string.replace(/[^\d]/g, '');

      if (numStr.length > 11) {
        numStr = numStr.slice(0, 11);
      } // внешний вид в зависимости от длины


      if (numStr.length > 0 && numStr.length <= p - 1) {
        string = "+".concat(numStr);
        input.value = string;
      }

      if (numStr.length > p - 1 && numStr.length <= 4) {
        string = numStr.replace(numStr, "+".concat(numStr.slice(0, p - 1), " (").concat(numStr.slice(p - 1), ")"));
        input.value = string;
      }

      var numStr4 = numStr.slice(0, 4);

      if (numStr.length > 4 && numStr.length <= 7) {
        string = numStr.replace(/(\d{4})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2"));
        input.value = string;
      }

      if (numStr.length > 7 && numStr.length <= 9) {
        string = numStr.replace(/(\d{4})(\d{3})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2-$3"));
        input.value = string;
      }

      if (numStr.length > 9 && numStr.length <= 11) {
        string = numStr.replace(/(\d{4})(\d{3})(\d{2})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2-$3-$4"));
        input.value = string;
      }
    }); // при нажатии backspace

    input.addEventListener('keydown', function (event) {
      if (event.keyCode == 8) {
        event.preventDefault();
        string = input.value;
        numStr = string.replace(/[^\d]/g, '');
        numStr = numStr.slice(0, numStr.length - 1);

        if (numStr.length == 0) {
          string = string.slice(0, string.length - 1);
          input.value = string;
        }

        if (numStr.length > 0 && numStr.length <= p - 1) {
          string = "+".concat(numStr);
          input.value = string;
        }

        if (numStr.length > p - 1 && numStr.length <= 4) {
          string = numStr.replace(numStr, "+".concat(numStr.slice(0, p - 1), " (").concat(numStr.slice(p - 1), ")"));
          input.value = string;
        }

        var numStr4 = numStr.slice(0, 4);

        if (numStr.length > 4 && numStr.length <= 7) {
          string = numStr.replace(/(\d{4})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2"));
          input.value = string;
        }

        if (numStr.length > 7 && numStr.length <= 9) {
          string = numStr.replace(/(\d{4})(\d{3})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2-$3"));
          input.value = string;
        }

        if (numStr.length > 9 && numStr.length <= 11) {
          string = numStr.replace(/(\d{4})(\d{3})(\d{2})(\d*)/, "+".concat(numStr4.slice(0, p - 1), " (").concat(numStr4.slice(p - 1), ") $2-$3-$4"));
          input.value = string;
        }
      }
    });
  }
};

module.exports = phoneMask;

/***/ }),

/***/ "./src/js/parts/play.js":
/*!******************************!*\
  !*** ./src/js/parts/play.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var play = function play() {
  var btns = document.querySelectorAll('.play__circle'),
      blocks = document.querySelectorAll('.play'),
      overlay = document.querySelector('.overlay');
  var numBtn; //подключаем iframe api и создаем плеер

  var player;
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player('frame', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }; //создаем iframe


  var onPlayerReady = function onPlayerReady(e) {
    var iframe = player.getIframe();
    iframe.setAttribute('width', '720');
    iframe.setAttribute('height', '480');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('heiallowfullscreenght', '');
    iframe.setAttribute('autoplay', '0');
    iframe.setAttribute('enablejsapi', '1');

    if (window.location.href.match(/modules\.html/)) {
      iframe.setAttribute('autoplay', '1');
    } //по нажатию на кнопки загружаем видео


    if (btns.length != 0) {
      document.body.addEventListener('click', function (event) {
        for (var i = 0; i < btns.length; i++) {
          for (var j = 0; j < btns[i].querySelectorAll('*').length; j++) {
            if (event.target == btns[i] || event.target == btns[i].querySelectorAll('*')[j]) {
              if (!btns[i].classList.contains('closed')) {
                overlay.style.display = 'flex';
                numBtn = i;
                player.loadVideoByUrl("".concat(blocks[i].getAttribute('data-url')));

                if (iframe.getAttribute('autoplay') == '0') {
                  e.target.stopVideo();
                }

                break;
              }
            }
          }
        }

        if (event.target == overlay.querySelector('.close')) {
          overlay.style.display = 'none';
          player.stopVideo();
        }
      });
    }
  }; //блок для открытия заблокированного видео после окончания предыдущего


  var onPlayerStateChange = function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      if (window.location.href.match(/modules\.html/)) {
        if (document.querySelectorAll('.module__video-item')[numBtn + 1] && btns[numBtn + 1].classList.contains('closed')) {
          document.querySelectorAll('.module__video-item')[numBtn + 1].style.filter = 'none';
          document.querySelectorAll('.module__video-item')[numBtn + 1].style.opacity = '1';
          var dataUrl = blocks[numBtn + 1].getAttribute('data-url');
          document.querySelectorAll('.module__video-item')[numBtn + 1].removeChild(blocks[numBtn + 1]);
          var block = document.createElement('div');
          block.classList.add('play');
          block.setAttribute('data-url', "".concat(dataUrl));
          block.innerHTML = "\n                        <div class=\"play__circle\">\n                            <svg viewBox=\"0 0 14 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M14 8L0 16V0L14 8Z\" fill=\"#6D53AF\"/>\n                            </svg>\n                        </div>\n                        <div class=\"play__text\">play video</div>\n                    ";
          document.querySelectorAll('.module__video-item')[numBtn + 1].appendChild(block);
          btns = document.querySelectorAll('.play__circle');
          blocks = document.querySelectorAll('.play');
        }
      }
    }
  };
};

module.exports = play;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//можно ввести параметр стиль анимации, а не сравнивать параметр с классом, но пока так
var slider = function slider(_slider, card, control, width, active) {
  var sliderWin = document.querySelector(".".concat(_slider)),
      controlWin = document.querySelector(".".concat(control)); //функция для делегирования события на элемент со всеми его потомками

  var clickElem = function clickElem(elem, func) {
    for (var i = 0; i < elem.querySelectorAll('*').length; i++) {
      if (event.target == elem || event.target == elem.querySelectorAll('*')[i]) {
        func();
        break;
      }
    }
  };

  var moveLength = 0;

  if (sliderWin && card == 'feed__item') {
    moveLength = parseFloat(getComputedStyle(document.querySelectorAll(".feed__slider .feed__item")[0]).width) + parseFloat(getComputedStyle(document.querySelectorAll(".feed__slider .feed__item")[0]).marginRight);
  } // перемещение слайдов


  var moveSlide = function moveSlide(n) {
    // запретим по классу onmove нажатие на контрольные кнопки и на ссылку первого слайда
    controlWin.classList.add('onmove');
    var countBtn,
        countHide,
        countIn = 0;

    if (n > 0) {
      // при нажатии на prev последний элемент добавляем в начало и причесываем классы
      sliderWin.insertBefore(sliderWin.querySelector(".".concat(card, ":last-child")), sliderWin.querySelector(".".concat(card, ":first-child")));

      if (card == 'feed__item') {
        sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "".concat(width, "px");
        sliderWin.querySelector(".".concat(card, ":first-child")).style.position = 'absolute';
        sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = "0";
      } else {
        sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "-".concat(width, "px");
      }

      sliderWin.querySelector(".".concat(card, ":first-child")).classList.add(active);
      sliderWin.querySelector(".".concat(card, ":nth-child(2)")).classList.remove(active);
      sliderWin.querySelector(".".concat(card, ":first-child")).style.opacity = '0';
      sliderWin.querySelector(".".concat(card, ":first-child")).classList.add('onmove'); // анимация для prev

      countHide = 0;

      if (card == 'feed__item') {
        countIn = 0;
        countBtn = +"".concat(width);
      } else {
        countBtn = +"-".concat(width);
      }

      var framePrev = function framePrev() {
        if (card == 'feed__item') {
          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "".concat(countBtn -= parseFloat(width / 50 * n), "px");
          sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = "".concat(countIn += parseFloat(moveLength / 50 * n), "px");
        } else {
          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "".concat(countBtn += parseFloat(width / 50 * n), "px");
        }

        sliderWin.querySelector(".".concat(card, ":first-child")).style.opacity = "".concat(countHide += parseFloat(1 / 50 * n));

        if (card != 'feed__item' && countBtn >= 0 || card == 'feed__item' && countIn >= moveLength) {
          if (card == 'feed__item') {
            sliderWin.querySelector(".".concat(card, ":first-child")).style.position = '';
            sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = "0";
          }

          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = '0';
          clearInterval(movePrevAnimation);
          sliderWin.querySelector(".".concat(card, ":first-child")).classList.remove('onmove');
          controlWin.classList.remove('onmove');
        }
      };

      var movePrevAnimation = setInterval(framePrev, 10);
    } else if (n < 0) {
      // при нажатии на next сначала делаем анимацию, а затем перемещение первого слайда в конец
      sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "0";
      sliderWin.querySelector(".".concat(card, ":first-child")).style.opacity = '1';
      sliderWin.querySelector(".".concat(card, ":first-child")).classList.add('onmove');
      sliderWin.querySelector(".".concat(card, ":first-child")).classList.remove(active);
      sliderWin.querySelector(".".concat(card, ":nth-child(2)")).classList.add(active);

      if (card == 'feed__item') {
        sliderWin.querySelector(".".concat(card, ":first-child")).style.position = 'absolute';
        sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = moveLength;
      } // анимация для next


      countBtn = 0;
      countHide = 1;

      if (card == 'feed__item') {
        countIn = moveLength;
      }

      var frameNext = function frameNext() {
        if (card == 'feed__item') {
          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "".concat(countBtn -= parseFloat(width / 50 * n), "px");
          sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = "".concat(countIn += parseFloat(moveLength / 50 * n), "px");
        } else {
          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "".concat(countBtn += parseFloat(width / 50 * n), "px");
        }

        sliderWin.querySelector(".".concat(card, ":first-child")).style.opacity = "".concat(countHide += parseFloat(1 / 50 * n));

        if (card != 'feed__item' && countBtn <= -width || card == 'feed__item' && countIn <= 0) {
          clearInterval(moveNextAnimation);
          sliderWin.querySelector(".".concat(card, ":first-child")).classList.remove('onmove');
          sliderWin.querySelector(".".concat(card, ":first-child")).style.marginLeft = "0";
          sliderWin.querySelector(".".concat(card, ":first-child")).style.opacity = '1';

          if (card == 'feed__item') {
            sliderWin.querySelector(".".concat(card, ":nth-child(2)")).style.marginLeft = "0";
            sliderWin.querySelector(".".concat(card, ":first-child")).style.position = '';
          }

          sliderWin.appendChild(sliderWin.querySelector(".".concat(card, ":first-child")));
          controlWin.classList.remove('onmove');
        }
      };

      var moveNextAnimation = setInterval(frameNext, 10);
    }
  };

  var autoSlider;

  var moveAuto = function moveAuto() {
    if (sliderWin && card == 'modules__content-slider .card') {
      autoSlider = setInterval(function () {
        if (sliderWin.classList.contains('auto') && !controlWin.classList.contains('onmove')) {
          moveSlide(-1);
        }
      }, 4000);
    }
  };

  moveAuto(); //если слайды есть и на кнопках не висит onmove, то по клику на кнопки перемещаем слайды

  if (document.querySelectorAll(".".concat(card)).length > 0) {
    controlWin.addEventListener('click', function (event) {
      if (!controlWin.classList.contains('onmove')) {
        clickElem(controlWin.querySelector('.slick-prev'), function () {
          moveSlide(1);
          clearInterval(autoSlider);
          moveAuto();
        });
        clickElem(controlWin.querySelector('.slick-next'), function () {
          moveSlide(-1);
          clearInterval(autoSlider);
          moveAuto();
        });
      }
    });
  }
};

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/teach.js":
/*!*******************************!*\
  !*** ./src/js/parts/teach.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var teach = function teach() {
  var hanson = document.querySelector('.hanson');

  var moveTeach = function moveTeach(ms) {
    var listener = function listener() {
      moveTeach(15000);
    };

    hanson.removeEventListener('click', listener);
    hanson.style.bottom = "-".concat(hanson.offsetHeight, "px");
    setTimeout(function () {
      var position = -hanson.offsetHeight;

      var moveFrame = function moveFrame() {
        hanson.style.bottom = "".concat(position += hanson.offsetHeight / 50, "px");

        if (position >= 0) {
          hanson.style.bottom = '0';
          clearInterval(moveBlock);
        }
      };

      var moveBlock = setInterval(moveFrame, 10);
    }, ms);
    hanson.addEventListener('click', listener);
  };

  moveTeach(3000);
};

module.exports = teach;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

__webpack_require__(/*! fetch-polyfill */ "./node_modules/fetch-polyfill/fetch.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var navigation = __webpack_require__(/*! ./parts/navigation */ "./src/js/parts/navigation.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
      teach = __webpack_require__(/*! ./parts/teach */ "./src/js/parts/teach.js"),
      download = __webpack_require__(/*! ./parts/download */ "./src/js/parts/download.js"),
      form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
      phoneMask = __webpack_require__(/*! ./parts/phoneMask */ "./src/js/parts/phoneMask.js"),
      accordion = __webpack_require__(/*! ./parts/accordion */ "./src/js/parts/accordion.js"),
      difference = __webpack_require__(/*! ./parts/difference */ "./src/js/parts/difference.js"),
      play = __webpack_require__(/*! ./parts/play */ "./src/js/parts/play.js"); //к навигации


  var currentPage;

  if (window.location.href.match(/#\d/)) {
    currentPage = +window.location.href.slice(-1);
  } else {
    currentPage = 1;
  } //к слайдерам


  var widthShowup = 0,
      widthModules = 0,
      widthFeed = 0;

  if (document.querySelector(".showup__content-slider") && document.querySelector(".modules__content-slider")) {
    widthShowup = parseFloat(getComputedStyle(document.querySelectorAll(".showup__content-slider .card")[1]).width) + parseFloat(getComputedStyle(document.querySelectorAll(".showup__content-slider .card")[1]).marginRight);
    widthModules = parseFloat(getComputedStyle(document.querySelectorAll(".modules__content-slider .card")[1]).width) + parseFloat(getComputedStyle(document.querySelectorAll(".modules__content-slider .card")[1]).marginRight);
    widthFeed = parseFloat(getComputedStyle(document.querySelectorAll(".feed__slider .feed__item")[1]).width) + parseFloat(getComputedStyle(document.querySelectorAll(".feed__slider .feed__item")[1]).marginRight);
  } //к формам


  var formJoin = document.querySelector('.join__evolution .form'),
      formSchedule = document.querySelector('.schedule__form .form'); //к телефонной маске

  var phone = document.getElementById('phone'); //к карточкам различий

  var officerold = document.querySelector('.officerold'),
      officernew = document.querySelector('.officernew'); //подключение

  navigation(currentPage, teach);
  slider('showup__content-slider', 'showup__content-slider .card', 'showup__content-btns', widthShowup, 'card-active');
  slider('modules__content-slider', 'modules__content-slider .card', 'modules__info-btns', widthModules, 'card-active');
  slider('feed__slider', 'feed__item', 'feed__btns', widthFeed, 'feed__item-active');
  download();
  form(formJoin);
  form(formSchedule);
  phoneMask(phone, 1);
  accordion();
  difference(officerold);
  difference(officernew);
  play();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map