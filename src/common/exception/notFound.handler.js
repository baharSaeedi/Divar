function NotFoundHandler(app) {
  app.use((req, res, next) => {
    res.status(404).json({
      message: "NOT FOUND!",
    });
  });
}

module.exports = NotFoundHandler;
