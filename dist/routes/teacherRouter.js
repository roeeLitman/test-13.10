"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const teacherRouter = (0, express_1.Router)();
teacherRouter.post("/", userController_1.createUser);
teacherRouter.put("/", userController_1.getUsers);
teacherRouter.get("/:username", userController_1.getUser);
exports.default = teacherRouter;
