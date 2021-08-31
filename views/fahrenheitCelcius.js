import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Fahrenheit para celsius</Text>

      <TextInput style={styles.inputdetexto}
        value={fahrenheit}
        onChangeText={(fahrenheit) => setFahrenheit(fahrenheit)}
        placeholder="Temperatura °F aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity style ={styles.botao}
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
