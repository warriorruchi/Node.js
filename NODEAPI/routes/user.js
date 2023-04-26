import express from "express";
import { Users } from "../models/user.js";
import { getUserall, getmyprofile, login, logout, register } from "../controller/user.js";
import { isAuthizated } from "../Middleware/auth.js";


const router= express.Router();

router.get("/users/all",getUserall);
router.post("/users/new",register);
router.post("/users/login",login);
router.get("/users/logout",logout);
router.get("/users/me", isAuthizated,getmyprofile)


export default router;

