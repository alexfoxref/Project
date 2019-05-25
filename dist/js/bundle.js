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
            var link = document.createElement('a');
            link.setAttribute('href', './dist/download/ECMAScript.pdf');
            link.setAttribute('download', '');
            link.click();
            link.remove();
            break;
          }
        }
      }
    });
  }
};

module.exports = download;

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
              currentPage = page.children.length;
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
              var link = document.createElement('a');
              link.setAttribute('href', 'index.html');
              link.click();
              link.remove();
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
          var link = document.createElement('a');
          link.setAttribute('href', 'modules.html');
          link.click();
          link.remove();
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
              var link = document.createElement('a');
              link.setAttribute('href', "modules.html#".concat(pageLink));
              link.click();
              link.remove();
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
  }; //если слайды есть и на кнопках не висит onmove, то по клику на кнопки перемещаем слайды


  if (document.querySelectorAll(".".concat(card)).length > 0) {
    controlWin.addEventListener('click', function (event) {
      if (!controlWin.classList.contains('onmove')) {
        clickElem(controlWin.querySelector('.slick-prev'), function () {
          moveSlide(1);
        });
        clickElem(controlWin.querySelector('.slick-next'), function () {
          moveSlide(-1);
        });
      }
    });
  }

  if (sliderWin && card == 'modules__content-slider .card') {
    var autoSlider = setInterval(function () {
      if (sliderWin.classList.contains('auto') && !controlWin.classList.contains('onmove')) {
        moveSlide(-1);
      }
    }, 4000);
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

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var navigation = __webpack_require__(/*! ./parts/navigation */ "./src/js/parts/navigation.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
      teach = __webpack_require__(/*! ./parts/teach */ "./src/js/parts/teach.js"),
      download = __webpack_require__(/*! ./parts/download */ "./src/js/parts/download.js"); //к навигации


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
  } //подключение


  navigation(currentPage, teach);
  slider('showup__content-slider', 'showup__content-slider .card', 'showup__content-btns', widthShowup, 'card-active');
  slider('modules__content-slider', 'modules__content-slider .card', 'modules__info-btns', widthModules, 'card-active');
  slider('feed__slider', 'feed__item', 'feed__btns', widthFeed, 'feed__item-active');
  download();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map