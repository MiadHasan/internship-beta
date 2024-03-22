import express from "express";
import { createUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.patch("/:id", updateUser);

export default router;
