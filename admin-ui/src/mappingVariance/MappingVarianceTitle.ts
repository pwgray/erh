import { MappingVariance as TMappingVariance } from "../api/mappingVariance/MappingVariance";

export const MAPPINGVARIANCE_TITLE_FIELD = "applicationErhId";

export const MappingVarianceTitle = (record: TMappingVariance): string => {
  return record.applicationErhId?.toString() || String(record.id);
};
