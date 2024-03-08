import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ApplicationItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
