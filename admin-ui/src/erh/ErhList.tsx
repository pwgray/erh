import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ErhList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ERHS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
