import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const ErhShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <TextField label="Level1Id" source="level1Id" />
        <TextField label="Level1VersionId" source="level1VersionId" />
        <TextField label="Name" source="name" />
        <TextField label="ParentId" source="parentId" />
        <TextField label="ParentVersionId" source="parentVersionId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VersionId" source="versionId" />
      </SimpleShowLayout>
    </Show>
  );
};
