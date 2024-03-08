import { SortOrder } from "../../util/SortOrder";

export type DbQueryConnectionOrderByInput = {
  createdAt?: SortOrder;
  dbConnectionString?: SortOrder;
  dbProvider?: SortOrder;
  id?: SortOrder;
  queryString?: SortOrder;
  updatedAt?: SortOrder;
};
