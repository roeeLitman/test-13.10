"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherRouter = (0, express_1.Router)();
// create teacher
teacherRouter.post("/", () => { });
// add score to student
teacherRouter.put("/", () => { });
// get all ainformtion
teacherRouter.get("/", () => { });
// update score
teacherRouter.patch("/:student/:test", () => { });
// קח ממוצע
teacherRouter.get("/average", () => { });
//get 1 score
teacherRouter.get("/:student/:test", () => { });
exports.default = teacherRouter;
