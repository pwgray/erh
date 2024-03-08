import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DbQueryConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="DBConnectionString" source="dbConnectionString" />
        <TextInput label="DBProvider" source="dbProvider" />
        <TextInput label="QueryString" source="queryString" />
      </SimpleForm>
    </Edit>
  );
};
