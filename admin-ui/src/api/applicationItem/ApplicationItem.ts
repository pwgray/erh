export type ApplicationItem = {
  applicationId: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  isDeleted: boolean | null;
  itemId: string | null;
  name: string | null;
  parentId: string | null;
  sourceSystemId: string | null;
  sourceSystemParentId: string | null;
  updatedAt: Date;
  versionId: string | null;
};
