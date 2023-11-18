import express from "express";
import home from "./routes/home.js";
import { cwd } from "node:process";
import path from "node:path";
import users from "./routes/users.js";

const app = express();
app.use(express.static(path.join(cwd(), "public")));

app.use(home);
app.use(users);

app.listen(3000);
