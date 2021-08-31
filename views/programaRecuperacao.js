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

      <Text style={styles.titulo}>{'Calcular nota ' + msgPrincipal}</Text>

      <TextInput style={styles.inputdetexto}
        value={n1}
        onChangeText={(n1) => setN1(n1)}
        placeholder="Nota 1 aqui"
        keyboardType="numeric"
      />

      <TextInput style={styles.inputdetexto}
        value={n2}
        onChangeText={(n2) => setN2(n2)}
        placeholder="Nota 2 aqui"
        keyboardType="numeric"
      />

      <TextInput style={styles.inputdetexto}
        value={n3}
        onChangeText={(n3) => setN3(n3)}
        placeholder="Nota 3 aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao}
        onPress={verificar}
      >
        <Text style={{ color: 'black' }}>Calcular</Text>
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
          setMsgPrincipal("");
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
    }
    else {
      setResultado(<Text style={styles.aviso}>Por favor, insira um valor valido!</Text>);
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
