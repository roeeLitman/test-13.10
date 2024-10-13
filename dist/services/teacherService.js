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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeachrInDb = void 0;
const role_1 = require("../type/enums/role");
const userModel_1 = __importDefault(require("../type/models/userModel"));
const createTeachrInDb = (teacher) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create user with role of teacher
        const newTeacher = new userModel_1.default(teacher);
        newTeacher.role = role_1.role.teacher;
        newTeacher.students = [];
        newTeacher.TestArray = [];
        //save new teacher
        const userFromDb = yield newTeacher.save();
        return {
            err: false,
            status: 201,
            data: userFromDb
        };
    }
    catch (err) {
        console.log(err);
        return {
            err: false,
            status: 201,
            data: err,
            mge: "not save teachr"
        };
    }
});
exports.createTeachrInDb = createTeachrInDb;
