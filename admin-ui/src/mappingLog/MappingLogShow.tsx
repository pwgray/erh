import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MappingLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
