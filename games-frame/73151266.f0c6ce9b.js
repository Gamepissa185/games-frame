"use strict";(self.webpackChunkgames=self.webpackChunkgames||[]).push([[73151266,61633445],{32419662:(t,r,e)=>{var n=e(7360614),o=e(18266330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},27951223:(t,r,e)=>{var n=e(51605112),o=e(19070030),i=e(95403070).f,a=n("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},46631530:(t,r,e)=>{var n=e(67128710).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},14919670:(t,r,e)=>{var n=e(43970111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},95841318:(t,r,e)=>{var n=e(96045656),o=e(56951400),i=e(46426244),a=function(t){return function(r,e,a){var u,c=n(r),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},52881194:(t,r,e)=>{var n=e(41747293),o=e(51605112),i=e(91507392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},26609341:(t,r,e)=>{var n=e(41747293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},46650206:(t,r,e)=>{var n=e(36901702);t.exports=n([].slice)},52884326:(t,r,e)=>{var n=e(36901702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},67870648:(t,r,e)=>{var n=e(87351694),o=e(7360614),i=e(52884326),a=e(51605112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(e){}}(r=u(t),a))?e:c?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},26099920:(t,r,e)=>{var n=e(52892597),o=e(64053887),i=e(41231236),a=e(95403070);t.exports=function(t,r,e){for(var u=o(r),c=a.f,s=i.f,f=0;f<u.length;f++){var l=u[f];n(t,l)||e&&n(e,l)||c(t,l,s(r,l))}}},68484964:(t,r,e)=>{var n=e(51605112)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[n]=!1,"/./"[t](r)}catch(o){}}return!1}},17168880:(t,r,e)=>{var n=e(86919781),o=e(95403070),i=e(39679114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},39679114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},97586135:(t,r,e)=>{var n=e(42734948),o=e(95403070),i=e(39679114);t.exports=function(t,r,e){var a=n(r);a in t?o.f(t,a,i(0,e)):t[a]=e}},37298052:(t,r,e)=>{var n=e(7360614),o=e(95403070),i=e(95056339),a=e(32613072);t.exports=function(t,r,e,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:r;if(n(e)&&i(e,s,u),u.global)c?t[r]=e:a(r,e);else{try{u.unsafe?t[r]&&(c=!0):delete t[r]}catch(f){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},32613072:(t,r,e)=>{var n=e(53317854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},86919781:(t,r,e)=>{var n=e(41747293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},47204154:t=>{var r="object"==typeof document&&document.all,e=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},6180317:(t,r,e)=>{var n=e(53317854),o=e(43970111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},5188113:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},91507392:(t,r,e)=>{var n,o,i=e(53317854),a=e(5188113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},3280748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},92082109:(t,r,e)=>{var n=e(53317854),o=e(41231236).f,i=e(17168880),a=e(37298052),u=e(32613072),c=e(26099920),s=e(14554705);t.exports=function(t,r){var e,f,l,p,v,d=t.target,g=t.global,h=t.stat;if(e=g?n:h?n[d]||u(d,{}):(n[d]||{}).prototype)for(f in r){if(p=r[f],l=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(g?f:d+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,f,p,t)}}},41747293:t=>{t.exports=function(t){try{return!!t()}catch(r){return!0}}},66227007:(t,r,e)=>{e(26974916);var n=e(82121470),o=e(37298052),i=e(87722261),a=e(41747293),u=e(51605112),c=e(17168880),s=u("species"),f=RegExp.prototype;t.exports=function(t,r,e,l){var p=u(t),v=!a((function(){var r={};return r[p]=function(){return 7},7!=""[t](r)})),d=v&&!a((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[s]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return r=!0,null},e[p](""),!r}));if(!v||!d||e){var g=n(/./[p]),h=r(p,""[t],(function(t,r,e,o,a){var u=n(t),c=r.exec;return c===i||c===f.exec?v&&!a?{done:!0,value:g(r,e,o)}:{done:!0,value:u(e,r,o)}:{done:!1}}));o(String.prototype,t,h[0]),o(f,p,h[1])}l&&c(f[p],"sham",!0)}},56522104:(t,r,e)=>{var n=e(72034374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},72034374:(t,r,e)=>{var n=e(41747293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},97246916:(t,r,e)=>{var n=e(72034374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},56676530:(t,r,e)=>{var n=e(86919781),o=e(52892597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},82121470:(t,r,e)=>{var n=e(52884326),o=e(36901702);t.exports=function(t){if("Function"===n(t))return o(t)}},36901702:(t,r,e)=>{var n=e(72034374),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},46435005:(t,r,e)=>{var n=e(53317854),o=e(7360614);t.exports=function(t,r){return arguments.length<2?(e=n[t],o(e)?e:void 0):n[t]&&n[t][r];var e}},97158173:(t,r,e)=>{var n=e(32419662),o=e(63768554);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},45010647:(t,r,e)=>{var n=e(36901702),o=e(42747908),i=Math.floor,a=n("".charAt),u=n("".replace),c=n("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,n,l,p){var v=e+t.length,d=n.length,g=f;return void 0!==l&&(l=o(l),g=s),u(p,g,(function(o,u){var s;switch(a(u,0)){case"$":return"$";case"&":return t;case"`":return c(r,0,e);case"'":return c(r,v);case"<":s=l[c(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>d){var p=i(f/10);return 0===p?o:p<=d?void 0===n[p-1]?a(u,1):n[p-1]+a(u,1):o}s=n[f-1]}return void 0===s?"":s}))}},53317854:function(t,r,e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||this||Function("return this")()},52892597:(t,r,e)=>{var n=e(36901702),o=e(42747908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},74703501:t=>{t.exports={}},15260490:(t,r,e)=>{var n=e(46435005);t.exports=n("document","documentElement")},6164664:(t,r,e)=>{var n=e(86919781),o=e(41747293),i=e(6180317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},75168361:(t,r,e)=>{var n=e(36901702),o=e(41747293),i=e(52884326),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},99642788:(t,r,e)=>{var n=e(36901702),o=e(7360614),i=e(38205465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},77929909:(t,r,e)=>{var n,o,i,a=e(66294811),u=e(53317854),c=e(43970111),s=e(17168880),f=e(52892597),l=e(38205465),p=e(34306200),v=e(74703501),d="Object already initialized",g=u.TypeError,h=u.WeakMap;if(a||l.state){var x=l.state||(l.state=new h);x.get=x.get,x.has=x.has,x.set=x.set,n=function(t,r){if(x.has(t))throw g(d);return r.facade=t,x.set(t,r),r},o=function(t){return x.get(t)||{}},i=function(t){return x.has(t)}}else{var y=p("state");v[y]=!0,n=function(t,r){if(f(t,y))throw g(d);return r.facade=t,s(t,y,r),r},o=function(t){return f(t,y)?t[y]:{}},i=function(t){return f(t,y)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},11243157:(t,r,e)=>{var n=e(52884326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},7360614:(t,r,e)=>{var n=e(47204154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},51404411:(t,r,e)=>{var n=e(36901702),o=e(41747293),i=e(7360614),a=e(67870648),u=e(46435005),c=e(99642788),s=function(){},f=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(s),g=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(r){return!1}},h=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,c(t))}catch(r){return!0}};h.sham=!0,t.exports=!l||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?h:g},14554705:(t,r,e)=>{var n=e(41747293),o=e(7360614),i=/#|\.prototype\./,a=function(t,r){var e=c[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},63768554:t=>{t.exports=function(t){return null==t}},43970111:(t,r,e)=>{var n=e(7360614),o=e(47204154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},97831913:t=>{t.exports=!1},5247850:(t,r,e)=>{var n=e(43970111),o=e(52884326),i=e(51605112)("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[i])?!!r:"RegExp"==o(t))}},64952190:(t,r,e)=>{var n=e(46435005),o=e(7360614),i=e(79347976),a=e(55543307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,u(t))}},46426244:(t,r,e)=>{var n=e(85717466);t.exports=function(t){return n(t.length)}},95056339:(t,r,e)=>{var n=e(36901702),o=e(41747293),i=e(7360614),a=e(52892597),u=e(86919781),c=e(56676530).CONFIGURABLE,s=e(99642788),f=e(77929909),l=f.enforce,p=f.get,v=String,d=Object.defineProperty,g=n("".slice),h=n("".replace),x=n([].join),y=u&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),b=String(String).split("String"),m=t.exports=function(t,r,e){"Symbol("===g(v(r),0,7)&&(r="["+h(v(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!a(t,"name")||c&&t.name!==r)&&(u?d(t,"name",{value:r,configurable:!0}):t.name=r),y&&e&&a(e,"arity")&&t.length!==e.arity&&d(t,"length",{value:e.arity});try{e&&a(e,"constructor")&&e.constructor?u&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=l(t);return a(n,"source")||(n.source=x(b,"string"==typeof r?r:"")),t};Function.prototype.toString=m((function(){return i(this)&&p(this).source||s(this)}),"toString")},13074758:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},61303929:(t,r,e)=>{var n=e(5247850),o=TypeError;t.exports=function(t){if(n(t))throw o("The method doesn't accept regular expressions");return t}},19070030:(t,r,e)=>{var n,o=e(14919670),i=e(26536048),a=e(3280748),u=e(74703501),c=e(15260490),s=e(6180317),f=e(34306200),l="prototype",p="script",v=f("IE_PROTO"),d=function(){},g=function(t){return"<"+p+">"+t+"</"+p+">"},h=function(t){t.write(g("")),t.close();var r=t.parentWindow.Object;return t=null,r},x=function(){try{n=new ActiveXObject("htmlfile")}catch(i){}var t,r,e;x="undefined"!=typeof document?document.domain&&n?h(n):(r=s("iframe"),e="java"+p+":",r.style.display="none",c.appendChild(r),r.src=String(e),(t=r.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):h(n);for(var o=a.length;o--;)delete x[l][a[o]];return x()};u[v]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(d[l]=o(t),e=new d,d[l]=null,e[v]=t):e=x(),void 0===r?e:i.f(e,r)}},26536048:(t,r,e)=>{var n=e(86919781),o=e(74803353),i=e(95403070),a=e(14919670),u=e(96045656),c=e(80181956);r.f=n&&!o?Object.defineProperties:function(t,r){a(t);for(var e,n=u(r),o=c(r),s=o.length,f=0;s>f;)i.f(t,e=o[f++],n[e]);return t}},95403070:(t,r,e)=>{var n=e(86919781),o=e(6164664),i=e(74803353),a=e(14919670),u=e(42734948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";r.f=n?i?function(t,r,e){if(a(t),r=u(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=f(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:p in e?e[p]:n[p],enumerable:l in e?e[l]:n[l],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=u(r),a(e),o)try{return s(t,r,e)}catch(n){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},41231236:(t,r,e)=>{var n=e(86919781),o=e(97246916),i=e(50755296),a=e(39679114),u=e(96045656),c=e(42734948),s=e(52892597),f=e(6164664),l=Object.getOwnPropertyDescriptor;r.f=n?l:function(t,r){if(t=u(t),r=c(r),f)try{return l(t,r)}catch(e){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},57308006:(t,r,e)=>{var n=e(47416324),o=e(3280748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},67525181:(t,r)=>{r.f=Object.getOwnPropertySymbols},79347976:(t,r,e)=>{var n=e(36901702);t.exports=n({}.isPrototypeOf)},47416324:(t,r,e)=>{var n=e(36901702),o=e(52892597),i=e(96045656),a=e(95841318).indexOf,u=e(74703501),c=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&c(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(f,e)||c(f,e));return f}},80181956:(t,r,e)=>{var n=e(47416324),o=e(3280748);t.exports=Object.keys||function(t){return n(t,o)}},50755296:(t,r)=>{var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},92392140:(t,r,e)=>{var n=e(97246916),o=e(7360614),i=e(43970111),a=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!i(u=n(e,t)))return u;if(o(e=t.valueOf)&&!i(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!i(u=n(e,t)))return u;throw a("Can't convert object to primitive value")}},64053887:(t,r,e)=>{var n=e(46435005),o=e(36901702),i=e(57308006),a=e(67525181),u=e(14919670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},66597651:(t,r,e)=>{var n=e(97246916),o=e(14919670),i=e(7360614),a=e(52884326),u=e(87722261),c=TypeError;t.exports=function(t,r){var e=t.exec;if(i(e)){var s=n(e,t,r);return null!==s&&o(s),s}if("RegExp"===a(t))return n(u,t,r);throw c("RegExp#exec called on incompatible receiver")}},87722261:(t,r,e)=>{var n,o,i=e(97246916),a=e(36901702),u=e(53141340),c=e(38567066),s=e(16852999),f=e(74672309),l=e(19070030),p=e(77929909).get,v=e(77309441),d=e(2038173),g=f("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,x=h,y=a("".charAt),b=a("".indexOf),m=a("".replace),S=a("".slice),O=(o=/b*/g,i(h,n=/a/,"a"),i(h,o,"a"),0!==n.lastIndex||0!==o.lastIndex),w=s.BROKEN_CARET,j=void 0!==/()??/.exec("")[1];(O||j||w||v||d)&&(x=function(t){var r,e,n,o,a,s,f,v=this,d=p(v),E=u(t),I=d.raw;if(I)return I.lastIndex=v.lastIndex,r=i(x,I,E),v.lastIndex=I.lastIndex,r;var A=d.groups,P=w&&v.sticky,R=i(c,v),T=v.source,M=0,k=E;if(P&&(R=m(R,"y",""),-1===b(R,"g")&&(R+="g"),k=S(E,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==y(E,v.lastIndex-1))&&(T="(?: "+T+")",k=" "+k,M++),e=new RegExp("^(?:"+T+")",R)),j&&(e=new RegExp("^"+T+"$(?!\\s)",R)),O&&(n=v.lastIndex),o=i(h,P?e:v,k),P?o?(o.input=S(o.input,M),o[0]=S(o[0],M),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:O&&o&&(v.lastIndex=v.global?o.index+o[0].length:n),j&&o&&o.length>1&&i(g,o[0],e,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&A)for(o.groups=s=l(null),a=0;a<A.length;a++)s[(f=A[a])[0]]=o[f[1]];return o}),t.exports=x},38567066:(t,r,e)=>{var n=e(14919670);t.exports=function(){var t=n(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r}},16852999:(t,r,e)=>{var n=e(41747293),o=e(53317854).RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||n((function(){return!o("a","y").sticky})),u=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:i}},77309441:(t,r,e)=>{var n=e(41747293),o=e(53317854).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},2038173:(t,r,e)=>{var n=e(41747293),o=e(53317854).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},62784488:(t,r,e)=>{var n=e(63768554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},34306200:(t,r,e)=>{var n=e(74672309),o=e(89269711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},38205465:(t,r,e)=>{var n=e(53317854),o=e(32613072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},74672309:(t,r,e)=>{var n=e(97831913),o=e(38205465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.32.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},67128710:(t,r,e)=>{var n=e(36901702),o=e(69019303),i=e(53141340),a=e(62784488),u=n("".charAt),c=n("".charCodeAt),s=n("".slice),f=function(t){return function(r,e){var n,f,l=i(a(r)),p=o(e),v=l.length;return p<0||p>=v?t?"":void 0:(n=c(l,p))<55296||n>56319||p+1===v||(f=c(l,p+1))<56320||f>57343?t?u(l,p):n:t?s(l,p,p+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},99536293:(t,r,e)=>{var n=e(91507392),o=e(41747293),i=e(53317854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},56951400:(t,r,e)=>{var n=e(69019303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},96045656:(t,r,e)=>{var n=e(75168361),o=e(62784488);t.exports=function(t){return n(o(t))}},69019303:(t,r,e)=>{var n=e(13074758);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},85717466:(t,r,e)=>{var n=e(69019303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},42747908:(t,r,e)=>{var n=e(62784488),o=Object;t.exports=function(t){return o(n(t))}},77457593:(t,r,e)=>{var n=e(97246916),o=e(43970111),i=e(64952190),a=e(97158173),u=e(92392140),c=e(51605112),s=TypeError,f=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=a(t,f);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),u(t,r)}},42734948:(t,r,e)=>{var n=e(77457593),o=e(64952190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},87351694:(t,r,e)=>{var n={};n[e(51605112)("toStringTag")]="z",t.exports="[object z]"===String(n)},53141340:(t,r,e)=>{var n=e(67870648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},18266330:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},89269711:(t,r,e)=>{var n=e(36901702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},55543307:(t,r,e)=>{var n=e(99536293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},74803353:(t,r,e)=>{var n=e(86919781),o=e(41747293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},66294811:(t,r,e)=>{var n=e(53317854),o=e(7360614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},51605112:(t,r,e)=>{var n=e(53317854),o=e(74672309),i=e(52892597),a=e(89269711),u=e(99536293),c=e(55543307),s=n.Symbol,f=o("wks"),l=c?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},98226699:(t,r,e)=>{var n=e(92082109),o=e(95841318).includes,i=e(41747293),a=e(27951223);n({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},51682772:(t,r,e)=>{var n=e(92082109),o=e(82121470),i=e(95841318).indexOf,a=e(26609341),u=o([].indexOf),c=!!u&&1/u([1],1,-0)<0;n({target:"Array",proto:!0,forced:c||!a("indexOf")},{indexOf:function(t){var r=arguments.length>1?arguments[1]:void 0;return c?u(this,t,r)||0:i(this,t,r)}})},94747042:(t,r,e)=>{var n=e(92082109),o=e(11243157),i=e(51404411),a=e(43970111),u=e(56951400),c=e(46426244),s=e(96045656),f=e(97586135),l=e(51605112),p=e(52881194),v=e(46650206),d=p("slice"),g=l("species"),h=Array,x=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var e,n,l,p=s(this),d=c(p),y=u(t,d),b=u(void 0===r?d:r,d);if(o(p)&&(e=p.constructor,(i(e)&&(e===h||o(e.prototype))||a(e)&&null===(e=e[g]))&&(e=void 0),e===h||void 0===e))return v(p,y,b);for(n=new(void 0===e?h:e)(x(b-y,0)),l=0;y<b;y++,l++)y in p&&f(n,l,p[y]);return n.length=l,n}})},26974916:(t,r,e)=>{var n=e(92082109),o=e(87722261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},327852:(t,r,e)=>{var n,o=e(92082109),i=e(82121470),a=e(41231236).f,u=e(85717466),c=e(53141340),s=e(61303929),f=e(62784488),l=e(68484964),p=e(97831913),v=i("".endsWith),d=i("".slice),g=Math.min,h=l("endsWith");o({target:"String",proto:!0,forced:!!(p||h||(n=a(String.prototype,"endsWith"),!n||n.writable))&&!h},{endsWith:function(t){var r=c(f(this));s(t);var e=arguments.length>1?arguments[1]:void 0,n=r.length,o=void 0===e?n:g(u(e),n),i=c(t);return v?v(r,i,o):d(r,o-i.length,o)===i}})},72132023:(t,r,e)=>{var n=e(92082109),o=e(36901702),i=e(61303929),a=e(62784488),u=e(53141340),c=e(68484964),s=o("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~s(u(a(this)),u(i(t)),arguments.length>1?arguments[1]:void 0)}})},54115306:(t,r,e)=>{var n=e(56522104),o=e(97246916),i=e(36901702),a=e(66227007),u=e(41747293),c=e(14919670),s=e(7360614),f=e(63768554),l=e(69019303),p=e(85717466),v=e(53141340),d=e(62784488),g=e(46631530),h=e(97158173),x=e(45010647),y=e(66597651),b=e(51605112)("replace"),m=Math.max,S=Math.min,O=i([].concat),w=i([].push),j=i("".indexOf),E=i("".slice),I="$0"==="a".replace(/./,"$0"),A=!!/./[b]&&""===/./[b]("a","$0");a("replace",(function(t,r,e){var i=A?"$":"$0";return[function(t,e){var n=d(this),i=f(t)?void 0:h(t,b);return i?o(i,t,n,e):o(r,v(n),t,e)},function(t,o){var a=c(this),u=v(t);if("string"==typeof o&&-1===j(o,i)&&-1===j(o,"$<")){var f=e(r,a,u,o);if(f.done)return f.value}var d=s(o);d||(o=v(o));var h=a.global;if(h){var b=a.unicode;a.lastIndex=0}for(var I=[];;){var A=y(a,u);if(null===A)break;if(w(I,A),!h)break;""===v(A[0])&&(a.lastIndex=g(u,p(a.lastIndex),b))}for(var P,R="",T=0,M=0;M<I.length;M++){for(var k=v((A=I[M])[0]),C=m(S(l(A.index),u.length),0),F=[],$=1;$<A.length;$++)w(F,void 0===(P=A[$])?P:String(P));var W=A.groups;if(d){var D=O([k],F,C,u);void 0!==W&&w(D,W);var _=v(n(o,void 0,D))}else _=x(k,u,C,F,W,o);C>=T&&(R+=E(u,T,C)+_,T=C+k.length)}return R+E(u,T)}]}),!!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!I||A)},26923157:(t,r,e)=>{var n,o=e(92082109),i=e(82121470),a=e(41231236).f,u=e(85717466),c=e(53141340),s=e(61303929),f=e(62784488),l=e(68484964),p=e(97831913),v=i("".startsWith),d=i("".slice),g=Math.min,h=l("startsWith");o({target:"String",proto:!0,forced:!!(p||h||(n=a(String.prototype,"startsWith"),!n||n.writable))&&!h},{startsWith:function(t){var r=c(f(this));s(t);var e=u(g(arguments.length>1?arguments[1]:void 0,r.length)),n=c(t);return v?v(r,n,e):d(r,e,e+n.length)===n}})},73151266:(t,r,e)=>{e.r(r),e.d(r,{default:()=>i,withoutPublicPath:()=>o});e(98226699),e(72132023),e(327852),e(94747042),e(26923157),e(51682772),e(26974916),e(54115306);var n="/games-frame/",o=function(t){return-1!==t.indexOf(n)&&(t=t.replace(n,"/")),t};const i=function(t){return t.includes("//")?(t.endsWith("/")&&(t=t.slice(0,t.length-1)),t+n):(t.startsWith("/")&&(t=t.slice(1)),n+t)}}}]);