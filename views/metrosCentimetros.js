import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [metros, setMetros] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Converter metros para centimetros</Text>

      <TextInput
        value={metros}
        onChangeText={(metros) => setMetros(metros)}
        placeholder="Metros aqui"
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
    var centimetros = metros * 100;

    if (metros != 0 && metros > 0) {
      if (metros > 1) setResultado(metros + " metros são " + centimetros + " centimetros.");
      else setResultado(metros + " metro é " + centimetros + " centimetros.");
    }
    else{
      setResultado("Por favor, insira um valor valido!");
    }
    setMetros('');
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
