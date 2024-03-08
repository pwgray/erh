import { ErhWhereInput } from "./ErhWhereInput";
import { ErhOrderByInput } from "./ErhOrderByInput";

export type ErhFindManyArgs = {
  where?: ErhWhereInput;
  orderBy?: Array<ErhOrderByInput>;
  skip?: number;
  take?: number;
};
