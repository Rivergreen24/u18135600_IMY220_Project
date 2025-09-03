import express from "express";
import path from "path";

const app = express();

const port = 3060;

app.use(express.static("./frontend/public")); //changed to "./frontend/public" instead of "public" this so that it actually hmmm

app.get('/{*any}', (req,res) => 
  res.sendFile(path.resolve('./frontend/public','index.html')) //added this in and now it works out, huzzah!
);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

