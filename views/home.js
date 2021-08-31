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
      <View style={styles.fundo}>
        <Text style={styles.tituloprincipal}>LISTA DE EXERCÍCIOS COM HOOKS</Text>
        <Text style={styles.titulos}>1- METROS PARA CENTÍMETROS
        </Text>
        <Button
          title="Ir para aplicativo 1"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('MetrosCentimetros')}
        />
        <Text style={styles.titulos}>2- RAIO PARA ÁREA
        </Text>
        <Button
          title="Ir para aplicativo 2"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('RaioArea')}
        />
        <Text style={styles.titulos}>3- CALCULO DE ÁREA DO QUADRADO
        </Text>
        <Button
          title="Ir para aplicativo 3"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('AreaQuadrado')}
        />
        <Text style={styles.titulos}>4- CALCULO DE SALÁRIO
        </Text>
        <Button
          title="Ir para aplicativo 4"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CalculoSalario')}
        />
        <Text style={styles.titulos}>5- FAHRENHEIT PARA CELCIUS
        </Text>
        <Button
          title="Ir para aplicativo 5"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('FahrenheitCelcius')}
        />
        <Text style={styles.titulos}>6- CELCIUS PARA FAHRENHEIT
        </Text>
        <Button
          title="Ir para aplicativo 6"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CelciusFahrenheit')}
        />
        <Text style={styles.titulos}>7- PROGRAMA RECUPERAÇÃO
        </Text>
        <Button
          title="Ir para aplicativo 7"
          
          onPress={() => this.props.navigation.navigate('ProgramaRecuperacao')}
        />
        <Text style={styles.titulos}>8- PROGRAMA CLASSIFICAÇÃO
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
    alignItems: 'center',
    backgroundColor: '#F5FC00',
  },
  botao: {
    
  },
  titulos:{ 
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  
  },
  tituloprincipal:{ 
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: '#F90000',
    fontStyle: 'italic',
    fontWeight: 'bold',


  },
  fundo: { 
    
  },

});
export default Home;