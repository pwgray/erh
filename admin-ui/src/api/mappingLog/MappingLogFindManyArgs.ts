import { MappingLogWhereInput } from "./MappingLogWhereInput";
import { MappingLogOrderByInput } from "./MappingLogOrderByInput";

export type MappingLogFindManyArgs = {
  where?: MappingLogWhereInput;
  orderBy?: Array<MappingLogOrderByInput>;
  skip?: number;
  take?: number;
};
