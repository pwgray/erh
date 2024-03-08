import { SortOrder } from "../../util/SortOrder";

export type ErhOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  level1Id?: SortOrder;
  level1VersionId?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  parentVersionId?: SortOrder;
  updatedAt?: SortOrder;
  versionId?: SortOrder;
};
