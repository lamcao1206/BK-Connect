import handleError from "../utils/error.handle.js";

const errorMiddleware = (err, req, res, next) => {
  const { error, statusCode } = handleError(err);
  return res.status(statusCode).json({
    message: "Some error occurred",
    status: statusCode,
    error,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
  });
};

export default errorMiddleware;
