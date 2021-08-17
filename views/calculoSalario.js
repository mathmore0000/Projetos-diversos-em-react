import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [salarioPHora, setSalarioPHora] = useState('');
  const [qtdHorasTrabalhadas, setQtdHorasTrabalhadas] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text>Calcular salário</Text>

      <TextInput
        value={salarioPHora}
        onChangeText={(salarioPHora) => setSalarioPHora(salarioPHora)}
        placeholder="Salário por hora aqui"
        keyboardType="numeric"
      />

      <TextInput
        value={qtdHorasTrabalhadas}
        onChangeText={(qtdHorasTrabalhadas) => setQtdHorasTrabalhadas(qtdHorasTrabalhadas)}
        placeholder="Horas trabalhadas aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={calcular}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text name>{resultado}</Text>

      <StatusBar style="auto" />
    </View>
  );

  function calcular() {
    var salario = qtdHorasTrabalhadas * salarioPHora;

    if (salario != 0 && salario > 0) {
      setResultado("Trabalhando " + qtdHorasTrabalhadas + " horas por dia com um salario de R$ " + salarioPHora + " por hora você ganha ao mes R$ " + salario);
    }
    else {
      setResultado("Por favor, insira um valor valido!");
    }
    setSalarioPHora('');
    setQtdHorasTrabalhadas('');
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
