import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './views/home';
import MetrosCentimetros from './views/metrosCentimetros';
import RaioArea from './views/raioArea';
import AreaQuadrado from './views/areaQuadrado';
import CalculoSalario from './views/calculoSalario';
import FahrenheitCelcius from './views/fahrenheitCelcius';
import CelciusFahrenheit from './views/celciusFahrenheit';
import ProgramaRecuperacao from './views/programaRecuperacao';
import ProgramaClassificacao from './views/programaClassificacao';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    MetrosCentimetros: { screen: MetrosCentimetros },
    RaioArea: { screen: RaioArea },
    AreaQuadrado: { screen: AreaQuadrado },
    CalculoSalario: { screen: CalculoSalario },
    FahrenheitCelcius: { screen: FahrenheitCelcius },
    CelciusFahrenheit: { screen: CelciusFahrenheit },
    ProgramaRecuperacao: { screen: ProgramaRecuperacao },
    ProgramaClassificacao: { screen: ProgramaClassificacao },
  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}