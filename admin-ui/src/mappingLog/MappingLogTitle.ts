import { MappingLog as TMappingLog } from "../api/mappingLog/MappingLog";

export const MAPPINGLOG_TITLE_FIELD = "applicationId";

export const MappingLogTitle = (record: TMappingLog): string => {
  return record.applicationId?.toString() || String(record.id);
};
