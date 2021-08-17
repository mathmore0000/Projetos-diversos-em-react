import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [resultado, setResultado] = useState('')
  const [cor, setCor] = useState('');
  const estilo = {
    color: cor
  };

  return (
    <View style={styles.container}>

      <Text>{'Calcular pontos'}</Text>

      <TextInput
        value={n1}
        onChangeText={(n1) => setN1(n1)}
        placeholder="Nota 1 aqui"
        keyboardType="numeric"
      />

      <TextInput
        value={n2}
        onChangeText={(n2) => setN2(n2)}
        placeholder="Nota 2 aqui"
        keyboardType="numeric"
      />

      <TextInput
        value={n3}
        onChangeText={(n3) => setN3(n3)}
        placeholder="Nota 3 aqui"
        keyboardType="numeric"
      />

      <TextInput
        value={n4}
        onChangeText={(n4) => setN4(n4)}
        placeholder="Nota 4 aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={verificar}
      >
        <Text style={{ color: 'black' }}>Converter</Text>
      </TouchableOpacity>

      <Text style={estilo}>{resultado}</Text>

      <StatusBar style="auto" />
    </View>
  );

  function verificar() {
    if (n1 != '' && n2 != '' && n3 != '' && n4 != '' && n1 >= 0 && n1 <= 25 && n2 >= 0 && n2 <= 25 && n3 >= 0 && n3 <= 25 && n4 >= 0 && n4 <= 25) {
      var classificacaoFinal = n1 * 1 + n2 * 1 + n3 * 1  + n4 * 1;
      if (classificacaoFinal >= 0 && classificacaoFinal < 31) {
        setResultado("REGULAR");
        setCor('red');
      }
      else if (classificacaoFinal > 30 && classificacaoFinal < 61) {
        setResultado("BOM");
        setCor('orange');
      }
      else if (classificacaoFinal > 60 && classificacaoFinal < 91) {
        setResultado("MUITO BOM");
        setCor('yellow');
      }
      else if (classificacaoFinal > 90 && classificacaoFinal < 101) {
        setResultado("ÓTIMO");
        setCor('green');
      }
    }
    else {
      setResultado("Pontuação inválida");
      setCor('black');
    }
    setN1('');
    setN2('');
    setN3('');
    setN4('');
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
