import { useRouter } from "expo-router";
import { ExpenseForm } from "./components/ExpenseForm";
import { Expense } from "./models/Expense";

export default function ExpenseFormScreen() {
  const router = useRouter();

  const handleSubmit = (expense: Expense) => {
    // TODO: Save expense
    router.back();
  };

  return <ExpenseForm onSubmit={handleSubmit} />;
}
