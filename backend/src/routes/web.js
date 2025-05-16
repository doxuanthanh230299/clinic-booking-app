import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello");
  });

  router.post("/api/register", userController.register);
  router.post("/api/login", userController.login);

  return app.use("/", router);
};

module.exports = initWebRoutes;
