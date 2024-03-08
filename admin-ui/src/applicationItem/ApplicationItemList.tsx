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

export const ApplicationItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
