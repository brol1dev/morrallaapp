import { useRouter } from 'expo-router';
import { ExpenseForm } from '../src/components/ExpenseForm';
import { Expense } from '../src/models/Expense';

export default function ExpenseFormScreen() {
  const router = useRouter();

  const handleSubmit = (expense: Expense) => {
    // TODO: Save expense
    router.back();
  };

  return <ExpenseForm onSubmit={handleSubmit} />;
} 