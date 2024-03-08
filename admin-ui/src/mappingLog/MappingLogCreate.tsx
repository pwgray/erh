import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MappingLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ApplicationId" source="applicationId" />
        <NumberInput
          step={1}
          label="ApplicationMappedRecordCount"
          source="applicationMappedRecordCount"
        />
        <NumberInput
          step={1}
          label="ApplicationRecordCount"
          source="applicationRecordCount"
        />
        <NumberInput
          step={1}
          label="ApplicationUnmappedRecordCount"
          source="applicationUnmappedRecordCount"
        />
        <TextInput
          label="DeletedMappingsRecordCount"
          source="deletedMappingsRecordCount"
        />
        <NumberInput
          step={1}
          label="MappedRecordCount"
          source="mappedRecordCount"
        />
        <NumberInput
          step={1}
          label="NewMappingRecordCount"
          source="newMappingRecordCount"
        />
        <NumberInput step={1} label="RecordCount" source="recordCount" />
        <TextInput label="StatusId" source="statusId" />
        <NumberInput
          step={1}
          label="UnmappedRecordCount"
          source="unmappedRecordCount"
        />
        <TextInput label="VersionId" source="versionId" />
      </SimpleForm>
    </Create>
  );
};
