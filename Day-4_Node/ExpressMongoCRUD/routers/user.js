import express from "express";
import { createUser, getUserById, updateUser } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.patch("/:id", updateUser);
router.get("/:id", getUserById);

export default router;
