"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectRoutes = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var projectRoutes = exports.projectRoutes = function projectRoutes(app, db) {
  // Get all projects
  app.get("/api/projects", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
      var projects, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return db.collection("projects").find({}).toArray();
          case 1:
            projects = _context.v;
            res.json(projects);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            res.status(500).json({
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

  // Get a single project by projectId
  app.get("/api/projects/:id", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
      var projectId, project, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            projectId = req.params.id;
            _context2.n = 1;
            return db.collection("projects").findOne({
              projectId: projectId
            });
          case 1:
            project = _context2.v;
            if (project) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, res.status(404).json({
              error: "Project not found"
            }));
          case 2:
            res.json(project);
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

  // Create a new project
  app.post("/api/projects", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
      var project, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            project = _objectSpread(_objectSpread({}, req.body), {}, {
              checkins: []
            });
            _context3.n = 1;
            return db.collection("projects").insertOne(project);
          case 1:
            result = _context3.v;
            res.json({
              projectId: project.projectId || result.insertedId
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

  // Update project (PUT)
  app.put("/api/projects/:id", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
      var projectId, update, updatedProject, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            projectId = req.params.id;
            update = req.body;
            _context4.n = 1;
            return db.collection("projects").findOneAndUpdate({
              projectId: projectId
            }, {
              $set: update
            }, {
              returnDocument: "after"
            });
          case 1:
            updatedProject = _context4.v;
            if (updatedProject.value) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2, res.status(404).json({
              error: "Project not found"
            }));
          case 2:
            res.json(updatedProject.value);
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            res.status(500).json({
              error: _t4.message
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  app["delete"]("/api/projects/:id/members", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
      var userId, result, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            userId = req.body.userId;
            if (userId) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, res.status(400).json({
              error: "userId is required"
            }));
          case 1:
            _context5.n = 2;
            return db.collection("projects").findOneAndUpdate({
              projectId: req.params.id
            }, {
              $pull: {
                members: userId
              }
            }, {
              returnDocument: "after"
            });
          case 2:
            result = _context5.v;
            // if (!result.value) {
            //   return res.status(404).json({ error: "Project not found" });
            // }

            res.json(result.value);
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            res.status(500).json({
              error: _t5.message
            });
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
  app.post("/api/projects/:id/members", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
      var userId, result;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            userId = req.body.userId;
            _context6.n = 1;
            return db.collection("projects").findOneAndUpdate({
              projectId: req.params.id
            }, {
              $addToSet: {
                members: userId
              }
            }, {
              returnDocument: "after"
            });
          case 1:
            result = _context6.v;
            res.json(result.value);
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
  app.put("/api/projects/:id/owner", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
      var newOwnerId, result;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            newOwnerId = req.body.newOwnerId;
            _context7.n = 1;
            return db.collection("projects").findOneAndUpdate({
              projectId: req.params.id
            }, {
              $set: {
                owner: newOwnerId
              }
            }, {
              returnDocument: "after"
            });
          case 1:
            result = _context7.v;
            res.json(result.value);
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());

  // Delete project
  app["delete"]("/api/projects/:id", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return db.collection("projects").deleteOne({
              projectId: req.params.id
            });
          case 1:
            res.json({
              success: true
            });
          case 2:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
  app.get("/api/projects/search", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
      var q, projects, _t6;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            q = (req.query.q || "").trim();
            if (q) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2, res.json([]));
          case 1:
            _context9.p = 1;
            _context9.n = 2;
            return db.collection("projects").find({
              name: {
                $regex: q,
                $options: "i"
              }
            }).limit(10).toArray();
          case 2:
            projects = _context9.v;
            res.json(projects);
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t6 = _context9.v;
            console.error("Project search error:", _t6);
            res.status(500).json({
              error: "Search failed"
            });
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());

  // SEARCH USERS
  app.get("/api/users/search", /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
      var q, users;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            q = (req.query.q || "").trim();
            if (q) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2, res.json([]));
          case 1:
            _context0.n = 2;
            return db.collection("users").find({
              $or: [{
                username: {
                  $regex: q,
                  $options: "i"
                }
              }, {
                bio: {
                  $regex: q,
                  $options: "i"
                }
              }]
            }).limit(10).toArray();
          case 2:
            users = _context0.v;
            res.json(users);
          case 3:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};