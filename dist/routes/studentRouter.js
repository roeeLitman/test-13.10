"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const studentRouter = (0, express_1.Router)();
studentRouter.post("/", postController_1.createPost);
studentRouter.get("/score/:id", postController_1.getPosts);
exports.default = studentRouter;
