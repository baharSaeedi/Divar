function errorHandler(app) {
  app.use((error, req, res, next) => {
    const status = error?.status || error?.statusCode || 500;
    res.status(status).json({
      message: error?.message || "internal server error",
    });
  });
}

module.exports = errorHandler;
