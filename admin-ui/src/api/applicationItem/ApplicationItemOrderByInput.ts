import { SortOrder } from "../../util/SortOrder";

export type ApplicationItemOrderByInput = {
  applicationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  itemId?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  sourceSystemId?: SortOrder;
  sourceSystemParentId?: SortOrder;
  updatedAt?: SortOrder;
  versionId?: SortOrder;
};
