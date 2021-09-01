import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tituloprincipal}>Lista de exercícios com hooks</Text>
        <Text style={styles.titulos}>1- Metros para centímetros
        </Text>
        <Button
          title="Ir para aplicativo 1 "
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('MetrosCentimetros')}
        />
        <Text style={styles.titulos}>2- Raio para área
        </Text>
        <Button
          title="Ir para aplicativo 2"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('RaioArea')}
        />
        <Text style={styles.titulos}>3- Calculando área do quadrado
        </Text>
        <Button
          title="Ir para aplicativo 3"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('AreaQuadrado')}
        />
        <Text style={styles.titulos}>4- Calculo de salário
        </Text>
        <Button
          title="Ir para aplicativo 4"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CalculoSalario')}
        />
        <Text style={styles.titulos}>5- Conversão °F para °C
        </Text>
        <Button
          title="Ir para aplicativo 5"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('FahrenheitCelcius')}
        />
        <Text style={styles.titulos}>6- Conversão °C para °F
        </Text>

        <Button
          title="Ir para aplicativo 6"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CelciusFahrenheit')}
        />
        <Text style={styles.titulos}>7- Programa de recuperação
        </Text>
        <Button
          title="Ir para aplicativo 7"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('ProgramaRecuperacao')}
        />
        <Text style={styles.titulos}>8- Classificação através de notas
        </Text>
        <Button 
          title="Ir para aplicativo 8"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('ProgramaClassificacao')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  botao: {
    marginBottom: 10,
    width: '20%'
  },
  titulos:{ 
  fontSize: 15,
  marginTop: 10,
  marginBottom: 5,
  
  },
  tituloprincipal:{ 
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    color: '#F90000',
    fontStyle: 'italic',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
    elevation: 2,

  },
  fundo: { 
    
  },

});
export default Home;