import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type LookupWhereInput = {
  altValue1?: StringNullableFilter;
  altValue2?: StringNullableFilter;
  category?: StringNullableFilter;
  context?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isDeleted?: BooleanNullableFilter;
  isEditableByTechAdminOnly?: BooleanNullableFilter;
  isViewableByTechAdminOnly?: BooleanNullableFilter;
  parentId?: StringNullableFilter;
  sortOrder?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  value?: StringNullableFilter;
};
