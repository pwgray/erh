import { LookupWhereInput } from "./LookupWhereInput";
import { LookupOrderByInput } from "./LookupOrderByInput";

export type LookupFindManyArgs = {
  where?: LookupWhereInput;
  orderBy?: Array<LookupOrderByInput>;
  skip?: number;
  take?: number;
};
