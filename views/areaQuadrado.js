import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calcular área do quadrado</Text>

      <TextInput style={styles.inputdetexto}
        value={lado}
        onChangeText={(lado) => setLado(lado)}
        placeholder="Lado do quadrado aqui (em cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity style ={styles.botao}
        onPress={converter}
      >
        <Text>CONVERTER</Text>
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
      setResultado(<Text style={styles.aviso}>Por favor, insira um valor valido!</Text>);
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
     width: '66%',
     textAlign:'center',
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
