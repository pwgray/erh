import { Lookup as TLookup } from "../api/lookup/Lookup";

export const LOOKUP_TITLE_FIELD = "altValue1";

export const LookupTitle = (record: TLookup): string => {
  return record.altValue1?.toString() || String(record.id);
};
