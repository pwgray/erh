import { SortOrder } from "../../util/SortOrder";

export type LookupOrderByInput = {
  altValue1?: SortOrder;
  altValue2?: SortOrder;
  category?: SortOrder;
  context?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  isEditableByTechAdminOnly?: SortOrder;
  isViewableByTechAdminOnly?: SortOrder;
  parentId?: SortOrder;
  sortOrder?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
