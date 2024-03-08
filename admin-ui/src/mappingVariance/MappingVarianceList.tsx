import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MappingVarianceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MappingVariances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ApplicationERHId" source="applicationErhId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ERHId" source="erhId" />
        <TextField label="ID" source="id" />
        <TextField label="MappingLogId" source="mappingLogId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VarianceTypeId" source="varianceTypeId" />
        <TextField label="VersionId" source="versionId" />
      </Datagrid>
    </List>
  );
};
