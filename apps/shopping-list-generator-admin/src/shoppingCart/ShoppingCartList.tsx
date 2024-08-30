import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShoppingCartList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ShoppingCarts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedTime" source="createdTime" />
        <TextField label="ID" source="id" />
        <TextField label="Ingredients" source="ingredients" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};