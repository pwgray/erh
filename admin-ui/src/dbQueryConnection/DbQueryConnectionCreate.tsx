import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DbQueryConnectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="DBConnectionString" source="dbConnectionString" />
        <TextInput label="DBProvider" source="dbProvider" />
        <TextInput label="QueryString" source="queryString" />
      </SimpleForm>
    </Create>
  );
};
