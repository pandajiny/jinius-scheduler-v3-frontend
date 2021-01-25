// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.fb44e770.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "Ekja": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      "Enter" == e.key && t();
    }

    function t() {
      return new URL(location.href).searchParams.get("user_id");
    }

    function o() {
      return new URL(location.href).searchParams.get("group_id");
    }

    function r(e, t) {
      document.cookie = e + "=" + t + ";path=/";
    }

    function n(e) {
      var t;
      return null === (t = document.cookie.split(";").find(function (t) {
        return t.includes(e);
      })) || void 0 === t ? void 0 : t.split(e + "=").join("");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getCookie = exports.setCookie = exports.getGroupIdFromUrl = exports.getUserIdFromUrl = exports.setEnterInputListener = void 0, exports.setEnterInputListener = e, exports.getUserIdFromUrl = t, exports.getGroupIdFromUrl = o, exports.setCookie = r, exports.getCookie = n;
  }, {}],
  "b0vf": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, o) {
      return new (r || (r = Promise))(function (n, s) {
        function u(e) {
          try {
            i(o.next(e));
          } catch (t) {
            s(t);
          }
        }

        function a(e) {
          try {
            i(o.throw(e));
          } catch (t) {
            s(t);
          }
        }

        function i(e) {
          var t;
          e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(u, a);
        }

        i((o = o.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          o,
          n,
          s,
          u = {
        label: 0,
        sent: function sent() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
        return this;
      }), s;

      function a(s) {
        return function (a) {
          return function (s) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; u;) {
              try {
                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;

                switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;

                  case 4:
                    return u.label++, {
                      value: s[1],
                      done: !1
                    };

                  case 5:
                    u.label++, o = s[1], s = [0];
                    continue;

                  case 7:
                    s = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                      u = 0;
                      continue;
                    }

                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      u.label = s[1];
                      break;
                    }

                    if (6 === s[0] && u.label < n[1]) {
                      u.label = n[1], n = s;
                      break;
                    }

                    if (n && u.label < n[2]) {
                      u.label = n[2], u.ops.push(s);
                      break;
                    }

                    n[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }

                s = t.call(e, u);
              } catch (a) {
                s = [6, a], o = 0;
              } finally {
                r = n = 0;
              }
            }

            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([s, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.doPutRequest = exports.doDeleteRequest = exports.doPostRequest = exports.doGetRequest = void 0;

    var r = require("../DocumnetModules");

    function o(e, t) {
      var o = r.getCookie("token");
      if (!o) throw "token not exist";
      var n = {
        Authorization: "Bearer " + o
      };
      return t ? {
        method: e,
        headers: {
          Authorization: "Bearer " + o,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
      } : (console.log("get request"), {
        method: e,
        headers: n
      });
    }

    function n(r) {
      return e(this, void 0, Promise, function () {
        var e, n, s;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return console.log("get request to " + r), [4, fetch(r, o("GET"))];

            case 1:
              return (e = t.sent()).ok ? [3, 3] : (n = Error.bind, [4, e.json()]);

            case 2:
              throw new (n.apply(Error, [void 0, t.sent()]))();

            case 3:
              return [4, e.json()];

            case 4:
              if (!(s = t.sent()).ok || !s.data) throw s.error_message;
              return [2, s.data];
          }
        });
      });
    }

    function s(r) {
      return e(this, void 0, Promise, function () {
        var e, n, s, u;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.body, n = r.url, console.log("post request to " + n), [4, fetch(n, o("POST", e))];

            case 1:
              if (!(s = t.sent()).ok) throw new Error("cannot fetch request to " + n);
              return [4, s.json()];

            case 2:
              if (!(u = t.sent()).ok || !u.data) throw new Error(u.error_message);
              return [2, u.data];
          }
        });
      });
    }

    function u(r) {
      return e(this, void 0, void 0, function () {
        var e, n, s;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.url, console.log("delete request to " + e), [4, fetch(e, o("DELETE"))];

            case 1:
              if (!(n = t.sent()).ok) throw new Error("cannot fetch request to " + e);
              return [4, n.json()];

            case 2:
              if (!(s = t.sent()).ok || !s.data) throw new Error(s.error_message);
              return [2, s.data];
          }
        });
      });
    }

    function a(r) {
      return e(this, void 0, void 0, function () {
        var e, n, s, u;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.body, n = r.url, console.log("put request to " + n), [4, fetch(n, o("PUT", e))];

            case 1:
              if (!(s = t.sent()).ok) throw new Error("cannot fetch request to " + n);
              return [4, s.json()];

            case 2:
              if (!(u = t.sent()).ok || !u.data) throw new Error(u.error_message);
              return console.log("put request done / " + n), [2, u.data];
          }
        });
      });
    }

    exports.doGetRequest = n, exports.doPostRequest = s, exports.doDeleteRequest = u, exports.doPutRequest = a;
  }, {
    "../DocumnetModules": "Ekja"
  }],
  "DQXu": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, i) {
        function s(e) {
          try {
            u(o.next(e));
          } catch (t) {
            i(t);
          }
        }

        function a(e) {
          try {
            u(o.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function u(e) {
          var t;
          e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }

        u((o = o.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var n,
          o,
          r,
          i,
          s = {
        label: 0,
        sent: function sent() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function a(i) {
        return function (a) {
          return function (i) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; s;) {
              try {
                if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;

                switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;

                  case 4:
                    return s.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    s.label++, o = i[1], i = [0];
                    continue;

                  case 7:
                    i = s.ops.pop(), s.trys.pop();
                    continue;

                  default:
                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      s = 0;
                      continue;
                    }

                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      s.label = i[1];
                      break;
                    }

                    if (6 === i[0] && s.label < r[1]) {
                      s.label = r[1], r = i;
                      break;
                    }

                    if (r && s.label < r[2]) {
                      s.label = r[2], s.ops.push(i);
                      break;
                    }

                    r[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }

                i = t.call(e, s);
              } catch (a) {
                i = [6, a], o = 0;
              } finally {
                n = r = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.doSignOut = exports.doLoginWithEmailAndPassword = exports.isLoginFormFormatted = exports.isLoggedIn = void 0;

    var n = require("../../app"),
        o = require("../DocumnetModules");

    function r(e) {
      return !!e;
    }

    function i(e) {
      var t = e.email,
          n = e.password;
      return "" != t && "" != n;
    }

    function s(r) {
      var s;
      return e(this, void 0, Promise, function () {
        var e, a, u;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              if (!i(r)) throw "Please fill the blanks";
              return e = n.serverUrl + "/auth/login", console.log(e), [4, fetch(e, {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
              })];

            case 1:
              return [4, t.sent().json()];

            case 2:
              return a = t.sent(), (u = null === (s = a.data) || void 0 === s ? void 0 : s.access_token) ? (o.setCookie("token", u), [2, {
                ok: !0,
                message: "Login Success, Welcome " + r.email
              }]) : [2, {
                ok: !1,
                error_message: "cannot login"
              }];
          }
        });
      });
    }

    function a() {
      return e(this, void 0, Promise, function () {
        return t(this, function (e) {
          return localStorage.removeItem("jwtToken"), [2, {
            ok: !0,
            message: "user sign out"
          }];
        });
      });
    }

    exports.isLoggedIn = r, exports.isLoginFormFormatted = i, exports.doLoginWithEmailAndPassword = s, exports.doSignOut = a;
  }, {
    "../../app": "Doqu",
    "../DocumnetModules": "Ekja"
  }],
  "zkOk": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (t) {
            i(t);
          }
        }

        function u(e) {
          try {
            s(r.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, u);
        }

        s((r = r.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var n,
          r,
          o,
          i,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: u(0),
        throw: u(1),
        return: u(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function u(i) {
        return function (u) {
          return function (i) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    a.label++, r = i[1], i = [0];
                    continue;

                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }

                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }

                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }

                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                i = t.call(e, a);
              } catch (u) {
                i = [6, u], r = 0;
              } finally {
                n = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, u]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.doSignUp = void 0;

    var n = require("../../app"),
        r = require("..//http");

    exports.doSignUp = function (o) {
      return e(void 0, void 0, Promise, function () {
        var e, i;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = n.serverUrl + "/auth/signup", [4, r.doPostRequest({
                url: e,
                body: o
              })];

            case 1:
              return i = t.sent(), localStorage.setItem("jwtToken", i.access_token), [2, {
                ok: !0,
                message: "signup done " + o.email
              }];
          }
        });
      });
    };
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "cI6R": [function (require, module, exports) {
    "use strict";

    var e = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
      void 0 === n && (n = r), Object.defineProperty(e, n, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      });
    } : function (e, t, r, n) {
      void 0 === n && (n = r), e[n] = t[r];
    }),
        t = this && this.__exportStar || function (t, r) {
      for (var n in t) {
        "default" === n || Object.prototype.hasOwnProperty.call(r, n) || e(r, t, n);
      }
    },
        r = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function u(e) {
          try {
            c(n.next(e));
          } catch (t) {
            i(t);
          }
        }

        function a(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function c(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(u, a);
        }

        c((n = n.apply(e, t || [])).next());
      });
    },
        n = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          i,
          u = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function a(i) {
        return function (a) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; u;) {
              try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;

                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return u.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    u.label++, n = i[1], i = [0];
                    continue;

                  case 7:
                    i = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      u = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      u.label = i[1];
                      break;
                    }

                    if (6 === i[0] && u.label < o[1]) {
                      u.label = o[1], o = i;
                      break;
                    }

                    if (o && u.label < o[2]) {
                      u.label = o[2], u.ops.push(i);
                      break;
                    }

                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }

                i = t.call(e, u);
              } catch (a) {
                i = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getUser = void 0;

    var o = require("../../app"),
        i = require("../http");

    t(require("./login"), exports), t(require("./sign-up"), exports), exports.getUser = function () {
      return r(void 0, void 0, Promise, function () {
        var e;
        return n(this, function (t) {
          switch (t.label) {
            case 0:
              return e = o.serverUrl + "/auth/user", [4, i.doGetRequest(e).catch(function (e) {
                return console.error(e), null;
              })];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    };
  }, {
    "../../app": "Doqu",
    "../http": "b0vf",
    "./login": "DQXu",
    "./sign-up": "zkOk"
  }],
  "nKoR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initLoginPage = void 0;

    var e = require("../../modules/auth/login"),
        t = require("../../router");

    function o() {
      t.$loginPage.classList.add("active");
      var o = t.$loginPage.querySelector("#email-input"),
          n = t.$loginPage.querySelector("#password-input"),
          i = document.getElementById("login-title");

      t.$loginPage.querySelector("#login-button").onclick = function () {
        var a = o.value,
            r = n.value;
        e.doLoginWithEmailAndPassword({
          email: a,
          password: r
        }).catch(function (e) {
          throw i.textContent = e, e;
        }).then(function () {
          t.navigateTo.todos();
        });
      };

      document.getElementById("signup-button");
    }

    exports.initLoginPage = o;
  }, {
    "../../modules/auth/login": "DQXu",
    "../../router": "kMlt"
  }],
  "ZfCR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initLoginRequirePage = void 0;

    var e = require("../../router");

    function i() {
      e.$welcomePage.classList.add("active"), e.$welcomePage.querySelector("#login-button").addEventListener("click", function () {
        e.navigateTo.login();
      });
    }

    exports.initLoginRequirePage = i;
  }, {
    "../../router": "kMlt"
  }],
  "e4us": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, u) {
        function i(e) {
          try {
            s(n.next(e));
          } catch (t) {
            u(t);
          }
        }

        function a(e) {
          try {
            s(n.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(i, a);
        }

        s((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(u) {
        return function (a) {
          return function (u) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;

                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, n = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break;
                    }

                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break;
                    }

                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (a) {
                u = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getGroupsFromUser = void 0;

    var r = require("../../app"),
        n = require("..//http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/users/" + o + "/groups", [4, n.doGetRequest(e)];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    exports.getGroupsFromUser = o;
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "IHmZ": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, u) {
        function a(e) {
          try {
            s(n.next(e));
          } catch (t) {
            u(t);
          }
        }

        function i(e) {
          try {
            s(n.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, i);
        }

        s((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          u,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: i(0),
        throw: i(1),
        return: i(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function i(u) {
        return function (i) {
          return function (u) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;

                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return a.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    a.label++, n = u[1], u = [0];
                    continue;

                  case 7:
                    u = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      a.label = u[1];
                      break;
                    }

                    if (6 === u[0] && a.label < o[1]) {
                      a.label = o[1], o = u;
                      break;
                    }

                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(u);
                      break;
                    }

                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                u = t.call(e, a);
              } catch (i) {
                u = [6, i], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, i]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.addGroup = void 0;

    var r = require("../../app"),
        n = require("..//http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e, u;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/users/" + o.userId + "/groups", [4, n.doPostRequest({
                url: e,
                body: o
              })];

            case 1:
              return u = t.sent(), console.log("add group done, " + u.message), [2, u];
          }
        });
      });
    }

    exports.addGroup = o;
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "H65t": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, u) {
        function i(e) {
          try {
            c(n.next(e));
          } catch (t) {
            u(t);
          }
        }

        function a(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function c(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(i, a);
        }

        c((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(u) {
        return function (a) {
          return function (u) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;

                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, n = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break;
                    }

                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break;
                    }

                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (a) {
                u = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.updateGroup = void 0;

    var r = require("../../app"),
        n = require("..//http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/users/" + o.owner_id + "/groups/" + o.group_id, [4, n.doPutRequest({
                url: e,
                body: o
              })];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    exports.updateGroup = o;
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "W8x2": [function (require, module, exports) {
    "use strict";

    var e = this && this.__createBinding || (Object.create ? function (e, t, r, o) {
      void 0 === o && (o = r), Object.defineProperty(e, o, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      });
    } : function (e, t, r, o) {
      void 0 === o && (o = r), e[o] = t[r];
    }),
        t = this && this.__exportStar || function (t, r) {
      for (var o in t) {
        "default" === o || Object.prototype.hasOwnProperty.call(r, o) || e(r, t, o);
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), t(require("./get-group"), exports), t(require("./add-group"), exports), t(require("./update-group"), exports);
  }, {
    "./get-group": "e4us",
    "./add-group": "IHmZ",
    "./update-group": "H65t"
  }],
  "PRp4": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, u) {
        function i(e) {
          try {
            a(n.next(e));
          } catch (t) {
            u(t);
          }
        }

        function s(e) {
          try {
            a(n.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function a(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(i, s);
        }

        a((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function s(u) {
        return function (s) {
          return function (u) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;

                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, n = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break;
                    }

                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break;
                    }

                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (s) {
                u = [6, s], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, s]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getTodo = exports.getTodos = void 0;

    var r = require("../../app"),
        n = require("../http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/todos?user_id=" + o.userId, o.groupId && (e += "&group_id=" + o.groupId), [4, n.doGetRequest(e)];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    function u(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/todos/" + o, [4, n.doGetRequest(e)];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    exports.getTodos = o, exports.getTodo = u;
  }, {
    "../../app": "Doqu",
    "../http": "b0vf"
  }],
  "fpvw": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function a(e) {
          try {
            c(n.next(e));
          } catch (t) {
            i(t);
          }
        }

        function u(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function c(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, u);
        }

        c((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          i,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: u(0),
        throw: u(1),
        return: u(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function u(i) {
        return function (u) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;

                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    a.label++, n = i[1], i = [0];
                    continue;

                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }

                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }

                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }

                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                i = t.call(e, a);
              } catch (u) {
                i = [6, u], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, u]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.addTodo = void 0;

    var r = require("../../app"),
        n = require("..//http");

    exports.addTodo = function (o) {
      return e(void 0, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/todos", [4, n.doPostRequest({
                url: e,
                body: o
              })];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    };
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "zPt4": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function u(e) {
          try {
            l(n.next(e));
          } catch (t) {
            i(t);
          }
        }

        function a(e) {
          try {
            l(n.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function l(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(u, a);
        }

        l((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          i,
          u = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function a(i) {
        return function (a) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; u;) {
              try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;

                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return u.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    u.label++, n = i[1], i = [0];
                    continue;

                  case 7:
                    i = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      u = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      u.label = i[1];
                      break;
                    }

                    if (6 === i[0] && u.label < o[1]) {
                      u.label = o[1], o = i;
                      break;
                    }

                    if (o && u.label < o[2]) {
                      u.label = o[2], u.ops.push(i);
                      break;
                    }

                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }

                i = t.call(e, u);
              } catch (a) {
                i = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.deleteTodo = void 0;

    var r = require("../../app"),
        n = require("..//http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/todos/" + o, [4, n.doDeleteRequest({
                url: e
              })];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    exports.deleteTodo = o;
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "zASR": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, u) {
        function i(e) {
          try {
            c(n.next(e));
          } catch (t) {
            u(t);
          }
        }

        function a(e) {
          try {
            c(n.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function c(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(i, a);
        }

        c((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(u) {
        return function (a) {
          return function (u) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;

                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, n = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break;
                    }

                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break;
                    }

                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (a) {
                u = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.updateTodo = void 0;

    var r = require("../../app"),
        n = require("..//http");

    function o(o) {
      return e(this, void 0, Promise, function () {
        var e;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return e = r.serverUrl + "/todos/" + o.todo_id, [4, n.doPutRequest({
                url: e,
                body: o
              })];

            case 1:
              return [2, t.sent()];
          }
        });
      });
    }

    exports.updateTodo = o;
  }, {
    "../../app": "Doqu",
    "..//http": "b0vf"
  }],
  "GQxD": [function (require, module, exports) {
    "use strict";

    var e = this && this.__createBinding || (Object.create ? function (e, r, t, o) {
      void 0 === o && (o = t), Object.defineProperty(e, o, {
        enumerable: !0,
        get: function get() {
          return r[t];
        }
      });
    } : function (e, r, t, o) {
      void 0 === o && (o = t), e[o] = r[t];
    }),
        r = this && this.__exportStar || function (r, t) {
      for (var o in r) {
        "default" === o || Object.prototype.hasOwnProperty.call(t, o) || e(t, r, o);
      }
    };

    function t(e) {
      var r = new URLSearchParams(e),
          t = r.get("user_id");
      if (!t) throw new Error("Cannot parse user id");
      var o = {
        userId: t
      },
          i = r.get("group_id");
      return i && (o.groupId = i), o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getFilter = void 0, r(require("./get-todo"), exports), r(require("./add-todo"), exports), r(require("./delete-todo"), exports), r(require("./update-todo"), exports), exports.getFilter = t;
  }, {
    "./get-todo": "PRp4",
    "./add-todo": "fpvw",
    "./delete-todo": "zPt4",
    "./update-todo": "zASR"
  }],
  "qGjY": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, u) {
        function i(e) {
          try {
            c(o.next(e));
          } catch (t) {
            u(t);
          }
        }

        function a(e) {
          try {
            c(o.throw(e));
          } catch (t) {
            u(t);
          }
        }

        function c(e) {
          var t;
          e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(i, a);
        }

        c((o = o.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var n,
          o,
          r,
          u,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function () {
        return this;
      }), u;

      function a(u) {
        return function (a) {
          return function (u) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (n = 1, o && (r = 2 & u[0] ? o.return : u[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, u[1])).done) return r;

                switch (o = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                  case 0:
                  case 1:
                    r = u;
                    break;

                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };

                  case 5:
                    i.label++, o = u[1], u = [0];
                    continue;

                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === u[0] || 2 === u[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                      i.label = u[1];
                      break;
                    }

                    if (6 === u[0] && i.label < r[1]) {
                      i.label = r[1], r = u;
                      break;
                    }

                    if (r && i.label < r[2]) {
                      i.label = r[2], i.ops.push(u);
                      break;
                    }

                    r[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                u = t.call(e, i);
              } catch (a) {
                u = [6, a], o = 0;
              } finally {
                n = r = 0;
              }
            }

            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.setAddTodoModal = void 0;

    var n = require("../../modules/auth"),
        o = document.getElementById("add-todo-modal");

    function r(r) {
      return e(this, void 0, void 0, function () {
        var e, u, i, a, c;
        return t(this, function (t) {
          return e = o.querySelector(".button-cancel"), u = o.querySelector(".button-submit"), i = o.querySelector("#input-content"), a = o.querySelector("#input-date"), c = function c() {
            o.classList.remove("active");
          }, u.onclick = function () {
            n.getUser().then(function (e) {
              if (!e) throw "cannot get user information";
              var t = {
                content: i.value,
                groupId: null,
                limitDatetime: new Date(a.value).getTime(),
                ownerId: e.uid,
                parentTodoId: null
              };
              r.handleSubmit(t).then(c);
            });
          }, e.onclick = function () {
            r.handleCancel().then(function () {
              c();
            });
          }, i.value = "", a.value = "", [2];
        });
      });
    }

    exports.setAddTodoModal = function (e) {
      o.classList.add("active"), r(e);
    };
  }, {
    "../../modules/auth": "cI6R"
  }],
  "NT9R": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, n, o) {
      return new (n || (n = Promise))(function (r, a) {
        function i(e) {
          try {
            c(o.next(e));
          } catch (t) {
            a(t);
          }
        }

        function u(e) {
          try {
            c(o.throw(e));
          } catch (t) {
            a(t);
          }
        }

        function c(e) {
          var t;
          e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(i, u);
        }

        c((o = o.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var n,
          o,
          r,
          a,
          i = {
        label: 0,
        sent: function sent() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return a = {
        next: u(0),
        throw: u(1),
        return: u(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
        return this;
      }), a;

      function u(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; i;) {
              try {
                if (n = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, a[1])).done) return r;

                switch (o = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                  case 0:
                  case 1:
                    r = a;
                    break;

                  case 4:
                    return i.label++, {
                      value: a[1],
                      done: !1
                    };

                  case 5:
                    i.label++, o = a[1], a = [0];
                    continue;

                  case 7:
                    a = i.ops.pop(), i.trys.pop();
                    continue;

                  default:
                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                      i = 0;
                      continue;
                    }

                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                      i.label = a[1];
                      break;
                    }

                    if (6 === a[0] && i.label < r[1]) {
                      i.label = r[1], r = a;
                      break;
                    }

                    if (r && i.label < r[2]) {
                      i.label = r[2], i.ops.push(a);
                      break;
                    }

                    r[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }

                a = t.call(e, i);
              } catch (u) {
                a = [6, u], o = 0;
              } finally {
                n = r = 0;
              }
            }

            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initNavBar = void 0;

    var n = require("../../modals/todo/add-todo-modal"),
        o = require("../../modules/todo"),
        r = require("../../router");

    function a() {
      var a = this,
          i = r.$todosPage.querySelector("#nav-list"),
          u = (r.$todosPage.querySelector("#nav-todos"), r.$todosPage.querySelector("#nav-account"), r.$todosPage.querySelector("#nav-new"));
      console.log(u), i.onclick = function () {
        r.$todosPage.querySelector(".side-bar").classList.add("active");
      }, u.onclick = function () {
        console.log("hi"), n.setAddTodoModal({
          handleCancel: function handleCancel() {
            return e(a, void 0, void 0, function () {
              return t(this, function (e) {
                return [2];
              });
            });
          },
          handleSubmit: function handleSubmit(n) {
            return e(a, void 0, void 0, function () {
              var e;
              return t(this, function (t) {
                switch (t.label) {
                  case 0:
                    return t.trys.push([0, 2,, 3]), [4, o.addTodo(n)];

                  case 1:
                    return t.sent(), [3, 3];

                  case 2:
                    return e = t.sent(), console.error(e), [3, 3];

                  case 3:
                    return [2];
                }
              });
            });
          }
        });
      };
    }

    exports.initNavBar = a;
  }, {
    "../../modals/todo/add-todo-modal": "qGjY",
    "../../modules/todo": "GQxD",
    "../../router": "kMlt"
  }],
  "DzSv": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = document.createElement("div");
      t.className = "account-state";
      var n = document.getElementById("account-state-template"),
          c = n.content.querySelector(".name"),
          o = n.content.querySelector(".email");
      e ? (n.content.querySelector(".account-container").classList.add("active"), c.textContent = e.name, o.textContent = e.email) : n.content.querySelector(".login-container").classList.add("active");
      return t.appendChild(n.content.cloneNode(!0)), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.$AccountState = void 0, exports.$AccountState = e;
  }, {}],
  "Eu8l": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (t) {
            i(t);
          }
        }

        function c(e) {
          try {
            u(r.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function u(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, c);
        }

        u((r = r.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var n,
          r,
          o,
          i,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function c(i) {
        return function (c) {
          return function (i) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    a.label++, r = i[1], i = [0];
                    continue;

                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break;
                    }

                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break;
                    }

                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break;
                    }

                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                i = t.call(e, a);
              } catch (c) {
                i = [6, c], r = 0;
              } finally {
                n = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, c]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.updateSideBar = void 0;

    var n = require("../../components/account/account-state"),
        r = require("../../router");

    function o(o) {
      return e(this, void 0, void 0, function () {
        var e, a, c, u, l, s, p;
        return t(this, function (t) {
          return e = o.user, a = o.groups, c = r.$todosPage.querySelector(".side-bar"), u = document.getElementById("side-bar-template"), l = u.content.querySelector(".account-state"), s = u.content.querySelector(".menu-container"), l.innerHTML = n.$AccountState(e).innerHTML, s.appendChild(i({
            title: "Todos",
            items: a.map(function (e) {
              return {
                title: e.group_name
              };
            })
          })), c.appendChild(u.content.cloneNode(!0)), p = c.querySelector(".empty-space"), console.log(p), p.onclick = function () {
            c.classList.remove("active");
          }, [2];
        });
      });
    }

    function i(e) {
      var t = e.items,
          n = e.title,
          r = document.createElement("ul");

      if (n) {
        var o = document.createElement("h3");
        o.textContent = n, r.appendChild(o);
      }

      return r.append.apply(r, t.map(function (e) {
        var t = document.createElement("li");
        return t.textContent = e.title, t.onclick = function () {}, t;
      })), r;
    }

    exports.updateSideBar = o;
  }, {
    "../../components/account/account-state": "DzSv",
    "../../router": "kMlt"
  }],
  "psnN": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return t ? r[e].slice(0, 3) : r[e];
    }

    function t(e, t) {
      if (void 0 === t && (t = !1), !e) return "";
      var r = new Date(e);
      return t ? r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate() : r.getMonth() + 1 + "/" + r.getDate();
    }

    function r(e) {
      var t = e.split("/").join("").split(".").join("").split("-").map(function (e) {
        return parseInt(e);
      });
      return new Date(t[0], t[1] - 1, t[2]).getTime();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.convertStringToTimestamp = exports.convertTimestampToString = exports.getMonthString = void 0, exports.getMonthString = e, exports.convertTimestampToString = t, exports.convertStringToTimestamp = r;
  }, {}],
  "yZ5Z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.$TodoItem = void 0;

    var e = require("../../app"),
        t = require("../../modules/todo");

    function o(o, n) {
      var c = document.createElement("div");
      c.id = "todo-" + o.todo_id, c.className = "todo-item " + (o.complete_datetime ? "done" : "");
      var i = document.getElementById("todo-item-template");
      c.appendChild(i.content.cloneNode(!0));
      var a = c.querySelector(".content"),
          d = c.querySelector(".content-edit-container"),
          l = c.querySelector(".content-edit"),
          r = c.querySelector(".actions"),
          s = c.querySelector(".delete-button"),
          u = c.querySelector(".edit-button"),
          m = c.querySelector(".done-button");

      function v() {
        d.className = "unactive", d.style.display = "none", a.className = "active";
      }

      return a.textContent = o.content, l.onblur = v, l.onkeypress = function (c) {
        e.keyInputListener(c, function () {
          o.content != l.value ? (o.content = l.value, t.updateTodo(o).then(n)) : v();
        });
      }, c.onclick = function () {
        r.classList.contains("active") ? r.classList.remove("active") : r.classList.add("active");
      }, s.onclick = function () {
        t.deleteTodo(o.todo_id).then(n);
      }, u.onclick = function () {
        d.className = "active", d.style.display = "flex", a.className = "unactive", l.value = o.content, l.focus();
      }, m.addEventListener("click", function () {
        o.complete_datetime = new Date().getTime(), t.updateTodo(o).then(n);
      }), c.cloneNode(!0);
    }

    exports.$TodoItem = o;
  }, {
    "../../app": "Doqu",
    "../../modules/todo": "GQxD"
  }],
  "Mzky": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.$updateTitle = exports.$Todolist = void 0;

    var e = require("../../modules/DocumnetModules"),
        t = require("../../modules/groups"),
        n = require("../../modules/TimeModules"),
        o = require("./todo-item");

    function i(e, t) {
      var n = document.createElement("div");
      return e.forEach(function (i, l) {
        var d, u;
        0 == l || (d = i.limit_datetime, u = e[l - 1].limit_datetime, d == u || d && u && new Date(d).toDateString() == new Date(u).toDateString() || n.appendChild(r(i.limit_datetime))), n.appendChild(o.$TodoItem(i, t));
      }), console.log(n), console.log(n.children), n;
    }

    exports.$Todolist = i;

    var r = function r(e) {
      var t = document.createElement("div");

      if (t.className = "date-divider", e) {
        var o = new Date(e);
        t.innerHTML = '\n    <div class="container">\n    <h3>' + o.getDate() + "</h3>\n    <p>" + n.getMonthString(o.getMonth(), !0) + "</p>\n    </div>\n    ";
      }

      return t;
    };

    function l(n) {
      var o = n.title,
          i = n.group,
          r = document.getElementById("todo-page-title"),
          l = document.getElementById("todo-container-title-edit");

      function d() {
        r.style.display = "block", l.style.display = "none", l.value = o;
      }

      r.textContent = o, l.value = o, l.onblur = d, d(), l.onkeypress = function (o) {
        e.setEnterInputListener(o, function () {
          if (i) {
            console.log("update group");
            var e = l.value;
            i.group_name = e, t.updateGroup(i).then(n.onUpdate).catch(function (e) {
              console.error(e);
            });
          }
        });
      }, document.getElementById("title-edit-button").onclick = function () {
        if (!i) return;
        r.style.display = "none", l.style.display = "block", l.focus();
      };
    }

    exports.$updateTitle = l;
  }, {
    "../../modules/DocumnetModules": "Ekja",
    "../../modules/groups": "W8x2",
    "../../modules/TimeModules": "psnN",
    "./todo-item": "yZ5Z"
  }],
  "qdeh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.updateTodolist = void 0;

    var e = require("."),
        o = require("../../components/todo/todo-list"),
        t = require("../../router");

    function r(r) {
      t.$todosPage.querySelector(".todolist").innerHTML = o.$Todolist(r, e.$updateView).innerHTML;
    }

    exports.updateTodolist = r;
  }, {
    ".": "Fz7k",
    "../../components/todo/todo-list": "Mzky",
    "../../router": "kMlt"
  }],
  "Fz7k": [function (require, module, exports) {
    "use strict";

    var e = this && this.__awaiter || function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function u(e) {
          try {
            s(n.next(e));
          } catch (t) {
            i(t);
          }
        }

        function a(e) {
          try {
            s(n.throw(e));
          } catch (t) {
            i(t);
          }
        }

        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
            e(t);
          })).then(u, a);
        }

        s((n = n.apply(e, t || [])).next());
      });
    },
        t = this && this.__generator || function (e, t) {
      var r,
          n,
          o,
          i,
          u = {
        label: 0,
        sent: function sent() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;

      function a(i) {
        return function (a) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");

            for (; u;) {
              try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;

                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;

                  case 4:
                    return u.label++, {
                      value: i[1],
                      done: !1
                    };

                  case 5:
                    u.label++, n = i[1], i = [0];
                    continue;

                  case 7:
                    i = u.ops.pop(), u.trys.pop();
                    continue;

                  default:
                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      u = 0;
                      continue;
                    }

                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      u.label = i[1];
                      break;
                    }

                    if (6 === i[0] && u.label < o[1]) {
                      u.label = o[1], o = i;
                      break;
                    }

                    if (o && u.label < o[2]) {
                      u.label = o[2], u.ops.push(i);
                      break;
                    }

                    o[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }

                i = t.call(e, u);
              } catch (a) {
                i = [6, a], n = 0;
              } finally {
                r = o = 0;
              }
            }

            if (5 & i[0]) throw i[1];
            return {
              value: i[0] ? i[1] : void 0,
              done: !0
            };
          }([i, a]);
        };
      }
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.$updateView = exports.initTodoPage = void 0;

    var r,
        n = require("../../modules/auth"),
        o = require("../../modules/groups"),
        i = require("../../modules/todo"),
        u = require("../../router"),
        a = require("./nav-bar"),
        s = require("./side-bar"),
        c = require("./todolist");

    function l() {
      return e(this, void 0, void 0, function () {
        return t(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, n.getUser()];

            case 1:
              return (r = e.sent()) ? (history.pushState({}, "", "?page=todos&user_id=" + r.uid), u.$todosPage.classList.add("active"), d(), [2]) : (u.navigateTo.login(), [2]);
          }
        });
      });
    }

    function d() {
      return e(this, void 0, void 0, function () {
        var e, n, l;
        return t(this, function (t) {
          switch (t.label) {
            case 0:
              return r ? [4, o.getGroupsFromUser(r.uid)] : (u.navigateTo.todos(), [2]);

            case 1:
              return e = t.sent(), n = i.getFilter(location.search), [4, i.getTodos(n)];

            case 2:
              return l = t.sent(), s.updateSideBar({
                groups: e,
                user: r
              }), a.initNavBar(), c.updateTodolist(l), [2];
          }
        });
      });
    }

    exports.initTodoPage = l, exports.$updateView = d;
  }, {
    "../../modules/auth": "cI6R",
    "../../modules/groups": "W8x2",
    "../../modules/todo": "GQxD",
    "../../router": "kMlt",
    "./nav-bar": "NT9R",
    "./side-bar": "Eu8l",
    "./todolist": "qdeh"
  }],
  "kMlt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.$loginPage = exports.$todosPage = exports.$welcomePage = exports.navigateTo = exports.updatePage = exports.getPagePath = void 0;

    var e = require("./modules/auth"),
        o = require("./pages/login-page"),
        t = require("./pages/login-require-page"),
        a = require("./pages/todo-page");

    function g(e) {
      return new URLSearchParams(e).get("page");
    }

    function n() {
      var o = g(location.search);
      o ? (s(), p[o]()) : e.getUser().then(function (e) {
        console.log("user is"), console.log(e), e ? exports.navigateTo.todos() : exports.navigateTo.welcome();
      });
    }

    function r(e) {
      history.pushState({}, "", "?page=" + e), n();
    }

    function s() {
      Object.values(i).forEach(function (e) {
        e.className = "page";
      });
    }

    exports.getPagePath = g, exports.updatePage = n, exports.navigateTo = {
      login: function login() {
        return r("login");
      },
      todos: function todos() {
        return r("todos");
      },
      welcome: function welcome() {
        return r("welcome");
      }
    }, exports.$welcomePage = document.getElementById("welcome-page"), exports.$todosPage = document.getElementById("todo-page"), exports.$loginPage = document.getElementById("login-page");
    var i = {
      welcome: exports.$welcomePage,
      login: exports.$loginPage,
      todos: exports.$todosPage
    },
        p = {
      welcome: t.initLoginRequirePage,
      login: o.initLoginPage,
      todos: a.initTodoPage
    };
  }, {
    "./modules/auth": "cI6R",
    "./pages/login-page": "nKoR",
    "./pages/login-require-page": "ZfCR",
    "./pages/todo-page": "Fz7k"
  }],
  "Doqu": [function (require, module, exports) {
    "use strict";

    var n, e;
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.keyInputListener = exports.$renderAccountState = exports.serverUrl = exports.RUNNING_MODE = void 0;

    var t = require("./router");

    exports.RUNNING_MODE = "PRODUCTION", (null === (n = "production") || void 0 === n ? void 0 : n.includes("DEV")) ? exports.RUNNING_MODE = "DEV" : (null === (e = "production") || void 0 === e ? void 0 : e.toString().includes("LOCAL")) && (exports.RUNNING_MODE = "LOCAL"), "PRODUCTION" != exports.RUNNING_MODE && console.log("server is running as " + exports.RUNNING_MODE);
    var o = {
      DEV: "http://" + location.hostname,
      LOCAL: "http://" + location.hostname,
      PRODUCTION: "https://pandajiny.shop"
    };

    function i() {
      t.updatePage(), document.querySelector(".modal-container").onclick = function (n) {
        console.log("hi"), n.cancelBubble = !1;
      };
    }

    exports.serverUrl = o[exports.RUNNING_MODE], i();

    var r = require("./modules/auth");

    function u(n) {
      var e = n.$container,
          t = n.user;
      t ? a({
        $container: e,
        user: t
      }) : c({
        $container: e
      });
    }

    function a(n) {
      var e = n.user,
          o = n.$container,
          i = e.email,
          u = e.name;
      o.innerHTML = '\n  <div id="user-information">\n    <p id="name">' + u + '</p>\n    <p id="email">' + i + '</p>\n  </div>\n  <div id="account-actions">\n    <a>Profile</a>\n    <a id="signout-button">Sign out</a>\n  </div>\n';
      document.getElementById("signout-button").addEventListener("click", function () {
        r.doSignOut().then(function (n) {
          n.ok && t.navigateTo.login();
        });
      });
    }

    function c(n) {
      n.$container.innerHTML = '\n    <div id="login-require">\n      <button id="login-button">LOG IN</button>\n    </div>\n';
      document.getElementById("login-button").addEventListener("click", function () {
        t.navigateTo.login();
      });
    }

    function s(n, e) {
      "Enter" == n.key && e();
    }

    exports.$renderAccountState = u, exports.keyInputListener = s;
  }, {
    "./router": "kMlt",
    "./modules/auth": "cI6R"
  }]
}, {}, ["Doqu"], null);
},{}],"C:/Users/astic/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62881" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/astic/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.fb44e770.js"], null)
//# sourceMappingURL=/app.fb44e770.fd92f9da.js.map