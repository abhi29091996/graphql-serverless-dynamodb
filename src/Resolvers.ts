import { db } from "./config/db.config";
import dotenv from 'dotenv';

dotenv.config();

export const resolvers = {
  Query: {
    getAlarmsForTriaging: async () => {
      const params: any = {
        TableName: process.env.Table_Name, // Replace with your actual DynamoDB table name
      };

      try {
        const { Items } = await db.scan(params).promise();
        console.log('>>>Items',Items)
        return Items;
      } catch (error) {
        console.error("Error retrieving Alarms:", error);
        throw new Error("Failed to retrieve Alarms");
      }
    },
    getAlarm: async(_:any,arg:any)=>{
      const params: any = {
        TableName: process.env.Table_Name, // Replace with your actual DynamoDB table name
      };
    }
  },
};
// export default Resolvers;
