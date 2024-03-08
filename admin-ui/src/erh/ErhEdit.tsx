import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ErhEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
