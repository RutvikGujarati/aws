const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello From Home Directory</h1>");
});

app.get("/docker", (req, res) => {
  res.send(`
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        padding: 20px;
        text-align: center;
      }

      h1 {
        color: purple;
      }

      hr {
        border: 2px solid #000;
        margin: 20px 0;
      }

      h2 {
        color: black;
      }

      h3 {
        text-align: center;
        color: red;
        margin-top: 30px;
      }
    </style>

    <h1>Docker Response Running</h1>
    <hr>
    <h2>Welcome to the AWS Running Docker Site.</h2>
    <hr>
    <h3>Site created by Gujarati Rutvik</h3>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port : http://localhost:${port}`);
});
