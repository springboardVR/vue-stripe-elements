(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-stripe-elements-plus"] = factory();
	else
		root["vue-stripe-elements-plus"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/StripeElement.vue?vue&type=script&lang=js&
/* harmony default export */ var StripeElementvue_type_script_lang_js_ = ({
  // please see https://stripe.com/docs/elements/reference for details
  inject: ['_stripe'],
  props: {
    value: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this._element = this._stripe.create(this.type, this.options);

    this._element.on('blur', function (event) {
      return _this.$emit('blur');
    });

    this._element.on('focus', function (event) {
      return _this.$emit('focus');
    });

    this._element.on('change', function (event) {
      return _this.$emit('change', event);
    });
  },
  render: function render(h) {
    return h('span');
  },
  mounted: function mounted() {
    // Vue likes to stay in control of $el but Stripe needs a real element
    var el = document.createElement('div');

    this._element.mount(el); // this.$children cannot be used because it expects a VNode :(


    this.$el.appendChild(el);
  },
  beforeDestroy: function beforeDestroy() {
    this._element.unmount();

    this._element.destroy();
  },
  methods: {
    blur: function blur() {
      this._element.blur();
    },
    clear: function clear() {
      this._element.clear();
    },
    focus: function focus() {
      this._element.focus();
    },
    update: function update() {
      this._element.update();
    }
  }
});
// CONCATENATED MODULE: ./src/StripeElement.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_StripeElementvue_type_script_lang_js_ = (StripeElementvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/StripeElement.vue
var StripeElement_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_StripeElementvue_type_script_lang_js_,
  StripeElement_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "StripeElement.vue"
/* harmony default export */ var StripeElement = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/StripeWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var StripeWrappervue_type_script_lang_js_ = ({
  props: {
    stripeKey: {
      required: true
    },
    options: {}
  },
  render: function render(h) {
    return h('div', this.$slots.default);
  },
  created: function created() {
    this.init(this.stripeKey, this.options);
  },
  provide: function provide() {
    var vm = this;
    return {
      _stripe: {
        get create() {
          return vm.create;
        }

      }
    };
  },
  methods: {
    createToken: function createToken(options) {
      return this._instance && this._instance.createToken(this._element, options);
    },
    createSource: function createSource(options) {
      return this._instance && this._instance.createSource(this._element, options);
    },
    retrieveSource: function retrieveSource(options) {
      return this._instance && this._instance.retrieveSource(options);
    },
    init: function init(stripeKey) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (window.Stripe === undefined && this._instance === null) {
        console.error('Stripe V3 library not loaded!');
      } else if (!this._instance) {
        this._instance = window.Stripe(stripeKey);
      }

      if (!this._instance.elements) {
        console.error('Stripe V3 library not loaded!');
      } else if (!this._elements) {
        this._elements = this._instance.elements(options);
      }
    },
    create: function create(elementType) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this._element = this._elements.create(elementType, options);
      return this._element;
    }
  }
});
// CONCATENATED MODULE: ./src/StripeWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_StripeWrappervue_type_script_lang_js_ = (StripeWrappervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/StripeWrapper.vue
var StripeWrapper_render, StripeWrapper_staticRenderFns




/* normalize component */

var StripeWrapper_component = normalizeComponent(
  src_StripeWrappervue_type_script_lang_js_,
  StripeWrapper_render,
  StripeWrapper_staticRenderFns,
  false,
  null,
  null,
  null
  
)

StripeWrapper_component.options.__file = "StripeWrapper.vue"
/* harmony default export */ var StripeWrapper = (StripeWrapper_component.exports);
// CONCATENATED MODULE: ./src/index.js



var src_createHOC = function createHOC(type) {
  return {
    functional: true,
    render: function render(h, ctx) {
      return h(StripeElement, _objectSpread({}, ctx.data, {
        props: _objectSpread({}, ctx.props, {
          type: type
        })
      }));
    }
  };
};



var Card = src_createHOC('card');
var CardExpiry = src_createHOC('cardExpiry');
var CardCvc = src_createHOC('cardCvc');
var CardNumber = src_createHOC('cardNumber');
var PostalCode = src_createHOC('postalCode');
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport StripeWrapper */__webpack_require__.d(__webpack_exports__, "StripeWrapper", function() { return StripeWrapper; });
/* concated harmony reexport StripeElement */__webpack_require__.d(__webpack_exports__, "StripeElement", function() { return StripeElement; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* concated harmony reexport CardExpiry */__webpack_require__.d(__webpack_exports__, "CardExpiry", function() { return CardExpiry; });
/* concated harmony reexport CardCvc */__webpack_require__.d(__webpack_exports__, "CardCvc", function() { return CardCvc; });
/* concated harmony reexport CardNumber */__webpack_require__.d(__webpack_exports__, "CardNumber", function() { return CardNumber; });
/* concated harmony reexport PostalCode */__webpack_require__.d(__webpack_exports__, "PostalCode", function() { return PostalCode; });




/***/ })

/******/ });
});
//# sourceMappingURL=vue-stripe-elements-plus.umd.js.map