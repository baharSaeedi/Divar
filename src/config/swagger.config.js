const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerDocSetUp(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: "divar",
        version: "v.0.0.1",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = swaggerDocSetUp;
