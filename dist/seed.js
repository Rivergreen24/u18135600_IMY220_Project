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
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Mongo URI
var uri = "mongodb+srv://DTStevens:jhYNdUnCPHU6xQLn@imy220.r3kp7ip.mongodb.net/?retryWrites=true&w=majority&appName=IMY220";
var client = new _mongodb.MongoClient(uri);
var db;
function connectAndSeed() {
  return _connectAndSeed.apply(this, arguments);
}
function _connectAndSeed() {
  _connectAndSeed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var usersColl, projectsColl, users, projects, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return client.connect();
        case 1:
          exports.db = db = client.db("simpledb3");
          console.log("✅ MongoDB connected");
          usersColl = db.collection("users");
          projectsColl = db.collection("projects"); // Clear collections (optional, for fresh seed)
          _context.n = 2;
          return usersColl.deleteMany({});
        case 2:
          _context.n = 3;
          return projectsColl.deleteMany({});
        case 3:
          // Seed users
          users = [{
            userId: "u001",
            username: "alice",
            email: "alice@test.com",
            password: "Password1",
            bio: "Frontend developer and designer",
            profileImage: "/images/alice.jpg",
            friends: ["u002", "u003"],
            savedProjects: ["p002", "p003"],
            createdProjects: ["p001"],
            createdAt: new Date()
          }, {
            userId: "u002",
            username: "bob",
            email: "bob@test.com",
            password: "Password2",
            bio: "Backend enthusiast",
            profileImage: "/images/bob.jpg",
            friends: ["u001"],
            savedProjects: ["p001"],
            createdProjects: ["p002"],
            createdAt: new Date()
          }, {
            userId: "u003",
            username: "charlie",
            email: "charlie@test.com",
            password: "Password3",
            bio: "Fullstack developer",
            profileImage: "/images/charlie.jpg",
            friends: ["u001"],
            savedProjects: [],
            createdProjects: ["p003"],
            createdAt: new Date()
          }];
          _context.n = 4;
          return usersColl.insertMany(users);
        case 4:
          console.log("✅ Users seeded");

          // Seed projects
          projects = [{
            projectId: "p001",
            name: "Alpha",
            description: "AI-based task tracker for students",
            owner: "u001",
            members: ["u001", "u002"],
            hashtags: ["#ai", "#task", "#student"],
            type: "Web App",
            version: "1.0",
            createdAt: new Date(),
            updatedAt: new Date(),
            image: "/images/projects/alpha.png",
            status: "checked_in",
            checkins: [{
              user: "u001",
              message: "Initial commit",
              timestamp: new Date()
            }, {
              user: "u002",
              message: "Added login form",
              timestamp: new Date()
            }],
            files: [{
              name: "index.html",
              url: "/files/alpha/index.html"
            }, {
              name: "style.css",
              url: "/files/alpha/style.css"
            }],
            discussion: [{
              user: "u002",
              message: "Should we add a light mode?",
              timestamp: new Date()
            }]
          }, {
            projectId: "p002",
            name: "Beta",
            description: "Student project manager",
            owner: "u002",
            members: ["u002", "u001", "u003"],
            hashtags: ["#manager", "#tasks", "#team"],
            type: "Web App",
            version: "1.0",
            createdAt: new Date(),
            updatedAt: new Date(),
            image: "/images/projects/beta.png",
            status: "checked_out",
            checkins: [{
              user: "u002",
              message: "Created base project",
              timestamp: new Date()
            }, {
              user: "u001",
              message: "UI tweaks",
              timestamp: new Date()
            }],
            files: [{
              name: "app.js",
              url: "/files/beta/app.js"
            }],
            discussion: []
          }, {
            projectId: "p003",
            name: "Gamma",
            description: "Collaboration tool for developers",
            owner: "u003",
            members: ["u003", "u001"],
            hashtags: ["#collab", "#dev", "#tools"],
            type: "Web App",
            version: "1.0",
            createdAt: new Date(),
            updatedAt: new Date(),
            image: "/images/projects/gamma.png",
            status: "checked_in",
            checkins: [{
              user: "u003",
              message: "Initial setup",
              timestamp: new Date()
            }],
            files: [],
            discussion: []
          }];
          _context.n = 5;
          return projectsColl.insertMany(projects);
        case 5:
          console.log("✅ Projects seeded");
          return _context.a(2, db);
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.error("❌ Error seeding database:", _t);
          throw _t;
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _connectAndSeed.apply(this, arguments);
}