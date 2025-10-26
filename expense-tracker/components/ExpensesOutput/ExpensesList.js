import { FlatList, Text } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function renderExpenceItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenceItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
