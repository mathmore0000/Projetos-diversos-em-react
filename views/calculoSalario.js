import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [salarioPHora, setSalarioPHora] = useState('');
  const [qtdHorasTrabalhadas, setQtdHorasTrabalhadas] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calcular salário</Text>

      <TextInput style={styles.inputdetexto}
        value={salarioPHora}
        onChangeText={(salarioPHora) => setSalarioPHora(salarioPHora)}
        placeholder="Salário por hora aqui"
        keyboardType="numeric"
      />

      <TextInput  style={styles.inputdetexto}
        value={qtdHorasTrabalhadas}
        onChangeText={(qtdHorasTrabalhadas) => setQtdHorasTrabalhadas(qtdHorasTrabalhadas)}
        placeholder="Horas trabalhadas aqui"
        keyboardType="numeric"
      />

      <TouchableOpacity style ={styles.botao}
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
      setResultado(<Text style={styles.aviso}>Por favor, insira um valor valido!</Text>);
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
