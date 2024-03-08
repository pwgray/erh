import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const LookupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AltValue1" source="altValue1" />
        <TextInput label="AltValue2" source="altValue2" />
        <TextInput label="Category" source="category" />
        <TextInput label="Context" source="context" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <BooleanInput
          label="IsEditableByTechAdminOnly"
          source="isEditableByTechAdminOnly"
        />
        <BooleanInput
          label="IsViewableByTechAdminOnly"
          source="isViewableByTechAdminOnly"
        />
        <TextInput label="ParentId" source="parentId" />
        <TextInput label="SortOrder" source="sortOrder" />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
