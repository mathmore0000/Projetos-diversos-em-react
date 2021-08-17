import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [raio, setRaio] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Converter raio para área</Text>

      <TextInput
        value={raio}
        onChangeText={(raio) => setRaio(raio)}
        placeholder="Raio aqui (em cm)"
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
    var area = Math.pow(raio, 2) * 3.14;

    if (area != 0 && area > 0) {
      setResultado("Um circulo com raio " + raio + " tem " + area + "cm² de area.");
    }
    else{
      setResultado("Por favor, insira um valor valido!");
    }
    setRaio('');
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
