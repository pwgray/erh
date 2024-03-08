import { DbQueryConnection as TDbQueryConnection } from "../api/dbQueryConnection/DbQueryConnection";

export const DBQUERYCONNECTION_TITLE_FIELD = "dbConnectionString";

export const DbQueryConnectionTitle = (record: TDbQueryConnection): string => {
  return record.dbConnectionString?.toString() || String(record.id);
};
