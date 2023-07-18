import AWS from './aws.config';
import dotenv from 'dotenv';
dotenv.config();
 export const db = new AWS.DynamoDB.DocumentClient();
 export const alarmTable = process.env.Table_Name;
