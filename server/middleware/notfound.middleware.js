const notFoundMiddleware = (req, res, next) => {
  return res.status(404).json({ message: "Resource not found" });
};

export default notFoundMiddleware;
