const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("header",authHeader);
  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }
  const token = authHeader.split(" ")[0];
  console.log(token);
  try {
    const decodedToken = await jwt.verify(token, "codistan_ventures");
    req.userData = { email: decodedToken.email, userId: decodedToken._id };
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }
};
