const jwt = require("jsonwebtoken");
const user_model = require("../models/user_model.js");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("login");
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await user_model
      .findOne({ email: decoded.email })
      .select("-password");

    if (!user) {
      return res.redirect("login");
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.redirect("/login");
  }
};


