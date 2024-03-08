import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MappingVarianceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ApplicationERHId" source="applicationErhId" />
        <TextInput label="ERHId" source="erhId" />
        <TextInput label="MappingLogId" source="mappingLogId" />
        <TextInput label="VarianceTypeId" source="varianceTypeId" />
        <TextInput label="VersionId" source="versionId" />
      </SimpleForm>
    </Create>
  );
};
