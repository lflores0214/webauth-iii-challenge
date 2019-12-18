const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const secret = process.env.JWT_SECRET || "Secret Squirrel";

    jwt.verify(authorization, secret, function(error, token) {
      if (error) {
        res.status(401).json({
          message: "invalid token"
        });
      } else {
        req.token = token;
        next();
      }
    });
  } else {
    res.status(400).json({
      message: "please login and try again"
    });
  }
};
