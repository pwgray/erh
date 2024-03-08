import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type VersionWhereInput = {
  clonedFromId?: StringNullableFilter;
  comment?: StringNullableFilter;
  goActiveDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isDeleted?: BooleanFilter;
  name?: StringFilter;
  sortOrder?: IntNullableFilter;
  statusId?: StringNullableFilter;
  wasSynchRun?: BooleanNullableFilter;
};
