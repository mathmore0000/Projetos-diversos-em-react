import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [raio, setRaio] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Converter raio para área</Text>

      <TextInput style={styles.inputdetexto}
        value={raio}
        onChangeText={(raio) => setRaio(raio)}
        placeholder="Raio aqui (em cm)"
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
    var area = Math.pow(raio, 2) * 3.14;

    if (area != 0 && area > 0) {
      setResultado("Um circulo com raio " + raio + " tem " + area + "cm² de area.");
    }
    else{
      setResultado(<Text style={styles.aviso}>Por favor, insira um valor valido!</Text>);
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
