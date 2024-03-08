import { ApplicationItemWhereInput } from "./ApplicationItemWhereInput";
import { ApplicationItemOrderByInput } from "./ApplicationItemOrderByInput";

export type ApplicationItemFindManyArgs = {
  where?: ApplicationItemWhereInput;
  orderBy?: Array<ApplicationItemOrderByInput>;
  skip?: number;
  take?: number;
};
