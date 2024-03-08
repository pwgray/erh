import { DbQueryConnectionWhereInput } from "./DbQueryConnectionWhereInput";
import { DbQueryConnectionOrderByInput } from "./DbQueryConnectionOrderByInput";

export type DbQueryConnectionFindManyArgs = {
  where?: DbQueryConnectionWhereInput;
  orderBy?: Array<DbQueryConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
