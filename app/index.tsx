import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function ExpenseListScreen() {
  return (
    <View>
      <Text>Expense List</Text>
      {/* TODO: Render list of expenses */}
      <Link href="/expense-form">Add Expense</Link>
    </View>
  );
}
