"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectAndSeed = connectAndSeed;
exports.db = void 0;
var _mongodb = require("mongodb");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // db/index.js
var uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
var client = new _mongodb.MongoClient(uri);
var db;
function connectAndSeed() {
  return _connectAndSeed.apply(this, arguments);
} // Export db and connect function
function _connectAndSeed() {
  _connectAndSeed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var usersColl, projectsColl, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          console.log('MongoDB connection established successfully');
          _context.p = 1;
          _context.n = 2;
          return client.connect();
        case 2:
          exports.db = db = client.db('simpledb');
          console.log('Mongo connected');

          // Seed once (check counts)
          usersColl = db.collection('users');
          projectsColl = db.collection('projects');
          _context.n = 3;
          return usersColl.countDocuments();
        case 3:
          _t = _context.v;
          if (!(_t === 0)) {
            _context.n = 6;
            break;
          }
          console.log('Seeding data...');
          _context.n = 4;
          return usersColl.insertMany([{
            _id: 'user1',
            username: 'alice',
            email: 'alice@test.com',
            password: 'Password1'
          }, {
            _id: 'user2',
            username: 'bob',
            email: 'bob@test.com',
            password: 'Password2'
          }]);
        case 4:
          _context.n = 5;
          return projectsColl.insertMany([{
            _id: 'proj1',
            name: 'Alpha',
            description: 'Desc1',
            owner: 'user1',
            checkins: [{
              message: 'Check1',
              user: 'user1'
            }]
          }, {
            _id: 'proj2',
            name: 'Beta',
            description: 'Desc2',
            owner: 'user2',
            checkins: [{
              message: 'Check2',
              user: 'user2'
            }, {
              message: 'Check3',
              user: 'user1'
            }]
          }]);
        case 5:
          console.log('Seeded!');
        case 6:
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t2 = _context.v;
          console.error('Connection/seed error:', _t2);
          throw _t2;
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _connectAndSeed.apply(this, arguments);
}