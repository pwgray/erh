import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const LookupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AltValue1" source="altValue1" />
        <TextField label="AltValue2" source="altValue2" />
        <TextField label="Category" source="category" />
        <TextField label="Context" source="context" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDeleted" source="isDeleted" />
        <BooleanField
          label="IsEditableByTechAdminOnly"
          source="isEditableByTechAdminOnly"
        />
        <BooleanField
          label="IsViewableByTechAdminOnly"
          source="isViewableByTechAdminOnly"
        />
        <TextField label="ParentId" source="parentId" />
        <TextField label="SortOrder" source="sortOrder" />
        <TextField label="StartDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
