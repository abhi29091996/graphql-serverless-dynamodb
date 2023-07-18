import { gql } from "graphql-tag"; //will create a schema
export const typeDefs = gql`
type Alarm {
    chillersInAlarm: String
    chillersRunning: Int
    lastAlarmTime: String
    siteAddress: String
    siteId: String
    siteName: String
    totalChillers: String
    totalCriticalAlarms: String
    totalHighRiskAlarms: String
    criteria: String
  }
  type Query {
    getAlarmsForTriaging: [Alarm]
    getAlarm(siteID: String): Alarm
  }
`;
