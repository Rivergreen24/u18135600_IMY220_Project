"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _mongodb = require("mongodb");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var app = (0, _express["default"])();
var port = 3000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"]["static"]("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm

var uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220"; // Atlas or local
var client = new _mongodb.MongoClient(uri);
var db, users;
function connectAndSeed() {
  return _connectAndSeed.apply(this, arguments);
} // Connect & seed on startup
function _connectAndSeed() {
  _connectAndSeed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var usersColl, projectsColl, _t9, _t0;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return client.connect();
        case 1:
          db = client.db('simpledb');
          console.log('Mongo connected');

          // Seed once (check counts)
          usersColl = db.collection('users');
          projectsColl = db.collection('projects');
          _context9.n = 2;
          return usersColl.countDocuments();
        case 2:
          _t9 = _context9.v;
          if (!(_t9 === 0)) {
            _context9.n = 5;
            break;
          }
          console.log('Seeding data...');
          _context9.n = 3;
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
        case 3:
          _context9.n = 4;
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
        case 4:
          console.log('Seeded!');
        case 5:
          _context9.n = 7;
          break;
        case 6:
          _context9.p = 6;
          _t0 = _context9.v;
          console.error('Connection/seed error:', _t0);
        case 7:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 6]]);
  }));
  return _connectAndSeed.apply(this, arguments);
}
connectAndSeed();

// Routes: Auth (login/signup)
app.post('/api/auth/login', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var _req$body, email, password, user, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.n = 1;
          return db.collection('users').findOne({
            email: email
          });
        case 1:
          user = _context.v;
          if (user && user.password === password) {
            res.json({
              success: true,
              // <-- success flag
              message: "Login successful",
              // <-- descriptive message
              user: {
                id: user._id,
                username: user.username,
                email: user.email
              }
            });
          } else {
            res.status(401).json({
              success: false,
              // <-- failed flag
              message: "Invalid credentials"
            });
          }
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          res.status(500).json({
            success: false,
            message: "Server error",
            error: _t.message
          });
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/api/auth/signup', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _req$body2, username, email, password, result, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _req$body2 = req.body, username = _req$body2.username, email = _req$body2.email, password = _req$body2.password;
          _context2.n = 1;
          return db.collection('users').insertOne({
            username: username,
            email: email,
            password: password
          });
        case 1:
          result = _context2.v;
          res.json({
            user: {
              id: result.insertedId,
              username: username,
              email: email
            }
          });
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          res.status(500).json({
            error: _t2.message
          });
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

// Routes: Profiles (view/edit own—'me' hardcoded to user1 for demo)
app.get('/api/users/:id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var targetId, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          targetId = req.params.id === 'me' ? 'user1' : req.params.id;
          _context3.n = 1;
          return db.collection('users').findOne({
            _id: targetId
          });
        case 1:
          user = _context3.v;
          res.json(user || {
            error: 'Not found'
          });
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          res.status(500).json({
            error: _t3.message
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.put('/api/users/:id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var targetId, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          targetId = req.params.id === 'me' ? 'user1' : req.params.id;
          _context4.n = 1;
          return db.collection('users').updateOne({
            _id: targetId
          }, {
            $set: req.body
          });
        case 1:
          res.json({
            message: 'Updated'
          });
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          res.status(500).json({
            error: _t4.message
          });
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

// Routes: Projects (list/create/view/checkin)
app.get('/api/projects', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var projects, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return db.collection('projects').find({}).toArray();
        case 1:
          projects = _context5.v;
          res.json(projects);
          _context5.n = 3;
          break;
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          res.status(500).json({
            error: _t5.message
          });
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());
app.post('/api/projects', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var project, result, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          project = _objectSpread(_objectSpread({}, req.body), {}, {
            owner: 'user1',
            checkins: []
          }); // Hardcode owner for demo
          _context6.n = 1;
          return db.collection('projects').insertOne(project);
        case 1:
          result = _context6.v;
          res.json({
            id: result.insertedId
          });
          _context6.n = 3;
          break;
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          res.status(500).json({
            error: _t6.message
          });
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
app.get('/api/projects/:id', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var project, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return db.collection('projects').findOne({
            _id: req.params.id
          });
        case 1:
          project = _context7.v;
          res.json(project || {
            error: 'Not found'
          });
          _context7.n = 3;
          break;
        case 2:
          _context7.p = 2;
          _t7 = _context7.v;
          res.status(500).json({
            error: _t7.message
          });
        case 3:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());
app.put('/api/projects/:id', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var checkin, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          checkin = req.body.checkin; // e.g., { message: 'New checkin' }
          _context8.n = 1;
          return db.collection('projects').updateOne({
            _id: req.params.id
          }, {
            $set: req.body,
            // For other updates
            $push: {
              checkins: _objectSpread(_objectSpread({}, checkin), {}, {
                user: 'user1',
                timestamp: new Date()
              })
            } // Hardcode user
          });
        case 1:
          res.json({
            message: 'Updated'
          });
          _context8.n = 3;
          break;
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          res.status(500).json({
            error: _t8.message
          });
        case 3:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function (_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}());
app.get('/{*any}', function (req, res) {
  return (
    // why does it not like this being "*"?
    res.sendFile(_path["default"].join(__dirname, '../frontend/public', 'index.html'))
  );
} //added this in and now it works out, huzzah!, why is it not working with ../
);

// app.get('/{*any}', (req,res) => 
//   res.sendFile(path.resolve('./frontend/public','index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
// );

app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});