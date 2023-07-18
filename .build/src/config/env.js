"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = exports.secretKey = exports.accessKey = exports.region = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.region = process.env.REGION;
exports.accessKey = process.env.ACCESS_KEY;
exports.secretKey = process.env.SECRET_ACCESS_KEY;
exports.table = process.env.DYNAMODB_TABLE;
