import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AIT" source="ait" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="ParentApplicationId" source="parentApplicationId" />
      </SimpleForm>
    </Edit>
  );
};
