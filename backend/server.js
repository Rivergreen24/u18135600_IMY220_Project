import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm


app.post('/signup', (req, res) => {
  // Dummy response
  const { email, password } = req.body;
  console.log("Signup request:", email, password);
  res.json({ success: true, message: 'User signed up (stubbed)', token: 'dummy-token' });
});

// Stubbed sign-in endpoint
app.post('/signin', (req, res) => {
  // Dummy response
  const { email, password } = req.body;
  console.log("Login request:", email, password);
  res.json({ success: true, message: 'User signed in (stubbed)', token: 'dummy-token' });
});


app.get('/{*any}', (req, res) => // why does it not like this being "*"?
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
);

// app.get('/{*any}', (req,res) => 
//   res.sendFile(path.resolve('./frontend/public','index.html')) //added this in and now it works out, huzzah!, why is it not working with ../
// );

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

