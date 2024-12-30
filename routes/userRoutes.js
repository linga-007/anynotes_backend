import express from "express";
import { signup, login } from "../controllers/registerUser.js";

const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

export default router;
