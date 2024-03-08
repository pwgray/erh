import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MappingLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MappingLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ApplicationId" source="applicationId" />
        <TextField
          label="ApplicationMappedRecordCount"
          source="applicationMappedRecordCount"
        />
        <TextField
          label="ApplicationRecordCount"
          source="applicationRecordCount"
        />
        <TextField
          label="ApplicationUnmappedRecordCount"
          source="applicationUnmappedRecordCount"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="DeletedMappingsRecordCount"
          source="deletedMappingsRecordCount"
        />
        <TextField label="ID" source="id" />
        <TextField label="MappedRecordCount" source="mappedRecordCount" />
        <TextField
          label="NewMappingRecordCount"
          source="newMappingRecordCount"
        />
        <TextField label="RecordCount" source="recordCount" />
        <TextField label="StatusId" source="statusId" />
        <TextField label="UnmappedRecordCount" source="unmappedRecordCount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VersionId" source="versionId" />
      </Datagrid>
    </List>
  );
};
