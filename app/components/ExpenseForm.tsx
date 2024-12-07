import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Expense } from "../models/Expense";

type Props = {
  onSubmit: (expense: Expense) => void;
};

export const ExpenseForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = () => {
    const expense: Expense = {
      id: Math.random().toString(), // TODO: Generate a proper unique ID
      name,
      quantity,
      category,
      date,
      createdAt: new Date(),
      updatedAt: new Date(),
      paymentMethod,
    };
    onSubmit(expense);
  };

  return (
    <View>
      <TextInput
        placeholder="Expense name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(parseFloat(text))}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      {/* TODO: Proper date picker */}
      <TextInput
        placeholder="Payment method"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
