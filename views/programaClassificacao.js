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

      <Text style={styles.titulo}>{'Calcular pontos'}</Text>

      <TextInput style={styles.inputdetexto}
        value={n1}
        onChangeText={(n1) => setN1(n1)}
        placeholder="Insira a primeira nota"
        keyboardType="numeric"
      />

      <TextInput style={styles.inputdetexto}
        value={n2}
        onChangeText={(n2) => setN2(n2)}
        placeholder="Insira a segunda nota"
        keyboardType="numeric"
      />

      <TextInput style={styles.inputdetexto}
        value={n3}
        onChangeText={(n3) => setN3(n3)}
        placeholder="Insira a terceira nota"
        keyboardType="numeric"
      />

      <TextInput style={styles.inputdetexto}
        value={n4}
        onChangeText={(n4) => setN4(n4)}
        placeholder="Insira a quarta nota"
        keyboardType="numeric"
      />

      <TouchableOpacity style ={styles.botao}
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
        setCor('blue');
      }
      else if (classificacaoFinal > 90 && classificacaoFinal < 101) {
        setResultado("ÓTIMO");
        setCor('green');
      }
    }
    else {
      setResultado(<Text style={styles.aviso}>Pontuação inválida!</Text>);
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
  botao: {
    backgroundColor: '#F5FCFF',
    textAlign: 'center',
    alignItems: 'center',
    width: '50%',
    height: '6%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    textAlign:'center',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
 
   },
   titulo:{
     fontSize: 20,
     fontStyle: 'italic',
     textAlign:'center',
     marginBottom: 20,
 
   },
   inputdetexto:{ 
     fontSize: 17,
     borderBottomWidth: 1,
     width: '62%',
     textAlign:'center',
     marginBottom: 5,
     marginTop: 5,
   },
   converter:{ 
     fontSize: 15,
     textAlign: 'center',
     alignItems: 'center',
     fontWeight: 'bold',
     
     
   },
   aviso:{
     fontSize: 15,
     color:'red',
 
   }
});
