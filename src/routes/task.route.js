import { Router } from "express";
import { taskValidation } from "../middleware/task.middleware.js";
import { addTask, deleteTask, getTask, updateTask } from "../controller/task.controller.js";
import { validateUpdateTask } from "../middleware/update.middleware.js";

const router = Router();

router.route("/task").post(taskValidation,addTask);
router.route("/task").get(getTask);
router.route("/task/:id").get(getTask);
router.route("/task/:id").patch(validateUpdateTask,updateTask);
router.route("/task/:id").delete(deleteTask);
router.route("/task/:id/complete").patch(getTask);

export default router;