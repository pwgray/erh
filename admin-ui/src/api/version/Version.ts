export type Version = {
  clonedFromId: string | null;
  comment: string | null;
  createdAt: Date;
  goActiveDate: Date | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  sortOrder: number | null;
  statusId: string | null;
  updatedAt: Date;
  wasSynchRun: boolean | null;
};
