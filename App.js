/*
* @bainloko
* DDM II
* 23/02/2022, 02/03/2022
*/

import * as React from 'react';
import { StyleSheet, Text, Button, View, AppRegistry } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as ExpoSpeech from './src/ExpoSpeech';
import * as FlatList from './src/FlatList';
import * as IMC from './src/IMC';
import * as OperacoesMatematicas from './src/OperacoesMatematicas';

function HomeScreen({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('Operações Matemáticas')}
          title="Ir para as Operações Matemáticas"
        />
      </View>

      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('Speech')}
          title="Ir para o Speech"
        />
      </View>

      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('IMC')}
          title="Ir para o IMC"
        />
      </View>
      
      <View style={meuEstilo.botaoExemplo}>
        <Button
          onPress={() => navigation.navigate('FlatList')}
          title="Ir para o FlatList"
        />
      </View>
    </View>
  );
}

function OperacoesMatematicasScreen({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <OperacoesMatematicas.default />
    </View>
  );
}

function SpeechScreen({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <ExpoSpeech.default />
    </View>
  );
}

function IMCScreen({ navigation }) {
  return (
    <View style={meuEstilo.container}>
      <IMC.default />
    </View>
  );
}

function FlatListScreen({ navigation }) {
  return (
    <View>
      <FlatList.default />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={meuEstilo.rodape}><Text style={meuEstilo.fonteExemplo}>Navigation Drawer - Avaliação 1 @bainloko</Text></View> 
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Operações Matemáticas" component={OperacoesMatematicasScreen} />
        <Drawer.Screen name="Speech" component={SpeechScreen} />
        <Drawer.Screen name="IMC" component={IMCScreen} />
        <Drawer.Screen name="FlatList" component={FlatListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const meuEstilo = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoExemplo: {
    marginTop: 10,
    borderRadius: 4,
    elevation: 3,
  },

  fonteExemplo: {
    color: 'black',
    textAlign: 'center',
    marginTop: 2,
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 21,
    letterSpacing: 0.25,
  },

  rodape: {
    marginBottom: -10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('main', () => App);