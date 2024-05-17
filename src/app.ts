import { json } from "body-parser";
import { UserController } from "./controllers/UserController";
import express from "express";

const app = express();
app.use(json());

app.post("/users", UserController.createUser);
app.get("/users/:userId", UserController.getUser);

export { app };
