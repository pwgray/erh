export type VersionCreateInput = {
  clonedFromId?: string | null;
  comment?: string | null;
  goActiveDate?: Date | null;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  sortOrder?: number | null;
  statusId?: string | null;
  wasSynchRun?: boolean | null;
};
