import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const VersionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ClonedFromId" source="clonedFromId" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="GoActiveDate" source="goActiveDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <TextField label="Name" source="name" />
        <TextField label="SortOrder" source="sortOrder" />
        <TextField label="StatusId" source="statusId" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="WasSynchRun" source="wasSynchRun" />
      </SimpleShowLayout>
    </Show>
  );
};
