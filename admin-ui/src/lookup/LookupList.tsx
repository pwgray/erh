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

export const LookupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lookups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
