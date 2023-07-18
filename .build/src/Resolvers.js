"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_config_1 = require("./config/db.config");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.resolvers = {
    Query: {
        getAlarmsForTriaging: async () => {
            const params = {
                TableName: process.env.Table_Name, // Replace with your actual DynamoDB table name
            };
            try {
                const { Items } = await db_config_1.db.scan(params).promise();
                console.log('>>>Items', Items);
                return Items;
            }
            catch (error) {
                console.error("Error retrieving Alarms:", error);
                throw new Error("Failed to retrieve Alarms");
            }
        },
        getAlarm: async (_, arg) => {
            const params = {
                TableName: process.env.Table_Name, // Replace with your actual DynamoDB table name
            };
        }
    },
};
// export default Resolvers;
