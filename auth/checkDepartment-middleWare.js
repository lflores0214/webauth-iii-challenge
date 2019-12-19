module.exports = function checkDepartment(department) {
  return function(req, res, next) {
    if (req.token && department === req.token.department) {
      next();
    } else {
      res.status(403).json({
        message: "Unauthorized"
      });
    }
  };
};
