parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ooTL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SIGNUP_PATH=exports.LOGIN_PATH=exports.HOME_PATH=exports.navigateTo=void 0,exports.navigateTo=function(e){window.location.pathname=e},exports.HOME_PATH="index.html",exports.LOGIN_PATH="login.html",exports.SIGNUP_PATH="signup.html";
},{}],"Zmr0":[function(require,module,exports) {
"use strict";var e,t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.serverUrl=exports.renderUserState=exports.renderNavigator=void 0;var r=require("../constants/paths"),o=require("./auth");exports.renderNavigator=function(e){var t=document.getElementById("navigator");t.innerHTML="",e.map(function(e){var n=document.createElement("a");n.id="nav-item",n.appendChild(document.createTextNode(e.title)),n.addEventListener("click",function(){return r.navigateTo(e.pathname)}),t.appendChild(n)})},exports.renderUserState=function(){return t(void 0,void 0,void 0,function(){var e,t,a,i,c,u;return n(this,function(n){switch(n.label){case 0:return(e=document.getElementById("user-state")).innerHTML="",[4,o.getUser()];case 1:return t=n.sent(),console.log("got user state",t),t?((c=document.createElement("p")).appendChild(document.createTextNode("email : "+t.email)),e.appendChild(c),(u=document.createElement("button")).appendChild(document.createTextNode("SIGNOUT")),u.addEventListener("click",function(){o.doSignOut().then(function(){window.location.reload()})}),e.appendChild(u)):((a=document.createElement("div")).appendChild(document.createTextNode("please login first")),e.appendChild(a),(i=document.createElement("button")).appendChild(document.createTextNode("LOGIN")),i.addEventListener("click",function(){r.navigateTo(r.LOGIN_PATH)}),e.appendChild(i)),[2]}})})},exports.serverUrl=(null===(e="production")||void 0===e?void 0:e.includes("LOCAL"))?"http://localhost:5001/":"http://115.85.182.164:5001/";
},{"../constants/paths":"ooTL","./auth":"N5Xg"}],"N5Xg":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(t){i(t)}}function u(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,u)}a((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAuthPostOption=exports.createPostOption=exports.getAuthHeader=exports.getProfile=exports.getUser=exports.doSignUp=exports.doSignOut=exports.doLogin=void 0;var n=require("./App");exports.doLogin=function(r){return e(void 0,void 0,void 0,function(){var e,o;return t(this,function(t){switch(t.label){case 0:return console.log(n.serverUrl),e=n.serverUrl+"auth/login",console.log(JSON.stringify(r)),[4,fetch(e,exports.createPostOption(r))];case 1:return[4,t.sent().json()];case 2:return o=t.sent(),console.log(o.access_token),localStorage.setItem("jwtToken",o.access_token),[2]}})})},exports.doSignOut=function(){return e(void 0,void 0,void 0,function(){return t(this,function(e){return localStorage.removeItem("jwtToken"),[2]})})},exports.doSignUp=function(r){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"auth/signup",[4,fetch(e,exports.createPostOption(r))];case 1:return t.sent().json().then(function(e){return console.log(e)}),[2]}})})},exports.getUser=function(){return e(void 0,void 0,Promise,function(){var e,r;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"auth/user",[4,fetch(e,{headers:exports.getAuthHeader()})];case 1:return[4,t.sent().json()];case 2:return[2,(r=t.sent()).email&&r.uid?r:null]}})})},exports.getProfile=function(){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){return e=n.serverUrl+"profile",fetch(e,{headers:exports.getAuthHeader()}).then(function(e){console.log(e),e.json().then(function(e){console.log(e)})}),[2]})})},exports.getAuthHeader=function(){var e=localStorage.getItem("jwtToken");return console.log("auth token",e),{Authorization:"Bearer "+e}},exports.createPostOption=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},exports.createAuthPostOption=function(e){return{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("jwtToken"),"Content-Type":"application/json"},body:JSON.stringify(e)}};
},{"./App":"Zmr0"}],"O5WP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../auth"),t=document.getElementById("email-input"),n=document.getElementById("password-input"),r=document.getElementById("password-confirm"),o=document.getElementById("signup-button"),a=function(e){var t=e.email,n=e.password,r=e.passwordConfirm;return!!t&&(!!n&&!(!r||n!=r))};o.addEventListener("click",function(){var o=t.value,d=n.value,s=r.value;a({email:o,password:d,passwordConfirm:s})&&e.doSignUp({email:o,_password:d})});
},{"../auth":"N5Xg"}]},{},["O5WP"], null)
//# sourceMappingURL=/signup.6b40acc3.js.map