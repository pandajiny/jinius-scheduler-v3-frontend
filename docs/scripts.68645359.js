parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"abQy":[function(require,module,exports) {
"use strict";var e,t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.isLocalMode=exports.isDevMode=exports.serverUrl=exports.$createContainer=exports.keyInputListener=exports.$createInputElement=exports.$createParagraphElement=exports.$createButtonElement=exports.$renderAccountState=void 0;var n=require("./modules/AuthModules"),o=require("./navigate-page");function r(e){var t=e.$container,n=e.user;n?i({$container:t,user:n}):a({$container:t})}function i(e){var t=e.user,r=e.$container,i=t.email,a=t.name;r.innerHTML='\n  <div id="user-information">\n    <p id="name">'+a+'</p>\n    <p id="email">'+i+'</p>\n  </div>\n  <div id="account-actions">\n    <a>Profile</a>\n    <a id="signout-button">Sign out</a>\n  </div>\n';document.getElementById("signout-button").addEventListener("click",function(){n.doSignOut().then(function(e){e.ok&&o.updatePage("/login")})})}function a(e){e.$container.innerHTML='\n    <div id="login-require">\n      <button id="login-button">LOG IN</button>\n    </div>\n';document.getElementById("login-button").addEventListener("click",function(){o.updatePage("/login")})}function s(e){var t=e.id,n=e.className,o=e.onClick,r=e.content,i=document.createElement("button");return t&&(i.id=t),n&&(i.className=n),o&&i.addEventListener("click",o),i.appendChild(document.createTextNode(r)),i}function c(e){var t=e.className,n=e.text,o=e.type,r=document.createElement(o);return t&&(r.className=t),r.appendChild(document.createTextNode(n)),r}function l(e){var t=e.id,n=e.className,o=e.placeholder,r=e.value,i=e.onSubmit,a=document.createElement("input");return t&&(a.id=t),n&&(a.className=n),o&&(a.placeholder=o),r&&(a.value=r),i&&a.addEventListener("keypress",function(e){"Enter"==e.key&&i(a.value).then(function(){a.value=""})}),a}function d(e,t){"Enter"==e.key&&t()}function u(e){var t=e.$elements,n=e.className,o=e.id,r=document.createElement("div");return o&&(r.id=o),n&&(r.className=n),t&&t.map(function(e){r.appendChild(e)}),r}exports.$renderAccountState=r,exports.$createButtonElement=s,exports.$createParagraphElement=c,exports.$createInputElement=l,exports.keyInputListener=d,exports.$createContainer=u,exports.serverUrl="https://pandajiny.shop",console.log(exports.serverUrl),exports.isDevMode=(null===(e="production")||void 0===e?void 0:e.includes("DEV"))||!1,exports.isLocalMode=(null===(t="production")||void 0===t?void 0:t.toString().includes("LOCAL"))||!1,exports.isLocalMode?(exports.serverUrl="http://localhost",console.log("app is local mode server url : "+exports.serverUrl)):exports.isDevMode&&(console.log("app is dev mode"),fetch(exports.serverUrl).then(function(e){e.ok?console.log("server activated"):(console.log("server not responde, using localhost"),exports.serverUrl="http://localhost")}));
},{"./modules/AuthModules":"cGWi","./navigate-page":"z8pE"}],"cGWi":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,s){function i(e){try{u(n.next(e))}catch(t){s(t)}}function a(e){try{u(n.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,a)}u((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isLoginFormFormatted=exports.createAuthPostOption=exports.createPostOption=exports.getUser=exports.isLoggedIn=exports.doSignUp=exports.doSignOut=exports.doLoginWithEmailAndPassword=exports.getAuthHeader=void 0;var r=require("../App");function n(){var e=localStorage.getItem("jwtToken")||null;return e?{Authorization:"Bearer "+e}:null}function o(n){return e(this,void 0,void 0,function(){var e,o,s;return t(this,function(t){switch(t.label){case 0:if(!a(n))throw"Please fill the blanks";return e=r.serverUrl+"/auth",[4,fetch(e,exports.createPostOption(n))];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),localStorage.setItem("jwtToken",s.access_token),[3,5];case 3:return[4,o.json()];case 4:throw(s=t.sent()).message;case 5:return[2]}})})}function s(){return e(this,void 0,Promise,function(){return t(this,function(e){return localStorage.removeItem("jwtToken"),[2,{ok:!0,message:"user sign out"}]})})}function i(e){return!!e}function a(e){var t=e.email,r=e.password;return""!=t&&""!=r}exports.getAuthHeader=n,exports.doLoginWithEmailAndPassword=o,exports.doSignOut=s,exports.doSignUp=function(n){return e(void 0,void 0,Promise,function(){var e,o,s;return t(this,function(t){switch(t.label){case 0:return e=r.serverUrl+"auth/signup",[4,fetch(e,exports.createPostOption(n))];case 1:if(!(o=t.sent()).ok)throw new Error("signup-failed");return[4,o.json()];case 2:return s=t.sent(),localStorage.setItem("jwtToken",s.access_token),console.log("signup done"),[2,{ok:!0,message:"signup ok"}]}})})},exports.isLoggedIn=i,exports.getUser=function(){return e(void 0,void 0,Promise,function(){var e,o,s;return t(this,function(t){switch(t.label){case 0:return e=r.serverUrl+"/auth/user",(o=n())?[4,fetch(e,{headers:o})]:[2,null];case 1:return[4,t.sent().json()];case 2:return[2,(s=t.sent()).email&&s.uid?s:null]}})})},exports.createPostOption=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},exports.createAuthPostOption=function(e){return{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("jwtToken"),"Content-Type":"application/json"},body:JSON.stringify(e)}},exports.isLoginFormFormatted=a;
},{"../App":"abQy"}],"nKoR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initLoginPage=void 0;var e=require("../../modules/AuthModules"),t=require("../../navigate-page");function n(){var n=t.$loginPage.querySelector("#email-input"),o=t.$loginPage.querySelector("#password-input"),i=document.getElementById("login-message");t.$loginPage.querySelector("#login-button").addEventListener("click",function(){var a=n.value,u=o.value;e.doLoginWithEmailAndPassword({email:a,password:u}).catch(function(e){throw i.textContent=e,e}).then(function(){t.updatePage("/todos")})}),document.getElementById("signup-button").addEventListener("click",function(){return t.updatePage("/login")})}exports.initLoginPage=n;
},{"../../modules/AuthModules":"cGWi","../../navigate-page":"z8pE"}],"ZfCR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initLoginRequirePage=void 0;var e=require("../../navigate-page");function i(){e.$loginRequirePage.querySelector("#login-button").addEventListener("click",function(){e.updatePage("/login")})}exports.initLoginRequirePage=i;
},{"../../navigate-page":"z8pE"}],"nlaD":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{a(n.next(e))}catch(t){i(t)}}function s(e){try{a(n.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(u,s)}a((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.doPostRequest=exports.doGetRequest=void 0;var r=require("./AuthModules");function n(n){return e(this,void 0,Promise,function(){var e,o,i,u;return t(this,function(t){switch(t.label){case 0:if(!(e=r.getAuthHeader()))throw"Please login first";return console.log("get request to "+n),[4,fetch(n,{headers:e})];case 1:return(o=t.sent()).ok?[3,3]:(i=Error.bind,[4,o.json()]);case 2:throw new(i.apply(Error,[void 0,t.sent()]));case 3:return[4,o.json()];case 4:if(!(u=t.sent()).ok||!u.data)throw u.error_message;return[2,u.data]}})})}function o(){return e(this,void 0,void 0,function(){return t(this,function(e){return[2]})})}exports.doGetRequest=n,exports.doPostRequest=o;
},{"./AuthModules":"cGWi"}],"t0X4":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(n,s){function i(e){try{a(o.next(e))}catch(t){s(t)}}function u(e){try{a(o.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,u)}a((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&s[0]?o.return:s[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;switch(o=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(u){s=[6,u],o=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},r=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=s.next()).done;)i.push(o.value)}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return i},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.addGroup=exports.getGroupsFromUser=exports.getEndTimeListFromTodos=exports.uncompleteTodos=exports.completeTodos=exports.editTodo=exports.deleteTodoItem=exports.addTodo=exports.getTodos=exports.getFilter=void 0;var n=require("../App"),s=require("./AuthModules"),i=require("./HttpsModles");function u(e){var t=new URLSearchParams(e),r=t.get("user_id");if(!r)throw new Error("Cannot parse user id");var o={userId:r},n=t.get("group_id");return n&&(o.groupId=n),o}function a(r){return e(this,void 0,Promise,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"/todos?user_id="+r.userId,r.groupId&&(e+="&group_id="+r.groupId),[4,i.doGetRequest(e)];case 1:return[2,t.sent()]}})})}function c(r){return e(this,void 0,Promise,function(){var e,o,i,u,a;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"todo/"+r.id,o=Object.assign({"Content-Type":"application/json"},s.getAuthHeader()),[4,fetch(e,{headers:o,method:"PUT",body:JSON.stringify(r)})];case 1:return(i=t.sent()).ok?[3,3]:(a={ok:!1},[4,i.json().then(function(e){return e.message})]);case 2:return[2,(a.error_message=t.sent(),a)];case 3:return[4,i.json()];case 4:return u=t.sent(),console.log("edit todo result",u),[2,u]}})})}function d(r){return e(this,void 0,Promise,function(){var e,o,i,u,a;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"todo/complete",o=Object.assign({"Content-Type":"application/json"},s.getAuthHeader()),[4,fetch(e,{headers:o,method:"POST",body:JSON.stringify(r)})];case 1:return(i=t.sent()).ok?[3,3]:(u=Error.bind,[4,i.json()]);case 2:throw new(u.apply(Error,[void 0,t.sent()]));case 3:return[4,i.json()];case 4:return a=t.sent(),console.log("complete todos result",a),[2,a]}})})}function l(r){return e(this,void 0,Promise,function(){var e,o,i,u,a;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"todo/uncomplete",o=Object.assign({"Content-Type":"application/json"},s.getAuthHeader()),[4,fetch(e,{headers:o,method:"POST",body:JSON.stringify(r)})];case 1:return(i=t.sent()).ok?[3,3]:(u=Error.bind,[4,i.json()]);case 2:throw new(u.apply(Error,[void 0,t.sent()]));case 3:return[4,i.json()];case 4:return a=t.sent(),console.log("uncomplete todos result",a),[2,a]}})})}function p(e){return o(new Set(e.map(function(e){return e.end_time})))}function h(r){return e(this,void 0,Promise,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=n.serverUrl+"/users/"+r+"/groups",[4,i.doGetRequest(e)];case 1:return[2,t.sent()]}})})}function f(r){return e(this,void 0,Promise,function(){var e,o,i,u,a;return t(this,function(t){switch(t.label){case 0:return e=r.groupName,console.log("add group with : "+e),o=n.serverUrl+"group",i=Object.assign(g,s.getAuthHeader()),u={groupName:e},[4,fetch(o,{method:"POST",headers:i,body:JSON.stringify(u)})];case 1:return[4,t.sent().json()];case 2:return a=t.sent(),console.log("add group done, "+a.message),[2,a]}})})}exports.getFilter=u,exports.getTodos=a,exports.addTodo=function(r){return e(void 0,void 0,Promise,function(){var o,i;return t(this,function(u){switch(u.label){case 0:return console.log("adding todo"),o=n.serverUrl+"/todo",[4,fetch(o,s.createAuthPostOption(r)).then(function(r){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,r.json()];case 1:return[2,e.sent()]}})})})];case 1:return i=u.sent(),console.log("adding todo done",i),[2,{ok:!0,message:"adding todo done"}]}})})},exports.deleteTodoItem=function(r){return e(void 0,void 0,void 0,function(){var e,o,i,u;return t(this,function(t){switch(t.label){case 0:if(e=r.id,o=n.serverUrl+"todo/"+e,!(i=s.getAuthHeader()))throw"please login first";return[4,fetch(o,{method:"DELETE",headers:i})];case 1:return[4,t.sent().json()];case 2:return u=t.sent(),console.log("delete result",u),[2,u]}})})},exports.editTodo=c,exports.completeTodos=d,exports.uncompleteTodos=l,exports.getEndTimeListFromTodos=p,exports.getGroupsFromUser=h,exports.addGroup=f;var g={"Content-Type":"application/json"};
},{"../App":"abQy","./AuthModules":"cGWi","./HttpsModles":"nlaD"}],"P6fR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$updateNavItems=exports.$initialNavContainer=void 0;var e=require("."),t=require("../../modules/TodoModules");function n(e){document.getElementById("create-group-button").addEventListener("click",function(){var n=prompt("new group name","GROUP NAME");n&&t.addGroup({groupName:n}).then(e.onUpdate)})}function o(t){var n=t.groups,o=t.userId,r=document.getElementById("group-list");r.innerHTML="",r.style.display="block";var a=document.querySelector("#nav-group-container > .nav-message");a.textContent="",a.style.display="none",n.forEach(function(n){var a=document.createElement("li"),i=e.getGroupIdFromUrl();a.className="nav-item "+(i==n.group_id&&"selected"),a.id="nav-"+n.group_id,a.innerHTML='\n          <label class="nav-symbol">🗹</label>\n          <p>'+n.group_name+"</p>\n        ",a.addEventListener("click",function(){history.pushState({},"","/todos?user_id="+o+"&group_id="+n.group_id),t.onUpdate()}),r.appendChild(a)})}exports.$initialNavContainer=n,exports.$updateNavItems=o;
},{".":"Fz7k","../../modules/TodoModules":"t0X4"}],"psnN":[function(require,module,exports) {
"use strict";function t(t){var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()}function e(t){var e=t.split("/").join("").split(".").join("").split("-").map(function(t){return parseInt(t)});return new Date(e[0],e[1]-1,e[2]).getTime()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertStringToTimestamp=exports.convertTimestampToString=void 0,exports.convertTimestampToString=t,exports.convertStringToTimestamp=e;
},{}],"RBhU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$initialAddTodoForm=void 0;var e=require(".."),t=require("../../../modules/TimeModules"),o=require("../../../modules/TodoModules");function r(r){var d=document.getElementById("add-todo-container"),n=document.getElementById("add-todo-input"),i=d.querySelector("#date-select");n.addEventListener("keypress",function(d){if("Enter"==d.key){e.$setAlertMessage("");var a=e.getUserIdFromUrl();if(!a)throw"cannot parse user id";var s=e.getGroupIdFromUrl(),u=n.value;if(!u)return void e.$setAlertMessage("Can't create todo with no content");var l=""!=i.value?t.convertStringToTimestamp(i.value):null;o.addTodo({content:u,endTime:l,groupId:s,isComplete:!1,owner:a,parentId:null}).then(function(e){if(!e.ok)throw e.error_message;n.value="",r.onUpdate()})}})}exports.$initialAddTodoForm=r;
},{"..":"Fz7k","../../../modules/TimeModules":"psnN","../../../modules/TodoModules":"t0X4"}],"Ekja":[function(require,module,exports) {
"use strict";function e(e,t){"Enter"==e.key&&t()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setEnterInputListener=void 0,exports.setEnterInputListener=e;
},{}],"wjL8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$TodoItem=void 0;var e=require("../../../App"),t=require("../../../modules/TimeModules"),n=require("../../../modules/TodoModules");function o(o,c){var i=document.createElement("div");i.id="todo-"+o.id,i.className="todo",i.innerHTML='\n    <label class="todo-content-container" class="'+(o.isComplete?"done":"")+'">\n      <p class="date">\n        '+(o.end_time?t.convertTimestampToString(o.end_time):"-")+'\n      </p>\n      <p class="content">'+o.content+'</p>\n      <div class="content-edit-container unactive">\n        <p class="icon">✎ </p>\n        <input class="content-edit" value="'+o.content+'" placeholder="...content here" />\n      </div>\n    </label>\n    <div class="action-buttons" class="'+(o.isComplete?"done":"")+'">\n      <button class="edit-button text-button">✎</button>\n      <button class="done-button text-button">✓</button>\n      <button class="delete-button text-button">✖</button>\n    </div>\n  ';var s=i.querySelector("#content"),d=i.querySelector(".content-edit-container"),l=i.querySelector(".content-edit");function u(){d.className="unactive",d.style.display="none",s.className="active"}return l.onblur=u,l.addEventListener("keypress",function(t){e.keyInputListener(t,function(){o.content!=l.value?(o.content=l.value,n.editTodo(o).then(c)):u()})}),i.querySelector(".delete-button").addEventListener("click",function(){return e=o.id,void n.deleteTodoItem({id:e}).then(c);var e}),i.querySelector(".edit-button").addEventListener("click",function(){d.className="active",d.style.display="flex",s.className="unactive",l.value=o.content,l.focus()}),i.querySelector(".done-button").addEventListener("click",function(){o.id&&n.completeTodos([o.id]).then(c)}),i}exports.$TodoItem=o;
},{"../../../App":"abQy","../../../modules/TimeModules":"psnN","../../../modules/TodoModules":"t0X4"}],"ZHKs":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function u(e){try{a(o.next(e))}catch(t){i(t)}}function l(e){try{a(o.throw(e))}catch(t){i(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,l)}a((o=o.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(l){i=[6,l],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.$updateTitle=exports.$updateTodolist=void 0;var n=require("../../../modules/DocumnetModules"),o=require("../../../navigate-page"),r=require("./todo.item");function i(n){return e(this,void 0,void 0,function(){var e,i;return t(this,function(t){return e=n.todos,i=o.$mainPage.querySelector(".todolist"),console.log(i),i.innerHTML="",console.log(e),e.map(function(e){i.appendChild(r.$TodoItem(e,n.onUpdate))}),[2]})})}function u(e,t){var o=document.getElementById("todo-container-title"),r=document.getElementById("todo-container-title-edit"),i="Todo title not recognized ";if(e.groupId){var u=t.find(function(t){return t.group_id==e.groupId});console.log(u),i=u?u.group_name:"unrecognized Group"}else i="All Todos";function l(){r.value}o.textContent=i,r.value=i,r.onblur=function(){o.style.display="block",r.style.display="none"},r.addEventListener("keypress",function(e){n.setEnterInputListener(e,l)});var a=document.getElementById("title-edit-button");document.getElementById("title-delete-button");a.addEventListener("click",function(){o.style.display="none",r.style.display="block",r.focus()})}exports.$updateTodolist=i,exports.$updateTitle=u;
},{"../../../modules/DocumnetModules":"Ekja","../../../navigate-page":"z8pE","./todo.item":"wjL8"}],"Fz7k":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{s(n.next(e))}catch(t){i(t)}}function u(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,u)}s((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.$setAlertMessage=exports.getGroupIdFromUrl=exports.getUserIdFromUrl=exports.initTodoPage=void 0;var r,n=require("../../App"),o=require("../../modules/AuthModules"),i=require("../../modules/TodoModules"),a=require("../../navigate-page"),u=require("./nav"),s=require("./todo/todo.add-form"),l=require("./todo/todo.list");function c(){return e(this,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,o.getUser()];case 1:return(r=e.sent())?(history.pushState({},"","/todos?user_id="+r.uid),d(r),u.$initialNavContainer({onUpdate:p}),p()):a.updatePage("/login-require"),[2]}})})}function d(e){document.getElementById("main-page").style.display="flex";var t=document.getElementById("account-container");n.$renderAccountState({$container:t,user:e})}function p(){return e(this,void 0,void 0,function(){var e,n,o;return t(this,function(t){switch(t.label){case 0:return r?[4,i.getGroupsFromUser(r.uid)]:(a.updatePage("/login-require"),[2]);case 1:return e=t.sent(),u.$updateNavItems({groups:e,userId:r.uid,onUpdate:p}),n=i.getFilter(window.location.search),[4,i.getTodos(n)];case 2:return o=t.sent(),l.$updateTodolist({todos:o,onUpdate:p}),s.$initialAddTodoForm({onUpdate:p}),[2]}})})}function f(){return new URL(location.href).searchParams.get("user_id")}function h(){return new URL(location.href).searchParams.get("group_id")}exports.initTodoPage=c,exports.getUserIdFromUrl=f,exports.getGroupIdFromUrl=h;var g=document.getElementById("alert-message");function m(e){g.textContent=e}exports.$setAlertMessage=m;
},{"../../App":"abQy","../../modules/AuthModules":"cGWi","../../modules/TodoModules":"t0X4","../../navigate-page":"z8pE","./nav":"P6fR","./todo/todo.add-form":"RBhU","./todo/todo.list":"ZHKs"}],"z8pE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updatePage=exports.$loginRequirePage=exports.$loginPage=exports.$mainPage=void 0;var e=require("./pages/login-page"),a=require("./pages/login-require-page"),o=require("./pages/todo-page");exports.$mainPage=document.getElementById("main-page"),exports.$loginPage=document.getElementById("login-page"),exports.$loginRequirePage=document.getElementById("login-require-page");var i=[exports.$mainPage,exports.$loginPage,exports.$loginRequirePage];function t(t){switch(history.pushState({hello:"world"},"hello",t),i.forEach(function(e){e.className="page"}),t){case"/todos":exports.$mainPage.classList.add("active"),o.initTodoPage();break;case"/login":exports.$loginPage.classList.add("active"),e.initLoginPage();break;case"/login-require":exports.$loginRequirePage.classList.add("active"),a.initLoginRequirePage();break;default:console.log("404")}}t(location.pathname),exports.updatePage=t;
},{"./pages/login-page":"nKoR","./pages/login-require-page":"ZfCR","./pages/todo-page":"Fz7k"}],"KqmS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./navigate-page");
},{"./navigate-page":"z8pE"}]},{},["KqmS"], null)
//# sourceMappingURL=scripts.68645359.js.map