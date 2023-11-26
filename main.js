const express = require("express");
const swaggerDocSetUp = require("./src/config/swagger.config");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  const app = express();
  const PORT = process.env.PORT;
  require("./src/config/mongoose.config");
  swaggerDocSetUp(app);
  app.listen(PORT, () => {
    console.log(`app run on https://localhost:${PORT}`);
  });
}

main();
