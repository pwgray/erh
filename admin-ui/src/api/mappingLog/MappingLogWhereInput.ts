import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MappingLogWhereInput = {
  applicationId?: StringNullableFilter;
  applicationMappedRecordCount?: IntNullableFilter;
  applicationRecordCount?: IntNullableFilter;
  applicationUnmappedRecordCount?: IntNullableFilter;
  deletedMappingsRecordCount?: StringNullableFilter;
  id?: StringFilter;
  mappedRecordCount?: IntNullableFilter;
  newMappingRecordCount?: IntNullableFilter;
  recordCount?: IntNullableFilter;
  statusId?: StringNullableFilter;
  unmappedRecordCount?: IntNullableFilter;
  versionId?: StringFilter;
};
