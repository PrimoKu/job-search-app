const express = require("express");
router = express.Router();
const JobController = require('../controllers/JobController');
const jobController = new JobController();
const { JobCreateValidator, JobUpdateValidator } = require('../middlewares/Validators');
const { requireAuth, checkUser } = require('../middlewares/AuthMiddleware');
  
router.route('/').get(jobController.getJobs).post(requireAuth, JobCreateValidator, jobController.createJob);
router.route('/:id').get(jobController.getJob).put(requireAuth, JobUpdateValidator, jobController.updateJob).delete(requireAuth, jobController.deleteJob);

router.route('/favorite/add/:id').put(requireAuth, jobController.addFavoriteJob);
router.route('/favorite/remove/:id').put(requireAuth, jobController.removeFavoriteJob);

module.exports = router;