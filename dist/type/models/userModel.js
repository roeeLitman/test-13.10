"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.TestSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.TestSchema = new mongoose_1.Schema({
    create_at: {
        type: Date,
        required: [true, "please enter date"]
    },
    score: {
        type: Number,
        required: [true, "please enter score"]
    }
});
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "please enter name"]
    },
    password: {
        type: String,
        required: [true, "please enter password"]
    },
    email: {
        type: String,
        required: [true, "please enter email"]
    },
    tests: {
        type: [exports.TestSchema],
        required: false
    },
    students: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: false,
        ref: "Users"
    },
    TestArray: {
        type: [Number],
        required: false
    },
    class: {
        type: String
    },
    role: {
        type: String,
        required: [true, "not enter name"]
    }
});
const UserModel = mongoose_1.default.model("User", exports.UserSchema);
exports.default = UserModel;
