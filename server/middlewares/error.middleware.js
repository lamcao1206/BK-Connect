import handleError from "../utils/error.handle.js";

export const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

export const errorMiddleware = (err, req, res, next) => {
  const { message, statusCode } = handleError(err);

  return res.status(statusCode).json({
    message,
    status: statusCode,
    timestamp: new Date().toISOString(),
  });
};
