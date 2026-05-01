// screens/04-TextInputBasic.jsx
// Topic: TextInput (basic)
// TextInput is controlled by state — same pattern as React on the web.

import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function TextInputBasic() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Enter your name"
        autoCapitalize="words"
      />
      <Text style={styles.output}>Hello {name === '' ? 'Stranger' : name} !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 24,
  },
  output: {
    fontSize: 22,
    color: '#4a90d9',
    fontWeight: 'bold',
  },
});
