import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ApplicationItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ApplicationId" source="applicationId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <TextField label="ItemId" source="itemId" />
        <TextField label="Name" source="name" />
        <TextField label="ParentId" source="parentId" />
        <TextField label="SourceSystemId" source="sourceSystemId" />
        <TextField label="SourceSystemParentId" source="sourceSystemParentId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VersionId" source="versionId" />
      </SimpleShowLayout>
    </Show>
  );
};
