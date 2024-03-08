import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const VersionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Versions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
