"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3060;
app.use(_express["default"]["static"]("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm

app.get('/{*any}', function (req, res) {
  return res.sendFile(_path["default"].resolve('./frontend/public', 'index.html'));
} //added this in and now it works out, huzzah!
);
app.listen(port, function () {
  console.log("Listening on http://localhost:".concat(port));
});