"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var userRoutes = exports.userRoutes = function userRoutes(app, db) {
  // Get single user by userId
  app.get("/api/users/:id", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var user, publicInfo, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return db.collection("users").findOne({
              userId: req.params.id
            });
          case 1:
            user = _context.v;
            if (user) {
              _context.n = 2;
              break;
            }
            return _context.a(2, res.status(404).json({
              error: "User not found"
            }));
          case 2:
            publicInfo = {
              userId: user.userId,
              username: user.username,
              email: user.email || "",
              bio: user.bio || "",
              friends: user.friends || [],
              createdProjects: user.createdProjects || [],
              savedProjects: user.savedProjects || []
            };
            res.json(publicInfo);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            res.status(500).json({
              error: _t.message
            });
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  // Get multiple users by userIds
  app.get("/api/users", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var idsQuery, ids, users, publicUsers, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            idsQuery = req.query.ids;
            if (idsQuery) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, res.status(400).json({
              error: "No user IDs provided"
            }));
          case 1:
            ids = idsQuery.split(",");
            _context2.n = 2;
            return db.collection("users").find({
              userId: {
                $in: ids
              }
            }).toArray();
          case 2:
            users = _context2.v;
            publicUsers = users.map(function (u) {
              return {
                userId: u.userId,
                username: u.username,
                email: u.email || "",
                bio: u.bio || "",
                friends: u.friends || [],
                createdProjects: u.createdProjects || [],
                savedProjects: u.savedProjects || []
              };
            });
            res.json(publicUsers);
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            res.status(500).json({
              error: _t2.message
            });
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  // Update user profile
  app.put("/api/users/:id", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var _req$body, username, bio, email, userId, updateFields, updatedUser, u, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _req$body = req.body, username = _req$body.username, bio = _req$body.bio, email = _req$body.email;
            userId = req.params.id;
            updateFields = {};
            if (username !== undefined) updateFields.username = username;
            if (bio !== undefined) updateFields.bio = bio;
            if (email !== undefined) updateFields.email = email;
            if (!(Object.keys(updateFields).length === 0)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, res.status(400).json({
              error: "No fields to update"
            }));
          case 1:
            _context3.n = 2;
            return db.collection("users").findOneAndUpdate({
              userId: userId
            }, {
              $set: updateFields
            }, {
              returnDocument: "after"
            });
          case 2:
            updatedUser = _context3.v;
            if (updatedUser.value) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2, res.status(404).json({
              error: "User not found"
            }));
          case 3:
            u = updatedUser.value;
            res.json({
              userId: u.userId,
              username: u.username,
              email: u.email || "",
              bio: u.bio || "",
              friends: u.friends || [],
              createdProjects: u.createdProjects || [],
              savedProjects: u.savedProjects || []
            });
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            console.error("Error updating user:", _t3);
            res.status(500).json({
              error: _t3.message
            });
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 4]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};