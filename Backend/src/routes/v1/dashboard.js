const express = require("express");
const {adminDashboard,userDashboard } = require("../../controllers/dashboardController.js");
const router = express.Router();
const {isAdmin} = require("../../middlewares/isAdmin.js")
const {isAuthenicated} = require("../../middlewares/isAuthentication.js")



router.get("/admin/tasks", [isAuthenicated,isAdmin],adminDashboard);
router.get("/user/tasks", [isAuthenicated],userDashboard);

module.exports = router;
