"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag"); //will create a schema
exports.typeDefs = (0, graphql_tag_1.gql) `
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
