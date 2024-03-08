import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MappingVarianceWhereInput = {
  applicationErhId?: StringNullableFilter;
  erhId?: StringNullableFilter;
  id?: StringFilter;
  mappingLogId?: StringNullableFilter;
  varianceTypeId?: StringNullableFilter;
  versionId?: StringNullableFilter;
};
