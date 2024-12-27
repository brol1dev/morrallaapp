import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExpenseTracker() {
  const [input, setInput] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  // Example messages to show the UI
  const messages = [
    {
      id: 1,
      role: "user",
      content: "I spent $25 on lunch today at McDonald's",
    },
    {
      id: 2,
      role: "assistant",
      content: "I've recorded your expense:\nAmount: $25\nCategory: Food\nMerchant: McDonald's\nDate: Today",
      expense: {
        amount: 25,
        category: "Food",
        merchant: "McDonald's",
        date: new Date(),
      },
    },
    {
      id: 3,
      role: "user", 
      content: "How much have I spent on food this month?",
    },
    {
      id: 4,
      role: "assistant",
      content: "You've spent $145 on food this month. Here's the breakdown:\n- McDonald's: $25\n- Grocery Store: $85\n- Restaurants: $35",
      summary: {
        total: 145,
        breakdown: [
          { merchant: "McDonald's", amount: 25 },
          { merchant: "Grocery Store", amount: 85 },
          { merchant: "Restaurants", amount: 35 },
        ],
      },
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ maxWidth: 640, marginHorizontal: 'auto', gap: 16 }}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={{
                flexDirection: 'row',
                gap: 12,
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              {message.role === 'assistant' && (
                <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#e2e8f0', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 16 }}>🤖</Text>
                </View>
              )}
              <View
                style={{
                  padding: 12,
                  maxWidth: '85%',
                  backgroundColor: message.role === 'user' ? '#3b82f6' : '#e2e8f0',
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: message.role === 'user' ? '#fff' : '#1f2937' }}>{message.content}</Text>
                {message.expense && (
                  <View style={{ marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <Text style={{ fontSize: 12, opacity: 0.8, color: message.role === 'user' ? '#fff' : '#1f2937' }}>
                      Added to expenses
                    </Text>
                  </View>
                )}
                {message.summary && (
                  <View style={{ marginTop: 8, paddingTop: 8, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <Text style={{ fontSize: 12, opacity: 0.8, color: '#1f2937' }}>
                      Monthly Summary
                    </Text>
                  </View>
                )}
              </View>
              {message.role === 'user' && (
                <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#3b82f6', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff' }}>U</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={{ padding: 16, borderTopWidth: 1, backgroundColor: '#fff' }}>
          <View style={{ maxWidth: 640, marginHorizontal: 'auto', flexDirection: 'row', gap: 8 }}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Enter your expense or ask a question..."
              style={{ minHeight: 48, flex: 1, padding: 12, borderRadius: 4, backgroundColor: '#f3f4f6' }}
              multiline
            />
            <TouchableOpacity
              style={{ padding: 12, borderRadius: 4, backgroundColor: '#3b82f6', opacity: input ? 1 : 0.5 }}
              disabled={!input}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>↑</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 8, fontSize: 12, textAlign: 'center', color: '#6b7280' }}>
            Try: &quot;I spent $30 on groceries&quot; or &quot;Show my expenses for this week&quot;
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
