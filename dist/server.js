"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3060;
app.use(_express["default"]["static"]("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm

app.post('/signup', function (req, res) {
  // Dummy response
  res.json({
    success: true,
    message: 'User signed up (stubbed)',
    token: 'dummy-token'
  });
});

// Stubbed sign-in endpoint
app.post('/signin', function (req, res) {
  // Dummy response
  res.json({
    success: true,
    message: 'User signed in (stubbed)',
    token: 'dummy-token'
  });
});
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