import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

// The validateJobInput middleware is executed before the createJob handler.
router.route("/").get(getAllJobs).post(validateJobInput, createJob);

// router.route("/stats").get(showStats);

// The validateJobInput middleware is executed before the updateJob handler.
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateIdParam, validateJobInput, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
