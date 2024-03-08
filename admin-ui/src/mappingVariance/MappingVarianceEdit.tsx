import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MappingVarianceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ApplicationERHId" source="applicationErhId" />
        <TextInput label="ERHId" source="erhId" />
        <TextInput label="MappingLogId" source="mappingLogId" />
        <TextInput label="VarianceTypeId" source="varianceTypeId" />
        <TextInput label="VersionId" source="versionId" />
      </SimpleForm>
    </Edit>
  );
};
