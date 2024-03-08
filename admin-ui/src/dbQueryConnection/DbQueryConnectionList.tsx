import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DbQueryConnectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DBQueryConnections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="DBConnectionString" source="dbConnectionString" />
        <TextField label="DBProvider" source="dbProvider" />
        <TextField label="ID" source="id" />
        <TextField label="QueryString" source="queryString" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
