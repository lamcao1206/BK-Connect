import handleError from "../utils/error.handle.js";

const errorMiddleware = (err, req, res, next) => {
  try {
    const errors = handleError(err);
    res.status(500).json({ errors });
  } catch (err) {
    next(err);
  }
};

export default errorMiddleware;
