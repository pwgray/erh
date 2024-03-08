import { Erh as TErh } from "../api/erh/Erh";

export const ERH_TITLE_FIELD = "name";

export const ErhTitle = (record: TErh): string => {
  return record.name?.toString() || String(record.id);
};
