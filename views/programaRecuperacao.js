import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [recuperacao, setRecuperacao] = useState(false);
  const [msgPrincipal, setMsgPrincipal] = useState('');
  const [resultado, setResultado] = useState('')
  const [cor, setCor] = useState('');
  const estilo = {
    color: cor
  };

  return (
    <View style={styles.container}>

      <Text>{'Calcular nota ' + msgPrincipal}</Text>

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
    if (n1 != '' && n2 != '' && n3 != '' && n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10) {
      var notaFinal = (n1 * 1 + n2 * 1 + n3 * 1) / 3;
      if (recuperacao == false) {
        if (notaFinal >= 7) {
          setRecuperacao(false);
          setResultado("APROVADO");
          setCor('green');
        }
        else {
          setMsgPrincipal("da recuperação");
          setRecuperacao(true);
          setResultado("REPROVADO");
          setCor('red');
        }
      }
      else{
        if (notaFinal >= 5) {
          setRecuperacao(false);
          setResultado("APROVADO");
          setCor('green');
        }
        else {
          setMsgPrincipal("Da recuperação");
          setRecuperacao(true);
          setResultado("REPROVADO");
          setCor('red');
        }
      }
    }
    else {
      setResultado("Por favor, insira um valor valido!");
      setCor('black');
    }
    setN1('');
    setN2('');
    setN3('');
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
