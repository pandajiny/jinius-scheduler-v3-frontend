parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c1md":[function(require,module,exports) {
"use strict";var e=[],n=document.querySelectorAll(".nav");if(!n)throw"cannot get nav items";n.forEach(function(n){var t=n.href.slice(n.href.indexOf("#")+1,n.href.length);e.push(document.getElementById(t))});var t=e.map(function(e){return e.offsetTop});window.onscroll=function(){var n=window.pageYOffset,o=t.findIndex(function(e){return e>n});document.querySelectorAll(".nav").forEach(function(e){e.classList.remove("active")});var r=e[o];r&&document.getElementById("nav-"+r.id).classList.add("active")};
},{}]},{},["c1md"], null)
//# sourceMappingURL=/introduce.1725f41d.js.map