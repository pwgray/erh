export type MappingLogCreateInput = {
  applicationId?: string | null;
  applicationMappedRecordCount?: number | null;
  applicationRecordCount?: number | null;
  applicationUnmappedRecordCount?: number | null;
  deletedMappingsRecordCount?: string | null;
  mappedRecordCount?: number | null;
  newMappingRecordCount?: number | null;
  recordCount?: number | null;
  statusId?: string | null;
  unmappedRecordCount?: number | null;
  versionId: string;
};
