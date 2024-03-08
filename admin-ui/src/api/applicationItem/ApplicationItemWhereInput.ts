import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ApplicationItemWhereInput = {
  applicationId?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isDeleted?: BooleanNullableFilter;
  itemId?: StringNullableFilter;
  name?: StringNullableFilter;
  parentId?: StringNullableFilter;
  sourceSystemId?: StringNullableFilter;
  sourceSystemParentId?: StringNullableFilter;
  versionId?: StringNullableFilter;
};
