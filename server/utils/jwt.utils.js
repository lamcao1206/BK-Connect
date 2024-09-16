import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
    emai: user.email,
    avatar: user.avatar,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export { generateToken, verifyToken };
