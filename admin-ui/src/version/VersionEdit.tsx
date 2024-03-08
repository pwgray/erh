import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const VersionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClonedFromId" source="clonedFromId" />
        <TextInput label="Comment" source="comment" />
        <DateTimeInput label="GoActiveDate" source="goActiveDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="SortOrder" source="sortOrder" />
        <TextInput label="StatusId" source="statusId" />
        <BooleanInput label="WasSynchRun" source="wasSynchRun" />
      </SimpleForm>
    </Edit>
  );
};
