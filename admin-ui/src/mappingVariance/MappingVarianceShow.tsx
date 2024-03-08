import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MappingVarianceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ApplicationERHId" source="applicationErhId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ERHId" source="erhId" />
        <TextField label="ID" source="id" />
        <TextField label="MappingLogId" source="mappingLogId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VarianceTypeId" source="varianceTypeId" />
        <TextField label="VersionId" source="versionId" />
      </SimpleShowLayout>
    </Show>
  );
};
