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
exports.createLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../type/models/userModel"));
const createLogin = (login) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFromDb = yield userModel_1.default.findOne({
            name: login.name,
            password: login.password,
        });
        if (!userFromDb) {
            return {
                err: true,
                status: 201,
                mge: "not found User",
            };
        }
        //delete pasword from user
        const userForToken = Object.assign(Object.assign({}, userFromDb), { id: "" });
        const token = yield jsonwebtoken_1.default.sign({ userForToken }, process.env.TOKEN_SECRET, { expiresIn: "10m" });
        return {
            err: false,
            status: 201,
            mge: "not found User",
            data: token
        };
    }
    catch (err) {
        console.log(err);
        return {
            err: false,
            status: 201,
            data: err,
        };
    }
});
exports.createLogin = createLogin;
