(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(144)),l={title:"Additional Functionality"},c={id:"additional-functionality",isDocsHomePage:!1,title:"Additional Functionality",description:"Reference Other Keys",source:"@site/docs/additional-functionality.mdx",permalink:"/transloco/docs/additional-functionality",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/additional-functionality.mdx",sidebar:"docs",previous:{title:"Multiple Languages Simultaneously",permalink:"/transloco/docs/multi-lang"},next:{title:"Loading Template",permalink:"/transloco/docs/loading-template"}},i=[{value:"Reference Other Keys",id:"reference-other-keys",children:[]},{value:"<code>translate()</code>",id:"translate",children:[]},{value:"<code>getBrowserLang()</code>",id:"getbrowserlang",children:[]},{value:"<code>getBrowserCultureLang()</code>",id:"getbrowserculturelang",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"reference-other-keys"},"Reference Other Keys"),Object(o.b)("p",null,"You can point to specific keys in other keys from the same translation file. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "alert": "alert {{value}} english",\n  "home": "home english",\n  "fromList": "from {{home}}"\n}\n')),Object(o.b)("p",null,"So the result of ",Object(o.b)("inlineCode",{parentName:"p"},"service.translate('fromList')"),' will be: "from home english".'),Object(o.b)("p",null,"When using this feature inside a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://ngneat.github.io/transloco/docs/scope-configuration"}),"scope"),", make sure you prefix the key reference with the scope name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="admin/en.json"',title:'"admin/en.json"'}),'{\n  "alert": "alert {{value}} english",\n  "home": "home english",\n  "fromList": "from {{admin.home}}"\n}\n')),Object(o.b)("p",null,"So the result of ",Object(o.b)("inlineCode",{parentName:"p"},"service.translate('admin.fromList')"),' will be: "from home english".'),Object(o.b)("p",null,"You can also pass parameters to the reused key. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "hello": "Hello {{name}},",\n  "greet": "{{hello}}, have a good day!"\n}\n')),Object(o.b)("p",null,"So the result of ",Object(o.b)("inlineCode",{parentName:"p"},"service.translate('greet', {name: 'John'})"),' will be: "Hello John, have a good day!".'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Watch out from creating circular referencing!")," For Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="en.json"',title:'"en.json"'}),'{\n  "key": "{{key2}}",\n  "key2": "{{key}}"\n}\n')),Object(o.b)("h3",{id:"translate"},Object(o.b)("inlineCode",{parentName:"h3"},"translate()")),Object(o.b)("p",null,"You don't have to inject the service each time you need to translate a key. Transloco has an exported ",Object(o.b)("inlineCode",{parentName:"p"},"translate()")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { translate } from '@ngneat/transloco';\n\ntranslate('hello');\n")),Object(o.b)("h3",{id:"getbrowserlang"},Object(o.b)("inlineCode",{parentName:"h3"},"getBrowserLang()")),Object(o.b)("p",null,"Returns the language code name from the browser, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"en"')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { getBrowserLang } from '@ngneat/transloco';\n\ngetBrowserLang();\n")),Object(o.b)("h3",{id:"getbrowserculturelang"},Object(o.b)("inlineCode",{parentName:"h3"},"getBrowserCultureLang()")),Object(o.b)("p",null,"Returns the culture language code name from the browser, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'"en-US"')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { getBrowserCultureLang } from '@ngneat/transloco';\n\ngetBrowserCultureLang()\n")))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);