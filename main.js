const express = require("express");
const swaggerDocSetUp = require("./src/config/swagger.config");
const dotenv = require("dotenv");
const { allRoutes } = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exception/notFound.handler");
const errorHandler = require("./src/common/exception/errorHandler.handler");
dotenv.config();

async function main() {
  const app = express();
  const PORT = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  swaggerDocSetUp(app);
  app.use(allRoutes);
  NotFoundHandler(app);
  errorHandler(app);
  app.listen(PORT, () => {
    console.log(`app run on https://localhost:${PORT}`);
  });
}

main();
