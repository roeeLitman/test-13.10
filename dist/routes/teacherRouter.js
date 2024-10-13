"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const VerifyTeachr_1 = __importDefault(require("../middleware/VerifyTeachr"));
const teacherRouter = (0, express_1.Router)();
// create teacher
teacherRouter.post("/", userController_1.createTeachr);
// add score to student
teacherRouter.put("/:id", VerifyTeachr_1.default, userController_1.addTestToStudent);
// get all ainformtion
teacherRouter.get("/", () => { });
// update score
teacherRouter.patch("/:student/:test", () => { });
// קח ממוצע
teacherRouter.get("/average", () => { });
//get 1 score
teacherRouter.get("/:student/:test", () => { });
exports.default = teacherRouter;
