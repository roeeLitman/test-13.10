"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const studentRouter = (0, express_1.Router)();
studentRouter.post("/:id", studentController_1.createstudent);
// studentRouter.get("/score/:id", getPosts);
exports.default = studentRouter;
