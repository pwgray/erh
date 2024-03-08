export type DbQueryConnection = {
  createdAt: Date;
  dbConnectionString: string | null;
  dbProvider: string | null;
  id: string;
  queryString: string | null;
  updatedAt: Date;
};
