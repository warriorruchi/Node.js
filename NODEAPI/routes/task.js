import express from "express";
import { deleteTask, getMyTask, newtask, updateTask } from "../controller/task.js";
import { isAuthizated } from "../Middleware/auth.js";

const router= express.Router();


router.post("/task/new",isAuthizated,newtask)
router.get("/task/my",isAuthizated,getMyTask)
router.route("/task/:id").put(isAuthizated,updateTask).delete(isAuthizated,deleteTask);


export default router;