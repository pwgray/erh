export type Erh = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  isDeleted: boolean | null;
  level1Id: string | null;
  level1VersionId: string | null;
  name: string;
  parentId: string | null;
  parentVersionId: string | null;
  updatedAt: Date;
  versionId: string | null;
};
