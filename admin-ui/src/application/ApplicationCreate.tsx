import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AIT" source="ait" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="ParentApplicationId" source="parentApplicationId" />
      </SimpleForm>
    </Create>
  );
};
