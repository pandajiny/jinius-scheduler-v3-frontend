parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ooTL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SIGNUP_PATH=exports.LOGIN_PATH=exports.HOME_PATH=exports.navigateTo=void 0,exports.navigateTo=function(e){window.location.pathname=e},exports.HOME_PATH="index.html",exports.LOGIN_PATH="login.html",exports.SIGNUP_PATH="signup.html";
},{}],"N5Xg":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(t){i(t)}}function u(e){try{a(r.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,u)}a((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAuthPostOption=exports.createPostOption=exports.getAuthHeader=exports.getProfile=exports.getUser=exports.doSignUp=exports.doSignOut=exports.doLogin=void 0;var n=require("./App");exports.doLogin=function(r){return e(void 0,void 0,void 0,function(){var e,o;return t(this,function(t){switch(t.label){case 0:return console.log(n.serverUrl),e=n.serverUrl+"auth/login",console.log(JSON.stringify(r)),[4,fetch(e,exports.createPostOption(r))];case 1:return[4,t.sent().json()];case 2:return o=t.sent(),console.log(o.access_token),localStorage.setItem("jwtToken",o.access_token),[2]}})})},exports.doSignOut=function(){return e(void 0,void 0,void 0,function(){return t(this,function(e){return localStorage.removeItem("jwtToken"),[2]})})},exports.doSignUp=function(r){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"auth/signup",[4,fetch(e,exports.createPostOption(r))];case 1:return t.sent().json().then(function(e){return console.log(e)}),[2]}})})},exports.getUser=function(){return e(void 0,void 0,Promise,function(){var e,r;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"auth/user",[4,fetch(e,{headers:exports.getAuthHeader()})];case 1:return[4,t.sent().json()];case 2:return[2,(r=t.sent()).email&&r.uid?r:null]}})})},exports.getProfile=function(){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){return e=n.serverUrl+"profile",fetch(e,{headers:exports.getAuthHeader()}).then(function(e){console.log(e),e.json().then(function(e){console.log(e)})}),[2]})})},exports.getAuthHeader=function(){var e=localStorage.getItem("jwtToken");return console.log("auth token",e),{Authorization:"Bearer "+e}},exports.createPostOption=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},exports.createAuthPostOption=function(e){return{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("jwtToken"),"Content-Type":"application/json"},body:JSON.stringify(e)}};
},{"./App":"Zmr0"}],"Zmr0":[function(require,module,exports) {
"use strict";var e,t=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}u((r=r.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.serverUrl=exports.renderUserState=exports.renderNavigator=void 0;var r=require("../constants/paths"),o=require("./auth");exports.renderNavigator=function(e){var t=document.getElementById("navigator");t.innerHTML="",e.map(function(e){var n=document.createElement("a");n.id="nav-item",n.appendChild(document.createTextNode(e.title)),n.addEventListener("click",function(){return r.navigateTo(e.pathname)}),t.appendChild(n)})},exports.renderUserState=function(){return t(void 0,void 0,void 0,function(){var e,t,a,i,c,u;return n(this,function(n){switch(n.label){case 0:return(e=document.getElementById("user-state")).innerHTML="",[4,o.getUser()];case 1:return t=n.sent(),console.log("got user state",t),t?((c=document.createElement("p")).appendChild(document.createTextNode("email : "+t.email)),e.appendChild(c),(u=document.createElement("button")).appendChild(document.createTextNode("SIGNOUT")),u.addEventListener("click",function(){o.doSignOut().then(function(){window.location.reload()})}),e.appendChild(u)):((a=document.createElement("div")).appendChild(document.createTextNode("please login first")),e.appendChild(a),(i=document.createElement("button")).appendChild(document.createTextNode("LOGIN")),i.addEventListener("click",function(){r.navigateTo(r.LOGIN_PATH)}),e.appendChild(i)),[2]}})})},exports.serverUrl=(null===(e="production")||void 0===e?void 0:e.includes("LOCAL"))?"http://localhost:5001/":"http://115.85.182.164:5001/";
},{"../constants/paths":"ooTL","./auth":"N5Xg"}],"cnZl":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(n,s){function i(e){try{a(o.next(e))}catch(t){s(t)}}function u(e){try{a(o.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,u)}a((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteTodoItem=exports.addTodoItem=exports.getTodoItems=void 0;var r=require("./App"),o=require("./auth");exports.getTodoItems=function(){return e(void 0,void 0,Promise,function(){var e,n,s;return t(this,function(t){switch(t.label){case 0:return console.log("get todoItems"),e=r.serverUrl+"todo",console.log("header",o.getAuthHeader()),[4,fetch(e,{method:"GET",headers:o.getAuthHeader()})];case 1:return n=t.sent(),console.log(n.ok),n.ok?[4,n.json()]:[2,[]];case 2:return s=t.sent(),console.log("todoItems :",s),[2,s]}})})},exports.addTodoItem=function(n,s){return e(void 0,void 0,Promise,function(){var i,u,a;return t(this,function(c){switch(c.label){case 0:return console.log("adding todo"),i=r.serverUrl+"todo",[4,o.getUser()];case 1:if(!(u=c.sent()))throw new Error("please login first");if(console.log(u),!u.uid)throw new Error("cannot get user's uid");return a={content:n,parentId:s,isComplete:!1,owner:u.uid},[4,fetch(i,o.createAuthPostOption(a)).then(function(r){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,r.json()];case 1:return[2,e.sent()]}})})})];case 2:return[2,c.sent()]}})})},exports.deleteTodoItem=function(n){return e(void 0,void 0,void 0,function(){var e,s,i;return t(this,function(t){switch(t.label){case 0:return e=n.id,s=r.serverUrl+"todo/"+e,[4,fetch(s,{headers:o.getAuthHeader(),method:"DELETE"})];case 1:return[4,t.sent().json()];case 2:return i=t.sent(),console.log("delete result",i),[2,i]}})})};
},{"./App":"Zmr0","./auth":"N5Xg"}],"cXqv":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{c(o.next(e))}catch(t){a(t)}}function d(e){try{c(o.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,d)}c((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function d(a){return function(d){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(d){a=[6,d],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,d])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../App"),o=require("../todo");n.renderUserState();var r=[],a=function(o){return e(void 0,void 0,void 0,function(){var e,a;return t(this,function(t){switch(t.label){case 0:if(console.log("update todo Item id"+o),!(e=r.find(function(e){return e.id==o})))throw new Error("cannot get todoItem");return e.isComplete=!e.isComplete,a=n.serverUrl,console.log(e),[4,fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})];case 1:return t.sent(),console.log("update todoItem done"),u(),[2]}})})},i=document.getElementById("content");i.addEventListener("keyup",function(e){"Enter"==e.key&&o.addTodoItem(i.value).then(function(){i.value="",u()})});var d=document.getElementById("submit");d.addEventListener("click",function(){o.addTodoItem(i.value).then(function(){i.value="",u()})});var c=document.getElementById("todolist"),u=function(){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,o.getTodoItems()];case 1:return r=e.sent(),c.innerHTML="",r.filter(function(e){return null==e.parentId}).map(function(e){var t=l(e);c.appendChild(t)}),[2]}})})},l=function e(t){var n=document.createElement("div");n.id="todo-"+t.id,n.className="todo",t.isComplete&&(n.className+=" done");var i=document.createElement("div");i.id="main",i.addEventListener("mouseover",function(){var e=document.getElementById("todo-"+t.id).querySelector("#add-child-form");"unactive"==e.className&&(e.className="active")}),i.addEventListener("mouseleave",function(){var e=document.getElementById("todo-"+t.id).querySelector("#add-child-form");"active"==e.className&&(e.className="unactive")});var d=document.createElement("div");d.id="container";var c=document.createElement("p");c.appendChild(document.createTextNode("• "+t.content)),c.addEventListener("click",function(){a(t.id)});var l=document.createElement("button");l.appendChild(document.createTextNode("❌")),l.addEventListener("click",function(){var e=t.id;if(!e)throw new Error("todoItem not has id property");o.deleteTodoItem({id:e}).then(u)}),d.appendChild(c),d.appendChild(l),i.appendChild(d);var s=document.createElement("div");s.id="add-child-form",s.className="unactive";var m=document.createElement("input");m.placeholder="...adding relative todo",m.addEventListener("focus",function(){s.className="focused"}),m.addEventListener("blur",function(){""==m.value&&(s.className="unactive")}),m.addEventListener("keypress",function(e){"Enter"==e.key&&o.addTodoItem(m.value,t.id).then(function(){u(),m.value=""})});var p=document.createElement("button");p.appendChild(document.createTextNode("✅")),p.onclick=function(){o.addTodoItem(m.value,t.id).then(function(){u(),m.value=""})},s.appendChild(m),s.appendChild(p),i.appendChild(s),n.appendChild(i);var v=document.createElement("div");return v.id="childs",r.filter(function(e){return e.parentId==t.id}).map(function(t){return e(t)}).map(function(e){v.appendChild(e)}),n.appendChild(v),n};u();
},{"../App":"Zmr0","../todo":"cnZl"}]},{},["cXqv"], null)
//# sourceMappingURL=/pages.4679826a.js.map