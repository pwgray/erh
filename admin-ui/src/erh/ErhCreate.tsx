import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ErhCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <TextInput label="Level1Id" source="level1Id" />
        <TextInput label="Level1VersionId" source="level1VersionId" />
        <TextInput label="Name" source="name" />
        <TextInput label="ParentId" source="parentId" />
        <TextInput label="ParentVersionId" source="parentVersionId" />
        <TextInput label="VersionId" source="versionId" />
      </SimpleForm>
    </Create>
  );
};
