import { ApplicationItem as TApplicationItem } from "../api/applicationItem/ApplicationItem";

export const APPLICATIONITEM_TITLE_FIELD = "name";

export const ApplicationItemTitle = (record: TApplicationItem): string => {
  return record.name?.toString() || String(record.id);
};
