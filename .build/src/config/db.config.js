"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alarmTable = exports.db = void 0;
const aws_config_1 = __importDefault(require("./aws.config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new aws_config_1.default.DynamoDB.DocumentClient();
exports.alarmTable = process.env.Table_Name;
