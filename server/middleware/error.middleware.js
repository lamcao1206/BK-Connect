import handleError from "../utils/error.handle.js";

const errorMiddleware = (err, req, res, next) => {
  const { errors, statusCode } = handleError(err);
  return res.status(statusCode).json({
    message: err.message || "Some error occurred",
    status: statusCode,
    errors,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
  });
};

export default errorMiddleware;
