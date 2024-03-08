import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ApplicationItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ApplicationId" source="applicationId" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <TextInput label="ItemId" source="itemId" />
        <TextInput label="Name" source="name" />
        <TextInput label="ParentId" source="parentId" />
        <TextInput label="SourceSystemId" source="sourceSystemId" />
        <TextInput label="SourceSystemParentId" source="sourceSystemParentId" />
        <TextInput label="VersionId" source="versionId" />
      </SimpleForm>
    </Create>
  );
};
