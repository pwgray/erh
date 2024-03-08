import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ErhWhereInput = {
  id?: StringFilter;
  isActive?: BooleanFilter;
  isDeleted?: BooleanNullableFilter;
  level1Id?: StringNullableFilter;
  level1VersionId?: StringNullableFilter;
  name?: StringFilter;
  parentId?: StringNullableFilter;
  parentVersionId?: StringNullableFilter;
  versionId?: StringNullableFilter;
};
