import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [metros, setMetros] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> Converter metros para centímetros</Text>

      <TextInput style={styles.inputdetexto}
        value={metros}
        onChangeText={(metros) => setMetros(metros)}
        placeholder = "Comprimento em metros aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity style ={styles.botao}
        onPress={converter}
      >
        <Text style={styles.converter}>CONVERTER</Text>
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
      setResultado(<Text style={styles.aviso}>Por favor, insira um valor valido!</Text>);
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
