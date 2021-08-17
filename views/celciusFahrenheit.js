import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Celsius para fahrenheit</Text>

      <TextInput
        value={celsius}
        onChangeText={(celsius) => setCelsius(celsius)}
        placeholder="Graus celcius aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={converter}
      >
        <Text>Converter</Text>
      </TouchableOpacity>

      <Text name>{resultado}</Text>

      <StatusBar style="auto" />
    </View>
  );

  function converter() {
    var fahrenheit = (9 * celsius + 160) / 5

    setResultado(celsius + " graus celsius é igual à " + fahrenheit + " graus fahrenheit");
    setCelsius('');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
