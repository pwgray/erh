import { SortOrder } from "../../util/SortOrder";

export type MappingLogOrderByInput = {
  applicationId?: SortOrder;
  applicationMappedRecordCount?: SortOrder;
  applicationRecordCount?: SortOrder;
  applicationUnmappedRecordCount?: SortOrder;
  createdAt?: SortOrder;
  deletedMappingsRecordCount?: SortOrder;
  id?: SortOrder;
  mappedRecordCount?: SortOrder;
  newMappingRecordCount?: SortOrder;
  recordCount?: SortOrder;
  statusId?: SortOrder;
  unmappedRecordCount?: SortOrder;
  updatedAt?: SortOrder;
  versionId?: SortOrder;
};
