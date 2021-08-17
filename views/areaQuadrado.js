import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Calcular área do quadrado</Text>

      <TextInput
        value={lado}
        onChangeText={(lado) => setLado(lado)}
        placeholder="Lado do quadrado aqui (em cm)"
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
    var area = Math.pow(lado, 2);

    if (area != 0 && area > 0) {
      setResultado("Um quadrado com com lado " + lado + " tem " + area + "cm² de area.\n O dobro de " + area + " é " + (area * 2));
    }
    else{
      setResultado("Por favor, insira um valor valido!");
    }
    setLado('');
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
