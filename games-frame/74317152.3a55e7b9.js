"use strict";(self.webpackChunkgames=self.webpackChunkgames||[]).push([[74317152],{74317152:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Y});var r=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"],a=["dateStyle","timeStyle","calendar","localeMatcher","hour12","hourCycle","timeZone","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"];var i=Array.isArray;function o(t){return null!==t&&"object"==typeof t}function s(t){return"string"==typeof t}var l=Object.prototype.toString,c="[object Object]";function u(t){return l.call(t)===c}function h(t){return null==t}function f(t){return"function"==typeof t}function p(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=null,r=null;return 1===t.length?o(t[0])||i(t[0])?r=t[0]:"string"==typeof t[0]&&(n=t[0]):2===t.length&&("string"==typeof t[0]&&(n=t[0]),(o(t[1])||i(t[1]))&&(r=t[1])),{locale:n,params:r}}function _(t){return JSON.parse(JSON.stringify(t))}function m(t,e){return!!~t.indexOf(e)}var g=Object.prototype.hasOwnProperty;function v(t,e){return g.call(t,e)}function b(t){for(var e=arguments,n=Object(t),r=1;r<arguments.length;r++){var a=e[r];if(null!=a){var i=void 0;for(i in a)v(a,i)&&(o(a[i])?n[i]=b(n[i],a[i]):n[i]=a[i])}}return n}function d(t,e){if(t===e)return!0;var n=o(t),r=o(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var a=i(t),s=i(e);if(a&&s)return t.length===e.length&&t.every((function(t,n){return d(t,e[n])}));if(a||s)return!1;var l=Object.keys(t),c=Object.keys(e);return l.length===c.length&&l.every((function(n){return d(t[n],e[n])}))}catch(u){return!1}}var y={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.data,r=e.parent,a=e.props,i=e.slots,o=r.$i18n;if(o){var s=a.path,l=a.locale,c=a.places,u=i(),h=o.i(s,l,function(t){var e;for(e in t)if("default"!==e)return!1;return Boolean(e)}(u)||c?function(t,e){var n=e?function(t){0;return Array.isArray(t)?t.reduce(k,{}):Object.assign({},t)}(e):{};if(!t)return n;t=t.filter((function(t){return t.tag||""!==t.text.trim()}));var r=t.every(w);0;return t.reduce(r?F:k,n)}(u.default,c):u),f=a.tag&&!0!==a.tag||!1===a.tag?a.tag:"span";return f?t(f,n,h):h}}};function F(t,e){return e.data&&e.data.attrs&&e.data.attrs.place&&(t[e.data.attrs.place]=e),t}function k(t,e,n){return t[n]=e,t}function w(t){return Boolean(t.data&&t.data.attrs&&t.data.attrs.place)}var $,M={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(t,e){var n=e.props,a=e.parent,i=e.data,l=a.$i18n;if(!l)return null;var c=null,u=null;s(n.format)?c=n.format:o(n.format)&&(n.format.key&&(c=n.format.key),u=Object.keys(n.format).reduce((function(t,e){var a;return m(r,e)?Object.assign({},t,((a={})[e]=n.format[e],a)):t}),null));var h=n.locale||l.locale,f=l._ntp(n.value,h,c,u),p=f.map((function(t,e){var n,r=i.scopedSlots&&i.scopedSlots[t.type];return r?r(((n={})[t.type]=t.value,n.index=e,n.parts=f,n)):t.value})),_=n.tag&&!0!==n.tag||!1===n.tag?n.tag:"span";return _?t(_,{attrs:i.attrs,class:i.class,staticClass:i.staticClass},p):p}};function T(t,e,n){D(t,n)&&L(t,e,n)}function C(t,e,n,r){if(D(t,n)){var a=n.context.$i18n;(function(t,e){var n=e.context;return t._locale===n.$i18n.locale})(t,n)&&d(e.value,e.oldValue)&&d(t._localeMessage,a.getLocaleMessage(a.locale))||L(t,e,n)}}function I(t,e,n,r){if(n.context){var a=n.context.$i18n||{};e.modifiers.preserve||a.preserveDirectiveContent||(t.textContent=""),t._vt=void 0,delete t._vt,t._locale=void 0,delete t._locale,t._localeMessage=void 0,delete t._localeMessage}}function D(t,e){var n=e.context;return!!n&&!!n.$i18n}function L(t,e,n){var r,a,i=function(t){var e,n,r,a;s(t)?e=t:u(t)&&(e=t.path,n=t.locale,r=t.args,a=t.choice);return{path:e,locale:n,args:r,choice:a}}(e.value),o=i.path,l=i.locale,c=i.args,h=i.choice;if((o||l||c)&&o){var f=n.context;t._vt=t.textContent=null!=h?(r=f.$i18n).tc.apply(r,[o,h].concat(O(l,c))):(a=f.$i18n).t.apply(a,[o].concat(O(l,c))),t._locale=f.$i18n.locale,t._localeMessage=f.$i18n.getLocaleMessage(f.$i18n.locale)}}function O(t,e){var n=[];return t&&n.push(t),e&&(Array.isArray(e)||u(e))&&n.push(e),n}function W(t,e){void 0===e&&(e={bridge:!1}),W.installed=!0;($=t).version&&Number($.version.split(".")[0]);(function(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var a=this.$i18n;return a._tc.apply(a,[t,a.locale,a._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}})($),$.mixin(function(t){function e(){this!==this.$root&&this.$options.__INTLIFY_META__&&this.$el&&this.$el.setAttribute("data-intlify",this.$options.__INTLIFY_META__)}return void 0===t&&(t=!1),t?{mounted:e}:{beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n){if(t.i18n instanceof Z){if(t.__i18nBridge||t.__i18n)try{var e=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){e=b(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(i){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(u(t.i18n)){var n=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Z?this.$root.$i18n:null;if(n&&(t.i18n.root=this.$root,t.i18n.formatter=n.formatter,t.i18n.fallbackLocale=n.fallbackLocale,t.i18n.formatFallbackMessages=n.formatFallbackMessages,t.i18n.silentTranslationWarn=n.silentTranslationWarn,t.i18n.silentFallbackWarn=n.silentFallbackWarn,t.i18n.pluralizationRules=n.pluralizationRules,t.i18n.preserveDirectiveContent=n.preserveDirectiveContent),t.__i18nBridge||t.__i18n)try{var r=t.i18n&&t.i18n.messages?t.i18n.messages:{};(t.__i18nBridge||t.__i18n).forEach((function(t){r=b(r,JSON.parse(t))})),t.i18n.messages=r}catch(i){}var a=t.i18n.sharedMessages;a&&u(a)&&(t.i18n.messages=b(t.i18n.messages,a)),this._i18n=new Z(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),n&&n.onComponentInstanceCreated(this._i18n)}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Z?this._i18n=this.$root.$i18n:t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof Z&&(this._i18n=t.parent.$i18n)},beforeMount:function(){var t=this.$options;t.i18n=t.i18n||(t.__i18nBridge||t.__i18n?{}:null),t.i18n?(t.i18n instanceof Z||u(t.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Z||t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof Z)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},mounted:e,beforeDestroy:function(){if(this._i18n){var t=this;this.$nextTick((function(){t._subscribing&&(t._i18n.unsubscribeDataChanging(t),delete t._subscribing),t._i18nWatcher&&(t._i18nWatcher(),t._i18n.destroyVM(),delete t._i18nWatcher),t._localeWatcher&&(t._localeWatcher(),delete t._localeWatcher)}))}}}}(e.bridge)),$.directive("t",{bind:T,update:C,unbind:I}),$.component(y.name,y),$.component(M.name,M),$.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}var j=function(){this._caches=Object.create(null)};j.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=function(t){var e=[],n=0,r="";for(;n<t.length;){var a=t[n++];if("{"===a){r&&e.push({type:"text",value:r}),r="";var i="";for(a=t[n++];void 0!==a&&"}"!==a;)i+=a,a=t[n++];var o="}"===a,s=N.test(i)?"list":o&&x.test(i)?"named":"unknown";e.push({value:i,type:s})}else"%"===a?"{"!==t[n]&&(r+=a):r+=a}return r&&e.push({type:"text",value:r}),e}(t),this._caches[t]=n),function(t,e){var n=[],r=0,a=Array.isArray(e)?"list":o(e)?"named":"unknown";if("unknown"===a)return n;for(;r<t.length;){var i=t[r];switch(i.type){case"text":n.push(i.value);break;case"list":n.push(e[parseInt(i.value,10)]);break;case"named":"named"===a&&n.push(e[i.value])}r++}return n}(n,e)};var N=/^(?:\d)+/,x=/^(?:\w)+/;var E=[];E[0]={ws:[0],ident:[3,0],"[":[4],eof:[7]},E[1]={ws:[1],".":[2],"[":[4],eof:[7]},E[2]={ws:[2],ident:[3,0],0:[3,0],number:[3,0]},E[3]={ident:[3,0],0:[3,0],number:[3,0],ws:[1,1],".":[2,1],"[":[4,1],eof:[7,1]},E[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],eof:8,else:[4,0]},E[5]={"'":[4,0],eof:8,else:[5,0]},E[6]={'"':[4,0],eof:8,else:[6,0]};var S=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function R(t){if(null==t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function H(t){var e,n,r,a=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(r=a,S.test(r)?(n=(e=a).charCodeAt(0))!==e.charCodeAt(e.length-1)||34!==n&&39!==n?e:e.slice(1,-1):"*"+a)}var P=function(){this._cache=Object.create(null)};P.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=function(t){var e,n,r,a,i,o,s,l=[],c=-1,u=0,h=0,f=[];function p(){var e=t[c+1];if(5===u&&"'"===e||6===u&&'"'===e)return c++,r="\\"+e,f[0](),!0}for(f[1]=function(){void 0!==n&&(l.push(n),n=void 0)},f[0]=function(){void 0===n?n=r:n+=r},f[2]=function(){f[0](),h++},f[3]=function(){if(h>0)h--,u=4,f[0]();else{if(h=0,void 0===n)return!1;if(!1===(n=H(n)))return!1;f[1]()}};null!==u;)if(c++,"\\"!==(e=t[c])||!p()){if(a=R(e),8===(i=(s=E[u])[a]||s.else||8))return;if(u=i[0],(o=f[i[1]])&&(r=void 0===(r=i[2])?e:r,!1===o()))return;if(7===u)return l}}(t),e&&(this._cache[t]=e)),e||[]},P.prototype.getPathValue=function(t,e){if(!o(t))return null;var n=this.parsePath(e);if(0===n.length)return null;for(var r=n.length,a=t,i=0;i<r;){var s=a[n[i]];if(null==s)return null;a=s,i++}return a};var A,B=/<\/?[\w\s="/.':;#-\/]+>/,V=/(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g,U=/^@(?:\.([a-zA-Z]+))?:/,z=/[()]/g,G={upper:function(t){return t.toLocaleUpperCase()},lower:function(t){return t.toLocaleLowerCase()},capitalize:function(t){return""+t.charAt(0).toLocaleUpperCase()+t.substr(1)}},J=new j,Z=function(t){var e=this;void 0===t&&(t={}),!$&&"undefined"!=typeof window&&window.Vue&&W(window.Vue);var n=t.locale||"en-US",r=!1!==t.fallbackLocale&&(t.fallbackLocale||"en-US"),a=t.messages||{},i=t.dateTimeFormats||t.datetimeFormats||{},o=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||J,this._modifiers=t.modifiers||{},this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._fallbackRootWithEmptyString=void 0===t.fallbackRootWithEmptyString||!!t.fallbackRootWithEmptyString,this._formatFallbackMessages=void 0!==t.formatFallbackMessages&&!!t.formatFallbackMessages,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&t.silentTranslationWarn,this._silentFallbackWarn=void 0!==t.silentFallbackWarn&&!!t.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new P,this._dataListeners=new Set,this._componentInstanceCreatedListener=t.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==t.preserveDirectiveContent&&!!t.preserveDirectiveContent,this.pluralizationRules=t.pluralizationRules||{},this._warnHtmlInMessage=t.warnHtmlInMessage||"off",this._postTranslation=t.postTranslation||null,this._escapeParameterHtml=t.escapeParameterHtml||!1,"__VUE_I18N_BRIDGE__"in t&&(this.__VUE_I18N_BRIDGE__=t.__VUE_I18N_BRIDGE__),this.getChoiceIndex=function(t,n){var r=Object.getPrototypeOf(e);if(r&&r.getChoiceIndex)return r.getChoiceIndex.call(e,t,n);var a,i;return e.locale in e.pluralizationRules?e.pluralizationRules[e.locale].apply(e,[t,n]):(a=t,i=n,a=Math.abs(a),2===i?a?a>1?1:0:1:a?Math.min(a,2):0)},this._exist=function(t,n){return!(!t||!n)&&(!h(e._path.getPathValue(t,n))||!!t[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(a).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,a[t])})),this._initVM({locale:n,fallbackLocale:r,messages:a,dateTimeFormats:i,numberFormats:o})},q={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0},sync:{configurable:!0}};Z.prototype._checkLocaleMessage=function(t,e,n){var r=function(t,e,n,a){if(u(n))Object.keys(n).forEach((function(i){var o=n[i];u(o)?(a.push(i),a.push("."),r(t,e,o,a),a.pop(),a.pop()):(a.push(i),r(t,e,o,a),a.pop())}));else if(i(n))n.forEach((function(n,i){u(n)?(a.push("["+i+"]"),a.push("."),r(t,e,n,a),a.pop(),a.pop()):(a.push("["+i+"]"),r(t,e,n,a),a.pop())}));else if(s(n)){if(B.test(n))a.join("")}};r(e,t,n,[])},Z.prototype._initVM=function(t){var e=$.config.silent;$.config.silent=!0,this._vm=new $({data:t,__VUE18N__INSTANCE__:!0}),$.config.silent=e},Z.prototype.destroyVM=function(){this._vm.$destroy()},Z.prototype.subscribeDataChanging=function(t){this._dataListeners.add(t)},Z.prototype.unsubscribeDataChanging=function(t){!function(t,e){if(t.delete(e));}(this._dataListeners,t)},Z.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var e,n,r=(e=t._dataListeners,n=[],e.forEach((function(t){return n.push(t)})),n),a=r.length;a--;)$.nextTick((function(){r[a]&&r[a].$forceUpdate()}))}),{deep:!0})},Z.prototype.watchLocale=function(t){if(t){if(!this.__VUE_I18N_BRIDGE__)return null;var e=this,n=this._vm;return this.vm.$watch("locale",(function(r){n.$set(n,"locale",r),e.__VUE_I18N_BRIDGE__&&t&&(t.locale.value=r),n.$forceUpdate()}),{immediate:!0})}if(!this._sync||!this._root)return null;var r=this._vm;return this._root.$i18n.vm.$watch("locale",(function(t){r.$set(r,"locale",t),r.$forceUpdate()}),{immediate:!0})},Z.prototype.onComponentInstanceCreated=function(t){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(t,this)},q.vm.get=function(){return this._vm},q.messages.get=function(){return _(this._getMessages())},q.dateTimeFormats.get=function(){return _(this._getDateTimeFormats())},q.numberFormats.get=function(){return _(this._getNumberFormats())},q.availableLocales.get=function(){return Object.keys(this.messages).sort()},q.locale.get=function(){return this._vm.locale},q.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},q.fallbackLocale.get=function(){return this._vm.fallbackLocale},q.fallbackLocale.set=function(t){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",t)},q.formatFallbackMessages.get=function(){return this._formatFallbackMessages},q.formatFallbackMessages.set=function(t){this._formatFallbackMessages=t},q.missing.get=function(){return this._missing},q.missing.set=function(t){this._missing=t},q.formatter.get=function(){return this._formatter},q.formatter.set=function(t){this._formatter=t},q.silentTranslationWarn.get=function(){return this._silentTranslationWarn},q.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},q.silentFallbackWarn.get=function(){return this._silentFallbackWarn},q.silentFallbackWarn.set=function(t){this._silentFallbackWarn=t},q.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},q.preserveDirectiveContent.set=function(t){this._preserveDirectiveContent=t},q.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},q.warnHtmlInMessage.set=function(t){var e=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=t,n!==t&&("warn"===t||"error"===t)){var r=this._getMessages();Object.keys(r).forEach((function(t){e._checkLocaleMessage(t,e._warnHtmlInMessage,r[t])}))}},q.postTranslation.get=function(){return this._postTranslation},q.postTranslation.set=function(t){this._postTranslation=t},q.sync.get=function(){return this._sync},q.sync.set=function(t){this._sync=t},Z.prototype._getMessages=function(){return this._vm.messages},Z.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},Z.prototype._getNumberFormats=function(){return this._vm.numberFormats},Z.prototype._warnDefault=function(t,e,n,r,a,i){if(!h(n))return n;if(this._missing){var o=this._missing.apply(null,[t,e,r,a]);if(s(o))return o}else 0;if(this._formatFallbackMessages){var l=p.apply(void 0,a);return this._render(e,i,l.params,e)}return e},Z.prototype._isFallbackRoot=function(t){return(this._fallbackRootWithEmptyString?!t:h(t))&&!h(this._root)&&this._fallbackRoot},Z.prototype._isSilentFallbackWarn=function(t){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(t):this._silentFallbackWarn},Z.prototype._isSilentFallback=function(t,e){return this._isSilentFallbackWarn(e)&&(this._isFallbackRoot()||t!==this.fallbackLocale)},Z.prototype._isSilentTranslationWarn=function(t){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(t):this._silentTranslationWarn},Z.prototype._interpolate=function(t,e,n,r,a,o,l){if(!e)return null;var c,p=this._path.getPathValue(e,n);if(i(p)||u(p))return p;if(h(p)){if(!u(e))return null;if(!s(c=e[n])&&!f(c))return null}else{if(!s(p)&&!f(p))return null;c=p}return s(c)&&(c.indexOf("@:")>=0||c.indexOf("@.")>=0)&&(c=this._link(t,e,c,r,"raw",o,l)),this._render(c,a,o,n)},Z.prototype._link=function(t,e,n,r,a,o,s){var l=n,c=l.match(V);for(var u in c)if(c.hasOwnProperty(u)){var h=c[u],f=h.match(U),p=f[0],_=f[1],g=h.replace(p,"").replace(z,"");if(m(s,g))return l;s.push(g);var v=this._interpolate(t,e,g,r,"raw"===a?"string":a,"raw"===a?void 0:o,s);if(this._isFallbackRoot(v)){if(!this._root)throw Error("unexpected error");var b=this._root.$i18n;v=b._translate(b._getMessages(),b.locale,b.fallbackLocale,g,r,a,o)}v=this._warnDefault(t,g,v,r,i(o)?o:[o],a),this._modifiers.hasOwnProperty(_)?v=this._modifiers[_](v):G.hasOwnProperty(_)&&(v=G[_](v)),s.pop(),l=v?l.replace(h,v):l}return l},Z.prototype._createMessageContext=function(t,e,n,r){var a=this,s=i(t)?t:[],l=o(t)?t:{},c=this._getMessages(),u=this.locale;return{list:function(t){return s[t]},named:function(t){return l[t]},values:t,formatter:e,path:n,messages:c,locale:u,linked:function(t){return a._interpolate(u,c[u]||{},t,null,r,void 0,[t])}}},Z.prototype._render=function(t,e,n,r){if(f(t))return t(this._createMessageContext(n,this._formatter||J,r,e));var a=this._formatter.interpolate(t,n,r);return a||(a=J.interpolate(t,n,r)),"string"!==e||s(a)?a:a.join("")},Z.prototype._appendItemToChain=function(t,e,n){var r=!1;return m(t,e)||(r=!0,e&&(r="!"!==e[e.length-1],e=e.replace(/!/g,""),t.push(e),n&&n[e]&&(r=n[e]))),r},Z.prototype._appendLocaleToChain=function(t,e,n){var r,a=e.split("-");do{var i=a.join("-");r=this._appendItemToChain(t,i,n),a.splice(-1,1)}while(a.length&&!0===r);return r},Z.prototype._appendBlockToChain=function(t,e,n){for(var r=!0,a=0;a<e.length&&"boolean"==typeof r;a++){var i=e[a];s(i)&&(r=this._appendLocaleToChain(t,i,n))}return r},Z.prototype._getLocaleChain=function(t,e){if(""===t)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[t];if(!n){e||(e=this.fallbackLocale),n=[];for(var r,a=[t];i(a);)a=this._appendBlockToChain(n,a,e);(a=s(r=i(e)?e:o(e)?e.default?e.default:null:e)?[r]:r)&&this._appendBlockToChain(n,a,null),this._localeChainCache[t]=n}return n},Z.prototype._translate=function(t,e,n,r,a,i,o){for(var s,l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var u=l[c];if(!h(s=this._interpolate(u,t[u],r,a,i,o,[r])))return s}return null},Z.prototype._t=function(t,e,n,r){for(var a,i=[],o=arguments.length-4;o-- >0;)i[o]=arguments[o+4];if(!t)return"";var s,l=p.apply(void 0,i);this._escapeParameterHtml&&(l.params=(null!=(s=l.params)&&Object.keys(s).forEach((function(t){"string"==typeof s[t]&&(s[t]=s[t].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"))})),s));var c=l.locale||e,u=this._translate(n,c,this.fallbackLocale,t,r,"string",l.params);if(this._isFallbackRoot(u)){if(!this._root)throw Error("unexpected error");return(a=this._root).$t.apply(a,[t].concat(i))}return u=this._warnDefault(c,t,u,r,i,"string"),this._postTranslation&&null!=u&&(u=this._postTranslation(u,t)),u},Z.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},Z.prototype._i=function(t,e,n,r,a){var i=this._translate(n,e,this.fallbackLocale,t,r,"raw",a);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,a)}return this._warnDefault(e,t,i,r,[a],"raw")},Z.prototype.i=function(t,e,n){return t?(s(e)||(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},Z.prototype._tc=function(t,e,n,r,a){for(var i,o=[],s=arguments.length-5;s-- >0;)o[s]=arguments[s+5];if(!t)return"";void 0===a&&(a=1);var l={count:a,n:a},c=p.apply(void 0,o);return c.params=Object.assign(l,c.params),o=null===c.locale?[c.params]:[c.locale,c.params],this.fetchChoice((i=this)._t.apply(i,[t,e,n,r].concat(o)),a)},Z.prototype.fetchChoice=function(t,e){if(!t||!s(t))return null;var n=t.split("|");return n[e=this.getChoiceIndex(e,n.length)]?n[e].trim():t},Z.prototype.tc=function(t,e){for(var n,r=[],a=arguments.length-2;a-- >0;)r[a]=arguments[a+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},Z.prototype._te=function(t,e,n){for(var r=[],a=arguments.length-3;a-- >0;)r[a]=arguments[a+3];var i=p.apply(void 0,r).locale||e;return this._exist(n[i],t)},Z.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},Z.prototype.getLocaleMessage=function(t){return _(this._vm.messages[t]||{})},Z.prototype.setLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,e)},Z.prototype.mergeLocaleMessage=function(t,e){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(t,this._warnHtmlInMessage,e),this._vm.$set(this._vm.messages,t,b(void 0!==this._vm.messages[t]&&Object.keys(this._vm.messages[t]).length?Object.assign({},this._vm.messages[t]):{},e))},Z.prototype.getDateTimeFormat=function(t){return _(this._vm.dateTimeFormats[t]||{})},Z.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e),this._clearDateTimeFormat(t,e)},Z.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,b(this._vm.dateTimeFormats[t]||{},e)),this._clearDateTimeFormat(t,e)},Z.prototype._clearDateTimeFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},Z.prototype._localizeDateTime=function(t,e,n,r,a,i){for(var o=e,s=r[o],l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var u=l[c];if(o=u,!h(s=r[u])&&!h(s[a]))break}if(h(s)||h(s[a]))return null;var f,p=s[a];if(i)f=new Intl.DateTimeFormat(o,Object.assign({},p,i));else{var _=o+"__"+a;(f=this._dateTimeFormatters[_])||(f=this._dateTimeFormatters[_]=new Intl.DateTimeFormat(o,p))}return f.format(t)},Z.prototype._d=function(t,e,n,r){if(!n)return(r?new Intl.DateTimeFormat(e,r):new Intl.DateTimeFormat(e)).format(t);var a=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n,r);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return a||""},Z.prototype.d=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.locale,i=null,l=null;return 1===e.length?(s(e[0])?i=e[0]:o(e[0])&&(e[0].locale&&(r=e[0].locale),e[0].key&&(i=e[0].key)),l=Object.keys(e[0]).reduce((function(t,n){var r;return m(a,n)?Object.assign({},t,((r={})[n]=e[0][n],r)):t}),null)):2===e.length&&(s(e[0])&&(i=e[0]),s(e[1])&&(r=e[1])),this._d(t,r,i,l)},Z.prototype.getNumberFormat=function(t){return _(this._vm.numberFormats[t]||{})},Z.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e),this._clearNumberFormat(t,e)},Z.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,b(this._vm.numberFormats[t]||{},e)),this._clearNumberFormat(t,e)},Z.prototype._clearNumberFormat=function(t,e){for(var n in e){var r=t+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},Z.prototype._getNumberFormatter=function(t,e,n,r,a,i){for(var o=e,s=r[o],l=this._getLocaleChain(e,n),c=0;c<l.length;c++){var u=l[c];if(o=u,!h(s=r[u])&&!h(s[a]))break}if(h(s)||h(s[a]))return null;var f,p=s[a];if(i)f=new Intl.NumberFormat(o,Object.assign({},p,i));else{var _=o+"__"+a;(f=this._numberFormatters[_])||(f=this._numberFormatters[_]=new Intl.NumberFormat(o,p))}return f},Z.prototype._n=function(t,e,n,r){if(!Z.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var a=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),i=a&&a.format(t);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return i||""},Z.prototype.n=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var a=this.locale,i=null,l=null;return 1===e.length?s(e[0])?i=e[0]:o(e[0])&&(e[0].locale&&(a=e[0].locale),e[0].key&&(i=e[0].key),l=Object.keys(e[0]).reduce((function(t,n){var a;return m(r,n)?Object.assign({},t,((a={})[n]=e[0][n],a)):t}),null)):2===e.length&&(s(e[0])&&(i=e[0]),s(e[1])&&(a=e[1])),this._n(t,a,i,l)},Z.prototype._ntp=function(t,e,n,r){if(!Z.availabilities.numberFormat)return[];if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).formatToParts(t);var a=this._getNumberFormatter(t,e,this.fallbackLocale,this._getNumberFormats(),n,r),i=a&&a.formatToParts(t);if(this._isFallbackRoot(i)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(t,e,n,r)}return i||[]},Object.defineProperties(Z.prototype,q),Object.defineProperty(Z,"availabilities",{get:function(){if(!A){var t="undefined"!=typeof Intl;A={dateTimeFormat:t&&void 0!==Intl.DateTimeFormat,numberFormat:t&&void 0!==Intl.NumberFormat}}return A}}),Z.install=W,Z.version="8.28.2";const Y=Z}}]);