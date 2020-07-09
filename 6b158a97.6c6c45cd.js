(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(144)),i={title:"Transloco Optimize"},c={id:"tools/optimize",isDocsHomePage:!1,title:"Transloco Optimize",description:"This library will do the following things:",source:"@site/docs/tools/optimize.mdx",permalink:"/transloco/docs/tools/optimize",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/tools/optimize.mdx",sidebar:"docs",previous:{title:"Validation Translation files",permalink:"/transloco/docs/tools/validator"},next:{title:"Comments for Translators",permalink:"/transloco/docs/tools/comments"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This library will do the following things:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AOT translation file flatting"),Object(a.b)("li",{parentName:"ul"},"Remove translators comments"),Object(a.b)("li",{parentName:"ul"},"Minify the JSON file")),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install @ngneat/transloco-optimize\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Add to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," the following script:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'"scripts": {\n  "transloco:optimize": "transloco-optimize dist/appName/assets/i18n",\n  "build:prod": "ng build --prod && npm run transloco:optimize",\n}\n')),Object(a.b)("p",null,"Then, add the following config ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../config-options#flattenaot"}),"option")," to the application Transloco ",Object(a.b)("inlineCode",{parentName:"p"},"config")," object:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import { environment } from '../environments/environment';\n\n{\n  flatten: {\n    aot: environment.production,\n  },\n};\n")),Object(a.b)("p",null,"You can also use it as a function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import translocoOptimize from '@ngneat/transloco-optimize';\nimport { task } from 'gulp';\n\n// e.g: `${__dirname}/dist/${appName}/assets/i18n`;\nconst pathToLocales = ...\n\ntask('transloco:optimize', function(cb) {\n  translocoOptimize({ dist: pathToLocales }).then(cb);\n});\n")))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);