(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"00ee":function(e,t,a){var n=a("b622"),r=n("toStringTag"),o={};o[r]="z",e.exports="[object z]"===String(o)},"04f8":function(e,t,a){var n=a("2d00"),r=a("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"06cf":function(e,t,a){var n=a("83ab"),r=a("c65b"),o=a("d1e7"),i=a("5c6c"),s=a("fc6a"),c=a("a04b"),u=a("1a2d"),l=a("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=n?d:function(e,t){if(e=s(e),t=c(t),l)try{return d(e,t)}catch(a){}if(u(e,t))return i(!r(o.f,e,t),e[t])}},"07fa":function(e,t,a){var n=a("50c4");e.exports=function(e){return n(e.length)}},"0840":function(e,t,a){},"0cfb":function(e,t,a){var n=a("83ab"),r=a("d039"),o=a("cc12");e.exports=!n&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d26":function(e,t,a){var n=a("e330"),r=Error,o=n("".replace),i=function(e){return String(r(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,c=s.test(i);e.exports=function(e,t){if(c&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=o(e,s,"");return e}},"0d51":function(e,t){var a=String;e.exports=function(e){try{return a(e)}catch(t){return"Object"}}},"13d2":function(e,t,a){var n=a("e330"),r=a("d039"),o=a("1626"),i=a("1a2d"),s=a("83ab"),c=a("5e77").CONFIGURABLE,u=a("8925"),l=a("69f3"),d=l.enforce,f=l.get,p=String,h=Object.defineProperty,m=n("".slice),b=n("".replace),y=n([].join),g=s&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),v=String(String).split("String"),w=e.exports=function(e,t,a){"Symbol("===m(p(t),0,7)&&(t="["+b(p(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(t="get "+t),a&&a.setter&&(t="set "+t),(!i(e,"name")||c&&e.name!==t)&&(s?h(e,"name",{value:t,configurable:!0}):e.name=t),g&&a&&i(a,"arity")&&e.length!==a.arity&&h(e,"length",{value:a.arity});try{a&&i(a,"constructor")&&a.constructor?s&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var n=d(e);return i(n,"source")||(n.source=y(v,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&f(this).source||u(this)}),"toString")},1626:function(e,t,a){var n=a("8ea1"),r=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},"18d5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"child-personal-account-login"},[t("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules},nativeOn:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[t("h3",{staticClass:"text-login-param"},[e._v("Login")]),t("el-form-item",{attrs:{prop:"phone"}},[t("el-input",{ref:"login",attrs:{"prefix-icon":"el-icon-message",placeholder:"Email"},model:{value:e.loginForm.phone,callback:function(t){e.$set(e.loginForm,"phone",t)},expression:"loginForm.phone"}})],1),t("el-form-item",{attrs:{prop:"pass"}},[t("el-input",{staticClass:"input-param",attrs:{"prefix-icon":"el-icon-key",type:"password",placeholder:"Password",autocomplete:"off"},model:{value:e.loginForm.pass,callback:function(t){e.$set(e.loginForm,"pass",t)},expression:"loginForm.pass"}})],1),t("el-form-item",[t("el-button",{staticClass:"text-but-parm",attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v("Sign in")])],1),t("el-form-item",[t("el-button",{staticClass:"text-but-parm",attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[e._v("Sign up")])],1)],1),e._m(0)],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"asset"},[t("img",{attrs:{src:a("8cd4")}})])}];a("d9e2");function o(e){const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}var i={name:"Login",data(){const e=(e,t,a)=>{console.log("value",t),o(t)?a():a(new Error("Incorrect email"))},t=(e,t,a)=>{console.log("value",t),t.length<15?a(new Error("Password must be at least 15 characters")):a()};return{loginForm:{phone:"",pass:""},loginRules:{phone:[{required:!0,trigger:"change",validator:e}],pass:[{required:!0,trigger:"change",validator:t}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0,loginFormVisible:!0,recoveryFormVisible:!1,successRecoveryRequestVisible:!1}},created(){this.$nextTick(()=>{this.$refs.login.focus()})},methods:{handleLogin(){this.$refs.loginForm.validate(e=>{if(!e)return!1;this.loading=!0})}}},s=i,c=(a("24b6"),a("2877")),u=Object(c["a"])(s,n,r,!1,null,null,null);t["default"]=u.exports},"1a2d":function(e,t,a){var n=a("e330"),r=a("7b0b"),o=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(r(e),t)}},"1d80":function(e,t,a){var n=a("7234"),r=TypeError;e.exports=function(e){if(n(e))throw r("Can't call method on "+e);return e}},2199:function(e,t,a){},"23cb":function(e,t,a){var n=a("5926"),r=Math.max,o=Math.min;e.exports=function(e,t){var a=n(e);return a<0?r(a+t,0):o(a,t)}},"23e7":function(e,t,a){var n=a("da84"),r=a("06cf").f,o=a("9112"),i=a("cb2d"),s=a("6374"),c=a("e893"),u=a("94ca");e.exports=function(e,t){var a,l,d,f,p,h,m=e.target,b=e.global,y=e.stat;if(l=b?n:y?n[m]||s(m,{}):(n[m]||{}).prototype,l)for(d in t){if(p=t[d],e.dontCallGetSet?(h=r(l,d),f=h&&h.value):f=l[d],a=u(b?d:m+(y?".":"#")+d,e.forced),!a&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(e.sham||f&&f.sham)&&o(p,"sham",!0),i(l,d,p,e)}}},"241c":function(e,t,a){var n=a("ca84"),r=a("7839"),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},"24b6":function(e,t,a){"use strict";a("0840")},"2ba4":function(e,t,a){var n=a("40d5"),r=Function.prototype,o=r.apply,i=r.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?i.bind(o):function(){return i.apply(o,arguments)})},"2d00":function(e,t,a){var n,r,o=a("da84"),i=a("342f"),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l&&(n=l.split("."),r=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(r=+n[1]))),e.exports=r},"342f":function(e,t){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},"3a9b":function(e,t,a){var n=a("e330");e.exports=n({}.isPrototypeOf)},"3bbe":function(e,t,a){var n=a("1626"),r=String,o=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw o("Can't set "+r(e)+" as a prototype")}},"40d5":function(e,t,a){var n=a("d039");e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"44ad":function(e,t,a){var n=a("e330"),r=a("d039"),o=a("c6b6"),i=Object,s=n("".split);e.exports=r((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?s(e,""):i(e)}:i},"485a":function(e,t,a){var n=a("c65b"),r=a("1626"),o=a("861d"),i=TypeError;e.exports=function(e,t){var a,s;if("string"===t&&r(a=e.toString)&&!o(s=n(a,e)))return s;if(r(a=e.valueOf)&&!o(s=n(a,e)))return s;if("string"!==t&&r(a=e.toString)&&!o(s=n(a,e)))return s;throw i("Can't convert object to primitive value")}},"4d64":function(e,t,a){var n=a("fc6a"),r=a("23cb"),o=a("07fa"),i=function(e){return function(t,a,i){var s,c=n(t),u=o(c),l=r(i,u);if(e&&a!=a){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===a)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},"507f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"user-header"},[t("h1",{staticClass:"h1"},[e._v(" "+e._s(e.UserName)+" ")]),t("a",{staticClass:"links",attrs:{href:e.Tg}},[e._v("Telegram")]),t("el-button",{staticClass:"review-but"},[e._v("Write a post")]),e._m(0)],1),t("div")])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"ava"},[t("img",{attrs:{src:a("d368"),alt:"avatar"}})])}],o={name:"UserPageView",data(){return{UserName:"Super Coon",UserAvatar:"../assets/ava.webp",Tg:"https://t.me/Super_Coon"}}},i=o,s=(a("ef48"),a("2877")),c=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=c.exports},"50c4":function(e,t,a){var n=a("5926"),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},"53e7":function(e,t,a){},5692:function(e,t,a){var n=a("c430"),r=a("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,a){var n=a("d066"),r=a("e330"),o=a("241c"),i=a("7418"),s=a("825a"),c=r([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(s(e)),a=i.f;return a?c(t,a(e)):t}},"577e":function(e,t,a){var n=a("f5df"),r=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},5926:function(e,t,a){var n=a("b42e");e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},"59ed":function(e,t,a){var n=a("1626"),r=a("0d51"),o=TypeError;e.exports=function(e){if(n(e))return e;throw o(r(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,a){var n=a("83ab"),r=a("1a2d"),o=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,s=r(o,"name"),c=s&&"something"===function(){}.name,u=s&&(!n||n&&i(o,"name").configurable);e.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},6374:function(e,t,a){var n=a("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(n,e,{value:t,configurable:!0,writable:!0})}catch(a){n[e]=t}return t}},"69f3":function(e,t,a){var n,r,o,i=a("cdce"),s=a("da84"),c=a("861d"),u=a("9112"),l=a("1a2d"),d=a("c6cd"),f=a("f772"),p=a("d012"),h="Object already initialized",m=s.TypeError,b=s.WeakMap,y=function(e){return o(e)?r(e):n(e,{})},g=function(e){return function(t){var a;if(!c(t)||(a=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return a}};if(i||d.state){var v=d.state||(d.state=new b);v.get=v.get,v.has=v.has,v.set=v.set,n=function(e,t){if(v.has(e))throw m(h);return t.facade=e,v.set(e,t),t},r=function(e){return v.get(e)||{}},o=function(e){return v.has(e)}}else{var w=f("state");p[w]=!0,n=function(e,t){if(l(e,w))throw m(h);return t.facade=e,u(e,w,t),t},r=function(e){return l(e,w)?e[w]:{}},o=function(e){return l(e,w)}}e.exports={set:n,get:r,has:o,enforce:y,getterFor:g}},"6f19":function(e,t,a){var n=a("9112"),r=a("0d26"),o=a("b980"),i=Error.captureStackTrace;e.exports=function(e,t,a,s){o&&(i?i(e,t):n(e,"stack",r(a,s)))}},7156:function(e,t,a){var n=a("1626"),r=a("861d"),o=a("d2bb");e.exports=function(e,t,a){var i,s;return o&&n(i=t.constructor)&&i!==a&&r(s=i.prototype)&&s!==a.prototype&&o(e,s),e}},7234:function(e,t){e.exports=function(e){return null===e||void 0===e}},7282:function(e,t,a){var n=a("e330"),r=a("59ed");e.exports=function(e,t,a){try{return n(r(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(o){}}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,t,a){var n=a("1d80"),r=Object;e.exports=function(e){return r(n(e))}},"825a":function(e,t,a){var n=a("861d"),r=String,o=TypeError;e.exports=function(e){if(n(e))return e;throw o(r(e)+" is not an object")}},"83ab":function(e,t,a){var n=a("d039");e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,a){var n=a("1626"),r=a("8ea1"),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===o}:function(e){return"object"==typeof e?null!==e:n(e)}},8925:function(e,t,a){var n=a("e330"),r=a("1626"),o=a("c6cd"),i=n(Function.toString);r(o.inspectSource)||(o.inspectSource=function(e){return i(e)}),e.exports=o.inspectSource},"8cd4":function(e,t,a){e.exports=a.p+"img/pleased_racoon.925177e1.webp"},"8ea1":function(e,t){var a="object"==typeof document&&document.all,n="undefined"==typeof a&&void 0!==a;e.exports={all:a,IS_HTMLDDA:n}},"90e3":function(e,t,a){var n=a("e330"),r=0,o=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++r+o,36)}},9112:function(e,t,a){var n=a("83ab"),r=a("9bf2"),o=a("5c6c");e.exports=n?function(e,t,a){return r.f(e,t,o(1,a))}:function(e,t,a){return e[t]=a,e}},"94ca":function(e,t,a){var n=a("d039"),r=a("1626"),o=/#|\.prototype\./,i=function(e,t){var a=c[s(e)];return a==l||a!=u&&(r(t)?n(t):!!t)},s=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},9566:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"content-page-header"},[t("article",{staticClass:"Headline big-screen small-screen"},[e._v(" "+e._s(e.Headline)+" ")]),t("article",{staticClass:"MainContent big-screen small-screen"},[e._v(" "+e._s(e.MainContent)+" ")])])])},r=[],o=a("f128"),i={name:"ContentView",data(){return{Headline:"What is a relational database?",MainContent:o.IBM}},methods:{}},s=i,c=(a("d165"),a("2877")),u=Object(c["a"])(s,n,r,!1,null,"7ce58857",null);t["default"]=u.exports},"9bf2":function(e,t,a){var n=a("83ab"),r=a("0cfb"),o=a("aed9"),i=a("825a"),s=a("a04b"),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=n?o?function(e,t,a){if(i(e),t=s(t),i(a),"function"===typeof e&&"prototype"===t&&"value"in a&&p in a&&!a[p]){var n=l(e,t);n&&n[p]&&(e[t]=a.value,a={configurable:f in a?a[f]:n[f],enumerable:d in a?a[d]:n[d],writable:!1})}return u(e,t,a)}:u:function(e,t,a){if(i(e),t=s(t),i(a),r)try{return u(e,t,a)}catch(n){}if("get"in a||"set"in a)throw c("Accessors not supported");return"value"in a&&(e[t]=a.value),e}},a04b:function(e,t,a){var n=a("c04e"),r=a("d9b5");e.exports=function(e){var t=n(e,"string");return r(t)?t:t+""}},ab36:function(e,t,a){var n=a("861d"),r=a("9112");e.exports=function(e,t){n(t)&&"cause"in t&&r(e,"cause",t.cause)}},aeb0:function(e,t,a){var n=a("9bf2").f;e.exports=function(e,t,a){a in e||n(e,a,{configurable:!0,get:function(){return t[a]},set:function(e){t[a]=e}})}},aed9:function(e,t,a){var n=a("83ab"),r=a("d039");e.exports=n&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(e,t){var a=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?n:a)(t)}},b622:function(e,t,a){var n=a("da84"),r=a("5692"),o=a("1a2d"),i=a("90e3"),s=a("04f8"),c=a("fdbf"),u=n.Symbol,l=r("wks"),d=c?u["for"]||u:u&&u.withoutSetter||i;e.exports=function(e){return o(l,e)||(l[e]=s&&o(u,e)?u[e]:d("Symbol."+e)),l[e]}},b980:function(e,t,a){var n=a("d039"),r=a("5c6c");e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",r(1,7)),7!==e.stack)}))},c04e:function(e,t,a){var n=a("c65b"),r=a("861d"),o=a("d9b5"),i=a("dc4a"),s=a("485a"),c=a("b622"),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!r(e)||o(e))return e;var a,c=i(e,l);if(c){if(void 0===t&&(t="default"),a=n(c,e,t),!r(a)||o(a))return a;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,a){var n=a("40d5"),r=Function.prototype.call;e.exports=n?r.bind(r):function(){return r.apply(r,arguments)}},c6b6:function(e,t,a){var n=a("e330"),r=n({}.toString),o=n("".slice);e.exports=function(e){return o(r(e),8,-1)}},c6cd:function(e,t,a){var n=a("da84"),r=a("6374"),o="__core-js_shared__",i=n[o]||r(o,{});e.exports=i},ca84:function(e,t,a){var n=a("e330"),r=a("1a2d"),o=a("fc6a"),i=a("4d64").indexOf,s=a("d012"),c=n([].push);e.exports=function(e,t){var a,n=o(e),u=0,l=[];for(a in n)!r(s,a)&&r(n,a)&&c(l,a);while(t.length>u)r(n,a=t[u++])&&(~i(l,a)||c(l,a));return l}},cb2d:function(e,t,a){var n=a("1626"),r=a("9bf2"),o=a("13d2"),i=a("6374");e.exports=function(e,t,a,s){s||(s={});var c=s.enumerable,u=void 0!==s.name?s.name:t;if(n(a)&&o(a,u,s),s.global)c?e[t]=a:i(t,a);else{try{s.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=a:r.f(e,t,{value:a,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},cc12:function(e,t,a){var n=a("da84"),r=a("861d"),o=n.document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},cdce:function(e,t,a){var n=a("da84"),r=a("1626"),o=n.WeakMap;e.exports=r(o)&&/native code/.test(String(o))},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,a){var n=a("da84"),r=a("1626"),o=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(n[e]):n[e]&&n[e][t]}},d165:function(e,t,a){"use strict";a("2199")},d1e7:function(e,t,a){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},d2bb:function(e,t,a){var n=a("7282"),r=a("825a"),o=a("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,a={};try{e=n(Object.prototype,"__proto__","set"),e(a,[]),t=a instanceof Array}catch(i){}return function(a,n){return r(a),o(n),t?e(a,n):a.__proto__=n,a}}():void 0)},d368:function(e,t,a){e.exports=a.p+"img/ava.d5d25ec0.webp"},d9b5:function(e,t,a){var n=a("d066"),r=a("1626"),o=a("3a9b"),i=a("fdbf"),s=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return r(t)&&o(t.prototype,s(e))}},d9e2:function(e,t,a){var n=a("23e7"),r=a("da84"),o=a("2ba4"),i=a("e5cb"),s="WebAssembly",c=r[s],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var a={};a[e]=i(e,t,u),n({global:!0,constructor:!0,arity:1,forced:u},a)},d=function(e,t){if(c&&c[e]){var a={};a[e]=i(s+"."+e,t,u),n({target:s,stat:!0,constructor:!0,arity:1,forced:u},a)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),d("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),d("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),d("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},da84:function(e,t,a){(function(t){var a=function(e){return e&&e.Math==Math&&e};e.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,a("c8ba"))},dc4a:function(e,t,a){var n=a("59ed"),r=a("7234");e.exports=function(e,t){var a=e[t];return r(a)?void 0:n(a)}},e330:function(e,t,a){var n=a("40d5"),r=Function.prototype,o=r.call,i=n&&r.bind.bind(o,o);e.exports=n?i:function(e){return function(){return o.apply(e,arguments)}}},e391:function(e,t,a){var n=a("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},e5cb:function(e,t,a){"use strict";var n=a("d066"),r=a("1a2d"),o=a("9112"),i=a("3a9b"),s=a("d2bb"),c=a("e893"),u=a("aeb0"),l=a("7156"),d=a("e391"),f=a("ab36"),p=a("6f19"),h=a("83ab"),m=a("c430");e.exports=function(e,t,a,b){var y="stackTraceLimit",g=b?2:1,v=e.split("."),w=v[v.length-1],x=n.apply(null,v);if(x){var S=x.prototype;if(!m&&r(S,"cause")&&delete S.cause,!a)return x;var T=n("Error"),k=t((function(e,t){var a=d(b?t:e,void 0),n=b?new x(e):new x;return void 0!==a&&o(n,"message",a),p(n,k,n.stack,2),this&&i(S,this)&&l(n,this,k),arguments.length>g&&f(n,arguments[g]),n}));if(k.prototype=S,"Error"!==w?s?s(k,T):c(k,T,{name:!0}):h&&y in x&&(u(k,x,y),u(k,x,"prepareStackTrace")),c(k,x),!m)try{S.name!==w&&o(S,"name",w),S.constructor=k}catch(O){}return k}}},e893:function(e,t,a){var n=a("1a2d"),r=a("56ef"),o=a("06cf"),i=a("9bf2");e.exports=function(e,t,a){for(var s=r(t),c=i.f,u=o.f,l=0;l<s.length;l++){var d=s[l];n(e,d)||a&&n(a,d)||c(e,d,u(t,d))}}},ef48:function(e,t,a){"use strict";a("53e7")},f128:function(e){e.exports=JSON.parse('{"IBM":"What is a relational database? A relational database organizes data into rows and columns, which collectively form a table. Data is typically structured across multiple tables, which can be joined together via a primary key or a foreign key. These unique identifiers demonstrate the different relationships which exist between tables, and these relationships are usually illustrated through different types of data models. Analysts use SQL queries to combine different data points and summarize business performance, allowing organizations to gain insights, optimize workflows, and identify new opportunities. For example, imagine your company maintains a database table with customer information, which contains company data at the account level. There may also be a different table, which describes all the individual transactions that align to that account. Together, these tables can provide information about the different industries that purchase a specific software product. The columns (or fields) for the customer table might be Customer ID, Company Name, Company Address, Industry etc.; the columns for a transaction table might be Transaction Date, Customer ID, Transaction Amount, Payment Method, etc. The tables can be joined together with the common Customer ID field. You can, therefore, query the table to produce valuable reports, such as a sales reports by industry or company, which can inform messaging to prospective clients. Relational databases are also typically associated with transactional databases, which execute commands, or transactions, collectively. A popular example that is used to illustrate this is a bank transfer. A defined amount is withdrawn from one account, and then it is deposited within another. The total amount of money is withdrawn and deposited, and this transaction cannot occur in any kind of partial sense. Transactions have specific properties. Represented by the acronym, ACID, ACID properties are defined as: Atomicity: All changes to data are performed as if they are a single operation. That is, all the changes are performed, or none of them are. onsistency: Data remains in a consistent state from state to finish, reinforcing data integrity. Isolation: The intermediate state of a transaction is not visible to other transactions, and as a result, transactions that run concurrently appear to be serialized. Durability: After the successful completion of a transaction, changes to data persist and are not undone, even in the event of a system failure. These properties enable reliable transaction processing. Relational database vs. relational database management system While a relational database organizes data based off a relational data model, a relational database management system (RDBMS) is a more specific reference to the underlying database software that enables users to maintain it. These programs allow users to create, update, insert, or delete data in the system, and they provide: Data structure Multi-user access Privilege control Network access Examples of popular RDBMS systems include MySQL, PostgreSQL, and IBM DB2. Additionally, a relational database system differs from a basic database management system (DBMS) in that it stores data in tables while a DBMS stores information as files. What is SQL? Invented by Don Chamberlin and Ray Boyce at IBM, Structured Query Language (SQL) is the standard programming language for interacting with relational database management systems, allowing database administrator to add, update, or delete rows of data easily. Originally known as SEQUEL, it was simplified to SQL due to a trademark issue. SQL queries also allows users to retrieve data from databases using only a few lines of code. Given this relationship, it’s easy to see why relational databases are also referred to as “SQL databases” at times. Using the example from above, you might construct a query to find the top 10 transactions by company for a specific year with the following code: SELECT COMPANY_NAME, SUM(TRANSACTION_AMOUNT) FROM TRANSACTION_TABLE A LEFT JOIN CUSTOMER_TABLE B ON A.CUSTOMER_ID = B.CUSTOMER_ID WHERE YEAR(DATE) = 2022 GROUP BY 1 ORDER BY 2 DESC LIMIT 10 The ability to join data in this way helps us to reduce redundancy within our data systems, allowing data teams to maintain one master table for customers versus duplicating this information if there was another transaction in the future. To learn more, Don details more of the history of SQL in his paper here (link resides outside IBM). A brief history of relational databases. Before relational databases, companies used a hierarchical database system with a tree-like structure for the data tables. These early database management systems (DBMS) enabled users to organize large quantities of data. However, they were complex, often proprietary to a particular application, and limited in the ways in which they could uncover within the data. These limitations eventually led IBM researcher, Edgar F. Codd, to publish a paper (link resides outside IBM) (PDF, 1.5 MB) in 1970, titled A Relational Model of Data for Large Shared Data Banks,” which theorized the relational database model. In this proposed model, information could be retrieved without specialized computer knowledge. He proposed arranging data based on meaningful relationships as tuples, or attribute-value pairs. Sets of tuples were referred to as relations, which ultimately enabled the merging of data across tables. In 1973, the San Jose Research Laboratory—now known as the Almaden Research Center—began a program called System R (R for relational) to prove this relational theory with what it called “an industrial-strength implementation.” It ultimately became a testing ground for SQL as well, enabling it to become more widely adopted in a short period of time. However, Oracles adoption of SQL also didn’t hurt its popularity with database administrators. By 1983, IBM introduced the DB2 family of relational databases, so named because it was IBMs second family of database management software. Today, it is one of IBM’s most successful products, continuing to handle billions of transactions every day on cloud infrastructure and setting the foundational layer for machine learning applications. To read more about IBMs history, click here. Relational vs. non-relational databases While relational databases structure data into a tabular format, non-relational databases do not have as rigid of a database schema. In fact, non-relational databases organize data differently based on the type of database. Irrespective of the type of non-relational database, they all aim to solve for the flexibility and scalability issues inherent in relational models which are not ideal for unstructured data formats, like text, video, and images. These types of databases include: Key-value store: This schema-less data model is organized into a dictionary of key-value pairs, where each item has a key and a value. The key could be like something similar found in a SQL database, like a shopping cart ID, while the value is an array of data, like each individual item in that user’s shopping cart. It’s commonly used for caching and storing user session information, such as shopping carts. However, its not ideal when you need to pull multiple records at a time. Redis and Memcached are examples of open-source databases with this data model. Document store: As suggested by the name, document databases store data as documents. They can be helpful in managing semi-structured data, and data are typically stored in JSON, XML, or BSON formats. This keeps the data together when it is used in applications, reducing the amount of translation needed to use the data. Developers also gain more flexibility since data schemas do not need to match across documents (e.g. name vs. first_name). However, this can be problematic for complex transactions, leading to data corruption. Popular use cases of document databases include content management systems and user profiles. An example of a document-oriented database is MongoDB, the database component of the MEAN stack. Wide-column store: These databases store information in columns, enabling users to access only the specific columns they need without allocating additional memory on irrelevant data. This database tries to solve for the shortcomings of key-value and document stores, but since it can be a more complex system to manage, it is not recommended for use for newer teams and projects. Apache HBase and Apache Cassandra are examples of open-source, wide-column databases. Apache HBase is built on top of Hadoop Distributed Files System that provides a way of storing sparse data sets, which is commonly used in many big data applications. Apache Cassandra, on the other hand, has been designed to manage large amounts of data across multiple servers and clustering that spans multiple data centers. It’s been used for a variety of use cases, such as social networking websites and real-time data analytics. Graph store: This type of database typically houses data from a knowledge graph. Data elements are stored as nodes, edges and properties. Any object, place, or person can be a node. An edge defines the relationship between the nodes. Graph databases are used for storing and managing a network of connections between elements within the graph. Neo4j (link resides outside IBM), a graph-based database service based on Java with an open-source community edition where users can purchase licenses for online backup and high availability extensions, or pre-package licensed version with backup and extensions included. NoSQL databases also prioritize availability over consistency. When computers run over a network, they invariably need to decide to prioritize consistent results (where every answer is always the same) or high uptime, called availability. This is called the CAP Theory, which stands for Consistency, Availability, or Partition Tolerance. Relational databases ensure the information is always in-sync and consistent. Some NoSQL databases, like Redis, prefer to always provide a response. That means the information you receive from a query may be incorrect by a few seconds—perhaps up to half a minute. On social media sites, this means seeing an old profile picture when the newest one is only a few moments old. The alternative could be a timeout or error. On the other hand, in banking and financial transactions, an error and resubmit may be better than old, incorrect information. For a full rundown of the differences between SQL and NoSQL, see SQL vs. NoSQL Databases: Whats the Difference? Benefits of relational databases The primary benefit of the relational database approach is the ability to create meaningful information by joining the tables. Joining tables allows you to understand the relations between the data, or how the tables connect. SQL includes the ability to count, add, group, and also combine queries. SQL can perform basic math and subtotal functions and logical transformations. Analysts can order the results by date, name, or any column. These features make the relational approach the single most popular query tool in business today. Relational databases have several advantages compared to other database formats: Ease of Use By virtue of its product lifespan, there is more of a community around relational databases, which partially perpetuates its continued use. SQL also makes it easy to retrieve datasets from multiple tables and perform simple transformations such as filtering and aggregation. The use of indices within relational databases also allows them to locate this information quickly without searching each row in the selected table. While relational databases have historically been viewed as a more rigid and inflexible data storage option, advances in technology and DBaaS options are changing that perception. While there is still more overhead to develop schemas compared to NoSQL database offerings, relational databases are becoming more flexible as they migrate to cloud environments. Reduced redundancy Relational databases can eliminate redundancy in two ways. The relational model itself reduces data redundancy via a process known as normalization. As noted earlier, a customer table should only log unique records of customer information versus duplicating this information for multiple transactions. Stored procedures also help to reduce repetitive work. For example, if database access is restricted to certain roles, functions or teams, a stored procedure can help to manage access-control. These reusable functions free up coveted application developer time to tackle high impact work. Ease of backup and disaster recovery Relational databases are transactional—they guarantee the state of the entire system is consistent at any moment. Most relational databases offer easy export and import options, making backup and restore trivial. These exports can happen even while the database is running, making restore on failure easy. Modern, cloud-based relational databases can do continuous mirroring, making the loss of data on restore measured in seconds or less. Most cloud-managed services allow you to create Read Replicas, like in IBM Cloud® Databases for PostgreSQL. These Read Replicas enable you to store a read-only copy of your data in a cloud data center. Replicas can be promoted to Read/Write instances for disaster recovery as well."}')},f5df:function(e,t,a){var n=a("00ee"),r=a("1626"),o=a("c6b6"),i=a("b622"),s=i("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(a){}};e.exports=n?o:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=l(t=c(e),s))?a:u?o(t):"Object"==(n=o(t))&&r(t.callee)?"Arguments":n}},f772:function(e,t,a){var n=a("5692"),r=a("90e3"),o=n("keys");e.exports=function(e){return o[e]||(o[e]=r(e))}},fc6a:function(e,t,a){var n=a("44ad"),r=a("1d80");e.exports=function(e){return n(r(e))}},fdbf:function(e,t,a){var n=a("04f8");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=login.8fbc5092.js.map