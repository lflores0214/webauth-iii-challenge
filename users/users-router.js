const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware");
const checkDepartment = require("../auth/checkDepartment-middleWare");

router.get("/", restricted, (req, res) => {
  Users.find(req.user.department)
    .then(users => {
      res.status(200).json({ User: req.user.username, users });
    })
    .catch(error =>
      res
        .status(500)
        .send(error)
        .json({
          errorMessage: "error getting users"
        })
    );
});


module.exports = router;
