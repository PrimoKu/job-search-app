const express = require("express");
router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const dashboardController = new DashboardController();
const { checkUser, requireAuth } = require('../middlewares/AuthMiddleware');

router.route('*').get(checkUser);
router.route('/').get(dashboardController.homePageGet);
router.route('/login').get(dashboardController.loginPageGet, function (req, res) { res. redirect('back')});
router.route('/register').get(dashboardController.registerPageGet);
router.route('/:id').get(requireAuth, dashboardController.myJobPageGet);

module.exports = router;