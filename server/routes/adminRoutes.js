import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { getStats } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/login", adminLogin);

router.get("/stats", authMiddleware, getStats);

export default router;