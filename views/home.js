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
      <View>
        <Text>LISTA DE EXERCÍCIOS COM HOOKS</Text>
        <Text>001 - Metros para centimetros
        </Text>
        <Button
          title="Ir para 001"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('MetrosCentimetros')}
        />
        <Text>002 - Raio para área
        </Text>
        <Button
          title="Ir para 002"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('RaioArea')}
        />
        <Text>003 - Calculo de área do quadrado
        </Text>
        <Button
          title="Ir para 003"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('AreaQuadrado')}
        />
        <Text>004 - Calculo de salário
        </Text>
        <Button
          title="Ir para 004"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CalculoSalario')}
        />
        <Text>005 - Fahrenheit para celcius
        </Text>
        <Button
          title="Ir para 005"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('FahrenheitCelcius')}
        />
        <Text>006 - Celcius para fahrenheit
        </Text>
        <Button
          title="Ir para 006"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('CelciusFahrenheit')}
        />
        <Text>007 - Programa recuperação
        </Text>
        <Button
          title="Ir para 007"
          style={styles.botao}
          onPress={() => this.props.navigation.navigate('ProgramaRecuperacao')}
        />
        <Text>008 - Programa classificação
        </Text>
        <Button
          title="Ir para 008"
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
    backgroundColor: '#F5FCFF',
  },
  botao: {
    color: 'red',
  },

});
export default Home;