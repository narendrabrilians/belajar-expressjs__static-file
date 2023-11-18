import express from "express";
import { cwd } from "node:process";
import path from "node:path";

const router = express.Router();

router.get("/users", (req, res) => {
  res.sendFile(path.join(cwd(), "src", "users.html"));
});

export default router;
