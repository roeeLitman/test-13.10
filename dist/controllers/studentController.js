"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.createstudent = void 0;
const studentService_1 = require("../services/studentService");
// Create a new post
const createstudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield (0, studentService_1.createStudent)(req.params.id, req.body);
        res.status(student.status).json(student);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.createstudent = createstudent;
// Delete a post
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deletePost = deletePost;
