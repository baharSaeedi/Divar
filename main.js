const express = require("express");
const dotenv = require("dotenv");
const swaggerDocSetUp = require("./src/config/swagger.config");
dotenv.config();

async function main() {
  const PORT = process.env.PORT;
  const app = express();
  require("./src/config/mongoose.config");
  swaggerDocSetUp(app);
  app.listen(PORT, () => {
    console.log(`app run on https://localhost:${PORT}`);
  });
}

main();
