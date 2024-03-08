import { SortOrder } from "../../util/SortOrder";

export type VersionOrderByInput = {
  clonedFromId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  goActiveDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  name?: SortOrder;
  sortOrder?: SortOrder;
  statusId?: SortOrder;
  updatedAt?: SortOrder;
  wasSynchRun?: SortOrder;
};
