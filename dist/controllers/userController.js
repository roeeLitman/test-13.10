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
exports.getUser = exports.addTestToStudentInDb = exports.createTeachr = void 0;
const teacherService_1 = require("../services/teacherService");
//create new teacher
const createTeachr = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield (0, teacherService_1.createTeachrInDb)(req.body);
        res.status(teacher.status).json(teacher);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.createTeachr = createTeachr;
//add score to student
const addTestToStudentInDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const test = yield (0, exports.addTestToStudentInDb)(req.params.id, req.body);
        res.status(test.status).json(test);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.addTestToStudentInDb = addTestToStudentInDb;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getUser = getUser;
// Optionally, add DELETE and EDIT functions
