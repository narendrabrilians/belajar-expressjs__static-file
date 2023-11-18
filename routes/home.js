import express from "express";
import { cwd } from "node:process";
import path from "node:path";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(cwd(), "views", "home.html"));
});

export default router;
