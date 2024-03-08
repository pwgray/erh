import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DbQueryConnectionWhereInput = {
  dbConnectionString?: StringNullableFilter;
  dbProvider?: StringNullableFilter;
  id?: StringFilter;
  queryString?: StringNullableFilter;
};
