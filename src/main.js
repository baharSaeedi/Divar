const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const PORT = process.env.PORT;
  const app = express();

  app.listen(PORT, () => {
    console.log(`app run on https://localhost:${PORT}`);
  });
}
