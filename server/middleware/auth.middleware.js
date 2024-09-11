import jwt from "jsonwebtoken";

const authenMiddleware = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers["authorization"]?.split(" ")[1];

  // No token provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
};

export default authenMiddleware;
