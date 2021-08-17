import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Fahrenheit para celsius</Text>

      <TextInput
        value={fahrenheit}
        onChangeText={(fahrenheit) => setFahrenheit(fahrenheit)}
        placeholder="Graus fahrenheit aqui"
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
    var celsius = 5 * (fahrenheit - 32) / 9;

    setResultado(fahrenheit + " graus fahrenheit é igual à " + celsius + " graus celsius");
    setFahrenheit('');
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
